# Chuck Norris API

## Descrição

API para buscar piadas do Chuck Norris e registrar logs das consultas.

## Objetivo

O objetivo deste projeto é demonstrar habilidades técnicas na criação de uma API utilizando TypeScript. A API desenvolvida integra-se com a API do Chuck Norris, registra logs das consultas em um arquivo CSV, permite consultas randômicas ou por texto livre e a leitura dos logs registrados com filtragem por data.

## Configuração e Execução

### Pré-requisitos

- Node.js
- npm (Node Package Manager)

### Passos para Configuração

1. **Clone o repositório**

   git clone https://github.com/annalaura99/projeto-chuck-norris-api.git
   cd projeto-chuck-norris-api

### ### Instruções de Teste

1. **Instalar Dependências**

   npm install

2. **Compilar o Projeto**

   npm run build

3. **Iniciar o Servidor**

   npm start ou yarn dev

4. **Testar as Rotas**

   - **Consulta Randômica**:
     http://localhost:3000/api/jokes/random
   - **Buscar Piadas por Texto**:
     http://localhost:3000/api/jokes/search?q= -> colocar após o igual, o que deseja filtrar por texto
   - **Consultar os Logs**:
     http://localhost:3000/api/jokes/logs?startDate=2024-06-13&endDate=2024-06-14

### ### Rotas Disponíveis

**GET /api/jokes/random**

- Descrição: Retorna uma piada randômica do Chuck Norris.

### ### Resposta de Sucesso

{
"categories": [],
"created_at": "2020-01-05 13:42:20.841843",
"icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id": "-a3E9sHCS9qmXIIqh2VD2Q",
"updated_at": "2020-01-05 13:42:20.841843",
"url": "https://api.chucknorris.io/jokes/-a3E9sHCS9qmXIIqh2VD2Q",
"value": "Chuck Norris' living room is a full-scale replica of the final level of Doom."
}

**GET /api/jokes/search**

- Descrição: Busca piadas que contenham o termo fornecido.
- Parâmetros:
  q (string): Termo de busca.

### ### Resposta de Sucesso

[
{
"categories": [],
"created_at": "2020-01-05 13:42:18.823766",
"icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id": "\_uptxt8mrfsimgnvopym3q",
"updated_at": "2020-01-05 13:42:18.823766",
"url": "https://api.chucknorris.io/jokes/_uptxt8mrfsimgnvopym3q",
"value": "Chuck Norris built a better mousetrap, but the world was too frightened to beat a path to his door."
},
{
"categories": [],
"created_at": "2020-01-05 13:42:19.104863",
"icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id": "bidtt1gdrsallx9ui4tlvw",
"updated_at": "2020-01-05 13:42:19.104863",
"url": "https://api.chucknorris.io/jokes/bidtt1gdrsallx9ui4tlvw",
"value": "Chuck Norris' house has no doors, only walls that he walks through."
},
]

**GET /api/jokes/logs**

- Descrição: Retorna os logs das consultas realizadas, com a opção de filtrar por data.
- Parâmetros: startDate com valor 2024-06-13 e endDate com valor 2024-06-14

### ### Resposta de Sucesso

