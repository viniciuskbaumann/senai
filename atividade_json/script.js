let playlist = [];

const corpoTabela = $('#corpoTabela');
const jsonArea = $('#jsonArea');

function atualizarTabela() {
    corpoTabela.html('');

    playlist.forEach((musica) => {
        const tr = $('<tr>');

        const tdNome = $('<td>');
        tdNome.text(musica.nome);
        tr.append(tdNome);

        const tdAutor = $('<td>');
        tdAutor.text(musica.autor);
        tr.append(tdAutor);

        const tdDuracao = $('<td>');
        tdDuracao.text(musica.duracao);
        tr.append(tdDuracao);

        const tdColaborador = $('<td>');
        tdColaborador.text(musica.colaborador);
        tr.append(tdColaborador);

        const tdLink = $('<td>');
        const linkTag = $('<a>');
        linkTag.attr('href', musica.link);
        linkTag.text('Ouvir Música');
        linkTag.attr('target', '_blank');
        tdLink.append(linkTag);
        tr.append(tdLink);

        corpoTabela.append(tr);
    });
}

function salvarMusica() {
    const novaMusica = {
        nome: $("#nome").val(),
        autor: $("#autor").val(),
        duracao: $("#duracao").val(),
        colaborador: $("#colaborador").val(),
        link: $("#link").val()
    };

    if (!novaMusica.nome || !novaMusica.autor) {
        alert('Por favor, preencha pelo menos o nome da música e o autor.');
        return;
    }

    playlist.push(novaMusica);
    atualizarTabela();

    $("#nome").val('');
    $("#autor").val('');
    $("#duracao").val('');
    $("#colaborador").val('');
    $("#link").val('');
}

function exportarJson() {
    const jsonString = JSON.stringify(playlist, null, 2);
    jsonArea.val(jsonString);
}

function importarJson() {
    const jsonString = jsonArea.val();
    
    if (jsonString.trim() === '') {
        alert('O campo de JSON está vazio. Cole um JSON válido para importar.');
        return;
    }

    try {
        const dadosImportados = JSON.parse(jsonString);
        playlist = playlist.concat(dadosImportados);
        atualizarTabela();
        
        jsonArea.val('');
        alert('Músicas importadas com sucesso!');
    } catch (erro) {
        alert('Erro ao importar. Verifique se o formato do JSON está correto.');
    }
}

$('#btnSalvar').click(salvarMusica);
$('#btnExportar').click(exportarJson);
$('#btnImportar').click(importarJson);