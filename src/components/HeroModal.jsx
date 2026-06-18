import { useState } from 'react';
import { ABIL_ORDER, ABIL_FULL } from '../data/heroes.js';
import TooltipModal from './TooltipModal.jsx';
import { getTooltip } from '../data/tooltips.js';

const SKILL_LIST = [
  { name: 'Acrobatics', abil: 'DEX' },
  { name: 'Animal Handling', abil: 'WIS' },
  { name: 'Arcana', abil: 'INT' },
  { name: 'Athletics', abil: 'STR' },
  { name: 'Deception', abil: 'CHA' },
  { name: 'History', abil: 'INT' },
  { name: 'Insight', abil: 'WIS' },
  { name: 'Intimidation', abil: 'CHA' },
  { name: 'Investigation', abil: 'INT' },
  { name: 'Medicine', abil: 'WIS' },
  { name: 'Nature', abil: 'INT' },
  { name: 'Perception', abil: 'WIS' },
  { name: 'Performance', abil: 'CHA' },
  { name: 'Persuasion', abil: 'CHA' },
  { name: 'Religion', abil: 'INT' },
  { name: 'Sleight of Hand', abil: 'DEX' },
  { name: 'Stealth', abil: 'DEX' },
  { name: 'Survival', abil: 'WIS' },
];

const TABS = [
  { id: 'main', label: 'Main' },
  { id: 'combat', label: 'Combat' },
  { id: 'skills', label: 'Skills' },
  { id: 'details', label: 'Details' },
];

function DeathPips() {
  return (
    <div className="death-pips">
      {[...Array(3)].map((_, i) => <span key={`s${i}`} className="pip" />)}
      {[...Array(3)].map((_, i) => <span key={`f${i}`} className="pip fail" />)}
    </div>
  );
}

function SlotPips({ n }) {
  return (
    <div className="slots-row">
      <span>Spell slots (1st):</span>
      {[...Array(n)].map((_, i) => <span key={i} className="slot-pip" />)}
    </div>
  );
}

