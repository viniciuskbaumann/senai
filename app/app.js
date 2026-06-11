//1
let idade = 25; 

if (idade < 18) {
    console.log("Menor de idade.")
} else {
    console.log("maior de idade")
}

// 2
for(let i = 1; i <= 20; i++){
    console.log([i])
}

//3
let valor1 = 10; 
let valor2 = 5; 

valorsomado = valor1 + valor2; 
console.log(valorsomado); 

valormultiplicado = valor1 * valor2; 
console.log(valormultiplicado); 

valordividido = valor1 / valor2; 
console.log(valordividido); 

valorreduzido = valor1 - valor2; 
console.log(valorreduzido); 

//4 
let frutas = ['maça', 'banana', 'morango', 'pera', 'abacate']

for( let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

//5 
let pessoa = [
    {nome: 'vasco', idade: 50, nota: 0},
    {nome: 'roxane', idade: 10, nota: 10},
    {nome: 'maicom', idade: 20, nota: 9}
];
