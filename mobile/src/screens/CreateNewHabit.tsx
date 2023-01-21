import { useState } from 'react'
import colors from 'tailwindcss/colors'
import { View, Text, ScrollView, TextInput } from 'react-native'

import { Checkbox } from '../components/Checkbox'
import { Button } from '../components/Button'
import { BackButton } from '../components/BackButton'

const weekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

export function CreateNewHabit() {
  const [toggledWeekDays, setToggledWeekDays] = useState<number[]>([])

  function handleToggleWeekDay(weekDayIndex: number) {
    if (toggledWeekDays.includes(weekDayIndex)) {
      setToggledWeekDays((oldState) =>
        oldState.filter((weekDay) => weekDay !== weekDayIndex)
      )
    } else {
      setToggledWeekDays((oldState) => [...oldState, weekDayIndex])
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-3xl">
          Criar hábito
        </Text>

        <Text className="mt-6 text-white font-semibold text-base">
          Qual seu comprometimento?
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-green-600"
          placeholder="ex.: exercícios, dormir bem, etc..."
          placeholderTextColor={colors.zinc[400]}
        />

        <Text className="font-semibold mt-4 mb-3 text-white text-base">
          Qual a recorrência?
        </Text>

        {weekDays.map((weekDay, index) => (
          <Checkbox
            key={`${weekDay}`}
            title={weekDay}
            checked={toggledWeekDays.includes(index)}
            onPress={() => handleToggleWeekDay(index)}
          />
        ))}

        <Button styleType="secondary">
          <Text className="font-semibold text-base text-white ml-2">
            Confirmar
          </Text>
        </Button>
      </ScrollView>
    </View>
  )
}
