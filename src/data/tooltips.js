export const ABILITY_TOOLTIPS = {
  STR: {
    abil: "Strength", title: "Strength (STR)",
    body: "Raw physical power — lifting, pushing, carrying. Strength determines how hard you hit with most melee weapons (longswords, axes, greatswords) and whether you can force open a locked door, climb a wall, or wrestle a guard. Saves against being grabbed, shoved, or knocked down use Strength.",
    uses: ["Melee weapon attacks (most)", "Athletics — climbing, jumping, swimming, grappling", "Carrying capacity — your STR score × 15 = how many pounds you can lug around"]
  },
  DEX: {
    abil: "Dexterity", title: "Dexterity (DEX)",
    body: "Agility, reflexes, and fine motor control. Dexterity powers your stealth, lockpicking, and ranged attacks. It also determines how early you act in combat (initiative) and helps you dodge fireballs and trap triggers.",
    uses: ["Ranged weapon attacks (bows, darts) and finesse melee weapons (rapiers, daggers)", "Armor Class — adds to your defense in light and medium armor", "Initiative — DEX mod is added to your d20 turn-order roll", "Acrobatics, Sleight of Hand, Stealth, Thieves' Tools"]
  },
  CON: {
    abil: "Constitution", title: "Constitution (CON)",
    body: "Health, stamina, and sheer toughness. Constitution determines how many Hit Points you gain every level and helps you resist poison, disease, and extreme conditions. Spellcasters use it to maintain concentration when they take damage.",
    uses: ["Hit Points — CON mod × your level is added to HP", "Concentration saves — maintain a spell when you take damage", "Resisting poison, disease, cold, and exhaustion"]
  },
  INT: {
    abil: "Intelligence", title: "Intelligence (INT)",
    body: "Memory, logic, and book learning. Intelligence is for recalling facts, analyzing clues, and understanding magic theory. Wizards and Artificers cast with Intelligence — the smarter they are, the harder their spells are to resist.",
    uses: ["Arcana — knowledge of magic, spells, and magical creatures", "History — recalling past events, ancient empires, and lore", "Investigation — finding hidden clues and deducing how things work", "Nature — identifying plants, animals, and natural phenomena", "Religion — knowledge of gods, rituals, and holy symbols"]
  },
  WIS: {
    abil: "Wisdom", title: "Wisdom (WIS)",
    body: "Awareness, intuition, and willpower. Wisdom is noticing the tripwire before you step on it, reading someone's true intentions, and resisting mind-altering magic. Clerics and Druids cast with Wisdom.",
    uses: ["Perception — spotting, hearing, and noticing things (passive Perception = 10 + WIS + proficiency if trained)", "Insight — reading body language and detecting lies", "Survival — tracking, foraging, and navigating the wild", "Medicine — stabilizing a dying ally, diagnosing illness", "Animal Handling — calming mounts and wild creatures"]
  },
  CHA: {
    abil: "Charisma", title: "Charisma (CHA)",
    body: "Force of personality and social magnetism. Charisma is your ability to talk your way past guards, convince a curator to trust you, or maintain a false identity. Bards, Warlocks, Sorcerers, and Paladins cast with Charisma.",
    uses: ["Persuasion — convincing someone of your viewpoint", "Deception — lying, bluffing, and maintaining a disguise", "Intimidation — threatening or coercing cooperation", "Performance — entertaining, distracting, and putting on a show"]
  }
};

