const Employee = require("./Employee");

class Intern extends Employee{
   
    constructor(email, name, id, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school
    }

   getRole(){
       return "Intern"
   }
}


module.exports = 
  Intern