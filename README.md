# Exercício módulo 18 — Grunt

O `Gruntfile.js` configura as tarefas obrigatórias de compilação LESS e compressão
de JavaScript. A tarefa padrão executa `less` e `uglify` em sequência.

```sh
npm ci
npm run build
```

Abra `index.html` para visualizar o exemplo. Os arquivos compilados ficam em
`dist/styles.css` e `dist/main.min.js`. Os botões de produtos alternam a exibição
das descrições. Os estilos LESS aproveitam a conversão feita no exercício anterior.

Tarefas separadas: `npx grunt less` e `npx grunt uglify`.
