// *Compiled-Code* ____________________________________________________________________________________________________________

    // This will run/initialize the program
    init();

// ____________________________________________________________________________________________________________________________


/* VARIABLES EXPLAINED:

    The only variable I had declared beforehand is an empty array which will hold all the employee-type objects (engineer, intern, manager).
    Everything else declared here is either a class or module that needs to be imported.

*/

// *Variables* ________________________________________________________________________________________________________________

    // Libraries needed/imported
    const inquirer = require('inquirer');
    const fs = require('fs');
    const util = require('util');

    // Classes needed/imported
    const Employee = require('./lib/Employee');
    const Engineer = require('./lib/Engineer');
    const Intern = require('./lib/Intern');
    const Manager = require('./lib/Manager');

    // This will hold all the employee objects (manager, intern, engineer)
    var employees = [];

// ____________________________________________________________________________________________________________________________


/* FUNCTIONS EXPLAINED:

    There are a total of [11] functions.

    [1] writeFileAsync() is a small function that will create the HTML file needed

    [2] addEmployee() will create an employee object and return it

    [3-5] createEngineer(), createIntern(), createManager() essentially all do the same thing:
        - create the sub-class of employee based off info sent in parameter
        - add that employee object to the employees array

    [6-9] addEmployeesPrompt(), teamManagerPrompt(), createEngineerPrompt(), createInternPrompt() are self explanatory...
        - ask questions then return the inquirer object to main/init

    [10] generateHTML() is also self explanatory..
        - extract all the employees from employees array
        - create the each card using the employee data
        - create the HTML file by calling the writeFileAsync() function

    [11] init() initializes/runs the entire program

*/

// *Functions* ________________________________________________________________________________________________________________

    // Create writeFile function using promises instead of a callback function
    const writeFileAsync = util.promisify(fs.writeFile);

    // Create a new Employee, then returns that employee object
    const addEmployee = (name, id, email) => {
        let employee = new Employee(name, id, email);
        return employee;
    };

    // Create an Engineer type employee
    const createEngineer = ({name, id, email}, github) => {
        let engineer = new Engineer(name, id, email, github);
        employees.push(engineer);
        console.log("New Engineer created: " + JSON.stringify(engineer));
    };

    // Create a Manager type employee
    const createManager = ({name, id, email}, officeNumber) => {
        let manager = new Manager(name, id, email, officeNumber);
        employees.push(manager);
        console.log("New manager created: " + JSON.stringify(manager));
    };

    // Create an Intern type employee
    const createIntern = ({name, id, email}, school) => {
        let intern = new Intern(name, id, email, school);
        employees.push(intern);
        console.log("New Intern created: " + JSON.stringify(intern));
    };

    // Prompt for creating a Manager
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
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter your team manager\s office number:'
            }
        ]);

    };

    // Prompt for creating an Engineer
    const createEngineerPrompt = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the name of the Engineer:'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter the Engineer\'s ID number:'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter the Engineer\'s email address:'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please enter the Engineer\'s GitHub username:'
            }
        ]);
    }

    // Prompt for creating an Intern
    const createInternPrompt = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the name of the Intern:'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter the Intern\'s ID number:'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter the Intern\'s email address:'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Please enter the School/University that the Intern is currently studying at:'
            }
        ]);
    };

    // Asking to keep adding employees prompt
    const addEmployeesPrompt = () => {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'options',
                message: 'Please select an option',
                choices: ['Add Engineer', 'Add Intern', 'Finish Building Team']
            }
        ]);
    };

    // Generate the HTML page
    const generateHTML = () => {
        // Using the employees array, loop through and create a card for each employee
        employees.forEach(employee => {
            console.log(employee);
        });


    };

    // Initialize the app
    const init = async() => {

        // Get team manager info first
        // This condition is so manager information is asked only once
        if (employees.length <= 0) {
            let response = await teamManagerPrompt();
            // Extract the info needed, then create the manager
            const { managerName: name, managerId: id, managerEmail, email, officeNumber } = response;
            createManager(addEmployee(name, id, email,), officeNumber);
        }

        // This variable will decide if we run this function again or not
        let addMore = true;

        // Ask about employees, based on response then decide what to do
        let userOption = await addEmployeesPrompt();
        let option = userOption.options;
        switch (option) {
            case 'Add Engineer':
                let engineerAnswers = await createEngineerPrompt();
                const { name: engineerName, id: engineerId, email: engineerEmail, github } = engineerAnswers;
                createEngineer(addEmployee(engineerName, engineerId, engineerEmail), github);
                break;
            case 'Add Intern':
                let internAnswers = await createInternPrompt();
                const { name: internName, id: internId, email: internEmail, school } = internAnswers;
                createIntern(addEmployee(internName, internId, internEmail), school);
                break;
            case 'Finish Building Team':
                generateHTML();
                addMore = false;
                break;
            default:
                console.log("If you're reading this then somehow you broke my program...tell me how...or forever be stuck in this loop");
        };

        // This means that if the client didn't choose the finish option then we will run this function again
        if (addMore) {
            init();
        }
    };

// ____________________________________________________________________________________________________________________________