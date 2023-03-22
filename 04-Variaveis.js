 var idade = 10;
 console.log("1 variavel de idade:  ", idade);

 var idade = 20;
console.log("2 variavel de idade:  ", idade);
//Utilizando o var para declerar variaveis, a variavel permsnee de acesso público/global
//Além de permitir o uso do mesmo nome outras vezes


//Utilizando a declaração do tipo let
//Variaveis declaradas como let tem os seus identificadores exclusivos não podendo ser declarada uma outra variaval com o mesmo idenficador.
//As Variaveis declaradas como let só são acessiveis em escopo local
//Variavel só estar acessivel em um escopo local significa que irei deixar a variavel fechada 

let nome = "Vitor";
 let idade = 10;


 console.log("Seja Bem vindo," , nome)
 console.log("1 Variavel let de idade:" , idade)

 idade = 20;
console.log("2 Variavel let de idade:" , idade);
//Let é tipo o id onde não se pode repetir 

//Usando o const para declarar a variavel
//Variaveis que utilizam o const tem exclusividade no seu identificado não podendo ter outra variavel com o mesmo identificado
// Variaveis declaradas com const tem o seu valor como constante não podendo ser atribuido qualquer outro valor ao decorrer do codigo, exceto na declaração da variavel 
// Variaveis const só podem ser acessadas no escopo local 
const idade = 25;
idade = 26;
// Quando se tem o = depois do valor da variavel é que está atribuindo um valor a ela

console.log(idade);
// Const contem a mesma excluisividade da let onde não se pode utilizar dois iguais

// Regras para identificadores

//Podem começar letra, $ ou com o símbolo de sublinhado _
// Não podem começar com números
// Não pode conter espaços
// Não podem ser nomes reservados(ex: let let)
// $ e _ é o private 



