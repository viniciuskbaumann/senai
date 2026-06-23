async function consultar() {
document.getElementById("tabelaCarrinho").innerHTML = '';
    const responsta = await fetch("/carrinho");
    const carrinho = await responsta.json();
    for (let i = 0; i < carrinho.length; i++) {
        let linha = `
        <tr>
            <td>${carrinho[i].nome}</td>
            <td>${carrinho[i].valor}</td>
            <td>${carrinho[i].quantidade}</td>
            </td>
        </tr>
        `;
        document.getElementById("tabelaCarrinho").innerHTML += linha;
    }
}