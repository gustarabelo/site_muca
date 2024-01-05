let menu = document.querySelector('.menu_display')


function openMenu(){
    if(menu.style.display == none){
        menu.style.display = block;
    }else if(menu.style.display == block){
        menu.style.display = none
    }
}