const frutas = ["Abacaxi", "Banana", "Manga", "Morango"];

// Método indexOf: Mostra a posição do item informado.
console.log(frutas.indexOf("Banana"));

let item = frutas.indexOf("Banana");

// Método splice: Remove um item do Array; é necessário informar a posição do item que deseja remover e a quantidade de itens a partir posição informada.
frutas.splice(item, 1);
console.log(frutas);