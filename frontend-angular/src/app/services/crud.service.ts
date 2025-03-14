import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiUrl = 'http://127.0.0.1:8000/api/items/'; // URL de Django

  constructor(private http: HttpClient) {}

  // Obtener todos los registros
  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener un solo registro
  getItem(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}/`);
  }

  // Crear un nuevo registro
  createItem(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  // Actualizar un registro
  updateItem(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${id}/`, data);
  }

  // Eliminar un registro
  deleteItem(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${id}/`);
  }


}
