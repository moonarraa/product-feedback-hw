import { useState } from 'react'
import { useFeedbackContext } from '../store/FeedbackContext'

export default function FeedbackForm() {
  const [text, setText] = useState('')
  const { dispatch } = useFeedbackContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    dispatch({ type: 'ADD_FEEDBACK', text: text.trim() })
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Ваше предложение - "
        style={{
          padding: 8,
          width: 240,
          marginRight: 8,
          background: '#73737d',
          color: '#fff',   
          border: 'none',
          borderRadius: 6,
          outline: 'none'
        }}
      />
      <button type="submit">Добавить</button>
    </form>
  )
}


