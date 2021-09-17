
let whatsCount = (iterations, size) => {
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

whatsCount(100000, 10000);