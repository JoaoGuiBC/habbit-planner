import colors from 'tailwindcss/colors'
import { Check } from 'phosphor-react-native'
import { TouchableProps } from 'react-native-svg'
import { TouchableOpacity, View, Text } from 'react-native'

interface CheckboxProps extends TouchableProps {
  title: string
  checked?: boolean
}

export function Checkbox({ title, checked, ...rest }: CheckboxProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className="flex-row mb-2 items-center"
      {...rest}
    >
      {checked ? (
        <View className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center">
          <Check size={20} color={colors.white} />
        </View>
      ) : (
        <View className="h-8 w-8 bg-zinc-900 rounded-lg" />
      )}

      <Text className="text-white ml-3">{title}</Text>
    </TouchableOpacity>
  )
}
