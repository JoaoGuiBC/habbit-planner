import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter'
import { Text, View, StatusBar } from 'react-native'

import { Loading } from './src/components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <View style={{ backgroundColor: '#09090A' }}>
      <Text style={{ color: '#FFFFFF', fontFamily: 'Inter_800ExtraBold' }}>
        Hello World
      </Text>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
    </View>
  )
}
