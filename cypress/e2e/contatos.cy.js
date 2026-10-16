describe('Agenda de contatos — inclusão, alteração e remoção', () => {
  let id, contato, atualizado
  function dados() {
  id = `${Date.now()}-${Cypress._.random(1000, 9999)}`
  contato = {
    nome: `EBAC Teste ${id}`,
    email: `ebac-${id}@example.com`,
    telefone: '11987654321'
  }
  atualizado = {
    nome: `EBAC Editado ${id}`,
    email: `editado-${id}@example.com`,
    telefone: '21912345678'
  }
  }

  function preencher(dados) {
    cy.get('input[placeholder="Nome"]').clear().type(dados.nome)
    cy.get('input[placeholder="E-mail"]').clear().type(dados.email)
    cy.get('input[placeholder="Telefone"]').clear().type(dados.telefone)
  }

  // Cada caso cria seus próprios dados; os contatos existentes não são alterados.
  beforeEach(() => {
    dados()
    cy.visit('/')
    cy.get('input[placeholder="Nome"]').should('be.visible')
  })

  afterEach(() => {
    // Limpeza restrita a registros com o identificador desta execução.
    cy.get('body').then(($body) => {
      const cards = $body.find('.contato').filter((_, el) => el.textContent.includes(id))
      if (cards.length) cy.wrap(cards).find('button.delete').click({ multiple: true })
    })
  })

  it('inclui um contato com nome, e-mail e telefone', () => {
    preencher(contato)
    cy.contains('button', /^Adicionar$/).click()
    cy.contains('.contato', contato.email, { timeout: 20000 }).should('contain', contato.nome).and('contain', contato.telefone)
    cy.get('input[placeholder="Nome"]').should('have.value', '')
  })

  it('altera os três campos de um contato', () => {
    preencher(contato)
    cy.contains('button', /^Adicionar$/).click()
    cy.contains('.contato', contato.email, { timeout: 20000 }).find('button.edit').click()
    cy.get('input[placeholder="Nome"]').should('have.value', contato.nome)
    preencher(atualizado)
    cy.contains('button', /^Salvar$/).click()
    cy.contains('.contato', atualizado.email, { timeout: 20000 }).should('contain', atualizado.nome).and('contain', atualizado.telefone)
    cy.contains('.contato', contato.email).should('not.exist')
  })

  it('remove o contato adicionado', () => {
    preencher(contato)
    cy.contains('button', /^Adicionar$/).click()
    cy.contains('.contato', contato.email, { timeout: 20000 }).find('button.delete').click()
    cy.contains('.contato', contato.email, { timeout: 20000 }).should('not.exist')
  })
})

