describe('My First Test Suite', () => {
    it('Filtered search testcase', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      
      cy.get('.products').find('.product').each(($el, index, $list) => {
        const product_name = $el.find('.product-name').text()
        if(product_name.includes('Cashews')){
          cy.wrap($el).find('button').click() //wrap method yields $el before it finds and peforms actionable click
        }
      })
      
      cy.get('.cart-icon > img').click()
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.contains('Place Order').click()
    })
  })