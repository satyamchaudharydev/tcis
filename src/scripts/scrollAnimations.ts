import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from 'split-type'


gsap.registerPlugin(ScrollTrigger);

const practiceBookTitle = document.querySelector('[data-practice-book="practicebook"]')
const practiceBookLines = practiceBookTitle.querySelectorAll('[data-practice-line]')

// console.log('SplitText', SplitText)
gsap.from(practiceBookLines, {
  scrollTrigger: {
    trigger: practiceBookTitle,
    start: "top 80%",
    end: "top 50%",
  },
  width: 0,
  delay: 0.3,
  duration: 0.7,
  ease: "sine.inOut"
})

const title = practiceBookTitle?.querySelector('[data-practice-text]')
const text = new SplitType(title)

const titleCharacters = title?.querySelectorAll('.char')
gsap.from(titleCharacters, {
  scrollTrigger: {
    trigger: practiceBookTitle,
    start: "top 80%",
    end: "top 50%",
  },
  delay: 0,
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