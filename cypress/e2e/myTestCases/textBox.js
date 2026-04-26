
const data=require('../../support/constantvalues.js')

describe('text box test suite',()=>{
    it('test box tets case',()=>{
        cy.visit('https://demoqa.com/')
        cy.get('[href="/elements"]').click()
        cy.get('[href="/text-box"]').click()
        cy.get('#userName').type('Test')
        cy.get('#userEmail').type(data.fixedVal.email)
        cy.get('#currentAddress').type(data.fixedVal.currentAddress)
        cy.get('#permanentAddress').type(data.fixedVal.parmanenetAddress)
        cy.get('#submit').click()
        cy.get('#output').find('p').each(($el,index,$col)=>{
            cy.wrap($el).invoke('text').then((val)=>{
                cy.log(val)
            })
        })

    })
    
}) 
// console.log(data)