var menu = document.getElementById('menu'),
menu_logo = document.getElementById('menu_logo'),
active = false;

menu_logo.addEventListener('click', event => {
    if (!active){
        menu.style.display = 'block';
        active = true;
    }
    else{
        menu.style.display = 'none';
        active = false;
    }
});