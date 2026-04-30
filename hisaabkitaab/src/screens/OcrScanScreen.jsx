import { ChevronLeft } from '../components/Icons'
import styles from './OcrScanScreen.module.css'

export default function OcrScanScreen({ goTo }) {
  return (
    <div className={styles.screen}>
      <div className="screen-header" style={{ background: '#000' }}>
        <button className="back-btn" style={{ background: '#1a1a1a', border: '0.5px solid #333' }} onClick={() => goTo(2)}>
          <ChevronLeft color="#888" />
        </button>
        <h1 className="screen-title" style={{ color: '#e0e0e0' }}>Scan Receipt</h1>
      </div>

      {/* Viewfinder */}
      <div className={styles.viewfinder}>
        {/* Receipt paper simulation */}
        <div className={styles.receiptPaper}>
          <div className={styles.rpHead}>MASALA BOX</div>
          <div className={styles.rpRow}><span>Butter Chicken</span><span>₹ 380</span></div>
          <div className={styles.rpRow}><span>Dal Makhani</span><span>₹ 280</span></div>
          <div className={styles.rpRow}><span>Naan x2</span><span>₹ 120</span></div>
          <div className={styles.rpRow}><span>Lassi</span><span>₹ 160</span></div>
          <hr className={styles.rpDivider} />
          <div className={styles.rpRow}><span>GST (18%)</span><span>₹ 171</span></div>
          <div className={`${styles.rpRow} ${styles.rpTotal}`}><span>TOTAL</span><span>₹ 1,111</span></div>
        </div>

        {/* Corner guides */}
        <div className={`${styles.guide} ${styles.guideTL}`} />
        <div className={`${styles.guide} ${styles.guideTR}`} />
        <div className={`${styles.guide} ${styles.guideBL}`} />
        <div className={`${styles.guide} ${styles.guideBR}`} />

        {/* Animated scan line */}
        <div className={styles.scanLine} />

        {/* Hint */}
        <div className={styles.scanHint}>Scanning… align receipt in frame</div>
      </div>

      {/* Extracted data panel */}
      <div className={styles.extractedPanel}>
        <div className="section-label">Extracted Data</div>

        {[
          { key: 'Merchant', val: 'Masala Box', big: false },
          { key: 'Date',     val: '26 Jul 2025', big: false },
          { key: 'Total',    val: '₹ 1,111',    big: true  },
        ].map(({ key, val, big }) => (
          <div key={key} className={styles.exRow}>
            <span className={styles.exKey}>{key}</span>
            <div className={styles.exRight}>
              <span className={big ? styles.exBig : styles.exVal}>{val}</span>
              <div className={styles.dotConfirm} />
            </div>
          </div>
        ))}

        <div className={styles.infoPill}>
          <div className={styles.infoDot} />
          <span className={styles.infoText}>4 line items detected — tap "Use This Receipt" to assign</span>
        </div>

        <div className={styles.actionRow}>
          <button className={styles.btnSec} onClick={() => goTo(2)}>Retake</button>
          <button className={styles.btnPri} onClick={() => goTo(4)}>Use This Receipt</button>
        </div>
      </div>
    </div>
  )
}
