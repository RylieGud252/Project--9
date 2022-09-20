// TODO: Include packages needed for this application
const inquire = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('generateMarkdown');

const util = require('util');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your repository?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your repository title.');
        return false;
      }
    }
  },
   {
    
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: descriptionInput => {
        if (descriptionInput) {
            return true;
        } else {
            console.log('You need to provide a project description!');
            return false;
        }
    }
},
  {
    
        type: 'input',
        name: 'usage',
        message: 'How do you use this project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to provide information on how to use project!');
                return false;
            }
        }
    },

    {
        type: 'input',
  name: 'testing',
  message: 'Please explain how users may test your application.',
  when: ({ testConfirm }) => {
    if (testConfirm) {
      return true;
    } else {
      return false;
    }
  }
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Information transferred to the README')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
