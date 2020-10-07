function addEventStart () {
  DatafromJSON = JSON.parse(this.responseText);

  for(var y = 0; y < DatafromJSON.length; Y++) {
    console.log(DatafromJSON[y]);
  }

parent.innerHTML = '';
var typeEvent = document.createElement('div');
var typeEventRadio;
var typeEventForBackground;
var additionaltheme = document.createElement('div');
var theme = document.createElement('div');
var school = document.createElement('div');
var time = document.createElement('div');
var place = document.createElement('div');
var manager = document.createElement('div');
var comment = document.createElement('div');
var buttonDelete = document.createElement('button');
var buttonUpdate = document.createElement('button');
var date = document.createTextNode(JSON.parse(this.responseText).date);
var methodist = document.createTextNode(JSON.parse(this.responseText).methodist);

// typeEventRadio = document.getElementsByName('status');
// for (var i = 0, length = typeEventRadio.length; i < length; i++) {
//   if (typeEventRadio[i].checked) {
//       // do whatever you want with the checked radio
//       typeEventForBackground = typeEventRadio[i].value;
//       if (typeEventForBackground == 'пропозиція') {
//               typeEvent.classList.add('event-info');
//               typeEvent.innerHTML = 'статус';
//               // typeEvent.innerHTML = typeEventRadio[i].value;
//
//       }
//       else if (typeEventForBackground == 'прийнято') {
//               typeEvent.classList.add('event-accept');
//               typeEvent.innerHTML = 'статус';
//               // typeEvent.innerHTML = typeEventRadio[i].value;
//
//       }
//       else if (typeEventForBackground == 'підтверджено') {
//               typeEvent.classList.add('event-confirm');
//               typeEvent.innerHTML = 'статус';
//               // typeEvent.innerHTML = typeEventRadio[i].value;
//
//       }
//       // only one radio can be logically checked, don't check the rest
//       break;
//     }
// }

theme.innerHTML = document.createTextNode(JSON.parse(this.responseText).theme);
theme.classList.add('theme');
additionaltheme.innerHTML = document.createTextNode(JSON.parse(this.responseText).additionaltheme);
additionaltheme.classList.add('additionaltheme');
school.innerHTML = document.createTextNode(JSON.parse(this.responseText).school);
school.classList.add('school');
time.innerHTML = document.createTextNode(JSON.parse(this.responseText).time);
time.classList.add('time');
place.innerHTML = document.createTextNode(JSON.parse(this.responseText).place);
place.classList.add('place');
manager.innerHTML = document.createTextNode(JSON.parse(this.responseText).manager);
manager.classList.add('manager');
comment.innerHTML = document.createTextNode(JSON.parse(this.responseText).comment);
comment.classList.add('comment');

buttonDelete.classList.add('btn', 'btn-xs', 'btn-warning');
buttonDelete.id = "delEvent";
buttonDelete.innerHTML = "Видалити";
buttonDelete.addEventListener('click', function() {
this.parentNode.classList.remove('event-added');
this.parentNode.innerHTML = '';
});

buttonUpdate.classList.add('btn', 'btn-xs', 'btn-info');
buttonUpdate.id = "updateEvent";
buttonUpdate.innerHTML = "Поновити";
buttonUpdate.setAttribute('aria-hidden', 'true');
buttonUpdate.setAttribute('data-toggle', 'modal');
buttonUpdate.setAttribute('data-target', '#exampleModal');
buttonUpdate.addEventListener('click', function () {
    parent = this.parentNode;
    console.log('test');
    document.querySelector("#theme").value = document.querySelector(".theme").innerHTML;
    document.querySelector("#additionaltheme").value = document.querySelector(".additionaltheme").innerHTML;
    document.querySelector("#school").value = document.querySelector(".school").innerHTML;
    document.querySelector("#time").value = document.querySelector(".time").innerHTML;
    document.querySelector("#place").value = document.querySelector(".place").innerHTML;
    document.querySelector("#managers").value = document.querySelector(".manager").innerHTML;
    document.querySelector("#comment").value = document.querySelector(".comment").innerHTML;
}
);

parent.appendChild(typeEvent);
parent.appendChild(theme);
parent.appendChild(additionaltheme);
parent.appendChild(school);
parent.appendChild(time);
parent.appendChild(place);
parent.appendChild(manager);
parent.appendChild(comment);
parent.appendChild(buttonDelete);
parent.appendChild(buttonUpdate);
console.log(typeEventForBackground);

return false;
};
