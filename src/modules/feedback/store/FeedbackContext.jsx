import { createContext, useContext, useReducer } from 'react'

const FeedbackContext = createContext()

const initialState = {
  feedbacks: [],
  sort: 'date',
  filter: 'all', 
}

function feedbackReducer(state, action) {
  switch (action.type) {
    case 'ADD_FEEDBACK':
      return {
        ...state,
        feedbacks: [
          ...state.feedbacks,
          { id: Date.now() + Math.random(), text: action.text, likes: 0, dislikes: 0, created: Date.now() }
        ]
      }
    case 'REMOVE_FEEDBACK':
      return {
        ...state,
        feedbacks: state.feedbacks.filter(fb => fb.id !== action.id)
      }
    case 'LIKE_FEEDBACK':
      return {
        ...state,
        feedbacks: state.feedbacks.map(fb => fb.id === action.id ? { ...fb, likes: fb.likes + 1 } : fb)
      }
    case 'DISLIKE_FEEDBACK':
      return {
        ...state,
        feedbacks: state.feedbacks.map(fb => fb.id === action.id ? { ...fb, dislikes: fb.dislikes + 1 } : fb)
      }
    case 'SET_SORT':
      return { ...state, sort: action.sort }
    case 'SET_FILTER':
      return { ...state, filter: action.filter }
    default:
      return state
  }
}

export function FeedbackProvider({ children }) {
  const [state, dispatch] = useReducer(feedbackReducer, initialState)
  return (
    <FeedbackContext.Provider value={{ state, dispatch }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export function useFeedbackContext() {
  const ctx = useContext(FeedbackContext)
  if (!ctx) throw new Error('useFeedbackContext must be used within FeedbackProvider')
  return ctx
} 