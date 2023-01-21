import logoImage from '../assets/logo.svg'

import { Button } from './Button'
import { Dialog } from './Dialog'

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImage} alt="Logo do habit planner" />

      <Dialog>
        <Button title="Novo hábito" />
      </Dialog>
    </div>
  )
}
