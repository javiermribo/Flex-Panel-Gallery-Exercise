const panelsSelector = document.querySelectorAll('.panels');

const toggleOpen = e => {
  e.target.classList.toggle('open') //toggle añade o remueve una clase
}

const toggleActive = e => {
  if(e.propertyName.includes('flex')) {
    e.target.classList.toggle('open-active')
  }
}

panelsSelector.forEach(panel => panel.addEventListener('click', toggleOpen));
panelsSelector.forEach(panel => panel.addEventListener('transitionend', toggleActive));