[
{
"timestamp": "2024-06-13T23:16:50.139Z",
"type": "random",
"query": "",
"result": "Fanboys such as Genwunners are made when Chuck Norris is hungry for the exact part of the brain that accepts opinions."
},
{
"timestamp": "2024-06-13T23:17:09.643Z",
"type": "random",
"query": "",
"result": "Chuck Norris never delivers a 'coup de grace' - that's a queer French term. He just kills you."
},
{
"timestamp": "2024-06-13T23:17:11.483Z",
"type": "random",
"query": "",
"result": "\"We will never know how brave Chuck Norris till we discover something in the universe that Chuck Norris is actually afraid of.\" - Socrates Socrates didn't die a natural death."
},
{
"timestamp": "2024-06-13T23:17:36.375Z",
"type": "random",
"query": "",
"result": "Chuck Norris didn't like this joke, so he deleted it by roundhouse kicking it."
},
{
"timestamp": "2024-06-13T23:18:12.776Z",
"type": "random",
"query": "",
"result": "Chuck Norris once snapped a bears neck after it scratched his jacket."
},
{
"timestamp": "2024-06-13T23:18:22.227Z",
"type": "search",
"query": "door",
"result": "Chuck Norris built a better mousetrap, but the world was too frightened to beat a path to his door.\nChuck Norris' house has no doors, only walls that he walks through.\nCHuck norris can fly a kite indoors\nLittle known fact: Chuck Norris was a massive Doors fan, and for a while used to insist on being called Chuck Norrison. Then he heard that the singer moved to France, then scared him to death in the bathtub.\nChuck Norris is the DEA and you are a meth lab door.\nWhen you knock on death's door, Chuck Norris answers, and then kills you for knocking.\nPeople talk about what a bad ass Chuck Norris is and I just don't get it . I think it's all made up. To me he is just a regular just a minute someone at the the door...\nWhen Chuck Norris moves in next door to you your lawn will die.\nSome kid:CHUCK NORRIS SUCKS!!! *Knock Knock* kids dad: Hang on someones at the door *opens door* Chuck Norris.\nThe Aurora Borealis only occurs on late night evenings after Chuck Norris takes an outdoor shit on the Texas prairie.\nChuck Norris isn't as tuff as everyone says. What was that? It just sounded like someone kicked my door down.\nChuck Norris doesn't take the front door. He takes the front wall as his entrance.\nThe demon in Paranormal Activity disperses powder on his door to see Chuck Norris' footprints\nManual doors open automatically for Chuck Norris.\nChuck Norris can open locked doors. Without a key.\nA door to door salesman interrupted Chuck Norris during his steak dinner. Chuck punched him in the brain.\nIt should go without saying, but it still bears repeating: don't knock on Chuck Norris' door on Halloween.\nThe sign on the door read \"pull to open\". Chuck Norris pushed it open anyway.\nI assure you, the great day of the kicking will occur. By this I mean that actor Chuck Norris will literally pull up in your yard in his Hummer, walk to your front door, wait for you to open it, then kick you in the face before straightening his jacket and calmly driving away. The day is coming.\nThe U.S. Government has come up with a new form of capitol punishment called 'Lethal Ejection'. It's where Chuck Norris throws the death row inmate through the side door of a Boeing 737 at 35,000 feet.\nA Jehovah witness once knocked on Chuck Norris door. Chuck Norris let the Jehovah witness into the house and then roundhouse kicked him out the window. The man tried to sue Chuck Norris for assault but could not prove anything since there was no witnesses.\nChuck Norris personally trained his pet canary for a daily early morning free flight excercise in the great outdoors. It usually returns for breakfast carrying a dead peregrine falcon in it's beak.\nSome people install alarm systems. Others install Chuck Norris door mats. No one has the balls to walk on Chuck Norris\nChuck Norris doesn't use keys, he always kicks the door in.\nThe welcome mat at Chuck Norris' front door cleverly conceals the alligator pit.\nThe ice Age was created when Chuck Norris accidentally left his freezer door open.\nSteven Seagal recently purchased a Chuck Norris voodoo doll. Just as Seagal was about to stab the doll in the foot with a pin, Chuck Norris himself burst through the door. When Seagal arrived at the ER, he had multiple fractures to his jaw, ribs, arms, pelvis and legs, and a note pinned to his chest: \"Don't fuck with Chuck Norris. Or his likeness.\"\nOn days that Chuck Norris is in attendance, the Minister at Chuck Norris' church will only preach his sermon while wearing an Ironman suit. Flack jackets and helmets are available to the congregation at the front door. Children remain safe in the church's underground bunker.\nWhen Chuck Norris comes to an open door, he always closes it so he can then kick it the fuck in.\nPavlov used to shit his pants every time Chuck Norris rang his doorbell.\nTwo Mary Kay salesmen knocked on Chuck Norris' door. They introduced themselves as Ben Dover & Phil McCrakin. They are no longer in business together.\nIf you ever dare to start playing 'Six Degrees Of Chuck Norris', you will hear an ominous knock upon your front door.\nChuck Norris can hit a barn door with a broad's side.\nChuck Norris is a cunt!....hang on theres someone at the door\nChuck Norris' car has homicide doors\na man knocked on Chuck Norris' door and asked for an autograph. Chuck delivered a fatal Round House. A few days later, feeling sorry he walked into his back yard and signed the head of the carcus\nChuck Norris can revolve a wooden door\nChuck Norris took a wrong turn at the zoo and found himself in with Brutus the nasty Silverback Gorilla. Brutus was then seen politely showing Chuck to the exit door.\nChuck Norris knows who the fuck Alice is. She is now living next door to him.\nKnock...Knock. \"Who's there?\" (Door crashes into room, building collapses, mushroom cloud) \"Chuck Norris.\"\nWhen the Mormons knock on Chuck Norris' door, Chuck Norris sends them to heaven.\nChuck Norris can slam revolving doors.\nChuck Norris can draw a picture of him kicking your ass, and send it you you a week in advance - and as soon you open it he will knock on your door, properly kick your ass, and you STILL won't know what the fuck happened.\nChuck Norris was once part of a knock knock joke. The Joke ended abruptly when after the first knock the door blew up killing the man behind it.\nChuck Norris tested the tower 200 now the door has abs\nChuck Norris can talk his way out of a room with no windows or doors\nChuck Norris can slam a revolving door.\nChuck Norris is the last # in pi and that's why nobody has found it, cause you don't find Chuck Norris... he find's... hold on i hear the door bell\n\"I say dont worry about a thing. cause every little thing is gonna be alright...\" till you \"rise this morning with Chuck Norris at your door step... sayin im gonna round house kick you!\"\nChuck Norris can leave the door open at night cause no one messes with Chuck Norris\nChuck Norris can shut a revolving door\nChuck Norris doesnt have to have a no solicating sign on his door. he just pee's around the door and sales men know to leave as fast as they can or they will have 5 sec left to live\nChuck Norris does not kick doors in, they are backing away from him!\nthe grim reaper once was on Chuck Norris' door step. after he knocked, Chuck Norris said \"who is it\" the reaper responded \"death\" Chuck Norris chuckled and replied \"no its not! I am death!\" and proceeded to round house kick the reaper to death"
}
]
