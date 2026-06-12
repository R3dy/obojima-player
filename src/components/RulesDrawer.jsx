export default function RulesDrawer({ onClose }) {
  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} />
      <aside className="drawer-panel" role="dialog" aria-label="How to Play">
        <div className="drawer-header">
          <h2>How to Play</h2>
          <button className="drawer-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className="drawer-body">
          <div className="drawer-section">
            <h3>What D&amp;D Is</h3>
            <p>A collaborative storytelling game. The <b>Game Master</b> describes the world and controls every character who isn&rsquo;t you. You control one hero and decide what they do. No board, no win condition, no script — the story is whatever you make it.</p>
            <p>Think of it like an open-world game where the dialogue options are <b>anything you can think of</b>.</p>
            <p>You&rsquo;re on <b>Obojima</b> — an island of spirits, strange First Age technology, and villages where adventure hides in plain sight.</p>
          </div>

          <div className="drawer-section">
            <h3>The Core Loop</h3>
            <div className="drawer-flow">
              <div className="step"><span className="sn">1</span>GM sets the scene</div>
              <span className="arrow">→</span>
              <div className="step"><span className="sn">2</span>You decide</div>
              <span className="arrow">→</span>
              <div className="step"><span className="sn">3</span>Roll if uncertain</div>
              <span className="arrow">→</span>
              <div className="step"><span className="sn">4</span>GM tells result</div>
            </div>
            <div className="drawer-example">
              <b>GM:</b> &ldquo;The witch&rsquo;s workshop stretches around you like a canyon. A massive cat sleeps on a cushion at the top of the stairs.&rdquo;<br /><br />
              <b>You:</b> &ldquo;I want to move past it quietly.&rdquo;<br /><br />
              <b>GM:</b> &ldquo;Roll a Stealth check — d20 + your Stealth bonus.&rdquo;<br /><br />
              <b>You:</b> [rolls 14 + 5 = 19]<br /><br />
              <b>GM:</b> &ldquo;It stays asleep. You slip past.&rdquo;
            </div>
          </div>

          <div className="drawer-section">
            <h3>The Dice</h3>
            <p>Higher is always better. A <b>natural 20</b> is a critical success. A <b>natural 1</b> is a critical failure.</p>
            <div className="drawer-dice">
              <div className="die-chip"><span className="dn">d20</span><span className="ds">Primary</span><span className="du">Attacks, skills, saves</span></div>
              <div className="die-chip"><span className="dn">d4</span><span className="ds">Small</span><span className="du">Daggers, minor heals</span></div>
              <div className="die-chip"><span className="dn">d6</span><span className="ds">Standard</span><span className="du">Shortswords, spells</span></div>
              <div className="die-chip"><span className="dn">d8</span><span className="ds">Common</span><span className="du">Longswords, bows</span></div>
              <div className="die-chip"><span className="dn">d10</span><span className="ds">Heavy</span><span className="du">Big weapons, fire</span></div>
              <div className="die-chip"><span className="dn">d12</span><span className="ds">Massive</span><span className="du">Greataxes</span></div>
            </div>
          </div>

          <div className="drawer-section">
            <h3>Your Character Sheet</h3>
            <p>Don&rsquo;t memorize this. Your GM tells you what to roll.</p>
            <div className="drawer-ref-grid">
              <div className="ref-chip"><span className="rl">Ability Scores</span><span className="rv">Core Stats</span><span className="rd">STR, DEX, CON, INT, WIS, CHA. The modifier is what you add to rolls.</span></div>
              <div className="ref-chip"><span className="rl">Skills</span><span className="rv">Trained</span><span className="rd">Stealth, Persuasion, etc. A bonus means you&rsquo;re good at it.</span></div>
              <div className="ref-chip"><span className="rl">Armor Class</span><span className="rv">Defense</span><span className="rd">How hard you are to hit. Attacks must meet or beat this number.</span></div>
              <div className="ref-chip"><span className="rl">Hit Points</span><span className="rv">Health</span><span className="rd">Damage you can take. At 0 you start death saves.</span></div>
              <div className="ref-chip"><span className="rl">Attacks</span><span className="rv">Combat</span><span className="rd">To Hit = what you add to d20. Damage = what you roll on a hit.</span></div>
              <div className="ref-chip"><span className="rl">Proficiency</span><span className="rv">Training</span><span className="rd">Bonus on trained skills/attacks. +2 now, grows with levels.</span></div>
            </div>
          </div>

          <div className="drawer-section">
            <h3>Combat</h3>
            <ul>
              <li><b>Initiative</b> sets turn order: d20 + initiative bonus. Highest first.</li>
              <li>Per turn: <b>one Action + one Move</b> (usually 30 ft).</li>
              <li>Common actions: Attack, Cast a Spell, Dash (double move), Dodge (harder to hit), Help (give ally advantage).</li>
              <li><b>Attack:</b> d20 + attack bonus ≥ target AC = hit. Then roll damage.</li>
              <li><b>Saving throw:</b> Roll to resist spells, traps, poison. Dots on your sheet show which ones you&rsquo;re good at.</li>
              <li><b>Advantage:</b> roll d20 twice, take higher. <b>Disadvantage:</b> roll twice, take lower.</li>
              <li>Try anything — the GM adjudicates. &ldquo;Can I swing from the chandelier?&rdquo; Yes, and they&rsquo;ll tell you what to roll.</li>
            </ul>
          </div>

          <div className="drawer-section">
            <h3>Spells</h3>
            <ul>
              <li><b>Cantrips:</b> Cast at will. No cost.</li>
              <li><b>Leveled spells:</b> Use spell slots. Regain slots on a long rest.</li>
              <li><b>Spell attack:</b> d20 + spell attack bonus vs AC.</li>
              <li><b>Saving throw:</b> Target rolls vs your Spell Save DC to resist.</li>
            </ul>
          </div>

          <div className="drawer-section">
            <h3>Equipment</h3>
            <ul>
              <li><b>Healing potions:</b> Everyone has one. Drink to recover HP.</li>
              <li><b>Gear:</b> Rope, grappling hooks, lanterns, tools — use them creatively.</li>
              <li><b>Gold Flowers:</b> Obojima&rsquo;s currency. Spend in villages.</li>
            </ul>
          </div>

          <div className="drawer-section">
            <h3>Remember</h3>
            <ol className="drawer-rules">
              <li><b>You can try anything.</b> The GM figures out what happens.</li>
              <li><b>Work as a team.</b> Everyone&rsquo;s a main character.</li>
              <li><b>You don&rsquo;t need to know the rules.</b> That&rsquo;s the GM&rsquo;s job.</li>
              <li><b>Failure makes the story better.</b> Bad rolls create the best moments.</li>
              <li><b>Commit to the character.</b> Make choices your hero would make.</li>
            </ol>
          </div>
        </div>
      </aside>
    </>
  );
}
