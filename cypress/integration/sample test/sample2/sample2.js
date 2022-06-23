import { 
    Given, 
    When, 
    Then
} from "cypress-cucumber-preprocessor/steps";
  
before(() => {
    cy.log('sample 1')
})


/**
 * Scenario: Runs sample 1 
 */
Given('that there is one env variable', function () {
    //do nothing
})

Then('I should be able to get its value', function () {
    expect(Cypress.env('SAMPLE_VARIABLE')).to.eq("Hello, I am the sample env variable.")
})
