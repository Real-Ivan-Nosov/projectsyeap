// 1 exercise

let findRectangleSquare = (x1, y1, x2, y2) => {
    let xCathetus = Math.abs(x1 - x2);
    let yCathetus = Math.abs(y1 - y2);
    let square = xCathetus * yCathetus;
    console.log(square);
};

// findRectangleSquare(8, 1, 5, 1);

// 2 exercise

let remainderCompare = (a, b, n) => {
    let aRemainder = Math.floor(a % 1 * Math.pow(10, n));
    let bRemainder = Math.floor(b % 1 * Math.pow(10, n));

    console.log(aRemainder, bRemainder);
    console.log(aRemainder > bRemainder, aRemainder < bRemainder,
                aRemainder >= bRemainder, aRemainder <= bRemainder,
                aRemainder === bRemainder, aRemainder !== bRemainder)
}

// remainderCompare(13.123456789, 2.123, 5);

// 3 exercise

let generateOddNumbers = (n, m) => {
    let range = Math.abs(m - n);
    let min = Math.min(n, m);
    let randomNumber;
    
    do {
        randomNumber = Math.round(Math.random() * range); // from 0 to range
    }
    while (randomNumber % 2 === 0)
    
    if (min < 0) {
        console.log(randomNumber - 1 + min);
    } else {
        console.log(min + randomNumber);
    }
}

generateOddNumbers(0, 100);