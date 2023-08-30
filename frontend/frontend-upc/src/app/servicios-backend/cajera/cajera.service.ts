import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cajera } from 'src/app/entidades/cajera';

@Injectable({
  providedIn: 'root'
})
export class CajeraService {
  PATH_BACKEND = "http://localhost:" + "5192"

  URL_GET = this.PATH_BACKEND + "/api/CarritoCompra/GetAllCajeras";
  URL_ADD_CAJERA = this.PATH_BACKEND + "/api/CarritoCompra/AddCajera";

  constructor(private httpClient: HttpClient) {
  }

  public GetAll(): Observable<HttpResponse<any>> {
    return this.httpClient
      .get<any>(this.URL_GET,
        { observe: 'response' })
      .pipe();
  }

  public Add(entidad: Cajera): Observable<HttpResponse<any>> {
    return this.httpClient
      .post<any>(this.URL_ADD_CAJERA, entidad,
        { observe: 'response' })
      .pipe();
  }
}
