import { useFeedbackContext } from '../store/FeedbackContext'

export default function FeedbackFilter() {
  const { state, dispatch } = useFeedbackContext()
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ color: 'black' }}>Сортировать: </label>
      <select
        value={state.sort}
        onChange={e => dispatch({ type: 'SET_SORT', sort: e.target.value })}
        style={{ padding: 4, borderRadius: 4 }}
      >
        <option value="date">По дате</option>
        <option value="popularity">По популярности</option>
      </select>
    </div>
  )
} 