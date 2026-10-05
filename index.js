// 1. Criação da classe de uma abstração (classe pai / superclasse)
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    // Método genérico
    ligar() {
        return `O veículo ${this.marca} ${this.modelo} está ligado.`;
    }
}

// 2. Criação de pelo menos duas classes herdeiras (subclasses)
class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
    }

    // Método específico da classe Carro
    abrirPorta-malas() {
        return `O porta-malas do ${this.modelo} foi aberto.`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    // Método específico da classe Moto
    empinar() {
        return `A moto ${this.modelo} de ${this.cilindradas}cc está empinando!`;
    }
}

// 3. Criação de pelo menos três instâncias de objetos
const meuCarro = new Carro("Toyota", "Corolla", 2023, 4);
const outroCarro = new Carro("Honda", "Civic", 2022, 4);
const minhaMoto = new Moto("Yamaha", "MT-03", 2024, 321);

// Testando os métodos e objetos no console
console.log(meuCarro.ligar());
console.log(meuCarro.abrirPorta-malas());

console.log(outroCarro.ligar());

console.log(minhaMoto.ligar());
console.log(minhaMoto.empinar());