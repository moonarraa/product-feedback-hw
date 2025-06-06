import FeedbackForm from '../modules/feedback/components/FeedbackForm'
import FeedbackList from '../modules/feedback/components/FeedbackList'
import FeedbackStats from '../modules/feedback/components/FeedbackStats'
import FeedbackFilter from '../modules/feedback/components/FeedbackFilter'
import { FeedbackProvider } from '../modules/feedback/store/FeedbackContext'
import './App.css'

function App() {
  return (
    <FeedbackProvider>
      <div className="App" style={{ maxWidth: 400, margin: '40px auto', padding: 24, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #0001' }}>
        <h2 style={{ textAlign: 'center', color: 'black' }}>Product Feedback Board</h2>
        <FeedbackStats />
        <FeedbackFilter />
        <FeedbackForm />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  )
}

export default App
