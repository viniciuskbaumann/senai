async function consultar() {
document.getElementById("tabelaCarrinho").innerHTML = '';
    const responsta = await fetch("/carrinho");
    const carrinho = await responsta.json();
    for (let i = 0; i < carrinho.length; i++) {
        let linha = `
        <tr>
            <td>${carrinho[i].id}</td>
            <td>${carrinho[i].produto}</td>
            <td>${carrinho[i].valor}</td>
            <td>${carrinho[i].quantidade}</td>
            <td><button onclick="abrirPopup(
            ${carrinho[i].id},
            '${carrinho[i].produto}',   
            ${carrinho[i].valor},
            ${carrinho[i].quantidade}
        )" class = "botaoalterar">Alterar</button>
            </td>
        </tr>
        `;
        document.getElementById("tabelaCarrinho").innerHTML += linha;
    }
}

async function cadastrar() {
    let id = document.getElementById('id').value;
    let produto = document.getElementById('produto').value;
    let valor = document.getElementById('valor').value;
    let quantidade = document.getElementById('quantidade').value;
        if (id == '' && produto != '' && valor != '' && quantidade != '') {
            await fetch("/carrinho", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    produto: produto,
                    valor: valor,
                    quantidade: quantidade
                })
            });
            document.getElementById('id').value = '';
            document.getElementById('produto').value = '';
            document.getElementById('valor').value = '';
            document.getElementById('quantidade').value = '';
        }
        consultar()
}

async function alterar() {
    let idalt = document.getElementById("id-popup").value;
    let produtoalt = document.getElementById("produto-popup").value;
    let valoralt = document.getElementById("valor-popup").value;
    let quantidadealt = document.getElementById("quantidade-popup").value;

    await fetch(`/carrinho/${idalt}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    produto: produtoalt, 
                    valor: valoralt,
                    quantidade: quantidadealt
                }
            )
    });
    fecharPopup();
    consultar()
}

async function deletar() {
    const iddel = document.getElementById("buscarCarrinho").value;

    if (!iddel) {
        alert("Informe um ID.");
        return;
    }

    const resposta = await fetch(`/carrinho/${iddel}`, {
        method: "DELETE"
    });

    if (resposta.ok) {
        alert("Item excluído com sucesso!");
        fecharPopupDeletar();
        consultar();
    } else {
        alert("Erro ao excluir o item.");
    }
}

consultar();

async function imprimirLista() {
    const resposta = await fetch("/carrinho");
    const carrinho = await resposta.json();

    let tabela = `
    <html>
    <head>
        <title>Lista de Compras</title>
        <style>
            body{
                font-family: Arial, sans-serif;
                padding:30px;
            }

            h1{
                text-align:center;
            }

            table{
                width:100%;
                border-collapse:collapse;
                margin-top:20px;
            }

            th, td{
                border:1px solid #000;
                padding:10px;
                text-align:left;
            }

            th{
                background:#f2f2f2;
            }
        </style>
    </head>
    <body>

        <h1>Lista de Compras</h1>

        <table>
            <tr>
                <th>ID</th>
                <th>Produto</th>
                <th>Valor</th>
                <th>Quantidade</th>
            </tr>
    `;

    carrinho.forEach(item => {
        tabela += `
            <tr>
                <td>${item.id}</td>
                <td>${item.produto}</td>
                <td>R$ ${Number(item.valor).toFixed(2)}</td>
                <td>${item.quantidade}</td>
            </tr>
        `;
    });

    tabela += `
        </table>

        <script>
            window.onload = function(){
                window.print();
                window.close();
            }
        <\/script>

    </body>
    </html>
    `;

    const janela = window.open("", "", "width=900,height=700");
    janela.document.write(tabela);
    janela.document.close();
}