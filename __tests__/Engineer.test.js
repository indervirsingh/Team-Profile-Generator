const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {

    describe('Creating an engineer object', () => {
        it("Created new Engineer successfully", () => {
            expect(new Engineer('Name', 1, 'email@address.com', 'github username'))
            .toEqual({name: 'Name', id: 1, email: 'email@address.com', github: 'github username'});
        });
    });

    const engineer = new Engineer('Test Name', 1, 'email@address.com', 'github username');
    describe('Checking Engineer properties (name, id, email, github):', () => {
        it("Contains name property", () => {
            expect(engineer).toHaveProperty('name');
        });
        it("Contains id property", () => {
            expect(engineer).toHaveProperty('id');
        });
        it("Contains email property", () => {
            expect(engineer).toHaveProperty('email');
        });
        it("Contains github property", () => {
            expect(engineer).toHaveProperty('github');
        });
    });

    describe('getName method', () => {
        it('returns engineer name', () => {
            expect(engineer.getName())
            .toMatch('Test Name');
        });
    });

    describe('getId method', () => {
        it('returns engineer id', () => {
            expect(engineer.getId())
            .toEqual(1);
        });
    });

    describe('getEmail method', () => {
        it('returns engineer email', () => {
            expect(engineer.getEmail())
            .toMatch('email@address.com');
        });
    });

    describe('getRole method', () => {
        it('returns engineer role', () => {
            expect(engineer.getRole())
            .toMatch('Engineer');
        });
    });

    describe('getGithub method', () => {
        it('returns engineer github', () => {
            expect(engineer.getGithub())
            .toMatch('github username');
        });
    });

});