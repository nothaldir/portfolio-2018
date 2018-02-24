// @flow

new TypeIt('.type-it', {
  breakLines: false,
  speed: 70,
  nextStringDelay: 2000,
  lifeLike: false,
})

AOS.init()

const home = document.querySelector('.Home')
const header = document.querySelector('.Header')
const headerHeight = header.getBoundingClientRect().height
const homeHeight = home.getBoundingClientRect().height

window.onscroll = () => {
  if (window.pageYOffset > homeHeight - headerHeight) {
    header.classList.remove('fadeOutUp')
    header.classList.add('visible', 'fadeInDown')
  }
  if (window.pageYOffset < homeHeight - headerHeight) {
    header.classList.add('fadeOutUp')
  }
}
