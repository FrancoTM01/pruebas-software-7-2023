export class PagoDeMateria {
  id: number;
  idCajera: number;
  idUsuario: number;
  fechaPago: Date;
  monto: number;
  materia: string;

  constructor(
    id: number,
    idCajera: number,
    idUsuario: number,
    fechaPago: Date,
    monto: number,
    materia: string
  ) {

    this.id = id;
    this.idCajera = idCajera;
    this.idUsuario = idUsuario;
    this.fechaPago = fechaPago;
    this.monto = monto;
    this.materia = materia;
  }
}