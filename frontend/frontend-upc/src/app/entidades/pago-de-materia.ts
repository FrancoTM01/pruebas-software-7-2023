export class PagoDeMateria {

    idCajera: number;
    idUsuario: number;
    fechaPago: Date;
    monto: number;
    materia: string;
  
    constructor(

      idCajera: number,
      idUsuario: number,
      fechaPago: Date,
      monto: number,
      materia: string
    ) {

      this.idCajera = idCajera;
      this.idUsuario = idUsuario;
      this.fechaPago = fechaPago;
      this.monto = monto;
      this.materia = materia;
    }
  }