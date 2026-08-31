(() => {
  const looksJwt = v => typeof v === 'string' && /^ey[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\./.test(v.trim());
  const claims = t => { try { return JSON.parse(atob(t.split('.')[1].replace(/-/g,'+').replace(/_/g,'/'))); } catch { return null; } };
  const found = [];
  const scan = (store, label) => {
    for (let i = 0; i < store.length; i++) {
      const k = store.key(i); const raw = store.getItem(k);
      const candidates = [raw];
      try { const o = JSON.parse(raw); if (o && typeof o === 'object')
        candidates.push(...Object.values(o).flatMap(v => typeof v === 'object' && v ? Object.values(v) : [v])); } catch {}
      for (const v of candidates) if (looksJwt(v)) {
        const c = claims(v) || {};
        found.push({ where: label, key: k, aud: c.aud, iss: c.iss, scp: c.scp,
                     expires: c.exp ? new Date(c.exp*1000).toLocaleString() : '?',
                     expired: c.exp ? c.exp*1000 < Date.now() : '?', token: v.trim() });
      }
    }
  };
  try { scan(localStorage, 'localStorage'); } catch {}
  try { scan(sessionStorage, 'sessionStorage'); } catch {}
  console.table(found.map(({token, ...rest}) => rest));
  console.log('Cookies readable by JS:', document.cookie ? document.cookie.split(';').map(c=>c.split('=')[0].trim()) : '(none - likely HttpOnly)');
  window.__tokens = found;
  console.log(found.length
    ? `${found.length} token(s) found. Copy the one whose aud mentions dashcam:  copy(__tokens[0].token)`
    : 'No JWT in storage. The token is probably only held in memory: use the Network tab after dropping a clip.');
})();
