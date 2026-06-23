    const express = require("express");
    const cors = require("cors");
    const path = require("path");

    const app = express();

    app.use(cors());

app.listen(3000, () => {
    console.log('\n🚀 Servidor rodando em http://localhost:3000\n');
});

    async function consultar() {
        const exibir = await fetch("/jogos")
        const jogos = await exibir.json(); 
        console.log(jogos)
    }

    app.use(express.static(path.join(__dirname, '../frontend')));

    app.listen(3000, () => {
    });

// req.body.{chave do frot}