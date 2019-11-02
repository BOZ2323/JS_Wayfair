module.exports = class Player{
    constructor(name){
        this.name = name;
        
    }
    joinTeam(team){
        this.team = team.name;
        team.teamMembers.push(this);
    }
}