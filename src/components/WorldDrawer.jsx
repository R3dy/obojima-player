import { useState } from 'react';
import useEscapeKey from './useEscapeKey.js';

export default function WorldDrawer({ onClose }) {
  const [section, setSection] = useState('island');
  useEscapeKey(onClose);

  const sections = [
    { id: 'island', label: 'The Island' },
    { id: 'okiri', label: 'Okiri Village' },
    { id: 'regions', label: 'Regions' },
    { id: 'spirits', label: 'Spirits' },
    { id: 'history', label: 'History' },
    { id: 'factions', label: 'Factions' },
    { id: 'daily', label: 'Daily Life' },
  ];

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose} />
      <div className="drawer-panel world-panel" role="dialog" aria-label="World of Obojima">
        <div className="drawer-header">
          <h2>World of Obojima</h2>
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
          {section === 'island' && <IslandSection />}
          {section === 'okiri' && <OkiriSection />}
          {section === 'regions' && <RegionsSection />}
          {section === 'spirits' && <SpiritsSection />}
          {section === 'history' && <HistorySection />}
          {section === 'factions' && <FactionsSection />}
          {section === 'daily' && <DailyLifeSection />}
        </div>
      </div>
    </>
  );
}

function IslandSection() {
  return (
    <>
      <div className="drawer-section">
        <h3>The Island of Obojima</h3>
        <p>
          Obojima is a world full of magic and spirits — where people live and explore,
          and where there are festivals for every occasion. Life here is mostly idyllic,
          with farmers tilling their fields and shepherds tending to their sheep dragons.
          Travelers find adventure by walking from village to village, following rumors
          and spirit companions.
        </p>
        <p>
          To the people who live here, the world begins and ends at the shore. The ocean
          surrounds Obojima, stretching out to the horizon in all directions. The island,
          the ocean, and the sky are all there is.
        </p>
      </div>

      <div className="drawer-section">
        <h3>Tone &amp; Spirit</h3>
        <p>
          Obojima is a realm of leisure fantasy where time slows down. Small, sensory
          vignettes are the heartbeat of storytelling here. It feels like getting to know
          every nuance, quirk, and charm of a village — not every story needs to be an epic.
        </p>
        <p>
          Evil does not have a strong presence. Creatures and monsters are forces of nature
          motivated by fear or greed rather than malice. Most villains are comically ambitious,
          predictably greedy, or filled with obstinate conviction — often with reasons rooted
          in a misguided desire to do good.
        </p>
      </div>

      <div className="drawer-section">
        <h3>Languages</h3>
        <div className="world-tags">
          <div className="world-tag">
            <div className="wt-label">Common</div>
            <div className="wt-desc">Based on the human language, with a smattering of Naku Naku</div>
          </div>
          <div className="world-tag">
            <div className="wt-label">Naku Naku</div>
            <div className="wt-desc">The Nakudama language — "far richer for the telling of tales"</div>
          </div>
          <div className="world-tag">
            <div className="wt-label">Torum</div>
            <div className="wt-desc">The favored language of the Spirit Realm; layered sounds non-spirits can understand but rarely voice</div>
          </div>
        </div>
      </div>

      <div className="drawer-section">
        <h3>Currency</h3>
        <p>Three denominations minted by the Dawn Blossom Guild:</p>
        <div className="world-tags">
          <div className="world-tag">
            <div className="wt-label">Gold Flower</div>
            <div className="wt-desc">Large gold disks embossed with a dawn blossom flower (= 1 gp)</div>
          </div>
          <div className="world-tag">
            <div className="wt-label">Sea Petal</div>
            <div className="wt-desc">Glass petals formed from special shore sand (= 1 sp)</div>
          </div>
          <div className="world-tag">
            <div className="wt-label">Copper Bud</div>
            <div className="wt-desc">Small copper ingots etched like unbloomed dawn blossoms (= 1 cp)</div>
          </div>
        </div>
        <p className="drawer-example">
          Coins are infused with magical energy — the exchange of money is an exchange of energy
          that keeps energy flowing through the island. Guild-minted coins "clink"; non-guild or
          depleted coins sound "dead."
        </p>
      </div>
    </>
  );
}

