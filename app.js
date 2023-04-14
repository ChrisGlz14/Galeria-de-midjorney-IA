const btnCierra = document.getElementById('btn-cierra');
const btnAdelanta = document.getElementById('btn-adelanta');
const btnRetrocede = document.getElementById('btn-retrocede');
const imagenes = document.querySelectorAll('#galeria img');
// const contenedorImagenes = document.querySelector('#galeria')
const lightbox = document.getElementById('overlay');
const imagenActiva = document.getElementById('img-activa');
//indice de imagenes
let indiceImagen = 0
//touch para galeria 
// let startTouchX = 0;
// let endTouchX = 0;


// Abre lightbox
const abreLightbox = (e) => {
    imagenActiva.src = e.target.src;
    lightbox.style.display = "flex";
};


// recorre imagen 
imagenes.forEach(imagen => {
imagen.addEventListener('click', abreLightbox);
});

indiceImagen = Array.from(imagenes).indexOf(EventTarget);


// cierra lightbox
    btnCierra.addEventListener('click', ()=>{
    lightbox.style.display = "none" });

    btnAdelanta.addEventListener('click',()=>{
        indiceImagen (+i)
    })


// Adelanta la imagen
const adelantaImagen = ()=> {
    if (indiceImagen === imagenes.length -1) {
        indiceImagen = -1
    }
    imagenActiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;
};

btnAdelanta.addEventListener('click', adelantaImagen);

// Retrocede la imagen 
const retrocedeImagen = () => {
    if (indiceImagen === 0) {
        indiceImagen = imagenes.length
    }

    imagenActiva.src = imagenes[indiceImagen - 1].src;
    indiceImagen--;
};

btnRetrocede.addEventListener('click', retrocedeImagen);


//touch 

// imagenes.addEventListener('touchstart', e => {
//     startTouchX = e.changedTouches[0].screenX;
//   });
  
//   imagenes.addEventListener('touchend', e => {
//     endTouchX = e.changedTouches[0].screenX;
//     if (startTouchX > endTouchX) {
//       adelantaImagen();
//     } else if (startTouchX < endTouchX) {
//       retrocedeImagen();
//     }
//   });





// convert: <a> al inicio de pagina: desaparece cuando el home está en el campo visual

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
    