/*
1) Faça um algoritmo que, dadas as 3 notas tiradas por um aluno
em um semestre da faculdade, calcule e imprima a sua média e a
sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média maior ou igual a 5 e menor que 7, recuperação;
- Média maior ou igual a 7, passou de semestre;

*/

const n1 = 3;
const n2 = 4;
const n3 = 2;

const media = (n1 + n2 + n3) / 3;
console.log('A média do aluno foi:', media);

if (media < 5) {
    console.log('O aluno está reprovado');
} else if (media >= 5 && media < 7) {
    console.log('O aluno está em recuperação');
} else {
    console.log('O aluno foi aprovado');
}
