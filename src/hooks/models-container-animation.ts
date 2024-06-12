import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

export function modelsContainerAnimation() {
  gsap.registerPlugin(ScrollTrigger)
  gsap.context(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.models-item',
          // markers: true,
          scrub: true,
          start: 'top 800px',
          end: 'bottom 820px',
        },
      })
      .fromTo(
        '#model-1',
        {
          opacity: 0,
          y: 160,
        },
        {
          opacity: 100,
          y: 0,
        },
      )
      .fromTo(
        '#model-2',
        {
          opacity: 0,
          y: 160,
        },
        {
          opacity: 100,
          y: 0,
        },
      )
      .fromTo(
        '#model-3',
        {
          opacity: 0,
          y: 160,
        },
        {
          opacity: 100,
          y: 0,
        },
      )
  }, '#models-content')

  return () => gsap.killTweensOf('.models-item')
}
