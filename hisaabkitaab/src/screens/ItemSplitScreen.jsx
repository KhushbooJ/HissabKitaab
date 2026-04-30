import { useState } from 'react'
import { ChevronLeft } from '../components/Icons'
import styles from './ItemSplitScreen.module.css'

const PEOPLE = [
  { id: 'R', label: 'Rohan',  bg: '#2a1e40', color: '#c8b4f5', borderActive: '#7b5ea7' },
  { id: 'A', label: 'Ananya', bg: '#1e3028', color: '#7dd3b0', borderActive: '#3d8a65' },
  { id: 'P', label: 'Priya',  bg: '#2d1e1e', color: '#f4927a', borderActive: '#8a4040' },
  { id: 'Y', label: 'You',    bg: '#1e2240', color: '#a0b4e0', borderActive: '#4a5ea7' },
]

const INITIAL_ITEMS = [
  { id: 1, name: 'Butter Chicken', amount: 380, assigned: ['R'] },
  { id: 2, name: 'Dal Makhani',    amount: 280, assigned: ['A', 'Y'] },
  { id: 3, name: 'Naan x2',        amount: 120, assigned: [] },
  { id: 4, name: 'Lassi',          amount: 160, assigned: [] },
]

export default function ItemSplitScreen({ goTo }) {
  const [activePerson, setActivePerson] = useState('R')
  const [items, setItems] = useState(INITIAL_ITEMS)

  const toggleAssign = (itemId) => {
    setItems(prev => prev.map(item => {
      if (item.id !== itemId) return item
      const has = item.assigned.includes(activePerson)
      return {
        ...item,
        assigned: has
          ? item.assigned.filter(p => p !== activePerson)
          : [...item.assigned, activePerson],
      }
    }))
  }

  const getItemStyle = (item) => {
    if (item.assigned.length === 0) return styles.itemUnassigned
    const firstPerson = PEOPLE.find(p => p.id === item.assigned[0])
    if (firstPerson?.id === 'R') return styles.itemPurple
    return styles.itemTeal
  }

  return (
    <div className={styles.screen}>
      <div className="screen-header">
        <button className="back-btn" onClick={() => goTo(3)}>
          <ChevronLeft />
        </button>
        <div style={{ flex: 1 }}>
          <h1 className="screen-title" style={{ fontSize: 17 }}>Split by Item</h1>
          <div className={styles.screenSub}>Masala Box · ₹1,111</div>
        </div>
      </div>

      {/* Receipt thumb */}
      <div className={styles.receiptThumb}>
        <div className="section-label">Receipt Preview</div>
        <div className={styles.thumbInner}>
          <div className={styles.thumbHead}>MASALA BOX · 26 JUL 2025</div>
          {INITIAL_ITEMS.map(i => (
            <div key={i.id} className={styles.thumbRow}>
              <span>{i.name}</span><span>₹ {i.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* People selector */}
      <div className={styles.peopleSection}>
        <div className={styles.instruction}>Tap person · then tap item to assign</div>
        <div className={styles.peopleRow}>
          {PEOPLE.map(p => (
            <button
              key={p.id}
              className={styles.personItem}
              onClick={() => setActivePerson(p.id)}
            >
              <div
                className={`avatar ${styles.personAv}`}
                style={{
                  background: p.bg,
                  color: p.color,
                  border: activePerson === p.id
                    ? `2.5px solid ${p.borderActive}`
                    : '1.5px solid #3a3e55',
                  boxShadow: activePerson === p.id
                    ? `0 0 0 3px ${p.bg}` : 'none',
                }}
              >
                {p.id}
              </div>
              <div
                className={styles.personName}
                style={{ color: activePerson === p.id ? p.color : 'var(--text-muted)' }}
              >
                {p.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Line items */}
      <div className={styles.itemsSection}>
        {items.map(item => (
          <button
            key={item.id}
            className={`${styles.lineItem} ${getItemStyle(item)}`}
            onClick={() => toggleAssign(item.id)}
          >
            <div>
              <div className={`${styles.liName} ${item.assigned.length === 0 ? styles.liNameDim : ''}`}>
                {item.name}
              </div>
              {item.assigned.length > 0 ? (
                <div className={styles.chips}>
                  {item.assigned.map(pid => {
                    const p = PEOPLE.find(x => x.id === pid)
                    return (
                      <span
                        key={pid}
                        className="chip"
                        style={{ background: p.bg, color: p.color }}
                      >
                        {pid}
                      </span>
                    )
                  })}
                </div>
              ) : (
                <div className={styles.liHint}>tap to assign</div>
              )}
            </div>
            <div className={`${styles.liAmt} ${item.assigned.length === 0 ? styles.liAmtDim : ''}`}>
              ₹{item.amount}
            </div>
          </button>
        ))}
      </div>

      {/* Tax block */}
      <div className={styles.taxBlock}>
        <div className="section-label">Tax &amp; Tip (Auto-calculated)</div>
        <div className={styles.taxRow}><span>GST (18%)</span><span>₹ 171</span></div>
        <div className={styles.taxRow}><span>Tip</span><span>₹ 0</span></div>
        <div className={styles.taxDivider} />
        <div className={styles.taxTotal}><span>Total</span><span>₹ 1,111</span></div>
      </div>

      <button className={`btn-primary ${styles.confirmBtn}`} onClick={() => goTo(5)}>
        Confirm Split
      </button>
    </div>
  )
}
