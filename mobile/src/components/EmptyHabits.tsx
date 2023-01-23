import { Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export function EmptyHabits() {
  const { navigate } = useNavigation()

  function handleGoToCreation() {
    navigate('create-new-habit')
  }

  return (
    <Text className="text-zinc-400 text-base">
      Você ainda não está monitorando nenhum hábito.{' '}
      <Text
        className="text-violet-400 text-base underline active:text-violet-500"
        onPress={handleGoToCreation}
      >
        Comece cadastrando um hábito.
      </Text>
    </Text>
  )
}
