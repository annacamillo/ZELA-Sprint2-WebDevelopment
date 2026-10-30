function selecionarRisco(risco) {
    let nivel;
    let mensagem;
    let classe;

    if (risco === "baixo") {
        nivel = "RISCO BAIXO";
        mensagem = "A região apresenta condições de baixo risco. Continue acompanhando os comunicados da Defesa Civil.";
        classe = "gerenciamento__nivel gerenciamento__nivel--baixo";

    } else if (risco === "moderado") {
        nivel = "RISCO MODERADO";
        mensagem = "Atenção: há condições que exigem acompanhamento. Fique atento aos comunicados da Defesa Civil.";
        classe = "gerenciamento__nivel gerenciamento__nivel--moderado";

    } else {
        nivel = "RISCO ALTO";
        mensagem = "Atenção! Esta região apresenta risco elevado na simulação. Acompanhe as orientações oficiais da Defesa Civil.";
        classe = "gerenciamento__nivel gerenciamento__nivel--alto";
    }

    document.getElementById("nivelRiscoAutoridade").innerText = nivel;
    document.getElementById("mensagemAlertaAutoridade").innerText = mensagem;
    document.getElementById("nivelRiscoAutoridade").setAttribute("class", classe);
}

function atualizarRegiao() {
    let regiao = document.getElementById("regiaoMonitorada").value;

    let mensagem = "Região monitorada: " + regiao;

    document.getElementById("mensagemRegiao").innerText = mensagem;
}