function TabMain({ hero, onTooltip }) {
  return (
    <>
      {/* Top identity */}
      <div className="sheet-hero">
        <span className="orb-lg" style={{ '--aura': hero.aura, background: hero.aura }}>
          {hero.emoji}
        </span>
        <div className="sheet-identity">
          <h2>{hero.name}</h2>
          <div className="kind">
            {hero.kind}<span className="sep">●</span>{hero.pron}
          </div>
          <span className="sheet-level">Level {hero.level}</span>
        </div>
      </div>

      <p className="sheet-quote">{hero.quote}</p>

      {/* Vitals */}
      <div className="vitals">
        <div className="vital tt-click" onClick={() => onTooltip('combat','ac')} title="What is AC?">
          <div className="lab">Armor ⓘ</div><div className="val">{hero.ac}</div><div className="sub">AC</div>
        </div>
        <div className="vital tt-click" onClick={() => onTooltip('combat','hp')} title="What are Hit Points?">
          <div className="lab">Health ⓘ</div><div className="val">{hero.hp}</div>
          <div className="sub">HD {hero.hitDice}</div><DeathPips />
        </div>
        <div className="vital tt-click" onClick={() => onTooltip('combat','speed')} title="What is Speed?">
          <div className="lab">Speed ⓘ</div><div className="val" style={{fontSize:'1rem',paddingTop:6}}>{hero.speed}</div>
        </div>
        <div className="vital tt-click" onClick={() => onTooltip('combat','init')} title="What is Initiative?">
          <div className="lab">Initiative ⓘ</div><div className="val">{hero.init}</div><div className="sub">turn order</div>
        </div>
        <div className="vital tt-click" onClick={() => onTooltip('combat','prof')} title="What is Proficiency Bonus?">
          <div className="lab">Prof Bonus ⓘ</div><div className="val">{hero.prof}</div><div className="sub">training</div>
        </div>
        <div className="vital tt-click" onClick={() => onTooltip('combat','pp')} title="What is Passive Perception?">
          <div className="lab">Pass Perc ⓘ</div><div className="val">{hero.pp}</div><div className="sub">noticing</div>
        </div>
      </div>

      {/* Abilities */}
      <div className="sec-label">Ability Scores &amp; Saving Throws</div>
      <div className="abilities">
        {ABIL_ORDER.map(a => {
          const [score, mod, save, prof] = hero.ab[a];
          return (
            <div className="abil tt-click" key={a} onClick={() => onTooltip('abil',a)} title={`What is ${ABIL_FULL[a]}?`}>
              <div className="name">{ABIL_FULL[a]} ⓘ</div>
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
        Tap any stat to learn what it does. The <b>big number</b> is your modifier — add it to d20 rolls.
        A <span style={{color:'var(--spirit-dim)'}}>●</span> dot means you&rsquo;re trained in that save.
      </p>

      {/* Skills + Attacks + Spells */}
      <div className="cards-2col">
        <div className="sheet-card">
          <h4>Trained Skills ⓘ</h4>
          <div className="skill-list">
            {hero.skills.map((s, i) => (
              <div className="skill-row tt-click" key={i} onClick={() => onTooltip('skill',s[0])} title={`What is ${s[0]}?`}>
                <span>{s[0]}{s[2] && <span className="exp">expert</span>}</span>
                <span className="bonus">{s[1]}</span>
              </div>
            ))}
          </div>
          <p className="skill-note">Tap any skill to learn what it's for. For anything not listed, use the matching ability modifier.</p>
        </div>

        <div className="sheet-card">
          <h4>Attacks ⓘ</h4>
          <table className="atk-table">
            <thead><tr><th>Attack</th><th>To Hit</th><th>Damage</th></tr></thead>
            <tbody>
              {hero.attacks.map((a, i) => (
                <tr className="tt-click" key={i} onClick={() => onTooltip(null,null,{
                  title:a.n,
                  body:`<b>To Hit:</b> Roll d20 + ${a.hit}. If total ≥ target's AC, you hit!<br><b>Damage:</b> ${a.dmg} — roll this on a hit.<br><b>Type:</b> ${a.nt || 'varies'}`
                })} title={`How does ${a.n} work?`}>
                  <td><span className="atk-name">{a.n}</span><br /><span className="atk-note">{a.nt}</span></td>
                  <td className="atk-hit">{a.hit}</td>
                  <td className="atk-dmg">{a.dmg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {hero.spell && (
          <div className="sheet-card">
            <h4>Spellcasting ⓘ</h4>
            <div className="spell-head">
              <div className="spell-stat"><span>Save DC</span>{hero.spell.dc}</div>
              <div className="spell-stat"><span>Spell Attack</span>{hero.spell.atk}</div>
            </div>
            <SlotPips n={hero.spell.slots} />
            <div className="spell-group">
              <div className="gl">Cantrips (at will) ⓘ</div>
              <div className="spell-chips">
                {hero.spell.cantrips.map(c => <span key={c} className="spell-chip tt-click" onClick={() => onTooltip('spell',c.replace(' (racial)',''))} title={`What does ${c} do?`}>{c}</span>)}
              </div>
            </div>
            <div className="spell-group">
              <div className="gl">{hero.spell.label} ⓘ</div>
              <div className="spell-chips">
                {hero.spell.known.map(c => {
                  const name = c.replace(/\s*\(domain\)\s*|\s*\(patron\)\s*/g, '');
                  return <span key={c} className="spell-chip tt-click" onClick={() => onTooltip('spell',name)} title={`What does ${name} do?`}>{c}</span>;
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Features + Equipment + Profs */}
      <div className="cards-2col">
        <div className="sheet-card">
          <h4>Features &amp; Traits ⓘ</h4>
          <div className="feat-group">
            <div className="fgl">Class</div>
            {hero.features.cls.map((x, i) => (
              <div key={i} className={`feat tt-click ${x.sig ? 'sig' : ''}`} onClick={() => onTooltip('feature',x.n)} title={`What is ${x.n}?`}>
                <div className="fn">
                  {x.sig && <span className="star">★</span>}
                  {x.n}
                  {x.sig && <span className="sig-tag">Signature</span>}
                </div>
                <div className="ft">{x.t}</div>
              </div>
            ))}
          </div>
          <div className="feat-group">
            <div className="fgl">Ancestry</div>
            {hero.features.anc.map((x, i) => (
              <div key={i} className="feat tt-click" onClick={() => onTooltip('ancestry',x.n)} title={`What is ${x.n}?`}>
                <div className="fn">{x.n}</div>
                <div className="ft">{x.t}</div>
              </div>
            ))}
          </div>
          <div className="feat-group">
            <div className="fgl">Background</div>
            <div className="feat">
              <div className="fn">{hero.features.bg.n}</div>
              <div className="ft">{hero.features.bg.t}</div>
            </div>
          </div>
        </div>

        <div className="sheet-card">
          <h4>Equipment ⓘ</h4>
          <div className="kit">
            {hero.equip.map((e, i) => <div className="row tt-click" key={i} onClick={() => onTooltip(null,null,{title:e,body:"Part of your starting gear. Use it creatively — there's no single right answer. Ask your GM: \"Can I use my crowbar to pry open the display case?\""})} title={`Gear: ${e}`}>• {e}</div>)}
          </div>
        </div>

        <div className="sheet-card">
          <h4>Proficiencies &amp; Languages ⓘ</h4>
          <div className="kit">
            <div className="row tt-click" onClick={() => onTooltip(null,null,{title:"Armor Proficiency",body:"You know how to wear and fight in these armors without penalty. Wearing armor you're not proficient with means you have disadvantage on everything — attacks, saves, and ability checks that involve STR or DEX."})} title="What is Armor Proficiency?"><b>Armor:</b> {hero.profs.armor}</div>
            <div className="row tt-click" onClick={() => onTooltip(null,null,{title:"Weapon Proficiency",body:"You're trained with these weapons. When attacking with a weapon you're proficient with, you add your proficiency bonus (+2) to the attack roll. Without proficiency, you only add your ability modifier."})} title="What is Weapon Proficiency?"><b>Weapons:</b> {hero.profs.weapons}</div>
            <div className="row tt-click" onClick={() => onTooltip(null,null,{title:"Tool Proficiency",body:"You can use these tools effectively. If you're proficient with thieves' tools, you add +2 to lockpicking checks. Without proficiency, you can still try — but no bonus."})} title="What is Tool Proficiency?"><b>Tools:</b> {hero.profs.tools}</div>
            <div className="row tt-click" onClick={() => onTooltip(null,null,{title:"Languages",body:"The languages your character can speak, read, and write. Common is the universal trade language. Thieves' Cant is a coded rogue dialect. Knowing a language can mean the difference between overhearing a plot and missing the clue entirely."})} title="What are Languages?"><b>Languages:</b> {hero.profs.langs}</div>
          </div>
        </div>
      </div>

      {/* Quick play reference */}
      <div className="play-box">
        <div className="ph">On Your Turn</div>
        <ul>
          <li><b>Risky action?</b> Roll <b>d20 + ability modifier</b>. GM tells you the result.</li>
          <li><b>Attack?</b> Roll <b>d20 + To Hit</b>. On a hit, roll <b>Damage</b> dice.</li>
          <li><b>Move + Action</b> per turn. Bonus action if your sheet says you have one.</li>
          <li><b>Hit 0 HP?</b> Make death saves. A friend can stabilize or heal you.</li>
        </ul>
      </div>
    </>
  );
}

function TabCombat({ hero, onTooltip }) {
  const profBonus = hero.prof.replace('+', '');
  return (
    <>
      <div className="sec-label">Combat Statistics ⓘ</div>
      <div className="combat-stats">
        <div className="combat-stat tt-click" onClick={() => onTooltip('combat','ac')}>
          <div className="cs-val">{hero.ac}</div>
          <div className="cs-lab">Armor Class ⓘ</div>
        </div>
        <div className="combat-stat tt-click" onClick={() => onTooltip('combat','init')}>
          <div className="cs-val">{hero.init}</div>
          <div className="cs-lab">Initiative ⓘ</div>
        </div>
        <div className="combat-stat tt-click" onClick={() => onTooltip('combat','speed')}>
          <div className="cs-val" style={{fontSize:'1.1rem'}}>{hero.speed}</div>
          <div className="cs-lab">Speed ⓘ</div>
        </div>
        <div className="combat-stat tt-click" onClick={() => onTooltip('combat','prof')}>
          <div className="cs-val">{hero.prof}</div>
          <div className="cs-lab">Prof Bonus ⓘ</div>
        </div>
      </div>

      <div className="sec-label">Hit Points</div>
      <div className="hp-block">
        <div className="hp-row">
          <div className="hp-item tt-click" onClick={() => onTooltip('combat','hp')}>
            <div className="hp-lab">HP Maximum ⓘ</div>
            <div className="hp-val">{hero.hp}</div>
          </div>
          <div className="hp-item">
            <div className="hp-lab">Current HP</div>
            <div className="hp-input" contentEditable suppressContentEditableWarning>{hero.hp}</div>
          </div>
          <div className="hp-item">
            <div className="hp-lab">Temp HP</div>
            <div className="hp-input" contentEditable suppressContentEditableWarning>0</div>
          </div>
        </div>
        <div className="hp-sub tt-click" onClick={() => onTooltip('combat','hd')}>Hit Dice: {hero.hitDice} ⓘ</div>
        <div className="death-pips-section tt-click" onClick={() => onTooltip('combat','death')} title="How do Death Saves work?">
          <div className="dp-label">Death Saves ⓘ</div>
          <div className="death-pips">
            <span className="dp-sub">Successes</span>
            {[...Array(3)].map((_, i) => <span key={`s${i}`} className="pip" />)}
          </div>
          <div className="death-pips">
            <span className="dp-sub">Failures</span>
            {[...Array(3)].map((_, i) => <span key={`f${i}`} className="pip fail" />)}
          </div>
        </div>
      </div>

      <div className="sec-label">Attacks &amp; Spellcasting</div>
      <table className="atk-table">
        <thead><tr><th>Attack</th><th>To Hit</th><th>Damage</th></tr></thead>
        <tbody>
          {hero.attacks.map((a, i) => (
            <tr className="tt-click" key={i} onClick={() => onTooltip(null,null,{
              title:a.n,
              body:`<b>To Hit:</b> Roll d20 + ${a.hit}. If total ≥ target's AC, you hit!<br><b>Damage:</b> Roll ${a.dmg} on a hit.<br><b>Type:</b> ${a.nt || 'varies'}`
            })}>
              <td><span className="atk-name">{a.n}</span><br /><span className="atk-note">{a.nt}</span></td>
              <td className="atk-hit">{a.hit}</td>
              <td className="atk-dmg">{a.dmg}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {hero.spell && (
        <>
          <div className="sec-label">Spellcasting</div>
          <div className="spell-head">
            <div className="spell-stat tt-click" onClick={() => onTooltip(null,null,{title:"Spell Save DC",body:"The number enemies must roll to resist your spells. Calculated as 8 + proficiency bonus + spellcasting ability modifier. Higher DC = harder to resist."})}><span>Save DC</span>{hero.spell.dc}</div>
            <div className="spell-stat tt-click" onClick={() => onTooltip(null,null,{title:"Spell Attack",body:"Your bonus when making a spell attack roll. d20 + this number vs target's AC. Calculated as proficiency bonus + spellcasting ability modifier."})}><span>Spell Attack</span>{hero.spell.atk}</div>
          </div>
          <SlotPips n={hero.spell.slots} />
          <div className="spell-group">
            <div className="gl">Cantrips (at will)</div>
            <div className="spell-chips">
              {hero.spell.cantrips.map(c => <span key={c} className="spell-chip tt-click" onClick={() => onTooltip('spell',c.replace(' (racial)',''))} title={`What does ${c} do?`}>{c}</span>)}
            </div>
          </div>
          <div className="spell-group">
            <div className="gl">{hero.spell.label}</div>
            <div className="spell-chips">
              {hero.spell.known.map(c => {
                const name = c.replace(/\s*\(domain\)\s*|\s*\(patron\)\s*/g, '');
                return <span key={c} className="spell-chip tt-click" onClick={() => onTooltip('spell',name)} title={`What does ${name} do?`}>{c}</span>;
              })}
            </div>
          </div>
        </>
      )}

      <div className="sec-label">Resistances / Vulnerabilities / Immunities</div>
      <div className="rvi-grid">
        <div className="sheet-card tt-click" onClick={() => onTooltip(null,null,{title:"Damage Resistance",body:"When you have resistance to a damage type, you take <b>half damage</b> from it. Fire resistance turns 10 fire damage into 5. Multiple sources of resistance don't stack — you either have resistance or you don't."})}>
          <h4>Damage Resistances ⓘ</h4>
          <div className="kit"><div className="row">None</div></div>
        </div>
        <div className="sheet-card tt-click" onClick={() => onTooltip(null,null,{title:"Damage Vulnerability",body:"When you're vulnerable to a damage type, you take <b>double damage</b> from it. Skeletons are vulnerable to bludgeoning — that mace hurts twice as much."})}>
          <h4>Damage Vulnerabilities ⓘ</h4>
          <div className="kit"><div className="row">None</div></div>
        </div>
        <div className="sheet-card tt-click" onClick={() => onTooltip(null,null,{title:"Damage Immunity",body:"You take <b>no damage</b> from this type. Creatures made of fire are immune to fire. Poison-immune creatures ignore poison damage entirely."})}>
          <h4>Damage Immunities ⓘ</h4>
          <div className="kit"><div className="row">None</div></div>
        </div>
        <div className="sheet-card tt-click" onClick={() => onTooltip(null,null,{title:"Condition Immunity",body:"You <b>can't be affected</b> by this condition. Immune to charmed? Sirens, charm spells, and hypnotic patterns don't work on you at all."})}>
          <h4>Condition Immunities ⓘ</h4>
          <div className="kit"><div className="row">None</div></div>
        </div>
      </div>

      <div className="sec-label">Inspiration &amp; Exhaustion</div>
      <div className="insp-block">
        <div className="insp-item tt-click" onClick={() => onTooltip(null,null,{title:"Inspiration",body:"A reward from your GM for great roleplaying or clever ideas. Spend it to gain <b>advantage</b> on one d20 roll. You can only hold one at a time. It's a \"get out of jail free\" card — use it when it really counts."})}>
          <div className="insp-lab">Inspiration ⓘ</div>
          <div className="insp-pips">
            <span className="pip insp-pip" />
          </div>
        </div>
        <div className="insp-item tt-click" onClick={() => onTooltip(null,null,{title:"Exhaustion",body:"Six levels, each worse than the last:<br><b>Level 1:</b> Disadvantage on ability checks<br><b>Level 2:</b> Speed halved<br><b>Level 3:</b> Disadvantage on attacks and saves<br><b>Level 4:</b> HP max halved<br><b>Level 5:</b> Speed reduced to 0<br><b>Level 6:</b> Death<br>Recover one level per long rest."})}>
          <div className="insp-lab">Exhaustion Level ⓘ</div>
          <div className="insp-val">0</div>
        </div>
      </div>
    </>
  );
}

function TabSkills({ hero, onTooltip }) {
  const profBonus = parseInt(hero.prof.replace('+', ''));
  const trainedSkillNames = new Set(hero.skills.map(s => s[0]));
  const expertSkillNames = new Set(hero.skills.filter(s => s[2]).map(s => s[0]));

  function getSkillBonus(skillName) {
    const found = hero.skills.find(s => s[0] === skillName);
    if (found) return found[1];
    return null;
  }

  function getPassive(perception) {
    const base = 10;
    if (perception === 'Perception') {
      return hero.pp;
    }
    const bonus = getSkillBonus(perception);
    if (bonus) return base + parseInt(bonus.replace('+', ''));
    return base;
  }

  return (
    <>
      <div className="sec-label">Ability Scores</div>
      <div className="abilities">
        {ABIL_ORDER.map(a => {
          const [score, mod, save, prof] = hero.ab[a];
          return (
            <div className="abil tt-click" key={a} onClick={() => onTooltip('abil',a)} title={`What is ${ABIL_FULL[a]}?`}>
              <div className="name">{ABIL_FULL[a]} ⓘ</div>
              <div className="mod">{mod}</div>
              <div className="score">score {score}</div>
            </div>
          );
        })}
      </div>

      <div className="sec-label">Proficiencies</div>
      <div className="prof-summary">
        <div className="prof-item tt-click" onClick={() => onTooltip('combat','prof')}>
          <div className="prof-lab">Proficiency Bonus ⓘ</div>
          <div className="prof-val">{hero.prof}</div>
        </div>
        <div className="prof-item">
          <div className="prof-lab">Armor</div>
          <div className="prof-val" style={{fontSize:'0.8rem'}}>{hero.profs.armor}</div>
        </div>
        <div className="prof-item">
          <div className="prof-lab">Weapons</div>
          <div className="prof-val" style={{fontSize:'0.8rem'}}>{hero.profs.weapons}</div>
        </div>
        <div className="prof-item">
          <div className="prof-lab">Tools</div>
          <div className="prof-val" style={{fontSize:'0.8rem'}}>{hero.profs.tools}</div>
        </div>
      </div>

      <div className="sec-label">Skills</div>
      <table className="skills-full-table">
        <thead>
          <tr>
            <th>Skill</th>
            <th>Ability</th>
            <th>Bonus</th>
            <th>Proficient</th>
          </tr>
        </thead>
        <tbody>
          {SKILL_LIST.map(sk => {
            const isProf = trainedSkillNames.has(sk.name);
            const isExpert = expertSkillNames.has(sk.name);
            const bonus = getSkillBonus(sk.name);
            const abilMod = hero.ab[sk.abil][1];
            const displayBonus = bonus || abilMod;
            return (
              <tr key={sk.name} className={`tt-click ${isProf ? 'prof-row' : ''}`} onClick={() => onTooltip('skill',sk.name)} title={`What is ${sk.name}?`}>
                <td>
                  <span className="skill-name">{sk.name}</span>
                  {isExpert && <span className="exp">expert</span>}
                </td>
                <td className="skill-abil">{sk.abil}</td>
                <td className="skill-bonus">{displayBonus}</td>
                <td className="skill-prof">
                  {isProf ? <span className="sdot" /> : <span className="sdot empty" />}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="sec-label">Passive Scores</div>
      <div className="passive-grid">
        <div className="passive-item tt-click" onClick={() => onTooltip('combat','pp')}>
          <div className="passive-val">{hero.pp}</div>
          <div className="passive-lab">Perception ⓘ</div>
        </div>
        <div className="passive-item tt-click" onClick={() => onTooltip(null,null,{title:"Passive Investigation",body:"Your passive Investigation score = 10 + INT mod + proficiency (if trained). Used when deducing clues without actively searching — spotting a pattern, realizing a document was forged, or noticing something is out of place."})}>
          <div className="passive-val">{getPassive('Investigation')}</div>
          <div className="passive-lab">Investigation ⓘ</div>
        </div>
        <div className="passive-item tt-click" onClick={() => onTooltip(null,null,{title:"Passive Insight",body:"Your passive Insight score = 10 + WIS mod + proficiency (if trained). Used to passively detect lies, sense emotions, or read a room. If someone is bluffing and their Deception roll is lower than your passive Insight, you get a hunch."})}>
          <div className="passive-val">{getPassive('Insight')}</div>
          <div className="passive-lab">Insight ⓘ</div>
        </div>
      </div>

      <p className="savehint">
        Skills marked with <span className="sdot" /> are trained. Expert skills get double proficiency bonus.
      </p>
    </>
  );
}

function TabDetails({ hero, onTooltip }) {
  return (
    <>
      <div className="sec-label">Character Details</div>
      <div className="details-grid">
        <div className="sheet-card">
          <h4>Personality Traits</h4>
          <div className="kit">
            <div className="row">{hero.tagline}</div>
          </div>
        </div>
        <div className="sheet-card">
          <h4>Ideals</h4>
          <div className="kit">
            <div className="row">Driven by their background and training.</div>
          </div>
        </div>
        <div className="sheet-card">
          <h4>Bonds</h4>
          <div className="kit">
            <div className="row">Connected to Dr. Dannell and the fate of Varkenbluff.</div>
          </div>
        </div>
        <div className="sheet-card">
          <h4>Flaws</h4>
          <div className="kit">
            <div className="row">Yet to be discovered through adventure.</div>
          </div>
        </div>
      </div>

      <div className="sec-label">Appearance &amp; Background</div>
      <div className="details-grid">
        <div className="sheet-card">
          <h4>Background</h4>
          <div className="kit">
            <div className="row"><b>{hero.features.bg.n}</b></div>
            <div className="row">{hero.features.bg.t}</div>
          </div>
        </div>
        <div className="sheet-card tt-click" onClick={() => onTooltip(null,null,{title:"Species: " + hero.kind.split(' ')[0],body:"Your character's species (sometimes called 'race'). Determines your ancestry traits — things like Darkvision, Luck, or Fey Ancestry. Different species have different natural abilities and stat bonuses."})}>
          <h4>Species ⓘ</h4>
          <div className="kit">
            <div className="row">{hero.kind.split(' ')[0]}</div>
          </div>
        </div>
        <div className="sheet-card tt-click" onClick={() => onTooltip(null,null,{title:"Class: " + hero.kind.split(' ').slice(1).join(' '),body:"Your profession and skillset. Determines your Hit Dice, proficiencies, saving throw training, and all your class features. Each class has a unique role: Rogues sneak, Wizards cast, Fighters tank."})}>
          <h4>Class ⓘ</h4>
          <div className="kit">
            <div className="row">{hero.kind.split(' ').slice(1).join(' ')}</div>
          </div>
        </div>
        <div className="sheet-card tt-click" onClick={() => onTooltip(null,null,{title:"Level " + hero.level,body:"Your experience and power. Level 1 is the beginning — you have your core abilities. At level 2 you gain more features. At level 3 most classes choose a subclass (specialization). Levels go up to 20. Higher level = more HP, higher proficiency bonus, more spells, and stronger abilities."})}>
          <h4>Level ⓘ</h4>
          <div className="kit">
            <div className="row">{hero.level}</div>
          </div>
        </div>
      </div>

      <div className="sec-label">Proficiencies &amp; Languages</div>
      <div className="cards-2col">
        <div className="sheet-card">
          <h4>Languages</h4>
          <div className="kit">
            <div className="row">{hero.profs.langs}</div>
          </div>
        </div>
        <div className="sheet-card">
          <h4>Armor Proficiencies</h4>
          <div className="kit">
            <div className="row">{hero.profs.armor}</div>
          </div>
        </div>
        <div className="sheet-card">
          <h4>Weapon Proficiencies</h4>
          <div className="kit">
            <div className="row">{hero.profs.weapons}</div>
          </div>
        </div>
        <div className="sheet-card">
          <h4>Tool Proficiencies</h4>
          <div className="kit">
            <div className="row">{hero.profs.tools}</div>
          </div>
        </div>
      </div>

      <div className="sec-label">Equipment</div>
      <div className="sheet-card">
        <h4>Inventory</h4>
        <div className="kit">
          {hero.equip.map((e, i) => <div className="row" key={i}>• {e}</div>)}
        </div>
      </div>

      <div className="sec-label">Currency</div>
      <div className="currency-grid">
        <div className="currency-item">
          <div className="curr-lab">CP</div>
          <div className="curr-val" contentEditable suppressContentEditableWarning>0</div>
        </div>
        <div className="currency-item">
          <div className="curr-lab">SP</div>
          <div className="curr-val" contentEditable suppressContentEditableWarning>0</div>
        </div>
        <div className="currency-item">
          <div className="curr-lab">GP</div>
            <div className="curr-val" contentEditable suppressContentEditableWarning>{hero.equip.find(e => e.match(/(\d+)\s*gp/))?.match(/(\d+)/)?.[1] || 0}</div>
        </div>
        <div className="currency-item">
          <div className="curr-lab">EP</div>
          <div className="curr-val" contentEditable suppressContentEditableWarning>0</div>
        </div>
        <div className="currency-item">
          <div className="curr-lab">PP</div>
          <div className="curr-val" contentEditable suppressContentEditableWarning>0</div>
        </div>
      </div>

      <div className="sec-label">Backstory</div>
      <div className="sheet-card">
        <div className="backstory-text">{hero.quote}</div>
      </div>
    </>
  );
}

export default function HeroModal({ hero, onClose }) {
  const [activeTab, setActiveTab] = useState('main');
  const [tooltip, setTooltip] = useState(null);

  const openTooltip = (type, key, extra) => {
    const entry = getTooltip(type, key);
    if (entry) {
      setTooltip({ title: entry.title || extra?.title || key, body: entry.desc || entry.body || bodyFromAbil(entry) || '' });
    } else if (extra) {
      setTooltip({ title: extra.title || key, body: extra.body || '' });
    }
  };

  const bodyFromAbil = (entry) => {
    if (entry.uses) return entry.body + '<br><br><b>Used for:</b> ' + entry.uses.join('<br>');
    return entry.body;
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-sheet" onClick={e => e.stopPropagation()} role="dialog" aria-label={`${hero.name} character sheet`}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <button className="modal-print" onClick={() => window.print()}>Print</button>

        <div className="tab-bar">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="sheet-inner">
          {activeTab === 'main' && <TabMain hero={hero} onTooltip={openTooltip} />}
          {activeTab === 'combat' && <TabCombat hero={hero} onTooltip={openTooltip} />}
          {activeTab === 'skills' && <TabSkills hero={hero} onTooltip={openTooltip} />}
          {activeTab === 'details' && <TabDetails hero={hero} onTooltip={openTooltip} />}
        </div>
      </div>

      {tooltip && (
        <TooltipModal title={tooltip.title} body={tooltip.body} onClose={() => setTooltip(null)} />
      )}
    </div>
  );
}
