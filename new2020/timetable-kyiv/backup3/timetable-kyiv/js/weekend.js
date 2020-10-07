// добавляем выходные дни методистов, и празники. holiday даты праздников
window.addEventListener('load', function() {
    var monday = 3;
    var tuesday = 5;
    var wednesday = 7;
    var thursday = 9;
    var friday = 11;
    var mh = document.querySelectorAll('.mh');
    var gb = document.querySelectorAll('.gb');
    var rh = document.querySelectorAll('.rh');
    var holiday = ["._24-08-2016", "._14-10-2016", "._08-03-2017", "._17-04-2017", "._01-05-2017", "._02-05-2017", "._09-05-2017"];
    var addHoliday = document.querySelectorAll(holiday);
    for (var i = 0; i < rh.length; i++) {
        rh[i].childNodes[monday].innerHTML = '';
        rh[i].childNodes[monday].classList.add('dayoff');
        var dayOffElementRh = document.createElement('div');
        dayOffElementRh.innerHTML = 'LSE';
        dayOffElementRh.classList.add('label', 'label-info');
        rh[i].childNodes[monday].appendChild(dayOffElementRh);
    }
    // for (var x = 0; x < mh.length; x++) {
    //     mh[x].childNodes[monday].innerHTML = '';
    //     mh[x].childNodes[monday].classList.add('dayoff');
    //     var dayOffElementMh = document.createElement('div');
    //     dayOffElementMh.innerHTML = 'LSE';
    //     dayOffElementMh.classList.add('label', 'label-info');
    //     mh[x].childNodes[monday].appendChild(dayOffElementMh);
    // }
    for (var z = 0; z < addHoliday.length; z++) {
        addHoliday[z].innerHTML = '';
        addHoliday[z].classList.add('dayoff');
        var holidayElement = document.createElement('div');
        holidayElement.innerHTML = 'Holiday';
        holidayElement.classList.add('label', 'label-info');
        addHoliday[z].appendChild(holidayElement);
    }
});
