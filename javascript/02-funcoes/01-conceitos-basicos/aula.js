/*
============================================================
1. CONCEITO DE FUNÇÃO
============================================================

Uma função é um pequeno trecho ou bloco de código que pode ser
invocado para ser executado quando necessário.

Sintaxe básica:

function nomeDaFuncao() {
    // código que será executado
}

function -> declara a função
nomeDaFuncao -> nome utilizado para referenciar a função
() -> delimitam a lista de parâmetros da função
{} -> bloco de código da função

Declarar uma função não significa necessariamente executá-la.
Para executar uma função, é necessário invocá-la.

Exemplo:

function teste() {
    console.log('teste');
}

teste(); // invoca a função

Uma mesma função pode ser invocada várias vezes, evitando a
necessidade de repetir o mesmo trecho de código.
*/


// Criando a função
function teste() {
    console.log('teste');
}

// Invocando a função
teste();


/*
============================================================
2. PARÂMETROS E ARGUMENTOS
============================================================

Os parâmetros permitem que uma função receba valores para utilizar
durante sua execução.

Exemplo:

function sayMyName(name) {
    console.log('Your name is ' + name);
}

PARÂMETRO:
É a variável definida na declaração da função para receber um valor.

No exemplo:

function sayMyName(name)

name é o parâmetro.


ARGUMENTO:
É o valor efetivamente passado para a função no momento da sua
invocação.

No exemplo:

sayMyName('Carol');

'Carol' é o argumento passado para o parâmetro name.

Portanto:

function sayMyName(name) {
                   ↑
                parâmetro
}

sayMyName('Carol');
           ↑
        argumento


A mesma função pode ser invocada com argumentos diferentes:

sayMyName('Carol');
sayMyName('Ana');

O parâmetro continua sendo name, mas os argumentos são diferentes.


Também é possível declarar vários parâmetros, separados por vírgulas:

function incrementarJuros(valor, percentualJuros) {
                           ↑          ↑
                       parâmetros
}

E passar os respectivos argumentos na invocação:

incrementarJuros(100, 10);
                  ↑    ↑
               argumentos

Nesse exemplo:

valor recebe 100
percentualJuros recebe 10


OBSERVAÇÃO:
Durante a explicação, o professor utiliza o termo "parâmetro" também
ao se referir aos valores passados na chamada da função.

De forma mais específica:

parâmetro -> aparece na declaração da função;
argumento -> é o valor passado na invocação da função.
*/


// Criando a função
function sayMyName(name) {
    console.log('Your name is ' + name);
}

// Invocando a função
sayMyName('Carol');
sayMyName('Ana');


// Criando a função
function quadrado(valor) {
    valor * valor;
}

// Invocando a função
quadrado(10);


/*
============================================================
3. RETURN - DEVOLVENDO UM VALOR
============================================================

Uma função pode executar um código sem devolver explicitamente um
resultado ou pode devolver um valor utilizando return.

Exemplo sem return:

function quadrado(valor) {
    valor * valor;
}

quadrado(10);

A multiplicação é realizada, mas o resultado não está sendo devolvido
para ser utilizado fora da função.

Com return:

function quadrado(valor) {
    return valor * valor;
}

Agora a função devolve o resultado do cálculo.

O valor retornado pode ser armazenado:

const quadradoDeDez = quadrado(10);

ou utilizado diretamente em outra expressão:

console.log(quadradoDeDez + quadrado(10));

O return encerra a execução da função naquele ponto e devolve um valor
para quem a invocou.

Esse valor retornado pode ser armazenado em uma variável ou utilizado
diretamente em outra expressão.


3.1 PROCEDIMENTO X FUNÇÃO

Em algumas linguagens de programação, é comum chamar de procedimento
um trecho que executa uma ação sem retornar um valor e de função aquele
que retorna um valor.

No JavaScript, segundo o professor, essa distinção de nomenclatura
não é muito utilizada.
*/


// Devolver o valor - return
function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez + quadrado(10));


function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));


