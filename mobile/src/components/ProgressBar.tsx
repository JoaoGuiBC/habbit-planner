import { View } from 'react-native'

interface ProgressBarProps {
  progress?: number
}

export function ProgressBar({ progress = 0 }: ProgressBarProps) {
  const progressStyles = {
    width: `${progress}%`,
  }

  return (
    <View className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <View
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={progress}
        className="h-3 rounded-xl bg-violet-600"
        style={progressStyles}
      />
    </View>
  )
}
