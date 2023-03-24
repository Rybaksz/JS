console.log("Soma:");
console.log(somar(10,10));

console.log("Divisão:");
console.log(dividir(20,10));

console.log("Multiplicação:");
console.log(multiplicar(30,10));

console.log("Subtração:");
console.log(subtrair(40,10));

function somar(numero1, numero2) {
    let soma = numero1 + numero2;
    return soma;
}

function dividir(numero1, numero2) {
    let divisao = numero1 / numero2;
    return divisao;
}

function multiplicar(numero1, numero2) {
    let multiplicacao = numero1 * numero2;
    return multiplicacao;
}

function subtrair(numero1, numero2) {
    let subtracao = numero1 - numero2;
    return subtracao;
}