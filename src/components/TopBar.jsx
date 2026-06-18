export default function TopBar({ onOpenRules, onOpenWorld }) {
  return (
    <header className="topbar">
      <div className="topbar-brand">
        <span className="mark">The Murkmire Heist</span>
        <span className="version">Level 1</span>
      </div>
      <div className="topbar-actions">
        <button className="btn-world" onClick={onOpenWorld}>
          World
        </button>
        <button className="btn-rules" onClick={onOpenRules}>
          How to Play
        </button>
      </div>
    </header>
  );
}
