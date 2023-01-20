import { Text, View } from 'react-native'

import LogoImage from '../assets/logo.svg'
import { Button } from './Button'

export function Header() {
  return (
    <View className="w-full flex-row items-center justify-between">
      <LogoImage />

      <Button>
        <Text className="text-white ml-3 font-semibold text-base">Novo</Text>
      </Button>
    </View>
  )
}
