import { useState } from 'react';
import useEscapeKey from './useEscapeKey.js';

export default function WorldDrawer({ onClose }) {
  const [section, setSection] = useState('city');
  useEscapeKey(onClose);

  const sections = [
    { id: 'city', label: 'Varkenbluff' },
    { id: 'museum', label: 'The Museum' },
    { id: 'dannell', label: 'Dr. Dannell' },
    { id: 'murkmire', label: 'The Murkmire' },
    { id: 'gala', label: 'Tonight' },
    { id: 'heist', label: 'Heist Tips' },
    { id: 'patrons', label: 'Your Patrons' },
  ];

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} />
      <div className="drawer-panel world-panel" role="dialog" aria-label="The Murkmire Heist">
        <div className="drawer-header">
          <h2>The Job</h2>
          <button className="drawer-close" onClick={onClose} aria-label="Close">×</button>
        </div>

        <nav className="world-nav">
          {sections.map(s => (
            <button
              key={s.id}
              className={`world-nav-btn ${section === s.id ? 'active' : ''}`}
              onClick={() => setSection(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>

        <div className="drawer-body world-body">
          {section === 'city' && <CitySection />}
          {section === 'museum' && <MuseumSection />}
          {section === 'dannell' && <DannellSection />}
          {section === 'murkmire' && <MurkmireSection />}
          {section === 'gala' && <GalaSection />}
          {section === 'heist' && <HeistSection />}
          {section === 'patrons' && <PatronsSection />}
        </div>
      </div>
    </>
  );
}

function CitySection() {
  return (
    <>
      <div className="drawer-section">
        <h3>The City of Varkenbluff</h3>
        <p>
          Varkenbluff is a city of learning — home to the prestigious Varkenbluff
          University, the Museum of Natural History, and a thriving community of
          scholars, nobles, and merchants. Marble columns and elegant archways
          define its architecture, and the streets hum with the bustle of academics
          debating history, culture, and science.
        </p>
        <p>
          But beneath its genteel surface, Varkenbluff has a darker side. The city's
          intellectuals often dismiss what they can't explain — and sometimes that
          dismissal invites disaster.
        </p>
      </div>

      <div className="drawer-section">
        <h3>Where Things Happen</h3>
        <div className="poi-list">
          <div className="poi-item">
            <div className="poi-name">The Sage's Quill</div>
            <div className="poi-desc">
              A quiet, plush tavern next to the museum that caters to academics.
              Dr. Dannell is waiting for you here in a purple hooded robe.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">Varkenbluff University</div>
            <div className="poi-desc">
              The city's beating intellectual heart. Dr. Dannell earned her
              doctorate here, taught here — and was recently fired from here.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">The Museum of Natural History</div>
            <div className="poi-desc">
              Your target. Three floors of exhibits, offices, and — tonight — a
              private gala in the Gemstone Wing. Twelve guards patrol after hours.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">The City Watch Headquarters</div>
            <div className="poi-desc">
              If you get caught, this is where they haul you. Best avoided.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MuseumSection() {
  return (
    <>
      <div className="drawer-section">
        <h3>Varkenbluff Museum of Natural History</h3>
        <p>
          A grand museum boasting enormous marble columns and elegant archways. It
          houses exhibits on ancient plants and cultures, prehistoric creatures,
          archaeology, and a glittering collection of gemstones and ore.
        </p>
        <p>
          The museum has <b>twelve guards</b>, a curator named <b>Alda Arkin</b>,
          and security measures that arm after closing at 8 p.m. — including
          magical <b>alarms</b>, animated statues, and a trapped gemstone pedestal.
        </p>
      </div>

      <div className="drawer-section">
        <h3>What the Public Knows</h3>
        <div className="poi-list">
          <div className="poi-item">
            <div className="poi-name">First Floor</div>
            <div className="poi-desc">
              Grand entrance with a marble column and information desk. Also
              contains the museum shops, ancient plants and cultures exhibits,
              curator's office, records room, and break room.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">Second Floor</div>
            <div className="poi-desc">
              Prehistoric creatures exhibit (with a famous allosaurus),
              Underground Wonders (gems & ore), archaeology displays, the
              Unearthed Café, and the Gemstone Wing — where tonight's gala is.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">Off the Map</div>
            <div className="poi-desc">
              There's a basement (storage and loading docks — where spare exhibits
              are kept) and an attic (event supplies, accessible by skylight).
              Neither is open to the public.
            </div>
          </div>
        </div>
      </div>

      <div className="drawer-section">
        <h3>Security You Should Know About</h3>
        <div className="drawer-example">
          By day: the museum is open to everyone. Guards keep an eye out but
          won't bother you unless you're caught in a restricted area.<br /><br />
          After 8 p.m.: alarms arm, statues animate, doors lock, and guards
          take their stations. You'll need to plan your approach carefully.
        </div>
      </div>
    </>
  );
}

function DannellSection() {
  return (
    <>
      <div className="drawer-section">
        <h3>Dr. Cassee Dannell</h3>
        <p>
          A brilliant anthropologist with a secret: she's been studying the occult
          for years. By day she's a respected academic and field scientist. By
          night she's the only person in Varkenbluff who understands the danger of
          the Murkmire Stone — because she's the only one who looked beyond
          conventional history.
        </p>
        <div className="drawer-example">
          Dr. Dannell is neutral good. She hired you because she's out of options:
          the university fired her, the museum banned her, and the stone hatches
          at midnight.
        </div>
      </div>

      <div className="drawer-section">
        <h3>What She Knows</h3>
        <ul>
          <li>The Murkmire Stone is an eldritch creature's <b>egg</b>, not a historical artifact.</li>
          <li>The egg can't be damaged or destroyed — only contained in a <b>crystal box</b> she built.</li>
          <li>Unearthing it triggered rapid development. It <b>hatches at midnight</b> tonight.</li>
          <li>Once hatched, the creature will feed and grow exponentially — <b>a city-level threat</b>.</li>
          <li>She'll wait in the alley between the museum and the Sage's Quill for your return.</li>
        </ul>
      </div>

      <div className="drawer-section">
        <h3>What She Gives You</h3>
        <ul>
          <li>A <b>gala ticket</b> for each of you — the only way to scout the Gemstone Wing.</li>
          <li>Appropriate <b>formal attire</b> in her <b>bag of holding</b>.</li>
          <li>The bag itself — stash your gear inside it, then smuggle it into the museum.</li>
          <li>A rough <b>sketch map</b> of the museum layout (incomplete — she's no architect).</li>
          <li><b>20 gp per person</b> (or 30 gp with a persuasive pitch) plus the bag of holding as the reward.</li>
        </ul>
      </div>
    </>
  );
}

function MurkmireSection() {
  return (
    <>
      <div className="drawer-section">
        <h3>The Murkmire</h3>
        <p>
          A murky, dangerous wetland outside Varkenbluff — the kind of place where
          prehistoric creatures were naturally preserved for millennia, and where
          archaeologists regularly unearth strange things.
        </p>
        <p>
          The Murkmire Stone was found here on a recent university dig. It appeared
          to be a ritual object — a light green, opaque ovoid with strange furrows,
          gemstone-like in sheen. Nobody could identify its composition. Dr. Dannell
          was the only one to suspect it was not made by any known civilization.
        </p>
      </div>

      <div className="drawer-section">
        <h3>The Murkmire Stone</h3>
        <div className="drawer-example">
          Weight: 10 pounds. Size: roughly the size of a large melon. It sits on
          a marble pedestal in the Gemstone Wing, flanked by informational placards
          — none of which mention Dr. Dannell's theory.<br /><br />
          <b>Starting at 10:30 p.m.</b> the egg becomes translucent and begins
          emitting pulses of magical energy every 10 minutes. Each pulse forces
          creatures within 20 feet to make a Wisdom save or suffer strange effects
          — whispers, sluggishness, premonitions, and worse.
        </div>
      </div>

      <div className="drawer-section">
        <h3>What Happens If It Hatches</h3>
        <p>
          An eight-foot-long eldritch horror emerges — ravenous for raw meat. It
          grows as it feeds. Guards first, then the museum, then the city. If
          it reaches Varkenbluff University, it'll be nearly unstoppable — a
          pony-sized nightmare that sets traps with metabolic slime and hunts by
          instinct. <b>The egg must not hatch outside its crystal cage.</b>
        </p>
      </div>
    </>
  );
}

function GalaSection() {
  return (
    <>
      <div className="drawer-section">
        <h3>Tonight's Gala — 6 p.m. to 8 p.m.</h3>
        <p>
          A private celebration in the Gemstone Wing for wealthy donors and
          distinguished guests. This is your reconnaissance window — the only
          time you can legally examine the Murkmire Stone and the security
          around it.
        </p>
        <p>
          Dress code: formal attire. No weapons, no visible armor. Tuck your
          gear into Dr. Dannell's bag of holding.
        </p>
      </div>

      <div className="drawer-section">
        <h3>Key People at the Gala</h3>
        <div className="poi-list">
          <div className="poi-item">
            <div className="poi-name">Alda Arkin — The Curator</div>
            <div className="poi-desc">
              An elf noble and retired professor. She deeply dislikes Dr. Dannell
              for her occult interests. Watch her clutch — it contains a master
              key, a map of guard patrol routes, and an alarm pass card.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">Maryam Bikram — Security Captain</div>
            <div className="poi-desc">
              A veteran of the city watch and a stickler for rules. Stationed at
              the gala entrance checking tickets. Also carries a pass card.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">Museum Gossip</div>
            <div className="poi-desc">
              Chat up attendees to learn rumors: the curator's been fidgety all
              night, exhibits are stored in the basement after hours, the museum's
              finances are struggling, or the curator collects oversized dolls.
            </div>
          </div>
        </div>
      </div>

      <div className="drawer-section">
        <h3>What To Look For</h3>
        <ul>
          <li>Study the <b>pedestal</b> — examine its base for tiny glyphs that hint at a trap.</li>
          <li>Spot the <b>secret doors</b> — hallways with cleaning supplies connect many exhibits.</li>
          <li>Note the <b>vent</b> between the Gemstone Wing and the Prehistoric Predators room.</li>
          <li>Watch the <b>curator's behavior</b> — what's she carrying? Where does she go?</li>
        </ul>
      </div>
    </>
  );
}

function HeistSection() {
  return (
    <>
      <div className="drawer-section">
        <h3>Approaches to the Heist</h3>
        <p>
          The museum closes at 8 p.m. and security activates. Here are ways to
          handle it:
        </p>
      </div>

      <div className="drawer-section">
        <h3>🔇 Hide Inside</h3>
        <ul>
          <li><b>Cleaning supply closets</b> — secret doors connect them between exhibits. Cramped but safe.</li>
          <li><b>Public privies</b> — guards nominally check them. Latch a stall from inside.</li>
          <li><b>Attic or basement</b> — guards don't sweep them at closing. The mimic in the basement might object.</li>
        </ul>
      </div>

      <div className="drawer-section">
        <h3>🌙 Sneak Back In</h3>
        <ul>
          <li><b>Front doors</b> — pick the lock (DC 16), bypass the alarm with a pass card, avoid the falling net trap and animated statues.</li>
          <li><b>Attic skylight</b> — climb the building with grappling hooks, pick the skylight lock (DC 14). Dark outside by then.</li>
          <li><b>Basement loading docks</b> — shove open the stiff doors (noisy, DC 15) or find the secret tunnel from the northwest corner.</li>
        </ul>
      </div>

      <div className="drawer-section">
        <h3>🃏 Social Infiltration</h3>
        <ul>
          <li><b>Blend in at the gala.</b> Gala attendees are nobles with no idea what they're celebrating.</li>
          <li><b>Steal a pass card</b> — found in the break room (area V7) or lifted from a guard (DC 14 Sleight of Hand).</li>
          <li><b>Steal the curator's clutch</b> — contains keys, guard routes, and a pass card.</li>
          <li><b>Find the arcane records</b> — the records room (area V6) reveals exactly where alarms are placed.</li>
        </ul>
      </div>

      <div className="drawer-section">
        <h3>⚠️ Critical Details</h3>
        <ul>
          <li>The pedestal is <b>rigged</b> — remove the stone and all doors lock (arcane lock, DC 20 to bypass).</li>
          <li>Swap the real stone with a <b>fake jade chunk</b> from area V9 (DC 10 Sleight of Hand).</li>
          <li>Starting at 10:30 p.m., the egg <b>pulses</b> with strange effects — be within 20 feet only briefly.</li>
          <li>At <b>midnight</b>, it hatches. Game over.</li>
        </ul>
      </div>

      <div className="drawer-section">
        <h3>Guards After Hours — Where They'll Be</h3>
        <p>
          Two in the grand entrance. Two in the Gemstone Wing. Two patrolling
          Underground Wonders and Archaeology. Two in Prehistoric Predators. One
          each in Ancient Plants, Ancient Cultures, Creatures of the Past, and
          the Unearthed Café. Finding the guard patrol document in the curator's
          office gives you advantage on Stealth checks to sneak past them.
        </p>
      </div>
    </>
  );
}

function PatronsSection() {
  return (
    <>
      <div className="drawer-section">
        <h3>The Golden Vault</h3>
        <p>
          A mysterious organization that recruits operatives for dangerous,
          ethically-motivated missions. They contacted you through a music box
          delivered by golden key. Their voice told you exactly what's at stake
          — and that they believe Dr. Dannell when no one else will.
        </p>
        <div className="drawer-example">
          "Greetings, operatives. The Golden Vault has learned that the egg of
          an eldritch horror has been mistaken for a historical object... This
          quest requires you to infiltrate the museum, steal the egg, and return
          it to Dr. Dannell, who will neutralize it. Good luck, operatives."
        </div>
      </div>

      <div className="drawer-section">
        <h3>Dr. Dannell's Connections</h3>
        <p>
          Each of you has a reason to trust Dr. Dannell:
        </p>
        <ul>
          <li><b>Family friend:</b> The Dannell clan are well-known professors. You've rubbed shoulders with them before.</li>
          <li><b>Museum enthusiast:</b> Her work is cited extensively. You earned her respect through correspondence.</li>
          <li><b>Former student:</b> She taught your class. She knows you're sharp — and discreet.</li>
          <li><b>Expedition guide:</b> You were hired muscle on her Murkmire dig. Something felt wrong out there.</li>
          <li><b>Temple connection:</b> Your faith and her research crossed paths. Your god approves of this mission.</li>
          <li><b>Informant:</b> You've traded secrets with her before. She never asked where you got them.</li>
          <li><b>City Watch:</b> Her case landed on your desk before the brass buried it. You didn't forget.</li>
          <li><b>Fey-touched:</b> Your patron nudged you toward her. The fey know things about eggs like this.</li>
        </ul>
      </div>

      <div className="drawer-section">
        <h3>The Reward</h3>
        <p>
          Dr. Dannell offers her <b>bag of holding</b> plus <b>20 gp per character</b> —
          or <b>30 gp</b> if you make a compelling case (DC 13 Persuasion). The Golden
          Vault sweetens the deal with an <b>uncommon magic item</b> of your choice,
          delivered the next day on a successful mission.
        </p>
        <p>
          But the real reward? <b>Nobody in Varkenbluff dies tonight.</b>
        </p>
      </div>
    </>
  );
}
