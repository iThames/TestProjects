describe('My First Test Suite', () => {
    it('Opentab testcase', () => {
      //Alert, confirmation popoups
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get('#alertbtn').click()
      cy.get('#confirmbtn').click()
      //window:alert
      cy.on('window:alert',(str) => {
        //Mocha test framework run on top of cypress library
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
      })
      
      //window:confirm
      cy.on('window:confirm',(str) => {
        //Mocha test framework run on top of cypress library
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
      })

      //Opentab click opens in same tab
      //Solution1: remove attribute - recommended
      cy.get('#opentab').invoke('removeAttr','target').click()
      cy.origin('https://www.qaclickacademy.com/', () => {
        cy.get('#navbarSupportedContent a[href*="about"]').click()
        cy.get('.mt-50 h2').should('contain','Welcome to QAClick Academy ')
      })
      // //Solution2: get href property value and visit the url
      // cy.get('#opentab').then(($el) => {
      //   const url = $el.prop('href')
      //   cy.log(url)
      //   cy.visit(url)
      //   cy.origin(url, () => {
      //   cy.get('#navbarSupportedContent a[href*="about"]').click()
      //   cy.get('.mt-50 h2').should('contain','Welcome to QAClick Academy ')
      // })
      })
      // cy.go('back')
      // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

      // //Open child window
      // https://www.youtube.com/watch?v=u6_D9MzkG9M&ab_channel=SQAStepbyStep
      // cy.get('#openwindow').click()
  })