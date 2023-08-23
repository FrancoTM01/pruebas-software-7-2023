import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductosService } from '../servicios-backend/productos/productos.service';
import { Producto } from '../entidades/productos';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public nombre = ""


  public listaProducto: Producto[] = []

  constructor(private ProductosService:ProductosService) {
    

    /*let categoriaproducto: CategoriaProducto = new CategoriaProducto();
    categoriaproducto.nombre = "Electrodomesticos"

    this.listaCategoria.push(categoriaproducto)*/
    this.GetAllFromBackend();

  }
  private GetAllFromBackend(){
    this.ProductosService.GetProducto().subscribe({
      next: (response: HttpResponse<any>) => {
          this.listaProducto = response.body;
          console.log(this.listaProducto)
      },
      error: (error: any) => {
          console.log(error);
      },
      complete: () => {
          //console.log('complete - this.getUsuarios()');
      },
  });  
  }

  public addProducto(){
    this.AddProductoFromBackend(this.nombre);
    

  }
  private AddProductoFromBackend(nombre: string){

    var productoEntidad = new Producto();
    productoEntidad.nombre = nombre;


    this.ProductosService.AddProducto(productoEntidad).subscribe({
      next: (response: HttpResponse<any>) => {
          console.log(response.body)//1
          if(response.body == 1){
              alert("Se agrego el PRODUCTO con exito :)");
              this.GetAllFromBackend();//Se actualize el listado
              this.nombre = "";

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