export const COMBAT_TOOLTIPS = {
  ac: {
    title: "Armor Class (AC)", desc: "How hard you are to hit. When an enemy attacks, they roll d20 + their attack bonus. If the total meets or beats your AC, you take damage. Think of it as your \"miss chance\" — higher AC means more attacks whiff. Base AC is 10; armor, shields, and DEX add to it."
  },
  hp: {
    title: "Hit Points (HP)", desc: "Your health bar. When you take damage, subtract it from your current HP. At 0 HP you fall unconscious and start making Death Saves. Take too much damage and you die. HP recovers during short rests (spend Hit Dice) and long rests (refill to max). Your CON modifier is added every level."
  },
  speed: {
    title: "Speed", desc: "How far you can move on your turn using your Movement. Most characters move 30 feet per turn (6 squares on a battle map). You can break up your movement — move partway, attack, then finish moving. Dwarves and halflings move 25 ft; wood elves move 35 ft."
  },
  init: {
    title: "Initiative", desc: "When combat starts, everyone rolls d20 + this modifier. Highest goes first, then clockwise (or descending). It's your reaction speed — DEX contributes. If you surprise enemies, they skip their first turn."
  },
  prof: {
    title: "Proficiency Bonus", desc: "Your general level of training and practice. You add this number (+2 at levels 1–4) to: attack rolls with weapons you're trained in, saving throws you're proficient in (marked with ●), and skill checks you're trained in. It grows as you level up — +3 at level 5, +4 at level 9."
  },
  pp: {
    title: "Passive Perception", desc: "Your \"always-on\" awareness — what you notice without actively looking. Calculated as 10 + your Wisdom modifier + proficiency bonus if trained in Perception. The GM uses this behind the scenes to see if you spot hidden doors, traps, or ambushes without rolling. If your PP is 14 and a goblin rolls 12 for Stealth, you see it."
  },
  hd: {
    title: "Hit Dice", desc: "Your stamina reserve for healing between fights. The die size depends on your class: d6 (wizards), d8 (rogues, bards, clerics, monks, warlocks), d10 (fighters, rangers), d12 (barbarians). During a short rest, you can spend Hit Dice to roll them and recover that much HP (+ CON mod per die). You get back half your spent Hit Dice after a long rest."
  },
  save: {
    title: "Saving Throws", desc: "Rolls to resist harm. When a spell, trap, or monster effect targets you, the GM may ask for a saving throw — roll d20 + the relevant ability modifier. If you're proficient (marked with ● on your sheet), add your proficiency bonus too. The DC is the difficulty — meet or beat it to avoid or reduce the effect."
  },
  death: {
    title: "Death Saves", desc: "When you drop to 0 HP: roll a d20 at the start of each of your turns. 10+ = one success. Below 10 = one failure. Natural 20 = you wake up with 1 HP! Natural 1 = two failures. 3 successes = you're stable (unconscious but not dying). 3 failures = dead. Another player can stabilize you with a DC 10 Medicine check or any healing."
  }
};

export const SKILL_TOOLTIPS = {
  Acrobatics: { abil:"DEX", desc:"Balance, flips, and landing on your feet — staying upright on a narrow ledge, escaping a grapple, or tumbling past guards without tripping." },
  "Animal Handling": { abil:"WIS", desc:"Calming a spooked horse, reading a growling dog's intent, or convincing a wild creature you're not a threat." },
  Arcana: { abil:"INT", desc:"Knowledge of spells, magic items, runes, and magical creatures. You can identify a spell being cast or figure out what a glowing glyph does." },
  Athletics: { abil:"STR", desc:"Climbing, jumping, swimming, grappling — any feat of physical exertion. Kicking down a door or hauling a friend up a ledge." },
  Deception: { abil:"CHA", desc:"Lying convincingly, bluffing a guard, maintaining a false identity, or cheating at cards without getting caught." },
  History: { abil:"INT", desc:"Recalling wars, rulers, ancient civilizations, and the significance of that dusty artifact in the museum exhibit." },
  Insight: { abil:"WIS", desc:"Reading people — is the curator nervous? Is that guard lying about his patrol route? Can you tell someone's true intentions?" },
  Intimidation: { abil:"CHA", desc:"Coercing cooperation through threats, menace, or imposing presence. \"Walk away and you won't get hurt.\"" },
  Investigation: { abil:"INT", desc:"Deducing how a trap works, finding a hidden compartment in a desk, or piecing together clues to figure out what happened here." },
  Medicine: { abil:"WIS", desc:"Diagnosing illness, stabilizing a dying ally (DC 10 check stops death saves), or identifying what kind of poison is in that vial." },
  Nature: { abil:"INT", desc:"Identifying plants and animals, predicting weather, or recognizing that the \"rock\" is actually a dormant eldritch egg." },
  Perception: { abil:"WIS", desc:"Spotting, hearing, or otherwise noticing things — the faint click of a pressure plate, muffled footsteps in the next room, or a secret door seam." },
  Performance: { abil:"CHA", desc:"Captivating an audience with music, dance, storytelling, or acting — creating a distraction so your friend can swipe the artifact." },
  Persuasion: { abil:"CHA", desc:"Winning someone over with logic, charm, or negotiation. \"Dr. Dannell is right and you know it. Just give us one hour.\"" },
  Religion: { abil:"INT", desc:"Knowledge of gods, cults, rituals, religious symbols, and the undead. Recognizing that the chanting in the next room is a summoning rite." },
  "Sleight of Hand": { abil:"DEX", desc:"Pickpocketing, palming small objects, slipping a key off a guard's belt, or swapping the real stone for a fake without anyone noticing." },
  Stealth: { abil:"DEX", desc:"Moving quietly and staying hidden. Creeping past guards, disappearing into shadows, or tailing someone through crowded streets." },
  Survival: { abil:"WIS", desc:"Tracking footprints, finding your way through wilderness, foraging for food, and avoiding natural hazards like quicksand or sinkholes." },
  "Thieves' Tools": { abil:"DEX", desc:"Lockpicking, disarming traps, and bypassing mechanical security. The defining skill of a heist — that locked door? DC 12 with these and it's open." }
};

