import colors from 'tailwindcss/colors'
import { Plus } from 'phosphor-react-native'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className="flex-row h-11 px-4 border border-violet-500 rounded-lg items-center"
      {...rest}
    >
      <Plus color={colors.purple[500]} size={20} />
      {children}
    </TouchableOpacity>
  )
}
