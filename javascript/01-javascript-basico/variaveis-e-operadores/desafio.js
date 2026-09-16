/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

// Dados da viagem
const precoCombustivel = 6.19;
const litrosPorKm = 1 / 12;
const distanciaEmKm = 200;

// Cálculo do valor total da viagem
const gastoTotal = precoCombustivel * litrosPorKm * distanciaEmKm;

// .toFixed(x) formata o número com x casas decimais e retorna uma string
console.log('O gasto com a viagem foi R$', gastoTotal.toFixed(2));