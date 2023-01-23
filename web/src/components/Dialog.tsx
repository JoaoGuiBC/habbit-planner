import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Close,
  Title,
} from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { FormEvent, ReactNode, useState } from 'react'
import { api } from '../lib/axios'

import { Button } from './Button'
import { Checkbox } from './Checkbox'

interface DialogProps {
  children: ReactNode
}

const weekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

async function createNewHabit(title: string, selectedWeekDays: number[]) {
  await api.post('habits', {
    title,
    weekDays: selectedWeekDays,
  })
}

export function Dialog({ children }: DialogProps) {
  const [title, setTitle] = useState('')
  const [selectedWeekDays, setSelectedWeekDays] = useState<number[]>([])

  async function handleCreateNewHabit(event: FormEvent) {
    event.preventDefault()

    if (!title || selectedWeekDays.length === 0) {
      return
    }

    await createNewHabit(title, selectedWeekDays)

    setTitle('')
    setSelectedWeekDays([])

    alert('Hábito criado com sucesso!')
  }

  function handleToogleWeekDay(weekDay: number) {
    if (selectedWeekDays.includes(weekDay)) {
      const selectedWeekDaysWithRemovedOne = selectedWeekDays.filter(
        (day) => day !== weekDay
      )

      setSelectedWeekDays(selectedWeekDaysWithRemovedOne)
    } else {
      const selectedWeekDaysWithAddedOne = [...selectedWeekDays, weekDay]

      setSelectedWeekDays(selectedWeekDaysWithAddedOne)
    }
  }

  return (
    <Root>
      <Trigger>{children}</Trigger>

      <Portal>
        <Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

        <Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Close className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
            <X size={24} aria-label="Fechar" />
          </Close>

          <Title className="text-3xl leading-tight font-extrabold">
            Criar hábito
          </Title>

          <form
            className="w-full flex flex-col mt-6"
            onSubmit={(event) => handleCreateNewHabit(event)}
          >
            <label htmlFor="title" className="font-semibold leading-tight">
              Qual seu comprometimento?
            </label>

            <input
              type="text"
              id="title"
              placeholder="ex.: exercícios, dormir bem, etc..."
              autoFocus
              className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />

            <label htmlFor="" className="font-semibold leading-tight mt-4">
              Qual a recorrência?
            </label>

            <div className="flex flex-col gap-2 mt-3">
              {weekDays.map((weekDay, index) => (
                <Checkbox
                  key={weekDay}
                  title={weekDay}
                  styleType="secondary"
                  checked={selectedWeekDays.includes(index)}
                  onCheckedChange={() => handleToogleWeekDay(index)}
                />
              ))}
            </div>

            <Button type="submit" styleType="secondary" title="Confirmar" />
          </form>
        </Content>
      </Portal>
    </Root>
  )
}
