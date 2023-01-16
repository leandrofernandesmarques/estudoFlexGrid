const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menuLateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menuLateral--ativo')
})