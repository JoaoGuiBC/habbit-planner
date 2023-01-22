import {
  Dimensions,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import clsx from 'clsx'

import { generateProgressPercentage } from '../utils/generate-progress-percentage'
import dayjs from 'dayjs'

const numberOfWeekDays = 7
const screenHorizontalPadding = (32 * 2) / 5

export const dayMarginBetween = 8
export const daySize =
  Dimensions.get('screen').width / numberOfWeekDays -
  (screenHorizontalPadding + 5)

interface DayHabitProps extends TouchableOpacityProps {
  date: Date
  amount?: number
  completed?: number
}

export function DayHabit({
  date,
  amount = 0,
  completed = 0,
  ...rest
}: DayHabitProps) {
  const percentageComplete = generateProgressPercentage(amount, completed)

  const today = dayjs().startOf('day').toDate()
  const isCurrentDay = dayjs(date).isSame(today)

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={clsx('rounded-lg border-2 m-1', {
        'bg-zinc-900 border-2 border-zinc-800': percentageComplete === 0,
        'bg-violet-900 border-violet-700':
          percentageComplete > 0 && percentageComplete < 20,
        'bg-violet-800 border-violet-600':
          percentageComplete >= 20 && percentageComplete < 40,
        'bg-violet-700 border-violet-400':
          percentageComplete >= 40 && percentageComplete < 60,
        'bg-violet-600 border-violet-500':
          percentageComplete >= 60 && percentageComplete < 80,
        'bg-violet-500 border-violet-400': percentageComplete >= 80,
        'border-white border-4': isCurrentDay,
      })}
      style={{ width: daySize, height: daySize }}
      {...rest}
    />
  )
}
