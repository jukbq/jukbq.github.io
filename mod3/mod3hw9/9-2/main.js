let note = document.querySelector('.note')
let err1 = document.querySelector('.err1')
let err2 = document.querySelector('.err2')
let add = document.querySelector('.add')
let close = document.querySelector('.close')

add.addEventListener('click', function() {
    if (note.value == "") {
        err1.style.display = 'block'
    }
    close.onclick = function() {
        err1.style.display = 'none'
    }
    err1.onclick = function() {
        err1.style.display = 'none'
    }

})

add.addEventListener('click', function() {
    let li = document.createElement("LI")
    let a = note.value
    let t = document.createTextNode(a)
    if (note.value != "") {
        li.appendChild(t)
        document.getElementById('list').appendChild(li)

    }
    note.value = ""

})

let liDell = document.querySelector('ul')


liDell.addEventListener('click', function(e) {
    let x = liDell.children
    let y;

    for (let i = 1; i < x.length; i++) {
        y = [i]
        delete(i)




    }
    console.log(y)
    if (x.length == 1) {
        err2.style.display = 'block';
    }
    if (y >= 0) {
        y.slice(i, 1)
            //liDell.removeChild(liDell.childNodes[y])
            //console.log(y)
    }
    close.onclick = function() {
        err2.style.display = 'none'
    }
    err2.onclick = function() {
        err2.style.display = 'none'
    }



})