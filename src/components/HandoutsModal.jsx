import { useState } from 'react';
import useEscapeKey from './useEscapeKey.js';

const HANDOUTS = [
  {
    id: 'museum-map',
    title: 'Museum Floor Plan',
    subtitle: 'Dr. Dannell\'s Notes',
    src: '/handouts/museum-map.jpg',
  },
];

export default function HandoutsModal({ onClose }) {
  const [zoomed, setZoomed] = useState(null);
  useEscapeKey(zoomed ? () => setZoomed(null) : onClose);

  return (
    <div className="modal-backdrop" onClick={zoomed ? () => setZoomed(null) : onClose}>
      {zoomed ? (
        <div className="handout-zoom" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setZoomed(null)} aria-label="Close zoom">✕</button>
          <img src={zoomed.src} alt={zoomed.title} className="handout-zoom-img" />
        </div>
      ) : (
        <div className="handouts-modal" onClick={e => e.stopPropagation()}>
          <div className="handouts-header">
            <h2 className="handouts-title">Handouts</h2>
            <button className="modal-close" onClick={onClose} aria-label="Close handouts">✕</button>
          </div>
          <div className="handouts-grid">
            {HANDOUTS.map(h => (
              <button key={h.id} className="handout-card" onClick={() => setZoomed(h)}>
                <img src={h.src} alt={h.title} className="handout-thumb" />
                <div className="handout-card-label">
                  <span className="handout-card-title">{h.title}</span>
                  {h.subtitle && <span className="handout-card-sub">{h.subtitle}</span>}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
