describe('View the angular movie-home-page', function () {
  it('view movie page', function () {
    cy.visit('http://localhost:3300/')
  })
  it('Check Input Field', function () {
    cy.get('input')
  })
  it('Contains Text Description', function () {
    cy.get('p').contains("Don't know what to search?")
    cy.get('p').contains("Here's an offer you can't refuse")
  })
})

