const title = document.querySelector('h3')
const container = document.querySelector('.container')
const fn1 = () => {
  title.classList.add('active-title')
  container.style.boxShadow = '20px 15px 0 black'
}
const fn2 = () => {
  title.classList.remove('active-title')
  container.style.boxShadow = '7px 7px 0 black'
}

title.addEventListener('mouseover', fn1)
title.addEventListener('mouseout', fn2)
