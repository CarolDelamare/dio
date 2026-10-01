import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        // Scanner é a classe; scanner é a variável que guarda o objeto criado.
        // System.in indica que os dados serão lidos da entrada padrão, normalmente o teclado.

        System.out.println("Digite sua idade: ");
        
        int idade = scanner.nextInt();
        // nextInt() lê o próximo valor digitado e o interpreta como um número inteiro (int).

        if(idade < 18) {
        // Se a idade for menor que 18, a pessoa é classificada como menor de idade.
            System.out.println("Menor de idade.");            
            // No desafio da DIO, escrevi "Menor de Idade" com I maiúsculo.
            // A saída precisava ser exatamente "Menor de idade", pois o corretor diferencia maiúsculas e minúsculas.
            
        } else if(idade >= 18 && idade < 65) {
        // && significa "E": as duas condições precisam ser verdadeiras ao mesmo tempo.
        // || significa "OU": basta que pelo menos uma das condições seja verdadeira.
        // Portanto, a idade deve ser maior ou igual a 18 E menor que 65.
            System.out.println("Maior de idade.");

        } else {
        // Se nenhuma das condições anteriores for verdadeira, a idade só pode ser 65 ou mais.
        // Por isso, não é necessário escrever outra condição como idade >= 65.
            System.out.println("Idoso.");
        }

        scanner.close(); 


    }
     
}