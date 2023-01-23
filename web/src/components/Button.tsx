import clsx from 'clsx'
import { Check, Plus } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  styleType?: 'primary' | 'secondary'
}

export function Button({ title, styleType = 'primary', ...rest }: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-lg flex items-center justify-center gap-3 font-semibold transition-all',
        {
          'border border-violet-500 px-6 py-4 hover:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background':
            styleType === 'primary',
          'mt-6 p-4 bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-zinc-900':
            styleType === 'secondary',
        }
      )}
      {...rest}
    >
      {styleType === 'primary' ? (
        <Plus size={20} className="text-violet-500" />
      ) : (
        <Check size={20} weight="bold" />
      )}
      {title}
    </button>
  )
}
