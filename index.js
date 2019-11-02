const Player = require('./player');
const Team = require('./team');
const Chalk = require('./node_modules/chalk');
const Database = require('./database')

const jonaLumo = new Player('Jona Lumo');

const allBlacks = new Team("All Blacks");

jonaLumo.joinTeam(allBlacks);

allBlacks.printTeamMembers();

console.log(allBlacks.name);

Database.save('team.json', allBlacks)
const loadedFile = Database.load('team.json')

console.log(Chalk.bgRed.bold(loadedFile.name))



