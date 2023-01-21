import clsx from 'clsx'
import colors from 'tailwindcss/colors'
import { Check, Plus } from 'phosphor-react-native'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  styleType?: 'primary' | 'secondary'
}

export function Button({
  styleType = 'primary',
  children,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className={clsx('flex-row items-center', {
        'h-11 px-4 border border-violet-500 rounded-lg':
          styleType === 'primary',
        'w-full h-14 justify-center bg-green-600 rounded-md mt-6':
          styleType === 'secondary',
      })}
      {...rest}
    >
      {styleType === 'primary' ? (
        <Plus color={colors.purple[500]} size={20} />
      ) : (
        <Check color={colors.white} size={20} weight="bold" />
      )}
      {children}
    </TouchableOpacity>
  )
}
