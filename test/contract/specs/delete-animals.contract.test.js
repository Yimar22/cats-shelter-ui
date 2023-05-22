import { provider } from '../config/init-pact.js';
import { Matchers } from '@pact-foundation/pact';
import { AnimalController } from '../../../controllers/AnimalsController.js';
import { expect } from 'chai';

describe('Animal Service - Delete animal', () => {
    describe('When a request to delete a cat is made', () => {
        before(async () => {
            await provider.setup();
            await provider.addInteraction({
                uponReceiving: 'a request to delete a cat',
                state: "has animals to delete",
                withRequest: {
                    method: 'DELETE',
                    path: Matchers.string('/animals/{name}')
                },
                willRespondWith: {
                    status: 204
                }
            });
        });

        after(() => provider.finalize());

        it('should return the correct data', async () => {
            const response = await AnimalController.delete('Manchas');

            // Verifying status within response
            expect(response.status).to.be.eql(204);

            await provider.verify()
        });
    });
});