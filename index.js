const Player = require('./player');
const Team = require('./team');
const Chalk = require('./node_modules/chalk');
const Database = require('./database')
const loadedFile = Database.load('team.json');

// const jonaLumo = new Player('Jona Lumo');
// const kieranRead = new Player('Kieran Read');
// const patrickTuipuloto = new Player('Patrick Tuipuloto');
// const samuelWhitelock = new Player('Samuel Whitelock');
// const aaronSmith = new Player('Aaron Smith');
// const siyaKolisi = new Player('SiyaKolisi');



// const allBlacks = new Team("All Blacks");
// const southAfrica = new Team("South Africa");

// jonaLumo.joinTeam(allBlacks);
// siyaKolisi.joinTeam(southAfrica);

// allBlacks.printTeamMembers();
// southAfrica.printTeamMembers();

// Database.save('team.json', southAfrica)


const allBlacks = Team.create(loadedFile);
// kieranRead.joinTeam(allBlacks); 
// patrickTuipuloto.joinTeam(allBlacks); 
// samuelWhitelock.joinTeam(allBlacks); 
// aaronSmith.joinTeam(allBlacks); 
Database.save('team.json', allBlacks)
console.log(Chalk.bgRed.bold(loadedFile.name));
allBlacks.printTeamMembers();



