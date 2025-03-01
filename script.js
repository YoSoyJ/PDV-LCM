const menu = document.querySelector('.categorias');
const menuBtn = document.querySelector('.menuBtn');
const Ini = document.querySelector('.portada');
Ini.classList.add('show');
const Sob = document.querySelector('.sobreMi');


function mostrarMenu() {
    menu.classList.toggle('show'); // Añade o quita la clase 'show' al menú
}

document.addEventListener('click', function(e){ //se almacena el evento click en la variable "e"
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)){ //detecta el click fuera de la zona de los botones
        menu.classList.remove('show');
    }
});

function toggleCategories(category){
    if(category === 'Ini'){
        Ini.classList.add('show');
        Sob.classList.remove('show');
        menu.classList.remove('show');
    }if(category == 'Sob'){
        Ini.classList.remove('show');
        Sob.classList.add('show');
        menu.classList.remove('show');
    }
}
