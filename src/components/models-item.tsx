import { RelogioUltraSVG } from './svg-components/relogio-ultra'

export function ModelsItem({ id }: { id: number }) {
  return (
    <div className="models-item" id={`model-${id}`}>
      <RelogioUltraSVG />
      <span className="models-tag">Novo</span>
      <h4 className="models-title">Apple Watch Series 8</h4>
      <p className="models-description">
        A partir de <strong>R$ 5.299</strong>
      </p>
    </div>
  )
}
