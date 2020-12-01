class High  extends School{
    constructor(name,numberOfStudents,  sportsTeams){
        super(name,'High School',numberOfStudents);
        this._sportsTeams = [];
    }

    get sportsTeams(){
        console.log(this._sportsTeams)
    }
}

const alSmith = new High('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams()