//var date = new Date();

var day = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
];

var month = [
    'января',
    'Февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
];


var nodeDate = document.querySelector('.date-js');
var styleTime = document.querySelector('.time-js');
var styleMoscow= document.querySelector('.moscow-js');


setInterval(function(){
    var timeDate = new Date();

    nodeDate.innerHTML = day[timeDate.getDay()] + ', ' + timeDate.getDate() + ' ' + month[timeDate.getMonth()] + ' ' + timeDate.getFullYear() + 'г.' + "<br>";



    var hours = timeDate.getHours();
    var minutes = timeDate.getMinutes();
    var seconds = timeDate.getSeconds();



    function validateTime(time){
        if (time < 10){
            return "0" + time;
        }
        return time;
    }

    var validHours = validateTime(hours);
    var validMinutes = validateTime(minutes);
    var validSeconds = validateTime(seconds);

    styleTime.innerHTML = validHours + ':' + validMinutes + ':' + validSeconds;
    styleMoscow.innerHTML = "<br>" + 'Москва' + "<br>" + 'Московская область';

}, 50);



