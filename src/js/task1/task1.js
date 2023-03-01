import './task1.css';
// 1) Потрібно створити інтервал, який
// виводить у консоль кількість секунд,
// що минули з моменту запуску програми.
// "Минуло: 1 сек."
// "Минуло: 2 сек." ..... і так далі

const counterMoveParams = function() {
    let counter = 0;
    
    return () =>  {
        counter++;
        counterMove(counter, 5);
    }
}

const intervalId = setInterval(counterMoveParams(), 1000);

function counterMove (counter, stopCounter) {
    
    if (counter === stopCounter){
        clearInterval(intervalId);
    }

    showMessage(counter);
}

function showMessage (sec){
    console.log(`Минуло: ${sec} сек.`);
}

