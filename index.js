const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employee = new Employee('employeeName', 12345, 'employee@email.com');
const manager = new Manager('ManagerName', 12346, 'manager@email.com', 123456789);
const intern = new Intern('internName', 12347, 'intern@email.com', 'UC Davis');
const engineer = new Engineer('engineerName', 12348, 'engineer@email.com', 'github.com/indervirsingh');

console.log(employee.getRole());
console.log(manager.getRole());
console.log(intern.getRole());
console.log(engineer.getRole());
