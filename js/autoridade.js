function selecionarRiscoBaixo() {
    let nivel = "RISCO BAIXO";
    let mensagem = "A região apresenta condições de baixo risco. Continue acompanhando os comunicados da Defesa Civil.";

    document.getElementById("nivelRiscoAutoridade").innerText = nivel;
    document.getElementById("mensagemAlertaAutoridade").innerText = mensagem;

    document.getElementById("nivelRiscoAutoridade").setAttribute("class", "gerenciamento__nivel gerenciamento__nivel--baixo");
}

function selecionarRiscoModerado() {
    let nivel = "RISCO MODERADO";
    let mensagem = "Atenção: há condições que exigem acompanhamento. Fique atento aos comunicados da Defesa Civil.";

    document.getElementById("nivelRiscoAutoridade").innerText = nivel;
    document.getElementById("mensagemAlertaAutoridade").innerText = mensagem;

    document.getElementById("nivelRiscoAutoridade").setAttribute("class", "gerenciamento__nivel gerenciamento__nivel--moderado");
}

function selecionarRiscoAlto() {
    let nivel = "RISCO ALTO";
    let mensagem = "Atenção! Esta região apresenta risco elevado na simulação. Acompanhe as orientações oficiais da Defesa Civil.";

    document.getElementById("nivelRiscoAutoridade").innerText = nivel;
    document.getElementById("mensagemAlertaAutoridade").innerText = mensagem;

    document.getElementById("nivelRiscoAutoridade").setAttribute("class", "gerenciamento__nivel gerenciamento__nivel--alto");
}
