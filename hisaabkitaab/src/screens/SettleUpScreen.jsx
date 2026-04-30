import { ChevronLeft, ArrowRight } from '../components/Icons'
import styles from './SettleUpScreen.module.css'

const SETTLEMENTS = [
  { id: 1, fromId: 'P', fromBg: '#2d1e1e', fromColor: '#f4927a', toId: 'Y', toBg: '#1e2240', toColor: '#a0b4e0', amount: '₹850', desc: 'Priya pays You ₹850' },
  { id: 2, fromId: 'R', fromBg: '#2a1e40', fromColor: '#c8b4f5', toId: 'Y', toBg: '#1e2240', toColor: '#a0b4e0', amount: '₹440', desc: 'Rohan pays You ₹440' },
]

const HISTORY = [
  { id: 1, dotColor: '#c8b4f5', text: <>Dinner expense edited by <span style={{ color: '#c8b4f5', fontWeight: 500 }}>Rohan</span></>, time: '2 hours ago' },
  { id: 2, dotColor: '#a0b4e0', text: <>Expense added by <span style={{ color: '#a0b4e0', fontWeight: 500 }}>You</span></>, time: '4 hours ago' },
]

export default function SettleUpScreen({ goTo }) {
  return (
    <div className={styles.screen}>
      <div className="screen-header">
        <button className="back-btn" onClick={() => goTo(1)}>
          <ChevronLeft />
        </button>
        <h1 className="screen-title">Settle Up · Goa Trip</h1>
      </div>

      <div className={styles.content}>
        {/* Settlements */}
        <div>
          <div className="section-label">Suggested Settlements</div>
          {SETTLEMENTS.map((s, i) => (
            <div key={s.id} className={styles.card} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className={styles.cardMain}>
                <div className={styles.peopleLine}>
                  <div className={`avatar ${styles.sav}`} style={{ background: s.fromBg, color: s.fromColor }}>{s.fromId}</div>
                  <ArrowRight size={20} />
                  <div className={`avatar ${styles.sav}`} style={{ background: s.toBg, color: s.toColor }}>{s.toId}</div>
                  <div className={styles.settleAmt}>{s.amount}</div>
                </div>
                <div className={styles.settleDesc}>{s.desc}</div>
              </div>
              <div className={styles.cardActions}>
                <button className={styles.actionSec}>Record Cash</button>
                <div className={styles.actionDivider} />
                <button className={styles.actionPri}>UPI / Link ›</button>
              </div>
            </div>
          ))}
        </div>

        {/* Edit history */}
        <div className={styles.historyCard}>
          <div className="section-label">Edit History</div>
          {HISTORY.map((h, i) => (
            <div key={h.id}>
              <div className={styles.historyEntry}>
                <div className={styles.hDot} style={{ background: h.dotColor }} />
                <div>
                  <div className={styles.hText}>{h.text}</div>
                  <div className={styles.hTime}>{h.time}</div>
                </div>
              </div>
              {i < HISTORY.length - 1 && <div className={styles.hDivider} />}
            </div>
          ))}
        </div>

        {/* Offline badge */}
        <div className={styles.offlineBadge}>
          <div className={styles.onlineDot} />
          <span className={styles.offlineText}>Offline-capable · syncs automatically when connected</span>
        </div>
      </div>
    </div>
  )
}
