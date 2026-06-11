    const conteudo = document.getElementById("conteudo");

    let jogos = [];

    async function buscarJogos() {
    try {
        const resposta = await fetch("http://localhost:3000/jogos");
        jogos = await resposta.json();

        mostrarTabela();
    } catch (erro) {
        console.error("Erro ao buscar jogos:", erro);
    }
    }

    function mostrarTabela() {
    let html = `
        <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Gênero</th>
            <th>Ano</th>
            </tr>
        </thead>
        <tbody>
    `;

    jogos.forEach(jogo => {
        html += `
        <tr>
            <td>${jogo.id}</td>
            <td>${jogo.nome}</td>
            <td>${jogo.genero}</td>
            <td>${jogo.ano}</td>
        </tr>
        `;
    });

    html += `
        </tbody>
        </table>
    `;

    conteudo.innerHTML = html;
    }

    function mostrarCards() {
    let html = '<div class="cards">';

    jogos.forEach(jogo => {
        html += `
        <div class="card">
            <h3>${jogo.nome}</h3>
            <p><strong>ID:</strong> ${jogo.id}</p>
            <p><strong>Gênero:</strong> ${jogo.genero}</p>
            <p><strong>Ano:</strong> ${jogo.ano}</p>
        </div>
        `;
    });

    html += "</div>";

    conteudo.innerHTML = html;
    }

    document
    .getElementById("btnTabela")
    .addEventListener("click", mostrarTabela);

    document
    .getElementById("btnCards")
    .addEventListener("click", mostrarCards);

    buscarJogos();