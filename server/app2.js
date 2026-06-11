const http = require("http"); 

let valor1 = 5; 
let valor2 = 10;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");

    if (req.url === "/") {
        res.end("Home, use como parâmetro as seguintes páginas: soma | subtracao | multiplicacao | divisao");
    }
    else if (req.url === "/soma") {
        res.end(`Soma: ${valor1 + valor2}`);
    }
    else if (req.url === "/subtracao") {
        res.end(`Subtração: ${valor1 - valor2}`);
    }
    else if (req.url === "/multiplicacao") {
        res.end(`Multiplicação: ${valor1 * valor2}`);
    }
    else if (req.url === "/divisao") {
        res.end(`Divisão: ${valor1 / valor2}`);
    }
    else {
        res.statusCode = 404;
        res.end("Página não encontrada");
    }
});

server.listen(3000); 

/*
Guarde duas variáveis numéricas e faça um sistema de rotas que: ao acessar /soma mostra a soma dos números, ao acessar /subtracao mostra a subtração, ao acessar /multiplicacao mostra a multiplicação e ao acessar /divisao mostra a divisão dos os números.

*/