function OkiriSection() {
  return (
    <>
      <div className="drawer-section">
        <h3>Okiri Village</h3>
        <p>
          Quaint, charming, and idyllic, Okiri is a farming village in the Gift of Shuritashi,
          nestled in rolling hills between a modest wood and a lazy river.
        </p>
        <p>
          The river flows south from Mount Arbora and intersects with the east-west road, placing
          Okiri on a crossroads. Travelers frequently pass through, bringing news. For folks
          traveling east, Okiri is the last settlement before entering the Gale Fields.
        </p>
        <div className="drawer-example">
          Okiri is a feel-good village — a location where nothing catastrophic happens. No matter
          what's going on in the world, the people of the village seem to be unconcerned and unaware.
        </div>
      </div>

      <div className="drawer-section">
        <h3>People &amp; Culture</h3>
        <p>
          The population is diverse — Nakudama, humans, and elves all making the village their
          home for generations. History stretches back to the earliest days of the Nakudama Age.
        </p>
        <p>
          Okiri is known for the quality of wool it produces from its sheep dragons. Clever and
          mischievous creatures, sheep dragons are the heart of village trade — their wool is
          crafted into hats, sweaters, cloth, and blankets. The village sigil depicts one.
        </p>
        <p>
          Day-to-day life is guided by tradition. Trades and responsibilities are handed down
          through generations. There is a strong sense of community with light-touch governance.
          Villagers handle issues among themselves, and major disputes bring representatives of
          farmers, shepherds, fishers, and crafters to the High Hearth hall.
        </p>
      </div>

      <div className="drawer-section">
        <h3>Points of Interest</h3>
        <div className="poi-list">
          <div className="poi-item">
            <div className="poi-name">The Commons</div>
            <div className="poi-desc">
              Center of the village — a low grassy mound topped by three stone pillars of different
              heights. During the "grazing of the commons," sheep dragons eat the overgrown grass,
              preparing the site for the festival game of Blotcher.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">The High Hall</div>
            <div className="poi-desc">
              Tall timber hall on a rise by the creek. Used for village meetings, winter feasting,
              and as the sturdiest shelter during attacks.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">Bree's Mercantile</div>
            <div className="poi-desc">
              The only merchant shop in Okiri. General goods but specializes in potion ingredients.
              Proprietor Bree is a small roundish spirit with prickly skin resembling a Pyramid Melon.
              Prefers trade over money.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">Sheep Dragon Grazing Grounds</div>
            <div className="poi-desc">
              Large span of low hills beyond orchards and farmland. Dotted with rusted First Age
              vehicle husks.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">Courier Brigade Outpost</div>
            <div className="poi-desc">
              Stable stocked with fresh mounts for courier brigadiers passing through.
            </div>
          </div>
        </div>
      </div>

      <div className="drawer-section">
        <h3>Festivals</h3>
        <p>
          Market days and festivals transform Okiri from a sleepy farming village into a festive
          hub. Festivals are named for crops — the Cabbage Festival and Wrinklefruit Festival
          draw the largest crowds.
        </p>
        <p>
          Festival games include wrestling, accuracy tests, and the main event — <b>Blotcher</b>,
          where teams hurl overripe produce at each other using shepherd slings. Participants wear
          undyed wool tunics that show colorful stains.
        </p>
      </div>

      <div className="drawer-section">
        <h3>Outdoor Hearths</h3>
        <p>
          A tradition of eating outdoors defines Okiri's social life. A cluster of cooking sites
          with hearths set into gazebo floors fills the village center. A derelict First Age food
          truck stands at the heart of it all — like a monument to outdoor dining.
        </p>
      </div>
    </>
  );
}

