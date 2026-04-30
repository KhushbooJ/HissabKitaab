import { useState, useCallback } from 'react'
import PhoneFrame from './components/PhoneFrame'
import HomeScreen from './screens/HomeScreen'
import AddExpenseScreen from './screens/AddExpenseScreen'
import OcrScanScreen from './screens/OcrScanScreen'
import ItemSplitScreen from './screens/ItemSplitScreen'
import SettleUpScreen from './screens/SettleUpScreen'
import SettingsScreen from './screens/SettingsScreen'

const SCREEN_TIMES = {
  1: '9:41', 2: '9:42', 3: '9:43',
  4: '9:44', 5: '9:45', 6: '9:46',
}

const NAV_LABELS = [
  { id: 1, label: '1 · Home' },
  { id: 2, label: '2 · Add Expense' },
  { id: 3, label: '3 · OCR Scan' },
  { id: 4, label: '4 · Item Split' },
  { id: 5, label: '5 · Settle Up' },
  { id: 6, label: '6 · Settings' },
]

export default function App() {
  const [screen, setScreen] = useState(1)

  const goTo = useCallback((n) => setScreen(n), [])

  const renderScreen = () => {
    switch (screen) {
      case 1: return <HomeScreen goTo={goTo} />
      case 2: return <AddExpenseScreen goTo={goTo} />
      case 3: return <OcrScanScreen goTo={goTo} />
      case 4: return <ItemSplitScreen goTo={goTo} />
      case 5: return <SettleUpScreen goTo={goTo} />
      case 6: return <SettingsScreen goTo={goTo} />
      default: return <HomeScreen goTo={goTo} />
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '32px 16px 48px',
      gap: '16px',
    }}>
      {/* App title */}
      <div style={{ fontFamily: 'var(--mono)', fontSize: 13, color: '#3a3e55', letterSpacing: '0.06em' }}>
        HisaabKitaab · Phase 1 Prototype
      </div>

      {/* Navigation pills */}
      <div style={{
        display: 'flex', gap: 8, background: '#111820',
        borderRadius: 30, padding: '6px 8px', flexWrap: 'wrap',
        justifyContent: 'center', maxWidth: 400,
      }}>
        {NAV_LABELS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => goTo(id)}
            style={{
              fontSize: 11, padding: '6px 14px', borderRadius: 20,
              background: screen === id ? 'var(--purple)' : 'none',
              color: screen === id ? 'white' : 'var(--text-muted)',
              fontFamily: 'var(--font)', fontWeight: screen === id ? 600 : 400,
              transition: 'all 0.2s', border: 'none', cursor: 'pointer',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Phone */}
      <PhoneFrame time={SCREEN_TIMES[screen]}>
        {renderScreen()}
      </PhoneFrame>
    </div>
  )
}
