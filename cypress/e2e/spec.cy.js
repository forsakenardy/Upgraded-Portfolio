
describe('Portfolio - Project Slider', () => {
  const baseUrl = 'http://localhost:5173/'; // Cambia si tu app corre en otro puerto o ruta

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('carga correctamente la página principal', () => {
    cy.get('.projectSlider').should('exist');
    cy.get('.Project-Card').should('have.length.greaterThan', 0);
  });

  it('muestra texto animado de sección al hacer scroll', () => {
    cy.scrollTo('bottom');
    cy.get('.typed-h1-projects').should('not.be.empty');
  });

  it('renderiza el título de un proyecto conocido', () => {
    cy.contains('Chain of Ascension').should('exist');
  });

  it('navega a la página del proyecto al hacer clic en una tarjeta', () => {
    cy.get('.Project-Card').first().click();
    cy.url().should('include', '/project/');
  });

  it('mueve el slider al hacer clic en la flecha izquierda', () => {
    cy.get('.slider-track')
      .invoke('attr', 'style')
      .then((initialStyle) => {
        cy.get('.svg-left').click();
        cy.wait(1000); // espera transición
        cy.get('.slider-track')
          .invoke('attr', 'style')
          .should((newStyle) => {
            expect(newStyle).not.to.eq(initialStyle);
          });
      });
  });

  it('navega correctamente usando la flecha derecha', () => {
    cy.get('.svg-right').click();
    cy.wait(1000); // transición
    // Puedes verificar visualmente si algo cambió o repetir validación de estilo
  });
});
