//инициализируем игровое поле
const land = document.getElementById('land');
let step = 0;
let result = '';
const contentWrapper = document.getElementById('content');
const modalWinner = document.getElementById('modal_winner_wrapper')
const overlay = document.getElementById('overlay')
const btnClose = document.getElementById('btn_close')




//вешаем обработчик событий, делаем систему хода
land.addEventListener('click', e => {
    if(e.target.className = 'cell') {
        step % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
        step++;
        win();
    }
})



//создаем массив с массивами выигрышных комбинаций, делаем условия для выигрыша крестиков и ноликов
const win = () => {
    const cell = document.getElementsByClassName('cell');
    const combs = [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    /*let rounds = 0;
    debugger
    land.map(e => {
        if(land[e].innerHTML !== '' ) rounds++;

    })
    if(rounds === 9){
        result = 'ничья'
        prepareWinner(result)
    }*/

    for (i = 0; i < combs.length; i++) {
        if (
            cell[combs[i][0]].innerHTML === 'X' && cell[combs[i][1]].innerHTML === 'X' && cell[combs[i][2]].innerHTML === 'X'
        ) {
            result = 'крестики'
            prepareWinner(result)
        } else if (
            cell[combs[i][0]].innerHTML === '0' && cell[combs[i][1]].innerHTML === '0' && cell[combs[i][2]].innerHTML === '0'
        ) {
            result = 'нолики'
            prepareWinner(result)
        } else if (
            step === 9
        ){
            result = 'ничья'
            prepareWinner(result)
        }
    }
}




//выводим информацию о победителе
const prepareWinner = winner => {
    contentWrapper.innerHTML = `${winner}`;
    modalWinner.style.display = 'block'
}




//закрываем модальное окно
const closeModal = () => {
    modalWinner.style.display = 'none';
    location.reload();
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener("click", closeModal)

