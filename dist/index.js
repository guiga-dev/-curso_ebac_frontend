"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicar = multiplicar;
exports.saudar = saudar;
function multiplicar(a, b) {
    return a * b;
}
function saudar(nome) {
    return `Olá ${nome}`;
}
console.log(multiplicar(3, 4));
console.log(saudar('Guilherme'));
