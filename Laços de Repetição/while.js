/**
 let i = 0
while (i < 10){
    i ++
    console.log(i)
}
*/

/**
const readlineSync = require('readline-sync');
const correta = "senha123";

let senha;
do {
    senha = readlineSync.question("Digite a senha correta:");
}while (senha != correta);

console.log("Acesso Concedido")
 */


/**
const readlineSync = require('readline-sync')

let soma = 0;
let numero;
while (soma < 100){
    numero = readlineSync.questionInt("Digite um numero: ");
    soma = soma + numero;
    console.log(soma)
}
*/

const readlineSync = require('readline-sync')

let operacao;
do{
    console.log("-----------------------------------------")
    console.log(`Qual operacao deseja?
    [+] Soma 
    [-] Subtracao 
    [*] Multiplicacao 
    [/] Divisao 
    [S] Sair: `);

    operacao = readlineSync.question()

    if (operacao == '+') {
        console.log(' ')
        let n1 = readlineSync.questionInt("Digite o primeiro numero: ")
        let n2 = readlineSync.questionInt("Digite o segundo numero: ")

        soma = n1 + n2
        console.log(soma)
        
    }

    else if (operacao == '-') {
        console.log(' ')
        let n1 = readlineSync.questionInt("Digite o primeiro numero: ")
        let n2 = readlineSync.questionInt("Digite o segundo numero: ")

        sub = n1 - n2
        console.log(sub)
        
    }

    else if (operacao == '*') {
        console.log(' ')
        let n1 = readlineSync.questionInt("Digite o primeiro numero: ")
        let n2 = readlineSync.questionInt("Digite o segundo numero: ")

        mult = n1 * n2
        console.log(mult)
        
    }

    else if (operacao == '/') {
        console.log(' ')
        let n1 = readlineSync.questionInt("Digite o primeiro numero: ")
        let n2 = readlineSync.questionInt("Digite o segundo numero: ")

        div = n1 / n2
        console.log(div)
        
    }

    else {
        console.log(' ')
        console.log("Opção Inválida")
        console.log(' ')
    }


} while (operacao.toUpperCase() != 'S');

console.log(' ')
console.log("Obrigado");
console.log("-----------------------------------------")

