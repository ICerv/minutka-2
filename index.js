/*
const nastartujMinutku = (e) => {
  e.preventDefault();
  let time = Number(document.querySelector('.time-input').value);

  const sekundyElm = document.querySelector('.alarm__seconds');
  const alarmElm = document.querySelector('.alarm');

  // pro opakované použití
  alarmElm.classList.remove('alarm--ring');

  sekundyElm.textContent = String(time);

  const odpocet = () => {
    if (time > 0) {
      time -= 1;
      sekundyElm.textContent = String(time);
    }
    if (time <= 0) {
      clearInterval(casovac);
      alarmElm.classList.add('alarm--ring');
      document.querySelector('audio').play();
    }
  };

  const casovac = setInterval(odpocet, 1000);
};

const formularElm = document.querySelector('.controls');
formularElm.addEventListener('submit', nastartujMinutku);

*/

/*
Vylepšete program naší kuchyňské minutky tak, aby zobrazovala nejen vteřiny, ale i minuty. Layout stránky je na to připraven. Nechejte uživatele zadat minuty, nikoliv vteřiny, a správně odpočítávejte čas až k nule.

Dejte pozor na správné formátování, kdy jednociferné hodnoty je zvykem zobrazovat s nulou na začátku. Vzpomeňte si, že na řetězcích máme metodu padStart, která nám s tímto může velmi pomoct.
*/
const nastartujMinutku = (e) => {
  e.preventDefault();
  let minutes = Number(document.querySelector('.time-input').value);
  let seconds = 0;

  const minutyElm = document.querySelector('.alarm__minutes');
  const sekundyElm = document.querySelector('.alarm__seconds');
  const alarmElm = document.querySelector('.alarm');

  // pro opakované použití
  alarmElm.classList.remove('alarm--ring');

  minutyElm.textContent = String(minutes) + ':';
  sekundyElm.textContent = String(seconds).padStart(2, '0');

  const odpocet = () => {
    if (minutes >= 0) {
      if (seconds > 0) {
        seconds -= 1;
      } else {
        minutes -= 1;
        seconds = 59;
      }
      minutyElm.textContent = String(minutes) + ':';
      sekundyElm.textContent = String(seconds).padStart(2, '0');
    }
    if (minutes <= 0 && seconds <= 0) {
      clearInterval(casovac);
      alarmElm.classList.add('alarm--ring');
      document.querySelector('audio').play();
    }
  };

  const casovac = setInterval(odpocet, 1000);
};

const formularElm = document.querySelector('.controls');
formularElm.addEventListener('submit', nastartujMinutku);