
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
    class: Class.Guardian,
    identifier: "bravo-showstopper",
    functionalText: `**Action** - {r}{r}: Until end of turn, your attack action cards with cost 3 or greater gains **dominate. Go again** *(The defending hero can't defend with more than 1 card from their hand)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER002-P.width-450.png",
    keywords: [],
    name: "Bravo, Showstopper",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.WelcomeToRathe,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Guardian Hero",
    intellect: 4,
    hero: Hero.Bravo,
    life: 40,
    
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "bravo",
    functionalText: `**Action** - {r}{r}: Until end of turn, your attack action cards with cost 3 or greater gains **dominate. Go again** *(The defending hero can't defend with more than 1 card from their hand)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER006-P.width-450.png",
    keywords: [],
    name: "Bravo",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.WelcomeToRathe],
    type: Type.Hero,
    typeText: "Guardian Hero – Young",
    intellect: 4,
    hero: Hero.Bravo,
    life: 20,
    young: true,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "anothos",
    functionalText: `**Once per turn Action** - {r}{r}{r}:**Attack**

If you have 2 or more cards in your pitch zone with cost 3 or greater, Anothos has +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB061.width-450.png",
    keywords: [],
    name: "Anothos",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.WelcomeToRathe,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Guardian Weapon – Hammer (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 4,
    
    talents: [Talent.NotTalented],
    subType: WeaponSubType.Hammer
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "tectonic-plating",
    functionalText: `**Once per turn Action** - {r}: Create a Seismic Surge aura token. Go again

**Battleworn** *(If you defend with Tectonic Plating, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB004-P.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Tectonic Plating",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Guardian Equipment – Chest",
    defense: 2,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Chest
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "helm-of-isens-peak",
    functionalText: `**Action** - {r}, destroy Helm of Isen Peak: Your hero gains +1{i} until end of turn.

**Battleworn** *(If you defend with Helm of Isen's Peak, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_42.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Helm of Isen's Peak",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Guardian Equipment – Head",
    defense: 1,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Head
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "crippling-crush-red",
    functionalText: `**Bravo Specialization** *(You may only have Crippling Crush in your deck if your hero is Bravo.)*

**Crush** - If Crippling Crush deals 4 or more damage to a hero, they discard 2 random cards.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_43.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Crush],
    name: "Crippling Crush",
    rarity: Rarity.Majestic,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 7,
    defense: 3,
    pitch: 1,
    power: 11,
    talents: [Talent.NotTalented],
    
    
    
    specialization: Hero.Bravo,
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "spinal-crush-red",
    functionalText: `**Crush** - If Spinal Crush deals 4 or more damage to a hero, action cards, activated abilities, and attacks they control lose and can't gain **go again** during their next action phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_44.width-450.png",
    keywords: [Keyword.Crush],
    name: "Spinal Crush",
    rarity: Rarity.Majestic,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 5,
    defense: 3,
    pitch: 1,
    power: 9,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "cranial-crush-blue",
    functionalText: `**Crush** - If Cranial Crush deals 4 or more damage to a hero, they can't draw cards during their next action phase`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_45.width-450.png",
    keywords: [Keyword.Crush],
    name: "Cranial Crush",
    rarity: Rarity.Majestic,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 6,
    defense: 3,
    pitch: 3,
    power: 8,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "forged-for-war-yellow",
    functionalText: `**Go again**

Equipment you control gain +1{d}.

At the beginning of your action phase, destroy Forged for War.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_46.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Forged for War",
    rarity: Rarity.SuperRare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "show-time-blue",
    functionalText: `**Bravo Specialization** *(You may only have Show Time! In your deck if your hero is Bravo.)*

When Show Time! enters the arena, search your deck for a Guardian attack action card, reveal it and put it into your hand, then shuffle your deck.

At the beginning of your action phase, destroy Show Time! then draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_47.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Show Time!",
    rarity: Rarity.SuperRare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 3,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    specialization: Hero.Bravo,
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "disable-red",
    functionalText: `**Crush** - If Disable deals 4 or more damage to a hero, put a card from their arsenal on the bottom of its owner deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_48.width-450.png",
    keywords: [Keyword.Crush],
    name: "Disable",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 5,
    defense: 3,
    pitch: 1,
    power: 9,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "disable-yellow",
    functionalText: `**Crush** - If Disable deals 4 or more damage to a hero, put a card from their arsenal on the bottom of its owner deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_49.width-450.png",
    keywords: [Keyword.Crush],
    name: "Disable",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 5,
    defense: 3,
    pitch: 2,
    power: 8,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "disable-blue",
    functionalText: `**Crush** - If Disable deals 4 or more damage to a hero, put a card from their arsenal on the bottom of its owner deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_50.width-450.png",
    keywords: [Keyword.Crush],
    name: "Disable",
    rarity: Rarity.Rare,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 5,
    defense: 3,
    pitch: 3,
    power: 7,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },,,,{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "blessing-of-deliverance-red",
    functionalText: `**Go again**

