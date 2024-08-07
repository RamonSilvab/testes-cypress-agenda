/// <reference types="cypress" />

describe('Teste para inclusão de contato na agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve altera o primeiro contato da agenda', () => {
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