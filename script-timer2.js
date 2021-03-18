'use strict'

const dateProm = '2021-05-30';

function getRealTime(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(total / (1000 * 60 * 60 * 24)),
          hours = Math.floor((total/ (1000 * 60 * 60) % 24)),
          minutes = Math.floor((total/ (1000 * 60) % 60)),
          seconds = Math.floor((total/ 1000) % 60);

    return {
        'total': total,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

          updateClock(); 

    function updateClock() {
        const t = getRealTime(endtime);

        days.innerHTML = t.days;
        hours.innerHTML = t.hours;
        minutes.innerHTML = t.minutes;
        seconds.innerHTML = t.seconds;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('.timer', dateProm);