const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');

// Creates Employee object properly
test('Creating an employee object', () => {
    expect(new Employee('Name', 1, 'email@address.com'))
    .toEqual({name: 'Name', id: 1, email: 'email@address.com'});
});

//