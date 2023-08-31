import { Component, OnInit } from '@angular/core';
import { Cajera } from '../entidades/cajera';
import { CajeraService } from '../servicios-backend/cajera/cajera.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  nombreCompleto: string = '';
  turno: string = '';
  numeroCaja: number | null = null;

  listaCajeras: Cajera[] = [];
  cajeraSeleccionada: Cajera | null = null;

  constructor(private cajeraService: CajeraService) {}

  ngOnInit() {
    this.getCajeras();
  }

  getCajeras() {
    this.cajeraService.GetAll().subscribe(
      response => {
        this.listaCajeras = response.body;
      },
      error => {
        console.error('Error al obtener las cajeras:', error);
      }
    );
  }

  addCajera() {
    if (this.nombreCompleto && this.turno && this.numeroCaja !== null) {
      const nuevaCajera = new Cajera (0, this.nombreCompleto, this.turno, this.numeroCaja);
      this.cajeraService.Add(nuevaCajera).subscribe(
        response => {
          console.log('Cajera agregada:', response.body);
          this.getCajeras(); // Actualizar la lista de cajeras después de agregar una nueva
        },
        error => {
          console.error('Error al agregar la cajera:', error);
        }
      );
    }
  }

  obtenerCajeraPorId(id: number) {
    this.cajeraService.GetById(id).subscribe(
      response => {
        this.cajeraSeleccionada = response.body; // Almacena la cajera para editar/modificar, ES AQUI?
      },
      error => {
        console.error('Error al obtener la cajera por ID:', error);
      }
    );
  }
  editarCajera(cajera: Cajera) {
    this.cajeraSeleccionada = cajera; // Almacena la cajera para editar/modificar
  }

  guardarModificacionCajera() {
    if (this.cajeraSeleccionada) {
      this.cajeraService.Update(this.cajeraSeleccionada).subscribe(
        response => {
          console.log('Cajera modificada:', response.body);
          this.getCajeras();
          this.cajeraSeleccionada = null; // Limpia la cajera seleccionada después de la modificación
          alert('Cajera modificada con éxito.');
        },
        error => {
          console.error('Error al modificar la cajera:', error);
        }
      );
    }
  }
  cancelarModificacion() {
    this.cajeraSeleccionada = null; // Limpia la cajera seleccionada sin guardar cambios
  }

  eliminarCajera(id: number) {
    console.log(id)
    this.cajeraService.Delete(id).subscribe(
      response => {
        console.log('Cajera eliminada:', response.body);
        this.getCajeras(); // Actualizar la lista de cajeras después de eliminar
        alert('Cajera eliminada con éxito.');
      },
      error => {
        console.error('Error al eliminar la cajera:', error);
        alert('Error al eliminar la cajera.');
      }
    );
  }
}