/*
============================================================
4. FUNÇÃO MAIN - ORGANIZAÇÃO DO PROGRAMA
============================================================

Até agora, os códigos dos exercícios eram escritos e executados
diretamente no arquivo.

A partir desta aula, o professor adotará uma função chamada main()
para organizar o código principal dos exemplos.

Exemplo:

function main() {
    console.log('Programa Principal');
}

main();

main significa "principal".

Ela será utilizada como a função principal do programa nos exemplos
do curso.

IMPORTANTE:
No JavaScript, não é obrigatório criar uma função chamada main().
Essa é uma forma de organização adotada pelo professor para os
exemplos da aula.


4.1 DECLARAÇÃO X EXECUÇÃO

Apenas declarar a função não executa o código que está dentro dela:

function main() {
    console.log('Programa Principal');
}

Por isso, é necessário invocá-la:

main();

Ao executar o arquivo, encontrar a declaração de uma função não significa
executar imediatamente o código que está dentro dela.

O console.log() dentro da função somente será executado quando a função
for invocada.


4.2 ORGANIZAÇÃO UTILIZADA NO CURSO

As funções auxiliares serão declaradas fora da main:

function calcularJuros() {
    // código da função auxiliar
}

E serão utilizadas dentro da função principal conforme necessário:

function main() {
    console.log('Programa Principal');
    calcularJuros();
}

main();

Assim, teremos:

- main() -> concentra o código principal do programa;
- outras funções -> executam tarefas específicas e podem ser utilizadas
  pela função principal.

Essa organização ajuda a deixar o código mais legível e facilita
a evolução dos exemplos.
*/


// Função main
function calcularJuros() {

}

function mainExemplo() {
    console.log('Programa Principal');
    calcularJuros();
}

mainExemplo();


/*
============================================================
5. REFATORAÇÃO DO EXERCÍCIO DO IMC COM FUNÇÕES
============================================================

Refatorar significa reorganizar ou melhorar a estrutura de um código
sem alterar o seu comportamento esperado.

Neste exemplo, o código do exercício do IMC será dividido em funções
menores para deixá-lo mais organizado e legível.

A ideia é separar responsabilidades:

calcularImc() -> responsável por calcular o IMC;
classificarImc() -> responsável por classificar o IMC;
main() -> contém o código principal e utiliza as funções auxiliares.


5.1 FUNÇÃO calcularImc()

Para calcular o IMC, precisamos receber o peso e a altura.

function calcularImc(peso, altura) {
    return peso / (altura ** 2);
}

Depois que o cálculo foi isolado nessa função, o restante do programa
não precisa conhecer diretamente a fórmula do IMC.

Sempre que for necessário calcular um IMC, basta chamar:

calcularImc(peso, altura);

Assim, a complexidade do cálculo fica isolada dentro da função.


5.2 FUNÇÃO classificarImc()

A classificação também pode ser isolada em outra função.

Ela recebe o IMC e devolve a classificação correspondente.

Nesse caso, queremos retornar a classificação para que ela possa ser
utilizada pelo restante do programa.

console.log() -> apenas exibe a informação no console;
return -> devolve o valor para quem chamou a função.

No meu código, a classificação é armazenada primeiro em uma variável
e retornada ao final da função.

Na aula, o professor utilizou return diretamente dentro de cada
condição. As duas formas serão comparadas abaixo.


5.3 RETURN DIRETAMENTE NAS CONDIÇÕES

No meu código, primeiro armazeno a classificação em uma variável:

let categoriaDentro;

if (imcDentroClassificacao < 18.5) {
    categoriaDentro = 'Abaixo do peso';
}

...

return categoriaDentro;

Essa solução está correta.

Na aula, o professor utilizou outra forma: retornar diretamente o
resultado dentro de cada condição.

Exemplo:

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
}

Quando um return é executado, a função devolve o valor naquele ponto
e sua execução é encerrada.

Por isso, na solução do professor não é necessário armazenar primeiro
a classificação em uma variável para retorná-la posteriormente.

As duas formas funcionam.

Minha solução:
condição -> atribui à variável -> return no final

Solução do professor:
condição -> return diretamente


5.4 FUNÇÕES AUXILIARES E CÓDIGO PRINCIPAL

calcularImc() e classificarImc() são utilizadas como funções
auxiliares.

A função main() concentra o código principal:

function main() {
    const peso = 75;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);

    console.log(classificarImc(imc));
}

main();


5.5 ISOLAMENTO DA COMPLEXIDADE

Ao dividir o programa em funções, cada parte fica responsável por
uma tarefa específica.

O código principal não precisa saber como o IMC é calculado nem como
sua classificação é determinada.

Ele apenas utiliza as funções responsáveis por essas tarefas.

Isso ajuda a:

- diminuir a complexidade do código;
- melhorar a legibilidade;
- evitar repetição;
- facilitar a reutilização das funções.


5.6 RESPONSABILIDADE ÚNICA

Segundo a estratégia apresentada pelo professor, quando um trecho de
código possui uma responsabilidade específica que pode ser isolada,
podemos colocá-lo em uma função própria.

Neste exemplo:

calcularImc() -> calcula o IMC;
classificarImc() -> classifica o IMC;
main() -> organiza o fluxo principal do programa.
*/


