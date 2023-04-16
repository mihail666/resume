import ScrollReveal from 'scrollreveal'
const initScrollReveal = () => {
  const sr = ScrollReveal({
    top: '60px',
    distance: '100px',
    durations: 2500,
    delay: 400
  })

  sr.reveal('.home__title')
  sr.reveal('.home__subtitle', { delay: 500 })
  sr.reveal('.home__img', { delay: 500 })
  sr.reveal('.home__data', { delay: 900, origin: 'bottom' })
  sr.reveal('.home-group', { delay: 1000, origin: 'bottom' })
  sr.reveal('.home__card-btn', { delay: 1100, origin: 'bottom' })
  sr.reveal('.about__group, .offer__data', { origin: 'left' })
  sr.reveal('.about__data, .offer__img', { origin: 'right' })
  sr.reveal('.hard-skils__container, .swiper', { delay: 600, origin: 'bottom' })
  sr.reveal('.hard-skils__data, .soft-skils__data', { interval: 300 })
  sr.reveal('.logos__content, .footer__content', { interval: 100 })
}
export {
  initScrollReveal
}
