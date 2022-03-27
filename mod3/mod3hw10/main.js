const getS = selector => document.querySelector(selector)

/*---------Редагування тексту------------*/
getS('.btnEdit').onclick = function () {
    getS('.editBlock').classList.add('show')
    getS('.styleBlock').classList.remove('show')
    getS('.editArea').value = getS('.topBlock').innerHTML
}
getS('.batSv').onclick = function () {
    getS('.editBlock').classList.remove('show')
    getS('.topBlock').innerHTML = getS('.editArea').value
}
/*-------------------------------------*/
/*-----------------------------Надання силю--------------------------*/
/*---------Розмір шрифта------------*/
getS('.batSty').onclick = function () {
    getS('.styleBlock').classList.add('show')
    getS('.editBlock').classList.remove('show')


}
getS('.fSize').onclick = function (e) {
    getS('.topBlock').style.fontSize = event.target.value
    getS('.cont2').style.height = '100%'
}
/*---------Вибір стиля шрифта------------*/
getS('.ff').onchange = function (e) {
    getS('.topBlock').style.fontFamily = this.value
    if (this.value != "") {
        getS('.ff1').setAttribute("disabled", "true");
    }

}

let color = ['red', 'orange', 'yellow', 'green', 'blue', 'darkblue', 'violet', 'white', 'black']
/*---------Надаття кольору шрифту------------*/
getS('.txtCol').onclick = function () {
    getS('.colorBox').classList.add('show')
    for (let i = 0; i < getS('.colorBox').children.length; i++) {
        getS('.colorBox').children[i].style.backgroundColor = color[i]
        getS('.colorBox').children[i].onclick = function () {
            getS('.topBlock').style.color = this.style.backgroundColor
        }
    }
}
/*---------Надаття кольору фону------------*/
getS('.bcgCol').onclick = function () {
    getS('.colorBox').classList.add('show')
    for (let i = 0; i < getS('.colorBox').children.length; i++) {
        getS('.colorBox').children[i].style.backgroundColor = color[i]
        getS('.colorBox').children[i].onclick = function () {
            getS('.topBlock').style.background = this.style.backgroundColor
        }
    }
}

/*---------вибір жирності та курсиву------------*/

getS('.fBold').onclick = function () {
    if (event.target.checked) {
        getS('.topBlock').style.fontWeight = 'bold';
    } else
        getS('.topBlock').style.fontWeight = 'normal';
}
getS('.fItalic').onclick = function () {
    if (event.target.checked) {
        getS('.topBlock').style.fontStyle = 'italic';
    } else
        getS('.topBlock').style.fontStyle = 'normal';
}

/*-------------------Нопий блок-----------------------------*/
getS('.batAdd').onclick = function () {
    getS('.container').style.display = 'none'
    getS('.container2').style.display = 'block'
}
/*-------------------------------------------------------------*/
/*---------------------Таьлиця----------------------------------*/
getS('.tab').onclick = function () {
    getS('.cteatTable').classList.add('show')
    getS('.cont2').style.height = '100%'
    getS('.creatList').classList.remove('show')
}
const tabl = document.forms['tabl']
getS('.crtTable').onclick = function () {
    let ctr = tabl.countTr.value
    let ctd = tabl.countTd.value
    let wTd = tabl.widthTd.value
    let hTd = tabl.heightTd.value
    let wBr = tabl.widthBr.value
    let tb = tabl.typBorder.value
    let cb = tabl.colorBord.value

    getS('.editArea').value += `<table style=" border-collapse: collapse"  >`
    for (let i = 0; i < ctr; i++) {
        getS('.editArea').value += `<tr>`
        for (let j = 0; j < ctd; j++) {
            getS('.editArea').value += `<td style="border: ${wBr}px ${tb} ${cb}" width= ${wTd}px; height= ${hTd}px;>TD</td>`
        }
        getS('.editArea').value += `</tr>`
    }
    getS('.editArea').value += `</table>`


    getS('.topBlock').style.height = '100%'
    getS('.container').style.display = 'block'
    getS('.container2').style.display = 'none'
}


/*---------------------Список----------------------------------*/
getS('.list').onclick = function () {
    getS('.creatList').classList.add('show')
    getS('.cteatTable').classList.remove('show')

}

const list = document.forms['list']

getS('.crtList').onclick = function () {
    let li = list.countLi.value
    let liSt = list.listStyle.value
    console.log(li)
    getS('.editArea').value += `<ul style="list-style-type: ${liSt}">`
    for (let i = 0; i < li; i++) {
        getS('.editArea').value += `<li>Item ${i + 1}</li>`
    }
    getS('.editArea').value += `</ul>`
    if (getS('.editArea') != "") {
        getS('.topBlock').style.height = '100%'
    }

    getS('.container').style.display = 'block'
    getS('.container2').style.display = 'none'
}

