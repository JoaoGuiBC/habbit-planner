import { DayHabit } from './DayHabit'

import { generateRangeBetweenDates } from '../utils/generate-range-between-dates'

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const summaryDates = generateRangeBetweenDates()

export function SummaryTable() {
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
          return (
            <DayHabit
              key={summaryDate.toString()}
              amount={10}
              completed={Math.round(Math.random() * 10)}
            />
          )
        })}
      </div>
    </div>
  )
}
