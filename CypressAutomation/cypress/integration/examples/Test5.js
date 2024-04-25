describe('My First Test Suite', () => {
    it('Web tables testcase', () => {
      //webtables
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      cy.get('[name="courses"] tr td:nth-child(2)').each(($el, index, $list) => {
        const course_name = $el.text()
        if(course_name.includes('Python')){
            //move to sibling and get the text
            cy.get('[name="courses"] tr td:nth-child(2)').eq(index).next().then(($price_el) => {
                const price =$price_el.text()
                expect(price).to.equal('26')
            }) 
          }
        })
      })
  })