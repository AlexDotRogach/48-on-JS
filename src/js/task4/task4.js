import './task4.css';
// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// 4) Напишіть функію яка буде зчитувати з
// інпута введену дату,
// та виводити на сторінку різницю секунд
// хвилин годин днів віддосно сьогоднішної дати

const yourDate = sessionStorage.getItem("date") ? sessionStorage.getItem("date") : "no date"

console.log(yourDate);
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        setDate(selectedDates[0])
        sessionStorage.setItem("date", JSON.stringify(selectedDates[0]))
    },
  };

const form = document.querySelector("#form");

flatpickr("#form", options)

function setDate(date) {
    // console.log(convertMs(date.getTime()))
    const fullDate = {
        day: date.getDate(),
        year: date.getFullYear(),
        month: date.getMonth()
    }

    const { day, year, month } = fullDate;


    form.elements.data.value = `${year}/${`${month+1}`.padStart(2,0)}/${`${day}`.padStart(2,0)}`;
    differentTime(date)
}

function differentTime(chooseDate){
    const currentDate= new Date();

    const daysLeft=convertMs(chooseDate.getTime()-currentDate.getTime()).days
     console.log(`залишилось ${daysLeft + 1}`);
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }