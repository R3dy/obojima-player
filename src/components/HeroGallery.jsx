import HeroCard from './HeroCard.jsx';

export default function HeroGallery({ heroes, onSelect }) {
  return (
    <main className="gallery-scroll">
      <div className="gallery-header">
        <h1>Choose Your Hero</h1>
        <p>Eight operatives ready for the heist. Infiltrate the museum, steal the egg, save the city.</p>
      </div>
      <div className="gallery-grid">
        {heroes.map(h => (
          <HeroCard key={h.id} hero={h} onSelect={onSelect} />
        ))}
      </div>
    </main>
  );
}
