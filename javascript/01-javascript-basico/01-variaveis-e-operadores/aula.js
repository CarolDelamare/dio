/*
============================================================
1. VARIÁVEIS - let E const
============================================================

let:
Utilizado para declarar uma variável cujo valor pode ser alterado
posteriormente.

Exemplo:
let variavel = 10;
variavel = 20;

const:
Utilizado quando a variável não será reatribuída.

Exemplo:
const PI = 3.14;

Uma variável declarada com const precisa receber um valor
no momento da declaração.
*/


/*
============================================================
2. OPERADORES ARITMÉTICOS
============================================================

+   adição
-   subtração
*   multiplicação
/   divisão
%   resto da divisão
**  potenciação
*/

let variavel = 10 + 10;
console.log(variavel); // 20

variavel = 10 - 10;
console.log(variavel); // 0

variavel = 10 * 10;
console.log(variavel); // 100

variavel = 10 / 10;
console.log(variavel); // 1

variavel = 10 % 3;
console.log(variavel); // 1

variavel = 10 ** 2;
console.log(variavel); // 100


/*
============================================================
3. CONSTANTES E NOMENCLATURA
============================================================

Por convenção, nomes de variáveis em JavaScript normalmente começam
com letra minúscula, tanto quando declaradas com let quanto com const.

Quando o nome possui mais de uma palavra, é comum utilizar camelCase.

No camelCase:
- a primeira palavra começa com letra minúscula;
- as palavras seguintes começam com letra maiúscula.

Exemplos:
let valorGasto = 50;
let precoCombustivel;

const pesoEmKg = 70;
const alturaEmMetros = 1.65;

Constantes que representam valores fixos e conhecidos podem, por convenção,
ser escritas com letras maiúsculas.

Exemplo:
const PI = 3.14;

Nem toda variável declarada com const precisa ter o nome em maiúsculas.

Exemplos:
const precoCombustivel = 6;
const pesoEmKg = 70;
*/


/*
============================================================
4. POTENCIAÇÃO
============================================================

Uma potência pode ser calculada com o operador **.

Exemplo:
2 ** 3 -> 8

Também é possível utilizar Math.pow().

Math.pow(base, expoente)

Exemplo:
Math.pow(2, 3) -> 8

Portanto:

2 ** 3

é equivalente a:

Math.pow(2, 3)
*/