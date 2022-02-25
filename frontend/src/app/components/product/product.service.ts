import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = ""

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
    return this.http.post<Product>(this.baseUrl, product)
  }
}
