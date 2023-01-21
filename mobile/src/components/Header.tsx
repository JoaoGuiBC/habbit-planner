import { Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Button } from './Button'

import LogoImage from '../assets/logo.svg'

export function Header() {
  const { navigate } = useNavigation()

  function handleNavigate() {
    navigate('create-new-habit')
  }

  return (
    <View className="w-full flex-row items-center justify-between">
      <LogoImage />

      <Button onPress={handleNavigate}>
        <Text className="text-white ml-3 font-semibold text-base">Novo</Text>
      </Button>
    </View>
  )
}
