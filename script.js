<<<<<<< HEAD
// Seleciona os elementos do modal e do botão de fechar
const modal = document.querySelector('.email-modal');
const closeModal = document.querySelector('.close');

// Verifica se os elementos existem antes de adicionar event listeners
if (modal && closeModal) {
    // Função para abrir o modal
    function openModal() {
        modal.style.display = 'flex'; // Exibe o modal
        document.body.classList.add('modal-open'); // Impede a rolagem
    }

    // Função para fechar o modal
    function closeModalHandler() {
        modal.style.display = 'none'; // Esconde o modal
        document.body.classList.remove('modal-open'); // Libera a rolagem
    }

    // Fecha o modal ao clicar no botão de fechar
    closeModal.addEventListener('click', closeModalHandler);

    // Fecha o modal ao clicar fora da área do conteúdo
    modal.addEventListener('click', (event) => {
        if (event.target === modal) { // Verifica se o clique foi fora do conteúdo
            closeModalHandler();
        }
    });

    // Fecha o modal ao pressionar a tecla "Esc"
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            closeModalHandler();
        }
    });
} else {
    console.error('Modal ou botão de fechar não encontrado!');
}

function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active');
}
=======
// Seleciona os elementos do modal e do botão de fechar
const modal = document.querySelector('.email-modal');
const closeModal = document.querySelector('.close');

// Verifica se os elementos existem antes de adicionar event listeners
if (modal && closeModal) {
    // Função para abrir o modal
    function openModal() {
        modal.style.display = 'flex'; // Exibe o modal
        document.body.classList.add('modal-open'); // Impede a rolagem
    }

    // Função para fechar o modal
    function closeModalHandler() {
        modal.style.display = 'none'; // Esconde o modal
        document.body.classList.remove('modal-open'); // Libera a rolagem
    }

    // Fecha o modal ao clicar no botão de fechar
    closeModal.addEventListener('click', closeModalHandler);

    // Fecha o modal ao clicar fora da área do conteúdo
    modal.addEventListener('click', (event) => {
        if (event.target === modal) { // Verifica se o clique foi fora do conteúdo
            closeModalHandler();
        }
    });

    // Fecha o modal ao pressionar a tecla "Esc"
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            closeModalHandler();
        }
    });
} else {
    console.error('Modal ou botão de fechar não encontrado!');
}

function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active');
}
>>>>>>> b00b7541d0d68b8ec0cf4298d7513243e424b917
