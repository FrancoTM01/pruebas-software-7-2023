describe("CRUD Pago de Materia", () => {
    beforeEach(() => {
      cy.visit("http://localhost:8100");
    });
  
    it("GetPagoDeMateria()", () => {
      cy.get("ion-tab-button").eq(4).click(); // Ajusta el índice según la posición de la pestaña de Pago de Materia
      cy.wait(1000);
  
      cy.get("ion-item").should("be.visible");
    });
  
    it("AddPagoDeMateria()", () => {
        cy.get("ion-tab-button").eq(4).click();
        cy.wait(1000);
    
        cy.get("#campoMateria").find("input").type("Nombre de la Materia cypress", { force: true });
        cy.get("#campoMonto").find("input").type("100", { force: true });
    
        cy.get("#addPagoDeMateria").not("[disabled]").click({ force: true });
      });
  
    it("UpdatePagoDeMateria()", () => {
      cy.get("ion-tab-button").eq(4).click(); // Ajusta el índice según la posición de la pestaña de Pago de Materia
      cy.wait(1000);
    
      // Esperar a que el campo de entrada #campoMateria esté visible y escribir en él
      cy.get("#campoMateria input", { timeout: 5000 }).should("be.visible").clear().type("Nombre de la Materia actualizado");
    
      // Esperar a que el campo de entrada #campoMonto esté visible y escribir en él
      cy.get("#campoMonto input", { timeout: 5000 }).should("be.visible").clear().type("200");
    
      // Guardar cambios
      cy.get("#updatePagoDeMateria").not("[disabled]").click({ force: true });
    });
  
    it("DeletePagoDeMateria()", () => {
      cy.get("ion-tab-button").eq(4).click(); // Ajusta el índice según la posición de la pestaña de Pago de Materia
      cy.wait(1000);
  
      // Realizar acciones para eliminar un pago de materia
    });
  });