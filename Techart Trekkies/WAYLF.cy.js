
describe('testing of navbar', () =>{
    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
       })
        cy.visit('http://staging.techarttrekkies.com/')
    })

    
        it('should check a checkbox', () => { 
        // Check the checkbox
        cy.get('input[type="checkbox"]').check()
                .should('be.checked')
        cy.get('.justify-content-center > .btn-main').click()
         })  

         it('should uncheck a checkbox', () => { 
            // Check the checkbox
            cy.get('input[type="checkbox"]').uncheck()
                    .should('not.be.checked')
            cy.get('.justify-content-center > .btn-main').click()
             })  
          
            
         it('checkbox for technlogy solutions', () => { 
            // Check the checkbox
             cy.get('input[type="checkbox"]').check().should('have.value', 'Technology Solutions')
                        .should('be.checked')
           cy.get('.justify-content-center > .btn-main').click()
            })    
        
        it('checkbox for technlogy solutions', () => { 
            cy.get('input[type="checkbox"]').uncheck().should('have.value', 'Technology Solutions')
            .should('not.be.checked')
             cy.get('.justify-content-center > .btn-main').click()
        })
        // it('Uncheck the checkbox for technlogy solutions', () => { 
        //             // Check the checkbox
        //     cy.get('input[type="checkbox"]').uncheck().should('have.value', 'Technology Solutions')
        //     cy.get('.justify-content-center > .btn-main').click()
        //     })   
// // Assert that the checkbox is checked
//     cy.get('input[type="checkbox"]').should('be.checked')
          
//     // // Uncheck the checkbox
//     // cy.get('input[type="checkbox"]').uncheck()
          
//     //  // Assert that the checkbox is not checked
//     // cy.get('input[type="checkbox"]').should('not.be.checked')
    
         
          
          
 })