function calcularImc(pesoEmKg, alturaEmMetros) {
    const imcDentroFuncao = pesoEmKg / (alturaEmMetros ** 2);
    return imcDentroFuncao;
}


/*
5.7 SEPARANDO CÁLCULO E EXIBIÇÃO

A função calcularImc() fica responsável apenas por calcular e retornar
o IMC.

A exibição do resultado é feita no código principal.

Antes, eu tinha:

function calcularImc(pesoEmKg, alturaEmMetros) {
    const imcDentroFuncao = pesoEmKg / (alturaEmMetros ** 2);
    console.log('O IMC calculado foi:', imcDentroFuncao.toFixed(2));
    return imcDentroFuncao;
}

Esse código funcionava, mas a função realizava duas ações:

- calculava e retornava o IMC;
- exibia o resultado no console.

Separando essas responsabilidades:

calcularImc() -> calcula e retorna o IMC;
main() -> utiliza o resultado e o exibe.

Isso deixa cada parte do código com uma responsabilidade mais específica
e facilita sua reutilização.
*/


function classificarImc(imcDentroClassificacao) {
    let categoriaDentro;

    if (imcDentroClassificacao < 18.5) {
        categoriaDentro = 'Abaixo do peso';
    } else if (imcDentroClassificacao >= 18.5 && imcDentroClassificacao < 25) {
        categoriaDentro = 'Peso normal';
    } else if (imcDentroClassificacao >= 25 && imcDentroClassificacao < 30) {
        categoriaDentro = 'Acima do peso';
    } else if (imcDentroClassificacao >= 30 && imcDentroClassificacao < 40) {
        categoriaDentro = 'Obeso';
    } else {
        categoriaDentro = 'Obesidade Grave';
    }

    return categoriaDentro;
}


function main() {
    const imcForaFuncao = calcularImc(93, 1.65);

    const categoriaFora = classificarImc(imcForaFuncao);

    console.log('O IMC calculado foi:', imcForaFuncao.toFixed(2));
    console.log(categoriaFora);
}

main();


/*
5.8 RETURN X console.log()

A função classificarImc() retorna uma categoria, por exemplo, 'Obeso'.

Porém, se fizermos:

const categoriaFora = console.log(classificarImc(imcForaFuncao));

classificarImc(imcForaFuncao) retorna 'Obeso' e esse valor é passado
para console.log(), que o exibe no terminal.

Entretanto, console.log() serve para exibir uma informação e retorna
undefined.

Por isso, categoriaFora recebe undefined, e não 'Obeso'.

Para armazenar o valor retornado pela função, devemos fazer:

const categoriaFora = classificarImc(imcForaFuncao);

console.log(categoriaFora);

Assim:

classificarImc() -> retorna 'Obeso'
categoriaFora    -> recebe 'Obeso'
console.log()     -> apenas exibe 'Obeso' no terminal


Também podemos apenas exibir diretamente o retorno:

console.log(classificarImc(imcForaFuncao));

Nesse caso, não precisamos armazenar a classificação em uma variável.
*/


