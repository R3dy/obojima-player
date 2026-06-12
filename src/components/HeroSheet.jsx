import { ABIL_ORDER, ABIL_FULL } from '../data/heroes.js';

function DeathPips() {
  return (
    <div className="dpips">
      {Array.from({ length: 3 }, (_, i) => <span key={`s${i}`} className="pip" title="save" />)}
      {Array.from({ length: 3 }, (_, i) => <span key={`f${i}`} className="pip fail" title="fail" />)}
    </div>
  );
}

function SlotPips({ n }) {
  return (
    <div className="slots-row">
      <span>Spell slots (1st):</span>
      {Array.from({ length: n }, (_, i) => <span key={i} className="slot-pip" />)}
    </div>
  );
}

function SpellCard({ s }) {
  if (!s) return null;
  return (
    <div className="card-block">
      <h4>Spellcasting</h4>
      <div className="spell-head">
        <div className="spell-stat"><span>Save DC</span>{s.dc}</div>
        <div className="spell-stat"><span>Spell Attack</span>{s.atk}</div>
      </div>
      <SlotPips n={s.slots} />
      <div className="spell-group">
        <div className="gl">Cantrips (always ready)</div>
        <div className="spell-chips">
          {s.cantrips.map(c => <span key={c} className="spell-chip">{c}</span>)}
        </div>
      </div>
      <div className="spell-group">
        <div className="gl">{s.label}</div>
        <div className="spell-chips">
          {s.known.map(c => <span key={c} className="spell-chip">{c}</span>)}
        </div>
      </div>
    </div>
  );
}

