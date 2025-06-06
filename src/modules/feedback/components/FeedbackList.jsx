import FeedbackItem from './FeedbackItem'
import { useFeedbackContext } from '../store/FeedbackContext'

export default function FeedbackList() {
  const { state } = useFeedbackContext()
  let feedbacks = [...state.feedbacks]
  if (state.sort === 'popularity') {
    feedbacks.sort((a, b) => b.likes - a.likes)
  } else {
    feedbacks.sort((a, b) => b.created - a.created)
  }
  if (feedbacks.length === 0) {
    return <p style={{ color: 'black' }}>Нет предложений</p>
  }
  return (
    <div>
      {feedbacks.map(fb => (
        <FeedbackItem key={fb.id} feedback={fb} />
      ))}
    </div>
  )
}
