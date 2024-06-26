import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);

function manageLoading(callback, imageElementIds) {
  const loaderShowTimeMin = 1500; // Minimum loader display time in milliseconds
  const loaderShowTimeMax = 5000; // Maximum loader display time in milliseconds

  let startTime = Date.now();

  // Show the loader

  // Promise to wait for all fonts to load
  const fontsLoadPromise = document.fonts.ready

  // Promise to wait for all specified image elements to load
  const imagesLoadPromise = Promise.all(imageElementIds.map(id => {
      return new Promise((resolve) => {
          const img = document.getElementById(id);
          if (!img) {
              console.error(`Image with ID ${id} not found.`);
              resolve(); // Resolve to not block the other images
              return;
          }
          if (img.complete && img.naturalHeight !== 0) {
            resolve();
          } else {
              img.onload = () => {
                  resolve();
              };
              img.onerror = () => {
                  console.error(`Error loading image with ID ${id}.`);
                  resolve(); // Resolve on error to continue with other processes
              };
          }
      });
  }));

  // Promise to enforce the minimum display time of the loader
  const minTimePromise = new Promise(resolve => {
      setTimeout(() => {
          resolve();
      }, loaderShowTimeMin);
  });

  // Promise to handle the maximum waiting time for images
  const maxTimePromise = new Promise(resolve => {
      setTimeout(() => {
          resolve();
      }, loaderShowTimeMax);
  });

  // Combining promises
  Promise.all([fontsLoadPromise, minTimePromise, Promise.race([imagesLoadPromise, maxTimePromise])]).then(() => {
      callback();
  });
}


function main()  {
  document.querySelector('html')?.classList.remove('overflow-hidden')

  document.getElementById('page-loader').style.opacity = '0';
  document.getElementById('page-loader').style.pointerEvents = 'none';

  const practiceBookTitles = document.querySelectorAll('[data-practice-book]')
  
  
  practiceBookTitles.forEach((practiceBookTitle) => {
    const practiceBookLines = practiceBookTitle.querySelectorAll('[data-practice-line]')
    const delay = practiceBookTitle.getAttribute('data-delay') || 0
  
    const targetSelector = practiceBookTitle.getAttribute('data-target')
    const target = targetSelector ? document.querySelector(targetSelector) : practiceBookTitle
    const start = practiceBookTitle.getAttribute('data-start') || "top 80%"
    const end = practiceBookTitle.getAttribute('data-end') || "top 50%"
  
    gsap.from(practiceBookLines, {
      scrollTrigger: {
        trigger: target,
        start,
        end,
        toggleActions: "play none none reverse",
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
        start,
        end,
        toggleActions: "play none none reverse",
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
    const start = line.getAttribute('data-start') || "top 80%"
    const end = line.getAttribute('data-end') || "top 50%"
    gsap.from(textLineNodes, {
      scrollTrigger: {
        trigger: target,
        start,
        end,
        toggleActions: "play none none reverse",
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
    const start = text.getAttribute('data-start') || "top 80%"
    const end = text.getAttribute('data-end') || "top 50%"
    gsap.from(textCharacters, {
      scrollTrigger: {
        trigger: target,
        start,
        end,
        toggleActions: "play none none reverse",
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
    const start = gsapElement.getAttribute('data-start') || "top 80%"
    const end = gsapElement.getAttribute('data-end') || "top 50%"
  
    gsap.from(gsapElement, {
      scrollTrigger: {
        trigger: target,
        start: start,
        end: end,
        toggleActions: "play none none reverse",
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
      start: "bottom 25%",
      end: "bottom 10%",
      toggleActions: "play none none reverse",
      scrub: true,
    },
    scale: 0.8,
    x: -20,
  })
  
  gsap.to(mainLogo?.querySelector('[data-logo-main]'), {
    scrollTrigger: {
      trigger: mainLogo,
      start: "bottom 25%",
      end: "bottom 10%",
      toggleActions: "play none none reverse",
      scrub: true,
    },
    opacity: 0,
  })
  
  gsap.to(mainLogo?.querySelector('[data-logo-colored]'), {
    scrollTrigger: {
      trigger: mainLogo,
      start: "bottom 25%",
      end: "bottom 10%",
      toggleActions: "play none none reverse",
      scrub: true,
    },
    opacity: 1,
  })
  gsap.to(mainLogo?.querySelector('[data-logo-colored]'), {
    scrollTrigger: {
      trigger: mainLogo,
      start: "bottom 25%",
      end: "bottom 10%",
      toggleActions: "play none none reverse",
      scrub: true,
    },
    opacity: 1,
  })
  gsap.to(document?.querySelector('[data-hero-text]'), {
    scrollTrigger: {
      trigger: mainLogo,
      start: "bottom 25%",
      end: "bottom 10%",
      toggleActions: "play none none reverse",
      scrub: true,
    },
    opacity: 0,
    y: -90,
  })
}  




if (window.innerWidth > 768) {
  manageLoading(() => {
    main()
  }, ['hero-slides-desktop-0', 'hero-slides-desktop-1', 'hero-slides-desktop-2', 'hero-slides-desktop-3', 'hero-slides-desktop-4']); // Example IDs
} else {
  manageLoading(() => {
    main()
  }, ['hero-slides-mobile-0', 'hero-slides-mobile-1', 'hero-slides-mobile-2', 'hero-slides-mobile-3', 'hero-slides-mobile-4']);
}  

