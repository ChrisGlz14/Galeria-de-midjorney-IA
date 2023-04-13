const btnCierra = document.getElementById('btn-cierra');
const btnAdelanta = document.getElementById('btn-adelanta');
const btnRetrocede = document.getElementById('btn-retrocede');
const imagenes = document.querySelectorAll('#galeria img');
const lightbox = document.getElementById('overlay');
const imagenActiva = document.getElementById('img-activa');
let indiceImagen = 0



const abreLightbox = (e) => {
    imagenActiva.src = e.target.src;
    lightbox.style.display = "flex";
};

imagenes.forEach(imagen => {
imagen.addEventListener('click', abreLightbox);
});
// recorre imagen 
    Array.from(imagenes).forEach(imagen => {
    imagen.addEventListener('click', abreLightbox)});

// const imgActiva = document.getElementById('img-activa');

// imgActiva.addEventListener('click', abreLightbox);


// cierra lightbox

// Adelanta la imagen

// Retrocede la imagen 








// //contvert: <a> al inicio de pagina: desaparece cuando el home está en el campo visual
//     var bot = document.getElementById('irarriba');
//     //var tope = document.getElementById('home');
//     var tope = document.getElementsByTagName('main')[0];
//     if (window.pageYOffset > tope.offsetTop)
//         {
//         var offsetX = 0;
//         var offset = parseInt(window.getComputedStyle(bot).getPropertyValue('height'))+5;
//         if(document.getElementsByTagName('main')[0].offsetWidth>500) offsetX = 100
//         bot.style.top = document.documentElement.clientHeight-offset+"px";
//         bot.style.left = document.documentElement.clientWidth-offset-offsetX+"px";
//         bot.style.opacity = "1"; 
//         bot.style.visibility="visible";
//         }
//         else
//         {
//         bot.style.opacity = "0"; 
//         bot.style.visibility="hidden";
//         }
    