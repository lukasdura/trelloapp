/// <reference types="cypress" />
     
     const email= 'lukas@lukas.sk'
     const password = 'lukas'


beforeEach(() => {   
    
cy.request({
  method:'POST', 
   url:'/login',
    body:{
     email:email,
      password:password
          
}}).then(user=>{
    cy.setCookie('trello_token', user.body.accessToken)
})   
})

it('Login page before open', () => {

   
    cy.visit('/')

    cy.get('#loginMessage')
     .should('be.visible')
      .should('contain.text','User is logged in')

    cy.get('[data-cy="logged-user"]')
     .should('contain.have.text', email)

})