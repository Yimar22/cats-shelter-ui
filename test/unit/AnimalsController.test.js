import { expect } from 'chai';
import moxios from 'moxios';
import { AnimalController, axiosInstance } from '../../controllers/AnimalsController.js';

describe('Animal Controller Unit Tests', () => {
    
    beforeEach(async () => {
        moxios.install(axiosInstance);
        });

    afterEach(() => {
        moxios.uninstall(axiosInstance);
    });

    it('Test Register Animal', async () => {
        const animalToRegister = {
            name: "manchas",
            breed: "Bengali",
            gender: "Female",
            vaccinated: true
        }
        
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 201,
                response: animalToRegister,
            });
        });

        const actualResponse = await AnimalController.register(animalToRegister);

        expect(actualResponse.status).to.be.eql(201);
        expect(actualResponse.data).to.be.eql(animalToRegister);git
    })

    it('Test List Animals', async () => {
        // Arrange
        const listToGet = [
            {
                name: "manchas",
                breed: "Bengali",
                gender: "Female",
                vaccinated: true
            },
            {
                name: "Luna",
                breed: "Maine Coon",
                gender: "Female",
                vaccinated: false
            }
        ];

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: listToGet,
            });
        });

        // Act
        const actualResponse = await AnimalController.list();

        // Assert
        expect(actualResponse.status).to.be.eql(200);
        expect(actualResponse.data).to.be.eql(listToGet);
        expect(actualResponse.data).to.have.length(2);
    });

    it('Test Delete Animal', async () => {
        // Arrange
        const animal = {
            name: "manchas",
            breed: "Bengali",
            gender: "Female",
            vaccinated: true
        }

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
            });
        });

        // Act
        const actualResponse = await AnimalController.delete(animalToDelete.name);

        // Assert
        expect(actualResponse.status).to.be.eql(200);
    });

    it('Test get animal', async () => {
        const animal = {
            name: "manchas",
            breed: "Bengali",
            gender: "Female",
            vaccinated: true
        }

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: animal,
            });
        });

        const actualResponse = await AnimalController.getAnimal(animal.name);
        expect(actualResponse.status).to.be.eql(200);
        expect(actualResponse.data).to.be.eql(animal);
    });

    it('Test update animal', async () => {
        const animal = {
            name: "manchas",
            breed: "Bengali",
            gender: "Female",
            vaccinated: true
        }

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: animal,
            });
        });

        const actualResponse = await AnimalController.updateAnimal(animal.name);
        expect(actualResponse.status).to.be.eql(200);
        expect(actualResponse.data).to.be.eql(animal);
    });

    it('Test update animal', async () => {
        // Arrange
        const animal = {
            name: "manchas",
            breed: "Bengali",
            gender: "Female",
            vaccinated: true
        }

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: animal,
            });
        });
        // Act
        const actualResponse = await AnimalController.updateAnimal(animal.name);
        // Assert
        expect(actualResponse.status).to.be.eql(200);
        expect(actualResponse.data).to.be.eql(animal);
    });
})