import java.util.Scanner;

public class ContaTerminal {
    
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        // Scanner é uma classe utilizada para ler dados.
        // scanner é o nome do objeto criado.
        // new Scanner(System.in) cria um Scanner que lê dados digitados no terminal.

        int numeroConta;
        String agencia;
        String nomeCliente;
        double saldo;
        // int - Armazena números inteiros.
        // String - Armazena textos.
        // double - Armazena números com casas decimais.
        // As variáveis foram declaradas, mas ainda não receberam valores.

        System.out.println("Por favor, digite o número da conta: ");
        numeroConta = scanner.nextInt();
        // nextInt() - Lê o próximo número inteiro digitado pelo usuário.

        System.out.println("Por favor, digite o número da agência: ");
        agencia = scanner.next();
        // next() - Uma palavra, até encontrar um espaço ou quebra de linha.


        scanner.nextLine(); 
        // Consome a quebra de linha pendente após next().


        System.out.println("Por favor, digite o nome do cliente: ");
        nomeCliente = scanner.nextLine();
        // nextLine() - Uma linha inteira, incluindo espaços entre palavras.

        nomeCliente = nomeCliente.trim();        
        /*
        
        trim() - Remove espaços em branco do início e do final do nome.
        Preserva os espaços entre nomes e sobrenomes.
        
        Exemplos:
        " Ana Carolina "   → "Ana Carolina"
        "Ana Carolina   "   → "Ana Carolina"
        "Ana   Carolina"   → "Ana   Carolina"

        ATENÇÃO: trim() não remove espaços repetidos entre as palavras.

        */

        System.out.println("Por favor, digite o saldo da conta: ");
        saldo = scanner.nextDouble();
        // nextDouble() - Lê um número decimal digitado pelo usuário.
        // A aceitação de vírgula ou ponto depende da configuração regional do Scanner.
        // String.format() formata a saída com vírgula, mas não garante que a entrada aceite vírgula.
        
        System.out.println("Olá " + nomeCliente
        + ", obrigado(a) por criar uma conta em nosso banco, "
        + "sua agência é " + agencia
        + ", sua conta é " + numeroConta
        + " e seu saldo de R$ "
        + String.format(java.util.Locale.forLanguageTag("pt-BR"), "%.2f", saldo)
        + " já está disponível para saque.");

        /*

        String.format() - Formata um valor e retorna uma String.
        Locale.forLanguageTag("pt-BR") - Utiliza o padrão brasileiro.
        "%.2f" - Exibe o número com exatamente duas casas decimais.
        saldo - Variável cujo valor será formatado.
        Exemplo: 12.5 será exibido como 12,50.

        */

        /*

        ATENÇÃO: Em Java, não podemos quebrar uma String comum entre aspas duplas
        em várias linhas, pois isso causa um erro de sintaxe. Para dividir uma instrução 
        longa em várias linhas, devemos fechar as aspas de cada trecho de texto e utilizar
        o operador + para concatená-los.
        
        */

        /*

        O operador + permite concatenar textos e valores de variáveis.
        Exemplo: "Olá " + nomeCliente.
        
        */

        scanner.close();
        // Fecha o Scanner após finalizar a leitura dos dados.

        /* MELHORIAS FUTURAS:
        * 1. Número da conta: tratar entradas inválidas e impedir números negativos.
        * 2. Agência: definir o formato permitido e impedir caracteres inválidos.
        * 3. Nome do cliente: impedir números e caracteres não permitidos.
        * 4. Saldo: aceitar somente valores numéricos válidos.
        * 5. Informar ao usuário o formato esperado antes de cada entrada.
        * 6. Exibir uma mensagem de erro quando o usuário digitar dados inválidos.
        * 7. Permitir que o usuário tente novamente sem encerrar o programa.
        * 8. Configurar a leitura do saldo para aceitar o formato brasileiro (ex.: 12,50).
        * 9. Remover automaticamente espaços em branco no início e no final do nome. - Feito 
        * 10. Substituir espaços consecutivos entre nomes por um único espaço.
        */
    }
}