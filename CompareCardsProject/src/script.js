(() => {
    const BOARD = document.getElementById("board");
    const GAMELOG = document.getElementById("gamelog");
    const restartButton = document.querySelector('.restart-button');
    const timer = document.querySelector('.timer');
    const cardsMaxView = 2;
    const time = 60;
    
    let cardsView = 0;
    let compareObject = {
        firstCard: null,
        secondCard: null,
        firstCardValue: null,
        secondCardValue: null
    };
    
    // создаем колоду
    let cardsArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

    // тасуем карты
    let shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(cardsArray);

    // задаем функционал кнопке

    let restart = () => {
        let allCardsWinChecker = Array.from(document.querySelectorAll('.card'));
        if (allCardsWinChecker.every((card) => {return card.dataset.success})) {
            for (const card of allCardsWinChecker) {card.remove()};
            timer.textContent = time;
            BOARD.textContent = '';
            createCards(cardsArray);
            setTimer();
        }
    }

    restartButton.addEventListener('click', restart);

    // настраиваем таймер

    let Interval;

    let setTimer = () => {
        if (Interval) {clearInterval(Interval)};
        timer.textContent = time;
        Interval = setInterval(timerHandler, 1000);
    }

    let timerHandler = () => {
        if (timer.textContent > 0) {
            timer.textContent--;
        } else {
            let fail = document.createElement('div');
            fail.classList.add('fail');
            fail.textContent = "HAHA U LOUSE HAHA U LOUSE";
            let allCardsWinChecker = Array.from(document.querySelectorAll('.card'));
            for (const card of allCardsWinChecker) {card.remove()}

            BOARD.append(fail);
        }
    }

    setTimer();

    // создаем обработчики

    function checkPare(target) {
        if (cardsView === 0 || cardsView === 2) {
            compareObject.firstCardValue = target.dataset.pareValue;
            compareObject.firstCard = target;
        } else if (cardsView === 1) {
            compareObject.secondCardValue = target.dataset.pareValue;
            if (compareObject.firstCardValue === compareObject.secondCardValue && compareObject.firstCard !== target) {
                target.classList.add('done');
                target.dataset.success = true;
                target.textContent = '';
                compareObject.firstCard.classList.add('done');
                compareObject.firstCard.dataset.success = true;
                compareObject.firstCard.textContent = '';
            }
        }
    }

    function checkCard(target) {
        if (cardsView < cardsMaxView && !target.watched) {
            if (!target.dataset.success) {target.textContent = target.dataset.pareValue;};
            target.dataset.watched = true;
            cardsView++;
        } else if (cardsView < cardsMaxView && target.watched) {
            // звук нажатия на уже раскрытую карту
        } else {
            cardsView = 1;
            const allCards = document.querySelectorAll('.card');
            for (let card of allCards) {
                card.textContent = '';
                card.dataset.watched = false;
            };
            if (!target.dataset.success) {target.textContent = target.dataset.pareValue;};
            target.dataset.watched = true;
        }
    }

    function congrats(target) {
        let allCardsWinChecker = Array.from(document.querySelectorAll('.card'));
        if (allCardsWinChecker.every((card) => {return card.dataset.success})) {
            for (const card of allCardsWinChecker) {card.remove()};
            clearInterval(Interval);
            let win = document.createElement('img');
            win.classList.add('win');

            let randomCatGirl = Math.floor(Math.random() * 10);
            win.src = `src/images/CatGirls/catgirl${randomCatGirl}.jpg`
            BOARD.append(win);

            let audio = new Audio('src/audio/ukrainecut.mp3');
            audio.play();
        }
    }

    function openCard(target) {

        checkPare(target);

        checkCard(target);
        
        congrats(target);
    }
    
    // добавляем карты в html

    let createCards = (array) => {
        for (const item of array) {
            let card = document.createElement('div');
            card.classList.add('card');
            card.dataset.pareValue = item;
            card.addEventListener('click', (evt) => {openCard(evt.target)})
            BOARD.append(card);
        }
    }

    createCards(cardsArray);

})();