module.exports = class Player{
    constructor(name){
        this.name = name;
        
    }
    joinTeam(team){
        this.team = team;
        team.allTeam.push(this);
    }
}