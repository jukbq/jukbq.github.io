let note = document.querySelector('.note')
let err1 = document.querySelector('.err1')
let err2 = document.querySelector('.err2')
let add = document.querySelector('.add')
let close = document.querySelector('.close')
let list = document.querySelector('#list')

// додати замытку і очистити поле
add.addEventListener('click', function () {
    let li = document.createElement("LI")
    let note_value = note.value
    let div = document.createElement("div")
    let p = document.createElement("p")
    let img = document.createElement("img")

    div.classList.add("list_note")
    p.textContent = note_value
    img.setAttribute("src", "img/close.png")
    img.classList.add("del")

    div.appendChild(p)
    div.appendChild(img)
    li.appendChild(div)

    if (note_value !== "") {
        list.appendChild(li)
    } else {
        err1.classList.add("active")
    }
    note.value = ""
})

close.onclick = function () {
    err1.classList.remove("active")
}

err1.onclick = function () {
    err1.classList.remove("active")
}


//видалення запису зі списку
list.addEventListener('click', function (e) {
    const target = e.target
    console.log(target);

    if (target.nodeName === 'LI' || target.classList.contains('del')) {
        if (list.children.length > 1) {
            const li = target.closest('li')
            li.remove()
        } else {
            err2.classList.add("active")
        }
    }
    close.onclick = function () {
        err2.style.display = 'none'
    }
    err2.onclick = function () {
        err2.style.display = 'none'
    }



})