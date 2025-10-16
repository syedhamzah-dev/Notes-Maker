(() => {
  const f = document.getElementById('noteForm');
  const t = document.getElementById('noteTitle');
  const b = document.getElementById('noteBody');
  const k = 'simple_notes';

  f.addEventListener('submit', e => {
    e.preventDefault();
    if (!b.value.trim()) return;
    const n = JSON.parse(localStorage.getItem(k) || '[]');
    n.push({title: t.value.trim(), body: b.value.trim(), time: new Date().toLocaleString()});
    localStorage.setItem(k, JSON.stringify(n));
    t.value = b.value = '';
  });
})();
