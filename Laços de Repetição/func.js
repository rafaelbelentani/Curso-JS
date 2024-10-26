/**function maiorNumero(n1, n2){

    if (n1 > n2) {
        console.log(`O ${n1} é maior que ${n2}`);
    } else if (n1 <n2) {
        console.log(`O ${n2} é maior que ${n1}`);
    } else {
        console.log(`O ${n1} é igual que o ${n2}`);
    }
}

maiorNumero(5, 44);

*/


function cubo(numero){
    console.log(numero ** 3);
}

function quadrado(numero){
    console.log(numero ** 2);
}

let numero = 0
while (numero < 10) {
    numero ++

    if (numero % 2 == 0){
        cubo(numero)
        console.log("Numero impar")
    }
    else {
        quadrado(numero)
        console.log("Numero par")
    }
}


