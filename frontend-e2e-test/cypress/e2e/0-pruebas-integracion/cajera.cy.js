describe("CRUD Cajera", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8100");
  });

  it("GetCajera()", () => {
    cy.get("ion-tab-button").eq(4).click();
    cy.wait(1000);

    cy.get("ion-item").should("be.visible");
  });

  it("AddCajera()", () => {
    cy.get("ion-tab-button").eq(4).click();
    cy.wait(1000);
  
    cy.get("#nombreCompleto").find("input").type("Nombre Completo cypress", { force: true });
    cy.get("#turno").find("input").type("turno cypress", { force: true });
    cy.get("#numeroCaja").find("input").type("1", { force: true });
  
    cy.get("#addCajera").not("[disabled]").click({ force: true });
  });

/*  it("UpdateCajera()", () => {
    // Navegar a la pestaña de Cajeras
    cy.get("ion-tab-button").eq(4).click();
    cy.wait(1000);
  
    // Esperar a que el campo de entrada #nombreCompleto esté visible y escribir en él
    cy.get("#nombreCompleto input", { timeout: 5000 }).should("be.visible").type("{selectall}{backspace}Nombre Completo actualizado");
  
    // Esperar a que el campo de entrada #turno esté visible y escribir en él
    cy.get("#turno input", { timeout: 5000 }).should("be.visible").type("{selectall}{backspace}turno actualizado");
  
    // Esperar a que el campo de entrada #numeroCaja esté visible y escribir en él
    cy.get("#numeroCaja input", { timeout: 5000 }).should("be.visible").type("{selectall}{backspace}2");
  
    // Guardar cambios
    cy.get("#updateCajera").not("[disabled]").click({ force: true });
  }); */

  it("DeleteCajera()", () => {
    cy.get("ion-tab-button").eq(4).click();
    cy.wait(1000);

  });
});