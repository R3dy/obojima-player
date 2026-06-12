import { useMemo } from 'react';

const MOTE_COLORS = [
  '#5CD4C8', '#2EA89C', '#F0B060', '#E0784B',
  '#8FAA7B', '#4A7C59', '#CE7B9B', '#5B8DD9',
];

export default function SpiritMotes() {
  const motes = useMemo(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${4 + Math.random() * 8}px`,
      color: MOTE_COLORS[Math.floor(Math.random() * MOTE_COLORS.length)],
      delay: `${Math.random() * 18}s`,
      duration: `${14 + Math.random() * 22}s`,
    })),
  []);

  return (
    <div className="motes-layer" aria-hidden="true">
      {motes.map(m => (
        <div
          key={m.id}
          className="mote"
          style={{
            left: m.left,
            bottom: '-20px',
            width: m.size,
            height: m.size,
            background: m.color,
            boxShadow: `0 0 6px 2px ${m.color}40`,
            animationDelay: m.delay,
            animationDuration: m.duration,
          }}
        />
      ))}
    </div>
  );
}