export const FEATURE_TOOLTIPS = {
  "Sneak Attack": "Once per turn, when you hit with a finesse or ranged weapon and you have advantage, OR an ally is within 5 feet of the target, add 1d6 extra damage. You don't need to be hidden — you just need the opening. At odd levels (3, 5, 7...) the damage increases.",
  "Expertise": "Choose two skills you're proficient in. Double your proficiency bonus for those skills. At level 1 that turns a +5 into a +7. Rogues get this at level 1 and 6; Bards at 3 and 10. It's what makes rogues nearly unfailable at lockpicking.",
  "Thieves' Cant": "A secret language of rogues. Hidden messages are buried in everyday conversation — a seemingly normal chat about the weather might contain: \"the guards change shifts at 10.\" You can also leave coded symbols on walls.",
  "Bardic Inspiration": "Bonus action on your turn: give one ally a d6 inspiration die. They can add it to any d20 roll (attack, save, or ability check) in the next 10 minutes. They decide AFTER rolling their d20 but BEFORE the GM says success or failure. You get uses equal to your CHA mod per long rest.",
  "Arcane Recovery": "Once per day, during a short rest, recover expended spell slots with combined level equal to half your wizard level (rounded up). At level 1 that's 1 slot. At level 2 it's 1 slot (since 1 is already half rounded up). A wizard's secret weapon for long adventuring days.",
  "Favored Enemy": "You have advantage on Survival checks to track this enemy type, and on Intelligence checks to recall information about them. For this adventure, choose Humanoids — guards and city folk are your specialty.",
  "Natural Explorer": "In your favored terrain: difficult terrain doesn't slow the party, you can't get lost, you stay alert to danger while doing other things (foraging, navigating), and when tracking you learn the exact number, sizes, and how recent the tracks are.",
  "Second Wind": "Bonus action — heal yourself for 1d10 + your fighter level. Once per short or long rest. It's a quick mid-combat breather that can save your life. At level 1 that's 1d10+1 HP back.",
  "Fighting Style": "A permanent combat specialization. Archery (+2 to ranged attack rolls), Defense (+1 AC while wearing armor), Dueling (+2 damage with one-handed weapons), Great Weapon Fighting (reroll 1s and 2s on two-handed weapon damage), Protection (impose disadvantage on attacks against adjacent allies), and more.",
  "Fey Presence": "As an action, every creature in a 10-foot cube originating from you must make a WIS save. On failure, they're charmed or frightened (your choice) until the end of your next turn. Perfect for slipping past a guard — charm them, walk by, be gone before they snap out of it.",
  "Pact Magic": "You have fewer spell slots than other casters, but they all recharge on a short rest (not just a long rest). Your slots are always cast at the highest level you have — at level 1, your one slot is a 1st-level slot. After one hour of rest, it's back.",
  "Eldritch Blast (feature)": "The signature warlock cantrip. At level 1 it fires one beam; at level 5, two beams; at level 11, three; at level 17, four. Each beam gets its own attack roll and deals 1d10 force damage. Add Agonizing Blast (invocation at level 2) and add CHA mod to each beam. It's the best damaging cantrip in the game.",
  "Martial Arts": "Your unarmed strikes use 1d4 (growing to 1d6, 1d8, 1d10 at higher levels) and you can use DEX instead of STR. When you take the Attack action with an unarmed strike or monk weapon, you can make one bonus unarmed strike. No armor needed — your body is the weapon.",
  "Unarmored Defense": "While not wearing armor, your AC = 10 + DEX mod + WIS mod. Monks get this plus Martial Arts — they're designed to fight without armor. A level 1 monk with DEX 16 and WIS 13 has AC 15, same as studded leather.",
  "Blessing of the Trickster": "Action — touch a willing creature. For 1 hour, they have advantage on Dexterity (Stealth) checks. Perfect for the party's rogue, or the clanky fighter wearing chain mail. You can use this as many times as you want — the Trickery god is generous.",
  "Domain Spells": "These spells are ALWAYS prepared and don't count against your daily limit. Trickery domain gives Disguise Self and Charm Person — you'll always have them ready. Each cleric domain gets specific spells at levels 1, 3, 5, 7, and 9.",
};

