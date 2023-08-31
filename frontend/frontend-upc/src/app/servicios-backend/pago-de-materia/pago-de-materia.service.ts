import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagoDeMateria } from 'src/app/entidades/pago-de-materia';

@Injectable({
  providedIn: 'root'
})
export class PagoDeMateriaService {
  PATH_BACKEND = "http://localhost:" + "5192"

  URL_GET = this.PATH_BACKEND + "/api/PagoDeMateria/GetAllPagosDeMateria";
  URL_GET_BY_ID = this.PATH_BACKEND + "/api/PagoDeMateria/GetPagoDeMateriaById";
  URL_ADD_PAGO_DE_MATERIA = this.PATH_BACKEND + "/api/PagoDeMateria/AddPagoDeMateria";
  URL_UPDATE_PAGO_DE_MATERIA = this.PATH_BACKEND + "/api/PagoDeMateria/UpdatePagoDeMateria";
  URL_DELETE_PAGO_DE_MATERIA = this.PATH_BACKEND + "/api/PagoDeMateria/DeletePagoDeMateria";

  constructor(private httpClient: HttpClient) {
  }

  public GetAll(): Observable<HttpResponse<any>> {
    return this.httpClient
      .get<any>(this.URL_GET,
        { observe: 'response' })
      .pipe();
  }

  public GetById(id: number): Observable<HttpResponse<any>> {
    return this.httpClient
      .get<any>(`${this.URL_GET_BY_ID}?id=${id}`,
        { observe: 'response' })
      .pipe();
  }

  public Add(entidad: PagoDeMateria): Observable<HttpResponse<any>> {
    return this.httpClient
      .post<any>(this.URL_ADD_PAGO_DE_MATERIA, entidad,
        { observe: 'response' })
      .pipe();
  }

  public Update(entidad: PagoDeMateria): Observable<HttpResponse<any>> {
    return this.httpClient
      .put<any>(this.URL_UPDATE_PAGO_DE_MATERIA, entidad,
        { observe: 'response' })
      .pipe();
  }

  public Delete(id: number): Observable<HttpResponse<any>> {
    return this.httpClient
      .delete<any>(`${this.URL_DELETE_PAGO_DE_MATERIA}?id=${id}`,
        { observe: 'response' })
      .pipe();
  }
}