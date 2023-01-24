import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

import { api } from '../lib/axios'

import { Checkbox } from './Checkbox'

interface HabitsListProps {
  date: Date
  onCompletedChange: (completed: number) => void
}

interface HabitsInfo {
  possibleHabits: Array<{ id: string; title: string; created_at: string }>
  completedHabits: string[]
}

async function getHabits(date: Date) {
  const { data } = await api.get<HabitsInfo>('day', {
    params: {
      date: date.toISOString(),
    },
  })

  return data
}

export function HabitsList({ date, onCompletedChange }: HabitsListProps) {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>()

  const isDateInPast = dayjs(date).endOf('day').isBefore(new Date())

  async function handleToggleHabit(habitId: string) {
    api.patch(`/habits/${habitId}/toggle`)

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

    onCompletedChange(completedHabits.length)
  }

  useEffect(() => {
    getHabits(date).then((data) => setHabitsInfo(data))
  }, [date])

  return (
    <div className="mt-6 flex flex-col gap-3">
      {habitsInfo?.possibleHabits.map((habit) => {
        return (
          <Checkbox
            key={habit.id}
            title={habit.title}
            disabled={isDateInPast}
            onCheckedChange={() => handleToggleHabit(habit.id)}
            checked={habitsInfo.completedHabits.includes(habit.id)}
          />
        )
      })}
    </div>
  )
}
