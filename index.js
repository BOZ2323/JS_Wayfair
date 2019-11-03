const Player = require('./player');
const Team = require('./team');
const Chalk = require('./node_modules/chalk');
const Database = require('./database');
const loadedFile = Database.load('team.json');

const allBlacks = Team.create(loadedFile);

const southAfrica = Team.create(loadedFile);

const siyaKolisi = new Player('siya Kolisi');

siyaKolisi.joinTeam(southAfrica)

// const jonaLumo = new Player('Jona Lumo');

// const allBlacks = new Team("All Blacks");

// jonaLumo.joinTeam(allBlacks);

// allBlacks.printTeamMembers();

// console.log(allBlacks.name);

// Database.save('team.json', allBlacks)


console.log(allBlacks.printTeamMembers());

console.log(Chalk.bgRed.bold(loadedFile.name));



