/// <reference types="cypress" />



describe('login Page',()=>{
   it('Should display login Name in login card',()=>{
       
       cy.visit('/');
       cy.get(".card-header").should('contain.text','Login');
   }),
   it('Should be able  to enter name in the form',()=>{
       cy.get("input[name='username']").then(($el)=>{
           $el.hasClass(".form-control");
   }).type("Mohit");
   cy.get("input[name='password']").then(($el)=>{
    $el.hasClass(".form-control");
}).type("Jain");
}),
it("should be able to change my location",()=>{
    cy.get("button.btn-dark").click();
    cy.url().should("contain","success");
}),
// it("should be able  to write something",()=>{
//     cy.get("textarea.form-control").type(" Hey Welcome to E2E test").then(()=>{
//         cy.get("button.btn-success").should("contain.text","openDialog").click().then(()=>{
//               cy.$$("button.btn-secondary").trigger("click")
//         })  
//     });
    
// })
it("should  be able to revert back to Login Page",()=>{
    cy.get("button.btn-dark").should("contain.text","Login").click();
    cy.url().should("equal","http://localhost:4200/login");
})
})