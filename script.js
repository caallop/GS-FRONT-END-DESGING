//validando campos vazios
const emailInput = document.querySelector(".gmail");
const submitButton = document.querySelector("#submit");
const erroMensagem = document.querySelector("#erroEmail");

submitButton.addEventListener("click", (e)=>{
    e.preventDefault()

    const emailValue = emailInput.value.trim();

    if(emailValue === ""){
        erroMensagem.textContent = "Digite o email";
        return;
    }
})

//Array das perguntas
const perguntasQuiz = [
    {
        pergunta:"1-Qual é o principal objetivo da aplicação do projeto SOLARIA?",
        opcoes:[
            "a) Realizar o monitoramento orbital para prever tempestades solares e proteger infraestruturas críticas.", // índice 0
            "b) Gerar energia solar no espaço e transmiti-la para a Terra via micro-ondas.", // índice 1
            "c) Criar uma rede de internet satelital de baixa latência para áreas remotas.", // índice 2
            "d) Mapear asteroides próximos à Terra que possuam potencial de mineração." // índice 3
        ],
        correta: 0
    },
    {
        pergunta:"2-Onde a aplicação do SOLARIA atua diretamente para mitigar riscos de apagões?",
        opcoes:[
            "a) Na substituição de fiações elétricas antigas por cabos de fibra óptica.", // índice 0
            "b) No isolamento preventivo de subestações de energia e na proteção de sistemas de satélites.", // índice 1
            "c) No controle de consumo de energia de aparelhos domésticos inteligentes.", // índice 2
            "d) Na construção de muros de contenção contra radiação em usinas nucleares." //índice 3
        ],
        correta:1
    },
    {
        pergunta:"3-Qual é a característica da órbita do microssatélite utilizado na tecnologia SOLARIA?",
        opcoes:[
            "a) Ele orbita a Terra em uma altitude baixa para fotografar nuvens.",
            "b) Ele permanece estático em relação a um ponto fixo no Brasil.",
            "c) Ele orbita o Sol mantendo a mesma velocidade orbital que o planeta Terra.",
            "d) Ele viaja em uma órbita elíptica entre a Terra e a Lua."
        ],
        correta:2
    },
    {
        pergunta:"4- Quais são as principais variáveis coletadas pelo microssatélite no espaço?",
        opcoes:[
            "a) Velocidade do vento solar e pressão atmosférica orbital.",
            "b) Calor e ondas eletromagnéticas emitidas pelo Sol.",
            "c) Densidade de poeira cósmica e níveis de oxigênio espacial.",
            "d) Umidade relativa do espaço e variações de gravidade lunar."
        ],
        correta:1
    },
    {
        pergunta:"5- Qual é o público-alvo prioritário para os serviços de alerta do SOLARIA?",
        opcoes:[
            "a) Consumidores residenciais e pequenas empresas de varejo local.",
            "b) Empresas de energia, operadoras de telecomunicação, agências espaciais e defesa civil.",
            "c) Indústrias têxteis e fábricas de componentes automotivos tradicionais.",
            "d) Instituições de ensino fundamental e bibliotecas públicas."
        ],
        correta:1
    },
    {
        pergunta:"6- Como as informações de risco chegam aos usuários da aplicação?",
        opcoes:[
            "a) Por meio de transmissões via rádio AM/FM em canais abertos.",
            "b) Exclusivamente por cartas registradas enviadas via correio internacional." ,
            "c) Por meio de visitas técnicas mensais de engenheiros espaciais.",
            "d) Através do fornecimento de relatórios customizados e alertas automatizados."
        ],
        correta:3
    },
    {
        pergunta:"7- Quais profissionais são destacados como beneficiários diretos do projeto?",
        opcoes:[
            "a) Arquitetos, advogados e corretores de imóveis.",
            "b) Designers de moda, chefs de cozinha e jornalistas esportivos.",
            "c) Gerentes, agricultores e cientistas focados em mitigar prejuízos.",
            "d) Motoristas de aplicativo e operadores de caixa de supermercado."
        ],
        correta:2
    },
    {
        pergunta:"8- Quais danos o SOLARIA visa evitar para a aviação civil e redes elétricas?",
        opcoes:[
            "a) Prejuízos bilionários e apagões duradouros causados por eventos geomagnéticos.",
            "b) Erros de navegação causados por falta de sinal de internet Wi-Fi nos aviões.",
            "c) Desgaste mecânico das turbinas devido ao excesso de calor na atmosfera terrestre.",
            "d) Quedas de energia causadas por excesso de chuva e ventos sazonais na Terra."
        ],
        correta:0
    },
    {
        pergunta:"9. Em relação à sustentabilidade, qual a contribuição da aplicação?",
        opcoes:[
            "a) Reduzir o lixo espacial através da coleta de detritos com o microssatélite.",
            "b) Reforçar a resiliência climática planetária e a segurança de infraestruturas de energia limpa.",
            "c) Substituir o uso de baterias de lítio por energia captada diretamente do vácuo.",
            "d) Limpar a atmosfera terrestre de gases do efeito estufa usando lasers solares."
        ],
        correta:1
    
    },
    {
        pergunta:"Como a Defesa Civil utiliza os dados do SOLARIA em seus planos de contingência?",
        opcoes:[
            "a) Para prever enchentes e deslizamentos de terra em áreas urbanas.",
            "b) Para automatizar o resgate de pessoas em áreas de difícil acesso.",
            "c) Para monitorar a temperatura das praias e prevenir ataques de animais marinhos.",
            "d) Para elaborar planos de evacuação e emergência baseados em dados climáticos espaciais antecipados."
        ],
        correta:3
    }
];

