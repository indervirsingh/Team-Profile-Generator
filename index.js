// *Variables* ________________________________________________________________________________________________________________

    // Libraries needed/imported
    const inquirer = require('inquirer');
    const fs = require('fs');

    // Classes needed/imported
    const Employee = require('./lib/Employee');
    const Engineer = require('./lib/Engineer');
    const Intern = require('./lib/Intern');
    const Manager = require('./lib/Manager');

// ____________________________________________________________________________________________________________________________

// *Functions* ________________________________________________________________________________________________________________

    // Create a new Employee, then returns that employee object
    const addEmployee = (name, id, email) => {
        let employee = new Employee(name, id, email);
        return employee;
    }

    // Create an Engineer type employee
    const createEngineer = ({name, id, email}, github) => {
        let engineer = new Engineer(name, id, email, github);
    }

    // Create a Manager type employee
    const createManager = ({name, id, email}, officeNumber) => {
        let manager = new Engineer(name, id, email, officeNumber);
    }

    // Create an Intern type employee
    const createIntern = ({name, id, email}, school) => {
        let manager = new Intern(name, id, email, school);
    }

    // Create writeFile function using promises instead of a callback function
    const writeFileAsync = util.promisify(fs.writeFile);

    const teamManagerPrompt = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'Please enter the name of your team manager:'
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Please enter your team manager\'s ID:'
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Please enter your team manager\'s email address:'
            },
            {

            }
        ]);
    }

    // Initialize the app
    const init = () => {

        // Get team manager info first
        teamManagerPrompt()
            .then(answers => addEmployee(answers.managerName, answers.managerId, answers.managerEmail))
            then((employee) => console.log('Team manager has been created: ' + employee))
            .catch(error => console.error(error));
    }

    // Generate the HTML page
    const generateHTML = (...employees) => {
        // Using the employees array, loop through and create a card for each employee
        // Maybe a switch statement depending on type of employee

    }


// ____________________________________________________________________________________________________________________________

init();


