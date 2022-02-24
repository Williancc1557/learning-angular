## Binding property

exemple:

```ts
@Component({
  selector: "...",
  templateUrl: "...",
  styleUrls: ["..."],
})
export class ProductReadComponent implements OnInit {
  public readonly products: Array<Product>;
}
```

using:

```html
<table [dataSource]="products"></table>
```

## Bind event

example:

```ts
@Component({
  selector: "...",
  templateUrl: "...",
  styleUrls: ["..."],
})
export class ProductReadComponent implements OnInit {
  public createProduct(): void {
    // ...
  }
}
```

using:

```html
<button mat-raised-button (click)="createProduct()">Salvar</button>
```
