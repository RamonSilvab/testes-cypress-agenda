/// <reference types="cypress" />

describe('Teste para inclusão de contato na agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve preencher o formulário com nome, email e telefone', () => {
        cy.get('[type="text"]').type('Ramon Silva')
        cy.get('[type="email"]').type('ramon@ebac.com.br')
        cy.get('[type="tel"]').type('11987654123')
        cy.get('.adicionar').click()
    })
})