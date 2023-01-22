import clsx from 'clsx'
import dayjs from 'dayjs'
import * as Popover from '@radix-ui/react-popover'

import { Checkbox } from './Checkbox'
import { ProgressBar } from './ProgressBar'

interface HabitProps {
  date: Date
  amount?: number
  completed?: number
}

export function DayHabit({ date, completed = 0, amount = 0 }: HabitProps) {
  const percentageComplete =
    amount > 0 ? Math.round((completed / amount) * 100) : 0

  const dayAndMonth = dayjs(date).format('DD/MM')
  const dayOfWeek = dayjs(date).format('dddd')

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx('w-10 h-10 border-2 rounded-lg', {
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
        })}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            {dayAndMonth}
          </span>

          <ProgressBar progress={percentageComplete} />

          <div className="mt-6 flex flex-col gap-3">
            <Checkbox title="Sofrer" />
            <Checkbox title="Sofrer mais" />
            <Checkbox title="Sofrer mais ainda" />
          </div>

          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
