```ts
export class test {
  criarNoBackend(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.url, produto);
  }
}
```

```ts
export class recebiOProduto {
  criarProduto(): void {
    this.criarNoBackend(this.produto).subscribe(() => {
      this.exibirMensagem("salvo com sucesso!");
    });
  }
}
```
