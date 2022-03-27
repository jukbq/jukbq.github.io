/*-----------------------  Дата та час ---------------------------*/
setInterval(() => {
    let d = new Date();
    let day = d.getDate();
    let mon = d.getMonth() + 1;
    let year = d.getFullYear();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();
    if (day < 10) day = '0' + day;
    if (mon < 10) mon = '0' + mon;
    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss
    document.querySelector('.data').innerHTML = `${day}:${mon}:${year}`;
    document.querySelector('.time').innerHTML = `${hh}:${mm}:${ss}`;

})

/*-----------------------------Сикундомір---------------------------*/
let start = document.querySelector('.start');
let loop = document.querySelector('.loop');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');
let text = document.querySelector('.textzone')
let st;
let sw;

start.onclick = function () {
    let thisTime = new Date();
    st = setInterval(() => {
        let newTime = new Date() - thisTime;
        let ms = Math.abs(Math.floor(newTime * 1000) % 999);
        let ss = Math.abs(Math.floor(newTime / 1000) % 60);
        let mm = Math.abs(Math.floor(newTime / 1000 / 60) % 60);
        let hh = Math.abs(Math.floor(newTime / 1000 / 60 / 60) % 24);
        if (ms.toString().length == 1) ms = '00' + ms;
        if (ss.toString().length == 1) ss = '0' + ss;
        if (mm.toString().length == 1) mm = '0' + mm;
        if (hh.toString().length == 1) hh = '0' + hh;
        sw = document.querySelector('.sw').innerHTML = `${hh}:${mm}:${ss}:${ms}`
    })
    document.querySelector('.start').disabled = true;
    document.querySelector('.stop').disabled = false;
}

loop.onclick = function () {
    let p = document.createElement('p')
    text.appendChild(p)
    p.innerHTML = `${sw}`
}

stop.onclick = function () {
   
    clearInterval(st)
    document.querySelector('.start').disabled = false;
    document.querySelector('.stop').disabled = true;
}

reset.onclick = function () {
    text.textContent = ''
     ms = '000'
    ss = '00'
    mm = '00'
    hh = '00'
    document.querySelector('.sw').innerHTML = `${hh}:${mm}:${ss}:${ms}`
}

/*----------------------Таймер ---------------------------------*/

let minut = document.querySelector('.minut')
let min = document.querySelector('.minus')
let plu = document.querySelector('.plus')
let startM = document.querySelector(`.startM`)
let stopM = document.querySelector(`.stopM`)
let resetM = document.querySelector(`.resetM`)
let tm = document.querySelector('.tm')
let x = minut.textContent
let y = `00`

min.onclick = function () {
    x -= 1
    if (x < 10) x = '0' + x;
    minut.innerHTML = x
}
plu.onclick = function () {
    x++
    if (x < 10) x = '0' + x;
    minut.innerHTML = x
}
let timer;
startM.onclick = function () {
    tm.textContent = `${x}:${y}`;
    let time = tm.textContent;
    timer = setInterval(() => {
        if (y == 00) {
            x -= 1;
            y = 59;
            if (x < 10) x = '0' + x;
            if (y < 10) y = '0' + y;
        }
        y -= 1;
        tm.textContent = `${x}:${y}`;
   }, 1000)
   document.querySelector('.startM').disabled = true;
    document.querySelector('.stopM').disabled = false;
}

stopM.onclick = function(){
    document.querySelector('.startM').disabled = false;
    document.querySelector('.stopM').disabled = true;
    clearInterval(timer)
}
resetM.onclick = function () {
    tm.textContent = '00:00'
    clearInterval(timer)
    document.querySelector('.startM').disabled = false;
    document.querySelector('.stopM').disabled = true;
    
}