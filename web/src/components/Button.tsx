import clsx from 'clsx'
import { Check, Plus } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: 'primary' | 'secondary'
}

export function Button({ styleType = 'primary', ...rest }: ButtonProps) {
  return (
    <button
      className={clsx(
        'rounded-lg flex items-center justify-center gap-3 font-semibold transition-all',
        {
          'border border-violet-500 px-6 py-4 hover:border-violet-300':
            styleType === 'primary',
          'mt-6 p-4 bg-green-600 hover:bg-green-500': styleType === 'secondary',
        }
      )}
      {...rest}
    >
      {styleType === 'primary' ? (
        <Plus size={20} className="text-violet-500" />
      ) : (
        <Check size={20} weight="bold" />
      )}
      Novo hábito
    </button>
  )
}
