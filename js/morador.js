function selecionarAbrigoA() {
    let mensagem = "Abrigo A — Ponto de apoio demonstrativo. Rota A selecionada.";

    document.getElementById("infoAbrigo").innerText = mensagem;

    document.getElementById("imagemMapa").setAttribute("src", "img/mapa-abrigo-a.png");
    document.getElementById("imagemMapa").setAttribute("alt", "Mapa demonstrativo com rota para o Abrigo A em Juiz de Fora");

    document.getElementById("botaoAbrigoA").setAttribute("class", "abrigos__botao abrigos__botao--selecionado");
    document.getElementById("botaoAbrigoB").setAttribute("class", "abrigos__botao");
}

function selecionarAbrigoB() {
    let mensagem = "Abrigo B — Ponto de apoio demonstrativo. Rota B selecionada.";

    document.getElementById("infoAbrigo").innerText = mensagem;

    document.getElementById("imagemMapa").setAttribute("src", "img/mapa-abrigo-b.png");
    document.getElementById("imagemMapa").setAttribute("alt", "Mapa demonstrativo com rota para o Abrigo B em Juiz de Fora");

    document.getElementById("botaoAbrigoA").setAttribute("class", "abrigos__botao");
    document.getElementById("botaoAbrigoB").setAttribute("class", "abrigos__botao abrigos__botao--selecionado");
}
