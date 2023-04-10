let cont = document.forms.move;
let ph = document.forms.ph.textPh;

cont.butt.addEventListener('click', function () {
    let leftText = cont.leftText.value;
    if (leftText != "") {
        cont.rightText.value = `${leftText}`;
    }
    cont.leftText.value = '';
});

ph.addEventListener('focus', function () {
    let text = ph.value;
    ph.placeholder = `${text}`;
});

ph.addEventListener('blur', function () {
    let text = ph.value;
    ph.placeholder = `${text}`;
    ph.value = '';
});
