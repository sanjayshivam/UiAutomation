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
       })
    })

    it('delayAlert',()=>{
        cy.get('#timerAlertButton').click()
        cy.on('window:alert',(t)=>{
            expect(t).to.be.eql('This alert appeared after 5 seconds')

        })
    })

    it('confirm alert OK',()=>{
        cy.get('#confirmButton').click()
        cy.on('window:confirm',(c)=>{
            expect(c).to.be.eql('Do you confirm action?')
        })
        cy.get('#confirmResult').should('have.text','You selected Ok')
    })

    it('confirm alert cancel',()=>{
        cy.get('#confirmButton').click()
        cy.on('window:confirm',(c)=>{
            expect(c).to.be.eql('Do you confirm action?')
            return false
        })
        cy.get('#confirmResult').should('have.text','You selected Cancel')
    })

    it('prompt alert ok',()=>{
        cy.window().then((pw)=>{
            cy.stub(pw,'prompt').returns('test')
        })
        cy.get('#promtButton').click()
        cy.on('window:prompt',(p)=>{
            expect(p).to.be.eql('Please enter your name')
        })
        cy.get('#promptResult').invoke('text').then((val)=>{
            expect(val).to.be.eql('You entered test')
        })
    })

     it('prompt alert cancel',()=>{
        cy.window().then((pw)=>{
            cy.stub(pw,'prompt').returns(false)
        })
        cy.get('#promtButton').click()       
    })
})    