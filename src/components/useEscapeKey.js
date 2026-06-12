import { useEffect } from 'react';

export default function useEscapeKey(handler) {
  useEffect(() => {
    if (!handler) return;
    const onKey = (e) => { if (e.key === 'Escape') handler(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [handler]);
}
