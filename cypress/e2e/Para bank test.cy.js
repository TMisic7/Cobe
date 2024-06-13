/// <reference types="cypress" />

describe("All login and registration tests", ()=> {
beforeEach(()=>{
    cy.visit("https://parabank.parasoft.com/parabank/index.htm")
})
    it("Login with valid data", () => {
        
        cy.get('.leftmenu > :nth-child(2) > a').click(),
        cy.get(':nth-child(2) > .input').type("Tomislav"),
        cy.get(':nth-child(4) > .input').type("Tomislav"),
        cy.get(':nth-child(5) > .button').click()
        cy.get('.smallText').should('include.text', 'Welcome Tomislav')
    })

    it("Login with invalid username", ()=>{
        
        cy.get('.leftmenu > :nth-child(2) > a').click(),
        cy.get(':nth-child(2) > .input').type("Rawr"),
        cy.get(':nth-child(4) > .input').type("Tomislav"),
        cy.get(':nth-child(5) > .button').click()
        cy.get('.error').should('include.text', 'The username and password could not be verified')
    })
    it("Login with invalid password", ()=>{
        
        cy.get('.leftmenu > :nth-child(2) > a').click(),
        cy.get(':nth-child(2) > .input').type("Tomislav"),
        cy.get(':nth-child(4) > .input').type("abc123"),
        cy.get(':nth-child(5) > .button').click()
        cy.get('.error').should('include.text', 'The username and password could not be verified')
    })
    it("Forgot Login Info", ()=>{
        
        cy.get('#loginPanel > :nth-child(2) > a').click()
        cy.get('.title').should('include.text', 'Customer Lookup')
    })
    it("Forgot Login Info Fields", ()=>{
        
        cy.get('#loginPanel > :nth-child(2) > a').click()
        cy.get('#firstName').type("Tomislav")
        cy.get('#lastName').type("Mišić")
        cy.get('[name="address.street"]').type("Ulica kneza Trpimira 1a")
        cy.get('[name="address.city"]').type("Osijek")
        cy.get('[name="address.state"]').type("Slavonija")
        cy.get('[name="address.zipCode"]').type("31000")
        cy.get('#ssn').type("0123456789")
        cy.get('[colspan="2"] > .button').click()
        cy.get('#rightPanel > :nth-child(2)').should('include.text', 'Your login information was located successfully. You are now logged in')
    })
    it("Registration Form", ()=>{
        cy.get('#loginPanel > :nth-child(3) > a').click()
        cy.get('[name="customer.firstName"]').click().type("Tomislav")
        cy.get('[name="customer.lastName"]').type("Mišić")
        cy.get('[name="customer.address.street"]').type("Ulica kneza Trpimira 1a")
        cy.get('[name="customer.address.city"]').type("Osijek")
        cy.get('[name="customer.address.state"]').type("Slavonija")
        cy.get('[name="customer.address.zipCode"]').type("31000")
        cy.get('[name="customer.phoneNumber"]').type("666 555 765")
        cy.get('[name="customer.ssn"]').type("0123456789")
        cy.get('[name="customer.username"]').type("Tomislav")
        cy.get('[name="customer.password"]').type("Tomislav")
        cy.get('[name="repeatedPassword"]').type("Tomislav")
        cy.get('[colspan="2"] > .button').click()
        cy.get('#rightPanel > :nth-child(2)').should('include.text', 'If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information')
    })
})

