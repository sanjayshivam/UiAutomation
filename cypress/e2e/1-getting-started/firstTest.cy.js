describe('My first test suite',()=>{
    it('my first test case',()=>{
        cy.visit('https://www.google.com/')
        cy.get('[title="Search"]').type("cypress").type('{enter}')
    })
})