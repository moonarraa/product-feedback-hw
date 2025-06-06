import { useFeedbackContext } from '../store/FeedbackContext'

export default function FeedbackItem({ feedback, onDelete }) {
  const { dispatch } = useFeedbackContext()
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
      <span style={{ flex: 1 }}>{feedback.text}</span>
      <button onClick={() => dispatch({ type: 'LIKE_FEEDBACK', id: feedback.id })} style={{ marginLeft: 8 }}>
        👍 {feedback.likes}
      </button>
      <button onClick={() => dispatch({ type: 'DISLIKE_FEEDBACK', id: feedback.id })} style={{ marginLeft: 4 }}>
        👎 {feedback.dislikes}
      </button>
      <button onClick={() => onDelete(feedback.id)} style={{ marginLeft: 8 }}>
        Удалить
      </button>
    </div>
  )
}
