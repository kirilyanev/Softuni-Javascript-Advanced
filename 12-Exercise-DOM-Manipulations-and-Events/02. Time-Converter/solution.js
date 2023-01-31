// Neat solution

function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let defaultTime = {
        days:1,
        hours:24,
        minutes:1440,
        seconds:86400
    };

    document.querySelector('#daysBtn').addEventListener('click', onConvert);
    document.querySelector('#hoursBtn').addEventListener('click', onConvert);
    document.querySelector('#minutesBtn').addEventListener('click', onConvert);
    document.querySelector('#secondsBtn').addEventListener('click', onConvert);

    function convert(value,time) {
        let days = value / defaultTime[time];
  
        return {
            days: days,
            hours: days * defaultTime.hours,
            minutes: days * defaultTime.minutes,
            seconds: days * defaultTime.seconds
        }
    }

    function onConvert (e) {
        let input = e.target.parentElement.querySelector('input[type="text"]');
        
        let time = convert(Number(input.value),input.id);
        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }
}

// First solution 

// function attachEventsListeners() {
//     let buttonElements = Array.from(document.querySelectorAll('input[type=button]'));
//     let inputElements = Array.from(document.querySelectorAll('input[type=text]'));

//     for (let button of buttonElements) {
//         button.addEventListener('click', onclick);
//     }

//     function onclick(e) {
//         let time = e.target.parentNode.children[1].value;
//         let timeType = e.target.parentNode.children[1].id;
//         calc(timeType, time);
//     }
//     function calc(timeType, time) {
//         let days = 0;
//         let hours = 0;
//         let minutes = 0;
//         let seconds = 0;

//         if (timeType === 'days') {
//             days = Number(time);
//             hours = days * 24;
//             minutes = hours * 60;
//             seconds = minutes * 60;
//         }
//         else if (timeType === 'hours') {
//             hours = Number(time);
//             days = hours / 24;
//             minutes = hours * 60;
//             seconds = minutes * 60;
//         }
//         else if (timeType === 'minutes') {
//             minutes = Number(time);
//             seconds = minutes * 60;
//             hours = minutes / 60;
//             days = hours / 24;
//         }
//         else if (timeType === 'seconds') {
//             seconds = Number(time);
//             minutes = seconds / 60;
//             hours = minutes / 60;
//             days = hours / 24;
//         }

//         inputElements[0].value = days;
//         inputElements[1].value = hours;
//         inputElements[2].value = minutes;
//         inputElements[3].value = seconds;
//     }
// }
