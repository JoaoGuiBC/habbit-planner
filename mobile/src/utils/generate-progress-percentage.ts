export function generateProgressPercentage(amount: number, completed: number) {
  const percentageComplete =
    amount > 0 ? Math.round((completed / amount) * 100) : 0

  return percentageComplete
}
