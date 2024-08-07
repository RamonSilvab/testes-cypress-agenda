/// <reference types="cypress" />

describe('Teste para alteração de contato na agenda', () => {
    it('Deve altera o primeiro contato da agenda', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Ramon Silva')
        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('ramon@ebac.com.br')
        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('28 933334444')
        cy.get('.alterar').click()
    })
})