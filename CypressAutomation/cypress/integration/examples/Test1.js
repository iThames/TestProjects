describe('My First Test Suite', () => {
    it('My first testcase', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      cy.get('.product:visible').should('have.length',4)
      cy.get('.products').find('.product').should('have.length',4)
      cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
      cy.get('.products').find('.product').each(($e1, index, $list) => {
        const product_name = $e1.find('.product-name').text()
        if(product_name.includes('Cashews')){
          cy.wrap($e1).find('button').click() //wrap method yields $el before it finds and peforms actionable click
        }

      })
      // const brand_name = cy.get('.brand').text() //won't work as text cannot be retrieved synchronously
      cy.get('.brand').should('have.text', 'GREENKART') //works
      cy.get('.brand').then(($el => {
        cy.log($el.text())
      })

      )
    })
  })