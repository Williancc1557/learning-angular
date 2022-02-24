é utilizada para mudar tipo um style no css

exemplo:

```ts
@Directive({
  selector: "[appRed]",
})
export class RedDirective {
  public constructor(el: ElementRef) {
    el.nativeElement.style.color = "red";
  }
}
```

utilizando:

```html
<i class="material-icons" appRed> favorite </i>
```
