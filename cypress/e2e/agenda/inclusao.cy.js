/// <reference types="cypress" />

describe('Teste para inclusão de contato na agenda', () => {
    

    it('Deve preencher o formulário com nome, email e telefone', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('[type="text"]').type('Ramon Silva')
        cy.get('[type="email"]').type('ramon@ebac.com.br')
        cy.get('[type="tel"]').type('11987654123')
        cy.get('.adicionar').click()
    })
})