export const ANCESTRY_TOOLTIPS = {
  Darkvision: "You see in darkness within 60 feet as if it were dim light, and in dim light as if it were bright. Colors are muted to shades of gray. Crucial for a nighttime heist.",
  "Fey Ancestry": "You have advantage on saving throws against being charmed, and magic can't put you to sleep. That siren song? The hypnotic pattern? You shrug it off.",
  "Hellish Resistance": "You have resistance to fire damage — halve all fire damage you take. Tiefling blood runs hot.",
  "Gnome Cunning": "You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic. Gnomes are famously magic-resistant.",
  "Artificer's Lore": "Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, add double your proficiency bonus. Gnomes just get machines.",
  Tinker: "Using tinker's tools, you can spend 1 hour and 10 gp to build a Tiny clockwork device — a wind-up toy, a lighter, or a music box. You can maintain up to three at a time.",
  "Keen Senses": "You are proficient in the Perception skill. Elves notice everything.",
  "Mask of the Wild": "You can attempt to hide even when you're only lightly obscured by natural phenomena — rain, falling leaves, mist, or the shadow of a tree. Wood elves blend into nature.",
  "Fleet of Foot": "Your base walking speed is 35 feet instead of 30. You're faster than most other humanoids.",
  "Versatile (Human)": "Humans are adaptable and well-rounded. You gain proficiency in one extra skill of your choice.",
  Observant: "You have a +5 bonus to your passive Wisdom (Perception) and passive Intelligence (Investigation) scores. You can also read lips if you can see someone speaking and understand the language. Nothing escapes you.",
  "Dwarven Resilience": "You have advantage on saving throws against poison, and you have resistance to poison damage. A dwarf's constitution is legendary.",
  Stonecunning: "Whenever you make an Intelligence (History) check related to the origin of stonework, add double your proficiency bonus. Secret doors, hidden compartments, and ancient masonry — you spot them.",
  Lucky: "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die. You must use the new roll. Halflings are famously lucky.",
  Brave: "You have advantage on saving throws against being frightened. Small body, giant courage.",
  "Naturally Stealthy": "You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you. Hide behind the fighter!",
  "Halfling Nimbleness": "You can move through the space of any creature that is of a size larger than yours. Squeeze past guards, slip under tables, and navigate crowded rooms with ease.",
};

