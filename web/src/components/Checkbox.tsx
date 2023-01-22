import { Root, Indicator, CheckboxProps } from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import { Check } from 'phosphor-react'

interface CheckboxComponentProps extends CheckboxProps {
  title: string
  styleType?: 'primary' | 'secondary'
}

export function Checkbox({
  title,
  styleType = 'primary',
  ...rest
}: CheckboxComponentProps) {
  return (
    <Root className="flex items-center gap-3 group" {...rest}>
      <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
        <Indicator>
          <Check size={20} className="text-white" />
        </Indicator>
      </div>

      <span
        className={clsx('text-white leading-tight', {
          'font-semibold text-xl group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400':
            styleType === 'primary',
        })}
      >
        {title}
      </span>
    </Root>
  )
}
