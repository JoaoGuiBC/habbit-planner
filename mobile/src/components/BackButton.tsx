import colors from 'tailwindcss/colors'
import { TouchableOpacity } from 'react-native'
import { ArrowLeft } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

export function BackButton() {
  const { goBack } = useNavigation()

  function handleGoBack() {
    goBack()
  }

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={handleGoBack}>
      <ArrowLeft size={32} color={colors.zinc[400]} />
    </TouchableOpacity>
  )
}
