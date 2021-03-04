const Manager = require('../lib/Manager');

// Checks if the Manager object has the correct properties
test('Creating a Manager object', () => {
    expect(new Manager('Name', 1, 'email@address.com', 15))
    .toEqual({name: 'Name', id: 1, email: 'email@address.com', officeNumber: 15});
});

// Checks if the manager object has the correct properties
const manager = new Manager('Test Name', 1, 'email@address.com', 15);
test('Manager object contains correct properties (name, id, email, officeNumber)', () => {
    expect(manager).toHaveProperty('name');
    expect(manager).toHaveProperty('id');
    expect(manager).toHaveProperty('email');
    expect(manager).toHaveProperty('officeNumber');
});