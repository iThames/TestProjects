import HomePage from "./pageObjects/HomePage"
import ProductPage from "./pageObjects/ProductPage"
import CheckOutPage from "./pageObjects/CheckoutPage"

describe('Hooks', () => {
    before(function () {
        // runs once before all tests in teh block
        cy.fixture('sample').then((data) => {
            this.data = data
        })
    })

    it('Hooks and custom commands testcase', function () {
        const homePage = new HomePage()
        const productPage = new ProductPage()
        const checkoutPage = new CheckOutPage()
        
        cy.visit(Cypress.env('url')+'/angularpractice/') // enviornment variable example
        homePage.getName().type(this.data.name)
        homePage.getGender().select(this.data.gender)

        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getName().should('have.attr','minlength','2')
        homePage.getEntrepreneur().should('have.prop','disabled',true)
        homePage.getEntrepreneur().should('be.disabled')
        // cy.pause() // for debugging, test will pause

        homePage.getShopTab().click()
        this.data.productName.forEach((element) => cy.selectProduct(element))
        productPage.checkOutButton().click()

        //calculate the total
        let expected_price = 0
        let actual_price = 0
        let item_price = 0
        var temp
        cy.get('tr td:nth-child(4) > strong').each(($el, index, $list) => {
            // item_price = Number($el.text().substring(3))
            temp = $el.text().split(" ")
            item_price = Number(temp[1].trim())
            expected_price = expected_price + item_price
        }).then(() => {
            cy.log(expected_price)
        })
        cy.get('h3 > strong').then(($el) => {
            temp = $el.text().split(" ")
            actual_price = Number(temp[1].trim())
            expect(actual_price).to.equal(expected_price)
        })
       
        checkoutPage.checkOutButton().click()
        cy.get('#country').type('India')
        // Cypress.config('defaultCommandTimeout', 10000) // explicity wait command is applicable only for actions after the wait specified line
        cy.get('.suggestions a', { timeout: 10000 }).click() //timeout example
        cy.get('#checkbox2').check({ force:true })
        cy.get('.ng-untouched > .btn').click()
        //cy.get('.alert').should('have.text',"Success! Thank you! Your order will be delivered in next few weeks :-).")
        cy.get('.alert').then(($el) => {
            expect($el.text().includes('Success! Thank you! Your order will be delivered in next few weeks :-).')).to.be.true
        })
    })
  }) 