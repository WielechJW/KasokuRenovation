const menu = document.querySelector('#menu');
const menuMobile = document.querySelector('#menu-mobile');
const show = (elem) =>{
    return function() {
        elem.classList.add('flex');
        elem.classList.remove('hidden');
    }
}

const hide = (elem) =>{
    return function() {
        elem.classList.add('hidden');
        elem.classList.remove('flex');
    }
}

const openMenu = () => {
    if(menu.classList.contains('hidden')){
        show(menu) ();
    } else {
        hide(menu) ();
    }
}
document.querySelector('#toggle-mobile').addEventListener('click', show(menuMobile));
document.querySelector('#hide-menu').addEventListener('click', hide(menuMobile));
document.querySelector('#toggle').addEventListener('click', openMenu);
document.addEventListener('click', (event) => {
    if (event.target.parentNode.id !== 'toggle') {
        hide(menu)();
    }
});


