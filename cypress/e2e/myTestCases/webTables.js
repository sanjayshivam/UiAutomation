describe('webtables test suite',()=>{
    beforeEach(()=>{
    //     cy.visit('https://demoqa.com/')
    //    cy.get('[href="/elements"]').click()
    cy.loginDemoqa()
        cy.get('[href="/webtables"]').click()
    })
    it('Retrieving single cell data',()=>{
        cy.get('.table tbody tr:nth-child(1) td:nth-child(1)').invoke('text').then((val)=>{
            expect(val).to.be.eql('Cierra')
        })

    })
    it('Retrieving single rows data',()=>{
        cy.get('.table tbody tr:nth-child(1) td').each(($el,index,col)=>{
            cy.wrap($el).invoke('text').then((nval)=>{
                cy.log(nval)
            })

        })
    })
    it('Retrieving all the data from the table',()=>{
        cy.get('.table tbody tr').each(($el,index,$col)=>{
            cy.wrap($el).find('td').each(($el1,index1,$col1)=>{
                cy.wrap($el1).invoke('text').then((val2)=>{
                    cy.log(val2)
                })

            })

        })
    })
})