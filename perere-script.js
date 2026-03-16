/**
 * Sistema de Rotação de Texturas e Fontes
 * Alterna entre 5 texturas e estilos de fonte a cada 2 segundos
 * As texturas são aplicadas ao elemento #textura-fixa (background fixo)
 * Os estilos de fonte são aplicados aos elementos h1
 */

document.addEventListener('DOMContentLoaded', function() {

    // Lista de classes de textura disponíveis
    const TEXTURAS = ['textura1', 'textura2', 'textura3', 'textura4', 'textura5'];
    
    // Lista de classes de fonte correspondentes para h1
    const FONTES = ['fonte1', 'fonte2', 'fonte3', 'fonte4', 'fonte5'];
    
    // Intervalo de mudança de textura em milissegundos
    const INTERVALO_ROTACAO = 1000;
    
    // Elemento que contém o background fixo
    const texturaFixa = document.getElementById('textura-fixa');
    
    // Todos os elementos h1 da página
    const todosH1 = document.querySelectorAll('h1');
    
    // Índice da textura atual
    let indiceTexturaAtual = 0;

    /**
     * Inicializa com a primeira textura e fonte
     */
    function inicializarTextura() {
        texturaFixa.classList.add(TEXTURAS[indiceTexturaAtual]);
        aplicarFonte(0, indiceTexturaAtual);
    }

    /**
     * Aplica a classe de fonte aos h1 (otimizado)
     * @param {number} indiceAnterior - Índice da fonte anterior
     * @param {number} indiceNovo - Índice da nova fonte
     */
    function aplicarFonte(indiceAnterior, indiceNovo) {
        const fontAnterior = FONTES[indiceAnterior];
        const fontNova = FONTES[indiceNovo];
        
        // Remove a fonte anterior e adiciona a nova
        todosH1.forEach(h1 => {
            h1.classList.remove(fontAnterior);
            h1.classList.add(fontNova);
        });
    }

    /**
     * Rotaciona para a próxima textura e fonte
     */
    function rotacionarTextura() {
        const indiceAnterior = indiceTexturaAtual;
        
        // Remove textura atual
        texturaFixa.classList.remove(TEXTURAS[indiceTexturaAtual]);
        
        // Avança para próxima textura (volta ao início se necessário)
        indiceTexturaAtual = (indiceTexturaAtual + 1) % TEXTURAS.length;
        
        // Adiciona nova textura
        texturaFixa.classList.add(TEXTURAS[indiceTexturaAtual]);
        
        // Aplica nova fonte
        aplicarFonte(indiceAnterior, indiceTexturaAtual);
    }

    // Inicializa com primeira textura e fonte
    inicializarTextura();

    // Configura rotação automática a cada INTERVALO_ROTACAO
    setInterval(rotacionarTextura, INTERVALO_ROTACAO);
});

document.querySelectorAll(".galeria-secao").forEach(secao => {

    const imagens = secao.querySelectorAll(".gallery-item");
    const prev = secao.querySelector(".prev");
    const next = secao.querySelector(".next");

    let index = 0;

    function mostrarImagem(i){
        imagens.forEach(img => img.classList.remove("active"));
        imagens[i].classList.add("active");
    }

    mostrarImagem(index);

    next.addEventListener("click", () => {
        index++;
        if(index >= imagens.length) index = 0;
        mostrarImagem(index);
    });

    prev.addEventListener("click", () => {
        index--;
        if(index < 0) index = imagens.length - 1;
        mostrarImagem(index);
    });

});
