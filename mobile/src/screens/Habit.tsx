import clsx from 'clsx'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { View, Text, ScrollView, Alert } from 'react-native'

import { api } from '../lib/axios'
import { generateProgressPercentage } from '../utils/generate-progress-percentage'

import { Loading } from '../components/Loading'
import { Checkbox } from '../components/Checkbox'
import { BackButton } from '../components/BackButton'
import { ProgressBar } from '../components/ProgressBar'
import { EmptyHabits } from '../components/EmptyHabits'

interface HabitParams {
  date: string
}

interface HabitsInfo {
  possibleHabits: Array<{ id: string; title: string; created_at: string }>
  completedHabits: string[]
}

export function Habit() {
  const [isLoading, setIsLoading] = useState(true)
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>()

  const percentageComplete = habitsInfo?.possibleHabits.length
    ? generateProgressPercentage(
        habitsInfo.possibleHabits.length,
        habitsInfo.completedHabits.length
      )
    : 0

  const route = useRoute()
  const { date } = route.params as HabitParams

  const parsedDate = dayjs(date)
  const dayOfWeek = parsedDate.format('dddd')
  const dayAndMonth = parsedDate.format('DD/MM')
  const isDateInPast = parsedDate.endOf('day').isBefore(new Date())

  async function getHabit() {
    try {
      const { data } = await api.get<HabitsInfo>('/day', {
        data: { date },
      })

      setHabitsInfo(data)
    } catch (error: any) {
      console.log(error.message)
      Alert.alert('Ops!', 'Não foi possivel carregar o hábito.')
    } finally {
      setIsLoading(false)
    }
  }

  async function handleToggleHabit(habitId: string) {
    try {
      api.patch(`/habits/${habitId}/toggle`)
    } catch (error: any) {
      console.log(error.message)
      Alert.alert('Ops!', 'Não foi possivel editar o hábito.')
    }

    const isHabitAlreadyCompleted =
      habitsInfo?.completedHabits.includes(habitId)

    let completedHabits: string[] = []

    if (isHabitAlreadyCompleted) {
      completedHabits = habitsInfo!.completedHabits.filter(
        (id) => id !== habitId
      )
    } else {
      completedHabits = [...habitsInfo!.completedHabits, habitId]
    }

    setHabitsInfo({
      possibleHabits: habitsInfo!.possibleHabits,
      completedHabits,
    })
  }

  useEffect(() => {
    getHabit()
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>

        <Text className="text-white font-extrabold text-3xl">
          {dayAndMonth}
        </Text>

        <ProgressBar progress={percentageComplete} />

        <View
          className={clsx('mt-6', {
            'opacity-50': isDateInPast,
          })}
        >
          {habitsInfo?.possibleHabits ? (
            habitsInfo.possibleHabits.map((habit) => {
              return (
                <Checkbox
                  key={habit.id}
                  title={habit.title}
                  disabled={isDateInPast}
                  onPress={() => handleToggleHabit(habit.id)}
                  checked={habitsInfo.completedHabits.includes(habit.id)}
                />
              )
            })
          ) : (
            <EmptyHabits />
          )}
        </View>

        {isDateInPast && (
          <Text className="text-white mt-10 text-center">
            Você não pode editar hábitos de uma data passada.
          </Text>
        )}
      </ScrollView>
    </View>
  )
}
