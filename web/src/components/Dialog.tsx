import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Close,
  Title,
} from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { X } from 'phosphor-react'

import { Button } from './Button'

interface DialogProps {
  children: ReactNode
}

export function Dialog({ children }: DialogProps) {
  return (
    <Root>
      <Trigger>{children}</Trigger>

      <Portal>
        <Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

        <Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200 transition-colors">
            <X size={24} aria-label="Fechar" />
          </Close>

          <Title className="text-3xl leading-tight font-extrabold">
            Criar hábito
          </Title>

          <form className="w-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold leading-tight">
              Qual seu comprometimento?
            </label>

            <input
              type="text"
              id="title"
              placeholder="ex.: exercícios, dormir bem, etc..."
              autoFocus
              className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
            />

            <label htmlFor="" className="font-semibold leading-tight mt-4">
              Qual a recorrência?
            </label>

            <Button styleType="secondary" title="Confirmar" />
          </form>
        </Content>
      </Portal>
    </Root>
  )
}
