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

Portanto, ehNumeroPar recebe false e seu tipo é boolean.

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
3. CONDICIONAL - if
============================================================
*/

if (ehNumeroPar) {             // Executa o bloco se ehNumeroPar for true
    console.log('Par');
}

if (!ehNumeroPar) {            // ! significa negação: inverte true para false e false para true
    console.log('Ímpar');
}


/*
============================================================
4. CONDICIONAL - if / else
============================================================
*/

// Par ou ímpar

if (ehNumeroPar) {
    console.log('Par');
} else {
    console.log('Ímpar');
} // Se ehNumeroPar for true executa o if; caso contrário, executa o else


// Divisibilidade por 5

if (ehDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não');
} // Verifica se o número é divisível por 5


/*
============================================================
5. CONDICIONAL - if / else if / else
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

Podem ser utilizados vários blocos else if na mesma estrutura,
de acordo com a quantidade de condições que precisam ser verificadas.

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


/*
============================================================
6. OPERADORES LÓGICOS
============================================================

Os operadores lógicos permitem combinar ou inverter condições.

&&  E (AND)
||  OU (OR)
!   NÃO / negação (NOT)


&& - E

Retorna true quando todas as condições forem verdadeiras.

Exemplo:

const idade = 20;

idade >= 18 && idade < 60

idade >= 18 -> true
idade < 60  -> true

true && true -> true


|| - OU

Retorna true quando pelo menos uma das condições for verdadeira.

Exemplo:

const tipoCombustivel = 1;

tipoCombustivel === 1 || tipoCombustivel === 2

true || false -> true


! - NÃO / negação

Inverte um valor booleano:

true  -> false
false -> true

Exemplo:

const ehNumeroPar = false;

!ehNumeroPar -> true
*/


/*
============================================================
7. ESCOPO DE BLOCO
============================================================

Visto no desafio "Viagem + Condicionais"

Variáveis declaradas com let ou const dentro de um bloco { }
possuem escopo de bloco.

Um bloco é uma região do código delimitada por chaves { }.

Exemplos de blocos:

if (condicao) {
    // bloco do if
} else {
    // bloco do else
}

Exemplo:

if (condicao) {
    const valorGasto = 50;
}

console.log(valorGasto); // ReferenceError

valorGasto foi criada dentro do bloco do if e, portanto,
não pode ser acessada fora dele.

Também é possível declarar variáveis com o mesmo nome em
blocos diferentes:

if (condicao) {
    const valorGasto = 50;
} else {
    const valorGasto = 100;
}

Nesse caso, são duas variáveis diferentes, pois cada uma
pertence ao seu próprio bloco.

Uma solução é utilizar a variável somente dentro do bloco:

if (condicao) {
    const valorGasto = 50;
    console.log(valorGasto);
} else {
    const valorGasto = 100;
    console.log(valorGasto);
}

Outra possibilidade é declarar a variável fora do bloco quando ela
precisar ser utilizada posteriormente.

Exemplo:

let valorGasto;

if (condicao) {
    valorGasto = 50;
} else {
    valorGasto = 100;
}

console.log(valorGasto);

Nesse caso, valorGasto é declarada fora do if e pode ser acessada
depois da estrutura condicional.

É necessário utilizar let porque o valor será atribuído posteriormente.
Não seria possível declarar:

const valorGasto;

pois const precisa receber um valor no momento da declaração.
*/


/*
============================================================
8. ATALHOS ÚTEIS DO VS CODE
============================================================

Shift + Alt + ↓
Duplica a linha atual para baixo.

Shift + Alt + ↑
Duplica a linha atual para cima.

Shift + Alt + F
Formata todo o documento automaticamente.

Observação:
Os atalhos podem ser alterados nas configurações do VS Code.

Para consultar ou alterar os atalhos:
Ctrl + K, depois Ctrl + S
*/