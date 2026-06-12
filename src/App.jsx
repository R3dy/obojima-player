import { useState, useCallback } from 'react';
import TopBar from './components/TopBar.jsx';
import HeroGallery from './components/HeroGallery.jsx';
import HeroModal from './components/HeroModal.jsx';
import RulesDrawer from './components/RulesDrawer.jsx';
import useEscapeKey from './components/useEscapeKey.js';
import HEROES from './data/heroes.js';

export default function App() {
  const [selected, setSelected] = useState(null);
  const [showRules, setShowRules] = useState(false);

  const openHero = useCallback((id) => {
    setSelected(HEROES.find(h => h.id === id));
  }, []);

  const closeHero = useCallback(() => setSelected(null), []);

  useEscapeKey(selected ? closeHero : showRules ? () => setShowRules(false) : null);

  return (
    <div className="app-root">
      <TopBar onOpenRules={() => setShowRules(true)} />

      <HeroGallery heroes={HEROES} onSelect={openHero} />

      {selected && (
        <HeroModal hero={selected} onClose={closeHero} />
      )}

      {showRules && (
        <RulesDrawer onClose={() => setShowRules(false)} />
      )}
    </div>
  );
}
