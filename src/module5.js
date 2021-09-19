// 1 exercise

let checkBanListEmail = (emails, banList) => {
    let newList = emails.filter(email => !banList.includes(email));
    console.log(newList);
}

// checkBanListEmail(['apple@yami.com', 'mango@mmm.gr', 'avocado@avacado.avacado'], ['avocado.gmail.com', 'apple@yami.com'])

// 2 exercise

let calculateFinalPrice = (totalPrice, countOfGoods, promo = null) => {
    if (promo === 'ДАРИМ300') {
        totalPrice < 300 ? totalPrice = 0 : totalPrice = (totalPrice - 300);
    };
    countOfGoods >= 10 ? totalPrice = (totalPrice - totalPrice * 0.05) : totalPrice;
    totalPrice > 50000 ? totalPrice = (totalPrice - (totalPrice - 50000) * 0.2) : totalPrice;
    if (promo === 'СКИДКА15') {
        totalPrice >= 20000 ? totalPrice = (totalPrice - totalPrice * 0.15) : totalPrice;
    };
    console.log(totalPrice);
}

// calculateFinalPrice(100000, 10, "СКИДКА15");