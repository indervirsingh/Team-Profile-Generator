// *Variables* ________________________________________________________________________________________________________________

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

    // Initialize the app
    const init = () => {

    }

    // Generate the HTML page
    const generateHTML = (...employees) => {
        // Using the employees array, loop through and create a card for each employee
        // Maybe a switch statement depending on type of employee

    }


// ____________________________________________________________________________________________________________________________



