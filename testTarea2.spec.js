/// <reference types="Cypress" />

//-----------------------------------------------------------------------------------------------------------------

describe("Test ejercicio 1",() =>{
   
    beforeEach(() => {
        cy.visit('baseUrl');
      });
    
    context('1.1',()=>{
        it('should write and validate what it contains',()=>{
            cy.get('#email1').type('fake@email.com').should('have.value','fake@email.com');
    })
})
    context('1.2',()=>{
        it('should delete the text and validate it',()=>{
            cy.get('#email1').type('fake@email.com');
            cy.get('#email1').type('{selectall}{backspace}');
            cy.get('#email1').should('not.have.value', 'fake@email.com');
})
})
    context('1.3',()=>{
        it('should enable textbox and write message',()=>{
            cy.get("[disabled]").invoke('prop','disabled',false);
            cy.get(".action-disabled").type('Text typed inside disabled textarea');
            cy.contains('Text typed inside disabled textarea').should('be.visible');
        })


    })

})
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
describe("Test ejercicio 2",()=>{

    beforeEach(() => {
        cy.visit('baseUrl');
      });

    context("2.1",()=>{
        it("should focus and validate the orange color",()=>{
            cy.get('#password1').focus();
            cy.get('#actions>div>div:nth-child(5)>div>form>div>label').should('have.css','color','rgb(255, 165, 0)');
            cy.get('#actions>div>div:nth-child(5)>div>form>div>label').should('have.css','border-bottom-color','rgb(255, 165, 0)');
        })
    })
    context("2.2",()=>{
        it("should blur and validate the red color",()=>{
            cy.get('#fullName1').focus().blur();
            cy.get('#actions>div>div:nth-child(7)>div>form>div>label').should('have.css','color','rgb(255, 0, 0)');
            cy.get('#actions>div>div:nth-child(7)>div>form>div>label').should('have.css','border-bottom-color','rgb(255, 0, 0)')
        })
    })
})

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
describe("Test ejercicio 3",() =>{

    beforeEach(() => {
        cy.visit('baseUrl');
      });

    context('3.1',()=>{
        it('should write and confirm form submission',()=>{
            cy.get('#couponCode1').type('cupón de Prueba{enter}');
            cy.get('#actions>div>div:nth-child(10)>div>p').contains('Your form has been submitted!').should('be.visible');

        })
    })

})
//------------------------------------------------------------------------------------------------------------------------------------------------------------------
describe("Test ejercicio 4",()=>{

    beforeEach(() => {
        cy.visit('baseUrl');
      });

    context("4.1",()=>{
        it('should click and validate the popup window',()=>{
            cy.get('.action-btn').click();
            cy.get('.popover').should('be.visible');
        })
    })
    context('4.2',()=>{
        it('should click on various coordinates',()=>{
            cy.get('#action-canvas').click(80,75).click(170,75).click(80, 165).click(100,185).click(125,190).click(150,185);
            cy.get('#action-canvas').click(80,75).should('have.css','background','rgb(255, 0, 0)')
            //cy.get('#action-canvas').should('have.css','cursor','pointer')
        })
    })
    context('4.3',()=>{
        it('should click on some buttons and validate that a pop-up window appears',()=>{
            cy.get('.action-labels>.label').click({ multiple: true })
            cy.get('.action-labels>.popover').should('have.length',6);
        })
    })
    context('4.4',()=>{
        it('should force a click',()=>{
            cy.get('.action-opacity>.btn').click({ force: true })
        })
    })
})

//--------------------------------------------------------------------------------------------------------------------------------------------------
describe("Test ejercicio 5",()=>{

    beforeEach(() => {
        cy.visit('baseUrl');
      });

    context("5.1",()=>{
        it("should double click and validate input element",()=>{
            cy.get('.action-div').dblclick(); 
            cy.get('.action-input-hidden').should('be.visible')

        })
    })
})

//-------------------------------------------------------------------------------------------------------------------------------------------------------
describe("Test ejercicio 6",()=>{

    beforeEach(() => {
        cy.visit('baseUrl');
      });

    context("6.1",()=>{
        it("should right click and validate input element",()=>{
            cy.get('.rightclick-action-div').rightclick();
            cy.get('.rightclick-action-input-hidden').should('be.visible');
        })
     })
})