export const SPELL_TOOLTIPS = {
  "Vicious Mockery": "Cantrip · Action · V · 60 ft · WIS save · 1d4 psychic + target has disadvantage on next attack. You weaponize sass.",
  "Mage Hand": "Cantrip · Action · V,S · 30 ft · 1 min. Summon a spectral hand that can manipulate objects (up to 10 lbs), open unlocked doors, pull levers, and trigger traps from a safe distance.",
  Thaumaturgy: "Cantrip · Action · V · 30 ft · 1 min. Minor divine display: boom your voice 3× louder, flicker flames, make unlocked doors fly open, cause harmless tremors. Great for distractions.",
  "Fire Bolt": "Cantrip · Action · V,S · 120 ft · ranged attack · 1d10 fire. Hurl a mote of fire that can ignite flammable objects. Your go-to damage cantrip.",
  "Minor Illusion": "Cantrip · Action · S,M · 30 ft · 1 min. Create a sound or a static image no larger than a 5-ft cube. A whisper, a growl, a fake wall, a puddle of blood, footsteps down the hall — limited only by imagination.",
  Guidance: "Cantrip · Action · V,S · Touch · Conc. 1 min. Touch a willing creature — they add 1d4 to one ability check of their choice before the spell ends. \"Guide me.\" Free boost to any skill check.",
  "Toll the Dead": "Cantrip · Action · V,S · 60 ft · WIS save · 1d8 necrotic (1d12 if target is missing any HP). The death bell tolls. Excellent when cleanup damage is needed.",
  Mending: "Cantrip · 1 min · V,S,M · Touch. Repair a single break or tear in an object — fix a cut rope, reseal a broken document, or close the hole in a bag.",
  "Eldritch Blast": "Cantrip · Action · V,S · 120 ft · ranged attack per beam · 1d10 force. Fires one beam at level 1, two at level 5, three at 11, four at 17. The best damaging cantrip. Force damage hits almost everything.",
  "Charm Person": "1st · Action · V,S · 30 ft · WIS save · 1 hour. The target regards you as a friendly acquaintance. They won't fight you. When it ends, they know they were charmed. Doesn't work in combat if the target is hostile.",
  "Disguise Self": "1st · Action · V,S · Self · 1 hour. Change your appearance — clothes, face, height (within 1 ft), and build. Doesn't change your voice. Investigation check against your spell DC sees through it. Become a museum guard.",
  "Healing Word": "1st · Bonus Action · V · 60 ft. Heal a creature you can see for 1d4 + spellcasting mod. Bonus action means you can attack AND heal in the same turn. The ultimate \"get up\" spell.",
  Sleep: "1st · Action · V,S,M · 90 ft · 20-ft radius · No save! Roll 5d8 — starting from lowest current HP, creatures fall unconscious until the total rolled covers their HP. The non-lethal solution. Affects everyone in the area, friend or foe.",
  "Detect Magic": "1st · Action · V,S · Self · Conc. 10 min. For the duration, you sense magic within 30 feet and see a faint aura around any magical creature or object. You can use an action to learn its school of magic. See those alarms before they see you.",
  "Find Familiar": "1st · 1 hour · V,S,M · 10 gp. Summon a spirit in animal form (owl, cat, rat, spider, etc.). It acts independently but obeys you. You can see through its eyes as an action. The ultimate scout — send it ahead to map rooms.",
  "Mage Armor": "1st · Action · V,S,M · Touch · 8 hours. The target's AC becomes 13 + DEX mod (if not wearing armor). The wizard's best friend — cast at start of day and forget about it.",
  Shield: "1st · Reaction · V,S · Self · 1 round. Cast when you're hit by an attack OR targeted by Magic Missile. Gain +5 AC until your next turn, and you take no damage from Magic Missile. The best defensive spell at level 1.",
  "Magic Missile": "1st · Action · V,S · 120 ft · Instant. Three glowing darts each deal 1d4+1 force damage. They HIT AUTOMATICALLY — no attack roll, no save. Spread them among targets or focus fire. Shield blocks them.",
  Hex: "1st · Bonus Action · V,S,M · 90 ft · Conc. 1 hour. Curse a creature: your attacks deal +1d6 necrotic to it, and it has disadvantage on ability checks of one ability you choose. Pick STR to help the fighter grapple, or WIS to help the party sneak past.",
  "Faerie Fire": "1st · Action · V · 60 ft · 20-ft cube · DEX save · Conc. 1 min. Creatures in the area are outlined in colored light — attacks against them have advantage, and they can't benefit from invisibility. Perfect for the Gemstone Wing.",
  Bless: "1st · Action · V,S,M · 30 ft · Conc. 1 min. Up to 3 creatures add 1d4 to attack rolls and saving throws. The mathematically best level 1 buff — turning misses into hits all fight long.",
  "Cure Wounds": "1st · Action · V,S · Touch. Heal 1d8 + spellcasting mod. The classic touch-heal. More healing than Healing Word but takes your full action and requires touch.",
  "Guiding Bolt": "1st · Action · V,S · 120 ft · ranged attack · 4d6 radiant + next attack against the target before end of your next turn has advantage. Cleric laser — big damage AND sets up your teammate.",
  "Armor of Agathys": "1st · Action · V,S,M · Self · 1 hour. Gain 5 temp HP. While you have them, any creature that hits you with a melee attack takes 5 cold damage. Ice armor that bites back.",
  Dissonance: "Refers to Dissonant Whispers — 1st level · 1 Action · 60 ft · WIS save · 3d6 psychic damage + the creature must use its reaction to move as far as its speed allows away from you. No opportunity attacks against it.",
  "Protection from Evil and Good": "1st · Action · V,S,M · Touch · Conc. 10 min. The target is warded against aberrations, celestials, elementals, fey, fiends, and undead. Those creatures have disadvantage on attacks against the warded target, and the target can't be charmed, frightened, or possessed by them. Perfect for handling whatever's in that egg.",
};

export function getTooltip(type, key) {
  if (type === 'abil') return ABILITY_TOOLTIPS[key] || null;
  if (type === 'skill') return SKILL_TOOLTIPS[key] || null;
  if (type === 'combat') return COMBAT_TOOLTIPS[key] || null;
  if (type === 'feature') return { desc: FEATURE_TOOLTIPS[key] || "A special ability your character has learned through training or heritage." };
  if (type === 'ancestry') return { desc: ANCESTRY_TOOLTIPS[key] || "A trait inherited from your character's species." };
  if (type === 'spell') {
    const info = SPELL_TOOLTIPS[key];
    if (info) return { desc: info };
    return { desc: `${key} — a spell your character can cast. Ask your GM for the full details.` };
  }
  return null;
}
