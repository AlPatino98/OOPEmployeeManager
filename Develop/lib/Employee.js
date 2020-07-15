class Employee {
   
    constructor(name, id, email ) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
}
const e = new Employee("Aldo",5,"aldo.patino@example.com")

module.exports = {
    Employee,
    e

};