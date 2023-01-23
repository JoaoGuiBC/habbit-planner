import dayjs from 'dayjs'
import { useState, useCallback } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { api } from '../lib/axios'
import { generateRangeBetweenDates } from '../utils/generate-range-between-dates'

import { Loading } from './Loading'
import { DayHabit, daySize } from './DayHabit'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const summaryDates = generateRangeBetweenDates()

interface SummaryResponse {
  id: string
  date: string
  completed: number
  amount: number
}

export function SummaryTable() {
  const [isLoading, setIsLoading] = useState(true)
  const [summary, setSummary] = useState<SummaryResponse[]>([])

  const { navigate } = useNavigation()

  function handleGoToHabit(date: string) {
    navigate('habit', { date })
  }

  async function getSummary() {
    try {
      setIsLoading(true)

      const { data } = await api.get<SummaryResponse[]>('/summary')
      setSummary(data)
    } catch (error: any) {
      console.log(error.message)
      Alert.alert('Ops!', 'Não foi possivel carregar o sumário.')
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      getSummary()
    }, [])
  )

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, index) => {
          return (
            <Text
              key={`${weekDay}--${index}`}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
              style={{ width: daySize }}
            >
              {weekDay}
            </Text>
          )
        })}
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="flex-row flex-wrap">
          {summaryDates.map((date) => {
            const dayInSummary = summary.find((day) => {
              return dayjs(date).isSame(day.date, 'day')
            })

            return (
              <DayHabit
                key={date.toString()}
                date={date}
                amount={dayInSummary?.amount}
                completed={dayInSummary?.completed}
                onPress={() => handleGoToHabit(date.toISOString())}
              />
            )
          })}
        </View>
      </ScrollView>
    </>
  )
}
