# ContaBanco — Simulando uma Conta Bancária pelo Terminal

## Descrição do Projeto

Este projeto foi desenvolvido como parte de um desafio prático da Digital Innovation One (DIO), com o objetivo de aplicar conceitos fundamentais da linguagem Java.

A aplicação simula a abertura de uma conta bancária pelo terminal, solicitando ao usuário o número da conta, a agência, o nome do cliente e o saldo inicial.

Após a coleta dos dados, o programa exibe uma mensagem de confirmação com as informações fornecidas.

## Tecnologias Utilizadas

- **Java:** linguagem de programação utilizada no desenvolvimento.
- **JDK:** conjunto de ferramentas utilizado para compilar e executar o programa.
- **Visual Studio Code:** editor utilizado para escrever e testar o código.
- **Git e GitHub:** ferramentas utilizadas para versionamento e armazenamento do projeto.

## Ferramentas de Apoio ao Aprendizado

- **ChatGPT:** utilizado para esclarecer conceitos de Java, compreender erros, revisar o código e apoiar a documentação.
- **GitHub Copilot:** utilizado como ferramenta de assistência durante o desenvolvimento.

O projeto foi desenvolvido como exercício de aprendizagem, com foco na compreensão dos conceitos e na implementação prática das funcionalidades.

## Funcionalidades

- Solicita o número da conta bancária.
- Solicita o número da agência.
- Permite informar o nome completo do cliente.
- Remove espaços em branco no início e no final do nome.
- Solicita o saldo inicial da conta.
- Formata o saldo com duas casas decimais, utilizando o padrão brasileiro.
- Exibe uma mensagem de confirmação com os dados informados.

## Como Executar o Projeto

Para executar o projeto, é necessário ter o JDK instalado.

1. Abra o terminal na pasta `01-conta-banco`.

2. Compile o arquivo Java:

   ```bash
   javac ContaTerminal.java
   ```

3. Execute o programa:

   ```bash
   java ContaTerminal
   ```

4. Informe os dados solicitados no terminal.

## Exemplo de Execução

Exemplo utilizando os dados apresentados no enunciado original do desafio da DIO:

```text
Por favor, digite o número da conta:
1021
Por favor, digite o número da agência:
067-8
Por favor, digite o nome do cliente:
MARIO ANDRADE
Por favor, digite o saldo da conta:
237,48

Olá MARIO ANDRADE, obrigado(a) por criar uma conta em nosso banco, sua agência é 067-8, sua conta é 1021 e seu saldo de R$ 237,48 já está disponível para saque.
```

A implementação mantém a proposta original do desafio, acrescentando a formatação monetária brasileira e a remoção de espaços em branco no início e no final do nome do cliente.

## Melhorias Futuras

- Validar o número da conta, impedindo valores negativos e entradas inválidas.
- Validar o formato da agência.
- Impedir números e caracteres inválidos no nome do cliente.
- Substituir espaços consecutivos entre nomes por um único espaço.
- Validar o saldo informado.
- Informar o formato esperado para cada campo.
- Exibir mensagens de erro para entradas inválidas.
- Permitir novas tentativas quando o usuário informar dados incorretos.
- Configurar explicitamente a leitura de valores monetários no formato brasileiro.