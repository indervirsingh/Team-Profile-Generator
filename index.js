/* VARIABLES EXPLAINED:

    The only variable I had declared beforehand is an empty array which will hold all the employee-type objects (engineer, intern, manager).
    Everything else declared here is either a class or module that needs to be imported.

*/

// *Variables* ________________________________________________________________________________________________________________

    // Libraries needed/imported
    const inquirer = require('inquirer');
    const fs = require('fs');
    const util = require('util');
    const colors = require('colors');

    // Classes needed/imported
    const Employee = require('./lib/Employee');
    const Engineer = require('./lib/Engineer');
    const Intern = require('./lib/Intern');
    const Manager = require('./lib/Manager');

    // This will hold all the employee objects (manager, intern, engineer)
    var employees = [];

// ____________________________________________________________________________________________________________________________


/* FUNCTIONS EXPLAINED:

    There are a total of [14] functions.

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

    [11-13] generateInternCards(), generateEngineerCards(), generateManagerCard() all perform the same task
        - loop through each array and create a card for each employee
        - there is only one manager so a loop isn't needed for extracting info for manager's card

    [14] init() initializes/runs the entire program

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
    };

    // Create a Manager type employee
    const createManager = ({name, id, email}, officeNumber) => {
        let manager = new Manager(name, id, email, officeNumber);
        employees.push(manager);
    };

    // Create an Intern type employee
    const createIntern = ({name, id, email}, school) => {
        let intern = new Intern(name, id, email, school);
        employees.push(intern);
    };

    // Prompt for creating a Manager
    const teamManagerPrompt = () => {
        console.log("********************" .green .bgBlue + "ADDING TEAM MANAGER" .underline .green .bgBlue + "********************" .green .bgBlue);
        console.log("\n");
        console.log("STATUS: " .bgRed + "IN PROGRESS" .bold .bgRed);
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the name of your team manager:\n'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter your team manager\'s ID:\n'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your team manager\'s email address:\n'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter your team manager\s office number:\n'
            }
        ]);

    };

    // Prompt for creating an Engineer
    const createEngineerPrompt = () => {
        console.log("\n\n");
        console.log("**********************" .green .bgBlue + "ADDING ENGINEER" .underline .green .bgBlue + "**********************" .green .bgBlue);
        console.log("\n");
        console.log("STATUS: " .bgRed + "IN PROGRESS" .bold .bgRed);
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the name of the Engineer:\n'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter the Engineer\'s ID number:\n'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter the Engineer\'s email address:\n'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please enter the Engineer\'s GitHub username:\n'
            }
        ]);
    }

    // Prompt for creating an Intern
    const createInternPrompt = () => {
        console.log("\n\n");
        console.log("***********************" .green .bgBlue + "ADDING INTERN" .underline .green .bgBlue + "***********************" .green .bgBlue);
        console.log("\n");
        console.log("STATUS: " .bgRed + "IN PROGRESS" .bold .bgRed);
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter the name of the Intern:\n'
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter the Intern\'s ID number:\n'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter the Intern\'s email address:\n'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Please enter the School/University that the Intern is currently studying at:\n'
            }
        ]);
    };

    // Asking to keep adding employees prompt
    const addEmployeesPrompt = () => {
        console.log("\n\n");
        console.log("***********************" .green .bgBlue + "OPTIONS MENU" .underline .green .bgBlue + "***********************" .green .bgBlue);
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

        // Store the employees by type
        let interns = [], engineers = [];

        // Extract the interns and engineers into their respective arrays
        employees.forEach(employee => {

            const currentEmployeeType = employee.getRole();

            switch (currentEmployeeType) {
                case 'Intern':
                    interns.push(employee);
                    break;
                case 'Engineer':
                    engineers.push(employee);
                    break;
            };

        });

        // Generate the HTML needed for each Intern
        let internCardsHTML = generateInternCards(interns);

        // Same process for engineers
        let engineerCardsHTML = generateEngineerCards(engineers);

        // Lastly the manager
        // She/he is always the first employee added
        let manager = employees[0];
        let managerCardHTML = generateManagerCard(manager);

        const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profiles</title>
        
            <!-- CSS -->
            <link rel="stylesheet" href="./style.css">
        
            <!-- Foundation -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css" integrity="sha256-ogmFxjqiTMnZhxCqVmcqTvjfe1Y/ec4WaRj/aQPvn+I=" crossorigin="anonymous">
            <script defer src="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/js/foundation.min.js" integrity="sha256-pRF3zifJRA9jXGv++b06qwtSqX1byFQOLjqa2PTEb2o=" crossorigin="anonymous"></script>
        
        </head>
        <body>
        
            <!-- Title -->
            <div class="title callout primary">
                <h2>My Team</h2>
            </div>
        
            <div class="grid-container">
                <div class="managerDiv grid-x grid-margin-x">
                    ${managerCardHTML}
                </div>
            </div>
        
            <!-- Cards for employees -->
            <div class="employeesDiv grid-x grid-margin-x small-up-2 medium-up-3">
                ${internCardsHTML}
                ${engineerCardsHTML}
            </div>
        
        </body>
        </html>`;

        const css = `.title {
            text-align: center;
        }
        
        .card {
            margin: 10px;
            width: 400px;
            border-radius: 1rem !important;
        
        }
        
        .card .card-divider {
            background-color: blue;
        }
        
        #managerCard .card-divider {
            background-color: red;
        }`;

        // Create the html AND css file
        writeFileAsync('./dist/index.html', html);
        writeFileAsync('./dist/style.css', css);

        console.log("\n\n");
        console.log("Your Team Profile has been generated!\nPlease check in the dist folder for HTML/CSS files." .bgGreen);

    };

    // Generate Intern card(s)
    const generateInternCards = (interns) => {

        let html = ``;
        let space = `
        `;

        for (const {name, id, email, school} of interns) {
            html +=
            `<div class="cell">
                <div class="card">
                    <div class="card-divider">
                        <h3>${name} - Intern</h3>
                    </div>
                    <div class="card-section">
                        <p>ID: ${id}</p>
                        <p>Email: <a href="mailto:${email}">${email}</a></p>
                        <p>School: ${school}</p>
                    </div>
                </div>
            </div>`;

            html += space;

        };

        return html;
    };

    // Generate Engineer card(s)
    const generateEngineerCards = (engineers) => {

        let html = ``;
        let space = `
        `;

        for (const {name, id, email, github} of engineers) {
            html +=
            `<div class="cell">
                <div class="card">
                    <div class="card-divider">
                        <h3>${name} - Engineer</h3>
                    </div>
                    <div class="card-section">
                        <p>ID: ${id}</p>
                        <p>Email: <a href="mailto:${email}">${email}</a></p>
                        <p>GitHub: <a href="https://www.github.com/${github}" target="_blank">${github}</a></p>
                    </div>
                </div>
            </div>`;

            html += space;

        };

        return html;
    };

    // Generate Manager card
    const generateManagerCard = ({name, id, email, officeNumber}) => {

        let html =
        `<div class="cell" id="managerCell">
            <div class="card" id="managerCard">
                <div class="card-divider">
                    <h3>${name} - Manager</h3>
                </div>
                <div class="card-section">
                    <p>ID: ${id}</p>
                    <p>Email: <a href="mailto:${email}">${email}</a></p>
                    <p>Office Number: ${officeNumber}</p>
                </div>
            </div>
        </div>`;

        return html;
    };

    // Initialize the app
    const init = async() => {

        // Get team manager info first
        // This condition is so manager information is asked only once

        if (employees.length <= 0) {

            let response = await teamManagerPrompt();

            // Extract the info needed, then create the manager
            const { name, id, email, officeNumber } = response;
            createManager(addEmployee(name, id, email,), officeNumber);
            console.log("STATUS: " .bgGreen + "SUCCESS" .bold .bgGreen);
            console.log("\n");
            console.log("********************" .green .bgBlue + "TEAM MANAGER ADDED" .underline .green .bgBlue + "********************" .green .bgBlue);

        }

        // This variable will decide if we run this function again or not
        let addMore = true;

        // Ask about employees, based on response then decide what to do
        let userOption = await addEmployeesPrompt();
        let option = userOption.options;

        // 3 options: Create engineer, Create intern, Finish building team
        switch (option) {

            case 'Add Engineer':
                let engineerAnswers = await createEngineerPrompt();
                const { name: engineerName, id: engineerId, email: engineerEmail, github } = engineerAnswers;
                createEngineer(addEmployee(engineerName, engineerId, engineerEmail), github);
                console.log("STATUS: " .bgGreen + "SUCCESS" .bold .bgGreen);
                console.log("\n");
                console.log("**********************" .green .bgBlue + "ENGINEER ADDED" .underline .green .bgBlue + "**********************" .green .bgBlue);
            break;

            case 'Add Intern':
                let internAnswers = await createInternPrompt();
                const { name: internName, id: internId, email: internEmail, school } = internAnswers;
                createIntern(addEmployee(internName, internId, internEmail), school);
                console.log("STATUS: " .bgGreen + "SUCCESS" .bold .bgGreen);
                console.log("\n");
                console.log("***********************" .green .bgBlue + "INTERN ADDED" .underline .green .bgBlue + "***********************" .green .bgBlue);
            break;

            case 'Finish Building Team':
                generateHTML();
                addMore = false;
            break;

            default:
                console.log("If you're reading this then somehow you broke my program...tell me how...or forever be stuck in this loop");
            break;

        };

        // This means that if the client didn't choose the finish option then we will run this function again until they do
        if (addMore) {
            init();
        }
    };

// ____________________________________________________________________________________________________________________________


// *Compiled-Code* ____________________________________________________________________________________________________________

    // This will run/initialize the program
    init();

// ____________________________________________________________________________________________________________________________
