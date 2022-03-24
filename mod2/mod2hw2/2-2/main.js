let name = prompt("Введіть Юрій");

if (name === "Юрій") {
    let pass = prompt("Доброго дня. Введіть будьласка пароль");
    if (pass == "ЛОГОС") {
        alert("Ласкаво просимо");
    } else if (pass == null) {
        alert("Вхід скасований");
    } else {
        alert("Пароль невірний");
    }
} else if (name == null) {
    alert("Вхід скасований");
} else {
    alert("Я вас не знаю");
}