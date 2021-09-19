/// <reference types="Cypress" />

describe('login Page',()=>{
   it('Should display login Name in login card',()=>{
       cy.vist('/');
       cy.get(".card-header").should('contain.text','login')
   })
})