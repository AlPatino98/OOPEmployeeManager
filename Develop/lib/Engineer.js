const Employee = require("./Employee");

class Engineer extends Employee{
   
    constructor(email, name, id, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github
    }

   getRole(){
       return "Engineer"
   }
}


module.exports = 
Engineer