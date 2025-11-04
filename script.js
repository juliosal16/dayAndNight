const starMoon = document.querySelector('.starMoon')
const body = document.querySelector('body')
const button = document.querySelector('button')
const h1text = document.querySelector('.h1text')

function nightMoode() {
  const btnElemnt = document.querySelector('.switch');


  if (btnElemnt.innerText === 'DAY') {

    document.querySelector('.switch').innerHTML = 'NIGHT'
    starMoon.style.backgroundColor = "yellow";
    body.style.backgroundColor = "white"
    button.style.backgroundColor = 'black'
    button.style.color = 'white'



  } else if (btnElemnt.innerHTML === 'NIGHT') {
    document.querySelector('.switch').innerHTML = 'DAY'
    starMoon.style.backgroundColor = "white";
    body.style.transition = '2s'
    body.style.backgroundColor = "black";
    button.style.backgroundColor = 'white'
    button.style.color = 'black'



  }
}

function text() {
  if (h1text.innerHTML === 'DAY MODE') {
    document.querySelector('.h1text').innerHTML = 'NIGHT MODE'
    h1text.style.color = 'white'
  } else if (h1text.innerHTML === 'NIGHT MODE') {
    document.querySelector('.h1text').innerHTML = 'DAY MODE'
    h1text.style.color = 'black';
  }
}


