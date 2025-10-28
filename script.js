//Atividade 1//

//1.1: Crie uma variável nome e armazene seu nome. Mostre no console.//
let nome = "Davi";
console.log ("Meu nome é", nome);

//1.2: Crie duas variáveis idade e altura, depois mostre no console.//
let idade = "16";
let altura = "1,70m";
console.log ("Tenho", idade, "anos e", altura, "de altura");

//1.3: Crie uma variável booleana estudando e mostre no console se você está estudando ou não.//
let estudando = true
if (estudando) {
    console.log ("Eu estou estudando.");
} else {
    console.log ("Eu não estou estudando.");
}

//2.1: Some dois números e mostre o resultado no console.
let num1 = 3
let num2 = 5
console.log ("A soma de", num1, "e", num2, "é igual a", num1 + num2);

//2.2 Divida dois números e mostre o resto da divisão no console.
let num3 = 8
let num4 = 5
let resto = num3 % num4
console.log ("O resto da divisão entre", num3, "e", num4, "é igual a", resto)

//2.3: Crie uma expressão que verifique se a idade é maior ou igual a 18.
let idade2 = 19;
if (idade2 >=18) {
    console.log ("Você é maior de idade.");
} else {
    console.log ("Você não é maior de idade.");
}

//3.1: Peça ao usuário um número com prompt e diga se ele é par ou ímpar.
let num5 = Number(prompt("Digite um número:"));
if (num5 % 2 === 0) {
  alert("O número é par!");
} else {
  alert("O número é ímpar!");
}

//3.2: Peça ao usuário a idade e diga se ele pode dirigir (>=18).
let idade3 = Number(prompt("Digite sua idade:"));
if (idade3 >= 18) {
    alert("Você pode dirigir.");
} else {
    alert("Você não pode dirigir.");
}

//3.3: Peça uma nota (0 a 10) e mostre se está “Reprovado”, “Recuperação” ou “Aprovado”.
let nota = Number(prompt("Digite sua nota (de 0 a 10)"));
if (nota >= 6) {
    alert("Você está aprovado!");
}
if (nota >= 4) {
    alert("Você está de recuperação.");
} else {
    alert("Você foi reprovado!");
}

//4.1: Mostre os números de 1 a 10 com for.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//4.2: Peça um número e mostre a tabuada dele até 10.
let num6 = Number(prompt("Digite um número:"));
for (let j = 1; j <= 10; j++) {
    alert(`${num6} x ${j} = ${num6 * j}`);
}

//4.3: Use while para pedir senha até o usuário digitar “1234”.
let senha = prompt("Digite a senha:");
while (senha !== "1234") {
    senha = prompt("Senha incorreta! Tente novamente:");
}
alert("Acesso permitido!");

//5.1: Crie uma função que receba dois números e retorne a soma.
function somar(num7, num8) {
  return num7 + num8;
}
let resultado = somar(5, 7);
console.log("A soma é", resultado);

//5.2: Crie uma função que receba um nome e retorne "Olá, nome!".
function nom(nome) {
  return "Olá, " + nome + "!";
}
let nomeUsuario = prompt("Digite seu nome:");
alert(nom(nomeUsuario));

//5.3: Crie uma função que calcule a média de 3 notas.
function calcularMedia(n1, n2, n3) {
  let media = (n1 + n2 + n3) / 3;
  return media;
}
let solucao = calcularMedia(9, 7, 10);
console.log("A média é", resultado);

//6.1: Crie um array com 5 nomes e mostre o primeiro e o último.
let nomes = ["Davi", "Leandro", "Leonardo", "Manel", "Letícia"];
console.log("Primeiro nome:", nomes[0]);
console.log("Último nome:", nomes[4]);

//6.2: Adicione um nome novo ao array e mostre todos os elementos.
let nombres = ["Davi", "Leandro", "Leonardo", "Manel", "Letícia"];
nombres.push("Lucas");
console.log("Lista de nomes:");
for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

//6.3: Faça um loop que mostre cada elemento do array.
let noms = ["Davi", "Thyago", "Hyago", "Roberto", "Luiz"];
for (let i = 0; i < noms.length; i++) {
  console.log(noms[i]);
}

//7.1: Crie um objeto carro com propriedades marca, modelo e ano. Mostre no console.
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022
}
console.log(carro);

//7.2: Crie um objeto aluno com nome, idade e notas. Mostre o nome e a média.
let aluno = {
  nome: "Igor",
  idade: 17,
  notas: [8, 7, 9]
};
let soma = aluno.notas[0] + aluno.notas[1] + aluno.notas[2];
let media = soma / aluno.notas.length;
console.log("Nome:", aluno.nome);
console.log("Média:", media);

//7.3: Crie um array de objetos produtos com pelo menos 3 itens (nome e
//preço). Mostre todos.
let produtos = [
  { nome: "Camiseta", preço: 50 },
  { nome: "Calça", preço: 120 },
  { nome: "Tênis", preço: 200 }
];
console.log(produtos);

//8.1: Crie um botão que, ao clicar, troque a cor de fundo da página.
let botao = document.getElementById("trocarCor");
    botao.addEventListener("click", function() {
      document.body.style.backgroundColor = "orange";
    });

//8.2: Crie um input e um botão. Quando clicar, mostre no console o texto digitado.
document.addEventListener("DOMContentLoaded", function() {
  let input = document.getElementById("meuInput");
  let botao1 = document.getElementById("mostrar");

  botao1.addEventListener("click", function() {
    console.log(input.value);
  });
});

//8.3: Crie um botão que conte quantos cliques já foram feitos.
let contador = 0;
let botao2 = document.getElementById("contar");
botao2.addEventListener("click", function() {
  contador++;
  console.log("Cliques:", contador);
});

//9.1: Peça um nome e mostre quantas letras ele tem.
let botao3 = document.getElementById("btnContar");
let input = document.getElementById("nomeInput");
let display = document.getElementById("resultado");

botao3.addEventListener("click", function() {
  let nome = input.value;
  let tamanho = nome.length;
  display.textContent = tamanho;
});

//9.2: Peça uma frase e mostre em letras maiúsculas.
let botao4 = document.getElementById("btnMaiusculas");
let input1 = document.getElementById("fraseInput");
let display1 = document.getElementById("resulty");

botao4.addEventListener("click", function() {
  let frase = input1.value;
  let fraseMaiuscula = frase.toUpperCase();
  display1.textContent = fraseMaiuscula;
});

//9.3: Peça um texto e mostre apenas os 5 primeiros caracteres.
let botao5 = document.getElementById("btnCinco");
let input2 = document.getElementById("textoInput");
let display2 = document.getElementById("resultad");

botao5.addEventListener("click", function() {
  let texto = input2.value;            
  let primeirosCinco = texto.slice(0, 5); 
  display2.textContent = primeirosCinco;  
});

//10.1: Crie uma Promise que resolve depois de 3 segundos com a mensagem "Concluído!".
let minhaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Concluído!");
  }, 3000);
});

minhaPromise.then((mensagem) => {
  console.log(mensagem);
});


//10.2: Use fetch para buscar dados de https://jsonplaceholder.typicode.com/todos/1 e mostre no console.
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Erro ao buscar dados:", error);
  });

//10.3: Use fetch para buscar uma lista de posts (/posts) e mostre apenas os títulos no console.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(posts => {
    posts.forEach(post => {
      console.log(post.title);
    });
  })
  .catch(error => {
    console.error("Erro ao buscar posts:", error);
  });
