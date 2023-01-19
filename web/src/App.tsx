import { Habit } from './components/Habit'

export function App() {
  return (
    <div>
      <Habit completed={10} />
      <Habit completed={20} />
      <Habit completed={30} />
      <Habit completed={40} />
      <Habit completed={50} />
    </div>
  )
}