When Blessing of Deliverance enters the arena, if you have a card in your pitch zone with cost 3 or greater, draw a card.

At the beginning of the action phase, destroy Blessing of Deliverance then reveal the top 3 cards of your deck. Gain 1{h} for each card with cost 3 or greater revealed this way.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS006-P.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Blessing of Deliverance",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "blessing-of-deliverance-yellow",
    functionalText: `**Go again**

When Blessing of Deliverance enters the arena, if you have a card in your pitch zone with cost 3 or greater, draw a card.

At the beginning of the action phase, destroy Blessing of Deliverance then reveal the top 2 cards of your deck. Gain 1{h} for each card with cost 3 or greater revealed this way.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS024.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Blessing of Deliverance",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "blessing-of-deliverance-blue",
    functionalText: `**Go again**

When Blessing of Deliverance enters the arena, if you have a card in your pitch zone with cost 3 or greater, draw a card.

At the beginning of the action phase, destroy Blessing of Deliverance then reveal the top card of your deck. Gain 1{h} for each card with cost 3 or greater revealed this way.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS025.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Blessing of Deliverance",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "buckling-blow-red",
    functionalText: `**Crush** - If Buckling Blow deals 4 or more damage to a hero, put a -1{d} counter on target equipment they control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_57.width-450.png",
    keywords: [Keyword.Crush],
    name: "Buckling Blow",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    pitch: 1,
    power: 8,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "buckling-blow-yellow",
    functionalText: `**Crush** - If Buckling Blow deals 4 or more damage to a hero, put a -1{d} counter on target equipment they control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_58.width-450.png",
    keywords: [Keyword.Crush],
    name: "Buckling Blow",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    pitch: 2,
    power: 7,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "buckling-blow-blue",
    functionalText: `**Crush** - If Buckling Blow deals 4 or more damage to a hero, put a -1{d} counter on target equipment they control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_59.width-450.png",
    keywords: [Keyword.Crush],
    name: "Buckling Blow",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    pitch: 3,
    power: 6,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "cartilage-crush-red",
    functionalText: `**Crush** - If Cartilage Crush deals 4 or more damage to a hero, their first action during their next turn costs an additional {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_60.width-450.png",
    keywords: [Keyword.Crush],
    name: "Cartilage Crush",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 1,
    power: 7,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "cartilage-crush-yellow",
    functionalText: `**Crush** - If Cartilage Crush deals 4 or more damage to a hero, their first action during their next turn costs an additional {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_61.width-450.png",
    keywords: [Keyword.Crush],
    name: "Cartilage Crush",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 2,
    power: 6,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "cartilage-crush-blue",
    functionalText: `**Crush** - If Cartilage Crush deals 4 or more damage to a hero, their first action during their next turn costs an additional {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_62.width-450.png",
    keywords: [Keyword.Crush],
    name: "Cartilage Crush",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 3,
    power: 5,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "crush-confidence-red",
    functionalText: `**Crush** - If Crush Confidence deals 4 or more damage to a hero they lose all hero card effects and activated abilities until the end of their next turn. *(Treat the hero card as if the text box is empty)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_63.width-450.png",
    keywords: [Keyword.Crush],
    name: "Crush Confidence",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 1,
    power: 7,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "crush-confidence-yellow",
    functionalText: `**Crush** - If Crush Confidence deals 4 or more damage to a hero they lose all hero card effects and activated abilities until the end of their next turn. *(Treat the hero card as if the text box is empty)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_64.width-450.png",
    keywords: [Keyword.Crush],
    name: "Crush Confidence",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 2,
    power: 6,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "crush-confidence-blue",
    functionalText: `**Crush** - If Crush Confidence deals 4 or more damage to a hero they lose all hero card effects and activated abilities until the end of their next turn. *(Treat the hero card as if the text box is empty)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_65.width-450.png",
    keywords: [Keyword.Crush],
    name: "Crush Confidence",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 3,
    power: 5,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "debilitate-red",
    functionalText: `**Crush** - If Debilitate deals 4 or more damage to a hero, their first attack during their next turn has -2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_66.width-450.png",
    keywords: [Keyword.Crush],
    name: "Debilitate",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    pitch: 1,
    power: 8,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "debilitate-yellow",
    functionalText: `**Crush** - If Debilitate deals 4 or more damage to a hero, their first attack during their next turn has -2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_67.width-450.png",
    keywords: [Keyword.Crush],
    name: "Debilitate",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    pitch: 2,
    power: 7,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "debilitate-blue",
    functionalText: `**Crush** - If Debilitate deals 4 or more damage to a hero, their first attack during their next turn has -2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_68.width-450.png",
    keywords: [Keyword.Crush],
    name: "Debilitate",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    pitch: 3,
    power: 6,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "emerging-power-red",
    functionalText: `**Go again**

At the beginning of your action phase, destroy Emerging Power then the next Guardian attack action card you play this turn gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_69.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Emerging Power",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "emerging-power-yellow",
    functionalText: `**Go again**

At the beginning of your action phase, destroy Emerging Power then the next Guardian attack action card you play this turn gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_70.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Emerging Power",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "emerging-power-blue",
    functionalText: `**Go again**

At the beginning of your action phase, destroy Emerging Power then the next Guardian attack action card you play this turn gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_71.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Emerging Power",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "stonewall-confidence-red",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*

**Go again**

While Stonewall Confidence is in the arena, cards you control with cost 3 or greater gain +4{d}

At the beginning of your action phase, destroy Stonewall Confidence.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_72.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Stonewall Confidence",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "stonewall-confidence-yellow",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*

**Go again**

While Stonewall Confidence is in the arena, cards you control with cost 3 or greater gain +3{d}

At the beginning of your action phase, destroy Stonewall Confidence.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_73.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Stonewall Confidence",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "stonewall-confidence-blue",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*

**Go again**

While Stonewall Confidence is in the arena, cards you control with cost 3 or greater gain +2{d}

At the beginning of your action phase, destroy Stonewall Confidence.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_74.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Stonewall Confidence",
    rarity: Rarity.Common,
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "seismic-surge",
    functionalText: `At the beginning of your action phase, destroy Seismic Surge then the next Guardian attack action card you play this turn costs {r} less to play.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_75.width-450.png",
    keywords: [],
    name: "Seismic Surge",
    rarity: Rarity.Token,
    sets: [Release.WelcomeToRathe,Release.CrucibleOfWar,Release.TalesOfAria,Release.Everfest],
    type: Type.Token,
    typeText: "Guardian Token – Aura",
    talents: [Talent.NotTalented],
    subType: TokenSubType.Aura
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "sledge-of-anvilheim",
    functionalText: `**Action** - {r}{r}{r}{r}: **Attack**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU24.width-450.png",
    keywords: [],
    name: "Sledge of Anvilheim",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Guardian Weapon – Hammer (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 6,
    
    talents: [Talent.NotTalented],
    subType: WeaponSubType.Hammer
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "crater-fist",
    functionalText: `**Action** - {r}{r}{r}, destroy Crater Fist: Your attacks with **crush** gain +2{p} this turn. **Go again**

**Temper** *(If you defend with Crater Fist, put a -1{d} counter on it when the combat chain closes then destroy it if it has 0{d}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU25.width-450.png",
    keywords: [Keyword.Temper],
    name: "Crater Fist",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Guardian Equipment – Arms",
    defense: 2,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Arms
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "mangle-red",
    functionalText: `**Crush** - If Mangle deals 4 or more damage to a hero, destroy target equipment they control with a -1{d} counter on it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU26.width-450.png",
    keywords: [Keyword.Crush],
    name: "Mangle",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    pitch: 1,
    power: 8,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "righteous-cleansing-yellow",
    functionalText: `**Crush** - If Righteous Cleansing deals 4 or more damage to a hero, look at the top 5 cards of their deck. Banish 1 or more cards with the same name from among them, then put the rest on top of their deck in any order.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU27.width-450.png",
    keywords: [Keyword.Crush],
    name: "Righteous Cleansing",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 7,
    defense: 3,
    pitch: 2,
    power: 10,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "stamp-authority-blue",
    functionalText: `When Stamp Authority enters the arena, if you have 2 or more cards in your pitch zone with cost 3 or greater, your hero gains +1{i} until end of turn.

While Stamp Authority is in the arena, attack action card effects do not trigger when they hit.

At the beginning of your action phase, destroy Stamp Authority.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU28.width-450.png",
    keywords: [],
    name: "Stamp Authority",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 3,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "towering-titan-red",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*

At the beginning of your action phase, destroy Towering Titan then the next Guardian attack action card you play this turn gains +10{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU29.width-450.png",
    keywords: [],
    name: "Towering Titan",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 9,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "towering-titan-yellow",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*

At the beginning of your action phase, destroy Towering Titan then the next Guardian attack action card you play this turn gains +10{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU30.width-450.png",
    keywords: [],
    name: "Towering Titan",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 9,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "towering-titan-blue",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*

At the beginning of your action phase, destroy Towering Titan then the next Guardian attack action card you play this turn gains +10{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU31.width-450.png",
    keywords: [],
    name: "Towering Titan",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 9,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "crush-the-weak-red",
    functionalText: `**Crush** - If Crush the Weak deals 4 or more damage to a hero, they can't play attack action cards with 3 or less base {p} during their next action phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU32.width-450.png",
    keywords: [Keyword.Crush],
    name: "Crush the Weak",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 1,
    power: 7,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "crush-the-weak-yellow",
    functionalText: `**Crush** - If Crush the Weak deals 4 or more damage to a hero, they can't play attack action cards with 3 or less base {p} during their next action phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU33.width-450.png",
    keywords: [Keyword.Crush],
    name: "Crush the Weak",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 2,
    power: 6,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "crush-the-weak-blue",
    functionalText: `**Crush** - If Crush the Weak deals 4 or more damage to a hero, they can't play attack action cards with 3 or less base {p} during their next action phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU34.width-450.png",
    keywords: [Keyword.Crush],
    name: "Crush the Weak",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 3,
    power: 5,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "chokeslam-red",
    functionalText: `**Crush** - If Chokeslam deals 4 or more damage to a hero, attack action cards they control can't gain {p} during their next action phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU35.width-450.png",
    keywords: [Keyword.Crush],
    name: "Chokeslam",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    pitch: 1,
    power: 8,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "chokeslam-yellow",
    functionalText: `**Crush** - If Chokeslam deals 4 or more damage to a hero, attack action cards they control can't gain {p} during their next action phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU36.width-450.png",
    keywords: [Keyword.Crush],
    name: "Chokeslam",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    pitch: 2,
    power: 7,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "chokeslam-blue",
    functionalText: `**Crush** - If Chokeslam deals 4 or more damage to a hero, attack action cards they control can't gain {p} during their next action phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU37.width-450.png",
    keywords: [Keyword.Crush],
    name: "Chokeslam",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    pitch: 3,
    power: 6,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "emerging-dominance-red",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*

At the beginning of your action phase, destroy Emerging Dominance then the next Guardian attack action card you play this turn gains +3{p} and **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU38.width-450.png",
    keywords: [],
    name: "Emerging Dominance",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "emerging-dominance-yellow",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*

At the beginning of your action phase, destroy Emerging Dominance then the next Guardian attack action card you play this turn gains +2{p} and **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU39.width-450.png",
    keywords: [],
    name: "Emerging Dominance",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "emerging-dominance-blue",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*

At the beginning of your action phase, destroy Emerging Dominance then the next Guardian attack action card you play this turn gains +1{p} and **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU40.width-450.png",
    keywords: [],
    name: "Emerging Dominance",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "blessing-of-serenity-red",
    functionalText: `The next time your hero would be dealt {p} damage this turn, prevent 3 damage that source would deal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU41.width-450.png",
    keywords: [],
    name: "Blessing of Serenity",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Instant,
    typeText: "Guardian Instant",
    cost: 0,
    
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "blessing-of-serenity-yellow",
    functionalText: `The next time your hero would be dealt {p} damage this turn, prevent 2 damage that source would deal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU42.width-450.png",
    keywords: [],
    name: "Blessing of Serenity",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Instant,
    typeText: "Guardian Instant",
    cost: 0,
    
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "blessing-of-serenity-blue",
    functionalText: `The next time your hero would be dealt {p} damage this turn, prevent 1 damage that source would deal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU43.width-450.png",
    keywords: [],
    name: "Blessing of Serenity",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Instant,
    typeText: "Guardian Instant",
    cost: 0,
    
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "oldhim-grandfather-of-eternity",
    functionalText: `**Essence of Earth and Ice** *(You may have Earth and Ice cards in your deck.)*

**Once per Turn Defense Reaction** - {r}{r}{r}: If an Earth card is pitched this way, prevent the next 2 damage that would be dealt to Oldhim this turn. If an Ice card is pitched this way, the attacking hero puts a card from their hand on top of their deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER042.width-450.png",
    keywords: [Keyword.Essence],
    name: "Oldhim, Grandfather of Eternity",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.TalesOfAria],
    type: Type.Hero,
    typeText: "Elemental Guardian Hero",
    intellect: 4,
    hero: Hero.Oldhim,
    life: 40,
    
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "oldhim",
    functionalText: `**Essence of Earth and Ice** *(You may have Earth and Ice cards in your deck.)*

**Once per Turn Defense Reaction** - {r}{r}{r}: If an Earth card is pitched this way, prevent the next 2 damage that would be dealt to Oldhim this turn. If an Ice card is pitched this way, the attacking hero puts a card from their hand on top of their deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER045.width-450.png",
    keywords: [Keyword.Essence],
    name: "Oldhim",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.TalesOfAria],
    type: Type.Hero,
    typeText: "Elemental Guardian Hero – Young",
    intellect: 4,
    hero: Hero.Oldhim,
    life: 20,
    young: true,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "winters-wail",
    functionalText: `**Once per Turn Action** - {r}{r}{r}: **Attack**

If an Ice card is pitched this way, Winter's Wail gains "If this hits a hero, create a Frostbite token under their control."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE003.width-450.png",
    keywords: [],
    name: "Winter's Wail",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Weapon,
    typeText: "Elemental Guardian Weapon – Hammer (1H)",
    handsRequired: HandsRequired.OneHanded,
    power: 4,
    
    talents: [Talent.Elemental],
    subType: WeaponSubType.Hammer
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "endless-winter-red",
    functionalText: `**Oldhim Specialization** *(You may only have Endless Winter in your deck if your hero is Oldhim.)*

**Ice Fusion** *(As an additional cost to play Endless Winter, you may reveal an Ice card from your hand.)*

If Endless Winter was **fused**, whenever the defending hero adds a defending card to this chain link, create a Frostbite token under their control.

If Endless Winter hits a hero, until the end of their next turn, whenever they activate an ability, create a Frostbite token under their control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE004.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Fusion],
    name: "Endless Winter",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 4,
    defense: 3,
    pitch: 1,
    power: 8,
    talents: [Talent.Elemental],
    
    
    
    specialization: Hero.Oldhim,
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "oaken-old-red",
    functionalText: `**Earth and Ice Fusion** *(As an additional cost to play Oaken Old, you may reveal an Earth and an Ice card from your hand.)*

If Oaken Old was **fused**, it gains +2{p}, **dominate**, and “If this hits a hero, they put 2 random cards from their hand on the bottom of their deck in any order.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE005.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Oaken Old",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 1,
    power: 7,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [Format.Blitz,Format.ClassicConstructed],
    class: Class.Guardian,
    identifier: "awakening-blue",
    functionalText: `**Earth Fusion** *(As an additional cost to play Awakening, you may reveal an Earth card from your hand.)*

If you have less {h} than an opposing hero, create Seismic Surge tokens equal to the difference. If Awakening was **fused**, instead create twice that many Seismic Surge tokens.

Search your deck for a Guardian attack action card with cost less than or equal to the number of Seismic Surge tokens you control, reveal it, put it into your hand, then shuffle your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE006.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Awakening",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Instant,
    typeText: "Elemental Guardian Instant",
    cost: 2,
    
    pitch: 3,
    
    talents: [Talent.Elemental],
    
    
    
    
    
  },,,,,,,{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "entangle-red",
    functionalText: `**Earth Fusion** *(As an additional cost to play Entangle, you may reveal an Earth card from your hand.)*

If Entangle was **fused**, it gains "If this hits a hero, their first attack during their next turn has -2{p}."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE013.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Entangle",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 1,
    power: 7,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "entangle-yellow",
    functionalText: `**Earth Fusion** *(As an additional cost to play Entangle, you may reveal an Earth card from your hand.)*

If Entangle was **fused**, it gains "If this hits a hero, their first attack during their next turn has -2{p}."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE014.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Entangle",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 2,
    power: 6,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "entangle-blue",
    functionalText: `**Earth Fusion** *(As an additional cost to play Entangle, you may reveal an Earth card from your hand.)*

If Entangle was **fused**, it gains "If this hits a hero, their first attack during their next turn has -2{p}."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE015.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Entangle",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 3,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "glacial-footsteps-red",
    functionalText: `**Ice Fusion** *(As an additional cost to play Glacial Footsteps, you may reveal an Ice card from your hand.)*

If Glacial Footsteps was **fused**, it gains **dominate.** *(The defending hero can't defend Glacial Footsteps with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE016.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Glacial Footsteps",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 6,
    defense: 3,
    pitch: 1,
    power: 10,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "glacial-footsteps-yellow",
    functionalText: `**Ice Fusion** *(As an additional cost to play Glacial Footsteps, you may reveal an Ice card from your hand.)*

If Glacial Footsteps was **fused**, it gains **dominate.** *(The defending hero can't defend Glacial Footsteps with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE017.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Glacial Footsteps",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 6,
    defense: 3,
    pitch: 2,
    power: 9,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "glacial-footsteps-blue",
    functionalText: `**Ice Fusion** *(As an additional cost to play Glacial Footsteps, you may reveal an Ice card from your hand.)*

If Glacial Footsteps was **fused**, it gains **dominate.** *(The defending hero can't defend Glacial Footsteps with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE018.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Glacial Footsteps",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 6,
    defense: 3,
    pitch: 3,
    power: 8,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "mulch-red",
    functionalText: `**Earth Fusion** *(As an additional cost to play Mulch, you may reveal an Earth card from your hand.)*

If Mulch was **fused**, it gains "If this hits a hero, put a card from their arsenal on the bottom of their deck."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE019.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Mulch",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 4,
    defense: 3,
    pitch: 1,
    power: 8,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "mulch-yellow",
    functionalText: `**Earth Fusion** *(As an additional cost to play Mulch, you may reveal an Earth card from your hand.)*

If Mulch was **fused**, it gains "If this hits a hero, put a card from their arsenal on the bottom of their deck."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE020.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Mulch",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 4,
    defense: 3,
    pitch: 2,
    power: 7,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "mulch-blue",
    functionalText: `**Earth Fusion** *(As an additional cost to play Mulch, you may reveal an Earth card from your hand.)*

If Mulch was **fused**, it gains "If this hits a hero, put a card from their arsenal on the bottom of their deck."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE021.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Mulch",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 4,
    defense: 3,
    pitch: 3,
    power: 6,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "snow-under-red",
    functionalText: `**Ice Fusion** *(As an additional cost to play Snow Under, you may reveal an Ice card from your hand.)*

If Snow Under was **fused**, it gains "If Snow Under hits a hero, create a Frostbite token under their control."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE022.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Snow Under",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 1,
    power: 7,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "snow-under-yellow",
    functionalText: `**Ice Fusion** *(As an additional cost to play Snow Under, you may reveal an Ice card from your hand.)*

If Snow Under was **fused**, it gains "If Snow Under hits a hero, create a Frostbite token under their control."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE023.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Snow Under",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 2,
    power: 6,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "snow-under-blue",
    functionalText: `**Ice Fusion** *(As an additional cost to play Snow Under, you may reveal an Ice card from your hand.)*

If Snow Under was **fused**, it gains "If Snow Under hits a hero, create a Frostbite token under their control."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE024.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Snow Under",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 3,
    defense: 3,
    pitch: 3,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "emerging-avalanche-red",
    functionalText: `**Ice Fusion** *(As an additional cost to play Emerging Avalanche, you may reveal an Ice card from your hand.)*

**Go again**

When Emerging Avalanche enters the arena, if it was **fused**, create a Frostbite token under target hero control.

At the beginning of your action phase, destroy Emerging Avalanche then the next attack action card you play this turn gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE025.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Emerging Avalanche",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "emerging-avalanche-yellow",
    functionalText: `**Ice Fusion** *(As an additional cost to play Emerging Avalanche, you may reveal an Ice card from your hand.)*

**Go again**

When Emerging Avalanche enters the arena, if it was **fused**, create a Frostbite token under target hero control.

At the beginning of your action phase, destroy Emerging Avalanche then the next attack action card you play this turn gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE026.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Emerging Avalanche",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "emerging-avalanche-blue",
    functionalText: `**Ice Fusion** *(As an additional cost to play Emerging Avalanche, you may reveal an Ice card from your hand.)*

**Go again**

When Emerging Avalanche enters the arena, if it was **fused**, create a Frostbite token under target hero control.

At the beginning of your action phase, destroy Emerging Avalanche then the next attack action card you play this turn gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE027.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Emerging Avalanche",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "strength-of-sequoia-red",
    functionalText: `**Earth Fusion** *(As an additional cost to play Strength of Sequoia, you may reveal an Earth card from your hand.)*

**Go again**

When Strength of Sequoia enters the arena, if it was **fused**, create a Seismic Surge token.

At the beginning of your action phase, destroy Strength of Sequoia then the next attack action card you play this turn gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS078.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Strength of Sequoia",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "strength-of-sequoia-yellow",
    functionalText: `**Earth Fusion** *(As an additional cost to play Strength of Sequoia, you may reveal an Earth card from your hand.)*

**Go again**

When Strength of Sequoia enters the arena, if it was **fused**, create a Seismic Surge token.

At the beginning of your action phase, destroy Strength of Sequoia then the next attack action card you play this turn gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE029.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Strength of Sequoia",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "strength-of-sequoia-blue",
    functionalText: `**Earth Fusion** *(As an additional cost to play Strength of Sequoia, you may reveal an Earth card from your hand.)*

**Go again**

When Strength of Sequoia enters the arena, if it was **fused**, create a Seismic Surge token.

At the beginning of your action phase, destroy Strength of Sequoia then the next attack action card you play this turn gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE030.width-450.png",
    keywords: [Keyword.Fusion,Keyword.GoAgain],
    name: "Strength of Sequoia",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Aura",
    cost: 2,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "titans-fist",
    functionalText: `**Once per Turn Action** - {r}{r}{r}: **Attack**

If there is a card with cost 3 or greater in your pitch zone, Titan's Fist has +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS066.width-450.png",
    keywords: [],
    name: "Titan's Fist",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Weapon,
    typeText: "Guardian Weapon – Hammer (1H)",
    handsRequired: HandsRequired.OneHanded,
    power: 3,
    
    talents: [Talent.NotTalented],
    subType: WeaponSubType.Hammer
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "rampart-of-the-rams-head",
    functionalText: `Whenever you defend with Rampart of the Ram's Head, you may pay {r}. If you do, it gains +1{d} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB049.width-450.png",
    keywords: [],
    name: "Rampart of the Ram's Head",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.TalesOfAria],
    type: Type.Equipment,
    typeText: "Guardian Equipment – Off-Hand",
    defense: 0,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.OffHand
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "rotten-old-buckler",
    functionalText: `**Blade Break** *(If you defend with Rotten Old Buckler, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE204.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Rotten Old Buckler",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Equipment,
    typeText: "Guardian Equipment – Off-Hand",
    defense: 1,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.OffHand
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "tear-asunder-blue",
    functionalText: `Your next Guardian attack this turn gains +1{p}, **dominate**, and "If this hits a hero, they discard 2 cards."

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE205.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Tear Asunder",
    rarity: Rarity.Majestic,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Guardian Action",
    cost: 3,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "embolden-red",
    functionalText: `**Go again**

When Embolden enters the arena, if you control another non-token aura, draw a card.

At the beginning of your action phase, destroy Embolden then the next Guardian attack action card you play this turn gains +5{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE206.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Embolden",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 4,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "embolden-yellow",
    functionalText: `**Go again**

When Embolden enters the arena, if you control another non-token aura, draw a card.

At the beginning of your action phase, destroy Embolden then the next Guardian attack action card you play this turn gains +4{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE207.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Embolden",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 4,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "embolden-blue",
    functionalText: `**Go again**

When Embolden enters the arena, if you control another non-token aura, draw a card.

At the beginning of your action phase, destroy Embolden then the next Guardian attack action card you play this turn gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE208.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Embolden",
    rarity: Rarity.Rare,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 4,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "thump-red",
    functionalText: `While Thump's {p} is greater than its base {p}, it gains **dominate** and "If this hits a hero, they discard a card." *(The defending hero can't defend Thump with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE209.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Thump",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    pitch: 1,
    power: 6,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "thump-yellow",
    functionalText: `While Thump's {p} is greater than its base {p}, it gains **dominate** and "If this hits a hero, they discard a card." *(The defending hero can't defend Thump with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE210.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Thump",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    pitch: 2,
    power: 5,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "thump-blue",
    functionalText: `While Thump's {p} is greater than its base {p}, it gains **dominate** and "If this hits a hero, they discard a card." *(The defending hero can't defend Thump with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE211.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Thump",
    rarity: Rarity.Common,
    sets: [Release.TalesOfAria],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    pitch: 3,
    power: 4,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "grandeur-of-valahai-blue",
    functionalText: `**Legendary** (You may only have 1 Grandeur of Valahai in your deck.)

When you pitch Grandeur of Valahai, create a Seismic Surge token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR000.width-450.png",
    keywords: [Keyword.Legendary],
    name: "Grandeur of Valahai",
    rarity: Rarity.Fabled,
    sets: [Release.Everfest],
    type: Type.Resource,
    typeText: "Guardian Resource – Gem",
    
    
    pitch: 3,
    talents: [Talent.NotTalented],
    subType: ResourceSubType.Gem
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "bravo-star-of-the-show",
    functionalText: `**Essence of Earth, Ice, and Lightning** *(You may have Earth, Ice, and Lightning cards in your deck.)*

At the start of your turn, you may reveal an Earth, an Ice, and a Lightning card from your hand. If you do, the next attack action card with cost 3 or greater you play this turn gains +2{p}, **dominate**, and **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR017.width-450.png",
    keywords: [Keyword.Essence],
    name: "Bravo, Star of the Show",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Hero,
    typeText: "Elemental Guardian Hero",
    intellect: 4,
    hero: Hero.Bravo,
    life: 40,
    
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "stalagmite-bastion-of-isenloft",
    functionalText: `Whenever you defend with Stalagmite, create a Frostbite token under the attacking hero's control. **Temper**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB078.width-450.png",
    keywords: [Keyword.Temper],
    name: "Stalagmite, Bastion of Isenloft",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Equipment,
    typeText: "Ice Guardian Equipment – Off-Hand",
    defense: 2,
    
    talents: [Talent.Ice],
    subType: EquipmentSubType.OffHand
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "valda-brightaxe",
    functionalText: `Whenever an opponent draws a card during an action phase, create a Seismic Surge token for each card drawn this way.

At the start of your turn, if you control 3 or more Seismic Surge tokens, cards you own with **crush** gain **dominate** this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER051.width-450.png",
    keywords: [],
    name: "Valda Brightaxe",
    rarity: Rarity.Majestic,
    sets: [Release.HeroDeck,Release.Everfest],
    type: Type.Hero,
    typeText: "Guardian Hero – Young",
    intellect: 4,
    hero: Hero.Valda,
    life: 21,
    young: true,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "earthlore-bounty",
    functionalText: `Whenever you draw a card from the effect of an action card, create a Seismic Surge token for each card drawn this way.

**Temper** *(If you defend with Earthlore Bounty, put a -1{d} counter on it when the combat chain closes then destroy it if it has 0{d}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB076.width-450.png",
    keywords: [Keyword.Temper],
    name: "Earthlore Bounty",
    rarity: Rarity.Majestic,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Equipment,
    typeText: "Guardian Equipment – Chest",
    defense: 2,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Chest
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "pulverize-red",
    functionalText: `**Heave 3** *(At the beginning of your end phase, if Pulverize is in your hand and you have an empty arsenal zone, you may pay {r}{r}{r} and put Pulverize face up into your arsenal. If you do, create 3 Seismic Surge tokens.)*

If Pulverize hits a hero, their first attack during their next turn has -4{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR021.width-450.png",
    keywords: [Keyword.Heave],
    name: "Pulverize",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 10,
    defense: 3,
    pitch: 1,
    power: 14,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "imposing-visage-blue",
    functionalText: `Search your deck for an aura card with cost X or less, put it into the arena, then shuffle your deck.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR022.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Imposing Visage",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action",
    
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    specialCost: "X3",
    
    
    
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "nerves-of-steel-blue",
    functionalText: `When Nerves of Steel enters the arena, remove a -1{d} counter from a chest equipment you control.

**Battleworn** and **temper** on equipment you control doesn't trigger if it defends an attack with 2 or less {p}. *(***Battleworn*** and ***temper*** trigger when the combat chain closes.)*

When your hero is dealt damage, destroy Nerves of Steel.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR023.width-450.png",
    keywords: [Keyword.Battleworn,Keyword.Temper],
    name: "Nerves of Steel",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 3,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "thunder-quake-red",
    functionalText: `**Heave 3** *(At the beginning of your end phase, if Thunder Quake is in your hand and you have an empty arsenal zone, you may pay {r}{r}{r} and put Thunder Quake face up into your arsenal. If you do, create 3 Seismic Surge tokens.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR024.width-450.png",
    keywords: [Keyword.Heave],
    name: "Thunder Quake",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 6,
    defense: 3,
    pitch: 1,
    power: 10,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "thunder-quake-yellow",
    functionalText: `**Heave 3** *(At the beginning of your end phase, if Thunder Quake is in your hand and you have an empty arsenal zone, you may pay {r}{r}{r} and put Thunder Quake face up into your arsenal. If you do, create 3 Seismic Surge tokens.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR025.width-450.png",
    keywords: [Keyword.Heave],
    name: "Thunder Quake",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 6,
    defense: 3,
    pitch: 2,
    power: 9,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "thunder-quake-blue",
    functionalText: `**Heave 3** *(At the beginning of your end phase, if Thunder Quake is in your hand and you have an empty arsenal zone, you may pay {r}{r}{r} and put Thunder Quake face up into your arsenal. If you do, create 3 Seismic Surge tokens.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR026.width-450.png",
    keywords: [Keyword.Heave],
    name: "Thunder Quake",
    rarity: Rarity.Rare,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 6,
    defense: 3,
    pitch: 3,
    power: 8,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "macho-grande-red",
    functionalText: `**Dominate** *(The defending hero can't defend Macho Grande with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS087.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Macho Grande",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 7,
    defense: 3,
    pitch: 1,
    power: 10,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "macho-grande-yellow",
    functionalText: `**Dominate** *(The defending hero can't defend Macho Grande with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS088.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Macho Grande",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 7,
    defense: 3,
    pitch: 2,
    power: 9,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "macho-grande-blue",
    functionalText: `**Dominate** *(The defending hero can't defend Macho Grande with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS089.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Macho Grande",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 7,
    defense: 3,
    pitch: 3,
    power: 8,
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "seismic-stir-red",
    functionalText: `Create 3 Seismic Surge tokens.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR030.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Seismic Stir",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action",
    cost: 2,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "seismic-stir-yellow",
    functionalText: `Create 2 Seismic Surge tokens.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR031.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Seismic Stir",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action",
    cost: 2,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "seismic-stir-blue",
    functionalText: `Create a Seismic Surge token.

**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR032.width-450.png",
    keywords: [Keyword.GoAgain],
    name: "Seismic Stir",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action",
    cost: 2,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "steadfast-red",
    functionalText: `Prevent the next 6 damage that would be dealt to your hero this turn by a source of your choice.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR033.width-450.png",
    keywords: [],
    name: "Steadfast",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Instant,
    typeText: "Guardian Instant",
    cost: 3,
    
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "steadfast-yellow",
    functionalText: `Prevent the next 5 damage that would be dealt to your hero this turn by a source of your choice.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR034.width-450.png",
    keywords: [],
    name: "Steadfast",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Instant,
    typeText: "Guardian Instant",
    cost: 3,
    
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Guardian,
    identifier: "steadfast-blue",
    functionalText: `Prevent the next 4 damage that would be dealt to your hero this turn by a source of your choice.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR035.width-450.png",
    keywords: [],
    name: "Steadfast",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Instant,
    typeText: "Guardian Instant",
    cost: 3,
    
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  }];
  