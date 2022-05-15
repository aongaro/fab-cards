
  import {
    ActionCard,
    ActionSubType,
    Card,
    Class,
    EquipmentCard,
    EquipmentSubType,
    Format,
    HandsRequired,
    Hero,
    HeroCard,
    Keyword,
    Rarity,
    Release,
    ResourceCard,
    ResourceSubType,
    Talent,
    TokenCard,
    TokenSubType,
    Type,
    WeaponCard,
    WeaponSubType
  } from '../interfaces';

  export const cards: (Card | ActionCard | EquipmentCard | HeroCard | ResourceCard | TokenCard | WeaponCard)[] = [{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "dorinthea-ironsong",
    functionalText: `**Once per turn Effect** - When your weapon attack hits, you may attack an additional time with that weapon this turn. *(You must have an action point to attack an additional time.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER004-P.width-450.png",
    keywords: [],
    name: "Dorinthea Ironsong",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.WelcomeToRathe,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Warrior Hero",
    intellect: 4,
    hero: Hero.Dorinthea,
    life: 40,
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "dorinthea",
    functionalText: `**Once per turn Effect** - When your weapon attack hits, you may attack an additional time with that weapon this turn. *(You must have an action point to attack an additional time.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER008-P.width-450.png",
    keywords: [],
    name: "Dorinthea",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.WelcomeToRathe],
    type: Type.Hero,
    typeText: "Warrior Hero – Young",
    intellect: 4,
    hero: Hero.Dorinthea,
    life: 20,
    young: true,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "dawnblade",
    functionalText: `**Once per Turn Action** - {r}: **Attack**

If Dawnblade hits, and it's the second time it has hit this turn, put a +1{p} counter on Dawnblade

At the beginning of your end phase, if Dawnblade has not hit this turn, remove all +1{p} counters from Dawnblade`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB062.width-450.png",
    keywords: [],
    name: "Dawnblade",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.WelcomeToRathe,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Warrior Weapon – Sword (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 3,
    
    talents: [Talent.NotTalented],
    subType: WeaponSubType.Sword
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "braveforge-bracers",
    functionalText: `**Once per turn Action** - {r}: Your next weapon attack this turn gains +1{p}. Activate this ability only if a weapon you control has hit this turn. Go again.

**Battleworn** *(If you defend with Braveforge Bracers, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB006-P.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Braveforge Bracers",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Warrior Equipment – Arms",
    defense: 2,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Arms
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "refraction-bolters",
    functionalText: `When a weapon you control hits, you may destroy Refraction Bolters. If you do, the attack gains **go again.**

**Battleworn** (If you defend with Refraction Bolters, put a -1{d} counter on it when the combat chain closes.)`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_117.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Refraction Bolters",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Warrior Equipment – Legs",
    defense: 1,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Legs
  },,{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "steelblade-supremacy-red",
    functionalText: `**Dorinthea Specialization** *(You may only have Steelblade Supremacy in your deck if your hero is Dorinthea.)*

Until end of turn, target weapon gains +2{p} and “Whenever this weapon hits, draw a card.”

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_119.width-450.png",
    keywords: [Keyword.Specialization,Keyword.GoAgain],
    name: "Steelblade Supremacy",
    rarity: Rarity.Majestic,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    specialization: Hero.Dorinthea,
    
  },,,{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "ironsong-determination-yellow",
    functionalText: `Your next weapon attack this gains +1{p} and **dominate** until end of turn.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_122.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Ironsong Determination",
    rarity: Rarity.SuperRare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },,,,,,,{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "warriors-valor-red",
    functionalText: `Your next weapon attack this turn gains +3{p} and “If this hits, the attack gains **go again**”

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_129.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Warrior's Valor",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "warriors-valor-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p} and “If this hits, the attack gains **go again**”

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_130.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Warrior's Valor",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "warriors-valor-blue",
    functionalText: `Your next weapon attack this turn gains +1{p} and “If this hits, the attack gains **go again**”

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_131.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Warrior's Valor",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },,,,,,,,,,{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "sharpen-steel-red",
    functionalText: `Your next weapon attack this turn gains +3{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_141.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sharpen Steel",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "sharpen-steel-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_142.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sharpen Steel",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "sharpen-steel-blue",
    functionalText: `Your next weapon attack this turn gains +1{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_143.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Sharpen Steel",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "driving-blade-red",
    functionalText: `Your next weapon attack this turn gains +3{p} and **go again.**

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_144.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Driving Blade",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 2,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "driving-blade-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p} and **go again.**

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_145.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Driving Blade",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 2,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "driving-blade-blue",
    functionalText: `Your next weapon attack this turn gains +1{p} and **go again.**

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_146.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Driving Blade",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 2,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "natures-path-pilgrimage-red",
    functionalText: `Your next weapon attack this turn gains +3{p} and “If this hits and you have no cards in your arsenal, reveal the top card of your deck. If it's an action card, put it face down into your arsenal.”

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_147.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Nature's Path Pilgrimage",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "natures-path-pilgrimage-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p} and “If this hits and you have no cards in your arsenal, reveal the top card of your deck. If it's an action card, put it face down into your arsenal.”

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_148.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Nature's Path Pilgrimage",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "natures-path-pilgrimage-blue",
    functionalText: `Your next weapon attack this turn gains +1{p} and “If this hits and you have no cards in your arsenal, reveal the top card of your deck. If it's an action card, put it face down into your arsenal.”

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_149.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Nature's Path Pilgrimage",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "kassai-cintari-sellsword",
    functionalText: `Your second sword attack each turn costs {r} less.

At the beginning of your end phase, if you've attacked 2 or more times with weapons this turn, create a Copper token for each weapon attack that hit. *(It's an item with "**Action**- {r}{r}{r}{r}, destroy Copper: Draw a card. **Go again**")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER029.width-450.png",
    keywords: [],
    name: "Kassai, Cintari Sellsword",
    rarity: Rarity.Rare,
    sets: [Release.HeroDeck,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Warrior Hero – Young",
    intellect: 4,
    hero: Hero.Kassai,
    life: 20,
    young: true,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "cintari-saber",
    functionalText: `**Once per Turn Action** - {r}: **Attack**

When Cintari Saber is defended by an attack action card, it gains +1{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU79.width-450.png",
    keywords: [],
    name: "Cintari Saber",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Warrior Weapon – Sword (1H)",
    handsRequired: HandsRequired.OneHanded,
    power: 2,
    
    talents: [Talent.NotTalented],
    subType: WeaponSubType.Sword
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "courage-of-bladehold",
    functionalText: `**Action** - Destroy Courage of Bladehold: Your sword attacks cost {r} less this turn. **Go again**

**Temper** *(If you defend with Courage of Bladehold, put a -1{d} counter on it when the combat chain closes then destroy it if it has 0{d}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB073.width-450.png",
    keywords: [Keyword.Temper],
    name: "Courage of Bladehold",
    rarity: Rarity.Majestic,
    sets: [Release.Promos,Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Warrior Equipment – Chest",
    defense: 2,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Chest
  },,,{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "spoils-of-war-red",
    functionalText: `Your next weapon attack this turn gains +2{p} and **go again.**

Whenever a weapon you control hits this turn, create 2 Copper tokens.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU-84.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Spoils of War",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "dauntless-red",
    functionalText: `Your next weapon attack this turn gains +3{p}.

The next defense reaction card the defending hero plays this turn costs an additional {r} to play.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU85.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Dauntless",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "dauntless-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p}.

The next defense reaction card the defending hero plays this turn costs an additional {r} to play.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU86.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Dauntless",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "dauntless-blue",
    functionalText: `Your next weapon attack this turn gains +1{p}.

The next defense reaction card the defending hero plays this turn costs an additional {r} to play.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU87.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Dauntless",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },,,,{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "hit-and-run-red",
    functionalText: `Your next weapon attack this turn gains **go again.**

If you have attacked with a weapon this turn, your next attack this turn gains +3{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU91.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Hit and Run",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "hit-and-run-yellow",
    functionalText: `Your next weapon attack this turn gains **go again.**

If you have attacked with a weapon this turn, your next attack this turn gains +2{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU92.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Hit and Run",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "hit-and-run-blue",
    functionalText: `Your next weapon attack this turn gains **go again.**

If you have attacked with a weapon this turn, your next attack this turn gains +1{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU93.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Hit and Run",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "push-forward-red",
    functionalText: `Your next weapon attack this turn gains +3{p}.

If you have attacked with a weapon this turn, your next attack this turn gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU94.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Push Forward",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "push-forward-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p}.

If you have attacked with a weapon this turn, your next attack this turn gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU95.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Push Forward",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "push-forward-blue",
    functionalText: `Your next weapon attack this turn gains +1{p}.

If you have attacked with a weapon this turn, your next attack this turn gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU96.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Push Forward",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "ser-boltyn-breaker-of-dawn",
    functionalText: `If you've **charged** this turn, attacks you control have +1{p} while defended by an attack action card.

**Attack Reaction** - Banish a card from Boltyn's soul: Target attack with {p} greater than its base {p} gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER031.width-450.png",
    keywords: [],
    name: "Ser Boltyn, Breaker of Dawn",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.Monarch],
    type: Type.Hero,
    typeText: "Light Warrior Hero",
    intellect: 4,
    hero: Hero.Boltyn,
    life: 40,
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "boltyn",
    functionalText: `If you've **charged** this turn, attacks you control have +1{p} while defended by an attack action card.

**Attack Reaction** - Banish a card from Boltyn's soul: Target attack with {p} greater than its base {p} gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER035.width-450.png",
    keywords: [],
    name: "Boltyn",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.Monarch],
    type: Type.Hero,
    typeText: "Light Warrior Hero – Young",
    intellect: 4,
    hero: Hero.Boltyn,
    life: 20,
    young: true,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "raydn-duskbane",
    functionalText: `**Once per Turn Action** - 0: **Attack**

If you've **charged** this turn, Raydn gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON031.width-450.png",
    keywords: [],
    name: "Raydn, Duskbane",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Weapon,
    typeText: "Light Warrior Weapon – Sword (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [Talent.Light],
    subType: WeaponSubType.Sword
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "bolting-blade-yellow",
    functionalText: `Bolting Blade costs {r}{r} less to play for each time you've **charged** this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON032.width-450.png",
    keywords: [],
    name: "Bolting Blade",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 4,
    defense: 3,
    pitch: 2,
    power: 7,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },,{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "lumina-ascension-yellow",
    functionalText: `**Boltyn Specialization** *(You may only have Lumina Ascension in your deck if your hero is Boltyn.)*

Until end of turn, weapons you control gain +1{p} and "If this hits, reveal the top card of your deck. If it's a Light card, put it into your hero's soul and gain 1{h}, otherwise put it on the bottom of your deck."

If you've **charged** this turn, you may attack an additional time with each weapon you control.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON034.width-450.png",
    keywords: [Keyword.Specialization,Keyword.GoAgain],
    name: "Lumina Ascension",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action",
    cost: 0,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.Light],
    
    
    
    specialization: Hero.Boltyn,
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "v-of-the-vanguard-yellow",
    functionalText: `**Boltyn Specialization** *(You may only have V of the Vanguard in your deck if your hero is Boltyn.)*

As an additional cost to play V of the Vanguard, you may **charge** your hero's soul any number of times. *(Put 1 or more cards from your hand face up under your hero card.)*

Attacks on this combat chain gain +1{p} for each Light card charged this way.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON035.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Charge],
    name: "V of the Vanguard",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [Talent.Light],
    
    
    
    specialization: Hero.Boltyn,
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "battlefield-blitz-red",
    functionalText: `If you've **charged** this turn, Battlefield Blitz gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON036.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Battlefield Blitz",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "battlefield-blitz-yellow",
    functionalText: `If you've **charged** this turn, Battlefield Blitz gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON037.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Battlefield Blitz",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "battlefield-blitz-blue",
    functionalText: `If you've **charged** this turn, Battlefield Blitz gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON038.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Battlefield Blitz",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "valiant-thrust-red",
    functionalText: `If you've **charged** this turn, Valiant Thrust gains +3{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON039.width-450.png",
    keywords: [],
    name: "Valiant Thrust",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "valiant-thrust-yellow",
    functionalText: `If you've **charged** this turn, Valiant Thrust gains +3{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON040.width-450.png",
    keywords: [],
    name: "Valiant Thrust",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "valiant-thrust-blue",
    functionalText: `If you've **charged** this turn, Valiant Thrust gains +3{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON041.width-450.png",
    keywords: [],
    name: "Valiant Thrust",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "bolt-of-courage-red",
    functionalText: `As an additional cost to play Bolt of Courage, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*

If you've **charged** this turn, Bolt of Courage gains "If this hits, draw a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON042.width-450.png",
    keywords: [Keyword.Charge],
    name: "Bolt of Courage",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 0,
    defense: 3,
    pitch: 1,
    power: 3,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "bolt-of-courage-yellow",
    functionalText: `As an additional cost to play Bolt of Courage, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*

If you've **charged** this turn, Bolt of Courage gains "If this hits, draw a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON043.width-450.png",
    keywords: [Keyword.Charge],
    name: "Bolt of Courage",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 0,
    defense: 3,
    pitch: 2,
    power: 2,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "bolt-of-courage-blue",
    functionalText: `As an additional cost to play Bolt of Courage, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*

If you've **charged** this turn, Bolt of Courage gains "If this hits, draw a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON044.width-450.png",
    keywords: [Keyword.Charge],
    name: "Bolt of Courage",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 0,
    defense: 3,
    pitch: 3,
    power: 1,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "cross-the-line-red",
    functionalText: `As an additional cost to play Cross the Line, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON045.width-450.png",
    keywords: [Keyword.Charge],
    name: "Cross the Line",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 5,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "cross-the-line-yellow",
    functionalText: `As an additional cost to play Cross the Line, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON046.width-450.png",
    keywords: [Keyword.Charge],
    name: "Cross the Line",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 4,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "cross-the-line-blue",
    functionalText: `As an additional cost to play Cross the Line, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON047.width-450.png",
    keywords: [Keyword.Charge],
    name: "Cross the Line",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 3,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "engulfing-light-red",
    functionalText: `As an additional cost to play Engulfing Light, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*

If you've **charged** this turn, Engulfing Light gains "If this hits, put it into your hero's soul."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON048.width-450.png",
    keywords: [Keyword.Charge],
    name: "Engulfing Light",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 0,
    defense: 3,
    pitch: 1,
    power: 3,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "engulfing-light-yellow",
    functionalText: `As an additional cost to play Engulfing Light, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*

If you've **charged** this turn, Engulfing Light gains "If this hits, put it into your hero's soul."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON049.width-450.png",
    keywords: [Keyword.Charge],
    name: "Engulfing Light",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 0,
    defense: 3,
    pitch: 2,
    power: 2,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "engulfing-light-blue",
    functionalText: `As an additional cost to play Engulfing Light, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*

If you've **charged** this turn, Engulfing Light gains "If this hits, put it into your hero's soul."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON050.width-450.png",
    keywords: [Keyword.Charge],
    name: "Engulfing Light",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 0,
    defense: 3,
    pitch: 3,
    power: 1,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "express-lightning-red",
    functionalText: `As an additional cost to play Express Lightning, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON051.width-450.png",
    keywords: [Keyword.Charge],
    name: "Express Lightning",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 0,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "express-lightning-yellow",
    functionalText: `As an additional cost to play Express Lightning, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON052.width-450.png",
    keywords: [Keyword.Charge],
    name: "Express Lightning",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 0,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "express-lightning-blue",
    functionalText: `As an additional cost to play Express Lightning, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON053.width-450.png",
    keywords: [Keyword.Charge],
    name: "Express Lightning",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 0,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "take-flight-red",
    functionalText: `As an additional cost to play Take Flight, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*

If you've **charged** this turn, Take Flight gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON054.width-450.png",
    keywords: [Keyword.Charge],
    name: "Take Flight",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 1,
    power: 4,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "take-flight-yellow",
    functionalText: `As an additional cost to play Take Flight, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*

If you've **charged** this turn, Take Flight gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON055.width-450.png",
    keywords: [Keyword.Charge],
    name: "Take Flight",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 2,
    power: 3,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "take-flight-blue",
    functionalText: `As an additional cost to play Take Flight, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*

If you've **charged** this turn, Take Flight gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON056.width-450.png",
    keywords: [Keyword.Charge],
    name: "Take Flight",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    pitch: 3,
    power: 2,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },,,,{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "hatchet-of-body",
    functionalText: `**Once per Turn Action** - {r}: **Attack**

Whenever you attack with Hatchet of Body, if Hatchet of Mind was the last attack this turn, Hatchet of Body gains +1{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS049.width-450.png",
    keywords: [],
    name: "Hatchet of Body",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Weapon,
    typeText: "Warrior Weapon – Axe (1H)",
    handsRequired: HandsRequired.OneHanded,
    power: 2,
    
    talents: [Talent.NotTalented],
    subType: WeaponSubType.Axe
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "hatchet-of-mind",
    functionalText: `**Once per Turn Action** - {r}: **Attack**

Whenever you attack with Hatchet of Mind, if Hatchet of Body was the last attack this turn, Hatchet of Mind gains +1{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS050.width-450.png",
    keywords: [],
    name: "Hatchet of Mind",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Weapon,
    typeText: "Warrior Weapon – Axe (1H)",
    handsRequired: HandsRequired.OneHanded,
    power: 2,
    
    talents: [Talent.NotTalented],
    subType: WeaponSubType.Axe
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "valiant-dynamo",
    functionalText: `At the beginning of your end phase, if you have attacked 2 or more times with weapons this turn, you may remove a -1{d} counter from Valiant Dynamo.

**Battleworn** *(If you defend with Valiant Dynamo, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB020.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Valiant Dynamo",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Equipment,
    typeText: "Warrior Equipment – Legs",
    defense: 1,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Legs
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "gallantry-gold",
    functionalText: `**Action** - {r}, destroy Gallantry Gold: Your weapon attacks gain +1{p} this turn. **Go again**

**Battleworn** *(If you defend with Gallantry Gold, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON108.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Gallantry Gold",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Warrior Equipment – Arms",
    defense: 1,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Arms
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "spill-blood-red",
    functionalText: `Axes you control gain +2{p} and **dominate** until end of turn.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON109.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Spill Blood",
    rarity: Rarity.Majestic,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "dusk-path-pilgrimage-red",
    functionalText: `Your next weapon attack this turn gains +3{p} and "If this hits, you may attack an additional time with this weapon this turn." *(You must have an action point to attack an additional time.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS060.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Dusk Path Pilgrimage",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "dusk-path-pilgrimage-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p} and "If this hits, you may attack an additional time with this weapon this turn." *(You must have an action point to attack an additional time.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS061.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Dusk Path Pilgrimage",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "dusk-path-pilgrimage-blue",
    functionalText: `Your next weapon attack this turn gains +1{p} and "If this hits, you may attack an additional time with this weapon this turn." *(You must have an action point to attack an additional time.)*

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS062.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Dusk Path Pilgrimage",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "plow-through-red",
    functionalText: `Your next weapon attack this turn gains +3{p} and "If this weapon is defended by an attack action card, it gains +1{p} until end of turn".

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON113.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Plow Through",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "plow-through-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p} and "If this weapon is defended by an attack action card, it gains +1{p} until end of turn".

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON114.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Plow Through",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "plow-through-blue",
    functionalText: `Your next weapon attack this turn gains +1{p} and "If this weapon is defended by an attack action card, it gains +1{p} until end of turn".

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON115.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Plow Through",
    rarity: Rarity.Rare,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "second-swing-red",
    functionalText: `If you have attacked with a weapon this turn, your next attack this turn gains +4{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON116.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Second Swing",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "second-swing-yellow",
    functionalText: `If you have attacked with a weapon this turn, your next attack this turn gains +3{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON117.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Second Swing",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "second-swing-blue",
    functionalText: `If you have attacked with a weapon this turn, your next attack this turn gains +2{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON118.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Second Swing",
    rarity: Rarity.Common,
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },,{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "helm-of-sharp-eye",
    functionalText: `**Attack Reaction** - {r}, destroy Helm of Sharp Eye: Banish the top card of your deck. You may play it this combat chain. Activate this ability only if you control a weapon with {p} greater than twice it's base {p}.

**Battleworn** *(If you defend with Helm of Sharp Eye, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR053.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Helm of Sharp Eye",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Equipment,
    typeText: "Warrior Equipment – Head",
    defense: 1,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Head
  },,{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "blood-on-her-hands-yellow",
    functionalText: `**Kassai Specialization**

As an additional cost to play Blood on Her Hands, destroy any number of Copper you control. For each Copper destroyed this way choose a mode. You may choose each mode twice.

- Target 1H weapon gains +1{p} this turn while attacking this turn.
- Target 1H weapon gains **go again** this turn while attacking this turn.
- Target 1H weapon may attack twice this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR055.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Blood on Her Hands",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    specialization: Hero.Kassai,
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "oath-of-steel-red",
    functionalText: `Whenever you attack with a weapon this turn, put a +1{p} counter on it.

At the beginning of your end phase, remove all +1{p} counters from weapons you control.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR056.width-450.png",
    keywords: [],
    name: "Oath of Steel",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "slice-and-dice-red",
    functionalText: `Whenever you attack with a sword or dagger this turn;

- If it's your first weapon attack this turn, it gains +1{p}.
- If it's your second weapon attack this turn, it gains +3{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR057.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Slice and Dice",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "slice-and-dice-yellow",
    functionalText: `Whenever you attack with a sword or dagger this turn;

- If it's your first weapon attack this turn, it gains +1{p}.
- If it's your second weapon attack this turn, it gains +2p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR058.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Slice and Dice",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "slice-and-dice-blue",
    functionalText: `Whenever you attack with a sword or dagger this turn;

- If it's your first weapon attack this turn, it gains +1{p}.
- If it's your second weapon attack this turn, it gains +1{p}.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR059.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Slice and Dice",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },,,,,,,{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "outland-skirmish-red",
    functionalText: `Your next 1H weapon attack this turn gains +3{p}.

The next time a weapon hits this turn, create a Copper token.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR066.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Outland Skirmish",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "outland-skirmish-yellow",
    functionalText: `Your next 1H weapon attack this turn gains +2{p}.

The next time a weapon hits this turn, create a Copper token.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR067.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Outland Skirmish",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Warrior,
    identifier: "outland-skirmish-blue",
    functionalText: `Your next 1H weapon attack this turn gains +1{p}.

The next time a weapon hits this turn, create a Copper token.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR068.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Outland Skirmish",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  }];
  