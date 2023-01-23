import clsx from 'clsx'
import dayjs from 'dayjs'
import * as Popover from '@radix-ui/react-popover'

import { HabitsList } from './HabitsList'
import { ProgressBar } from './ProgressBar'
import { useState } from 'react'

interface HabitProps {
  date: Date
  amount?: number
  initiallyCompleted?: number
}

export function DayHabit({
  date,
  initiallyCompleted = 0,
  amount = 0,
}: HabitProps) {
  const [completed, setCompleted] = useState(initiallyCompleted)

  const percentageComplete =
    amount > 0 ? Math.round((completed / amount) * 100) : 0

  const dayAndMonth = dayjs(date).format('DD/MM')
  const dayOfWeek = dayjs(date).format('dddd')

  function handleToggleHabit(completed: number) {
    setCompleted(completed)
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          'w-10 h-10 border-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background',
          {
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
          }
        )}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            {dayAndMonth}
          </span>

          <ProgressBar progress={percentageComplete} />

          <HabitsList date={date} onCompletedChange={handleToggleHabit} />

          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
