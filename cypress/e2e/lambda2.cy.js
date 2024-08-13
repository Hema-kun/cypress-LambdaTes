it('https://www.lambdatest.com/selenium-playground/auto-healing', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.lambdatest.com/selenium-playground/auto-healing');
    cy.get('#username').clear();
    cy.get('#username').type('LambdaTest');
    cy.get('#password').clear();
    cy.get('#password').type('Test@1234');
    cy.get('form > .flex > .bg-black').click();
    /* ==== End Cypress Studio ==== */
    });