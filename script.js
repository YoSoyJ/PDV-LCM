const menu = document.querySelector('.categorias');
const menuBtn = document.querySelector('.menuBtn');


function mostrarMenu() {
    menu.classList.toggle('show'); // Añade o quita la clase 'show' al menú
}

document.addEventListener('click', function(e){ //se almacena el evento click en la variable "e"
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)){ //detecta el click fuera de la zona de los botones
        menu.classList.remove('show');
    }
});

function toggleCategories(category){
    switch (category){
        case 'Ini':
            menu.classList.remove('show')
        case 'Sob':
            menu.classList.remove('show')
        case 'Met':
            menu.classList.remove('show')
        case 'Pil':
            menu.classList.remove('show')
        case 'Cie':
            menu.classList.remove('show')
    }
}