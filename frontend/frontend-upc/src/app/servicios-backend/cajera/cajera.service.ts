import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cajera } from 'src/app/entidades/cajera';

@Injectable({
  providedIn: 'root'
})
export class CajeraService {
  PATH_BACKEND = "http://localhost:" + "5192"

  URL_GET = this.PATH_BACKEND + "/api/Cajera/GetAllCajeras";
  URL_GET_BY_ID = this.PATH_BACKEND + "/api/Cajera/GetCajeraById";
  URL_ADD_CAJERA = this.PATH_BACKEND + "/api/Cajera/AddCajera";
  URL_UPDATE_CAJERA = this.PATH_BACKEND + "/api/Cajera/UpdateCajera";
  URL_DELETE_CAJERA = this.PATH_BACKEND + "/api/Cajera/DeleteCajera";

  constructor(private httpClient: HttpClient) {
  }

  public GetAll(): Observable<HttpResponse<any>> {
    return this.httpClient
      .get<any>(this.URL_GET,
        { observe: 'response' })
      .pipe();
  }

  public GetById(id: number): Observable<HttpResponse<any>> {
    var parametros = new HttpParams()
    parametros = parametros.set('id',id)
    return this.httpClient
      .get<any>(this.URL_GET_BY_ID,
        { params: parametros, observe: 'response' })
      .pipe();
  }

  public Add(entidad: Cajera): Observable<HttpResponse<any>> {
    return this.httpClient
      .post<any>(this.URL_ADD_CAJERA, entidad,
        { observe: 'response' })
      .pipe();
  }

  public Update(entidad: Cajera): Observable<HttpResponse<any>> {
    return this.httpClient
      .put<any>(this.URL_UPDATE_CAJERA, entidad,
        { observe: 'response' })
      .pipe();
  }

  public Delete(id: number): Observable<HttpResponse<any>> {
    const params = { id: id.toString() };
    return this.httpClient
      .delete<any>(this.URL_DELETE_CAJERA,
        { params: params, observe: 'response' })
      .pipe();
  }
}