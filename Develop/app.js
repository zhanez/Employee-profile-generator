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



// managers- add employee

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









// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

function createHtmlFile(){
    var employeeTeamPage =render (team);
    fs.writeFile("team.html", employeeTeamPage,(err)=> {
        if (err) console.log(err);
    
        else console.log("successful");

    });
}
managerQuestions();

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










