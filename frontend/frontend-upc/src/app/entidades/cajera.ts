export class Cajera {
    id: number;
    nombreCompleto: string;
    turno: string;
    numeroCaja: number;
  
    constructor(id: number, nombreCompleto: string, turno: string, numeroCaja: number) {
      this.id = id;
      this.nombreCompleto = nombreCompleto;
      this.turno = turno;
      this.numeroCaja = numeroCaja;
    }
  }