import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from 'split-type'


gsap.registerPlugin(ScrollTrigger);


const practiceBookTitles = document.querySelectorAll('[data-practice-book]')

console.log('practiceBookTitles...', practiceBookTitles)

practiceBookTitles.forEach((practiceBookTitle) => {
  const practiceBookLines = practiceBookTitle.querySelectorAll('[data-practice-line]')
  const delay = practiceBookTitle.getAttribute('data-delay') || 0

  const targetSelector = practiceBookTitle.getAttribute('data-target')
  const target = targetSelector ? document.querySelector(targetSelector) : practiceBookTitle

  gsap.from(practiceBookLines, {
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
      end: "top 50%",
      toggleActions: "restart none none reset",
    },
    width: 0,
    delay: Number(delay) + 0.3,
    duration: 0.7,
    ease: "sine.inOut"
  })
  const title = practiceBookTitle?.querySelector('[data-practice-text]')
  const text = new SplitType(title)
  
  const titleCharacters = title?.querySelectorAll('.char')
  gsap.from(titleCharacters, {
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
      end: "top 50%",
      toggleActions: "restart none none reset",
    },
    delay: Number(delay),
    opacity: 0,
    y: (index) => {
      return index % 2 === 0 ? 5 : -5
    },
    x: (index) => {
      return index % 2 === 0 ? 10 : -10
    },
    stagger: 0.04,
    duration: 0.5,
    ease: "sine.inOut"
  })
})

const lines = document.querySelectorAll('[data-lines]')

lines.forEach(line => {
  const text = new SplitType(line, { types: 'lines' })
  const textLineNodes = line?.querySelectorAll('.line')
  const delay = Number(line.getAttribute('data-delay') || 0)
  const targetSelector = line.getAttribute('data-target')
  const target = targetSelector ? document.querySelector(targetSelector) : line
  gsap.from(textLineNodes, {
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
      end: "top 50%",
      toggleActions: "restart none none reset",
    },
    y: 50,
    opacity: 0,
    delay: delay,
    duration: 0.5,
    stagger: 0.07
  })
})

const texts = document.querySelectorAll('[data-text]')

texts.forEach(text => {
  const split = new SplitType(text)
  const textCharacters = text?.querySelectorAll('.char')
  const delay = Number(text.getAttribute('data-delay') || 0)
  const targetSelector = text.getAttribute('data-target')
  const target = targetSelector ? document.querySelector(targetSelector) : text
  gsap.from(textCharacters, {
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
      end: "top 50%",
      toggleActions: "restart none none reset",
    },
    delay: Number(delay),
    opacity: 0,
    y: (index) => {
      return index % 2 === 0 ? 5 : -5
    },
    x: (index) => {
      return index % 2 === 0 ? 10 : -10
    },
    stagger: 0.04,
    duration: 0.5,
    ease: "sine.inOut"
  })
})


// other gsap elements 
const gsapElements = document.querySelectorAll('[data-gsap]')
gsapElements.forEach(gsapElement => {
  const delay = Number(gsapElement.getAttribute('data-delay') || 0)
  const targetSelector = gsapElement.getAttribute('data-target')
  const target = targetSelector ? document.querySelector(targetSelector) : gsapElement
  const y = Number(gsapElement.getAttribute('data-y') || 0)
  const duration = Number(gsapElement.getAttribute('data-duration') || 0.5)

  gsap.from(gsapElement, {
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
      end: "top 50%",
      toggleActions: "restart none none reset",
    },
    y,
    opacity: 0,
    delay: delay,
    duration,
  })
})


const mainLogo = document.querySelector('[data-main-logo]')

// pin the logo to the top of the screen
gsap.to(mainLogo, {
  scrollTrigger: {
    trigger: mainLogo,
    start: "0% top",
    end: "bottom -99999",
    pin: true,
    scrub: true,
  },
})

gsap.to(mainLogo, {
  scrollTrigger: {
    trigger: mainLogo,
    start: "bottom 90%",
    end: "bottom 10%",
    toggleActions: "restart none none reset",
    scrub: true,
  },
  scale: 0.7,
  x: -40,
})



const maskScrollXElements =  document.querySelectorAll('[data-mask-scroll-x]')


let scrollTimeout = null
// maskScrollXElements.forEach((maskScrollX) => {
//   maskScrollX.addEventListener('scroll', () => {
//     clearTimeout(scrollTimeout)
//     maskScrollX.classList.add('bg-red-200')
//     scrollTimeout = setTimeout(() => {
//       console.log('removing')
//       maskScrollX.classList.remove('bg-red-200')
//     }, 500)
//   })
// })

// maskScrollXElements.forEach((maskScrollX) => {
//   gsap.to(maskScrollX, {
//     scrollTrigger: {
//       scroller: maskScrollX,
//       trigger: maskScrollX.children[0],
//       start: "30% 20%",
//       end: "90% 80%",
//       markers: true,
//       horizontal: true,
//     },
//     duration: 0.4,
//     onStart: (...args) => {
//       console.log('on start...')
//     },
//     onReverseComplete: (...args) => {
//       console.log('reverse complete...')
//     },
//     onComplete: (...args) => {
//       console.log('complete...')
//     },
//     onRepeat: (...args) => {
//       console.log('repeat...')
//     },
//     onInterrupt: (...args) => {
//       console.log('interrupt...')
//     }
//   })
// })