let form = document.querySelector('.forma');
let add = form.querySelector('.add');
let log = form.querySelector('.log');
let pass = form.querySelector('.pass');
let mail = form.querySelector('.mail');
let tab = document.querySelector('.tab');
let edd = document.querySelector('.edd');


/*------------------Первірка----------------------------*/
let regLogin = /^[a-zA-z]{4,16}$/;
let regPass = /^[a-zA-Z0-9_\-\.]{4,16}$/;
let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

/*           Логін   */

log.oninput = function () {
    let logInp = regLogin.test(this.value);
    if (logInp) {
        this.style.border = '1px solid green';
        this.style.boxShadow = '0 0 10px rgb(54, 102, 243)';
    } else {
        this.style.border = '1px solid red';
        this.style.boxShadow = '0 0 10px  rgb(243, 75, 75)';
    };

    log.onblur = function () {
        let logInp = regLogin.test(this.value);
        if (logInp) {
            this.style.boxShadow = 'none';
        };

    };
}

/*           Пароль               */
pass.oninput = function () {
    let passInp = regPass.test(this.value);
    if (passInp) {
        this.style.border = '1px solid green';
        this.style.boxShadow = '0 0 10px rgb(54, 102, 243)';
    } else {
        this.style.border = '1px solid red';
        this.style.boxShadow = '0 0 10px  rgb(243, 75, 75)';
    };
    pass.onblur = function () {
        let passInp = regPass.test(this.value);
        if (passInp) {
            {
                this.style.boxShadow = 'none';
            };
        };
    };
}
/*           Email               */
mail.oninput = function () {
    let mailInp = regEmail.test(this.value);
    if (mailInp) {
        this.style.border = '1px solid green';
        this.style.boxShadow = '0 0 10px rgb(54, 102, 243)';
    } else {
        this.style.border = '1px solid red';
        this.style.boxShadow = '0 0 10px  rgb(243, 75, 75)';
    };
    mail.onblur = function () {
        let mailInp = regEmail.test(this.value);
        if (mailInp) {
            {
                this.style.boxShadow = 'none';
            };
        };
    };
}

/*-----------------Колір кнопки--------------------------*/
add.addEventListener('mouseover', over);
add.addEventListener('mouseout', out);
edd.addEventListener('mouseover', over);
edd.addEventListener('mouseout', out);
function over() {
    this.style.backgroundColor = 'green';
    this.style.boxShadow = '0 0 7px rgba(93, 231, 93, 0.637)';
    this.style.color = 'rgb(229, 241, 229)';
};
function out() {
    this.style.backgroundColor = '';
    this.style.boxShadow = '';
    this.style.color = '';

};

/*-----------------Кнопка Add user---------------*/
form.addEventListener('submit', function (event) {
    event.preventDefault();

    let logInp = regLogin.test(log.value);
    let passInp = regPass.test(pass.value);
    let mailInp = regEmail.test(mail.value);
    if (logInp && passInp && mailInp) {
        addUser();
        render();
    } else {
        console.log('error');
    };
});

/*--------------------Відправка--------------------*/

let userData = [];

function addUser() {
    let dataObject = {
        log: `${log.value}`,
        pass: `${pass.value}`,
        mail: `${mail.value}`,
    }
    userData.push(dataObject);

    log.value = '';
    pass.value = '';
    mail.value = '';
};

/*--------------------Таблиця-----------------------*/
function render() {
    while (tab.rows.length > 1) {
        tab.deleteRow(1);
    }
    let arr = userData.length;
    for (i = 0; i < arr; i++) {
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        let tdId = document.createElement('td');
        let tdLog = document.createElement('td');
        let tdPass = document.createElement('td');
        let tdMail = document.createElement('td');
        let edit = document.createElement('td');
        let dell = document.createElement('td');
        let id = i;
        let log = userData[i].log;
        let pass = userData[i].pass;
        let mail = userData[i].mail;
        tdId.innerHTML = `${id += 1}`
        tdLog.innerHTML = `${log}`;
        tdPass.innerHTML = `${pass}`;
        tdMail.innerHTML = `${mail}`;
        edit.innerHTML = `<button class="edit" onclick="edit(${i})">Edit</button>`;
        dell.innerHTML = `<button class="dell" onclick="dell(${i})">Delete</button>`;
        tr.appendChild(tdId);
        tr.appendChild(tdLog);
        tr.appendChild(tdPass);
        tr.appendChild(tdMail);
        tr.appendChild(edit);
        tr.appendChild(dell);
        tab.appendChild(tr);
    };
};

/*--------------------Видалення--------------------*/

function dell(i) {
    userData.splice(i, 1);
    render();
    console.log(userData);
};

/*------------------Редагування--------------------*/
let userIndex = '';
function edit(i) {
    log.value = userData[i].log;
    pass.value = userData[i].pass;
    mail.value = userData[i].mail;
    userIndex = i;
    add.style.display = 'none';
    edd.style.display = 'block';
    console.log(userData);
};

edd.onclick = function () {
    userEdit = {
        log: `${log.value}`,
        pass: `${pass.value}`,
        mail: `${mail.value}`,
    }
    userData.splice(userIndex, 1, userEdit);
    log.value = '';
    pass.value = '';
    mail.value = '';
    render()
    edd.style.display = 'none';
    add.style.display = 'block';
};