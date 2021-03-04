const Engineer = require('../lib/Engineer');

test('Creating an Engineer object', () => {
    expect(new Engineer('Name', 1, 'email@address.com', 'github username'))
    .toEqual({name: 'Name', id: 1, email: 'email@address.com', github: 'github username'});
});