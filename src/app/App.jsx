import FeedbackForm from '../modules/feedback/components/FeedbackForm'
import FeedbackList from '../modules/feedback/components/FeedbackList'
import FeedbackStats from '../modules/feedback/components/FeedbackStats'
import FeedbackFilter from '../modules/feedback/components/FeedbackFilter'
import ThemeToggle from '../modules/feedback/components/ThemeToggle'
import { FeedbackProvider } from '../modules/feedback/store/FeedbackContext'
import { ThemeProvider, useThemeContext } from '../modules/feedback/store/ThemeContext'
import './App.css'
import { useEffect } from 'react'

function ThemedApp() {
  const { state } = useThemeContext()
  useEffect(() => {
    document.body.className = state.theme === 'dark' ? 'dark-theme' : 'light-theme'
  }, [state.theme])

  return (
    <FeedbackProvider>
      <div className="App" style={{ maxWidth: 400, margin: '40px auto', padding: 24, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #0001', position: 'relative' }}>
        <ThemeToggle />
        <h2 style={{ textAlign: 'center', color: 'black' }}>Product Feedback Board</h2>
        <FeedbackStats />
        <FeedbackFilter />
        <FeedbackForm />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  )
}

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  )
}

export default App
