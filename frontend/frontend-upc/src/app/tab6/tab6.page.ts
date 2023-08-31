import { Component, OnInit } from '@angular/core';
import { PagoDeMateria } from '../entidades/pago-de-materia';
import { PagoDeMateriaService } from '../servicios-backend/pago-de-materia/pago-de-materia.service';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page {
  
  idCajera: number | null = null;
  idUsuario: number | null = null;
  fechaPago: string = '';
  monto: number | null = null;
  materia: string = '';
  pagoMateriaSeleccionado: PagoDeMateria | null = null;
  listaPagosMateria: PagoDeMateria[] = [];


  constructor(private pagoDeMateriaService: PagoDeMateriaService) {}

  ngOnInit() {
    this.obtenerPagosDeMateria();
  }

  obtenerPagosDeMateria() {
    this.pagoDeMateriaService.GetAll().subscribe(
      (response) => {
        // Si 'listaPagosMateria' existe, asigna los datos
        // Ejemplo: this.listaPagosMateria = response.body;
      },
      (error) => {
        console.error('Error al obtener los pagos de materia:', error);
      }
    );
  }

  obtenerPagoMateriaPorId(id: number) {
    this.pagoDeMateriaService.GetById(id).subscribe(
      (response) => {
        this.pagoMateriaSeleccionado = response.body;
      },
      (error) => {
        console.error('Error al obtener el pago de materia por ID:', error);
      }
    );
  }

  editarPagoMateria(pago: PagoDeMateria) {
    this.pagoMateriaSeleccionado = { ...pago };
  }

  guardarModificacionPagoMateria() {
    this.pagoDeMateriaService.Update(this.pagoMateriaSeleccionado!).subscribe(
      (response) => {
        this.obtenerPagosDeMateria();
        this.cancelarModificacion();
      },
      (error) => {
        console.error('Error al modificar el pago de materia:', error);
      }
    );
  }

  eliminarPagoMateria(id: number) {
    this.pagoDeMateriaService.Delete(id).subscribe(
      (response) => {
        this.obtenerPagosDeMateria();
      },
      (error) => {
        console.error('Error al eliminar el pago de materia:', error);
      }
    );
  }

  cancelarModificacion() {
    this.pagoMateriaSeleccionado = null;
  }
  addPagoMateria() {
    const nuevoPago: PagoDeMateria = new PagoDeMateria(
      this.idCajera!,
      this.idUsuario!,
      new Date(this.fechaPago),
      this.monto!,
      this.materia
    );
  
    this.pagoDeMateriaService.Add(nuevoPago).subscribe(
      (response) => {
        // Manejar la respuesta en caso de éxito
        console.log(response);
        alert('Pago de materia realizado con éxito.');

      },
      (error) => {
        // Manejar el error
        console.error(error);
      }
    );
  }
  limpiarCampos() {
    this.idCajera = null;
    this.idUsuario = null;
    this.fechaPago = '';
    this.monto = null;
    this.materia = '';
  }
}