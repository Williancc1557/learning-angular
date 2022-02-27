import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  public deleteProduct() {
    const id = this.route.snapshot.paramMap.get("id")
    this.productService.delete(id!).subscribe(() => {
      this.productService.showMessage("Produto deletado com sucesso!")
      this.router.navigate(["/product"])
    })
  }

  public cancel() {
    this.router.navigate(["/product"])
  }
}
