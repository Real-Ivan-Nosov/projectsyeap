// 1 exercise

let checkPassword = (password) => {
    if (password.length >= 4 && (password.includes('-') || password.includes('_'))) {
        console.log("Пароль надежный");
    } else {
        console.log("Пароль ненадежный");
    }
}


// checkPassword("_-3");

// 2 exercise

let fixNames = (firstName, secondName) => {
    let fixedFirstName = firstName.substr(0, 1).toUpperCase() + firstName.substr(1).toLowerCase();
    let fixedSecondName = secondName.substr(0, 1).toUpperCase() + secondName.substr(1).toLowerCase();
    console.log(fixedFirstName, fixedSecondName);
    console.log((fixedFirstName === firstName) && (fixedSecondName === secondName) ? "Имя осталось без изменений" : "Имя было преобразовано")
}

fixNames('Loa', 'Eounuy');