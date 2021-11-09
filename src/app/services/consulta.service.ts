import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  handleError(error:HttpErrorResponse){
    return throwError(error);
  }

  // get(size: number, page: number): Observable<any>{
  //   return this.http.get<any>(`${CIU_URL}users?rrhh=1&n=` + size + `&page=` + page)
  //   .pipe(
  //     catchError(this.handleError)
  //     );
  // }

  // post(size: number, page: number): Observable<any>{
  //   return this.http.post<any>(`${CIU_URL}users?rrhh=1&n=` + size + `&page=` + page)
  //   .pipe(
  //     catchError(this.handleError)
  //     );
  // }

  // update(size: number, page: number): Observable<any>{
  //   return this.http.put<any>(`${CIU_URL}users?rrhh=1&n=` + size + `&page=` + page)
  //   .pipe(
  //     catchError(this.handleError)
  //     );
  // }

  // delete(size: number, page: number): Observable<any>{
  //   return this.http.delete<any>(`${CIU_URL}users?rrhh=1&n=` + size + `&page=` + page)
  //   .pipe(
  //     catchError(this.handleError)
  //     );
  // }

}
