/// <reference types="cypress" />

describe('Teste para remoção de contato na agenda', () => {
    

    it('Deve remover os contatos da agenda', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
})