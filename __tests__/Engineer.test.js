const Engineer = require('../lib/Engineer');

// Creates Engineer object properly and checking to see if it matches
test('Creating an Engineer object', () => {
    expect(new Engineer('Name', 1, 'email@address.com', 'github username'))
    .toEqual({name: 'Name', id: 1, email: 'email@address.com', github: 'github username'});
});

// Checks if the engineer object has the correct properties
const engineer = new Engineer('Test Name', 1, 'email@address.com', 'github username');
test('Engineer object contains correct properties (name, id, email, github)', () => {
    expect(engineer).toHaveProperty('name');
    expect(engineer).toHaveProperty('id');
    expect(engineer).toHaveProperty('email');
    expect(engineer).toHaveProperty('github');
});