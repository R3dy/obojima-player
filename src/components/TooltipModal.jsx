import useEscapeKey from './useEscapeKey.js';

export default function TooltipModal({ title, body, onClose }) {
  useEscapeKey(onClose);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-sheet"
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-label={title}
        style={{ maxWidth: 480, padding: '24px 28px 28px' }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">&times;</button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <span style={{
            display: 'inline-flex',
            width: 28, height: 28,
            borderRadius: '50%',
            background: 'var(--glass)',
            border: '1px solid var(--glass-border)',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--text-secondary)',
            flexShrink: 0,
          }}>?</span>
          <h4 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--text-primary)', fontWeight: 700 }}>
            {title}
          </h4>
        </div>

        <div
          style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.92rem' }}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </div>
  );
}
