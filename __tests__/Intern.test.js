const Intern = require('../lib/Intern');

// Creates Intern object properly 
test('Creating an Intern object', () => {
    expect(new Intern('Name', 1, 'email@address.com', 'UC Davis'))
    .toEqual({name: 'Name', id: 1, email: 'email@address.com', school: 'UC Davis'});
});

// Checks if the employee object has the correct properties
const intern = new Intern('Test Name', 1, 'email@address.com', 'school name');
test('Intern object contains correct properties (name, id, email, school)', () => {
    expect(intern).toHaveProperty('name');
    expect(intern).toHaveProperty('id');
    expect(intern).toHaveProperty('email');
    expect(intern).toHaveProperty('school');
});