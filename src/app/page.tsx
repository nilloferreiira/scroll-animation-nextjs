'use client'

import { ItemComponent } from '@/components/item-component'
import { ModelsContainer } from '@/components/models-container'
import { RelogioUltraSVG } from '@/components/svg-components/relogio-ultra'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'

export default function Home() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('#item-content', {
      x: 0,
      opacity: 100,
      rotate: '0deg',
      scrollTrigger: {
        trigger: '#trigger',
        // markers: true,
        scrub: true,
        start: 'top 480px',
        end: 'bottom 580px',
      },
    })

    return () => gsap.killTweensOf('#item-content')
  }, [])

  return (
    <div className="w-full flex flex-col mx-auto items-center justify-center !scroll-smooth">
      <nav className="bg-zinc-900 mx-auto w-4/5 mt-2 mb-10">
        <ul className="flex items-center justify-center gap-5 p-2 bg-black text-center">
          <li className="bg-zinc-900 w-1/5">
            <a href="#trigger">Novo Lançamento</a>
          </li>
          <li className="bg-zinc-900 w-1/5">
            <a href="#model-3">Todos os relogios</a>
          </li>
        </ul>
      </nav>

      <ItemComponent name={'item 1'} />
      <ItemComponent name={'item 2'} />

      <section className="mb-10" id="trigger">
        <div
          className="opacity-0 -translate-x-[700px] rotate-180"
          id="item-content"
        >
          <RelogioUltraSVG />
        </div>
      </section>
      <ItemComponent name={'item 3'} />
      <ModelsContainer />

      <ItemComponent name={'item 4'} />
    </div>
  )
}
