describe('Movie App Test', function () {

  /** 
   *Home page loads up with the search bar 
  */

  it('view movie page', function () {
    cy.visit('http://localhost:4200/')
    cy.screenshot();
  })

  /** 
   * Type in Keywords
   * Search results come back
  */

  it('Search movie ', function () {
    cy.wait(3000);
    cy.get('input').type('Batman');

  })

  /** 
   * Search results come back
  */

  it('Checking Movie List Api Response', function () {
    cy.get('div > .flex-container').find('app-poster').should('to.have.length', 10);
    // cy.screenshot();
  })

  //click on the movie card
  it('Click on movie card to movie detail page', function () {
    cy.wait(3000);
    cy.screenshot();
    cy.get('div > .flex-container').find('app-poster').first().click();
  })

  it('Click on back button ', function () {
    cy.screenshot();
    cy.wait(3000);
    cy.get('.container').find('mat-icon').click();
  })
})
