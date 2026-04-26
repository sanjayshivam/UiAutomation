function interceptMethod(){
    cy.intercept(
            {method:'GET',
                url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            },
            {
                statusCode:200,
               body:[
                        {
                            "book_name": "Postman",
                            "isbn": "undefined720",
                            "aisle": "232777"
                        }
                ] 
            }
        ).as('respbody')
        cy.get('[class="btn btn-primary"]').click()
        cy.wait('@respbody').then(({request,response})=>{
            cy.get('table tbody tr').should('have.length',response.body.length)
            cy.log(response.body.length)
        })
}
const tst='test'

module.exports={interceptMethod,tst}