function RegionsSection() {
  return (
    <>
      <div className="drawer-section">
        <h3>Regions of Obojima</h3>
        <p>
          Obojima is divided into six recognized regions plus the surrounding Shallows.
          Each has its own character, landscape, and traditions.
        </p>
      </div>

      <div className="drawer-section">
        <div className="poi-list">
          <div className="poi-item">
            <div className="poi-name">The Gift of Shuritashi</div>
            <div className="poi-desc">
              Westernmost and largest region. Named after a great spirit. Patchwork of rolling hills,
              lush forests, and sandy beaches. Home to Okiri and Matango villages. Farmers and craftspeople.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">The Land of Hot Water</div>
            <div className="poi-desc">
              Arid landscape with natural hot springs between Mount Arbora's northern slope and the sea.
              Industry and relaxation culture; a flight fad among engineers.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">Mount Arbora</div>
            <div className="poi-desc">
              Ancient mountain visible from every corner of the island. Snowy slopes feed the island's
              rivers. Treacherous terrain; home to some of the island's largest monsters.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">The Gale Fields</div>
            <div className="poi-desc">
              Vast sweeping plain of uncommonly tall grass in the center of the island. Quickest route
              across. Domain of the howlers. The Courier Brigade maintains major roads here.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">The Brackwater Wetlands</div>
            <div className="poi-desc">
              Eastern, sparsely populated swamp. Settlements built on stilts. Known for mud eel fishing
              and Hakumon's Ramen Shop.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">The Coastal Highlands</div>
            <div className="poi-desc">
              Southeastern plateau of craggy rock ending at dramatic sea cliffs. Sprawling cave networks
              within cliff faces. Home to the AHA headquarters.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">The Shallows</div>
            <div className="poi-desc">
              Reef ringed around the island. Sandy bottom stretches miles offshore, up to 200 feet deep
              before the coral reef rises. Beyond is the Deep — the open ocean.
            </div>
          </div>
        </div>
      </div>

      <div className="drawer-section">
        <h3>Getting Around</h3>
        <div className="world-tags">
          <div className="world-tag">
            <div className="wt-label">On Foot</div>
            <div className="wt-desc">The most common way — village to village</div>
          </div>
          <div className="world-tag">
            <div className="wt-label">Mounts</div>
            <div className="wt-desc">Horses, bestial spirits, goats, reptiles, giant dragonflies</div>
          </div>
          <div className="world-tag">
            <div className="wt-label">Vehicles</div>
            <div className="wt-desc">Bicycles, motorbikes, scooters, cars, trucks</div>
          </div>
          <div className="world-tag">
            <div className="wt-label">The Wandering Line</div>
            <div className="wt-desc">A magical train that stops all over the island, including in the Spirit Realm</div>
          </div>
        </div>
      </div>
    </>
  );
}

function SpiritsSection() {
  return (
    <>
      <div className="drawer-section">
        <h3>The Spirit Realm</h3>
        <p>
          The Spirit Realm is a plane of eternal twilight overlaid on top of Obojima, occupying
          the same space but existing beyond the ken of most physical beings. What may appear to
          be an abandoned farmstead on the Physical Realm might be a bustling marketplace in the
          Spirit Realm.
        </p>
      </div>

      <div className="drawer-section">
        <h3>Types of Spirits</h3>
        <div className="poi-list">
          <div className="poi-item">
            <div className="poi-name">Homebodies</div>
            <div className="poi-desc">
              Spirits that live in the Physical Realm among Obojimans. As much a part of society
              as any other race.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">Wanderers</div>
            <div className="poi-desc">
              Spirits who travel freely between both realms. Often work as guides, messengers,
              and merchants.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">Ghosts</div>
            <div className="poi-desc">
              Spirits bound exclusively to the Spirit Realm. Obojimans say someone who "has a ghost"
              if they have a noisy spirit.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">Elder Spirits</div>
            <div className="poi-desc">
              Ancient and powerful spirits that inhabit both realms. Often guardians of their domain.
              Shrines at the foot of mountains and shorelines of lakes and rivers mark the entrance
              into an elder spirit's domain.
            </div>
          </div>
        </div>
      </div>

      <div className="drawer-section">
        <h3>Demons &amp; Corruption</h3>
        <p>
          Demons are spirits so filled with malice that their bodies transform into twisted
          caricatures. Corrupted Spirits are those tainted by "the Corruption" and forced into
          demon transformation.
        </p>
        <p>
          Since a great earthquake and tsunami three months ago, strange phenomena have appeared
          on the eastern side of the island — weird patches of magic grass that hamper travel,
          bubbling pools of random goo. The Corruption is a supernatural anomaly spreading from
          the east.
        </p>
      </div>
    </>
  );
}

function HistorySection() {
  return (
    <>
      <div className="drawer-section">
        <h3>History of Obojima</h3>
        <p>The island's history is divided into four great ages:</p>
      </div>

      <div className="drawer-section">
        <div className="timeline">
          <div className="tl-item">
            <div className="tl-era">First Age</div>
            <div className="tl-desc">
              Prehistory — era of unknown people who left peculiar technology scattered across
              the island. First Age relics (~1980s analog tech) are integrated into everyday life.
            </div>
          </div>
          <div className="tl-arrow">↓</div>
          <div className="tl-item">
            <div className="tl-era">Nakudama Age</div>
            <div className="tl-desc">
              ~2000 years ago — the first Queen swam across the ocean, birthed the first 100
              Nakudama, and founded the kingdom and capital city of Lilywin. The demon Oghmai
              usurped the throne; monarchy was dissolved after his defeat.
            </div>
          </div>
          <div className="tl-arrow">↓</div>
          <div className="tl-item">
            <div className="tl-era">Age of Humanity</div>
            <div className="tl-desc">
              1200 years ago — seafaring humans arrived. Humans and Nakudama established joint
              settlements. The first elves were born as a gift to the people of Okiri from an
              elder spirit.
            </div>
          </div>
          <div className="tl-arrow">↓</div>
          <div className="tl-item">
            <div className="tl-era">Dara Age</div>
            <div className="tl-desc">
              300 years ago — the dara emerged from the forest. The Corruption may herald a
              new era.
            </div>
          </div>
        </div>
      </div>

      <div className="drawer-section">
        <h3>Technology</h3>
        <p>
          The most advanced technology is also the oldest. First Age relics are integrated into
          everyday life — vending machines, cassette players, VHS, instaprint cameras, computers,
          and vehicles.
        </p>
        <div className="drawer-example">
          Wizards use cassettes as spell scrolls. Vending machines are enchanted to sell magical
          trinkets. Spirits can "whelm" (power) devices, or wizards use the <i>Jolt</i> spell.
        </div>
      </div>
    </>
  );
}

