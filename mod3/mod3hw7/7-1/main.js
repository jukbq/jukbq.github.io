let box = document.querySelector('.box');
let body = document.querySelector('body');
let cont = document.querySelectorAll('.block');
let colour = document.querySelector('.colour');
let pict = document.querySelector('.picture');

colour.addEventListener('click', function col() {
     for (let i = 0; i < cont.length; i++) {
        cont[0].style.background = 'red';
        cont[1].style.background = 'orange';
        cont[2].style.background = 'yellow';
        cont[3].style.background = 'green';
        cont[4].style.background = 'blue';
        cont[5].style.background = 'darkblue';
        cont[6].style.background = 'violet';
        cont[7].style.background = 'lime';
        cont[8].style.background = 'silver';
     };
    box.style.opacity = '1';
});

pict.addEventListener('click', function img() {
    
    for (let i = 0; i < cont.length; i++) {
        cont[0].style.background = 'url("img/1.jpg")';
        cont[0].style.backgroundSize = 'cover';;;
        cont[1].style.background = 'url("img/2.jpg")';
        cont[1].style.backgroundSize = 'cover';;;
        cont[2].style.background = 'url("img/3.jpg")';
        cont[2].style.backgroundSize = 'cover';;;
        cont[3].style.background = 'url("img/4.jpg")';
        cont[3].style.backgroundSize = 'cover';;;
        cont[4].style.background = 'url("img/5.jpg")';
        cont[4].style.backgroundSize = 'cover';;;
        cont[5].style.background = 'url("img/6.jpg")';
        cont[5].style.backgroundSize = 'cover';;;
        cont[6].style.background = 'url("img/7.jpg")';
        cont[6].style.backgroundSize = 'cover';;;
        cont[7].style.background = 'url("img/8.jpg")';
        cont[7].style.backgroundSize = 'cover';;
        cont[8].style.background = 'url("img/9.jpg")';
        cont[8].style.backgroundSize = 'cover';;
    }
    box.style.opacity = '1';
   
})




box.addEventListener('click', function fon() {
    if (event.target.className == 'block') {
        let style = event.target.style.background;
         body.style.background = `${style}`;
        
        
    };

});


