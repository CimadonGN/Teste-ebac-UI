/// <reference types="cypress"/>

describe('Funcionalidade: Login', ( ) => {

    it('Deve fazer login com suvesso', ()=> {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
        cy.get('#username') .type('gabriel.ncimadon@gmail.com')
        cy.get('#password').type('!Whisper329951')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, gabriel.ncimadon')
    })
})