//criando váriaveis para contagem
let perguntaAtualIndex = 0;
let pontuacao = 0;

// linka o html com js
const perguntaElemento = document.getElementById("pergunta-atual");
const opcoesContainer = document.getElementById("opcoes-container");
const btnProxima = document.getElementById("btn-proxima");
const resultadoFinal = document.getElementById("resultado-final");

function carregarPerguntas(){
    //cria a variavel questao e atribui o array a ela
    const questao = perguntasQuiz[perguntaAtualIndex];
    //entra no objeto da pergunta atual e pega apenas o texto que esta na chave pergunta 
    perguntaElemento.innerText = questao.pergunta;
    //limpa o qu estiver na div
    opcoesContainer.innerHTML = "";

    //percorrer a lista
    questao.opcoes.forEach((opcao,index) => {
        //criar botao de resposta
        const botao = document.createElement("button");
        //coloca altertnativa dentro do botão
        botao.innerText = opcao;
        //add classe ao botão
        botao.classList.add("btn-opcao")
        //quando clicar chamar função verificarResposta
        botao.onclick = () => verificarResposta(index);
        //coloca as opcoes dentro da div
        opcoesContainer.appendChild(botao);
    });
};

function verificarResposta(indexSelecionado){
    // guarda a alternativa correta
    const correta = perguntasQuiz[perguntaAtualIndex].correta;
    // seleciona todos os botões e guarda numa nodelist
    const botoes = document.querySelectorAll(".btn-opcao")

    //desabilita botões para evitar cliques duplos
    botoes.forEach(b=>b.disabled = true);

    //coloca cor verde para certo e vermelho para errado nas alternativas e pontuação
    if(indexSelecionado === correta){
        pontuacao++;
        botoes[indexSelecionado].style.backgroundColor = "#2a9d8f";
        botoes[indexSelecionado].style.borderColor = "#2a9d8f";
    }else{
        botoes[indexSelecionado].style.backgroundColor = "#e63946";
        botoes[indexSelecionado].style.borderColor = "#e63946";
        botoes[correta].style.backgroundColor = "#2a9d8f";
        botoes[correta].style.borderColor="#2a9d8f";

        // Garante que o texto continue branco e visível sobre o verde/vermelho
        botoes[indexSelecionado].style.color = '#ffffff';
        botoes[correta].style.color = '#ffffff';
    };
    //habilita o botão que no html estava desabilitado
    btnProxima.style.display = "block";
};

btnProxima.onclick = ()=>{
    perguntaAtualIndex++;
    if(perguntaAtualIndex < perguntasQuiz.length){
        carregarPerguntas();
        btnProxima.style.display = "none";
    }else{
        mostrarResultado();
    }
};

function mostrarResultado(){
    perguntaElemento.style.display = "none";
    opcoesContainer.style.display = "none";
    btnProxima.style.display = "none";
    resultadoFinal.innerHTML = `<h3>Fim do Quiz!</h3>
                              <p>Você acertou ${pontuacao} de ${perguntasQuiz.length} questões.</p>`;
};

carregarPerguntas();