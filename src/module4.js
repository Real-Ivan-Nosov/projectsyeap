// 1 exercise

let generateRandArrays = (count, n, m) => {
    let randArray = [];
    let range = Math.abs(m - n);
    let min = Math.min(n, m);
    for (i = 0; i < count; i++) {
        randArray.push(Math.round(Math.random() * range) + min)
    } 
    console.log(randArray);
}

// generateRandArrays(100, 0, 100);

// 2 exercise

let makeReverseString = (someString) => {
    let newString = someString.split('').reverse().join('');
    console.log(newString)
}

// makeReverseString("Привет, мир!");

// 3 exercise

let runTankRun = (road) => {
    let hp = 2;
    for (let i = 0; i < road.length; i++) {
        let position = i + 1;    
        if (road[i] === false) {
            console.log(`танк переместился на ${position}`);      
        } else if (hp === 2){
            console.log(`танк переместился на ${position}`); 
            console.log("Танк поврежден");
            hp--;
        } else if (hp === 1) {
            console.log(`танк переместился на ${position}`); 
            console.log("Танк уничтожен");
            break;
        }
    }
}

// runTankRun([true, false, false, false, false, false, false, false, false, true]);

// 4 exercise

let generateSchedule = (dayOfWeek) => {
    let Month = [];
    let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    for (let i = 0; i < 31; i++) {
        Month[i] = i + 1;
    }
    
}