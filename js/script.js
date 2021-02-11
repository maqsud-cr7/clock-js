// document - это вся html-страница
// document.querySelector("селектор") - подключает к одному тегу по имени селектора
// возвращает тег в виде объекта
// console.log(typeof document.querySelector(".s"));

const sec = document.querySelector(".s"); // подключение к секундной стрелке
const min = document.querySelector(".m"); // подключение к минутной стрелке
const hours = document.querySelector(".h"); // подключение к часовой стрелке
const hourNum = document.querySelector(".hours"); // подключение к цифровым часам
const minNum = document.querySelector(".minutes"); // подключение к цифровым минутам

function clock() {
    // new Date - создаёт экземпляр Date, возвоазает текущее время и дату
    let time = new Date;
    // .getSeconds() - метод возвращает секунды 
    // .getMinutes() - метод возвращает минуты
    // .getHours() - метод возвращает часы
    // console.log(time.getSeconds());
    let second = time.getSeconds() * 6;
    let minute = time.getMinutes() * 6;
    let hour = time.getHours() * 30;
    // console.dir(hourNum);
    sec.style.transform = `rotate(${second}deg)`;
    min.style.transform = `rotate(${minute}deg)`;
    hours.style.transform = `rotate(${hour}deg)`;
    hourNum.innerHTML = time.getHours() < 10 ? "0" +time.getHours() : time.getHours();
    minNum.innerHTML = time.getMinutes() < 10 ? "0" +time.getMinutes() : time.getMinutes();
    setTimeout(() => { clock() }, 1000);
}
clock()

// рекурсия - когда функция вызывает саму себя
/* let i = 0;
function rec() {
    console.log(i++);
    if (i < 5) {
        rec()
    }
}
rec() */

// .querySelectorAll('селектор') - подключение к нескольким тегам на странице
const tabLinks = document.querySelectorAll('.tabsItem'); // подключаемся ко всем li
const tabContents = document.querySelectorAll('.tabsContentItem'); // подключаемся ко всем табам

for (let i = 0; i < tabLinks.length; i++) {
    console.dir(tabLinks[i]);
    // HTMLelement.addEventListener("событие", функция) - добавляет к событию слушателя
    tabLinks[i].addEventListener("click", function (event) {
        event.preventDefault() // отменяет действие по умолчанию
        // HTMLelement.classList.add("класс") - добавляет класс к тегу
        // HTMLelement.classList.remove("класс") - удаляет класс к тегу
        // HTMLelement.classList.contains("класс") - проверяет наличие класса у тега
        for (let x = 0; x < tabLinks.length; x++) {
            tabLinks[x].classList.remove("active");          
            tabContents[x].classList.remove("active");          
        }
        this.classList.add("active")
        tabContents[i].classList.add("active")
    })

}

// Секундомер

const tabsItem = document.querySelectorAll(".tabsItem"); // подключаемся к tabsItem
const tabsContentItem = document.querySelectorAll(".tabsContentItem"); // подключаемся к tabsContentItem

// цикл который удаляет и затем добавляет нужные active
for (let i = 0; i < tabsItem.length; i++) {
  tabsItem[i].addEventListener("click", function () {
    for (let y = 0; y < tabsItem.length; y++) {
      tabsItem[y].classList.remove('active')
      tabsContentItem[y].classList.remove('active')
    }
    tabsItem[i].classList.add("active");
    tabsContentItem[i].classList.add("active");
  });
}

const tabsLink = document.querySelectorAll(".tabsLink"); // подключаемся к секундомеру 
const tabsLink__span = document.querySelectorAll(".tabsLink__span"); // подключаемся к красной точке которая сигнализирует запуск секундомкра
const stopwatch__btn = document.querySelector(".stopwatch__btn"); // подключаемся к кнопке запуска 
const stopwatch__hours = document.querySelector(".stopwatch__hours"); // подключаемся к часам секундомера
const stopwatch__minutes = document.querySelector(".stopwatch__minutes"); // подключаемся к минутам секундомера
const stopwatch__seconds = document.querySelector(".stopwatch__seconds"); // подключаемся к секундам секундомера


for (let i = 0; i < tabsContentItem.length; i++) {
  tabsContentItem[i].addEventListener("click", function () {
    for (let y = 0; y < tabsLink__span.length; y++) {
      if (i == 1) {
        tabsLink__span[y].classList.add("active")
        stopwatch__btn.innerHTML = 'stop';
        stopwatch__start()
        i++
      } else if (i == 2) {
        tabsLink__span[y].classList.add("active_clear")
        stopwatch__btn.innerHTML = 'clear';
        clearTimeout(interval)
        i++
      } else if (i == 3) {
        stopwatch__btn.innerHTML = 'start'
        stopwatch__seconds.innerHTML = 0;
        stopwatch__minutes.innerHTML = 0;
        stopwatch__hours.innerHTML = 0;
        tabsLink__span[y].classList.remove("active")
        tabsLink__span[y].classList.remove("active_clear")
        i = 0
        i++
      }
    }
  })
}

function stopwatch__start() {
  stopwatch__seconds.innerHTML++;
  if (stopwatch__seconds.innerHTML < 10) {
    stopwatch__seconds.innerHTML = 0 + stopwatch__seconds.innerHTML;
  }
  else if (stopwatch__seconds.innerHTML == 60) {
    stopwatch__seconds.innerHTML = 0;
    stopwatch__minutes.innerHTML++;
    if (stopwatch__minutes.innerHTML < 10) {
      stopwatch__minutes.innerHTML = 0 + stopwatch__minutes.innerHTML;
    }

  } else if (stopwatch__minutes.innerHTML == 60) {
    stopwatch__minutes.innerHTML = 0;
    stopwatch__hours.innerHTML++
    if (stopwatch__hours.innerHTML < 10) {
      stopwatch__hours.innerHTML = 0 + stopwatch__hours.innerHTML;
    }
  }

  interval = setTimeout(() => stopwatch__start(), 1000);
}