function FeatCard({ f }) {
  const grp = (label, arr) => (
    <div className="feat-group" key={label}>
      <div className="fgl">{label}</div>
      {arr.map((x, i) => (
        <div key={i} className={`feat ${x.sig ? 'sig' : ''}`}>
          <div className="fn">
            {x.sig && <span className="star">★</span>}
            {x.n}
            {x.sig && <span className="sigtag">SIGNATURE MOVE</span>}
          </div>
          <div className="ft">{x.t}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="card-block">
      <h4>Features &amp; Traits</h4>
      {grp("Class", f.cls)}
      {grp("Ancestry", f.anc)}
      <div className="feat-group">
        <div className="fgl">Background</div>
        <div className="feat">
          <div className="fn">{f.bg.n}</div>
          <div className="ft">{f.bg.t}</div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSheet({ hero, onBack }) {
  return (
    <section className="detail-view" aria-live="polite">
      <div className="detail-actions">
        <button className="btn btn-back" onClick={onBack} autoFocus>
          ← Back to heroes
        </button>
        <button className="btn btn-print" onClick={() => window.print()}>
          🖨️ Print this sheet
        </button>
      </div>

      <div className="sheet">
        {/* top identity */}
        <div className="sheet-top">
          <span className="card-orb" style={{ '--aura': hero.aura, background: hero.aura }}>
            {hero.emoji}
          </span>
          <div className="sheet-id">
            <h2>{hero.name}</h2>
            <div className="kind">
              {hero.kind}<span className="dot">●</span>{hero.pron}
            </div>
            <span className="lvl-badge">Level {hero.level}</span>
          </div>
        </div>

        <p className="sheet-quote">{hero.quote}</p>

        {/* vitals */}
        <div className="vitals">
          <div className="vital">
            <div className="lab">Armor</div>
            <div className="val">{hero.ac}</div>
            <div className="sub">hard to hit</div>
          </div>
          <div className="vital">
            <div className="lab">Health</div>
            <div className="val">{hero.hp}</div>
            <div className="sub">Hit Dice {hero.hitDice}</div>
            <DeathPips />
          </div>
          <div className="vital">
            <div className="lab">Speed</div>
            <div className="val" style={{ fontSize: '1rem', paddingTop: 6 }}>{hero.speed}</div>
          </div>
          <div className="vital">
            <div className="lab">Initiative</div>
            <div className="val">{hero.init}</div>
            <div className="sub">turn order</div>
          </div>
          <div className="vital">
            <div className="lab">Prof. Bonus</div>
            <div className="val">{hero.prof}</div>
            <div className="sub">your training</div>
          </div>
          <div className="vital">
            <div className="lab">Pass. Perc.</div>
            <div className="val">{hero.pp}</div>
            <div className="sub">noticing</div>
          </div>
        </div>

        {/* abilities */}
        <div className="section-label">Ability scores &amp; saving throws</div>
        <div className="abilities">
          {ABIL_ORDER.map(a => {
            const [score, mod, save, prof] = hero.ab[a];
            return (
              <div className="abil" key={a}>
                <div className="name">{ABIL_FULL[a]}</div>
                <div className="mod">{mod}</div>
                <div className="score">score {score}</div>
                <div className={`save ${prof ? 'prof' : ''}`}>
                  {prof ? <span className="sdot" /> : null}
                  save {save}
                </div>
              </div>
            );
          })}
        </div>
        <p className="savehint">
          The <b>big number</b> is your modifier — add it to d20 rolls.
          A <span style={{ color: 'var(--spirit)' }}>●</span> dot marks a <b>saving throw</b> you&rsquo;re trained in.
        </p>

        {/* two-column cards: skills + attacks + spells */}
        <div className="cards-col">
          <div className="card-block">
            <h4>Trained Skills</h4>
            <div className="skill-list">
              {hero.skills.map((s, i) => (
                <div className="skill-row" key={i}>
                  <span>
                    {s[0]}
                    {s[2] && <span className="exp-tag">expert</span>}
                  </span>
                  <span className="bonus">{s[1]}</span>
                </div>
              ))}
            </div>
            <p className="skill-note">For anything not listed, just use the matching ability number above.</p>
          </div>

          <div className="card-block">
            <h4>Attacks</h4>
            <table className="atk-table">
              <thead>
                <tr><th>Attack</th><th>To Hit</th><th>Damage</th></tr>
              </thead>
              <tbody>
                {hero.attacks.map((a, i) => (
                  <tr key={i}>
                    <td><span className="atk-name">{a.n}</span><br /><span className="atk-note">{a.nt}</span></td>
                    <td className="atk-hit">{a.hit}</td>
                    <td className="atk-dmg">{a.dmg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SpellCard s={hero.spell} />
        </div>

        {/* features + equipment + profs */}
        <div className="cards-col">
          <FeatCard f={hero.features} />

          <div className="card-block">
            <h4>Equipment</h4>
            <div className="kit">
              {hero.equip.map((e, i) => <div className="row" key={i}>• {e}</div>)}
            </div>
          </div>

          <div className="card-block">
            <h4>Proficiencies &amp; Languages</h4>
            <div className="kit">
              <div className="row"><b>Armor:</b> {hero.profs.armor}</div>
              <div className="row"><b>Weapons:</b> {hero.profs.weapons}</div>
              <div className="row"><b>Tools:</b> {hero.profs.tools}</div>
              <div className="row"><b>Languages:</b> {hero.profs.langs}</div>
            </div>
          </div>
        </div>

        {/* how to play */}
        <div className="play-box">
          <div className="ph">🎲 How to play your turn</div>
          <ul>
            <li><b>Do something risky?</b> Roll a <b>d20</b> + the matching ability number. Your GM says if it works.</li>
            <li><b>Attack?</b> Roll <b>d20 + To Hit</b>; if it lands, roll the <b>Damage</b> dice.</li>
            <li><b>Move + one action</b> each turn, plus a quick <b>bonus action</b> if you have one.</li>
            <li><b>Hurt?</b> Lose hit points. At 0 you make <b>death saves</b> — a friend can help you up. Ask your GM!</li>
          </ul>
        </div>
      </div>

      <div className="sheet-foot">
        Obojima · The Curious World Within · Level 2
      </div>
    </section>
  );
}
