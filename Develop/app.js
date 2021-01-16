const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var team =[]

var questions = [{
    type: "input",
    message: "What is the employee's name?",
    name: "name"
}, {
    type: "input",
    message: "What is the employee's id?",
    name: "id"
}, {
    type: "input",
    message: "what is the employee's email?",
    name: "email"
}]

var internQuestions = [{
    type: "input",
    messages: "What's the employee's school?",
    name: "school"
}]

var engineerQuestions = [{
    type: "input",
    messages: "What is your github name?",
    name: "github"

}]



// MANAGER QUESTIONS

function managerQuestions() {
    inquirer.prompt([
        ...questions, {
            type: "input",
            message: "What's the employee's office number?",
            name: "officeNumber"
        }]).then ((internQuestion)=>{
            var newManager = new Manager (internQuestion.name, internQuestion.id, internQuestion.email, internQuestion.officeNumber);
            team.push(newManager);
            employeeInput();

        });
}
// END MANAGER QUESTIONS

// ADD NEW EMPLOYEE QUESTIONS
function employeeInput(){
    inquirer.prompt([{
        type:"list",
        message:"Do you want to add another employee?",
        choices:["yes", "no"],
        name:"employee"
    },{ 
        type:"list",
        message:"Which type of employee would you like to add?",
        choices:[{name:"Engineer", value: 0}, {name: "Intern", value:1}, {name:"None", value:2}],
        name:"employeeType"
    }]).then ((employeeType)=> {
        if (employeeType.employeeType ===0) {
            inquirer.prompt([
                ...questions, {
                    type: "input",
                    messages: "What is your github name?",
                    name: "github"
                }]).then ((engineerQuestion)=>{
                    var newEngineer = new Engineer (engineerQuestion.name, engineerQuestion.id, engineerQuestion.email, engineerQuestion.school);
                    team.push(newEngineer);
                    employeeInput();
                });

        } else if (employeeType.employeeType ===1){
            inquirer.prompt([
                ...questions, {
                    type: "input",
                    messages: "What's the employee's school?",
                    name: "school"
                }
            ]).then ((internQuestion)=>{
                    var newIntern = new Intern (internQuestion.name, internQuestion.id, internQuestion.email, internQuestion.school);
                    team.push(newIntern);
                    employeeInput();
                });
        } else {
            createHtmlFile();
        }
    })
}

// END ADD NEW EMPLOYEE QUESTIONS






// CREATE HTML

function createHtmlFile(){
    var employeeTeamPage =render (team);
    fs.writeFile("team.html", employeeTeamPage,(err)=> {
        if (err) console.log(err);
    
        else console.log("successful");

    });
}
managerQuestions();
// END HTML

