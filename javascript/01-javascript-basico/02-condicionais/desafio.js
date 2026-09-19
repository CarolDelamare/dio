/* 
Faça um programa para calcular o valor de uma viagem. 
 
Você terá 5 variáveis. Sendo elas: 
    1 - Preço do etanol; 
    2 - Preço da gasolina; 
    3 - O tipo de combustível que está no seu carro; 
    4 - Gasto médio de combustível do carro por KM; 
    5 - Distância em KM da viagem; 
 
Imprima no console o valor que será gasto para realizar esta viagem. 
*/


/*
============================================================
1. DIFERENÇA ENTRE let E const
============================================================
*/

// Dados da viagem
const precoEtanol = 3;
const precoGasolina = 6;
const tipoCombustivel = 3;
const litrosPorKm = 1 / 12;
const distanciaEmKm = 200;

let precoCombustivel;

/*
const:
Usamos quando a variável não será reatribuída depois de criada.

Exemplo:
const precoEtanol = 3;

let:
Usamos quando a variável poderá receber um valor ou ser reatribuída
posteriormente.

Exemplo:
let precoCombustivel;

Nesse caso, precoCombustivel é criada sem receber um valor inicialmente.
Depois, seu valor é definido de acordo com o tipo de combustível:

precoCombustivel = precoEtanol;
ou
precoCombustivel = precoGasolina;

Não podemos fazer:

const precoCombustivel;

porque uma constante (const) precisa receber um valor no momento
em que é declarada.
*/


/*
============================================================
2. ESTRUTURA CONDICIONAL - if / else if / else
============================================================
*/

// Definição do preço do combustível
if (tipoCombustivel === 1) {
    precoCombustivel = precoEtanol;
} else if (tipoCombustivel === 2) {
    precoCombustivel = precoGasolina;
} else {
    console.log('Tipo de combustível inválido');
}

/*
if:
Testa a primeira condição.

else if:
Testa uma nova condição caso a anterior seja falsa.

else:
É executado quando nenhuma das condições anteriores é verdadeira.

Neste exemplo:

tipoCombustivel === 1 -> utiliza o preço do etanol
tipoCombustivel === 2 -> utiliza o preço da gasolina
outro valor            -> combustível inválido

Quando uma condição é verdadeira, seu bloco é executado e as
condições seguintes da mesma estrutura são ignoradas.
*/


/*
============================================================
3. OPERADOR LÓGICO OU (||)
============================================================
*/

// Cálculo do valor total da viagem
if (tipoCombustivel === 1 || tipoCombustivel === 2) {
    const gastoTotal = precoCombustivel * litrosPorKm * distanciaEmKm;

    // .toFixed(x) formata o número com x casas decimais e retorna uma string
    console.log('O gasto com a viagem foi R$', gastoTotal.toFixed(2));
}

/*
|| significa OU.

tipoCombustivel === 1 || tipoCombustivel === 2

A condição será verdadeira se pelo menos uma das comparações
for verdadeira.

Portanto, o cálculo é realizado somente quando:

tipoCombustivel = 1 (etanol)
OU
tipoCombustivel = 2 (gasolina).

Essa verificação também evita que o cálculo seja realizado quando
precoCombustivel ainda está undefined.

Se tentássemos realizar uma operação matemática utilizando undefined,
o resultado seria NaN (Not a Number).
*/


/*
============================================================
4. toFixed()
============================================================

.toFixed(x) formata um número utilizando x casas decimais.

Exemplo:

gastoTotal.toFixed(2)

50  -> "50.00"
100 -> "100.00"

Importante:
toFixed() retorna uma string.
*/

