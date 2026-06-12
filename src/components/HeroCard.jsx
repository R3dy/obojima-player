export default function HeroCard({ hero, onSelect }) {
  return (
    <button
      className="hero-card"
      style={{ '--aura': hero.aura }}
      onClick={() => onSelect(hero.id)}
      aria-label={`View ${hero.name}, ${hero.kind}`}
    >
      <span className="card-orb" style={{ '--aura': hero.aura, background: hero.aura }}>
        {hero.emoji}
      </span>
      <div className="card-info">
        <h3>{hero.name}</h3>
        <span className="card-role-tag" style={{ '--aura': hero.aura, background: hero.aura }}>
          {hero.role}
        </span>
        <div className="card-kind-line">{hero.kind}</div>
        <div className="card-tagline">{hero.tagline}</div>
      </div>
    </button>
  );
}
