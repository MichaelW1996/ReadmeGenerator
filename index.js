// TODO: Include packages needed for this application
const inquirer = require("inquirer"); //inquirer from npm
const generateMarkdown = require("./utils/generateMarkdown"); //my own markdown constructor
const fs = require("fs"); //fs from npm
// TODO: Create an array of questions for user input
const questions = [
  {
    //get title
    type: "input", //type of input from user
    message: "Project title: ", //prompt to user
    name: "title", //key to user response
  },
  {
    //get description
    type: "input", //type of input from user
    message: "What is this project about? ", //prompt to user
    name: "desc", //key to user response
  },
  {
    //get instalation instructions
    type: "input", //type of input from user
    message: "How to install: ", //prompt to user
    name: "install", //key to user response
  },
  {
    //get usage instruction
    type: "input", //type of input from user
    message: "How to use: ", //prompt to user
    name: "usage", //key to user response
  },
  {
    //get license
    type: "list", //type of input from user, a list has a set number of available responses
    message: "Select a license: ", //prompt to user
    name: "license", //key to user response
    choices: ["MIT", "Apache", "GNU GPL v3", "No License"], //license options
  },
  {
    //get author name
    type: "input",
    message: "Author name: ",
    name: "name",
  },
  {
    //get contribution details - email
    type: "input", //type of input from user
    message: "Author email: ", //prompt to user
    name: "email", //key to user response
  },
  {
    //get contribution details - github username
    type: "input", //type of input from user
    message: "Author Github username: ", //prompt to user
    name: "github", //key to user response
  },
  {
    // Test instructions
    type: "input", //type of input from user
    message: "How to test the app: ", //prompt to user
    name: "test", //key to user response
  },
];

//test to check questions for debugging
// inquirer.prompt(questions).then((data) => {
//   //ask questions
//   console.log(data);
// });

// TODO: Create a function to write README file.
//inputs of the name for the file and the response from the inquirer
function writeToFile(fileName, response) {
  //readme contains the content of the readme document
  const readme = generateMarkdown(response);

  function terminalReply(error) {
    // Print to terminal based on if an error appears
    const output = error ? "Error" : "Success"; //if an error is thrown pass error to console, othwise pass Success
    console.log(output);
  }
  fs.writeFile(fileName, readme, terminalReply); //write file with the name defined in function, with readme content then print to terminal
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    //ask the questions, then take the reply (data)
    // console.log(data); for debugging
    writeToFile("ReadMe.md", data); // and feed it to the writeToFile function
  });
}

// Function call to initialize app
init();
