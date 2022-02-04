// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input. Use instructor example to reformat question type and message
const questions = [
  { type: "input", message: "What is your GitHub username?", name: "username" },
  { type: "input", message: "What is your email address?", name: "email" },
  {
    type: "input",
    message: "What is your project called?",
    name: "projectName",
  },
  {
    type: "input",
    message: "Please write a short description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "What kind of license should your project have?",
    name: "license",
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "commandDependencies",
  },
  {
    type: "input",
    message: "What command should be run to run test?",
    name: "commandRunTest",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "repo",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contribution",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // use fs module
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const MarkdownString = generateMarkdown(answers);
    console.log(MarkdownString);
    // write generatedReadMe to file
    //writeToFile(generatedReadMe);
  });
  //console.log("this is after the prompt");
}

// Function call to initialize app
init();
