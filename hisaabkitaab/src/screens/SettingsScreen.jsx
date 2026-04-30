import { useState } from 'react'
import { ChevronLeft, ChevronRight, Download, Camera, Clock, Sync, Dollar } from '../components/Icons'
import styles from './SettingsScreen.module.css'

function Toggle({ on, onToggle }) {
  return (
    <div
      className={`toggle ${on ? 'on' : 'off'}`}
      onClick={onToggle}
      role="switch"
      aria-checked={on}
      style={{ cursor: 'pointer' }}
    >
      <div className="toggle-knob" />
    </div>
  )
}

export default function SettingsScreen({ goTo }) {
  const [editHistory, setEditHistory] = useState(true)
  const [offlineMode, setOfflineMode]  = useState(true)

  return (
    <div className={styles.screen}>
      {/* Profile header */}
      <div className={styles.profileHeader}>
        <div className={styles.profileAv}>Y</div>
        <div>
          <div className={styles.profileName}>Your Account</div>
          <div className={styles.profileEmail}>you@email.com</div>
        </div>
      </div>

      <div className={styles.content}>
        {/* Data & Export */}
        <div>
          <div className="section-label">Data &amp; Export</div>
          <div className={styles.group}>
            <div className={styles.row}>
              <div className={`${styles.rowIcon}`} style={{ background: '#1e3028' }}>
                <Download />
              </div>
              <div className={styles.rowMain}>
                <div className={styles.rowTitle}>Download Data</div>
                <div className={styles.rowSub}>Export your full ledger history</div>
              </div>
              <div className={styles.rowRight}>
                <span className={`${styles.fbadge} ${styles.badgeCsv}`}>CSV</span>
                <span className={`${styles.fbadge} ${styles.badgeJson}`}>JSON</span>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.rowIcon} style={{ background: '#1e2240' }}>
                <Camera size={16} color="#a0b4e0" />
              </div>
              <div className={styles.rowMain}>
                <div className={styles.rowTitle}>Receipt Storage</div>
                <div className={styles.rowSub}>High-res cloud backup · 12 receipts</div>
              </div>
              <ChevronRight />
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div>
          <div className="section-label">Preferences</div>
          <div className={styles.group}>
            <div className={styles.row}>
              <div className={styles.rowIcon} style={{ background: 'var(--surface2)', border: '0.5px solid var(--border)' }}>
                <Dollar />
              </div>
              <div className={styles.rowMain}>
                <div className={styles.rowTitle}>Default Currency</div>
                <div className={styles.rowSub}>Used for all new expenses</div>
              </div>
              <span className={styles.currencyVal}>₹ INR</span>
            </div>
            <div className={styles.row}>
              <div className={styles.rowIcon} style={{ background: 'var(--surface2)', border: '0.5px solid var(--border)' }}>
                <Clock />
              </div>
              <div className={styles.rowMain}>
                <div className={styles.rowTitle}>Show Edit History</div>
                <div className={styles.rowSub}>Track changes to expenses</div>
              </div>
              <Toggle on={editHistory} onToggle={() => setEditHistory(v => !v)} />
            </div>
            <div className={styles.row}>
              <div className={styles.rowIcon} style={{ background: 'var(--surface2)', border: '0.5px solid var(--border)' }}>
                <Sync />
              </div>
              <div className={styles.rowMain}>
                <div className={styles.rowTitle}>Offline Mode</div>
                <div className={styles.rowSub}>Add expenses without internet</div>
              </div>
              <Toggle on={offlineMode} onToggle={() => setOfflineMode(v => !v)} />
            </div>
          </div>
        </div>

        {/* Phase badge */}
        <div className={styles.phaseBadge}>
          <div>
            <div className={styles.phaseTitle}>HisaabKitaab Phase 1</div>
            <div className={styles.phaseSub}>Unlimited expenses · OCR scanning included</div>
          </div>
          <div className={styles.freeBadge}>FREE</div>
        </div>
      </div>
    </div>
  )
}
