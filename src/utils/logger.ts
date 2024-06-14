import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';
import { stringify } from 'csv-stringify';

const logsDir = path.resolve(__dirname, '../../logs');
const logsFilePath = path.resolve(logsDir, 'queries.csv');


if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

/**
 * Função para registrar uma consulta no arquivo CSV de logs
 * @param {string} type
 * @param {string} query 
 * @param {string} result 
 */
export const logQuery = async (type: string, query: string, result: string) => {
    const record = {
        timestamp: new Date().toISOString(),
        type,
        query,
        result
    };

    const columns = ['timestamp', 'type', 'query', 'result'];

    const writeLog = (attempt = 1) => {
        stringify([record], { header: !fs.existsSync(logsFilePath), columns, quoted: true }, (err, data) => {
            if (err) {
                console.error('Error writing CSV:', err);
                return;
            }
            try {
                fs.appendFileSync(logsFilePath, data);
            } catch (writeError: any) {
                if (writeError.code === 'EBUSY' && attempt <= 5) {
                    console.warn(`Retrying to write log... Attempt ${attempt}`);
                    setTimeout(() => writeLog(attempt + 1), 100 * attempt); 
                } else {
                    console.error('Error appending to CSV after retries:', writeError);
                }
            }
        });
    };

    writeLog();
};

/**
 * Função para ler e filtrar os logs do arquivo CSV
 * @param {string} startDate 
 * @param {string} endDate 
 * @param {string} startTime 
 * @param {string} endTime 
 * @returns {Promise<any[]>} 
 */
export const readLogs = (startDate?: string, endDate?: string, startTime?: string, endTime?: string): Promise<any[]> => {
    return new Promise<any[]>((resolve, reject) => {
        const logs: any[] = [];
        const start = startDate ? new Date(`${startDate}T${startTime || '00:00:00'}`) : null;
        const end = endDate ? new Date(`${endDate}T${endTime || '23:59:59'}`) : null;

        console.log('Filtering logs from:', start, 'to:', end); 

        if (!fs.existsSync(logsFilePath)) {
            console.error('Log file does not exist:', logsFilePath);
            resolve([]);
            return;
        }

        fs.createReadStream(logsFilePath)
            .pipe(parse({ columns: true, trim: true, skip_empty_lines: true, relax_quotes: true, relax_column_count: true }))
            .on('data', (row) => {
                console.log('Row data:', row);
                try {
                    const logDate = new Date(row['timestamp']);
                    if (isNaN(logDate.getTime())) {
                        throw new Error('Invalid Date');
                    }
                    console.log('Log Date:', logDate); 
                    const isWithinRange =
                        (!start || logDate >= start) &&
                        (!end || logDate <= end);
                    if (isWithinRange) {
                        console.log('Log is within range:', row);
                        logs.push(row);
                    }
                } catch (error: any) {
                    console.error('Error parsing date:', row['timestamp'], error.message);
                }
            })
            .on('end', () => {
                console.log('Logs found:', logs); 
                resolve(logs);
            })
            .on('error', (error) => {
                console.error('Error reading logs:', error); 
                reject(error);
            });
    });
};
