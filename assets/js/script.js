document.addEventListener("DOMContentLoaded", function() {
    const modalOverlay = document.getElementById("modalOverlay");
    const acceptButton = document.getElementById("acceptButton");

    // Verifica se o usuário já aceitou a política
    if (localStorage.getItem("privacyAccepted") !== "true") {
        // Se não aceitou, mostra o modal
        modalOverlay.classList.remove("hidden");
    }

    // Adiciona evento de clique ao botão para fechar o modal
    acceptButton.addEventListener("click", function() {
        // Esconde o modal
        modalOverlay.classList.add("hidden");
        // Salva a preferência do usuário no localStorage
        localStorage.setItem("privacyAccepted", "true");
    });
});

const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

// Carregar preferência do usuário ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
    }
});

// Alternar modo ao clicar no botão
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Salvar preferência
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
    } else {
        localStorage.setItem('mode', 'light');
    }
});