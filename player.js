

module.exports = class Player{
    constructor(name, age, position){
        this.name = name;
        this.age = age;
        this.position = this.position
        
    }
    joinTeam(team){
        this.team = team.name;
        team.teamMembers.push(this);
    }
}