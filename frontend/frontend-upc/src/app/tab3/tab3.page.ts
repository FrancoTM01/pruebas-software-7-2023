import { Component } from '@angular/core';
import { ProductosService } from '../servicios-backend/productos/productos.service';
import { Producto } from '../entidades/productos';
import { CategoriaProducto } from '../entidades/categoria-producto';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public nombre: string = "";
  public idCategoria: number | null = null;
  public listaProducto: Producto[] = [];
  public listaCategoria: CategoriaProducto[] = [];

  constructor(private productosService: ProductosService) {
    this.GetAllFromBackend();
  }

  private GetAllFromBackend() {
    this.productosService.GetProducto().subscribe({
      next: (response: HttpResponse<any>) => {
        this.listaProducto = response.body;
      },
      error: (error: any) => {
        console.log(error);
      }
    });

    this.productosService.GetCategoriaProducto().subscribe({
      next: (response: HttpResponse<any>) => {
        this.listaCategoria = response.body;
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }

  public addProducto() {
    if (this.nombre && this.idCategoria !== null) {
      this.AddProductoFromBackend(this.nombre, this.idCategoria);
    } else {
      alert("Ingresa el nombre y selecciona una categoría");
    }
  }
  

  private AddProductoFromBackend(nombre: string, idCategoria: number) {
    var productoEntidad = new Producto(nombre, idCategoria);

    this.productosService.AddProducto(productoEntidad).subscribe({
      next: (response: HttpResponse<any>) => {
          console.log(response.body)//1
          if(response.body == 1){
              alert("Se agrego el PRODUCTO con exito :)");
              this.GetAllFromBackend();//Se actualize el listado
              this.nombre = "";
              this.idCategoria = null;

          }else{
              alert("Al agregar PRODUCTO fallo exito :(");
          }
      },
      error: (error: any) => {
          console.log(error);
      },
      complete: () => {
          console.log('complete - this.AddProducto()');
      },
  });
  }
}