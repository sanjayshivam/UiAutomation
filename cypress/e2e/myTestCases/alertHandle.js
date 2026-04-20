describe('alert handling test suite',()=>{
    beforeEach(()=>{
        cy.visit('https://demoqa.com/')
       cy.get('[href="/elements"]').click()
        cy.get('.accordion .element-group:nth-child(3)').click()
             cy.get('[href="/alerts"]').click()
    })
    it('ok alert',()=>{
       cy.get('#alertButton').click()
       cy.on('window:alert',(e)=>{
        expect(e).to.be.eql('You clicked a button')
        // cy.log(e)
       })
    })
    it('confirm alert',()=>{
        cy.get('#confirmButton').click()
        cy.on('window:confirm',(c)=>{
            expect(c).to.be.eql('Do you confirm action?')
            return false
        })
    })
    it('prompt alert ok',()=>{
        cy.window().then((pw)=>{
            cy.stub(pw,'prompt').returns('test')
        })
        cy.get('#promtButton').click()
        // cy.get('#promptResult').should('have.text','')
        cy.get('#promptResult').invoke('text').then((val)=>{
            cy.log(val)
            expect(val).to.be.eql('You entered test')
        })
    })
     it('prompt alert cancel',()=>{
        cy.window().then((pw)=>{
            cy.stub(pw,'prompt').returns('test')
        })
        cy.get('#promtButton').click()
        cy.on('window:confirm',()=>{
            return false
        })
        // cy.get('#promptResult').should('have.text','')
        cy.get('#promptResult').invoke('text').then((val)=>{
            cy.log(val)
            // expect(val).to.be.eql('You entered test')
        })
    })
})    