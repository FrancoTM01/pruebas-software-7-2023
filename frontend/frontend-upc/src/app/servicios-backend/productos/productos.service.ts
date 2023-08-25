import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaProducto } from 'src/app/entidades/categoria-producto';
import { Producto } from 'src/app/entidades/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  PATH_BACKEND = "http://localhost:" + "5192"

  URL_GET = this.PATH_BACKEND + "/api/Producto/GetAllProductos";
  URL_ADD_PRODUCTO = this.PATH_BACKEND + "/api/Producto/AddProducto";
  URL_GET_CATEGORIA = this.PATH_BACKEND + "/api/CategoriaProducto/GetAllCategoriaProducto";
  constructor(private httpClient: HttpClient) {
  }

  public GetProducto(): Observable<HttpResponse<any>> {
    return this.httpClient
      .get<any>(this.URL_GET,
        { observe: 'response' })
      .pipe();
  }

  public AddProducto(entidad: Producto): Observable<HttpResponse<any>> {
    return this.httpClient
      .post<any>(this.URL_ADD_PRODUCTO, entidad,
        { observe: 'response' })
      .pipe();
  }


  public GetCategoriaProducto(): Observable<HttpResponse<any>> {
    return this.httpClient
      .get<any>(this.URL_GET_CATEGORIA,
        { observe: 'response' })
    .pipe();
  }


}
