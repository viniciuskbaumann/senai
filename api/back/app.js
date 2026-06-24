const express = require("express");
const cors = require("cors");
const path = require("path");
const { emitWarning } = require("process");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let carrinho = [];

app.get("/carrinho", (req, res) => {
    res.json(carrinho);
});

app.post("/carrinho", (req, res) => {
    const valorescarrinho = {
        id: carrinho.length + 1,
        produto: req.body.produto, 
        valor: req.body.valor, 
        quantidade: req.body.quantidade
    };

    carrinho.push(valorescarrinho);

    res.json(valorescarrinho); 
});

app.put("/carrinho/:id", (req, res) => {
    const alterar = carrinho.find(
        carrinho => carrinho.id == req.params.id
    );

    alterar.produto = req.body.produto, 
    alterar.valor = req.body.valor, 
    alterar.quantidade = req.body.quantidade

    res.json(alterar)
})

app.delete("/carrinho/:id", (req, res) => {
    carrinho = carrinho.filter(
        item => item.id != req.params.id
    );
    res.send("Carrinho Excluido com sucesso");
});

app.use(express.static("../front"));

app.listen(3000, () => {
    console.log("http://localhost:3000");
});