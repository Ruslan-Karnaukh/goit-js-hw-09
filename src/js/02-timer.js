import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Report } from 'notiflix/build/notiflix-report-aio';


const refs = {
  text: document.querySelector("#datetime-picker"),
  start: document.querySelector("button[data-start]"),
  days: document.querySelector("span[data-days]"),
  hours: document.querySelector("span[data-hours]"),
  minutes: document.querySelector("span[data-minutes]"),
  seconds: document.querySelector("span[data-seconds]"),
}
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    const dataNow = new Date()
      if(selectedDates[0] - dataNow >= 0){
        refs.start.disabled = false
      }else{   
        refs.start.disabled = true
        Report.failure("We can't do this", "Choose future date please!", "Do true choose",);
      };
    },
  };
 const flatP = flatpickr(refs.text, options);

function convertMs(ms) {
   
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


refs.start.addEventListener('click', onTimerStart);

function onTimerStart() {
  const selectedDate = flatP.selectedDates[0];

  let timerId = setInterval(() => {
    const startTime = new Date();
    const countdown = selectedDate - startTime;
    refs.start.disabled = true;

    if (countdown < 0) {
      clearInterval(timerId);
      return;
    }
    timerFormat(convertMs(countdown));
  }, 1000);
}
function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}


function timerFormat({ days, hours, minutes, seconds }) {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}
