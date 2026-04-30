export default function PhoneFrame({ time = '9:41', children }) {
  return (
    <div className="phone-frame">
      <div className="status-bar">
        <span>{time}</span>
        <span>▲ ●●●</span>
      </div>
      {children}
    </div>
  )
}
