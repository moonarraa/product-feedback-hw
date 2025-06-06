import { useThemeContext } from '../store/ThemeContext'

export default function ThemeToggle() {
  const { state, dispatch } = useThemeContext()
  return (
    <button
      onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
      style={{
        position: 'absolute',
        top: 10,
        right: 24,
        padding: '6px 16px',
        borderRadius: 6,
        border: 'none',
        background: state.theme === 'dark' ? '#222' : '#eee',
        color: state.theme === 'dark' ? '#fff' : '#222',
        cursor: 'pointer',
        fontWeight: 'bold',
        boxShadow: '0 2px 8px #0001',
        zIndex: 10
      }}
    >
      {state.theme === 'dark' ? '🌙 Тёмная' : '☀️ Светлая'}
    </button>
  )
} 