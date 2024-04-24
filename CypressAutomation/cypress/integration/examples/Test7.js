import 'cypress-iframe'

describe('My First Test Suite', () => {
    it('iFrames testcase', () => {
      // install cypress-iframe plugin: npm install -D cypress-iframe
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      
      cy.frameLoaded('#courses-iframe')
      cy.iframe().find('a[href*="mentorship"]').eq(0).click()
      cy.wait(2000)
      cy.iframe().find('.pricing-title').should('have.length',2)
    })
  })  