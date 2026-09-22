

function escrevaMeuNome(nome) { // Usar um verbo no nome da função: escrevaMeuNome em vez de meuNome
    return 'Meu nome é ' + nome + '.';
}


function verificarIdade(idade) {
    console.log(escrevaMeuNome('Ana'));
    console.log('Eu tenho ' + idade + ' anos.');
    if (idade >= 18) {
        console.log('Eu sou maior de idade.');
    } else {
        console.log('Eu sou menor de idade.');
    }
}

verificarIdade(30);

/*
IMPORTANTE - console.log() x return:

Antes, escrevaMeuNome() utilizava:

console.log('Meu nome é ' + nome);

Nesse caso, a função exibia o nome no terminal, mas não devolvia
esse texto para quem chamou a função.

Por isso, ao utilizar:

console.log(escrevaMeuNome('Ana') + ' é maior');

escrevaMeuNome('Ana') exibia:

Meu nome é Ana

mas retornava undefined.

A expressão acabava sendo equivalente a:

console.log(undefined + ' é maior');

Com return:

function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome + '.';
}

a função passa a devolver a string.

Assim:

console.log(escrevaMeuNome('Ana'));

escrevaMeuNome('Ana') devolve o texto, que é passado para
console.log() e exibido no terminal.

Portanto:

console.log() -> exibe uma informação;
return -> devolve um valor para quem chamou a função.
*/