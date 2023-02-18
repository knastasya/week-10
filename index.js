// Exercise 1

function showMessage() {
    console.log("Я учу JavaScript!");
}

showMessage();

// Exercise 2

let galery = document.getElementById('image');

function getPictureOne() {
    image.src = './assets/flowers1.jpg';
}

function getPictureTwo() {
    image.src = './assets/flowers2.jpg';
}

// Exercise 3 ***

function getTypeOfYear(year = prompt('Введите год:')) {
    let message = '';
    let step1 = year % 4;
    let step2 = year % 100;
    let step3 = year % 400;
    if (step1 <=0) {
        if (step2 <=0) {
            if (step3 <=0) {
                message = 'Год является високосным (366 дней).'
            }
            else {
                message = 'Год не високосный (у него 365 дней).'
            }
        }
        else {
            message = 'Год является високосным (366 дней).'
        }
    }
    else {
        message = 'Год не високосный (у него 365 дней).'
    }
    return `${year} — ${message}` 
}

alert(getTypeOfYear());

//а также выведем результат в консоль
console.log(getTypeOfYear(2023));


