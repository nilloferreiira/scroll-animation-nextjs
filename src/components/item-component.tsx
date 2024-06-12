export function ItemComponent({ name }: { name: string }) {
  return (
    <div className="w-4/5 bg-zinc-900 h-96 p-2 text-center mb-10">
      <h1>{name}</h1>
    </div>
  )
}
