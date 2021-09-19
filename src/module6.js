// 1 exercise

let filteredArray = (arr, key, value) => {
    let result = arr.filter(item => item[key] === value);
    console.log(result);
}

// filteredArray([{name: 'Alex', surname: 'Lol'}, {name: 'John', surname: 'Kok'}, {name: 'Alex', surname: 'Fake'}], 'name', 'Alex');

// 2 exercise

let makeSelect = (items, valueSelected = 0) => {
    let rightItems = normalizeItems(items);
    let checkedValue = rightItems.filter(rightItems => rightItems.value === valueSelected);
    if (checkedValue.length === 0) {
        checkedValue = rightItems[0];
    } else {checkedValue = Object.assign(...checkedValue)};
    let select = document.createElement('select');
    for (let rightItem of rightItems) {
        let option = document.createElement('option');
        option.value = rightItem.value;
        if (rightItem.value === checkedValue.value) {
            option.selected = true;
        };
        option.innerHTML = rightItem.label;
        select.append(option);
    };
    document.body.append(select);
    console.log(select);
}

// makeSelect([{value: 3, label: "kikiki"}, {value: 1, label: "hihihi"}, {value: 2, label: "sisisi"}])

// 3 exercise

let normalizeItemsIfStringOrNumber = (items) => {
    let rightArray = [];
        items.forEach(element => {
        let obj = {
            value: element,
            label: element
        };
        rightArray.push(obj)
        });
    return rightArray;
}

let normalizeItemsIfObject = (items) => {
    let rightArray = [];
    let entries = Object.entries(items);
    entries.forEach(el => {
        let obj = {
            value: el[0],
            label: el[1]
        };
        rightArray.push(obj);
    });
    return rightArray;
}

let normalizeItems = (items) => {
    if (typeof items[0] === "undefined") {
        return normalizeItemsIfObject(items);
    } else if (typeof items[0] === 'number' || typeof items[0] === 'string') {
        return normalizeItemsIfStringOrNumber(items);
    } else {return items}
}

// makeSelect([{value: 3, label: "kikiki"}, {value: 1, label: "hihihi"}, {value: 2, label: "sisisi"}])
// makeSelect({value1: 'lala', value2: 'lololo', value3: 'lilili'}, 'value2');
// makeSelect([1, 2, 5, 7, 9], 7);