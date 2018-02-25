// @flow

// AnimateScroll.min.js
// Sunmock Yang Nov. 2015
/* eslint-disable */
function animateScroll(t,n,i,e,a,r){e=e?e:0;var o=document.documentElement,s=o.clientHeight,u="scrollMaxY"in window?window.scrollMaxY:o.scrollHeight-s,c=window.pageYOffset,l=c,h=isNaN(t)?t.getBoundingClientRect():0;"center"===a?(l+=isNaN(t)?h.top+h.height/2:t,l-=s/2,l-=e):"bottom"===a?(l+=h.bottom||t,l-=s,l+=e):(l+=h.top||t,l-=e),l=Math.max(Math.min(u,l),0);var d=l-c,f={targetY:l,deltaY:d,duration:n?n:0,easing:i in animateScroll.Easing?animateScroll.Easing[i]:animateScroll.Easing.linear,onFinish:r,startTime:Date.now(),lastY:c,step:animateScroll.step};window.requestAnimationFrame(f.step.bind(f))}animateScroll.Easing={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return.5>t?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return.5>t?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t}},animateScroll.step=function(){if(this.lastY!==window.pageYOffset&&this.onFinish)return void this.onFinish();var t=Math.min((Date.now()-this.startTime)/this.duration,1),n=this.targetY-(1-this.easing(t))*this.deltaY;window.scrollTo(window.scrollX,n),1!==t?(this.lastY=window.pageYOffset,window.requestAnimationFrame(this.step.bind(this))):this.onFinish&&this.onFinish()};
/* eslint-enable */

function homeAnimations() {
  document.querySelector('.Home-next a i').classList.add('bounce')
}

function homeTyper() {
  new TypeIt('.type-it', { // eslint-disable-line
    breakLines: false,
    speed: 70,
    nextStringDelay: 2000,
    lifeLike: false,
    callback: () => {
      homeAnimations()
    },
  })
}

function appearAnimations() {
  AOS.init() // eslint-disable-line
}

function scrollAnimations() {
  const scrollLinks = document.querySelectorAll('.animate-scroll')
  Array.from(scrollLinks).forEach(link => link.addEventListener('click', () => {
    const scrollTarget = document.querySelector(`${link.getAttribute('data-scroll')}`)
    animateScroll(scrollTarget, 1000, 'easeInOutQuint', 130, top)
  }))
}

function headerFade() {
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
}


document.addEventListener('DOMContentLoaded', () => {
  scrollAnimations()
  appearAnimations()
  headerFade()
  homeTyper()
  console.log('Sorry, no easter 🥚 here ;)') // eslint-disable-line
})
