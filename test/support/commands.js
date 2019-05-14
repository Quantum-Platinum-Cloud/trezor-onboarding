// eslint-disable-next-line import/no-extraneous-dependencies
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand({
    failureThreshold: 0.1, // threshold for entire image
    failureThresholdType: 'percent', // percent of image or number of pixels
    // capture: 'viewport', // capture viewport in screenshot
});

Cypress.Commands.add('getTestElement', selector => cy.get(`[data-test="${selector}"]`));
