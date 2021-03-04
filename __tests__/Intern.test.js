const Intern = require('../lib/Intern');

test('Creating an Intern object', () => {
    expect(new Intern('Name', 1, 'email@address.com', 'UC Davis'))
    .toEqual({name: 'Name', id: 1, email: 'email@address.com', school: 'UC Davis'});
});