/*
============================================================
1. RESTO DA DIVISÃO E BOOLEAN
============================================================
*/

const numero = 5;

const ehNumeroPar = (numero % 2) === 0;           // % retorna o resto da divisão
const ehDivisivelPor5 = (numero % 5) === 0;

console.log(ehNumeroPar);
console.log(typeof ehNumeroPar);

/*
Boolean:
Tipo de dado que possui apenas dois valores: true ou false.
Comparações resultam em valores booleanos.

Exemplo:
5 % 2 = 1
1 === 0 -> false

Portanto, numeroPar recebe false e seu tipo é boolean.

Boa prática:
Variáveis booleanas podem ter nomes que indiquem uma pergunta
cuja resposta será true ou false.

É comum utilizar "is" em inglês ou "eh" em português.

Exemplos:
isNumeroPar -> "é número par?"
ehNumeroPar -> "é número par?"

Como este código está em português, será utilizado "eh" para manter
a consistência dos nomes.
*/


/*
============================================================
2. OPERADORES DE IGUALDADE E COMPARAÇÃO
============================================================
*/

/*
=   atribui um valor à variável
==  compara os valores, realizando conversão de tipo quando necessário
=== compara os valores e os tipos, sem conversão de tipo

Exemplos:
const numero = 10; -> atribuição
numero == 10;      -> comparação com conversão de tipo
numero === 10;     -> comparação estrita

10 == '10'  -> true, pois == permite conversão de tipo
10 === '10' -> false, pois number e string são tipos diferentes

Operadores de comparação:
===  igual (compara valor e tipo)
!==  diferente (compara valor e tipo)
>    maior que
<    menor que
>=   maior ou igual
<=   menor ou igual
*/


/*
============================================================
3. CONDICIONAL IF
============================================================
*/

if (ehNumeroPar) {             // Executa o bloco se numeroPar for true
    console.log('Par');
} 

if (!ehNumeroPar) {            // ! significa negação: inverte true para false e false para true
    console.log('Ímpar');
} 


/*
============================================================
4. CONDICIONAL IF / ELSE
============================================================
*/

// Par ou ímpar

if (ehNumeroPar) {
    console.log('Par');
} else {
    console.log('Ímpar');
} // Se numeroPar for true executa o if; caso contrário, executa o else


// Divisibilidade por 5

if (ehDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não');
} // Verifica se o número é divisível por 5


/*
 ============================================================
 5. CONDICIONAL IF / ELSE IF / ELSE
 ============================================================
*/

if (numero === 0) {
    console.log('O número é inválido');
} else if (numero === 5) {
    console.log('O número é inválido');
} else if (ehDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não');
}

/*
else if:
Permite testar uma nova condição quando a condição anterior for falsa.

A estrutura é verificada de cima para baixo:

if      -> testa a primeira condição
else if -> testa outra condição se a anterior for falsa
else    -> executa se nenhuma das condições anteriores for verdadeira

Neste exemplo:
numero = 5

numero === 0              -> false
numero === 5              -> true

Ao encontrar uma condição verdadeira, o JavaScript executa esse bloco
e não verifica os próximos else if ou else.

Por isso, a ordem das condições é importante.
*/