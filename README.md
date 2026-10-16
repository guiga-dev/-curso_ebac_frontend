# Exercício do módulo 15 — SASS

Conversão do CSS do material de apoio da EBAC para SCSS, mantendo os estilos
originais e os breakpoints de 1023px e 767px.

## Executar

```sh
npm ci
npm run build
```

Abra `index.html` no navegador. O CSS compilado também está versionado em
`styles.css`, permitindo visualizar a página sem instalar dependências.

## Organização

- `sass/_variables.scss`: cores, fonte, largura e breakpoints.
- `sass/_base.scss`: reset e estilos globais.
- `sass/_header.scss`: cabeçalho e navegação.
- `sass/_products.scss`: listagem e botões dos produtos.
- `sass/_responsive.scss`: adaptações para tablet e celular.
- `sass/main.scss`: entrada da compilação, com módulos carregados por `@use`.

O HTML e as imagens externas foram preservados conforme o material fornecido.
