// Objeto que mapeia rotas para o conteúdo HTML
const rotas = {
    '#home': '<h1>Página Inicial</h1><p>Bem-vindo à página inicial!</p>',
    '#projetos': '<h1>Sobre Nós</h1><p>Conheça mais sobre nossa empresa.</p>',
    '#contato': '<h1>Entre em Contato</h1><p>Envie-nos uma mensagem.</p>'
};

// Seleciona o elemento principal onde o conteúdo será renderizado
const app = document.getElementById('app');

// Função para renderizar a página com base na rota (hash)
function renderizarPagina(rota) {
    // Se a rota existir no objeto, injeta o HTML correspondente
    if (rotas[rota]) {
        app.innerHTML = rotas[rota];
    } else {
        // Caso contrário, exibe uma página de erro
        app.innerHTML = '<h1>404 - Página não encontrada</h1>';
    }
}

// Escuta por mudanças na URL (hash)
window.addEventListener('hashchange', () => {
    const rota = window.location.hash || '#home'; // Se não houver hash, vai para a home
    renderizarPagina(rota);
});

// Renderiza a página inicial na primeira carga
window.addEventListener('DOMContentLoaded', () => {
    const rotaInicial = window.location.hash || '#home';
    renderizarPagina(rotaInicial);
});

