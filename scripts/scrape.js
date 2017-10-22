function(h, { t, a }) {
  let
    r,
    l = [],
    g = [4]
  ;
  r = t.call(a)
  if (!Array.isArray(r)) return { ok: !!0 }
  r.forEach(u => {
    if (g.includes(#fs.scripts.get_level({ name: `${u}`}))) {
      l.push(`user.sh {t: #s.${u} }`)
    }
  })
  return { ok: !!1, l }
}
