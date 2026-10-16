# Perfil GitHub via AJAX

Adaptação do HTML e CSS fornecidos pela EBAC no módulo 23. O perfil público de `guiga-dev`, a foto e os totais são preenchidos por `fetch` na API pública do GitHub, com `async/await`, `try/catch`, verificação HTTP e timeout de dez segundos. Não usa token ou credencial.

Sirva a pasta com um servidor HTTP e abra `index.html`. Em caso de falha ou limite da API, a página exibe a mensagem e permite tentar novamente.

Branch exigida: `exercicio_ajax`.
