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


/*
============================================================
MINHA SOLUÇÃO COM FUNÇÕES
============================================================
*/

'use strict'; // Impede, entre outras coisas, a criação acidental de variáveis globais ao atribuir valor a uma variável não declarada.


/*
Pela relação M = C + J:
J < 0 representa desconto;
J = 0 representa ausência de juros/desconto;
J > 0 representa acréscimo.

Poderia utilizar o nome calcularAjuste em vez de calcularJuros
caso juros seja entendido apenas como acréscimo.
*/

function calcularJuros(preco, tipoPagamento) {

    let juros;

    if (tipoPagamento === 1) {
        juros = (preco * 0.1) * (-1);
    } else if (tipoPagamento === 2) {
        juros = (preco * 0.15) * (-1);
    } else if (tipoPagamento === 3) {
        juros = 0;
    } else if (tipoPagamento === 4) {
        juros = preco * 0.1;
    } else {
        console.log('O tipo de pagamento informado é inválido.');
    }

    /*
    OBSERVAÇÃO:
    A validade de tipoPagamento já foi verificada no bloco if / else if acima.

    Por isso, esta segunda verificação:

    if (tipoPagamento === 1 || tipoPagamento === 2 ||
        tipoPagamento === 3 || tipoPagamento === 4)

    poderia ser evitada encerrando a função com return quando o tipo de
    pagamento for inválido.

    Exemplo:

    else {
        console.log('O tipo de pagamento informado é inválido.');
        return;
    }

    Uma função pode possuir vários return.

    Quando um return é executado, a função termina naquele ponto e o código
    que estiver abaixo dele não será executado naquela chamada da função.

    return;        -> encerra a função sem devolver um valor útil (retorna undefined);
    return juros;  -> encerra a função e devolve o valor armazenado em juros.

    Assim, diferentes return podem ser executados dependendo do caminho
    percorrido pelo programa dentro da função.

    Nesse caso, se o pagamento for inválido, a função termina imediatamente.
    Se o programa continuar após esse ponto, sabemos que tipoPagamento é válido,
    não sendo necessário verificar novamente se ele está entre 1 e 4.

    A versão atual foi mantida para registrar a forma como o exercício
    foi desenvolvido inicialmente.
    */

    if (tipoPagamento === 1 || tipoPagamento === 2 || tipoPagamento === 3 || tipoPagamento === 4) {

        if (juros < 0) {
            console.log('O valor do desconto é: R$', juros.toFixed(2));
        } else if (juros === 0) {
            console.log('Não há juros nem desconto.');
        } else {
            console.log('O valor do acréscimo é: R$', juros.toFixed(2));
        }

        return juros;
    }
}


function calcularValorFinal(preco, tipoPagamento) {
    const jurosDentroValorFinal = calcularJuros(preco, tipoPagamento);

    if (typeof jurosDentroValorFinal !== 'number') {
        return;
    }

    const valorFinal = preco + jurosDentroValorFinal;

    console.log('O valor final é: R$', valorFinal.toFixed(2));
}


calcularValorFinal(100, 1);
calcularValorFinal(200, 4);
calcularValorFinal(200, 7);


/*
============================================================
SOLUÇÃO APRESENTADA PELO PROFESSOR
============================================================

Nesta solução, desconto e juros são tratados por funções diferentes.

As funções recebem como parâmetros:
- o valor sobre o qual será feito o cálculo;
- a porcentagem de desconto ou de juros.

Dessa forma, a porcentagem não fica fixa dentro da função.
A mesma função pode ser reutilizada com diferentes percentuais.

OBSERVAÇÃO:
Na solução apresentada pelo professor, o último else considera qualquer
formaDePagamento diferente de 1, 2 e 3 como pagamento com juros de 10%.

Assim, por exemplo, formaDePagamento = 7 também executaria aplicarJuros().

Na solução desenvolvida anteriormente, foi feita uma validação explícita
dos códigos de pagamento, permitindo informar quando o código é inválido.


function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}

const precoEtiqueta = 100;
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros(precoEtiqueta, 10));
}
*/


/*
============================================================
SOLUÇÃO ANTERIOR - SEM USO DE FUNÇÕES
============================================================

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
*/