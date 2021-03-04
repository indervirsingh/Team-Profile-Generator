const Employee = require('../lib/Employee');

// Creates Employee object properly
test('Creating an employee object', () => {
    expect(new Employee('Name', 1, 'email@address.com'))
    .toEqual({name: 'Name', id: 1, email: 'email@address.com'});
});

// Checks if the employee object has the correct properties
const employee = new Employee('Test Name', 1, 'email@address.com');
test('Employee object contains correct properties (name, id, email)', () => {
    expect(employee).toHaveProperty('name');
    expect(employee).toHaveProperty('id');
    expect(employee).toHaveProperty('email');
});