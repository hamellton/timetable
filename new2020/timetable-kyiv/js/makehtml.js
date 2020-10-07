  var placeT = document.createElement('div');

  function makehtml(place, school, time, status, theme, additionaltheme, methodist, manager) {
    var code = document.createElement('div');
    var methodistDone = document.createElement('div');
    var themeDone = document.createElement('div');
    var additionalthemeDone = document.createElement('div');
    var managerDone = document.createElement('div');

  switch (methodist) {
    case 'lm':
    $(methodistDone).html(
      '<p><img alt="Олена Міходуй" src="http://elt-centre.com.ua/image/data/aboutus/mikhodui.jpg" style="float: left; margin: 5px 10px; height: 180px; width: 120px;" /><strong>Олена Міходуй</strong></p><p>- старший методист Міжнародного освітньо-методичного центру PEARSON-DINTERNAL;</p><p>- викладач англійської мови (кваліфікація ICELT);</p><p>- сертифікований екзаменатор міжнародних мовних екзаменів Pearson Test of English.</p><p>&nbsp;</p>'
    );
    break;
    case 'ss':
    $(methodistDone).html(
      '<p><img alt="Світлана Сорочинська" src="http://elt.dinternal.com.ua/image/data/aboutus/sorochynska_new.jpg" style="float: left; margin: 5px 10px; height: 180px; width: 120px;" /><strong>Світлана Сорочинська </strong></p><p>- головний методист Міжнародного освітньо-методичного центру PEARSON-DINTERNAL;</p><p>- викладач англійської мови (кваліфікації CELTA, FTBE);</p><p>- сертифікований екзаменатор міжнародних мовних екзаменів&nbsp; Pearson Test of English.</p><p>&nbsp;</p>'
    );
    break;
    case 'rh':
    $(methodistDone).html(
      '<p><img alt="Роберт Хартіган" src="http://elt-centre.com.ua/image/data/aboutus/robert.jpg" style="width: 120px; height: 180px; float: left; margin: 5px 10px;" /><strong>Роберт Хартіган</strong></p><p>- старший методист Міжнародного освітньо-методичного центру PEARSON-DINTERNAL;</p><p>- викладач англійської мови (кваліфікації CELTA, DELTA);</p><p>- сертифікований екзаменатор міжнародних мовних екзаменів&nbsp; Pearson Test of English​.</p>'
    );
    break;
    case 'gb':
    $(methodistDone).html(
      '<p><img alt="Геннадій Білоус" src="http://elt.dinternal.com.ua/image/data/bilous-calendar.jpg" style="float: left; margin: 5px 10px; height: 180px; width: 120px;" /><strong>Генадій Білоус</strong></p><p>- методист Міжнародного освітньо-методичного центру PEARSON-DINTERNAL;</p><p>- викладач англійської мови.</p>'
    );
    break;
    default:
    $(methodistDone).html(methodist);
    break;
  }
  switch (theme) {
    case '1':
    $(themeDone).html(
      '<p>Міське та обласне методичне об\'єднання вчителів англійської мови</p><p><strong> First Steps in Reading</strong></p><p>Особливості навчання читанню англійською мовою на початковому етапі: від рецептивного досвіду до продуктивної діяльності</p><ul><li>Принцип усного випередження як передумова якісного оволодіння учнями технікою читання;</li><li>Етап цілісного розпізнавання графічного образу слова;</li><li>Етап формування навички звуко-буквених співвідношень та послідовність його реалізації.</li></ul>'
    );
    break;
    case '2':
    $(themeDone).html(
      '<p></p><p><strong>Your Next Move to the Lesson that Really Works</strong></p><p>Сучасний продуктивний урок англійської мови в середній школі: 6 необхідних елементів формування комунікативної компетентності учнів середніх класів.</p><ul><li>Комбінування різних видів діяльності та методів засвоєння знань для забезпечення  продуктивної  діяльності учнів на уроці англійської мови;</li><li>Діяльнісний  підхід до навчання: інтеракція  на уроці англійської мови;</li><li>Оцінка та аналіз виконання учнями комунікативного завдання.</li></ul>'
    );
    break;
    case '4':
    $(themeDone).html(
      '<p><strong>A 5-point Checklist that Every Teacher Should Tick off when Preparing Students for ZNO</strong></p><p>Успішна підготовка учнів до складання ЗНО з англійської мови.</p><ul><li>Поєднання навчання загальної англійської та підготовки до іспитів у старших класах;</li><li>Холістичний підхід до підготовки учнів до ЗНО;</li><li>Ефективні види діяльності на уроці англійської для якісного розвитку продуктивних навичок учнів.</li></ul>'
    );
    break;
    case '5':
    $(themeDone).html(
'<p><strong>Writing Workshop (практикум для старшокласників)</strong></p><p>Ефективна підготовка учнів до ЗНО: частина «Письмо»</p><ul><li>Що потрібно знати старшокласнику про критерії оцінювання частини «Письмо» для  покращення     результативність складання іспиту в цілому?</li><li>Етап цілісного розпізнавання графічного образу слова;</li><li>Практичні поради для якісного виконання письмового завдання ЗНО.</li></ul>'
    );
    break;
    case '6':
    $(themeDone).html(
'<p><strong>External testing strategies: 200 points (практикум для старшокласників)</strong></p><p>Алгоритм підготовки учнів до складання ЗНО: частини «Читання» та «Використання мови»</p><ul><li>Як правильно виконувати екзаменаційні завдання з читання?</li><li>Алгоритм роботи з завданнями на  множинний вибір та заповнення пропусків (Використання мови).</li></ul>'
    );
    break;
    case '7':
    $(themeDone).html(
      '<p><strong>London Calling: Start Your Career with LCCI International Qualifications</strong></p><p>Особливості навчання читанню англійською мовою на початковому етапі: від рецептивного досвіду до продуктивної діяльності</p><p>There are so many international exams nowadays, so which one should our students choose? LCCI (London Chamber of Commerce and Industry International Qualifications) has increased dramatically in its demand recently, and its popularity has led to it being accepted by major international companies and universities. A look at the structure and task-types assessed in the LCCI set of exams for Business and Vocational English'
    );
    break;
    case '8':
    $(themeDone).html(
      '<p><strong>Growing Up with Grammar</strong></p><p>Методологія навчання граматики англійської мови у І-ІІ класах</p><ul><li>Послідовність та особливості введення нового граматичного матеріалу у початковій школі;</li><li>Імпліцитний та експліцитний підходи до навчання граматики;</li><li>Ігрові методи закріплення граматичного матеріалу.</li></ul>'
    );
    break;
    case '9':
    $(themeDone).html(
      '<p><strong>ZNO 2017 Countdown: Teacher’s Daily Practice Guide</strong></p><p>Максимально ефективна підготовка учнів до ЗНО з англійської мови в 2017 році: путівник для вчителя.</p><ul><li><strong>Частина «Читання»:<br></strong>типові проблеми та практичні поради з розвитку ефективних стратегій виконання типових екзаменаційних завдань з читання;</li><li><strong>Частина «Використання мови»:<br></strong>взаємозв’язок між належним знанням лексики та успішним складанням іспиту та шляхи покращення виконання учнями завдань на заповнення пропусків в тексті;</li><li><strong>Частина «Письмо»:<br></strong>алгоритм написання письмової роботи, що максимально відповідає критеріям оцінювання тестового завдання з розгорнутою відповіддю.</li></ul>'
    );
    break;
    default:
    $(themeDone).html(theme);
    break;
  }
  switch (additionaltheme) {
    case '1':
    $(additionalthemeDone).html(
      '<p>Міське та обласне методичне об\'єднання вчителів англійської мови</p><p><strong> First Steps in Reading</strong></p><p>Особливості навчання читанню англійською мовою на початковому етапі: від рецептивного досвіду до продуктивної діяльності</p><ul><li>Принцип усного випередження як передумова якісного оволодіння учнями технікою читання;</li><li>Етап цілісного розпізнавання графічного образу слова;</li><li>Етап формування навички звуко-буквених співвідношень та послідовність його реалізації;</li></ul>'
    );
    break;
    case '2':
    $(additionalthemeDone).html(
      '<p></p><p><strong>Your Next Move to the Lesson that Really Works</strong></p><p>Сучасний продуктивний урок англійської мови в середній школі: 6 необхідних елементів формування комунікативної компетентності учнів середніх класів.</p><ul><li>Комбінування різних видів діяльності та методів засвоєння знань для забезпечення  продуктивної  діяльності учнів на уроці англійської мови;</li><li>Діяльнісний  підхід до навчання: інтеракція  на уроці англійської мови;</li><li>Оцінка та аналіз виконання учнями комунікативного завдання;</li></ul>'
    );
    break;
    case '4':
    $(additionalthemeDone).html(
      '<p></p><p><strong>A 5-point Checklist that Every Teacher Should Tick off when Preparing Students for ZNO</strong></p><p>Успішна підготовка учнів до складання ЗНО з англійської мови.</p><ul><li>Поєднання навчання загальної англійської та підготовки до іспитів у старших класах;</li><li>Холістичний підхід до підготовки учнів до ЗНО;</li><li>Ефективні види діяльності на уроці англійської для якісного розвитку продуктивних навичок учнів;</li></ul>'
    );
    break;
    case '6':
    $(additionalthemeDone).html(
'<p><strong>External testing strategies: 200 points (практикум для старшокласників)</strong></p><p>Алгоритм підготовки учнів до складання ЗНО: частини «Читання» та «Використання мови»</p><ul><li>Як правильно виконувати екзаменаційні завдання з читання?</li><li>Алгоритм роботи з завданнями на  множинний вибір та заповнення пропусків (Використання мови).</li></ul>'
    );
    break;
    case '7':
    $(additionalthemeDone).html(
      '<p><strong>London Calling: Start Your Career with LCCI International Qualifications</strong></p><p>Особливості навчання читанню англійською мовою на початковому етапі: від рецептивного досвіду до продуктивної діяльності</p><p>There are so many international exams nowadays, so which one should our students choose? LCCI (London Chamber of Commerce and Industry International Qualifications) has increased dramatically in its demand recently, and its popularity has led to it being accepted by major international companies and universities. A look at the structure and task-types assessed in the LCCI set of exams for Business and Vocational English'
    );
    break;
    case '8':
    $(additionalthemeDone).html(
      '<p><strong>Growing Up with Grammar</strong></p><p>Методологія навчання граматики англійської мови у І-ІІ класах</p><ul><li>Послідовність та особливості введення нового граматичного матеріалу у початковій школі;</li><li>Імпліцитний та експліцитний підходи до навчання граматики;</li><li>Ігрові методи закріплення граматичного матеріалу.</li></ul>'
    );
    break;
    case '9':
    $(additionalthemeDone).html(
      '<p><strong>ZNO 2017 Countdown: Teacher’s Daily Practice Guide</strong></p><p>Максимально ефективна підготовка учнів до ЗНО з англійської мови в 2017 році: путівник для вчителя.</p><ul><li><strong>Частина «Читання»:<br></strong>типові проблеми та практичні поради з розвитку ефективних стратегій виконання типових екзаменаційних завдань з читання;</li><li><strong>Частина «Використання мови»:<br></strong>взаємозв’язок між належним знанням лексики та успішним складанням іспиту та шляхи покращення виконання учнями завдань на заповнення пропусків в тексті;</li><li><strong>Частина «Письмо»:<br></strong>алгоритм написання письмової роботи, що максимально відповідає критеріям оцінювання тестового завдання з розгорнутою відповіддю.</li></ul>'
    );
    break;
    default:
    $(additionalthemeDone).html(additionaltheme);
    break;
  }

  switch (manager) {
    case 'Анна Сосіна':
    $(managerDone).html(
'<p><img alt="Сосіна" src="http://elt.dinternal.com.ua/image/data/aboutus/sosyna.jpg" style="float: left; margin: 5px 10px; height: 172px; width: 120px;" /><strong>Анна Сосіна</strong></p><p>Спеціаліст з британської навчальної літератури</p><p>Тел: (050) 414-11-49</p>'
    );
    break;
    case 'Олена Берест':
    $(managerDone).html(
'<p><img alt="Берест" src="http://elt-centre.com.ua/image/data/aboutus/berest-2.jpg" style="float: left; margin: 5px 10px; height: 180px; width: 120px;" /><strong>Олена Берест</strong></p><p>Спеціаліст з британської навчальної літератури</p><p>Тел: (050) 415-24-31</p>'
    );
    break;
    case 'Леся Гриценко':
    $(managerDone).html(
'<p><img alt="Гриценко" src="http://elt-centre.com.ua/image/data/aboutus/grytsenko.jpg" style="width: 120px; height: 180px; float: left; margin: 5px 10px;" /><strong>Леся Гриценко</strong></p><p>Спеціаліст з британської навчальної літератури</p><p>Тел: (050) 358-41-48</p>'
    );
    break;
    case 'Оксана Коблай':
    $(managerDone).html(
'<p><img alt="Берест" src="http://elt.dinternal.com.ua/image/data/aboutus/koblai.jpg" style="float: left; margin: 5px 10px; height: 180px; width: 120px;" /><strong>Оксана Коблай</strong></p><p>Менеджер по роботі з регіонами</p><p>Тел: (050) 415-24-59</p>'
    );
    break;
    case 'Інна Цибульська':
    $(managerDone).html(
'<p><img alt="Цибульська" src="http://elt.dinternal.com.ua/image/data/aboutus/tsybulska.jpg" style="float: left; margin: 5px 10px; height: 180px; width: 120px;" /><strong>Інна Цибульська</strong></p><p>Спеціаліст з британської навчальної літератури</p><p>Тел: (050) 446-17-67</p>'
    );
    break;
    case 'Марина Сиченко':
    $(managerDone).html(
'<p><img alt="Сиченко" src="http://elt.dinternal.com.ua/image/data/aboutus/sychenko_m.jpg" style="float: left; margin: 5px 10px; height: 180px; width: 120px;" /><strong>Марина Сиченко</strong></p><p>Спеціаліст з британської навчальної літератури</p><p>Тел: (050) 415-24-57</p>'
    );
    break;
    case 'Альона Зарахович':
    $(managerDone).html(
      '<p><img alt="Зарахович" src="http://elt.dinternal.com.ua/image/data/aboutus/zarakhovich.jpg" style="float: left; margin: 5px 10px; height: 180px; width: 120px;" /><strong>Альона Зарахович</strong></p><p>- PTE and LCCI Country Manager.</p><p>Тел: (050)353-79-37</p>'
    );
    break;
    case 'Людмила Ковтун':
    $(managerDone).html(
      '<p><img alt="Ковтун" src="http://elt.dinternal.com.ua/image/data/kovtun-calendar.jpg" style="float: left; margin: 5px 10px; height: 180px; width: 120px;" /><strong>Людмила Ковтун</strong></p><p>- методист-консультант Міжнародного освітньо-методичного центру PEARSON-DINTERNAL у Східному регіоні.</p><p>(099) 763-16-21</p>'
    );
    break;
    case 'Ольга Козинець':
    $(managerDone).html(
      '<p><img alt="Козинець" src="http://elt.dinternal.com.ua/image/data/kozynets-calendar.jpg" style="float: left; margin: 5px 10px; height: 180px; width: 120px;" /><strong>Ольга Козинець</strong></p><p>- методист Міжнародного освітньо-методичного центру PEARSON-DINTERNAL.</p><p>(050) 301-17-61</p>'
    );
    break;
    default:
    $(managerDone).html(manager);
    break;
  }

    $(code).html(
      // information block
      '<div class="panel panel-success-calendar"><div class="panel-heading"><p class="panel-title"><strong>Місце та час проведення:</strong></p></div><div class="panel-body"><p><strong>' +
      place +
      '</strong>​</p>' +
      '<p>' +
      school +
      '</p>' +
      '<p>Початок: ' +
      time +
      '</p></div></div>' +
      // information block *
      '<div class="panel panel-primary-calendar"><div class="panel-heading"><p class="panel-title"><strong>Інформація про подію:</strong></p></div><div class="panel-body"><p>' +
      status +
      '</p><p>' +
      themeDone.innerHTML +
      '</p><p>&nbsp;</p>' +
      additionalthemeDone.innerHTML +
      '</div></div>' +
      // methodist block
      '<div class="panel panel-danger-calendar"><div class="panel-heading"><p class="panel-title"><strong>Проводить:</strong></p></div><div class="panel-body">' +
methodistDone.innerHTML +
      '</div></div>' +
      // methodist block *
      // manager block
      '<div class="panel panel-info-calendar"><div class="panel-heading"><p class="panel-title"><strong>З питань участі у заході:</strong></p></div><div class="panel-body">' +
      managerDone.innerHTML +
      '</div></div>'
      // manager block*

    );
    console.log(manager);
    console.log(managerDone.innerHTML);
    return code.innerHTML;
  }
