/// <reference types="Cypress" />
const methds=require('../../support/methodssup.js')

describe('Intercept test suite',()=>{
    it('intercept test case',()=>{
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        methds.interceptMethod()
    })
})