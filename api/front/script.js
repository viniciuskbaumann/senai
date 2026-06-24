async function consultar() {
document.getElementById("tabelaCarrinho").innerHTML = '';
    const responsta = await fetch("/carrinho");
    const carrinho = await responsta.json();
    for (let i = 0; i < carrinho.length; i++) {
        let linha = `
        <tr>
            <td>${carrinho[i].produto}</td>
            <td>${carrinho[i].valor}</td>
            <td>${carrinho[i].quantidade}</td>
            <button onclick="abrirPopup(
            ${carrinho[i].id},
            '${carrinho[i].produto}',   
            ${carrinho[i].valor},
            ${carrinho[i].quantidade}
        )">Alterar</button>
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
        if (id == '') {
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