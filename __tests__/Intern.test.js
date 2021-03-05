const Intern = require('../lib/Intern');

describe("Intern class", () => {

    describe('Creating an intern object', () => {
        it("Created new Intern successfully", () => {
            expect(new Intern('Name', 1, 'email@address.com', 'UC Davis'))
            .toEqual({name: 'Name', id: 1, email: 'email@address.com', school: 'UC Davis'});
        });
    });

    const intern = new Intern('Test Name', 1, 'email@address.com', 'school name');
    describe('Checking Intern properties (name, id, email, school):', () => {
        it("Contains name property", () => {
            expect(intern)
            .toHaveProperty('name');
        });
        it("Contains id property", () => {
            expect(intern)
            .toHaveProperty('id');
        });
        it("Contains email property", () => {
            expect(intern)
            .toHaveProperty('email');
        });
        it("Contains school property", () => {
            expect(intern)
            .toHaveProperty('school');
        });
    });

    describe('getName method', () => {
        it('returns intern name', () => {
            expect(intern.getName())
            .toMatch('Test Name');
        });
    });

    describe('getId method', () => {
        it('returns intern id', () => {
            expect(intern.getId())
            .toEqual(1);
        });
    });

    describe('getEmail method', () => {
        it('returns intern email', () => {
            expect(intern.getEmail())
            .toMatch('email@address.com');
        });
    });

    describe('getRole method', () => {
        it('returns intern role', () => {
            expect(intern.getRole())
            .toMatch('Intern');
        });
    });

    describe('getSchool method', () => {
        it('returns school name', () => {
            expect(intern.getSchool())
            .toMatch('school name');
        })
    });

});