let CapsLockOn = false;

window.addEventListener('keydown', function (event) {
    let push = event.code;

    let key = document.getElementsByTagName('li');
    let alt = event.altKey;
    if (alt) {
        event.preventDefault();
    }
    if (push === 'CapsLock') {
        CapsLockOn = !CapsLockOn;
        console.log(CapsLockOn);
    }

    for (const i of key) {
        if (i.className === push) {
            i.style.backgroundColor = '#411111';
            i.style.boxShadow = 'none';
        }
    }
    if (push === "Tab") {
        event.preventDefault();
    }
});

window.addEventListener('keyup', function (event) {
    let push = event.code;
    let key = document.getElementsByTagName('li');
    for (const i of key) {
        if (i.className === push && push !== 'CapsLock') {
            i.style.backgroundColor = 'rgb(190, 12, 12)';
            i.style.boxShadow = '2px 2px 3px  rgb(187, 16, 16)';
        }
        if (push === 'CapsLock' && !CapsLockOn) {
            i.style.backgroundColor = 'rgb(190, 12, 12)';
            i.style.boxShadow = '2px 2px 3px  rgb(187, 16, 16)'
        }
    }
});
