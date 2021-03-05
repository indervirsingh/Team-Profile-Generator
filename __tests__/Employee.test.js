const Employee = require('../lib/Employee');

describe("Employee class", () => {

    describe('Creating an employee object', () => {
        it("Created new Employee successfully", () => {
            expect(new Employee('Name', 1, 'email@address.com'))
            .toEqual({name: 'Name', id: 1, email: 'email@address.com'});
        });
    });

    const employee = new Employee('Test Name', 1, 'email@address.com');
    describe('Checking Employee properties (name, id, email):', () => {
        it("Contains name property", () => {
            expect(employee).toHaveProperty('name');
        });
        it("Contains id property", () => {
            expect(employee).toHaveProperty('id');
        });
        it("Contains email property", () => {
            expect(employee).toHaveProperty('email');
        });
    });

    describe('getName method', () => {
        it('returns employee name', () => {
            expect(employee.getName())
            .toMatch('Test Name');
        });
    });

    describe('getId method', () => {
        it('returns employee id', () => {
            expect(employee.getId())
            .toEqual(1);
        });
    })

    describe('getEmail method', () => {
        it('returns employee email', () => {
            expect(employee.getEmail())
            .toMatch('email@address.com');
        });
    })

    describe('getRole method', () => {
        it('returns employee role', () => {
            expect(employee.getRole())
            .toMatch('Employee');
        });
    })

});