/*
============================================================
6. FUNÇÕES COMO VALORES
============================================================

No JavaScript, funções também são valores.


6.1 REFERÊNCIA X INVOCAÇÃO

Depois que uma função é declarada, podemos referenciá-la pelo seu nome
sem necessariamente executá-la.

Exemplo:

function main() {
    console.log('Programa principal');
}

main;   -> referência à função
main(); -> invoca a função

Também podemos visualizar a própria função:

console.log(main);

Nesse caso, não estamos executando main(), pois não utilizamos os
parênteses de invocação.


6.2 ATRIBUINDO UMA FUNÇÃO A OUTRA VARIÁVEL

Como uma função pode ser tratada como um valor, podemos atribuir sua
referência a outra variável:

const main2 = main;

Agora main2 referencia a mesma função que main.

Por isso:

main2();

também executa a função.

IMPORTANTE:

const main2 = main;

é diferente de:

const main2 = main();

main  -> referência à função
main() -> executa a função e representa o valor retornado por ela
*/


const main2 = main;

console.log(main2);

// Invocando a função através da nova referência
main2();


/*
6.3 REATRIBUINDO UMA FUNÇÃO

Como funções podem ser tratadas como valores no JavaScript, também é
possível atribuir uma função a uma variável e posteriormente substituir
essa função por outra, desde que a variável permita reatribuição.

Para isso, podemos utilizar let.

Exemplo:

let minhaFuncao = function () {
    console.log('Primeira função');
};

minhaFuncao();

minhaFuncao = function () {
    console.log('Segunda função');
};

minhaFuncao();

Resultado:

Primeira função
Segunda função

Na primeira chamada, minhaFuncao referencia a primeira função.

Depois:

minhaFuncao = function () {
    console.log('Segunda função');
};

faz com que minhaFuncao passe a referenciar outra função.

Por isso, a chamada seguinte:

minhaFuncao();

executa a segunda função.


IMPORTANTE:

Uma variável declarada com const não pode receber uma nova referência:

const minhaFuncao = function () {
    console.log('Primeira função');
};

// Não é permitido:
minhaFuncao = function () {
    console.log('Segunda função');
};

Para permitir a reatribuição da variável, podemos utilizar let.


6.4 FUNÇÃO COMO ARGUMENTO DE OUTRA FUNÇÃO

O professor também mencionou que uma função pode ser passada para
outra função.

Exemplo:

function executar(funcao) {
    funcao();
}

function dizerOla() {
    console.log('Olá');
}

executar(dizerOla);

Nesse exemplo:

dizerOla -> é uma função;
executar() -> recebe uma função como argumento;
funcao -> recebe a referência de dizerOla;
funcao() -> invoca a função recebida.

Observe que utilizamos:

executar(dizerOla);

e não:

executar(dizerOla());

No primeiro caso, estamos passando a própria função.

No segundo caso, dizerOla() seria executada primeiro e o valor
retornado por ela seria passado para executar().


6.5 RESUMO

No JavaScript, uma função pode ser:

- declarada;
- invocada;
- armazenada em uma variável;
- atribuída a outra variável;
- reatribuída, quando a variável permitir;
- passada como argumento para outra função.

Isso é possível porque funções também podem ser tratadas como valores
no JavaScript.

Funções em JavaScript também são objetos, mas aqui o conceito principal
é entender que elas podem ser tratadas como valores.
*/


