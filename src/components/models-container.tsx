'use client'

import { modelsContainerAnimation } from '@/hooks/models-container-animation'
import { ModelsItem } from './models-item'
import { useLayoutEffect } from 'react'

export function ModelsContainer() {
  const arrayList = [1, 2, 3]

  useLayoutEffect(() => {
    modelsContainerAnimation()
  }, [])

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <h2 className="font-semibold text2xl">
        Qual é o Apple Watch ideal para você?
      </h2>
      <div
        className="flex gap-5 items-center justify-center p-4"
        id="models-content"
      >
        {arrayList.map((id, index) => (
          <ModelsItem key={index} id={id} />
        ))}
      </div>
    </section>
  )
}
