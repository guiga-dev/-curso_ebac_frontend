# Exercício módulo 17 — LESS

Conversão do CSS disponibilizado pela EBAC para LESS. O HTML original e os
recursos do material de apoio foram preservados.

```sh
npm ci
npm run build
```

Abra `index.html`; `styles.css` já contém a compilação. Os fontes são divididos em
`less/variables.less`, `base.less`, `header.less`, `products.less` e
`responsive.less`, importados por `main.less`.

O projeto usa variáveis para fonte e largura, o mapa `#colors()` para as cores e
escaping (`~"..."`) nas expressões de mídia `@tablet` e `@mobile`.
