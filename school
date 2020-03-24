//Aca primero creo a la mama-clase, School.
class School{
	  constructor(name, level, numberOfStudents) {
	    this._name = name;
	    this._level = level;
	    this._numberOfStudents = numberOfStudents;
	  }
	
	  get name() {
	    return this._name;
	  }
	
	  get level() {
	    return this._level;
	  }   
	
	  get numberOfStudents() {
	    return this._numberOfStudents;
	  }
	
	  set numberOfStudents (numberOfStudents) {
	    return this._numberOfStudents = numberOfStudents;
	  }
	  
	  quickFacts() {
	    return console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
	  }
	
	  static pickSubstituteTeacher(substituteTeachers) {
        const subTeachers = substituteTeachers
        const randomIndex = Math.floor(Math.random() * subTeachers.length);
        return subTeachers[randomIndex];
	  } 
    };	

//Primera clase-hija, Primary.
class PrimarySchool extends School {
	  constructor(name, numberOfStudents, pickupPolicy) {
	    super(name, 'primary', numberOfStudents);
	    this._pickupPolicy = pickupPolicy;
      }
      
      get pickupPolicy() {
	    return this._pickupPolicy;
	  }
	};

//Segunda clase-hija, Middle.
class MiddleSchool extends School {
      constructor(name, numberOfStudents) {
	    super(name, 'middle', numberOfStudents);
	  }
    };

//Tercera clase-hija, High.
class HighSchool extends School {
      constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
        }
        get sportsTeams() {
            return this._sportsTeams;
          }
      };

//Creo una instance de PrimarySchool y pruebo los metodos que cree
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();

//Cargo un array al static method que cree previamente en School.
const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobili']);

//Creo una instance de HighSchool y termino el proyecto
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
