
// variant with Math.round, were the chance of getting utmost numbers is half as much as the rest

let whatsChanceByRound = (iterations, size) => {
    let TableOfCoincidences = new Array(size + 1);
        for (let j=0; j<TableOfCoincidences.length; j++) {
            TableOfCoincidences[j] = 0;
    }
        for (let i=0; i<iterations; i++) {
            let Random = Math.round(Math.random() * size);
            TableOfCoincidences[Random]++;
    }
    console.log(TableOfCoincidences);
}

whatsChanceByRound(1000, 10);

// variant with Math.floor, were the chances of getting all numbers are equal

let whatsChanceByFloor = (iterations, size) => {
    let TableOfCoincidences = new Array(size);
        for (let j=0; j<TableOfCoincidences.length; j++) {
            TableOfCoincidences[j] = 0;
    }
        for (let i=0; i<iterations; i++) {
            let Random = Math.floor(Math.random() * size);
            TableOfCoincidences[Random]++;
    }
    console.log(TableOfCoincidences);
}

whatsChanceByFloor(1000, 10);