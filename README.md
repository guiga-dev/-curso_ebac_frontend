# Exercício módulo 16 — Gulp

## Compilar

```sh
npm ci
npm run build
```

Abra `dist/index.html` para visualizar a galeria. `npm run watch` recompila quando
os arquivos em `src` mudam.

O `gulpfile.js` executa em paralelo a compilação SCSS com gulp-sass,
a minificação JavaScript com gulp-terser, a compressão JPEG/PNG com Sharp e a cópia
do HTML. Os seis originais do material da EBAC estão no arquivo
`material-images.zip`, preservado como fornecido pela escola. A tarefa `images`
lê esse ZIP e grava as versões comprimidas em `dist/images`, sem alterar o original.

Tarefas individuais: `npx gulp styles`, `npx gulp scripts`, `npx gulp images`.
