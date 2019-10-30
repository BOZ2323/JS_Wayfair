const Player = require('./player');
const Team = require('./team');
const Chalk = require('./node_modules/chalk');

const jonaLumo = new Player('Jona Lumo');

const allBlacks = new Team("All Blacks");

allBlacks.printTeamMembers();

console.log(allBlacks.name);