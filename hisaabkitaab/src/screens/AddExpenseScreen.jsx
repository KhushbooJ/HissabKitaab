import { useState } from 'react'
import { ChevronLeft, Camera, Plus } from '../components/Icons'
import styles from './AddExpenseScreen.module.css'

export default function AddExpenseScreen({ goTo }) {
  const [splitByItem, setSplitByItem] = useState(true)

  return (
    <div className={styles.screen}>
      {/* Header */}
      <div className="screen-header">
        <button className="back-btn" onClick={() => goTo(1)}>
          <ChevronLeft />
        </button>
        <h1 className="screen-title">Add Expense</h1>
        <div className={styles.unlimBadge}>UNLIMITED ✓</div>
      </div>

      {/* OCR banner */}
      <button className={styles.ocrBanner} onClick={() => goTo(3)}>
        <div className={styles.ocrIcon}>
          <Camera size={20} color="#b89df5" />
        </div>
        <div className={styles.ocrText}>
          <div className={styles.ocrTitle}>Scan Receipt with OCR</div>
          <div className={styles.ocrSub}>Auto-fills amount, merchant &amp; date</div>
        </div>
        <span className={styles.ocrArrow}>›</span>
      </button>

      {/* Form */}
      <div className={styles.form}>
        {/* Amount */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Amount</label>
          <div className={styles.fieldBox}>
            <span className={styles.currency}>₹</span>
            <span className={styles.amountValue}>1,240</span>
            <button className={styles.camBtn} onClick={() => goTo(3)}>
              <Camera size={13} color="#b89df5" />
            </button>
          </div>
        </div>

        {/* Description */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Description</label>
          <div className={styles.fieldBox}>
            <span className={styles.fieldVal}>Dinner at Masala Box</span>
          </div>
        </div>

        {/* Group + Date */}
        <div className={styles.fieldRow}>
          <div className={styles.fieldGroup} style={{ flex: 1 }}>
            <label className={styles.fieldLabel}>Group</label>
            <div className={styles.fieldBox}>
              <span className={styles.fieldVal}>Goa Trip</span>
              <span className={styles.fieldArrow}>›</span>
            </div>
          </div>
          <div className={styles.fieldGroup} style={{ flex: 1 }}>
            <label className={styles.fieldLabel}>Date</label>
            <div className={styles.fieldBox}>
              <span className={styles.fieldVal}>Jul 26</span>
            </div>
          </div>
        </div>

        {/* Split with */}
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Split With</label>
          <div className={styles.fieldBox}>
            <div className={styles.friendsWrap}>
              {[
                { initial: 'R', bg: '#2a1e40', color: '#c8b4f5' },
                { initial: 'A', bg: '#1e3028', color: '#7dd3b0' },
                { initial: 'P', bg: '#2d1e1e', color: '#f4927a' },
              ].map(f => (
                <div
                  key={f.initial}
                  className={`avatar ${styles.friendChip}`}
                  style={{ background: f.bg, color: f.color }}
                >
                  {f.initial}
                </div>
              ))}
              <div className={`avatar ${styles.friendChip} ${styles.addFriend}`}>
                <Plus size={12} color="#555" strokeWidth={2.5} />
              </div>
              <button className={styles.splitLink} onClick={() => goTo(4)}>
                Split by item ›
              </button>
            </div>
          </div>
        </div>

        {/* Split by item toggle */}
        <div className={styles.toggleRow}>
          <div>
            <div className={styles.toggleName}>Split by Item</div>
            <div className={styles.toggleSub}>For restaurant / grocery bills</div>
          </div>
          <div
            className={`toggle ${splitByItem ? 'on' : 'off'}`}
            onClick={() => setSplitByItem(v => !v)}
            role="switch"
            aria-checked={splitByItem}
          >
            <div className="toggle-knob" />
          </div>
        </div>
      </div>

      <button className={`btn-primary ${styles.submitBtn}`} onClick={() => goTo(1)}>
        Add Expense
      </button>
    </div>
  )
}
