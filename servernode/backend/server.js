    const express = require("express");
    const cors = require("cors");

    const app = express();

    app.use(cors());

app.listen(3000, () => {
    console.log('\n🚀 Servidor rodando em http://localhost:3000\n');
});

    const jogos = [
    { id: 1, nome: "Minecraft", genero: "Sandbox", ano: 2011 },
    { id: 2, nome: "GTA V", genero: "Ação", ano: 2013 },
    { id: 3, nome: "The Witcher 3", genero: "RPG", ano: 2015 },
    { id: 4, nome: "Valorant", genero: "FPS", ano: 2020 },
    { id: 5, nome: "Elden Ring", genero: "RPG", ano: 2022 }
    ];

    app.get("/jogos", (req, res) => {
    res.json(jogos);
    });

    app.listen(3000, () => {
    });