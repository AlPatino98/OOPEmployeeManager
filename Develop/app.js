const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
//array of questions
        const questions = [
      {
        type: "input",
        name: "role",
        message: "What is the new employee's role?"
      }];  
//manager questions
      const mQuestions =[      
          {
        type: "input",
        name: "name",
        message: "name:"
      },
      {
        type: "input",
        name: "id",
        message: "Id:"
      },
      {
        type: "input",
        name: "email",
        message: "email:"
      },
      {
        type: "input",
        name: "office",
        message: "office number:"
      },
      {
        type: "input",
        name: "continue",
        message: "would you like to add another employee?:"
      }
       ]
// intern questions
    const iQuestions =[      
    {
      type: "input",
      name: "name",
      message: "name:"
    },
    {
      type: "input",
      name: "id",
      message: "Id:"
    },
    {
      type: "input",
      name: "email",
      message: "email:"
    },
    {
      type: "input",
      name: "office",
      message: "office number:"
    },
    {
        type: "input",
        name: "school",
        message: "school:"
    },
    {
        type: "input",
        name: "continue",
        message: "would you like to add another employee?:"
    }
  ]
// engineer questions
  const eQuestions =[      
{
  type: "input",
  name: "name",
  message: "name:"
},
{
  type: "input",
  name: "id",
  message: "Id:"
},
{
  type: "input",
  name: "email",
  message: "email:"
},
{
  type: "input",
  name: "github",
  message: "Github username:"
},
{
  type: "input",
  name: "continue",
  message: "would you like to add another employee?:"
}
]
    
    
function promptUser() {
    inquirer.prompt(questions)
    .then(answer => {
        if (answer.role.toLowerCase() === "manager"){
          inquirer.prompt(mQuestions)
         .then( answer =>{
           if (answer.continue.toLowerCase()=== "yes")
           { promptUser()
            var intern = new Intern(answer.email, answer.name, answer.id, answer.school) 
            employeeAns.push(intern)}
           else {return}
        });
        }else if (answer.role.toLowerCase() === "intern"){
          inquirer.prompt(iQuestions)
          .then( answer =>{
            if (answer.continue.toLowerCase()=== "yes")
            { promptUser()
            var intern = new Intern(answer.email, answer.name, answer.id, answer.school) 
            employeeAns.push(intern)}
            else {return}
        });
        } else if (answer.role.toLowerCase() === "engineer"){
          inquirer.prompt(eQuestions)
          .then( answer =>{
            if (answer.continue.toLowerCase()=== "yes")
            { promptUser()
            var intern = new Intern(answer.email, answer.name, answer.id, answer.school) 
            employeeAns.push(intern)}
            else {return}
        });
        }else {console.log("exit")}
        });
}
// prompt user the questions
promptUser()

const employeeAns= [];



render(employeeAns);
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
