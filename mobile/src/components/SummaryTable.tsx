import { ScrollView, Text, View } from 'react-native'

import { DayHabit, daySize } from './DayHabit'
import { generateRangeBetweenDates } from '../utils/generate-range-between-dates'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const summaryDates = generateRangeBetweenDates()

export function SummaryTable() {
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
            return <DayHabit key={date.toString()} />
          })}
        </View>
      </ScrollView>
    </>
  )
}
