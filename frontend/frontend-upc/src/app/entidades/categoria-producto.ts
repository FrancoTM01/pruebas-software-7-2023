export class CategoriaProducto {
  public ID_CATEGORIA: number;
  public nombre: string;

  constructor(idCategoria: number, nombre: string) {
    this.ID_CATEGORIA = idCategoria;
    this.nombre = nombre;
  }
}