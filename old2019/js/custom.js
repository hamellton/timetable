  window.addEventListener('load', function() {
    var parent;
    var buttonAddEvent = $("td > button");
    var methodistsData = {
      ss: 'Світлана Сорочинська',
      lm: 'Олена Міходуй',
      gb: 'Геннадій Білоус',
      mh: 'Майкл Хадсон',
      rh: 'Роберт Хартіган',
      lo: 'Лідія Орищук',
      ls: 'Людмила Сидорчук',
      kk: 'Kris Kirby | Sam Mckean',
      tb: 'Tom Barton',
      mb: 'Марина Бабенко',
      mp: 'Мар`яна Петречко',
      yk: 'Юлія Киянець',
      if: 'Ian Firth',
      nm: 'Natalia Mykhnenko'
    };
    // $("#addevent").change(function() {
    //   console.log($(this).serializeArray());
    // });
    //--form--
    var addBtn = document.createElement('button');
    addBtn.classList.add('btn', 'btn-default', 'btn-xs');
    addBtn.setAttribute('type', 'button');
    addBtn.setAttribute('aria-hidden', 'true');
    addBtn.setAttribute('data-toggle', 'modal');
    addBtn.setAttribute('data-target', '#exampleModal');
    addBtn.innerHTML = 'ADD';

    for (var y = 0; y < buttonAddEvent.length; y++) {
      // buttonAddEvent[y].appendChild(addBtn);
      buttonAddEvent[y].setAttribute('aria-hidden', 'true');
      buttonAddEvent[y].setAttribute('data-toggle', 'modal');
      buttonAddEvent[y].setAttribute('data-target', '#exampleModal');
      buttonAddEvent[y].addEventListener('click', ClickHandler());
    }
    addEventStart();
    subscribe();

    //month scrollto jquery
	    $('.january').click(function() {
	        $.scrollTo('#january', {duration:700});
	    });
      $('.february').click(function() {
          $.scrollTo('#february', {duration:700});
      });
      $('.march').click(function() {
          $.scrollTo('#march', {duration:700});
      });
      $('.april').click(function() {
          $.scrollTo('#april', {duration:700});
      });
      $('.may').click(function() {
          $.scrollTo('#may', {duration:700});
      });
      $('.june').click(function() {
          $.scrollTo('#june', {duration:700});
      });
      $('.july').click(function() {
          $.scrollTo('#july', {duration:700});
      });
      $('.august').click(function() {
          $.scrollTo('#august', {duration:700});
      });
      $('.september').click(function() {
          $.scrollTo('#september', {duration:700});
      });
      $('.october').click(function() {
          $.scrollTo('#october', {duration:700});
      });
      $('.november').click(function() {
          $.scrollTo('#november', {duration:700});
      });
      $('.december').click(function() {
          $.scrollTo('#december', {duration:700});
      });
      $('.january').click(function() {
          $.scrollTo('#january', {duration:700});
      });
      $('.february').click(function() {
          $.scrollTo('#february', {duration:700});
      });

    function ClickHandler() {
      "use strict";
      return function() {
        var date = $(this).parent('td').attr('data-date');
        var methodist = $(this).parents('tr').attr('class');
        var scroll = document.documentElement.scrollTop || document.body && document.body.scrollTop || 0;
        $('#typeevent, #theme, #additionaltheme, #additionalbook, #school, #time, #place, #managers, #comment, #driver, #type, #book, #numberc, #datesend, #advertcomment, #competitioncomment, #certificatecomment, #invitationcomment, #linkcomment, #reportcomment, #offercomment').val('');
        $('#certificate :input, #thankyouletter :input').attr('checked', false);
        $('#eventid').val(0);
        $('.dateevent').text(goodDate(date));
        $('.methodist').text(shortToFull(methodist, methodistsData));
        $('.methodist').attr('data-methodist', methodist);
        hide();
        setCookie('positionScroll', scroll);
        console.log('set scroll '+ scroll)
      };
    }

    function subscribe() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/subscribe", true);

      xhr.onreadystatechange = function() {
        if (this.readyState != 4) return;
        if (this.status != 200) {
          setTimeout(subscribe, 400);
          return;
        }
        subscribe();
      };
      xhr.send(null);
    }

    function shortToFull(short, convertArray) {
      if (convertArray[short]) return convertArray[short];
      return 'Невідомо' + short;
    }

    function goodDate(dateString) {
      return $.trim(dateString);
    }

    function hide(){
      $('#epanelcomment, #webinarscomment, #epanelpostevent, #webinarspostevent, #additionaltheme, .theme-label, #additionalbook, .book-label, #advertpostevent, #advertcomment, #competitionpostevent, #competitioncomment, #certificatepostevent, #certificatecomment, #invitationpostevent, #invitationcomment, #linkpostevent, #linkcomment, #reportpostevent, #reportcomment, #offerpostevent, #offercomment').hide();
    }

    addevent.onsubmit = function() {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "/sendevent", true);
      var forJSON = {};
      var statusEvent = document.getElementsByName('status');
      var methodist = $('.methodist').attr('data-methodist');
      for (var i = 0, length = statusEvent.length; i < length; i++) {
        if (statusEvent[i].checked) {
          statusEvent = statusEvent[i].value;
          break;
        }
      }
      forJSON.id = this.elements.eventid.value;
      forJSON.typeEvent = this.elements.typeevent.value;
      forJSON.statusEvent = statusEvent;
      forJSON.date = document.querySelector('.dateevent').innerHTML;
      forJSON.methodist = methodist.toLowerCase();
      forJSON.theme = this.elements.theme.value;
      forJSON.additionaltheme = this.elements.additionaltheme.value;
      forJSON.additionalbook = this.elements.additionalbook.value;
      forJSON.time = this.elements.time.value;
      forJSON.place = this.elements.place.value;
      forJSON.manager = this.elements.manager.value;
      forJSON.comment = this.elements.comment.value;
      // new field //
      forJSON.book = this.elements.book.value;
      forJSON.driver = this.elements.driver.value;
      forJSON.webinarsComment = this.elements.webinarscomment.value;
      forJSON.ePanelComment = this.elements.epanelcomment.value;

      forJSON.advertComment = this.elements.advertcomment.value || '';
      forJSON.competitionComment = this.elements.competitioncomment.value || '';
      forJSON.certificateComment = this.elements.certificatecomment.value || '';
      forJSON.invitationComment = this.elements.invitationcomment.value || '';
      forJSON.linkComment = this.elements.linkcomment.value || '';
      forJSON.reportComment = this.elements.reportcomment.value || '';
      forJSON.offerComment = this.elements.offercomment.value || '';

      forJSON.numberC = this.elements.numberc.value;
      forJSON.certificate = getCheckbox('#certificate input:checked');
      forJSON.thankYouLetter = getCheckbox('#thankyouletter input:checked');
      forJSON.dateSend = this.elements.datesend.value;
      //debugger
      xhr.send(JSON.stringify(forJSON));
      var test = JSON.stringify(forJSON);
      //debugger
      setTimeout(function() {
        location.reload();
      }, 200);

      return false;
    };

    function setCookie(name, value, options) {
      options = options || {};
      var expires = options.expires;
      if (typeof expires == "number" && expires) {
        var d = new Date();
        d.setTime(d.getTime() + expires * 1000);
        expires = options.expires = d;
      }
      if (expires && expires.toUTCString) {
        options.expires = expires.toUTCString();
      }
      value = encodeURIComponent(value);
      var updatedCookie = name + "=" + value;
      for (var propName in options) {
        updatedCookie += "; " + propName;
        var propValue = options[propName];
        if (propValue !== true) {
          updatedCookie += "=" + propValue;
        }
      }
      document.cookie = updatedCookie;
    }

    function getCookie(name) {
      var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? Number(decodeURIComponent(matches[1])) : 0;
    }

    function deleteEvent(parent) {
      console.log(parent);
      var addEvent = document.createElement('button');
      addEvent.classList.add('btn', 'btn-default', 'btn-xs');
      addEvent.setAttribute('type', 'button');
      addEvent.setAttribute('aria-hidden', 'true');
      addEvent.setAttribute('data-toggle', 'modal');
      addEvent.setAttribute('data-target', '#exampleModal');
      addEvent.innerHTML = 'Додати';

      parent.innerHTML = '';
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "/deleteevent", true);
      var forJSON = {};
      var eventId = parent.getAttribute('data-id');
      forJSON.id = eventId;
      xhr.send(JSON.stringify(forJSON));

      setTimeout(function() {
        location.reload();
      }, 200);
      return false;
    }

    function getCheckbox(array) {
      var cert = $(array).map(function(indx, element) {
        return $(element).val();
      });
      return cert.get();
    }

    function addEventStart() {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "/loadevents", true);
      xhr.onreadystatechange = function() {
        if (this.readyState != 4) return;
        if (this.status != 200) {
          setTimeout(subscribe, 400);
          return;
        }
        var DataFromJSON = JSON.parse(this.responseText).events;
        //hideFields
        //form state view
                  $("#addevent input[value='e-panel']").click(function() {
                    $('#epanelpostevent').toggle("fast");
                    if (!$( this ).prop("checked")) $('#epanelcomment').hide("fast");
                  });

                  $("#addevent input[value='webinars']").click(function() {
                    $('#webinarspostevent').toggle("fast");
                    if (!$( this ).prop("checked")) $('#webinarscomment').hide("fast");
                  });

                  //----
                  $("#addevent input[value='advert']").click(function() {
                    $('#advertpostevent').toggle("fast");
                    if (!$( this ).prop("checked")) $('#advertcomment').hide("fast");
                  });
                  $("#addevent input[value='конкурс']").click(function() {
                    $('#competitionpostevent').toggle("fast");
                    if (!$( this ).prop("checked")) $('#competitioncomment').hide("fast");
                  });
                  $("#addevent input[value='сертифікат он-лайн']").click(function() {
                    $('#certificatepostevent').toggle("fast");
                    if (!$( this ).prop("checked")) $('#certificatecomment').hide("fast");
                  });
                  $("#addevent input[value='запрошення на івент']").click(function() {
                    $('#invitationpostevent').toggle("fast");
                    if (!$( this ).prop("checked")) $('#invitationcomment').hide("fast");
                  });
                  $("#addevent input[value='посилання на матеріали на сайті']").click(function() {
                    $('#linkpostevent').toggle("fast");
                    if (!$( this ).prop("checked")) $('#linkcomment').hide("fast");
                  });
                  $("#addevent input[value='звіт про івент ФБ сайт']").click(function() {
                    $('#reportpostevent').toggle("fast");
                    if (!$( this ).prop("checked")) $('#reportcomment').hide("fast");
                  });
                  $("#addevent input[value='special offer']").click(function() {
                    $('#offerpostevent').toggle("fast");
                    if (!$( this ).prop("checked")) $('#offercomment').hide("fast");
                  });
                  //--


                  $('#epanelpostevent').click(function() {
                    $('#epanelcomment').toggle("fast");
                  });
                  //
                  $('#webinarspostevent').click(function() {
                    $('#webinarscomment').toggle("fast");
                  });
                  //--
                  $('#advertpostevent').click(function() {
                    $('#advertcomment').toggle("fast");
                  });
                  $('#competitionpostevent').click(function() {
                    $('#competitioncomment').toggle("fast");
                  });
                  $('#certificatepostevent').click(function() {
                    $('#certificatecomment').toggle("fast");
                  });
                  $('#invitationpostevent').click(function() {
                    $('#invitationcomment').toggle("fast");
                  });
                  $('#linkpostevent').click(function() {
                    $('#linkcomment').toggle("fast");
                  });
                  $('#reportpostevent').click(function() {
                    $('#reportcomment').toggle("fast");
                  });
                  $('#offerpostevent').click(function() {
                    $('#offercomment').toggle("fast");
                  });
                  //--

                  $('#theme').change(function() {
                    if ($("#theme option:selected").val() == 'Another topic') {
                      $('#additionaltheme, .theme-label').show("fast");
                    } else $('#additionaltheme, .theme-label').hide("fast");
                  });
                  $('#book').change(function() {
                    if ($("#book option:selected").val() == 'Інший підручник') {
                      $('#additionalbook, .book-label').show("fast");
                    } else $('#additionalbook, .book-label').hide("fast");
                  });

        DataFromJSON.forEach(function(event, i, DataFromJSON) {
          //проверка
          if (event.date === undefined || event.date === "" && event.methodist === undefined || event.methodist === "") {
            console.log("ошибка в базе, нет даты ивента или методиста!" + event.date + '-' + event.methodist);
          }
          var eventStatus;
          var date;
          var methodist;
          var wrapper = document.createElement('div');
          var typeEvent = document.createElement('div');
          var additionaltheme = document.createElement('div');
          var additionalbook = document.createElement('div');
          var book = document.createElement('div'); //
          var theme = document.createElement('div');
          //var school = document.createElement('div');
          var driver = document.createElement('div'); //
          var time = document.createElement('div');
          var place = document.createElement('div');
          var manager = document.createElement('div');
          var comment = document.createElement('div');
          //var certificate = document.createElement('div'); //
          var numberC = document.createElement('div'); //
          var thankYouLetter = document.createElement('div'); //
          var ePanelComment = document.createElement('div'); //
          var webinarsComment = document.createElement('div'); //
          var advertComment = document.createElement('div'); //
          var competitionComment = document.createElement('div'); //
          var certificateComment = document.createElement('div'); //
          var invitationComment = document.createElement('div'); //
          var linkComment = document.createElement('div'); //
          var reportComment = document.createElement('div'); //
          var offerComment = document.createElement('div'); //
          var dateSend = document.createElement('div'); //

          var buttonDelete = document.createElement('button');
          var buttonUpdate = document.createElement('button');
          // var makeHtml = document.createElement('button');

          wrapper.setAttribute('data-id', event.id);
          wrapper.setAttribute('data-date', event.date);
          wrapper.setAttribute('data-methodist', event.methodist);
          wrapper.setAttribute('data-certificate', event.certificate);
          wrapper.setAttribute('data-thank', event.thankYouLetter);
          eventStatus = event.statusEvent;
          date = event.date;
          methodist = event.methodist;
          typeEvent.innerHTML = event.typeEvent;
          typeEvent.classList.add('typeevent');
          theme.innerHTML = event.theme;
          theme.classList.add('theme');
          additionaltheme.innerHTML = event.additionaltheme;
          additionaltheme.classList.add('additionaltheme');
          additionalbook.innerHTML = event.additionalbook;
          additionalbook.classList.add('additionalbook');
          time.innerHTML = event.time;
          time.classList.add('time');
          place.innerHTML = event.place;
          place.classList.add('place');
          manager.innerHTML = event.manager;
          manager.classList.add('manager');
          comment.innerHTML = event.comment;
          comment.classList.add('comment');
          //new fields//
          book.innerHTML = event.book;
          driver.innerHTML = event.driver;
          //certificate.innerHTML = event.certificate || '';
          numberC.innerHTML = event.numberC;
          thankYouLetter.innerHTML = event.thankYouLetter;
          ePanelComment.innerHTML = event.ePanelComment;
          webinarsComment.innerHTML = event.webinarsComment;
          advertComment.innerHTML = event.advertComment;
          competitionComment.innerHTML = event.competitionComment;
          certificateComment.innerHTML = event.certificateComment;
          invitationComment.innerHTML = event.invitationComment;
          linkComment.innerHTML = event.linkComment;
          reportComment.innerHTML = event.reportComment;
          offerComment.innerHTML = event.offerComment;
          dateSend.innerHTML = event.dateSend;

          book.classList.add('book');
          driver.classList.add('driver');
          //certificate.classList.add('certificate');
          numberC.classList.add('numberC');
          thankYouLetter.classList.add('thankYouLetter');
          ePanelComment.classList.add('ePanelComment');
          webinarsComment.classList.add('webinarsComment');
          advertComment.classList.add('advertComment');
          competitionComment.classList.add('competitionComment');
          certificateComment.classList.add('certificateComment');
          invitationComment.classList.add('invitationComment');
          linkComment.classList.add('linkComment');
          reportComment.classList.add('reportComment');
          offerComment.classList.add('offerComment');
          dateSend.classList.add('dateSend');

          buttonDelete.classList.add('btn', 'btn-xs', 'btn-danger');
          buttonDelete.id = "delEvent";
          buttonDelete.innerHTML = "Del";
          buttonDelete.addEventListener('click', function() {
            this.parentNode.classList.remove('event-added');
            parent = this.parentNode;
            if (confirm("Удалить ивент?")) {
              deleteEvent(parent);
            } else {
              return;
            }
            setCookie('positionScroll', document.documentElement.scrollTop || document.body && document.body.scrollTop || 0);
          });

          buttonUpdate.classList.add('btn', 'btn-xs', 'btn-info');
          buttonUpdate.id = "updateEvent";
          buttonUpdate.innerHTML = "Upd";
          buttonUpdate.setAttribute('aria-hidden', 'true');
          buttonUpdate.setAttribute('data-toggle', 'modal');
          buttonUpdate.setAttribute('data-target', '#exampleModal');

          buttonUpdate.addEventListener('click', function() {
            $('#certificate :input, #thankyouletter :input').attr('checked', false);
            hide();
            var parent = this.parentNode;
            var eventId = parent.getAttribute('data-id');
            var methodist = parent.getAttribute('data-methodist');
            var allInfoEvent = $(this).siblings().not($('button'));
            var certificate = $(this).parent().attr('data-certificate');
            certificate = certificate.split(',');
            var thank = $(this).parent().attr('data-thank');
            thank = thank.split(',');

            document.querySelector("#typeevent").value = $(allInfoEvent).filter(".typeevent").html();
            document.querySelector("#theme").value = $(allInfoEvent).filter(".theme").html();
            document.querySelector("#driver").value = $(allInfoEvent).filter(".driver").html();
            document.querySelector("#book").value = $(allInfoEvent).filter(".book").html();
            // document.querySelector("#certificate").value = $( allInfoEvent ).filter(".certificate").html();
            document.querySelector("#numberc").value = $(allInfoEvent).filter(".numberC").html();
            document.querySelector("#epanelcomment").value = $(allInfoEvent).filter(".ePanelComment").html();
            document.querySelector("#webinarscomment").value = $(allInfoEvent).filter(".webinarsComment").html();

            document.querySelector("#advertcomment").value = $(allInfoEvent).filter(".advertComment").html();
            document.querySelector("#competitioncomment").value = $(allInfoEvent).filter(".competitionComment").html();
            document.querySelector("#certificatecomment").value = $(allInfoEvent).filter(".certificateComment").html();
            document.querySelector("#invitationcomment").value = $(allInfoEvent).filter(".invitationComment").html();
            document.querySelector("#linkcomment").value = $(allInfoEvent).filter(".linkComment").html();
            document.querySelector("#reportcomment").value = $(allInfoEvent).filter(".reportComment").html();
            document.querySelector("#offercomment").value = $(allInfoEvent).filter(".offerComment").html();

            document.querySelector("#datesend").value = $(allInfoEvent).filter(".dateSend").html();
            document.querySelector("#additionaltheme").value = $(allInfoEvent).filter(".additionaltheme").html();
            document.querySelector("#additionalbook").value = $(allInfoEvent).filter(".additionalbook").html();
            //document.querySelector("#school").value = parent.childNodes[1].innerHTML;
            document.querySelector("#time").value = $(allInfoEvent).filter(".time").html();
            document.querySelector("#place").value = $(allInfoEvent).filter(".place").html();
            document.querySelector("#managers").value = $(allInfoEvent).filter(".manager").html();
            document.querySelector("#comment").value = $(allInfoEvent).filter(".comment").html();
            document.querySelector('.dateevent').innerHTML = goodDate(parent.getAttribute('data-date'));
            document.querySelector('.methodist').innerHTML = shortToFull(methodist, methodistsData);
            $('.methodist').attr('data-methodist', methodist);
            document.querySelector('#eventid').value = eventId;

            //статус ивента
            //так плохо - зависимы от html:
            if (parent.classList[0] === 'event-info') {
              document.getElementById('status-1').checked = true;
            } else if (parent.classList[0] === 'event-accept') {
              document.getElementById('status-2').checked = true;
            } else if (parent.classList[0] === 'event-confirm') {
              document.getElementById('status-3').checked = true;
            }

            $(certificate).each(function(i, element) {
              $('input[value="' + element + '"]').prop('checked', true);
            });
            $(thank).each(function(i, element) {
              $('input[value="' + element + '"]').prop('checked', true);
            });
            //form
            if ($("#addevent input[value='e-panel']").prop("checked")) $('#epanelpostevent').show("fast");
            if ($("#addevent input[value='webinars']").prop("checked")) $('#webinarspostevent').show("fast");
            if ($("#theme option:selected").val() == 'Another topic') $('#additionaltheme, .theme-label').show("fast");
            if ($("#book option:selected").val() == 'Інший підручник') $('#additionalbook, .book-label').show("fast");


            if ($("#addevent input[value='advert']").prop("checked")) $('#advertpostevent').show("fast");
            if ($("#addevent input[value='конкурс']").prop("checked")) $('#competitionpostevent').show("fast");
            if ($("#addevent input[value='сертифікат он-лайн']").prop("checked")) $('#certificatepostevent').show("fast");
            if ($("#addevent input[value='запрошення на івент']").prop("checked")) $('#invitationpostevent').show("fast");
            if ($("#addevent input[value='посилання на матеріали на сайті']").prop("checked")) $('#linkpostevent').show("fast");
            if ($("#addevent input[value='звіт про івент ФБ сайт']").prop("checked")) $('#reportpostevent').show("fast");
            if ($("#addevent input[value='special offer']").prop("checked")) $('#offerpostevent').show("fast");



            setCookie('positionScroll', document.documentElement.scrollTop || document.body && document.body.scrollTop || 0);
          });

          // makeHtml.innerHTML = "Web";
          // makeHtml.classList.add('btn', 'btn-xs', 'btn-default');
          // makeHtml.id = "make-html";
          // makeHtml.setAttribute('aria-hidden', 'true');
          // makeHtml.setAttribute('data-toggle', 'modal');
          // makeHtml.setAttribute('data-target', '#html');
          // makeHtml.addEventListener('click', function() {
          //   parent = this.parentNode;
          //   document.querySelector("#make").value = makehtml(
          //     parent.childNodes[0].innerHTML, parent.childNodes[1].innerHTML,
          //     parent.childNodes[2].innerHTML, parent.childNodes[5].innerHTML,
          //     parent.childNodes[3].innerHTML, parent.childNodes[4].innerHTML,
          //     parent.parentNode.classList[0], parent.childNodes[6].innerHTML
          //   );
          // });

          if (eventStatus === 'пропозиція') {
            wrapper.classList.add('event-info', 'event-view');
          } else if (eventStatus === '1c') {
            wrapper.classList.add('event-confirm', 'event-view');
          } else if (eventStatus === 'підтверджено') {
            wrapper.classList.add('event-accept', 'event-view');
          }
          //собираем все вместе во wrapper и вставляем в нужную ячейку таблицы
          wrapper.appendChild(place);
          //wrapper.appendChild(school);
          wrapper.appendChild(time);
          wrapper.appendChild(driver);
          wrapper.appendChild(manager);
          wrapper.appendChild(typeEvent);
          wrapper.appendChild(theme);
          wrapper.appendChild(additionaltheme);
          wrapper.appendChild(additionalbook);
          wrapper.appendChild(book);
          wrapper.appendChild(comment);
          //wrapper.appendChild(certificate);
          wrapper.appendChild(numberC);
          wrapper.appendChild(thankYouLetter);
          wrapper.appendChild(ePanelComment);
          wrapper.appendChild(webinarsComment);
          wrapper.appendChild(advertComment);
          wrapper.appendChild(competitionComment);
          wrapper.appendChild(certificateComment);
          wrapper.appendChild(invitationComment);
          wrapper.appendChild(linkComment);
          wrapper.appendChild(reportComment);
          wrapper.appendChild(offerComment);
          wrapper.appendChild(dateSend);
          wrapper.appendChild(buttonDelete);
          wrapper.appendChild(buttonUpdate);
          // кнопка web - html для календаря
          // wrapper.appendChild(makeHtml);
          $(wrapper)
            .insertBefore($('[data-date="' + date + '"]')
              .filter(function() {
                if ($(this).parent().attr('class') == methodist) return $(this);
              })
              .children("button"));
        });
        setTimeout(function() {
          console.log(getCookie('positionScroll'));
          window.scrollTo(0, getCookie('positionScroll'));
        }, 50);
      };
      xhr.send(null);
      document.querySelector('#eventid').value = 0;
      console.log(getCookie('positionScroll'));
      // var scr = Number(getCookie('positionScroll'));
      //window.scrollTo(0,src);
      setTimeout(function() {
        console.log(getCookie('positionScroll'));
        window.scrollTo(0, getCookie('positionScroll'));
      }, 100);
    }

  });
