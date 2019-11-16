const Player = require('./player');
const Team = require('./team');
const Chalk = require('./node_modules/chalk');
const Database = require('./database')

const jonaLumo = new Player('Jona Lumo');
const siyaKolisi = new Player('SiyaKolisi');


const allBlacks = new Team("All Blacks");
const southAfrica = new Team("South Africa");

jonaLumo.joinTeam(allBlacks);
siyaKolisi.joinTeam(southAfrica);

allBlacks.printTeamMembers();
southAfrica.printTeamMembers();

Database.save('team.json', southAfrica)
Database.save('team.json', allBlacks)

const loadedFile = Database.load('team.json')


console.log(Chalk.bgRed.bold(loadedFile.name))
// const allBlacks = new Team(loadedFile.name, loadedFile.teamMembers);



