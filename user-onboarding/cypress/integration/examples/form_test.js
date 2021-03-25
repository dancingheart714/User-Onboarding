// arbitrary code you want running before your tests start
describe("User-Onboarding", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });


    // it('submit button should be disabled', () => {
    //     cy.get('button').should('be.disabled')
    // })
    
    //testing first name
    it('can type a first name', () => {
        cy.get('input[name=first_name]')
        .type('here is a name')
        .should('have.value', 'here is a name')
    })

    // testing last name
    it('can type a last name', () => {
        cy.get('input[name=last_name]')
        .type('here is another name')
        .should('have.value', 'here is another name')
    })

    // testing email
    it('can type an email', () => {
        cy.get('input[name=email]')
        .type('here is an email')
        .should('have.value', 'here is an email')
    })

    //testing passwords
    it('can type a password', () => {
        cy.get('input[name=password]')
        .type('here is a password')
        .should('have.value', 'here is a password')
    })

    //test that button is working
    it('the button should be working now', () => {
        cy.get('button').should('not.be.disabled')
    })

    // test that checkbox is working
    // it('the checkbox should be working now', () => {
    //     cy.get('checked').should('not.be.disabled')
    // })
})