/*
============================================================
7. FUNÇÃO IMEDIATAMENTE INVOCADA - IIFE
============================================================

Até agora, criávamos a função principal e depois a invocávamos:

function main() {
    // código principal
}

main();

Também é possível criar uma função e executá-la imediatamente.

IIFE significa:

Immediately Invoked Function Expression
Expressão de Função Imediatamente Invocada


7.1 IIFE NOMEADA

Exemplo:

(function main() {
    // código principal
})();

A função é criada e imediatamente invocada.

Os parênteses finais:

();

fazem a invocação imediatamente após sua criação.

Assim, não precisamos escrever posteriormente:

main();
*/


// Função imediatamente invocada nomeada
(function main() {
    const imcForaFuncao = calcularImc(93, 1.65);

    const categoriaFora = classificarImc(imcForaFuncao);

    console.log(categoriaFora);
})();


/*
7.2 FUNÇÃO ANÔNIMA

Também podemos criar uma função sem dar um nome a ela:

function () {
    // código
}

Uma função sem nome é chamada de função anônima.

No caso da IIFE, podemos utilizá-la assim:

(function () {
    // código
})();

Nesse caso, não temos um identificador como main para utilizá-la
posteriormente pelo nome.

Ela é criada e imediatamente executada.


7.3 IIFE ANÔNIMA

A estrutura utilizada será:

(function () {
    // código principal
})();

Segundo o professor, esse tipo de estrutura é bastante utilizado na
programação web para situações em que queremos executar determinado
código uma única vez e também isolar seu escopo.

O conceito de escopo será aprofundado posteriormente no curso.


7.4 ORGANIZAÇÃO ADOTADA A PARTIR DE AGORA NO CURSO

O professor utilizará uma IIFE anônima para representar o código
principal dos próximos exemplos:

(function () {
    // código principal
})();

As funções auxiliares continuarão sendo declaradas separadamente e
utilizadas pelo código principal quando necessário.

IMPORTANTE:

Essa é a estrutura que o professor adotará nos próximos exemplos do
curso.

Não significa que todo programa JavaScript precise possuir uma IIFE
como função principal.
*/


// Função imediatamente invocada anônima
// A partir de agora, a main será representada dessa forma nos exemplos do curso.
(function () {
    const imcForaFuncao = calcularImc(93, 1.65);

    const categoriaFora = classificarImc(imcForaFuncao);

    console.log(categoriaFora);
})();


/*
============================================================
8. HOISTING DE FUNÇÕES
============================================================

Este conceito apareceu quando foram criadas duas funções com o mesmo
nome no mesmo escopo.

Exemplo:

function main() {
    console.log('Programa Principal');
}

main();

function main() {
    console.log('Programa do IMC');
}

main();

Mesmo a segunda declaração de main() aparecendo depois da primeira
chamada, as duas chamadas executam a segunda versão da função.

Isso acontece por causa de um comportamento do JavaScript chamado
hoisting.


8.1 DECLARAÇÕES DE FUNÇÃO E HOISTING

Em declarações de função feitas com:

function nomeDaFuncao() {
    ...
}

o JavaScript disponibiliza a declaração da função antes de começar
a executar o código daquele escopo.

Por isso, uma função pode até ser chamada antes de aparecer escrita:

teste();

function teste() {
    console.log('teste');
}

Esse código funciona.


8.2 FUNÇÕES COM O MESMO NOME

Se duas funções forem declaradas com o mesmo nome no mesmo escopo,
a declaração posterior substitui a anterior.

Por isso:

function main() {
    console.log('Primeira main');
}

main();

function main() {
    console.log('Segunda main');
}

main();

Resultado:

Segunda main
Segunda main

A primeira chamada NÃO executa a primeira versão de main().

Quando a execução começa, a declaração posterior de main() já é
a definição utilizada naquele escopo.


8.3 BOA PRÁTICA

Evitar declarar duas funções com o mesmo nome no mesmo escopo,
pois isso pode causar comportamentos inesperados e dificultar
a leitura do código.

OBSERVAÇÃO:

Este comportamento está relacionado às declarações tradicionais
de função (function declaration).

Existem outras formas de criar funções em JavaScript que possuem
comportamentos diferentes em relação ao hoisting e serão estudadas
posteriormente.
*/