import { Product, RequestResponse } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3000"

  constructor(
    private readonly snackBar: MatSnackBar,
    private readonly http: HttpClient
  ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "x", {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: 'top'
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl+ "/save", product)
  }

  read(): Observable<RequestResponse> {
   return this.http.get<RequestResponse>(this.baseUrl + "/find")
  }

  readById(id: string): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + `/find/${id}`)
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(this.baseUrl + "/change", product)
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(this.baseUrl + `/delete/${id}`)
  }
}
