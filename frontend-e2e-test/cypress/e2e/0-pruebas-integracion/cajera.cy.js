describe("CRUD Cajeras", () => {
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

    cy.get("#nombreCompleto input").type("Nombre Completo cypress", { force: true });
    cy.get("#turno input").type("Turno cypress", { force: true });
    cy.get("#numeroCaja input").type("1", { force: true });

    cy.get("#addCajera").not("[disabled]").click({ force: true });
  });

  it("UpdateCajera()", () => {
    cy.get("ion-tab-button").eq(4).click();
    cy.wait(1000);

    cy.get("ion-item").first().find("ion-button:contains('Modificar')").click({ force: true });

    cy.get("#nombreCompleto input").clear().type("Nombre Completo actualizado", { force: true });
    cy.get("#turno input").clear().type("Turno actualizado", { force: true });
    cy.get("#numeroCaja input").clear().type("2", { force: true });

    cy.get("#modificarCajera").click({ force: true });
  });

  it("DeleteCajera()", () => {
    cy.get("ion-tab-button").eq(4).click();
    cy.wait(1000);

    cy.get("ion-item").first().find("ion-button:contains('Eliminar')").click({ force: true });
  });
});