import { Dimensions, TouchableOpacity } from 'react-native'

const numberOfWeekDays = 7
const screenHorizontalPadding = (32 * 2) / 5

export const dayMarginBetween = 8
export const daySize =
  Dimensions.get('screen').width / numberOfWeekDays -
  (screenHorizontalPadding + 5)

export function DayHabit() {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
      style={{ width: daySize, height: daySize }}
    />
  )
}
