import { useFeedbackContext } from '../store/FeedbackContext'

export default function FeedbackStats() {
  const { state } = useFeedbackContext()
  return (
    <div style={{ marginBottom: 16, fontWeight: 'bold', color: 'black' }}>
      Всего предложений: {state.feedbacks.length}
    </div>
  )
} 