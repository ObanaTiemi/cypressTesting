/// <reference types="Cypress" />

describe('API Testing with PokeAPI', ()=>{
    
    beforeEach(() =>{
        cy.request('GET', 'pokemon/pikachu').as('pokemon')
    })

    it('Validate content/type', ()=>{
        cy.get('@pokemon')
           .its('headers')
           .its('content-type')
           .should('include', 'application/json; charset=utf-8')
    })

    it('Should return 200', ()=>{
        cy.get('@pokemon')
            .its('status')
            .should('equal', 200)
    })

    it('Validade pokemon name', ()=>{
        cy.get('@pokemon')
            .its('body')
            .should('include', 
                {name: 'pikachu'}
                )
    })

    it('Validade sprites', ()=>{
        cy.get('@pokemon')
        .its('body')
        .its('sprites')
        .should('to.be.a', 'Object')
    })
})