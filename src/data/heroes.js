const HEROES = [
{
  id:"yuki", name:"Yuki", pron:"she/her", emoji:"🎭", aura:"#E08A4B",
  role:"Support", kind:"Human Bard", level:2,
  tagline:"A storyteller with a hundred faces.",
  quote:"You travelled with the island's scholar-adventurers, and came home with a satchel of riddles and a gift for becoming whoever the story needs.",
  ac:13, hp:15, hitDice:"2d8", speed:"30 ft", init:"+2", prof:"+2", pp:11,
  ab:{STR:[8,"−1","−1",0],DEX:[14,"+2","+4",1],CON:[13,"+1","+1",0],INT:[12,"+1","+1",0],WIS:[10,"+0","+0",0],CHA:[16,"+3","+5",1]},
  skills:[["Performance","+5"],["Persuasion","+5"],["Deception","+5"],["History","+3"],["Investigation","+3"]],
  attacks:[
    {n:"Rapier",hit:"+4",dmg:"1d8+2",nt:"piercing · finesse"},
    {n:"Vicious Mockery",hit:"DC 13",dmg:"1d4",nt:"enemy saves (WIS); psychic + rattled"}
  ],
  spell:{dc:"13",atk:"+5",slots:3,
    cantrips:["Vicious Mockery","Mage Hand"],
    label:"Spells Known",known:["Healing Word","Faerie Fire","Dissonant Whispers"]},
  features:{
    cls:[
      {n:"Bardic Inspiration",t:"Give a friend a d6 they can add to a roll later. A few times per rest.",sig:true},
      {n:"Jack of All Trades",t:"Add +1 to any ability check you're not already trained in."},
      {n:"Song of Rest",t:"Your friends heal a little extra when the party takes a short rest."}
    ],
    anc:[{n:"Versatile (Human)",t:"A little bit good at everything — extra skill and flexibility."}],
    bg:{n:"Wise Reputation (AHA)",t:"You know many of the island's scholars and clever folk."}
  },
  equip:["Leather armor","Rapier","Bellow flute","Explorer's Pack","50 ft rope","5 candles + tinderbox","1 healing potion","AHA research journal","13 gold flowers"],
  profs:{armor:"Light armor",weapons:"Simple weapons, rapiers, longswords, shortswords",tools:"Three musical instruments, one artisan's tool",langs:"Common + one more"}
},
{
  id:"mei", name:"Mei", pron:"they/them", emoji:"🦢", aura:"#5B8DD9",
  role:"Spellcaster", kind:"Dara Wizard", level:2,
  tagline:"She folds paper into living magic.",
  quote:"Born from a tree, blank as fresh paper, until a glyph filled your mind. A witch taught you folk magic — but your real gift is origami that comes alive.",
  ac:12, hp:13, hitDice:"2d6", speed:"30 ft", init:"+2", prof:"+2", pp:13,
  ab:{STR:[8,"−1","−1",0],DEX:[14,"+2","+2",0],CON:[13,"+1","+1",0],INT:[16,"+3","+5",1],WIS:[12,"+1","+3",1],CHA:[10,"+0","+0",0]},
  skills:[["Arcana","+5"],["Investigation","+5"],["Nature","+5"],["Survival","+3"],["Perception","+3"]],
  attacks:[
    {n:"Fire Bolt",hit:"+5",dmg:"1d10",nt:"fire · range 120 ft"},
    {n:"Dagger",hit:"+4",dmg:"1d4+2",nt:"piercing · finesse, thrown"}
  ],
  spell:{dc:"13",atk:"+5",slots:3,
    cantrips:["Fire Bolt","Mage Hand","Light"],
    label:"Prepared",known:["Mage Armor","Magic Missile","Sleep","Detect Magic","Feather Fall"]},
  features:{
    cls:[
      {n:"Origami Constructs",t:"Fold a paper crane, crab, or tiger and bind it to a friend to protect or help them.",sig:true},
      {n:"Arcane Recovery",t:"Once a day on a short rest, get back a little of your spell energy."}
    ],
    anc:[
      {n:"Create Talisman",t:"Make a paper charm: Sun (dash/dodge), Earth (survive a hit), or Moon (extra radiant damage)."},
      {n:"Knowledge Talisman (1/day)",t:"A friend can add a d6 to one ability check."}
    ],
    bg:{n:"Sibling Student (Witch)",t:"A trusted friend inside a witch coven can help you when you need it."}
  },
  equip:["Spellbook","Alchemist's supplies","Stack of fine paper","9 common ingredients (you know what they do)","Dagger","Hooded lantern","1 healing potion","Witch's hat","9 gold flowers"],
  profs:{armor:"None",weapons:"Daggers, darts, slings, quarterstaffs, light crossbows",tools:"Alchemist's supplies",langs:"Common + one more"}
},
{
  id:"hana", name:"Hana", pron:"she/her", emoji:"🐉", aura:"#D9614B",
  role:"Quick Fighter", kind:"Dara Monk", level:2,
  tagline:"Small, brave, and fast as the wind.",
  quote:"Barely three feet tall and bright red, you've always seen the spirit world others miss. You move like the gentle sheep dragons — knowing when to fight and when to flee.",
  ac:15, hp:16, hitDice:"2d8", speed:"40 ft", init:"+3", prof:"+2", pp:14,
  ab:{STR:[12,"+1","+3",1],DEX:[16,"+3","+5",1],CON:[13,"+1","+1",0],INT:[10,"+0","+0",0],WIS:[14,"+2","+2",0],CHA:[8,"−1","−1",0]},
  skills:[["Acrobatics","+5"],["Stealth","+5"],["Insight","+4"],["Perception","+4"],["Athletics","+3"],["Persuasion","+1"]],
  attacks:[
    {n:"Unarmed Strike",hit:"+5",dmg:"1d4+3",nt:"Martial Arts (use DEX)"},
    {n:"Shortsword",hit:"+5",dmg:"1d6+3",nt:"piercing · finesse"},
    {n:"Dart (thrown)",hit:"+5",dmg:"1d4+3",nt:"range 20/60"}
  ],
  spell:null,
  features:{
    cls:[
      {n:"Flurry of Blows",t:"After you Attack, spend 1 ki to make two extra unarmed strikes as a bonus action.",sig:true},
      {n:"Ki (2 points)",t:"Spend ki for Flurry of Blows, Patient Defense (dodge), or Step of the Wind (dash/leap). Save DC 12."},
      {n:"Unarmored Movement",t:"You move 10 ft faster (already in your speed). Great for racing around a giant house."}
    ],
    anc:[
      {n:"Create + Might Talisman (1/day)",t:"Make paper charms; the Might Talisman lets a friend add a d6 to a saving throw."},
      {n:"Spirit Senses",t:"You speak Torum and get along with spirits others can't even see."}
    ],
    bg:{n:"Connections Beyond (Spirit Kin)",t:"You know two spirits by name and can reach them with a ritual."}
  },
  equip:["Shortsword","10 darts","Grappling hook + 50 ft silk rope","Bedroll","10 candles","Two spirit-linked ingredients","A gift from a spirit friend","1 healing potion","10 gold flowers"],
  profs:{armor:"None",weapons:"Simple weapons, shortswords",tools:"One instrument or artisan's tool",langs:"Common, Torum"}
},
{
  id:"arzo", name:"Arzo", pron:"he/him", emoji:"🌸", aura:"#CE7B9B",
  role:"Healer", kind:"Elf Druid", level:2,
  tagline:"Flower magic flows through him.",
  quote:"Born to human parents with a shimmering spirit-mark, he stands with one foot in the Spirit Realm. The wild petals answer him more than any book ever could.",
  ac:15, hp:16, hitDice:"2d8", speed:"30 ft", init:"+1", prof:"+2", pp:15,
  ab:{STR:[8,"−1","−1",0],DEX:[13,"+1","+1",0],CON:[14,"+2","+2",0],INT:[12,"+1","+3",1],WIS:[16,"+3","+5",1],CHA:[10,"+0","+0",0]},
  skills:[["Perception","+5"],["Medicine","+5"],["History","+3"],["Investigation","+3"],["Nature","+3"]],
  attacks:[
    {n:"Produce Flame",hit:"+5",dmg:"1d8",nt:"fire · range 30 ft"},
    {n:"Scimitar",hit:"+3",dmg:"1d6+1",nt:"slashing · finesse"}
  ],
  spell:{dc:"13",atk:"+5",slots:3,
    cantrips:["Produce Flame","Guidance","Dancing Lights"],
    label:"Prepared",known:["Cure Wounds","Healing Word","Entangle","Thunderwave","Faerie Fire"]},
  features:{
    cls:[
      {n:"Petal Dance",t:"Spend a Wild Shape use to bloom into flower magic — heal a hurt friend or shield the group.",sig:true},
      {n:"Wild Shape (2/rest)",t:"Turn into a small animal — a mouse or cat — to sneak, scout, or squeeze through gaps."}
    ],
    anc:[
      {n:"Ethereal Sight",t:"As an action, see creatures in the Spirit Realm as glowing outlines."},
      {n:"Oaka Mark: Nature",t:"You know the Dancing Lights cantrip; at higher levels, more nature magic."},
      {n:"Darkvision",t:"See in the dark up to 60 ft."}
    ],
    bg:{n:"Wise Reputation (AHA)",t:"You know many of the island's scholars and clever folk."}
  },
  equip:["Hide armor","Wooden shield","Scimitar","Druidic focus","Herbalism kit","Explorer's Pack","50 ft rope","1 healing potion","13 gold flowers"],
  profs:{armor:"Light & medium armor, shields (no metal)",weapons:"Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears",tools:"Herbalism kit",langs:"Common, Druidic"}
},
{
  id:"taro", name:"Taro", pron:"he/him", emoji:"🐸", aura:"#5E8C3E",
  role:"Tough Bruiser", kind:"Nakudama Barbarian", level:2,
  tagline:"A hungry frog-folk with a huge axe.",
  quote:"A frog-folk who never met a snack — or a story — he didn't love. Loud, fearless, and almost impossible to knock down.",
  ac:13, hp:27, hitDice:"2d12", speed:"25 ft (swim 30)", init:"+1", prof:"+2", pp:11,
  ab:{STR:[16,"+3","+5",1],DEX:[13,"+1","+1",0],CON:[15,"+2","+4",1],INT:[10,"+0","+0",0],WIS:[12,"+1","+1",0],CHA:[8,"−1","−1",0]},
  skills:[["Athletics","+5"],["Intimidation","+1"],["Mechanics","+2"],["Salvage","+2"]],
  attacks:[
    {n:"Greataxe",hit:"+5",dmg:"1d12+3",nt:"slashing · +2 more while Raging"},
    {n:"Handaxe (thrown)",hit:"+5",dmg:"1d6+3",nt:"range 20/60"}
  ],
  spell:null,
  features:{
    cls:[
      {n:"Rage (2/day)",t:"As a bonus action, roar into a Rage: +2 damage on Strength hits and you shrug off most physical damage.",sig:true},
      {n:"Reckless Attack",t:"Swing wildly for a better chance to hit — but enemies hit you more easily too."},
      {n:"Danger Sense",t:"You're great at dodging traps and blasts (advantage on those saves)."}
    ],
    anc:[
      {n:"Amphibious",t:"You breathe air and water — handy in a witch's flooded cellar."},
      {n:"Standing Leap",t:"Jump 20 ft across or 15 ft up, no run-up needed."},
      {n:"Grasping Tongue",t:"Flick your tongue to snatch a small object up to 15 ft away."}
    ],
    bg:{n:"Machine Whisperer (Mechanic)",t:"Spend a few minutes with a machine and you know if it can be fixed."}
  },
  equip:["Greataxe","Four handaxes","Explorer's Pack","Grappling hook","Ball bearings","Flask of oil","Unfinished mechanical trinket","1 healing potion","15 gold flowers"],
  profs:{armor:"Light & medium armor, shields",weapons:"Simple & martial weapons",tools:"Three artisan's tools",langs:"Common, Naku Naku"}
},
{
  id:"kenji", name:"Kenji", pron:"he/him", emoji:"🌊", aura:"#3E8E9E",
  role:"Protector", kind:"Elf Paladin", level:2,
  tagline:"A diver sworn to shield his friends.",
  quote:"A diver who knows the Shallows better than dry land. You've sworn to flow around every obstacle and sweep danger away from the people you protect.",
  ac:18, hp:20, hitDice:"2d10", speed:"30 ft", init:"+0", prof:"+2", pp:11,
  ab:{STR:[16,"+3","+3",0],DEX:[10,"+0","+0",0],CON:[13,"+1","+1",0],INT:[8,"−1","−1",0],WIS:[12,"+1","+3",1],CHA:[15,"+2","+4",1]},
  skills:[["Athletics","+5"],["Insight","+3"],["Nature","+1"],["Religion","+1"]],
  attacks:[
    {n:"Longsword",hit:"+5",dmg:"1d8+3",nt:"slashing · 1d10+3 two-handed"},
    {n:"Javelin (thrown)",hit:"+5",dmg:"1d6+3",nt:"range 30/120"}
  ],
  spell:{dc:"12",atk:"+4",slots:2,
    cantrips:["Guidance"],
    label:"Prepared",known:["Cure Wounds","Bless","Shield of Faith"]},
  features:{
    cls:[
      {n:"Lay on Hands (10 pool)",t:"Touch a hurt friend and heal them. Spread 10 healing points however you like.",sig:true},
      {n:"Divine Smite",t:"When you hit with a weapon, spend a spell slot to deal an extra 2d8 radiant damage."},
      {n:"Fighting Style: Defense",t:"+1 to your armor (already counted in AC 18)."},
      {n:"Divine Sense",t:"Sense powerful spirits and unnatural things nearby."}
    ],
    anc:[
      {n:"Oaka Mark: Harmony",t:"You know the Guidance cantrip to steady a friend's roll."},
      {n:"Ethereal Sight & Darkvision",t:"See into the Spirit Realm, and see in the dark up to 60 ft."}
    ],
    bg:{n:"Once a Member (Diver)",t:"The Mariners' lodges give you free room, board, and a helping hand."}
  },
  equip:["Chain mail","Shield","Longsword","Two javelins","Holy symbol","Grappling hook + 50 ft rope","Hooded lantern","1 healing potion","11 gold flowers"],
  profs:{armor:"All armor, shields",weapons:"Simple & martial weapons",tools:"Diver's armor",langs:"Common"}
},
{
  id:"wren", name:"Wren", pron:"he/him", emoji:"✨", aura:"#C99A3E",
  role:"Hero / Striker", kind:"Human Fighter", level:2,
  tagline:"A spirit shares his body — and his blade.",
  quote:"A young courier on his first big delivery, when a dying spirit chose him as its final home. Now its gentle power flickers alongside his own.",
  ac:18, hp:22, hitDice:"2d10", speed:"30 ft", init:"+1", prof:"+2", pp:13,
  ab:{STR:[16,"+3","+5",1],DEX:[13,"+1","+1",0],CON:[15,"+2","+4",1],INT:[10,"+0","+0",0],WIS:[12,"+1","+1",0],CHA:[8,"−1","−1",0]},
  skills:[["Athletics","+5"],["Perception","+3"],["Survival","+3"],["Stealth","+3"]],
  attacks:[
    {n:"Longsword",hit:"+5",dmg:"1d8+3",nt:"slashing · 1d10+3 two-handed"},
    {n:"Javelin (thrown)",hit:"+5",dmg:"1d6+3",nt:"range 30/120"}
  ],
  spell:null,
  features:{
    cls:[
      {n:"Action Surge (1/rest)",t:"Take a whole extra action on your turn — attack twice in one turn!",sig:true},
      {n:"Second Wind",t:"As a bonus action, catch your breath and heal yourself 1d10+2."},
      {n:"Fighting Style: Defense",t:"+1 to your armor (already counted in AC 18)."}
    ],
    anc:[{n:"Versatile (Human)",t:"A little bit good at everything — extra skill and flexibility."}],
    bg:{n:"Pocket Map (Courier)",t:"A worn map showing secret Brigade-only paths across the island. You and Lomi are both couriers!"}
  },
  equip:["Chain mail","Shield","Longsword","Two javelins","Climber's kit","Hooded lantern","Cobbler's tools","1 healing potion","11 gold flowers"],
  profs:{armor:"All armor, shields",weapons:"Simple & martial weapons",tools:"Cobbler's tools",langs:"Common + one more"}
},
{
  id:"riku", name:"Riku", pron:"he/him", emoji:"🗡️", aura:"#8E6FB0",
  role:"Sneak", kind:"Nakudama Rogue", level:2,
  tagline:"A clever frog-folk who slips past anything.",
  quote:"A diver who'd rather outsmart a problem than out-muscle it. A bit of wax, a pinch of smarts, and a whole lot of magic gets you in — and out — of anywhere.",
  ac:14, hp:17, hitDice:"2d8", speed:"25 ft (swim 30)", init:"+3", prof:"+2", pp:13,
  ab:{STR:[8,"−1","−1",0],DEX:[16,"+3","+5",1],CON:[13,"+1","+1",0],INT:[14,"+2","+4",1],WIS:[12,"+1","+1",0],CHA:[10,"+0","+0",0]},
  skills:[["Stealth","+5",true],["Thieves' Tools","+5",true],["Investigation","+4"],["Sleight of Hand","+3"],["Perception","+3"],["Nature","+4"],["Athletics","+1"]],
  attacks:[
    {n:"Dagger",hit:"+5",dmg:"1d4+3",nt:"piercing · finesse, thrown"},
    {n:"Shortbow",hit:"+5",dmg:"1d6+3",nt:"range 80/320"},
    {n:"Sneak Attack",hit:"—",dmg:"+1d6",nt:"once a turn when hidden or a friend is near the target"}
  ],
  spell:null,
  features:{
    cls:[
      {n:"Sneak Attack (+1d6)",t:"Add 1d6 damage when you strike from hiding or a friend is next to the enemy.",sig:true},
      {n:"Cunning Action",t:"As a bonus action every turn, Dash, Hide, or Disengage — zip around the room."},
      {n:"Expertise",t:"You're a true expert at Stealth and picking locks (doubled bonus = +5)."}
    ],
    anc:[
      {n:"Amphibious & Standing Leap",t:"Breathe underwater and leap 20 ft across or 15 ft up."},
      {n:"Latching Tongue",t:"Stick your tongue to something bigger and pull yourself toward it — perfect for climbing."}
    ],
    bg:{n:"Once a Member (Diver)",t:"The Mariners' lodges give you free room, board, and a helping hand."}
  },
  equip:["Leather armor","Two daggers","Shortbow + 20 arrows","Thieves' tools","Grappling hook","Explorer's Pack","Chest","1 healing potion","11 gold flowers"],
  profs:{armor:"Light armor",weapons:"Simple weapons, hand crossbows, longswords, rapiers, shortswords",tools:"Thieves' tools",langs:"Common, Naku Naku, Thieves' Cant"}
}
];

export default HEROES;
export const ABIL_ORDER = ["STR","DEX","CON","INT","WIS","CHA"];
export const ABIL_FULL = {STR:"Strength",DEX:"Dexterity",CON:"Toughness",INT:"Smarts",WIS:"Wisdom",CHA:"Charm"};
