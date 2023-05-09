
function Checker() {
    let name = document.getElementById("inputName").value;
    let phone = document.getElementById("inputNumber").value;
    let text = document.getElementById("inputText").value;

    if (name === "") {
        alert('Пожалуйста введите имя')
    }   

    if (phone.length >= 15 || phone.length === 0) {
        alert('Пожалуйста введите корректное значение телефона');
    }

    if (text.length <= 3) {
        alert('Пожалуйста введите больше текста');
    }  
}

