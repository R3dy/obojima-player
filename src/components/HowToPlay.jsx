export default function HowToPlay({ onBack }) {
  return (
    <section className="htp-view" aria-live="polite">
      <div className="detail-actions">
        <button className="btn btn-back" onClick={onBack} autoFocus>
          ← Back to heroes
        </button>
      </div>

      <div className="htp-hero">
        <h2>How to Play</h2>
        <p className="htp-sub">Everything you need to know before your first session on Obojima</p>
      </div>

      <div className="htp-card">
        <h3>What D&amp;D Actually Is</h3>
        <p>D&amp;D is a collaborative storytelling game. One person — the <b>Game Master</b> — describes the world and controls every character who isn&rsquo;t you. Everyone else plays a single hero and decides what that hero does. There&rsquo;s no board, no win condition, and no fixed script. The story is whatever you make it.</p>
        <p>You&rsquo;re not playing <em>against</em> the GM. They&rsquo;re building the world and you&rsquo;re building the story through your choices. Think of it like an open-world game where the &ldquo;dialogue options&rdquo; are literally anything you can think of.</p>
        <p>This takes place on <b>Obojima</b> — an island full of spirits, strange First Age technology, and villages where adventure hides in plain sight. You&rsquo;re one of eight heroes about to step into it.</p>
      </div>

      <div className="htp-card">
        <h3>The Core Loop</h3>
        <p>Every moment of play follows the same pattern:</p>
        <div className="htp-flow">
          <div className="step"><span className="nolabel">1</span>GM sets the scene</div>
          <div className="arrow">→</div>
          <div className="step"><span className="nolabel">2</span>You decide what to do</div>
          <div className="arrow">→</div>
          <div className="step"><span className="nolabel">3</span>Roll if the outcome is uncertain</div>
          <div className="arrow">→</div>
          <div className="step"><span className="nolabel">4</span>GM describes the result</div>
        </div>
        <div className="htp-example">
          <b>GM:</b> &ldquo;The witch&rsquo;s workshop stretches around you like a canyon. A massive cat is asleep on a cushion at the top of the stairs, each breath rumbling through the floorboards.&rdquo;<br /><br />
          <b>You:</b> &ldquo;I want to move past it quietly.&rdquo;<br /><br />
          <b>GM:</b> &ldquo;Roll a Stealth check. d20 plus your Stealth bonus.&rdquo;<br /><br />
          <b>You:</b> [rolls 14 + 5 = 19]<br /><br />
          <b>GM:</b> &ldquo;Its ear twitches, but it stays asleep. You slip past.&rdquo;
        </div>
        <p style={{fontSize:'.84rem', color:'var(--text-muted)', fontStyle:'italic'}}>The GM describes what you see, hear, smell, taste, and touch. You respond with what your character does. If the outcome isn&rsquo;t guaranteed, dice decide it. That&rsquo;s the entire game.</p>
      </div>

      <div className="htp-card">
        <h3>The Dice</h3>
        <p>D&amp;D uses polyhedral dice. Higher numbers are better. A <b>natural 20</b> (the die shows 20 before modifiers) is a critical success — the best possible outcome. A <b>natural 1</b> is a critical failure — things go wrong in an interesting way.</p>
        <div className="dice-grid">
          <div className="dice-chip"><span className="dn">d20</span><span className="ds">Primary die</span><span className="du">Attacks, skills, saving throws</span></div>
          <div className="dice-chip"><span className="dn">d4</span><span className="ds">Small</span><span className="du">Daggers, minor heals</span></div>
          <div className="dice-chip"><span className="dn">d6</span><span className="ds">Standard</span><span className="du">Shortswords, many spells</span></div>
          <div className="dice-chip"><span className="dn">d8</span><span className="ds">Common weapon</span><span className="du">Longswords, bows, spells</span></div>
          <div className="dice-chip"><span className="dn">d10</span><span className="ds">Heavy</span><span className="du">Two-handed weapons, fire</span></div>
          <div className="dice-chip"><span className="dn">d12</span><span className="ds">Massive</span><span className="du">Greataxes, barbarian hits</span></div>
        </div>
      </div>

      <div className="htp-card">
        <h3>Reading Your Character Sheet</h3>
        <p>Don&rsquo;t try to memorize this. Your GM will tell you what to roll. This is just so you understand what you&rsquo;re looking at.</p>
        <div className="sheet-quick-grid">
          <div className="sheet-qk"><span className="qkl">Ability Scores</span><span className="qkv">Core stats</span><span className="qkd">Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma. The modifier (-1 to +5) is what you add to rolls.</span></div>
          <div className="sheet-qk"><span className="qkl">Skills</span><span className="qkv">Trained abilities</span><span className="qkd">Stealth, Persuasion, Athletics — things you&rsquo;ve practiced. A higher bonus means you&rsquo;re better at it.</span></div>
          <div className="sheet-qk"><span className="qkl">Armor Class</span><span className="qkv">Defense rating</span><span className="qkd">How hard you are to hit. An enemy&rsquo;s attack roll must meet or beat this number. Higher is better.</span></div>
          <div className="sheet-qk"><span className="qkl">Hit Points</span><span className="qkv">Health pool</span><span className="qkd">How much damage you can take. Reaches 0 and you start making death saves. Healing brings it back.</span></div>
          <div className="sheet-qk"><span className="qkl">Attacks</span><span className="qkv">Combat options</span><span className="qkd">Weapons and spells you can use in a fight. &ldquo;To Hit&rdquo; is what you add to your d20. &ldquo;Damage&rdquo; is what you roll on a hit.</span></div>
          <div className="sheet-qk"><span className="qkl">Proficiency</span><span className="qkv">Training bonus</span><span className="qkd">Added to skills and attacks you&rsquo;re trained in. Currently +2. Increases as you level up.</span></div>
        </div>
      </div>

      <div className="htp-card">
        <h3>Combat</h3>
        <ul>
          <li><b>Initiative</b> determines turn order. Everyone rolls a d20 + their initiative bonus. Highest goes first.</li>
          <li>On your turn you get <b>one Action and one Move</b> (usually up to your speed in feet). Common actions: Attack, Cast a Spell, Dash (double move), Dodge (harder to hit), Help (give an ally advantage), or anything creative you can describe.</li>
          <li><b>Attacking:</b> Roll d20 + your attack bonus. If the total meets or exceeds the target&rsquo;s AC, you hit. Then roll damage dice.</li>
          <li>A <b>saving throw</b> is when you roll to resist an effect (a spell, a trap, poison). Your sheet shows which saves you&rsquo;re proficient in (marked with a dot).</li>
          <li><b>Advantage</b> means roll the d20 twice and take the higher result. <b>Disadvantage</b> means roll twice and take the lower.</li>
          <li>Try anything. &ldquo;Can I kick sand in their face?&rdquo; &ldquo;Can I swing from the rafters?&rdquo; The GM will tell you what to roll.</li>
        </ul>
      </div>

      <div className="htp-card">
        <h3>Spells</h3>
        <p>Some characters cast spells — Yuki the bard, Mei the wizard, Aoi the druid, Kenji the paladin. Here&rsquo;s the quick version:</p>
        <ul>
          <li><b>Cantrips</b> are basic spells you can cast at will. No cost, unlimited uses.</li>
          <li><b>Leveled spells</b> consume <b>spell slots</b> — your reserve of magical energy. You regain spent slots when you finish a long rest.</li>
          <li><b>Spell attack:</b> You roll to hit (d20 + your spell attack modifier). <b>Saving throw:</b> the target rolls to resist against your Spell Save DC.</li>
          <li>On Obojima, magic includes folding paper into origami constructs, summoning petal storms that heal allies, and brewing potions from island ingredients. Your spell list is on your sheet.</li>
        </ul>
      </div>

      <div className="htp-card">
        <h3>Equipment &amp; Items</h3>
        <ul>
          <li><b>Healing potions:</b> Every hero starts with one. Drink it to recover hit points. Extremely useful.</li>
          <li><b>Tools and gear:</b> Rope, grappling hooks, lanterns, lockpicks. Use them creatively — the GM will adjudicate.</li>
          <li><b>Gold Flowers:</b> Obojima&rsquo;s currency. Spend them in villages for supplies, lodging, or information.</li>
          <li>You&rsquo;ll find more gear — and potentially magical First Age artifacts — during your adventures.</li>
        </ul>
      </div>

      <div className="htp-card">
        <h3>Things to Remember</h3>
        <ol className="golden-rules">
          <li><b>You can try anything.</b> The only limit is your imagination. The GM figures out what happens.</li>
          <li><b>Work as a team.</b> Share the spotlight. Cover each other&rsquo;s weaknesses. Everyone&rsquo;s a main character.</li>
          <li><b>You don&rsquo;t need to know the rules.</b> Your GM handles mechanics. You focus on what your character would do.</li>
          <li><b>Failure isn&rsquo;t losing.</b> A bad roll doesn&rsquo;t end the game — it just makes the story more interesting. Some of the best moments come from failure.</li>
          <li><b>Commit to the bit.</b> Make choices your character would make, even if they&rsquo;re not optimal. That&rsquo;s what makes the story yours.</li>
        </ol>
      </div>

      <div className="htp-foot">Pick your hero. The island is waiting.</div>
    </section>
  );
}
