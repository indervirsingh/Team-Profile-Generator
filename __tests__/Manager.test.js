const Manager = require('../lib/Manager');

describe("Manager class", () => {

    describe('Creating an manager object', () => {
        it("Created new Manager successfully", () => {
            expect(new Manager('Name', 1, 'email@address.com', 15))
            .toEqual({name: 'Name', id: 1, email: 'email@address.com', officeNumber: 15});
        });
    });

    const manager = new Manager('Test Name', 1, 'email@address.com', 15);
    describe('Checking Manager properties (name, id, email, github):', () => {
        it("Contains name property", () => {
            expect(manager).toHaveProperty('name');
        });
        it("Contains id property", () => {
            expect(manager).toHaveProperty('id');
        });
        it("Contains email property", () => {
            expect(manager).toHaveProperty('email');
        });
        it("Contains officeNumber property", () => {
            expect(manager).toHaveProperty('officeNumber');
        });
    });

    describe('getName method', () => {
        it('returns manager name', () => {
            expect(manager.getName())
            .toMatch('Test Name');
        });
    });

    describe('getId method', () => {
        it('returns manager id', () => {
            expect(manager.getId())
            .toEqual(1);
        });
    });

    describe('getEmail method', () => {
        it('returns manager email', () => {
            expect(manager.getEmail())
            .toMatch('email@address.com');
        });
    });

    describe('getRole method', () => {
        it('returns manager role', () => {
            expect(manager.getRole())
            .toMatch('Manager');
        });
    });

    describe('getOfficeNumber method', () => {
        it('returns manager officeNumber', () => {
            expect(manager.getOfficeNumber())
            .toEqual(15);
        });
    });

});