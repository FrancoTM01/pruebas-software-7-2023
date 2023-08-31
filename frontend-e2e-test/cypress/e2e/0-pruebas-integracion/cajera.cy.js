describe("CRUD Cajera", () => {//Titulo
    //Antes que nada, abrir el navegador en el proyecto Frontend que es el puerto 8100
    beforeEach(() => {
        cy.visit("http://localhost:8100"); //Frontend de Produccion
    });

    //Servicio API - GetCajera()
    it("GetCajera()", () => {
        cy.wait(1000);//Esperar 1 seg.
        cy.get("ion-tab-button").eq(4).click(); // click en el TAB de Cajera
        cy.wait(1000);//Esperar 1 seg.

        cy.get("ion-item").should("be.visible")
        .should("not.have.length", "0"); //Verifica que exista al menos un (ion-item)
    });

    //Servicio API - AddCajera(entidad)
    it("AddCajera(entidad)", () => {
        cy.get("ion-tab-button").eq(4).click(); // click en el TAB de Cajera
        cy.wait(1000);//Esperar 1 seg.
        

        cy.get("#nombreCompleto")
            .type("insertar nombreCompleto cypress", { delay: 100 })
            .should("have.value", "insertar nombreCompleto cypress");

        cy.wait(500);//Esperar medio seg.

        cy.get("#turno")
            .type("insertar turno cypress", { delay: 100 })
            .should("have.value", "insertar turno cypress");

        cy.wait(500);//Esperar medio seg.

        cy.get("#numeroCaja")
            .type("insertar numeroCaja cypress", { delay: 100 })
            .should("have.value", "insertar numeroCaja cypress");

        cy.wait(500);//Esperar medio seg.

        cy.get("#addCajera").not("[disabled]").click();
    });
});