function FactionsSection() {
  return (
    <>
      <div className="drawer-section">
        <h3>Factions of Obojima</h3>
        <p>
          The island has no central government, but several organizations shape life across
          its regions.
        </p>
      </div>

      <div className="drawer-section">
        <div className="poi-list">
          <div className="poi-item">
            <div className="poi-name">AHA (Academic Adventurers)</div>
            <div className="poi-desc">
              Archaeologists, historians, and archivists headquartered in the Coastal Highlands.
              Directed by the Asloh — a trio of scholars from different races.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">Courier Brigade</div>
            <div className="poi-desc">
              "Knights of the Postal Service." Devoted to safe delivery across Obojima. Maintain
              forts at crossroads. Most couriers ride large flightless birds.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">Mariners' Guild</div>
            <div className="poi-desc">
              Undersea explorers founded by Captain Clintock 30 years ago. Four lodges at cardinal
              points; only north and south remain active.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">Society of Young Stewards</div>
            <div className="poi-desc">
              Youth scouts teaching nature stewardship and good citizenship. Chapters named after
              birds — Chickadees, Bluebills, Kingfishers, and more.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">Sword Schools</div>
            <div className="poi-desc">
              Rival masters of the blade. Several traditions, each with two masters of equal rank.
            </div>
          </div>
          <div className="poi-item">
            <div className="poi-name">Witch Covens</div>
            <div className="poi-desc">
              Various covens across the island — the Fish Head Coven in the Gale Fields, the
              Cloud Cap Coven at Mount Arbora, and others.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function DailyLifeSection() {
  return (
    <>
      <div className="drawer-section">
        <h3>How Obojimans Live</h3>
        <p>
          Most Obojimans get by as farmers or fisherfolk. Other common trades include artisans,
          merchants, specialty chefs, and potion crafters. Each settlement has its own character,
          quirks, nuances, and traditions.
        </p>
      </div>

      <div className="drawer-section">
        <h3>Everyday Magic</h3>
        <p>
          Magic permeates daily life. Folk magic, academy wizardry, and witch coven trade secrets
          are all employed. Potions are always in demand — a farmer might use a Potion of Rabbit's
          Speed to finish harvest. New magical breakthroughs are greeted with curiosity and excitement.
        </p>
      </div>

      <div className="drawer-section">
        <h3>Governance</h3>
        <p>
          No monarch or governing body claims rulership over the island. Governance is left to
          individual settlements — some look to elders, some elect mayors, others form cooperative
          leagues (common in the Gift of Shuritashi).
        </p>
      </div>

      <div className="drawer-section">
        <h3>Beliefs About Death</h3>
        <p>
          Beliefs vary by region. Coastal villagers say the departed have gone "beyond the horizon";
          farmers in the Gale Fields say they've "returned to the island." Many believe everyone's
          essence is magic. Funerals are both celebration and sorrow. Burial methods include earth
          burial, pyre, ocean immersion, or hilltop placement.
        </p>
      </div>

      <div className="drawer-section">
        <h3>"Beyond the Island"</h3>
        <p>
          "Beyond the Island" is a favorite storytelling game among tavern goers. Players weave
          fantastical tales about what might exist beyond the horizon. Those who leave don't return.
        </p>
        <div className="drawer-example">
          The ocean surrounds Obojima, stretching out to the horizon in all directions. The island,
          the ocean, and the sky are all there is — or so the saying goes.
        </div>
      </div>

      <div className="drawer-section">
        <h3>Combat on Obojima</h3>
        <p>
          Most situations can be solved with smarts, tact, creativity, and magic. The further east
          you go, the more dangerous the world becomes. Past the Gale Fields, being handy with a
          blade is more valuable.
        </p>
      </div>
    </>
  );
}
