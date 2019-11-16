const Chalk = require('./node_modules/chalk');

module.exports = class Team{
    constructor(name, teamMembers = []){
        this.name = name;
        this.teamMembers = teamMembers;
    }
    printTeamMembers(){
        this.teamMembers.forEach(printName);
    }
}

const printName = player => console.log(Chalk.bgGreen(player.name));