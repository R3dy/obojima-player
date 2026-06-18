const HEROES = [
{
  id:"thorn", name:"Thorn", pron:"she/her", emoji:"🗡️", aura:"#6B8E7B",
  role:"Infiltrator", kind:"Half-Elf Rogue", level:1,
  tagline:"A shadow-walker who opens every lock.",
  quote:"You grew up on the rooftops of Varkenbluff, mapping the city by its unlocked windows and forgotten passages. Dr. Dannell once caught you breaking into the university library — and instead of turning you in, she asked what book you were looking for. You owe her.",
  ac:14, hp:9, hitDice:"1d8", speed:"30 ft", init:"+3", prof:"+2", pp:12,
  ab:{STR:[8,"−1","−1",0],DEX:[16,"+3","+5",1],CON:[13,"+1","+1",0],INT:[12,"+1","+3",1],WIS:[11,"+0","+0",0],CHA:[16,"+3","+3",0]},
  skills:[["Stealth","+7",true],["Thieves' Tools","+7",true],["Deception","+5"],["Sleight of Hand","+5"],["Perception","+2"],["Investigation","+3"]],
  attacks:[
    {n:"Rapier",hit:"+5",dmg:"1d8+3",nt:"piercing · finesse"},
    {n:"Dagger",hit:"+5",dmg:"1d4+3",nt:"piercing · finesse, thrown"},
    {n:"Sneak Attack",hit:"—",dmg:"+1d6",nt:"once a turn when hidden or friend is nearby"}
  ],
  spell:null,
  features:{
    cls:[
      {n:"Sneak Attack (+1d6)",t:"Add 1d6 damage when you hit from hiding or a friend is next to the enemy.",sig:true},
      {n:"Expertise",t:"Double your proficiency bonus for Stealth and Thieves' Tools (+7 instead of +5)."},
      {n:"Thieves' Cant",t:"You know the secret language of rogues — hidden messages in everyday conversation."}
    ],
    anc:[
      {n:"Darkvision",t:"See in the dark up to 60 ft."},
      {n:"Fey Ancestry",t:"Advantage against being charmed, and magic can't put you to sleep."}
    ],
    bg:{n:"Criminal Contact (Criminal)",t:"You have a reliable contact in Varkenbluff's underworld who can pass messages and rumors."}
  },
  equip:["Leather armor","Rapier","Two daggers","Shortbow + 20 arrows","Thieves' tools","Burglar's pack","Crowbar","Dark clothes with hood","10 gp"],
  profs:{armor:"Light armor",weapons:"Simple weapons, hand crossbows, longswords, rapiers, shortswords",tools:"Thieves' tools",langs:"Common, Elvish, Thieves' Cant"}
},
{
  id:"lila", name:"Lila", pron:"she/her", emoji:"🎭", aura:"#C0506A",
  role:"Face", kind:"Tiefling Bard", level:1,
  tagline:"A silver-tongued performer who talks her way through anything.",
  quote:"You've entertained nobles and criminals alike in Varkenbluff's lounges. Dr. Dannell was the only professor who listened when you argued that music could reveal hidden truths. Now her crisis needs your voice — and your secrets.",
  ac:13, hp:9, hitDice:"1d8", speed:"30 ft", init:"+2", prof:"+2", pp:11,
  ab:{STR:[8,"−1","−1",0],DEX:[14,"+2","+4",1],CON:[13,"+1","+1",0],INT:[11,"+0","+0",0],WIS:[12,"+1","+1",0],CHA:[17,"+3","+5",1]},
  skills:[["Persuasion","+5"],["Deception","+5"],["Performance","+5"],["Insight","+3"],["Acrobatics","+4"]],
  attacks:[
    {n:"Rapier",hit:"+4",dmg:"1d8+2",nt:"piercing · finesse"},
    {n:"Dagger",hit:"+4",dmg:"1d4+2",nt:"piercing · finesse, thrown"},
    {n:"Vicious Mockery",hit:"DC 13",dmg:"1d4",nt:"enemy saves (WIS); psychic + taunted"}
  ],
  spell:{dc:"13",atk:"+5",slots:2,
    cantrips:["Vicious Mockery","Mage Hand","Thaumaturgy (racial)"],
    label:"Spells Known",known:["Charm Person","Disguise Self","Healing Word","Sleep"]},
  features:{
    cls:[
      {n:"Bardic Inspiration (d6)",t:"As a bonus action, hand a d6 to a friend. They can add it to any d20 roll within the next 10 minutes. 3 uses per long rest.",sig:true}
    ],
    anc:[
      {n:"Hellish Resistance",t:"You resist fire damage — handy if a distraction goes up in flames."},
      {n:"Darkvision",t:"See in the dark up to 60 ft. Infernal heritage has its perks."}
    ],
    bg:{n:"By Popular Demand (Entertainer)",t:"You can always find a place to perform and a room to stay."}
  },
  equip:["Leather armor","Rapier","Dagger","Entertainer's pack","Lute","Costume clothes","Disguise kit","5 gp"],
  profs:{armor:"Light armor",weapons:"Simple weapons, hand crossbows, longswords, rapiers, shortswords",tools:"Lute, flute, disguise kit",langs:"Common, Infernal"}
},
{
  id:"orin", name:"Orin", pron:"he/him", emoji:"📚", aura:"#4A7DC9",
  role:"Arcanist", kind:"Gnome Wizard", level:1,
  tagline:"A tiny scholar with a massive spellbook.",
  quote:"You've spent years decoding magical wards and ancient symbols in Varkenbluff University's restricted library. Dr. Dannell was your favorite teacher — she believed your theories about arcane detection when no one else did. Now those theories are about to save lives.",
  ac:11, hp:8, hitDice:"1d6", speed:"25 ft", init:"+1", prof:"+2", pp:11,
  ab:{STR:[8,"−1","−1",0],DEX:[13,"+1","+1",0],CON:[15,"+2","+2",0],INT:[17,"+3","+5",1],WIS:[12,"+1","+3",1],CHA:[10,"+0","+0",0]},
  skills:[["Arcana","+5"],["Investigation","+5"],["History","+5"],["Nature","+3"]],
  attacks:[
    {n:"Fire Bolt",hit:"+5",dmg:"1d10",nt:"fire · range 120 ft"},
    {n:"Dagger",hit:"+3",dmg:"1d4+1",nt:"piercing · finesse, thrown"}
  ],
  spell:{dc:"13",atk:"+5",slots:2,
    cantrips:["Fire Bolt","Mage Hand","Minor Illusion"],
    label:"Prepared",known:["Detect Magic","Find Familiar","Mage Armor","Shield","Sleep","Magic Missile"]},
  features:{
    cls:[
      {n:"Arcane Recovery",t:"Once per day during a short rest, recover 1 level of spell energy.",sig:true}
    ],
    anc:[
      {n:"Gnome Cunning",t:"Advantage on INT, WIS, and CHA saving throws against magic — you shrug off spells."},
      {n:"Darkvision",t:"See in the dark up to 60 ft."},
      {n:"Artificer's Lore",t:"Double proficiency on History checks about magic items and alchemy."},
      {n:"Tinker",t:"You can build tiny clockwork devices — a lighter, a music box, or a noise-maker."}
    ],
    bg:{n:"Researcher (Sage)",t:"You know where to find the information you need — libraries, archives, or old colleagues."}
  },
  equip:["Spellbook","Quarterstaff","Dagger","Component pouch","Scholar's pack","Ink & pen","10 sheets parchment","Magnifying glass","10 gp"],
  profs:{armor:"None",weapons:"Daggers, darts, slings, quarterstaffs, light crossbows",tools:"Calligrapher's supplies",langs:"Common, Gnomish, Elvish"}
},
{
  id:"kael", name:"Kael", pron:"he/him", emoji:"🏹", aura:"#5E8C3E",
  role:"Scout", kind:"Wood Elf Ranger", level:1,
  tagline:"Eyes sharp as a hawk in the dark.",
  quote:"You tracked poachers through the Murkmire for years before Dr. Dannell hired you as a guide for her expedition. When she unearthed the stone, you felt something wrong ripple through the swamp. You've been watching her back ever since.",
  ac:14, hp:12, hitDice:"1d10", speed:"35 ft", init:"+3", prof:"+2", pp:14,
  ab:{STR:[12,"+1","+3",1],DEX:[17,"+3","+5",1],CON:[14,"+2","+2",0],INT:[10,"+0","+0",0],WIS:[14,"+2","+2",0],CHA:[8,"−1","−1",0]},
  skills:[["Stealth","+5"],["Perception","+4"],["Survival","+4"],["Athletics","+3"],["Nature","+2"]],
  attacks:[
    {n:"Longbow",hit:"+5",dmg:"1d8+3",nt:"range 150/600 · two-handed"},
    {n:"Shortsword",hit:"+5",dmg:"1d6+3",nt:"piercing · finesse, light"}
  ],
  spell:null,
  features:{
    cls:[
      {n:"Favored Enemy (Humanoids)",t:"Advantage on Survival to track city guards and watchfolk, and on INT checks to recall info about them.",sig:true},
      {n:"Natural Explorer (Forests)",t:"In forest terrain: difficult terrain doesn't slow the party, you can't get lost, and you stay alert while foraging."}
    ],
    anc:[
      {n:"Darkvision",t:"See in the dark up to 60 ft."},
      {n:"Keen Senses",t:"You're trained in Perception — those ears miss nothing."},
      {n:"Mask of the Wild",t:"You can hide when lightly obscured by rain, leaves, mist, or other natural phenomena."},
      {n:"Fleet of Foot",t:"Your walking speed is 35 ft — you're fast for an elf."}
    ],
    bg:{n:"Wanderer (Outlander)",t:"You have an excellent memory for maps and can always find food and water for the group."}
  },
  equip:["Leather armor","Longbow + 20 arrows","Two shortswords","Explorer's pack","50 ft rope","Hooded lantern","5 torches","Camouflage cloak","10 gp"],
  profs:{armor:"Light & medium armor, shields",weapons:"Simple & martial weapons",tools:"Herbalism kit",langs:"Common, Elvish, Sylvan"}
},
{
  id:"mira", name:"Mira", pron:"she/her", emoji:"✨", aura:"#C99A3E",
  role:"Support", kind:"Human Cleric (Trickery)", level:1,
  tagline:"A quiet priest who bends shadows to protect her friends.",
  quote:"The temple of the Masked God taught you that sometimes the right lie saves more lives than the wrong truth. When Dr. Dannell came to you with news of the egg, your god whispered: 'Help her. The light needs shadows today.'",
  ac:15, hp:10, hitDice:"1d8", speed:"30 ft", init:"+2", prof:"+2", pp:20,
  ab:{STR:[8,"−1","−1",0],DEX:[14,"+2","+2",0],CON:[14,"+2","+2",0],INT:[10,"+0","+0",0],WIS:[17,"+3","+5",1],CHA:[12,"+1","+3",1]},
  skills:[["Insight","+5"],["Perception","+5"],["Persuasion","+3"],["Stealth","+4"]],
  attacks:[
    {n:"Toll the Dead",hit:"DC 13",dmg:"1d8/1d12",nt:"WIS save; d12 if enemy already hurt"},
    {n:"Dagger",hit:"+4",dmg:"1d4+2",nt:"piercing · finesse, thrown"}
  ],
  spell:{dc:"13",atk:"+5",slots:2,
    cantrips:["Guidance","Toll the Dead","Mending"],
    label:"Prepared",known:["Bless","Cure Wounds","Healing Word","Guiding Bolt","Disguise Self (domain)","Charm Person (domain)"]},
  features:{
    cls:[
      {n:"Blessing of the Trickster",t:"As an action, give an ally advantage on Stealth checks for 1 hour. Perfect for a heist.",sig:true},
      {n:"Domain Spells",t:"Disguise Self and Charm Person are always prepared — they don't count against your limit."}
    ],
    anc:[
      {n:"Observant",t:"+5 to passive Perception and Investigation (already counted). You can also read lips."},
      {n:"Versatile (Human)",t:"You trained hard and gained the Observant feat — nothing escapes your notice."}
    ],
    bg:{n:"Shelter of the Faithful (Acolyte)",t:"You and your party can receive free healing and care at any temple of your faith."}
  },
  equip:["Leather armor","Shield","Dagger","Holy symbol","Priest's pack","Disguise kit","Incense & censer","Chalk (10 pieces)","5 days rations","15 gp"],
  profs:{armor:"Light & medium armor, shields",weapons:"Simple weapons",tools:"Disguise kit",langs:"Common, Elvish, Thieves' Cant"}
},
{
  id:"brin", name:"Brin", pron:"he/him", emoji:"🛡️", aura:"#7C6B5E",
  role:"Muscle", kind:"Dwarf Fighter", level:1,
  tagline:"A tough-as-nails soldier who never misses a shot.",
  quote:"The Varkenbluff City Watch taught you to shoot first and ask questions after you're both safe. Then Dr. Dannell's case crossed your desk — a real threat, ignored by bureaucrats. You quit the Watch that afternoon. Some things matter more than the rules.",
  ac:18, hp:13, hitDice:"1d10", speed:"25 ft", init:"+2", prof:"+2", pp:13,
  ab:{STR:[15,"+2","+4",1],DEX:[14,"+2","+2",0],CON:[15,"+2","+4",1],INT:[10,"+0","+0",0],WIS:[13,"+1","+1",0],CHA:[8,"−1","−1",0]},
  skills:[["Athletics","+4"],["Perception","+3"],["Survival","+3"],["Intimidation","+1"]],
  attacks:[
    {n:"Longbow",hit:"+6",dmg:"1d8+2",nt:"range 150/600 · +2 from Archery style"},
    {n:"Battleaxe",hit:"+4",dmg:"1d8+2",nt:"slashing · 1d10+2 two-handed"},
    {n:"Handaxe (thrown)",hit:"+4",dmg:"1d6+2",nt:"range 20/60"}
  ],
  spell:null,
  features:{
    cls:[
      {n:"Second Wind",t:"As a bonus action, catch your breath and heal 1d10+1 HP. 1 use per short rest.",sig:true},
      {n:"Fighting Style: Archery",t:"+2 to hit with ranged weapons (already counted in your longbow)."},
      {n:"Dwarven Toughness",t:"You get +1 HP per level — you can take more hits than most."}
    ],
    anc:[
      {n:"Darkvision",t:"See in the dark up to 60 ft. Light's nice, but unnecessary."},
      {n:"Dwarven Resilience",t:"Advantage on saving throws against poison, and you resist poison damage."},
      {n:"Stonecunning",t:"Double proficiency on History checks about stonework — secret doors, traps, and old construction."}
    ],
    bg:{n:"Military Rank (Soldier)",t:"You still have friends in the City Watch. They might look the other way — once."}
  },
  equip:["Chain mail","Shield","Longbow + 20 arrows","Battleaxe","Two handaxes","Explorer's pack","Manacles","50 ft rope","City watch badge (retired)","10 gp"],
  profs:{armor:"All armor, shields",weapons:"Simple & martial weapons",tools:"Smith's tools",langs:"Common, Dwarvish"}
},
{
  id:"sera", name:"Sera", pron:"she/her", emoji:"🌙", aura:"#8E6FB0",
  role:"Charmer", kind:"Half-Elf Warlock", level:1,
  tagline:"An elegant negotiator with a fey patron's power.",
  quote:"The Lady of Twilight appeared to you in a forgotten garden and offered you the power to walk unseen through locked doors. You used it to steal gossip, then secrets, then the truth. When the fey whispered Dr. Dannell's name, you knew your real work was about to begin.",
  ac:13, hp:10, hitDice:"1d8", speed:"30 ft", init:"+2", prof:"+2", pp:11,
  ab:{STR:[8,"−1","−1",0],DEX:[15,"+2","+2",0],CON:[14,"+2","+2",0],INT:[10,"+0","+0",0],WIS:[12,"+1","+3",1],CHA:[17,"+3","+5",1]},
  skills:[["Deception","+5"],["Persuasion","+5"],["Arcana","+2"],["Sleight of Hand","+4"]],
  attacks:[
    {n:"Eldritch Blast",hit:"+5",dmg:"1d10",nt:"force · range 120 ft · two beams!"},
    {n:"Dagger",hit:"+4",dmg:"1d4+2",nt:"piercing · finesse, thrown"}
  ],
  spell:{dc:"13",atk:"+5",slots:1,
    cantrips:["Eldritch Blast","Minor Illusion"],
    label:"Spells Known",known:["Charm Person","Hex","Faerie Fire (patron)","Sleep (patron)"]},
  features:{
    cls:[
      {n:"Fey Presence",t:"As an action, charm or frighten every creature in a 10-foot cube. They get a save — but while they blink, you slip away.",sig:true},
      {n:"Pact Magic",t:"You have one spell slot, but it returns on a short rest. Use it wisely."},
      {n:"Eldritch Blast",t:"At level 1, this is already one of the best cantrips in the game — two beams of force."}
    ],
    anc:[
      {n:"Darkvision",t:"See in the dark up to 60 ft."},
      {n:"Fey Ancestry",t:"Advantage against being charmed, and magic can't put you to sleep."}
    ],
    bg:{n:"False Identity (Charlatan)",t:"You have a second identity with documents, contacts, and a disguise. Perfect for talking your way in."}
  },
  equip:["Leather armor","Dagger","Arcane focus (crystal pendant)","Diplomat's pack","Fine clothes","Disguise kit","Forged papers","Mirror","5 gp"],
  profs:{armor:"Light armor",weapons:"Simple weapons",tools:"Disguise kit",langs:"Common, Elvish, Sylvan"}
},
{
  id:"pip", name:"Pip", pron:"he/him", emoji:"🍀", aura:"#E0A040",
  role:"Acrobat", kind:"Halfling Monk", level:1,
  tagline:"A lucky little acrobat who squeezes through impossible gaps.",
  quote:"You grew up on the streets of Varkenbluff — small enough to fit through basement windows, fast enough to never get caught. When a desperate halfling messenger found you with Dr. Dannell's note, you recognized her name from the university scandal. You like a good underdog story.",
  ac:15, hp:10, hitDice:"1d8", speed:"25 ft", init:"+3", prof:"+2", pp:11,
  ab:{STR:[8,"−1","−1",0],DEX:[17,"+3","+5",1],CON:[14,"+2","+2",0],INT:[12,"+1","+1",0],WIS:[13,"+1","+1",0],CHA:[11,"+0","+0",0]},
  skills:[["Acrobatics","+5"],["Stealth","+5"],["Sleight of Hand","+5"],["Athletics","+1"]],
  attacks:[
    {n:"Unarmed Strike",hit:"+5",dmg:"1d4+3",nt:"Martial Arts (use DEX) · bonus action attack"},
    {n:"Shortsword",hit:"+5",dmg:"1d6+3",nt:"piercing · finesse"},
    {n:"Dart (thrown)",hit:"+5",dmg:"1d4+3",nt:"range 20/60"}
  ],
  spell:null,
  features:{
    cls:[
      {n:"Martial Arts",t:"Your unarmed strikes use 1d4+DEX. When you attack, you can punch or kick again as a bonus action.",sig:true},
      {n:"Unarmored Defense",t:"Without any armor, your AC is 10 + DEX + WIS = 15. You're light on your feet."}
    ],
    anc:[
      {n:"Lucky",t:"If you roll a 1 on an attack, ability check, or saving throw, reroll it — once."},
      {n:"Brave",t:"Advantage against being frightened. Small body, big courage."},
      {n:"Naturally Stealthy",t:"You can hide behind creatures larger than you — which is most of them."},
      {n:"Halfling Nimbleness",t:"You can move through the space of larger creatures — squeeze past guards with ease."}
    ],
    bg:{n:"City Secrets (Urchin)",t:"You know the secret routes through Varkenbluff. Your party can move twice as fast through the city outside combat."}
  },
  equip:["Shortsword","10 darts","Dungeoneer's pack","50 ft rope","Grappling hook","Ball bearings","Small mirror","Crowbar","Tiny lockbox with pet mouse","10 gp"],
  profs:{armor:"None",weapons:"Simple weapons, shortswords",tools:"Thieves' tools",langs:"Common, Halfling"}
}
];

export default HEROES;
export const ABIL_ORDER = ["STR","DEX","CON","INT","WIS","CHA"];
export const ABIL_FULL = {STR:"Strength",DEX:"Dexterity",CON:"Toughness",INT:"Smarts",WIS:"Wisdom",CHA:"Charm"};
