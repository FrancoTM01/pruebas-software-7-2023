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

  listaCajera: Cajera[] = [];

  constructor(private carritoCompraService: CajeraService) {}

  ngOnInit() {
    this.getCajeras();
  }

  getCajeras() {
    this.carritoCompraService.GetAll().subscribe(
      response => {
        this.listaCajera = response.body;
      },
      error => {
        console.error('Error al obtener las cajeras:', error);
      }
    );
  }

  addCajera() {
    if (this.nombreCompleto && this.turno && this.numeroCaja !== null) {
      const nuevaCajera = new Cajera(this.nombreCompleto, this.turno, this.numeroCaja);
      this.carritoCompraService.Add(nuevaCajera).subscribe(
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
}
