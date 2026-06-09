const http = require("http");

const alunos = [
    {
        nome: "João",
        idade: 16,
        turma: "1º A",
        nota: 8.5
    },
    {
        nome: "Maria",
        idade: 17,
        turma: "2º B",
        nota: 9.2
    },
    {
        nome: "Pedro",
        idade: 15,
        turma: "1º C",
        nota: 7.8
    }
];

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(`
            <html>
                <head>
                    <title>Sistema Escolar</title>
                </head>
                <body>
                    <h1>Sistema Escolar</h1>
                </body>
            </html>
        `);
    }

    else if (req.url === "/sobre") {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(`
            <html>
                <head>
                    <title>Sobre</title>
                </head>
                <body>
                    <h1>Sobre o Sistema</h1>
                    <p>Este sistema escolar permite consultar informações dos alunos e acompanhar dados acadêmicos.</p>
                </body>
            </html>
        `);
    }

    else if (req.url === "/contatos") {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end(`
            <html>
                <head>
                    <title>Contatos</title>
                </head>
                <body>
                    <h1>Contatos da Escola</h1>
                    <p>Telefone: (11) 99999-9999</p>
                    <p>E-mail: escola@email.com</p>
                </body>
            </html>
        `);
    }

    else if (req.url === "/alunos") {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        res.end(JSON.stringify(alunos, null, 2));
    }

    else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end("<h1>404 - Página não encontrada</h1>");
    }

});

server.listen(3000); 