const Player = require('./player');
const Team = require('./team');
const Chalk = require('./node_modules/chalk');
const Database = require('./database');
const loadedFile = Database.load('team.json');

const allBlacks = new Team(loadedFile.name);

// const jonaLumo = new Player('Jona Lumo');

// const allBlacks = new Team("All Blacks");

// jonaLumo.joinTeam(allBlacks);

// allBlacks.printTeamMembers();

// console.log(allBlacks.name);

// Database.save('team.json', allBlacks)


console.log(allBlacks.printTeamMembers());

console.log(Chalk.bgRed.bold(loadedFile.name));



