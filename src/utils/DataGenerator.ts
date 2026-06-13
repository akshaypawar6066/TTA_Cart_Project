import { faker } from '@faker-js/faker';

 export class DataGenerator {

static getFirstName(): string { return faker.person.firstName(); }
    static getLastName(): string { return faker.person.lastName(); }
    static getFullName(): string { return faker.person.fullName(); }
    static getEmail(): string { return faker.internet.email(); }
    static getPassword(length = 12): string { return faker.internet.password({ length }); }
    static getPhoneNumber(): string { return faker.phone.number(); }
    static getStreetAddress(): string { return faker.location.streetAddress(); }
    static getCity(): string { return faker.location.city(); }
    static getState(): string { return faker.location.state(); }
    static getZipCode(): string { return faker.location.zipCode(); }
    static getRandomInt(min = 1, max = 100): number { return faker.number.int({ min, max }); }
    static getUUID(): string { return faker.string.uuid(); }
    static getProductName(): string { return faker.commerce.productName(); }
    static getPrice(min = 1, max = 500): string { return faker.commerce.price({ min, max }); }
}