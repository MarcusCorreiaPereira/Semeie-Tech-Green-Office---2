/**
 * Alterna a visibilidade do menu de navegação em dispositivos móveis.
 */
function toggleMenu() {
    const menu = document.getElementById('navMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

/**
 * Controla a exibição das seções (sistema de abas dinâmicas).
 * @param {string} sectionId - O ID da seção que deve ser exibida.
 */
function showSection(sectionId) {
    // Seleciona todas as seções mapeadas dentro do elemento main
    const sections = document.querySelectorAll('main section');
    const selectedSection = document.getElementById(sectionId);
    const menu = document.getElementById('navMenu');

    // Se a seção solicitada não existir, interrompe a execução para evitar erros
    if (!selectedSection) return;

    // Remove a classe 'active' de todas as seções e aplica display 'none'
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });

    // Ativa a seção selecionada aplicando a classe e o display flex (definido no CSS)
    selectedSection.classList.add('active');
    selectedSection.style.display = 'flex';

    // Fecha o menu de navegação automaticamente em telas menores após o clique
    if (menu) {
        menu.classList.remove('active');
    }

    // Move o foco da página para o topo ao trocar de aba
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Alterna o estado de exibição de idioma em blocos de texto específicos.
 * @param {HTMLElement} button - O botão que disparou o evento.
 */
function toggleLanguage(button) {
    const textDiv = button.parentElement;
    if (!textDiv) return;

    const isShown = textDiv.getAttribute('data-lang-shown') === 'true';
    
    // Inverte o estado do atributo de controle
    textDiv.setAttribute('data-lang-shown', !isShown);

    // Exemplo visual alternativo: Comuta uma classe no container caso queira esconder/mostrar via CSS
    textDiv.classList.toggle('lang-en-active', !isShown);
}

// Inicializa o site exibindo a tela inicial assim que o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    showSection('homeSection');
});