import { Plus } from 'phosphor-react'

export function Button() {
  return (
    <button
      type="button"
      className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 transition-colors"
    >
      <Plus size={20} className="text-violet-500" />
      Novo hábito
    </button>
  )
}
