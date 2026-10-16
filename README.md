# Testes E2E — Agenda de contatos

Atividade EBAC módulo 34. Aplicação fornecida: https://ebac-agenda-contatos-tan.vercel.app/

Três testes independentes cobrem inclusão, alteração de nome/e-mail/telefone e remoção. Cada teste cria um registro identificado; a limpeza afeta somente os registros criados nesta execução. Os comandos esperam as mudanças da interface sem pausas fixas.

```sh
npm ci
npm test
```

Interface interativa: `npm run test:open`.

Publicar na branch `exercicio_cypress` do repositório do curso.
