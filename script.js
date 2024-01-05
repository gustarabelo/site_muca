var menu = document.querySelector('.menu_display')

function clickMenu(){
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else{
        menu.style.display = 'block';
    }
}