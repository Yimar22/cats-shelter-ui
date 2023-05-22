import { provider } from '../config/init-pact.js';
import { Matchers } from '@pact-foundation/pact';
import { AnimalController } from '../../../controllers/AnimalsController.js';
import { expect } from 'chai';

describe('Animal Service - Update animal', () => {
    describe('When a request to update a cat is made', () => {
        before(async () => {
            await provider.setup();
            await provider.addInteraction({
                uponReceiving: 'a request to update a cat',
                state: "has animal to update",
                withRequest: {
                    method: 'PUT',
                    path: Matchers.string('/animals/{name}'),
                    body: Matchers.somethingLike({
                        name: Matchers.like('Manchas'),
                        breed: Matchers.like("Bengali"),
                        gender: Matchers.like("Female"),
                        vaccinated: Matchers.boolean(true)
                    })
                },
                willRespondWith: {
                    status: 200,
                    body: Matchers.somethingLike({
                        name: Matchers.like('Manchas'),
                        breed: Matchers.like("Bengali"),
                        gender: Matchers.like("Female"),
                        vaccinated: Matchers.boolean(true)
                    })
                }
            });
        });

        after(() => provider.finalize());

        it('should return the correct data', async () => {
            const manchasCat = {
                name: "Manchas",
                breed: "Bengali",
                gender: "Female",
                vaccinated: true
            }

            const response = await AnimalController.updateAnimal(manchasCat.name, manchasCat);
            const responseBody = response.data;

            // Verifying response is not undefined
            expect(responseBody).to.not.be.undefined;

            // Verifying data properties within response
            expect(responseBody).to.have.property('name');
            expect(responseBody).to.have.property('breed');
            expect(responseBody).to.have.property('gender');
            expect(responseBody).to.have.property('vaccinated');

            // Verifying response data is equal to expected data
            expect(responseBody).to.be.eql(manchasCat);

            await provider.verify()
        });
    });
});