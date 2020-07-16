const Employee = require("./Employee");

class Manager extends Employee{
   
    constructor(email, name, id, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
        return this.officeNumber
    }

   getRole(){
       return "Manager"
   }
}


module.exports = 
Manager