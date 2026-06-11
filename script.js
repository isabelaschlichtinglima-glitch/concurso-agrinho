let tamanhoAtual = 100;

function mudarFonte(modificador) {
    tamanhoAtual += modificador * 10;
    if (tamanhoAtual < 80) tamanhoAtual = 80;
    if (tamanhoAtual > 150) tamanhoAtual = 150;
    document.body.style.fontSize = tamanhoAtual + "%";
}

function verificarResposta(botao, ehCorreta) {
    const blocoOpcoes = botao.parentElement;
    const botoes = blocoOpcoes.getElementsByClassName("btn-opcao");
    
    for (let b of botoes) {
        b.disabled = true;
        b.style.cursor = "default";
    }
    
    if (ehCorreta) {
        botao.classList.add("correta");
    } else {
        botao.classList.add("errada");
        for (let b of botoes) {
            if (b.getAttribute("onclick").includes("true")) {
                b.classList.add("correta");
            }
        }
    }
}

let idiomaAtual = "PT";

function mudarIdioma() {
    const btn = document.getElementById("btn-idioma");
    
    if (idiomaAtual === "PT") {
        idiomaAtual = "EN";
        btn.innerText = "EN / PT";
        
        document.getElementById("titulo-principal").innerText = "Connecting Field and Future";
        document.getElementById("titulo-noticias").innerText = "Green Initiatives";
        
        document.querySelector(".txt-n1-titulo").innerText = "Solar Energy Grows on Farms";
        document.querySelector(".txt-n1-desc").innerText = "Farmers are installing solar panels to generate clean energy, reducing costs and the carbon footprint of production.";
        
        document.querySelector(".txt-n2-titulo").innerText = "The Boom of Organic Foods";
        document.querySelector(".txt-n2-desc").innerText = "The search for foods grown without artificial chemicals breaks records, valuing the health of soil and consumers.";
        
        document.querySelector(".txt-n3-titulo").innerText = "Protection of Springs in the Field";
        document.querySelector(".txt-n3-desc").innerText = "Reforestation projects around rivers and springs guarantee clean and abundant water for future generations of agriculture.";
        
        document.getElementById("tit-quiz").innerText = "Eco Challenge";
        document.getElementById("sub-quiz").innerText = "Find out if you are a friend of the field!";
        document.getElementById("p1-enun").innerText = "1. What is green manuring?";
        document.getElementById("p2-enun").innerText = "2. What is the correct destination for pesticide packaging?";
        
    } else {
        idiomaAtual = "PT";
        btn.innerText = "PT / EN";
        
        document.getElementById("titulo-principal").innerText = "Conectando Campo e Futuro";
        document.getElementById("titulo-noticias").innerText = "Iniciativas Verdes";
        
        document.querySelector(".txt-n1-titulo").innerText = "Energia Solar Cresce nas Fazendas";
        document.querySelector(".txt-n1-desc").innerText = "Produtores rurais estão instalando painéis solares para gerar energia limpa, reduzindo os custos e a pegada de carbono da produção.";
        
        document.querySelector(".txt-n2-titulo").innerText = "O Boom dos Alimentos Orgânicos";
        document.querySelector(".txt-n2-desc").innerText = "A busca por alimentos cultivados sem produtos químicos artificiais bate recordes, valorizando a saúde do solo e dos consumidores.";
        
        document.querySelector(".txt-n3-titulo").innerText = "Proteção de Nascentes no Campo";
        document.querySelector(".txt-n3-desc").innerText = "Projetos de reflorestamento ao redor de rios e nascentes garantem água limpa e farta para as futuras gerações da agricultura.";
        
        document.getElementById("tit-quiz").innerText = "Eco Desafio";
        document.getElementById("sub-quiz").innerText = "Teste seus conhecimentos antes de sair!";
        document.getElementById("p1-enun").innerText = "1. O que é adubação verde?";
        document.getElementById("p2-enun").innerText = "2. Qual o destino correto das embalagens de defensivos?";
    }
}