describe("Home screen footer", () => {
beforeEach(()=>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
    })
    it("Home button", ()=>{
        cy.get('#footerPanel > :nth-child(1) > :nth-child(1) > a').click()
        cy.url().should('eq', 'https://parabank.parasoft.com/parabank/index.htm')  
    })
    it("About Us button", ()=>{
        cy.get('#footerPanel > :nth-child(1) > :nth-child(2) > a').click()
        cy.url().should('eq', 'https://parabank.parasoft.com/parabank/about.htm')
    })
    it("Services button", ()=>{
        cy.get('#footerPanel > :nth-child(1) > :nth-child(3) > a').click()
        cy.url().should('eq', 'https://parabank.parasoft.com/parabank/services.htm')
    })
    it("Products button", ()=>{
        cy.get('#footerPanel > :nth-child(1) > :nth-child(4) > a').click()
        cy.url().should('eq', 'https://parabank.parasoft.com/parabank/products.htm')
    })
    it("Locations button", ()=>{
        cy.get('#footerPanel > :nth-child(1) > :nth-child(5) > a').click()
        cy.url().should('eq', 'https://parabank.parasoft.com/parabank/locations.htm')
    })
    it("Forum button", ()=>{
        cy.get('#footerPanel > :nth-child(1) > :nth-child(6) > a').click()
        cy.url().should('eq', 'https://parabank.parasoft.com/parabank/forum.htm')
    })
    it("Site Map button", ()=>{
        cy.get(':nth-child(1) > :nth-child(7) > a').click()
        cy.url().should('eq', 'https://parabank.parasoft.com/parabank/sitemap.htm')
    })
    it("Contact Us button", ()=>{
        cy.get(':nth-child(8) > a').click()
        cy.url().should('eq', 'https://parabank.parasoft.com/parabank/contact.htm')
    })
    it("Link at the bottom", ()=>{
        cy.get('.visit > :nth-child(2) > a').click()
        cy.url().should('eq', 'https://www.parasoft.com/')
    })
})
describe("Buttons on the left side", () => {

    it("About Us button", ()=>{
        cy.get('[href="about.htm"]').click()
        cy.url().should('eq', 'https://parabank.parasoft.com/parabank/about.htm')
    })
    it("Services button", ()=>{
        cy.get('[href="services.htm"]').click()
        cy.url().should('eq', 'https://parabank.parasoft.com/parabank/services.htm')
    })
    it("Products button", ()=>{
        cy.get('[href="http://www.parasoft.com/jsp/products.jsp"]').click()
        cy.url().should('eq', 'https://parabank.parasoft.com/parabank/products.htm')
    })
    it("Locations button", ()=>{
        cy.get('[href="http://www.parasoft.com/jsp/pr/contacts.jsp"]').click()
        cy.url().should('eq', 'https://parabank.parasoft.com/parabank/locations.htm')
    })
    it("Admin Page button", ()=>{
        cy.get('[href="admin.htm"]').click()
        cy.get('.title').should('include.text', 'Administration')
    })
})
describe("Header buttons", ()=>{
beforeEach(()=>{
    cy.visit("https://parabank.parasoft.com/parabank/index.htm")
})
    it("Home button header", ()=>{
        cy.get('.home > a').click()
        cy.url().should('eq', 'https://parabank.parasoft.com/parabank/index.htm')
    })
    it("About Us button", ()=>{
        cy.get('.aboutus > a').click()
        cy.url().should('eq', 'https://parabank.parasoft.com/parabank/about.htm')
    })
    it("Contact Us button",()=>{
        cy.get('.contact > a').click()
        cy.get('#name').type("Tomislav")
        cy.get('#email').type("tomislav@tomislav.com")
        cy.get('#phone').type("666 555")
        cy.get('#message').type("Yes, this Tomislav")
        cy.get('[colspan="2"] > .button').click()
        cy.get('#rightPanel > :nth-child(3)').should('include.text', 'A Customer Care Representative will be contacting you')
    })
    it("Logo button at the top of the header", ()=>{
        cy.get('.logo').click()
        cy.url().should('eq', 'https://parabank.parasoft.com/parabank/index.htm')
    })
})
describe("ATM and Online services menus", ()=>{
beforeEach(()=>{
    cy.visit("https://parabank.parasoft.com/parabank/index.htm")
})
    it("Withdraw Funds button", ()=>{
        cy.get('ul.services > :nth-child(2) > a').click()
        .should('include.text', 'Withdraw Funds')
    })
    it("Transfer Funds button", ()=>{
        cy.get('ul.services > :nth-child(3) > a', {timeout: 4000}).click()
        .should('include.text', 'Transfer Funds')
    })
    it("Check Balances button", ()=>{
        cy.get('ul.services > :nth-child(4) > a', {timeout: 4000}).click()
        .should('include.text', 'Balance')
    })
    it("Make Deposits button", ()=>{
        cy.get('ul.services > :nth-child(5) > a', {timeout: 4000}).click()
        .should('include.text', 'Make Deposit')
    })
    it("Bill Pay button", ()=>{
        cy.get('.servicestwo > :nth-child(2) > a').click()
        .should('include.text', 'Pay bill')
    })
    it("Account History button", ()=>{
        cy.get('.servicestwo > :nth-child(3) > a').click()
        .should('include.text', 'History')
    })
    it("Transfer Funds button", ()=>{
        cy.get('.servicestwo > :nth-child(4) > a').click()
        .should('include.text', 'Transfer Funds')
    })
    it("Read more button", ()=>{
        cy.get('#rightPanel > :nth-child(4) > a').click()
        .should('include.text', 'Read more')
    })
})
describe("Latest News buttons", ()=>{
beforeEach(()=>{
    cy.visit("https://parabank.parasoft.com/parabank/index.htm")
})
    it("ParaBank is Now Re-Opened button", ()=>{
        cy.get('.events > :nth-child(2) > a').click()
        cy.get('#rightPanel > :nth-child(4)').should('include.text', 'ParaBank Is Now Re-Opened')
    })
    it("New Online Bill Paying button", ()=>{
        cy.get('.events > :nth-child(3) > a').click()
        cy.get('#rightPanel > :nth-child(6)').should('include.text', 'New! Online Bill Pay')
    })
    it("New Online Account Transfer button", ()=>{
        cy.get('.events > :nth-child(4) > a').click()
        cy.get('#rightPanel > :nth-child(8)').should('include.text', 'New! Online Account Transfers')
    })
})