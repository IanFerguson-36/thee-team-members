const inquirer = require("inquirer");
const manager = require("./lib/Manager");
const employee = require("./lib/Employee");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const pageTemplate = require("./src/page-template.js");
const path = require("path");
const fs = require("fs");
const membersArray = [];
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");
const Engineer = require("./lib/Engineer");

function runApp() {
  function createManager() {
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
        console.log(manager);
        membersArray.push(manager);
      });
  }
  function createEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's id?",
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email?",
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's Github?",
        },
      ])
      .then((answers) => {
        console.log(answers);
        const engineer = new Engineer(
          answers.engineerrName,
          answers.engineerEmail,
          answers.engineerGithub
        );
        console.log(engineer);
        membersArray.push(engineer);
      });
  }
  function createIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern's id?",
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the engineer's email?",
        },
        {
          type: "input",
          name: "internGithub",
          message: "What is the intern's Github?",
        },
      ])
      .then((answers) => {
        console.log(answers);
        const intern = new Intern(
          answers.internName,
          answers.internEmail,
          answers.internGithub
        );
        console.log(intern);
        membersArray.push(intern);
      });
  }
  function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(membersArray), "utf-8");
  }
}
runApp();
