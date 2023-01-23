import colors from 'tailwindcss/colors'
import { Check } from 'phosphor-react-native'
import { TouchableProps } from 'react-native-svg'
import { TouchableOpacity, View, Text } from 'react-native'
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated'

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
        <Animated.View
          className="h-8 w-8 bg-green-500 rounded-lg items-center justify-center"
          entering={ZoomIn}
          exiting={ZoomOut}
        >
          <Check size={20} color={colors.white} />
        </Animated.View>
      ) : (
        <View className="h-8 w-8 bg-zinc-900 rounded-lg" />
      )}

      <Text className="text-white ml-3 font-semibold">{title}</Text>
    </TouchableOpacity>
  )
}
