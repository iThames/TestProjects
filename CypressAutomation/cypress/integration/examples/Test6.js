describe('My First Test Suite', () => {
    it('Hover over testcase', () => {
      //mouse over popups and handle invisible elements
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      //Solution1 - jQuery show method
      // cy.get('.mouse-hover-content').invoke('show')
      // cy.contains('Top').click()

      //Solution2 - cypress to force click regardless of its actionable state i.e here hidden element
      cy.contains('Top').click({ force: true })

      cy.url().should('include','top')
    })
  })