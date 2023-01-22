import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

import { api } from '../lib/axios'
import { generateRangeBetweenDates } from '../utils/generate-range-between-dates'

import { DayHabit } from './DayHabit'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const summaryDates = generateRangeBetweenDates()

interface SummaryResponse {
  id: string
  date: string
  completed: number
  amount: number
}

async function getSummary() {
  const { data } = await api.get<SummaryResponse[]>('summary')

  return data
}

export function SummaryTable() {
  const [summary, setSummary] = useState<SummaryResponse[]>([])

  useEffect(() => {
    getSummary().then((data) => setSummary(data))
  }, [])

  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, index) => (
          <div
            key={`${weekDay}--${index}`}
            className="text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center"
          >
            {weekDay}
          </div>
        ))}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((summaryDate) => {
          const dayInSummary = summary.find((day) => {
            return dayjs(summaryDate).isSame(day.date, 'day')
          })

          return (
            <DayHabit
              key={summaryDate.toString()}
              date={summaryDate}
              amount={dayInSummary?.amount}
              completed={dayInSummary?.completed}
            />
          )
        })}
      </div>
    </div>
  )
}
