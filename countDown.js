setInterval(function() {
    update();
}, 1000);

let currentDate = new Date()
let year = currentDate.getFullYear()
let month = currentDate.getMonth()+1
let day = currentDate.getDate()
let hours = currentDate.getHours()
let minutes = currentDate.getMinutes()
let seconds = currentDate.getSeconds()
let OpeningHour = '25/12/2023'
let end = currentDate > new Date('11/23/' + currentDate.getFullYear()) ? new Date('11/23/' + (currentDate.getFullYear() + 1)) : new Date('11/23/' + currentDate.getFullYear());


let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let timer;

console.log(currentDate)
console.log(day, hours, minutes, seconds)
console.log(OpeningHour)







function update() {
    let now = new Date();
    let distance = end - now;
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById('countdown').innerHTML = "It's Christmas!!!";
        return;
    }
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('day').innerHTML = addZero(days);
    document.getElementById('hour').innerHTML = addZero(hours);
    document.getElementById('minute').innerHTML = addZero(minutes);
    document.getElementsByClassName('second')[0].innerHTML = addZero(seconds);
    document.getElementsByClassName('second')[1].innerHTML = addZero(seconds);
}

const addZero = (number) => String(number).padStart(2, '0')
