import Notiflix from 'notiflix';


const form = document.querySelector(".form")
const button = document.querySelector("button")

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay)
  })
}

form.addEventListener("click", handClickSubmit);

function handClickSubmit(event){

  event.preventDefault()

const {delay, step, amount} = event.currentTarget.elements;


if(event.target.tagName === "BUTTON"){

    for(let i = 0; i < amount.value; i += 1){
      let position = i + 1;
      const delays = Number(delay.value) + step.value * i;

      createPromise(position, delays)  
      .then(({ position, delay }) => {
       Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
     })
     .catch(({ position, delay }) => {
       Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
     });
  }
  }   
}
