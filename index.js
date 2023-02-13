const fs = require('fs').promises;
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const licenseList = require ('./utils/licenseType');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.'
    },
    {
        type:'list',
        name:'license',
        message:'What type of lisense would you like to use for your project?',
        choices: licenseList,
        default: 'MIT'
    },
    {
        type:'input',
        name:'installation',
        message: 'What command should be run to install dependancies?',
        default: 'npm install'
    },
    {
        type:'input',
        name:'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type:'input',
        name:'contributing',
        message: 'List out any collaborators, third-party assets or any tutorials you have followed to create your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command shouldbe run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'   
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub Profile URL'
    }
];

// function to write README file
function writeToFile(data) {
    const markdownData = generateMarkdown(data);
    fs.writeFile('README.md', markdownData);
    console.log(`
You have successfully generated your readme file.
The contents of the file are:\n\n${markdownData}`);
};

// function to initialize program
function init() {
    console.log(
    `
    Welcome to the README Generator App
    -----------------------------------
    `
    )
    inquirer.prompt(questions)
    .then(data => {
        // console.log(data);
        writeToFile(data);
    })
}

// function call to initialize program
init();