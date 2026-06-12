export default function Header({ onHowToPlay }) {
  return (
    <>
      <header className="header">
        <div className="eyebrow">Tales from the Tall Grass</div>
        <h1>Obojima Heroes</h1>
        <p className="subtitle">
          Eight adventurers. Pick yours and learn the game.
        </p>
      </header>
      <div className="htp-cta-wrap">
        <button className="btn-htp" onClick={onHowToPlay}>
          How to Play
        </button>
      </div>
    </>
  );
}
