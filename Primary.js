class Primary extends School{
    constructor(name,numberOfStudents, pickupPolicy){
        super(name,'primary',numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy(){
        return this._pickupPolicy;
    }
}

const LorrayneHansburry = new Primary('Lorrayne Hansburry', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
LorrayneHansburry.quickFacts();

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);