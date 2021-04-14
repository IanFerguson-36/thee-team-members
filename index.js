// THIS IS WHERE YOUR MAIN LOGIC WILL LIE

// You would first require ALL of the files and node packages needed
// Engineer, Manager, Intern,

// REQUIRE that page-template.js
// We are receiving that anonymous function
// Giving the name of pageTemplate
const inquirer = require("inquirer");
const manager = require("./lib/Manager");
const pageTemplate = require("./src/page-template.js");
// And now, we can use that pageTemplate as a function, which can ACCEPT a parameter
// pageTemplate(answers_from_inquirer_prompt);
// INDEX FILES ARE CONSIDERED THE ENTRY POINT TO YOUR APPLICATION

// IF THIS IS YOUR ENTRY POINT, YOU MUST DO YOUR INQUIRER HERE

// THIS IS WHERE YOU DO YOUR FS WRITEFILE STUFF

// THE DIST FOLDER IS WHERE THE OUTPUT HTML FILES WILL LAND
function runApp() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
      },
      {
        type: "input",
        name: "managerOfficeNum",
        message: "What is the team manager's office number?",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.managerName,
        answers.managerEmail,
        answers.managerOfficeNum
      );
    });
}
runApp();
