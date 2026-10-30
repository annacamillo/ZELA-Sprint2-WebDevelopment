// Funções no Dashboard do Morador.

// Atualiza as informações quando o morador seleciona o Abrigo A.
function selecionarAbrigoA() {
    // Guarda o texto que será mostrado abaixo dos botões.
    let mensagem = "Abrigo A — Ponto de apoio demonstrativo. Rota A selecionada.";
    
    // Mostra a mensagem do abrigo selecionado na página.
    document.getElementById("infoAbrigo").innerText = mensagem;

    // Troca a imagem do mapa pela rota demonstrativa do Abrigo A e atualiza sua descrição.
    document.getElementById("imagemMapa").setAttribute("src", "img/mapa-abrigo-a.png");
    document.getElementById("imagemMapa").setAttribute("alt", "Mapa demonstrativo com rota para o Abrigo A em Juiz de Fora");
    
    // Destaca o botão do Abrigo A e retira o destaque do Abrigo B.
    document.getElementById("botaoAbrigoA").setAttribute("class", "abrigos__botao abrigos__botao--selecionado");
    document.getElementById("botaoAbrigoB").setAttribute("class", "abrigos__botao");
}

// Atualiza as informações quando o morador seleciona o Abrigo B.
function selecionarAbrigoB() {
    // Guarda o texto que será mostrado abaixo dos botões.
    let mensagem = "Abrigo B — Ponto de apoio demonstrativo. Rota B selecionada.";

    // Mostra a mensagem do abrigo selecionado na página.
    document.getElementById("infoAbrigo").innerText = mensagem;

    // Troca a imagem do mapa pela rota demonstrativa do Abrigo B e atualiza sua descrição.
    document.getElementById("imagemMapa").setAttribute("src", "img/mapa-abrigo-b.png");
    document.getElementById("imagemMapa").setAttribute("alt", "Mapa demonstrativo com rota para o Abrigo B em Juiz de Fora");

    // Destaca o botão do Abrigo B e retira o destaque do Abrigo A.
    document.getElementById("botaoAbrigoA").setAttribute("class", "abrigos__botao");
    document.getElementById("botaoAbrigoB").setAttribute("class", "abrigos__botao abrigos__botao--selecionado");
}
