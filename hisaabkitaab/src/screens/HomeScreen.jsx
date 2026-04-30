import { useState } from 'react'
import { Search, Plus, Home as HomeIcon, User } from '../components/Icons'
import styles from './HomeScreen.module.css'

const ACTIVITY = [
  { id: 1, initial: 'R', bg: '#2a1e40', color: '#c8b4f5', name: 'Rohan paid', meta: 'Dinner · Goa Trip', amount: '+₹650', dir: 'you get', positive: true },
  { id: 2, initial: 'P', bg: '#1e3028', color: '#7dd3b0', name: 'You paid', meta: 'Electricity · Flat', amount: '-₹1,400', dir: 'you paid', positive: false },
  { id: 3, initial: 'A', bg: '#2d1e1e', color: '#f4927a', name: 'Ananya paid', meta: 'Groceries · Flat', amount: '+₹280', dir: 'you get', positive: true },
]

const GROUPS = [
  { id: 1, emoji: '🏠', label: 'Flat', cls: styles.groupFlat },
  { id: 2, emoji: '✈️', label: 'Goa Trip', cls: styles.groupGoa },
  { id: 3, emoji: '🍽️', label: 'Foodies', cls: styles.groupFood },
]

export default function HomeScreen({ goTo }) {
  const [month] = useState('July 2025')

  return (
    <div className={styles.screen}>
      {/* ── Header ── */}
      <div className={styles.header}>
        <div>
          <div className={styles.monthLabel}>{month}</div>
          <div className={styles.appTitle}>HisaabKitaab</div>
        </div>
        <button className={styles.searchBtn} aria-label="Search">
          <Search />
        </button>
      </div>

      {/* ── Balance card ── */}
      <div className={styles.balanceCard}>
        <div className={styles.balLabel}>Net Balance</div>
        <div className={styles.balAmount}>+₹ 2,450</div>
        <div className={styles.balSub}>overall you are owed</div>
        <div className={styles.balRow}>
          <div className={styles.balBox}>
            <div className={styles.boxLabel}>You are owed</div>
            <div className={`${styles.boxAmt} ${styles.pos}`}>₹ 5,200</div>
          </div>
          <div className={styles.balBox}>
            <div className={styles.boxLabel}>You owe</div>
            <div className={`${styles.boxAmt} ${styles.neg}`}>₹ 2,750</div>
          </div>
        </div>
      </div>

      {/* ── Groups ── */}
      <div className={styles.section}>
        <div className="section-label">Groups</div>
        <div className={styles.groupsRow}>
          {GROUPS.map(g => (
            <button key={g.id} className={styles.groupItem}>
              <div className={`${styles.groupAvatar} ${g.cls}`}>{g.emoji}</div>
              <div className={styles.groupName}>{g.label}</div>
            </button>
          ))}
          <button className={styles.groupItem}>
            <div className={`${styles.groupAvatar} ${styles.groupNew}`}>
              <Plus size={16} color="#555" strokeWidth={2.5} />
            </div>
            <div className={styles.groupName}>New</div>
          </button>
        </div>
      </div>

      {/* ── Activity ── */}
      <div className={styles.section}>
        <div className="section-label">Recent</div>
        <div className={styles.activityList}>
          {ACTIVITY.map((a, i) => (
            <div
              key={a.id}
              className={styles.activityItem}
              style={{ animationDelay: `${0.05 + i * 0.07}s` }}
            >
              <div className={styles.actLeft}>
                <div className={`avatar ${styles.actAvatar}`} style={{ background: a.bg, color: a.color }}>
                  {a.initial}
                </div>
                <div>
                  <div className={styles.actName}>{a.name}</div>
                  <div className={styles.actMeta}>{a.meta}</div>
                </div>
              </div>
              <div className={styles.actRight}>
                <div className={`${styles.actAmount} ${a.positive ? styles.pos : styles.neg}`}>{a.amount}</div>
                <div className={styles.actYou}>{a.dir}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom nav ── */}
      <div className={styles.bottomNav}>
        <div className={styles.navItem}>
          <HomeIcon />
          <div className={styles.navLabelActive}>Home</div>
        </div>
        <button className={styles.fab} onClick={() => goTo(2)} aria-label="Add expense">
          <Plus />
        </button>
        <button className={styles.navItem} onClick={() => goTo(6)}>
          <User color="#555" />
          <div className={styles.navLabel}>Profile</div>
        </button>
      </div>
    </div>
  )
}
