import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { useEffect } from 'react'
import { View } from 'react-native'

interface ProgressBarProps {
  progress?: number
}

export function ProgressBar({ progress = 0 }: ProgressBarProps) {
  const sharedProgressValue = useSharedValue(progress)

  const progressStyles = useAnimatedStyle(() => {
    return {
      width: `${sharedProgressValue.value}%`,
    }
  })

  useEffect(() => {
    sharedProgressValue.value = withTiming(progress)
  }, [progress, sharedProgressValue])

  return (
    <View className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <Animated.View
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={progress}
        className="h-3 rounded-xl bg-violet-600"
        style={progressStyles}
      />
    </View>
  )
}
