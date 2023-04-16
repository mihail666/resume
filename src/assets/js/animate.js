const showMenu = () => {
  const navMenu = document.getElementById('nav-menu')
  const navToggle = document.getElementById('nav-toggle')
  const navClose = document.getElementById('nav-close')
  /* MENU SHOW */
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      console.log('qwerqw')
      navMenu.classList.add('show-menu')
    })
  }
  /* MENU HIDDEN */
  if (navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
    })
  }
  /* REMOVE MENU MOBILE */
  const navLink = document.querySelectorAll('.nav__link')
  const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))
  /* CHANGE BACKGROUND HEADER */
  const scrollHeader = () => {
    const header = document.getElementById('header')
    scrollY >= 50
      ? header.classList.add('scroll-header')
      : header.classList.remove('scroll-header')
  }
  window.addEventListener('scroll', scrollHeader)
}

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

export {
  showMenu,
  scrollUp
}
