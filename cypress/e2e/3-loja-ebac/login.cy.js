/// <reference types="cypress"/>

describe('Funcionalidade: Login', ( ) => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', ()=> {
        
        cy.get('#username') .type('gabriel.ncimadon@gmail.com')
        cy.get('#password').type('!Whisper329951')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, gabriel.ncimadon')


    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {       
       
        cy.get('#username') .type('gabriel.teste@gmail.com')
        cy.get('#password').type('!Whisper329951')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {
        
        cy.get('#username') .type('gabriel.ncimadon@gmail.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail gabriel.ncimadon@gmail.com está incorreta.')
        cy.get('.woocommerce-error').should('exist')
        
    });
})