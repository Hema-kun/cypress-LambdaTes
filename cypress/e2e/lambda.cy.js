it('LTCypressStudio', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://ecommerce-playground.lambdatest.io/');
    cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').click();
    cy.get('#input-email').clear('lambdatestnew@yopmail.com');
    cy.get('#input-email').type('lambdatestnew@yopmail.com');
    cy.get('#input-password').clear();
    cy.get('#input-password').type('Lambda123');
    /* ==== End Cypress Studio ==== */
    })