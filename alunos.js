const alunos = [
    { nome: 'Ana', nota: 9.5 },
    { nome: 'Bruno', nota: 5.5 },
    { nome: 'Carla', nota: 6 },
    { nome: 'Diego', nota: 4 },
    { nome: 'Elisa', nota: 8 }
];

const filtrarAprovados = (lista) => lista.filter(({ nota }) => nota >= 6);

if (require.main === module) {
    console.table(filtrarAprovados(alunos));
}

module.exports = { alunos, filtrarAprovados };
