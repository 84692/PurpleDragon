// script.js

let isNavBarExpanded = false;

function toggleNavBar() {
    const navBar = document.querySelector('.nav-bar');
    isNavBarExpanded = !isNavBarExpanded;

    const icon = document.querySelector('.icon');
    const iconExpandDuration = 0.3;

    navBar.classList.toggle('active', isNavBarExpanded);

    if (isNavBarExpanded) {
        icon.style.animation = `iconExpand ${iconExpandDuration}s forwards, iconMoveToCorner ${iconExpandDuration}s ${iconExpandDuration}s forwards`;
    } else {
        icon.style.animation = `iconMinimize ${iconExpandDuration}s forwards`;
    }
}

document.querySelector('.menu-icon').addEventListener('click', toggleNavBar);
document.querySelector('.icon').addEventListener('click', toggleNavBar);

function atualizarDataHora() {
    const elementoDataHora = document.getElementById('date-time');
    const agora = new Date();

    const options = { year: '2-digit', month: '2-digit', day: '2-digit', hour: 'numeric', minute: 'numeric', hour12: false };
    const formatoDataHora = new Intl.DateTimeFormat('pt-BR', options);

    const dataHoraFormatada = formatoDataHora.format(agora);
    elementoDataHora.textContent = dataHoraFormatada;
}

// Inicializar a exibição do horário e da data
atualizarDataHora();

// Atualizar a cada minuto
setInterval(atualizarDataHora, 60000);

// Outras funções e scripts...
