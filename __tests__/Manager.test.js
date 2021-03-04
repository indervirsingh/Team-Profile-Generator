const Manager = require('../lib/Manager');

test('Creating a Manager object', () => {
    expect(new Manager('Name', 1, 'email@address.com', 15))
    .toEqual({name: 'Name', id: 1, email: 'email@address.com', officeNumber: 15});
});