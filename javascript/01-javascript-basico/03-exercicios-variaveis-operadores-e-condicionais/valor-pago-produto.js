/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto,
considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento
escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const preco = 10;
const tipoPagamento = 4;

let valorFinal;

if (tipoPagamento === 1) {
    valorFinal = preco * 0.9;
} else if (tipoPagamento === 2) {
    valorFinal = preco * 0.85;
} else if (tipoPagamento === 3) {
    valorFinal = preco;
} else if (tipoPagamento === 4) {
    valorFinal = preco * 1.1;
} else {
    console.log('O tipo de pagamento informado é inválido.');
}

if (tipoPagamento === 1 || tipoPagamento === 2 || tipoPagamento === 3 || tipoPagamento === 4) {

    // .toFixed(x) formata o número com x casas decimais e retorna uma string    
    console.log('O valor final é: R$', valorFinal.toFixed(2));
}