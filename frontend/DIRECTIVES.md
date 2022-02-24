This is used for add and remove elements of DOM

exemple:

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

using:

```html
<i class="material-icons" appRed> favorite </i>
```
