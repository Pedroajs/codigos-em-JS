class School{
    constructor(name,level,numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudentes = numberOfStudents;
    }

    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }

    get numberOfStudents(){
        return this._numberOfStudentes;
    }

    set numberOfStudents(param){
        if(typeof param === 'number'){
            this._numberOfStudentes = param;
        }else{
            console.log('Input inválido. O Input deve ser um número')
        }
    }

    quickFacts(){
        console.log(`
            ${this._name} educates ${this._numberOfStudentes} students at the ${this._level} school level.
        `)
    }

    static pickSubstituteTeacher(substituteTeachers){
        let randomNum = Math.floor(substituteTeachers.length * Math.random());
        
        return substituteTeachers[randomNum];
    }
}