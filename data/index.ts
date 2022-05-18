
  import {
    ActionCard,
    ActionSubType,
    Card,
    Class,
    EquipmentCard,
    EquipmentSubType,
    Format,
    Fusion,
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
  } from './interfaces';
  
  const actions: ActionCard[] = [{
    class: Class.Brute,
    identifier: "alpha-rampage-red",
    functionalText: `**Rhinar Specialization** *(You may only have Alpha Rampage in your deck if your hero is Rhinar)*  As an additional cost to play Alpha Rampage, discard a random card.  When you attack with Alpha Rampage, **intimidate**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP010.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Intimidate],
    name: "Alpha Rampage",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 9,
    talents: [],
    
    
    
    specialization: Hero.Rhinar,
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "bloodrush-bellow-yellow",
    functionalText: `As an additional cost to play Bloodrush Bellow, discard a random card.  Your Brute attacks gain +2{p} this turn.  If the discarded card has 6 or more {p}, draw 2 cards and Bloodrush Bellow gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP014.width-450.png",
    keywords: [],
    name: "Bloodrush Bellow",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "sand-sketched-plan-blue",
    functionalText: `**Rhinar Specialization** *(You may only have Sand Sketched Plan your deck if your hero is Rhinar)*  Search your deck for a card, put it into your hand, discard a random card, then shuffle your deck.  If the discarded card has 6 or more {p}, gain 2 action points.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP015.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Sand Sketched Plan",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    specialization: Hero.Rhinar,
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "breakneck-battery-red",
    functionalText: `As an additional cost to play Breakneck Battery, discard a random card.  If the discarded card has 6 or more {p}, Breakneck Battery gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP016.width-450.png",
    keywords: [],
    name: "Breakneck Battery",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.RhinarHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "breakneck-battery-yellow",
    functionalText: `As an additional cost to play Breakneck Battery, discard a random card.  If the discarded card has 6 or more {p}, Breakneck Battery gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP017.width-450.png",
    keywords: [],
    name: "Breakneck Battery",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "breakneck-battery-blue",
    functionalText: `As an additional cost to play Breakneck Battery, discard a random card.  If the discarded card has 6 or more {p}, Breakneck Battery gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP018.width-450.png",
    keywords: [],
    name: "Breakneck Battery",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "savage-feast-red",
    functionalText: `As an additional cost to play Savage Feast discard a random card.  When you attack with Savage Feast, if a card with 6 or more {p} was discarded as an additional cost to play it, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/RNR10.width-450.png",
    keywords: [],
    name: "Savage Feast",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.RhinarHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "savage-feast-yellow",
    functionalText: `As an additional cost to play Savage Feast discard a random card.  When you attack with Savage Feast, if a card with 6 or more {p} was discarded as an additional cost to play it, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP020.width-450.png",
    keywords: [],
    name: "Savage Feast",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "savage-feast-blue",
    functionalText: `As an additional cost to play Savage Feast discard a random card.  When you attack with Savage Feast, if a card with 6 or more {p} was discarded as an additional cost to play it, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP021.width-450.png",
    keywords: [],
    name: "Savage Feast",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "barraging-beatdown-red",
    functionalText: `Your next Brute attack this turn gains “While this attack is defended by less than 2 non-equipment cards, it has +4{p}  **Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP022.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Barraging Beatdown",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "barraging-beatdown-yellow",
    functionalText: `Your next Brute attack this turn gains “While this attack is defended by less than 2 non-equipment cards, it has +3{p}  **Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP023.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Barraging Beatdown",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.RhinarHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "barraging-beatdown-blue",
    functionalText: `Your next Brute attack this turn gains “While this attack is defended by less than 2 non-equipment cards, it has +2{p}  **Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/RNR25.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Barraging Beatdown",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.RhinarHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "savage-swing-red",
    functionalText: `As an additional cost to play Savage Swing, discard a random card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/RNR11.width-450.png",
    keywords: [],
    name: "Savage Swing",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.RhinarHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "savage-swing-yellow",
    functionalText: `As an additional cost to play Savage Swing, discard a random card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/RNR16.width-450.png",
    keywords: [],
    name: "Savage Swing",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.RhinarHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "savage-swing-blue",
    functionalText: `As an additional cost to play Savage Swing, discard a random card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP033.width-450.png",
    keywords: [],
    name: "Savage Swing",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "pack-hunt-red",
    functionalText: `When you attack with Pack Hunt, **intimidate**. *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/RNR9.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Pack Hunt",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.RhinarHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "pack-hunt-yellow",
    functionalText: `When you attack with Pack Hunt, **intimidate**. *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP026.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Pack Hunt",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "pack-hunt-blue",
    functionalText: `When you attack with Pack Hunt, **intimidate**. *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP027.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Pack Hunt",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "smash-instinct-red",
    functionalText: `When you attack with Smash Instinct, **intimidate**. *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/RNR12.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Smash Instinct",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.RhinarHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "smash-instinct-yellow",
    functionalText: `When you attack with Smash Instinct, **intimidate**. *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/RNR17.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Smash Instinct",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.RhinarHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "smash-instinct-blue",
    functionalText: `When you attack with Smash Instinct, **intimidate**. *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP036.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Smash Instinct",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "wrecker-romp-red",
    functionalText: `As an additional cost to play Wrecker Romp. Discard a random card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS020.width-450.png",
    keywords: [],
    name: "Wrecker Romp",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.RhinarHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 8,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "wrecker-romp-yellow",
    functionalText: `As an additional cost to play Wrecker Romp. Discard a random card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS021.width-450.png",
    keywords: [],
    name: "Wrecker Romp",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "wrecker-romp-blue",
    functionalText: `As an additional cost to play Wrecker Romp. Discard a random card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS005-P.width-450.png",
    keywords: [],
    name: "Wrecker Romp",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.RhinarHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "awakening-bellow-red",
    functionalText: `The next Brute attack action card you play this turn gains +3{p}  **Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/RNR14.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Awakening Bellow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.RhinarHeroDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "awakening-bellow-yellow",
    functionalText: `The next Brute attack action card you play this turn gains +2{p}  **Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_33.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Awakening Bellow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "awakening-bellow-blue",
    functionalText: `The next Brute attack action card you play this turn gains +1{p}  **Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/RNR24.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Awakening Bellow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.RhinarHeroDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "primeval-bellow-red",
    functionalText: `As an additional cost to play Primeval Bellow, discard a random card.  Your next Brute attack this turn gains +5{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP040.width-450.png",
    keywords: [],
    name: "Primeval Bellow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "primeval-bellow-yellow",
    functionalText: `As an additional cost to play Primeval Bellow, discard a random card.  Your next Brute attack this turn gains +4{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP041.width-450.png",
    keywords: [],
    name: "Primeval Bellow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "primeval-bellow-blue",
    functionalText: `As an additional cost to play Primeval Bellow, discard a random card.  Your next Brute attack this turn gains +3{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/RNR26.width-450.png",
    keywords: [],
    name: "Primeval Bellow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.RhinarHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Guardian,
    identifier: "crippling-crush-red",
    functionalText: `**Bravo Specialization** *(You may only have Crippling Crush in your deck if your hero is Bravo.)*  **Crush** - If Crippling Crush deals 4 or more damage to a hero, they discard 2 random cards.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP050.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Crush],
    name: "Crippling Crush",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 7,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 11,
    talents: [],
    
    
    
    specialization: Hero.Bravo,
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "spinal-crush-red",
    functionalText: `**Crush** - If Spinal Crush deals 4 or more damage to a hero, action cards, activated abilities, and attacks they control lose and can’t gain **go again** during their next action phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP053.width-450.png",
    keywords: [Keyword.Crush],
    name: "Spinal Crush",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 5,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 9,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "cranial-crush-blue",
    functionalText: `**Crush** - If Cranial Crush deals 4 or more damage to a hero, they can’t draw cards during their next action phase`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_45.width-450.png",
    keywords: [Keyword.Crush],
    name: "Cranial Crush",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 6,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 8,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "forged-for-war-yellow",
    functionalText: `**Go again**  Equipment you control gain +1{d}.  At the beginning of your action phase, destroy Forged for War.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_46.width-450.png",
    keywords: [],
    name: "Forged for War",
    rarity: Rarity.SuperRare,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "show-time!-blue",
    functionalText: `**Bravo Specialization** *(You may only have Show Time! In your deck if your hero is Bravo.)*  When Show Time! enters the arena, search your deck for a Guardian attack action card, reveal it and put it into your hand, then shuffle your deck.  At the beginning of your action phase, destroy Show Time! then draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP054.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Show Time!",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    specialization: Hero.Bravo,
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "disable-red",
    functionalText: `**Crush** - If Disable deals 4 or more damage to a hero, put a card from their arsenal on the bottom of its owner deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO11.width-450.png",
    keywords: [Keyword.Crush],
    name: "Disable",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 5,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 9,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "disable-yellow",
    functionalText: `**Crush** - If Disable deals 4 or more damage to a hero, put a card from their arsenal on the bottom of its owner deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP056.width-450.png",
    keywords: [Keyword.Crush],
    name: "Disable",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 5,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 8,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "disable-blue",
    functionalText: `**Crush** - If Disable deals 4 or more damage to a hero, put a card from their arsenal on the bottom of its owner deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO19.width-450.png",
    keywords: [Keyword.Crush],
    name: "Disable",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 5,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "blessing-of-deliverance-red",
    functionalText: `**Go again**  When Blessing of Deliverance enters the arena, if you have a card with cost 3 or greater in your pitch zone, draw a card.  At the beginning of the action phase, destroy Blessing of Deliverance then reveal the top 3 cards of your deck. Gain 1{h} for each card with cost 3 or greater revealed this way.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS006-P.width-450.png",
    keywords: [],
    name: "Blessing of Deliverance",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "blessing-of-deliverance-yellow",
    functionalText: `**Go again**  When Blessing of Deliverance enters the arena, if you have a card with cost 3 or greater in your pitch zone, draw a card.  At the beginning of the action phase, destroy Blessing of Deliverance then reveal the top 2 cards of your deck. Gain 1{h} for each card with cost 3 or greater revealed this way.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS024.width-450.png",
    keywords: [],
    name: "Blessing of Deliverance",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "blessing-of-deliverance-blue",
    functionalText: `**Go again**  When Blessing of Deliverance enters the arena, if you have a card with cost 3 or greater in your pitch zone, draw a card.  At the beginning of the action phase, destroy Blessing of Deliverance then reveal the top card of your deck. Gain 1{h} for each card with cost 3 or greater revealed this way.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS025.width-450.png",
    keywords: [],
    name: "Blessing of Deliverance",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.BravoBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "buckling-blow-red",
    functionalText: `**Crush** - If Buckling Blow deals 4 or more damage to a hero, put a -1{d} counter on target equipment they control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO8.width-450.png",
    keywords: [Keyword.Crush],
    name: "Buckling Blow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 8,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "buckling-blow-yellow",
    functionalText: `**Crush** - If Buckling Blow deals 4 or more damage to a hero, put a -1{d} counter on target equipment they control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_58.width-450.png",
    keywords: [Keyword.Crush],
    name: "Buckling Blow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "buckling-blow-blue",
    functionalText: `**Crush** - If Buckling Blow deals 4 or more damage to a hero, put a -1{d} counter on target equipment they control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO16.width-450.png",
    keywords: [Keyword.Crush],
    name: "Buckling Blow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "cartilage-crush-red",
    functionalText: `**Crush** - If Cartilage Crush deals 4 or more damage to a hero, their first action during their next turn costs an additional {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO9.width-450.png",
    keywords: [Keyword.Crush],
    name: "Cartilage Crush",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "cartilage-crush-yellow",
    functionalText: `**Crush** - If Cartilage Crush deals 4 or more damage to a hero, their first action during their next turn costs an additional {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP068.width-450.png",
    keywords: [Keyword.Crush],
    name: "Cartilage Crush",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "cartilage-crush-blue",
    functionalText: `**Crush** - If Cartilage Crush deals 4 or more damage to a hero, their first action during their next turn costs an additional {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO17.width-450.png",
    keywords: [Keyword.Crush],
    name: "Cartilage Crush",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "crush-confidence-red",
    functionalText: `**Crush** - If Crush Confidence deals 4 or more damage to a hero, they lose all hero card effects and activated abilities until the end of their next turn. *(Treat the hero card as if the text box is empty)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP073.width-450.png",
    keywords: [Keyword.Crush],
    name: "Crush Confidence",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "crush-confidence-yellow",
    functionalText: `**Crush** - If Crush Confidence deals 4 or more damage to a hero, they lose all hero card effects and activated abilities until the end of their next turn. *(Treat the hero card as if the text box is empty)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP074.width-450.png",
    keywords: [Keyword.Crush],
    name: "Crush Confidence",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "crush-confidence-blue",
    functionalText: `**Crush** - If Crush Confidence deals 4 or more damage to a hero, they lose all hero card effects and activated abilities until the end of their next turn. *(Treat the hero card as if the text box is empty)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO18.width-450.png",
    keywords: [Keyword.Crush],
    name: "Crush Confidence",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "debilitate-red",
    functionalText: `**Crush** - If Debilitate deals 4 or more damage to a hero, their first attack during their next turn has -2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO10.width-450.png",
    keywords: [Keyword.Crush],
    name: "Debilitate",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 8,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "debilitate-yellow",
    functionalText: `**Crush** - If Debilitate deals 4 or more damage to a hero, their first attack during their next turn has -2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO13.width-450.png",
    keywords: [Keyword.Crush],
    name: "Debilitate",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "debilitate-blue",
    functionalText: `**Crush** - If Debilitate deals 4 or more damage to a hero, their first attack during their next turn has -2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP078.width-450.png",
    keywords: [Keyword.Crush],
    name: "Debilitate",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "emerging-power-red",
    functionalText: `**Go again**  At the beginning of your action phase, destroy Emerging Power then the next Guardian attack action card you play this turn gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO12.width-450.png",
    keywords: [],
    name: "Emerging Power",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "emerging-power-yellow",
    functionalText: `**Go again**  At the beginning of your action phase, destroy Emerging Power then the next Guardian attack action card you play this turn gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO14.width-450.png",
    keywords: [],
    name: "Emerging Power",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "emerging-power-blue",
    functionalText: `**Go again**  At the beginning of your action phase, destroy Emerging Power then the next Guardian attack action card you play this turn gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_71.width-450.png",
    keywords: [],
    name: "Emerging Power",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "stonewall-confidence-red",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*  **Go again**  Cards you control with cost 3 or greater gain +4{d} while defending.  At the beginning of your action phase, destroy Stonewall Confidence.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP082.width-450.png",
    keywords: [],
    name: "Stonewall Confidence",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "stonewall-confidence-yellow",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*  **Go again**  Cards you control with cost 3 or greater gain +3{d} while defending.  At the beginning of your action phase, destroy Stonewall Confidence.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP083.width-450.png",
    keywords: [],
    name: "Stonewall Confidence",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "stonewall-confidence-blue",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*  **Go again**  Cards you control with cost 3 or greater gain +2{d} while defending.  At the beginning of your action phase, destroy Stonewall Confidence.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP084.width-450.png",
    keywords: [],
    name: "Stonewall Confidence",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Ninja,
    identifier: "lord-of-wind-blue",
    functionalText: `**Katsu Specialization** *(You may only have Lord of Wind in your deck if your hero is Katsu.)*  **Combo** - If Mugenshi: RELEASE was the last attack this combat chain, as an additional cost to play Lord of Wind, you may pay any amount of {r}. If you do, shuffle that many target cards named Surging Strike, Whelming Gustwave and/or Mugenshi: RELEASE from your graveyard into your deck, then Lord of Wind gains that much {p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP101.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Combo],
    name: "Lord of Wind",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    specialization: Hero.Katsu,
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "mugenshi:-release-yellow",
    functionalText: `**Katsu Specialization** *(You may only have Mugenshi: RELEASE in your deck if your hero is Katsu.)*  **Combo** - If Whelming Gustwave was the last attack this combat chain, Mugenshi: RELEASE gains +1{p}, **go again**, and “If this hits, search your deck for any number of cards named Lord of Wind, reveal them, put them into your hand, then shuffle your deck.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP102.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Combo],
    name: "Mugenshi: RELEASE",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    specialization: Hero.Katsu,
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "hurricane-technique-yellow",
    functionalText: `**Combo** - If Rising Knee Thrust was the last attack this combat chain, Hurricane Technique gains +1{p}, **go again**, and “If Hurricane Technique hits, put it into your hand.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_84.width-450.png",
    keywords: [Keyword.Combo],
    name: "Hurricane Technique",
    rarity: Rarity.SuperRare,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "pounding-gale-red",
    functionalText: `**Combo** - If Open the Center was the last attack this combat chain, Pounding Gale gains “If Pounding Gale would deal damage to a hero, instead it deals double that much damage”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_85.width-450.png",
    keywords: [Keyword.Combo],
    name: "Pounding Gale",
    rarity: Rarity.SuperRare,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "fluster-fist-red",
    functionalText: `**Combo** - If Open the Center was the last attack this combat chain, Fluster Fist gains +1{p} for each attack that has hit this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/KSU10.width-450.png",
    keywords: [Keyword.Combo],
    name: "Fluster Fist",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.KatsuHeroDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "fluster-fist-yellow",
    functionalText: `**Combo** - If Open the Center was the last attack this combat chain, Fluster Fist gains +1{p} for each attack that has hit this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_87.width-450.png",
    keywords: [Keyword.Combo],
    name: "Fluster Fist",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "fluster-fist-blue",
    functionalText: `**Combo** - If Open the Center was the last attack this combat chain, Fluster Fist gains +1{p} for each attack that has hit this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/KSU22.width-450.png",
    keywords: [Keyword.Combo],
    name: "Fluster Fist",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.KatsuHeroDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "blackout-kick-red",
    functionalText: `**Combo** - If Rising Knee Thrust was the last attack this combat chain, Blackout Kick gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/KSU9.width-450.png",
    keywords: [Keyword.Combo],
    name: "Blackout Kick",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.KatsuHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "blackout-kick-yellow",
    functionalText: `**Combo** - If Rising Knee Thrust was the last attack this combat chain, Blackout Kick gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP105.width-450.png",
    keywords: [Keyword.Combo],
    name: "Blackout Kick",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "blackout-kick-blue",
    functionalText: `**Combo** - If Rising Knee Thrust was the last attack this combat chain, Blackout Kick gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP106.width-450.png",
    keywords: [Keyword.Combo],
    name: "Blackout Kick",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "open-the-center-red",
    functionalText: `**Combo** - If Head Jab was the last attack this combat chain, Open the Center gains +1{p}, **go again**, and **dominate**. *(The defending hero can’t defend Open the Center with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/KSU13.width-450.png",
    keywords: [Keyword.Combo,Keyword.Dominate],
    name: "Open the Center",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.KatsuHeroDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "open-the-center-yellow",
    functionalText: `**Combo** - If Head Jab was the last attack this combat chain, Open the Center gains +1{p}, **go again**, and **dominate**. *(The defending hero can’t defend Open the Center with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_96.width-450.png",
    keywords: [Keyword.Combo,Keyword.Dominate],
    name: "Open the Center",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "open-the-center-blue",
    functionalText: `**Combo** - If Head Jab was the last attack this combat chain, Open the Center gains +1{p}, **go again**, and **dominate**. *(The defending hero can’t defend Open the Center with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_97.width-450.png",
    keywords: [Keyword.Combo,Keyword.Dominate],
    name: "Open the Center",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "head-jab-red",
    functionalText: `**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS017.width-450.png",
    keywords: [],
    name: "Head Jab",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.KatsuHeroDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "head-jab-yellow",
    functionalText: `**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS018.width-450.png",
    keywords: [],
    name: "Head Jab",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "head-jab-blue",
    functionalText: `**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS019.width-450.png",
    keywords: [],
    name: "Head Jab",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.IraWelcomeDeck,Release.KatsuHeroDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "leg-tap-red",
    functionalText: `**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/KSU12.width-450.png",
    keywords: [],
    name: "Leg Tap",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.KatsuHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "leg-tap-yellow",
    functionalText: `**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/KSU18.width-450.png",
    keywords: [],
    name: "Leg Tap",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.KatsuHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "leg-tap-blue",
    functionalText: `**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP118.width-450.png",
    keywords: [],
    name: "Leg Tap",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "rising-knee-thrust-red",
    functionalText: `**Combo** - If Leg Tap was the last attack this combat chain, Rising Knee Thrust gains +2{p} and **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/KSU14.width-450.png",
    keywords: [Keyword.Combo],
    name: "Rising Knee Thrust",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.KatsuHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "rising-knee-thrust-yellow",
    functionalText: `**Combo** - If Leg Tap was the last attack this combat chain, Rising Knee Thrust gains +2{p} and **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/KSU19.width-450.png",
    keywords: [Keyword.Combo],
    name: "Rising Knee Thrust",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.KatsuHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "rising-knee-thrust-blue",
    functionalText: `**Combo** - If Leg Tap was the last attack this combat chain, Rising Knee Thrust gains +2{p} and **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP121.width-450.png",
    keywords: [Keyword.Combo],
    name: "Rising Knee Thrust",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "surging-strike-red",
    functionalText: `**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/KSU15.width-450.png",
    keywords: [],
    name: "Surging Strike",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.KatsuHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "surging-strike-yellow",
    functionalText: `**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/KSU20.width-450.png",
    keywords: [],
    name: "Surging Strike",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.KatsuHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "surging-strike-blue",
    functionalText: `**Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP127.width-450.png",
    keywords: [],
    name: "Surging Strike",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "whelming-gustwave-red",
    functionalText: `**Combo** - If Surging Strike was the last attack this combat chain, Whelming Gustwave gains +1{p}, **go again**, and “If this hits, draw a card.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS007-P.width-450.png",
    keywords: [Keyword.Combo],
    name: "Whelming Gustwave",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.KatsuHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "whelming-gustwave-yellow",
    functionalText: `**Combo** - If Surging Strike was the last attack this combat chain, Whelming Gustwave gains +1{p}, **go again**, and “If this hits, draw a card.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS027.width-450.png",
    keywords: [Keyword.Combo],
    name: "Whelming Gustwave",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "whelming-gustwave-blue",
    functionalText: `**Combo** - If Surging Strike was the last attack this combat chain, Whelming Gustwave gains +1{p}, **go again**, and “If this hits, draw a card.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS028.width-450.png",
    keywords: [Keyword.Combo],
    name: "Whelming Gustwave",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.KatsuHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "steelblade-supremacy-red",
    functionalText: `**Dorinthea Specialization** *(You may only have Steelblade Supremacy in your deck if your hero is Dorinthea.)*  Until end of turn, target weapon gains +2{p} and “Whenever this weapon hits, draw a card.”  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP152.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Steelblade Supremacy",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    specialization: Hero.Dorinthea,
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "ironsong-determination-yellow",
    functionalText: `Your next weapon attack this gains +1{p} and **dominate** until end of turn.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_122.width-450.png",
    keywords: [],
    name: "Ironsong Determination",
    rarity: Rarity.SuperRare,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "warriors-valor-red",
    functionalText: `Your next weapon attack this turn gains +3{p} and “If this hits, the attack gains **go again**.”  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP159.width-450.png",
    keywords: [],
    name: "Warrior’s Valor",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "warriors-valor-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p} and “If this hits, the attack gains **go again**.”  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/TEA18.width-450.png",
    keywords: [],
    name: "Warrior’s Valor",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "warriors-valor-blue",
    functionalText: `Your next weapon attack this turn gains +1{p} and “If this hits, the attack gains **go again**.”  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/TEA25.width-450.png",
    keywords: [],
    name: "Warrior’s Valor",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "sharpen-steel-red",
    functionalText: `Your next weapon attack this turn gains +3{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/TEA14.width-450.png",
    keywords: [],
    name: "Sharpen Steel",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.DorintheaHeroDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "sharpen-steel-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_142.width-450.png",
    keywords: [],
    name: "Sharpen Steel",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "sharpen-steel-blue",
    functionalText: `Your next weapon attack this turn gains +1{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/TEA24.width-450.png",
    keywords: [],
    name: "Sharpen Steel",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.DorintheaHeroDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "driving-blade-red",
    functionalText: `Your next weapon attack this turn gains +3{p} and **go again**.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/TEA12.width-450.png",
    keywords: [],
    name: "Driving Blade",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "driving-blade-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p} and **go again**.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_145.width-450.png",
    keywords: [],
    name: "Driving Blade",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "driving-blade-blue",
    functionalText: `Your next weapon attack this turn gains +1{p} and **go again**.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/TEA22.width-450.png",
    keywords: [],
    name: "Driving Blade",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "natures-path-pilgrimage-red",
    functionalText: `Your next weapon attack this turn gains +3{p} and “If this hits and you have no cards in your arsenal, reveal the top card of your deck. If it’s an action card, put it face down into your arsenal.”  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/TEA13.width-450.png",
    keywords: [],
    name: "Nature’s Path Pilgrimage",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "natures-path-pilgrimage-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p} and “If this hits and you have no cards in your arsenal, reveal the top card of your deck. If it’s an action card, put it face down into your arsenal.”  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP178.width-450.png",
    keywords: [],
    name: "Nature’s Path Pilgrimage",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "natures-path-pilgrimage-blue",
    functionalText: `Your next weapon attack this turn gains +1{p} and “If this hits and you have no cards in your arsenal, reveal the top card of your deck. If it’s an action card, put it face down into your arsenal.”  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/TEA23.width-450.png",
    keywords: [],
    name: "Nature’s Path Pilgrimage",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "enlightened-strike-red",
    functionalText: `As an additional cost to play Enlightened Strike, put a card from your hand on the bottom of your deck.  Choose 1; - When you attack with Enlightened Strike, draw a card. - Enlightened Strike gains +2{p}. - Enlightened Strike gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP361.width-450.png",
    keywords: [],
    name: "Enlightened Strike",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "tome-of-fyendal-yellow",
    functionalText: `Draw 2 cards.  If Tome of Fyendal is played from arsenal, gain 1{h} for each card in your hand.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP365.width-450.png",
    keywords: [],
    name: "Tome of Fyendal",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "last-ditch-effort-blue",
    functionalText: `When you play Last Ditch Effort, if you have no cards in your deck, it gains +4{p} and **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP362.width-450.png",
    keywords: [],
    name: "Last Ditch Effort",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "crazy-brew-blue",
    functionalText: `**Action** - Destroy Crazy Brew: Roll a 6 sided die. On;  - 1 or 2 - Lose 2{h}. **Go again** - 3 or 4 - Gain 2{h}. **Go again** - 5 or 6 - Gain {r}{r}, gain 2 action points, and your next attack this turn gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB016.width-450.png",
    keywords: [],
    name: "Crazy Brew",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "drone-of-brutality-red",
    functionalText: `If Drone of Brutality would be put into your graveyard from anywhere, instead put it on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/RNR15.width-450.png",
    keywords: [],
    name: "Drone of Brutality",
    rarity: Rarity.Rare,
    restrictedFormats: [Format.Blitz,Format.Commoner],
    sets: [Release.RhinarHeroDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "drone-of-brutality-yellow",
    functionalText: `If Drone of Brutality would be put into your graveyard from anywhere, instead put it on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_165.width-450.png",
    keywords: [],
    name: "Drone of Brutality",
    rarity: Rarity.Rare,
    restrictedFormats: [Format.Blitz,Format.Commoner],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "drone-of-brutality-blue",
    functionalText: `If Drone of Brutality would be put into your graveyard from anywhere, instead put it on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO25.width-450.png",
    keywords: [],
    name: "Drone of Brutality",
    rarity: Rarity.Rare,
    restrictedFormats: [Format.Blitz,Format.Commoner],
    sets: [Release.BravoBlitzDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "snatch-red",
    functionalText: `If Snatch hits, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP371.width-450.png",
    keywords: [],
    name: "Snatch",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "snatch-yellow",
    functionalText: `If Snatch hits, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP372.width-450.png",
    keywords: [],
    name: "Snatch",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "snatch-blue",
    functionalText: `If Snatch hits, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP373.width-450.png",
    keywords: [],
    name: "Snatch",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "energy-potion-blue",
    functionalText: `**Instant** - Destroy Energy Potion: Gain {r}{r}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB012-P.width-450.png",
    keywords: [],
    name: "Energy Potion",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.KatsuHeroDeck,Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "potion-of-strength-blue",
    functionalText: `**Action** - Destroy Potion of Strength: Your next attack this turn gains +2{p}. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB013-P.width-450.png",
    keywords: [],
    name: "Potion of Strength",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.BravoBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "timesnap-potion-blue",
    functionalText: `**Action** - Destroy Timesnap Potion: Gain 2 action points.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB014-P.width-450.png",
    keywords: [],
    name: "Timesnap Potion",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.RhinarHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "barraging-brawnhide-red",
    functionalText: `While Barraging Brawnhide is defended by less than 2 non-equipment cards, it has +1{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_176.width-450.png",
    keywords: [],
    name: "Barraging Brawnhide",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "barraging-brawnhide-yellow",
    functionalText: `While Barraging Brawnhide is defended by less than 2 non-equipment cards, it has +1{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/RNR19.width-450.png",
    keywords: [],
    name: "Barraging Brawnhide",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.RhinarHeroDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "barraging-brawnhide-blue",
    functionalText: `While Barraging Brawnhide is defended by less than 2 non-equipment cards, it has +1{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO23.width-450.png",
    keywords: [],
    name: "Barraging Brawnhide",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "demolition-crew-red",
    functionalText: `As an additional cost to play Demolition Crew, reveal a card in your hand with cost 2 or greater.  **Dominate** *(The defending hero can’t defend Demolition Crew with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_179.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Demolition Crew",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "demolition-crew-yellow",
    functionalText: `As an additional cost to play Demolition Crew, reveal a card in your hand with cost 2 or greater.  **Dominate** *(The defending hero can’t defend Demolition Crew with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_180.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Demolition Crew",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "demolition-crew-blue",
    functionalText: `As an additional cost to play Demolition Crew, reveal a card in your hand with cost 2 or greater.  **Dominate** *(The defending hero can’t defend Demolition Crew with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_181.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Demolition Crew",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "flock-of-the-feather-walkers-red",
    functionalText: `As an additional cost to play Flock of the Feather Walkers, reveal a card in your hand with cost 1 or less.  When you attack with Flock of the Feather Walkers, create a Quicken aura token. *(It’s an aura with “When you play an attack action card or attack with a weapon, destroy Quicken then the attack gains **go again**.”)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP390.width-450.png",
    keywords: [],
    name: "Flock of the Feather Walkers",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "flock-of-the-feather-walkers-yellow",
    functionalText: `As an additional cost to play Flock of the Feather Walkers, reveal a card in your hand with cost 1 or less.  When you attack with Flock of the Feather Walkers, create a Quicken aura token. *(It’s an aura with “When you play an attack action card or attack with a weapon, destroy Quicken then the attack gains **go again**.”)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP391.width-450.png",
    keywords: [],
    name: "Flock of the Feather Walkers",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "flock-of-the-feather-walkers-blue",
    functionalText: `As an additional cost to play Flock of the Feather Walkers, reveal a card in your hand with cost 1 or less.  When you attack with Flock of the Feather Walkers, create a Quicken aura token. *(It’s an aura with “When you play an attack action card or attack with a weapon, destroy Quicken then the attack gains **go again**.”)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/RNR27.width-450.png",
    keywords: [],
    name: "Flock of the Feather Walkers",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.RhinarHeroDeck,Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "nimble-strike-red",
    functionalText: `As an additional cost to play Nimble Strike, you may banish a card named Nimblism from your graveyard. If you do, Nimble Strike gain +1{p} and **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_185.width-450.png",
    keywords: [],
    name: "Nimble Strike",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "nimble-strike-yellow",
    functionalText: `As an additional cost to play Nimble Strike, you may banish a card named Nimblism from your graveyard. If you do, Nimble Strike gain +1{p} and **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_186.width-450.png",
    keywords: [],
    name: "Nimble Strike",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "nimble-strike-blue",
    functionalText: `As an additional cost to play Nimble Strike, you may banish a card named Nimblism from your graveyard. If you do, Nimble Strike gain +1{p} and **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_187.width-450.png",
    keywords: [],
    name: "Nimble Strike",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "raging-onslaught-red",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_188.width-450.png",
    keywords: [],
    name: "Raging Onslaught",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "raging-onslaught-yellow",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/RNR20.width-450.png",
    keywords: [],
    name: "Raging Onslaught",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.RhinarHeroDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "raging-onslaught-blue",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO24.width-450.png",
    keywords: [],
    name: "Raging Onslaught",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "scar-for-a-scar-red",
    functionalText: `When you play Scar for a Scar, if you have less {h} than an opposing hero, it gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB015-P.width-450.png",
    keywords: [],
    name: "Scar for a Scar",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.IraWelcomeDeck,Release.KatsuHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "scar-for-a-scar-yellow",
    functionalText: `When you play Scar for a Scar, if you have less {h} than an opposing hero, it gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP397.width-450.png",
    keywords: [],
    name: "Scar for a Scar",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "scar-for-a-scar-blue",
    functionalText: `When you play Scar for a Scar, if you have less {h} than an opposing hero, it gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP398.width-450.png",
    keywords: [],
    name: "Scar for a Scar",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "scour-the-battlescape-red",
    functionalText: `You may put a card from your hand on the bottom of your deck. If you do, draw a card.  If Scour the Battlescape is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_194.width-450.png",
    keywords: [],
    name: "Scour the Battlescape",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "scour-the-battlescape-yellow",
    functionalText: `You may put a card from your hand on the bottom of your deck. If you do, draw a card.  If Scour the Battlescape is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_195.width-450.png",
    keywords: [],
    name: "Scour the Battlescape",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "scour-the-battlescape-blue",
    functionalText: `You may put a card from your hand on the bottom of your deck. If you do, draw a card.  If Scour the Battlescape is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/KSU26.width-450.png",
    keywords: [],
    name: "Scour the Battlescape",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.KatsuHeroDeck,Release.RhinarHeroDeck,Release.DorintheaHeroDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "regurgitating-slog-red",
    functionalText: `As an additional cost to play Regurgitating Slog, you may banish a card named Sloggism from your graveyard. If you do, Regurgitating Slog gains **dominate.** *(The defending hero can’t defend Regurgitating Slog with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_197.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Regurgitating Slog",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "regurgitating-slog-yellow",
    functionalText: `As an additional cost to play Regurgitating Slog, you may banish a card named Sloggism from your graveyard. If you do, Regurgitating Slog gains **dominate.** *(The defending hero can’t defend Regurgitating Slog with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_198.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Regurgitating Slog",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "regurgitating-slog-blue",
    functionalText: `As an additional cost to play Regurgitating Slog, you may banish a card named Sloggism from your graveyard. If you do, Regurgitating Slog gains **dominate.** *(The defending hero can’t defend Regurgitating Slog with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_199.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Regurgitating Slog",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "wounded-bull-red",
    functionalText: `When you play Wounded Bull, if you have less {h} than an opposing hero, it gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_200.width-450.png",
    keywords: [],
    name: "Wounded Bull",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "wounded-bull-yellow",
    functionalText: `When you play Wounded Bull, if you have less {h} than an opposing hero, it gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/RNR21.width-450.png",
    keywords: [],
    name: "Wounded Bull",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.RhinarHeroDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "wounded-bull-blue",
    functionalText: `When you play Wounded Bull, if you have less {h} than an opposing hero, it gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO26.width-450.png",
    keywords: [],
    name: "Wounded Bull",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "wounding-blow-red",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/TEA15.width-450.png",
    keywords: [],
    name: "Wounding Blow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.DorintheaHeroDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "wounding-blow-yellow",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_204.width-450.png",
    keywords: [],
    name: "Wounding Blow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "wounding-blow-blue",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/KSU27.width-450.png",
    keywords: [],
    name: "Wounding Blow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.KatsuHeroDeck,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "nimblism-red",
    functionalText: `The next attack action card with cost 1 or less you play this turn gains +3{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP417.width-450.png",
    keywords: [],
    name: "Nimblism",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "nimblism-yellow",
    functionalText: `The next attack action card with cost 1 or less you play this turn gains +2{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP418.width-450.png",
    keywords: [],
    name: "Nimblism",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "nimblism-blue",
    functionalText: `The next attack action card with cost 1 or less you play this turn gains +1{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP419.width-450.png",
    keywords: [],
    name: "Nimblism",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "sloggism-red",
    functionalText: `The next attack action card with cost 2 or greater you play this turn gains +6{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP420.width-450.png",
    keywords: [],
    name: "Sloggism",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "sloggism-yellow",
    functionalText: `The next attack action card with cost 2 or greater you play this turn gains +5{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP421.width-450.png",
    keywords: [],
    name: "Sloggism",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "sloggism-blue",
    functionalText: `The next attack action card with cost 2 or greater you play this turn gains +4{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO29.width-450.png",
    keywords: [],
    name: "Sloggism",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Mechanologist,
    identifier: "high-octane-red",
    functionalText: `Whenever you **boost** a card this turn, gain 1 action point.  Draw a card.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP188.width-450.png",
    keywords: [],
    name: "High Octane",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Mechanologist,
    identifier: "teklo-core-blue",
    functionalText: `**Dash Specialization** *(You may only have Teklo Core in your deck if your hero is Dash.)*  Teklo Core enters the arena with 2 steam counters on it. When Teklo Core has no steam counters on it, destroy it.  At the beginning of your action phase, remove a steam counter from Teklo Core and gain {r}{r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP192.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Teklo Core",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    specialization: Hero.Dash,
    subType: ActionSubType.Item,
  },{
    class: Class.Mechanologist,
    identifier: "maximum-velocity-red",
    functionalText: `Play Maximum Velocity only if you have **boosted** 3 or more times this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC8.width-450.png",
    keywords: [],
    name: "Maximum Velocity",
    rarity: Rarity.SuperRare,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 10,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "spark-of-genius-yellow",
    functionalText: `**Dash Specialization** *(You may only have Spark of Genius in your deck if your hero is Dash.)*  Search your deck for a Mechanologist item card with cost X, put it into the arena, then shuffle your deck.  If you have **boosted** this turn, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP191.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Spark of Genius",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action",
    
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    specialCost: "XX",
    
    
    specialization: Hero.Dash,
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Mechanologist,
    identifier: "induction-chamber-red",
    functionalText: `**Action** - {r}: If there are no steam counters on Induction Chamber, put a steam counter on it. **Go again**  **Once per Turn Attack Reaction** - Remove a steam counter from Induction Chamber: Target Mechanologist pistol attack gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP189.width-450.png",
    keywords: [],
    name: "Induction Chamber",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 2,
    
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Mechanologist,
    identifier: "pedal-to-the-medal-red",
    functionalText: `If Pedal to the Metal hits, your next attack this turn gains **dominate**. *(The defending hero can't defend the attack with more than 1 card from their hand.)*  **Boost** *(As an additional cost to play Pedal to the Metal, you may banish the top card of your deck. If it's a Mechanologist card, Pedal to the Metal gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP196.width-450.png",
    keywords: [Keyword.Boost],
    name: "Pedal to the Medal",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "pedal-to-the-medal-yellow",
    functionalText: `If Pedal to the Metal hits, your next attack this turn gains **dominate**. *(The defending hero can't defend the attack with more than 1 card from their hand.)*  **Boost** *(As an additional cost to play Pedal to the Metal, you may banish the top card of your deck. If it's a Mechanologist card, Pedal to the Metal gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP197.width-450.png",
    keywords: [Keyword.Boost],
    name: "Pedal to the Medal",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "pedal-to-the-medal-blue",
    functionalText: `If Pedal to the Metal hits, your next attack this turn gains **dominate**. *(The defending hero can't defend the attack with more than 1 card from their hand.)*  **Boost** *(As an additional cost to play Pedal to the Metal, you may banish the top card of your deck. If it's a Mechanologist card, Pedal to the Metal gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP198.width-450.png",
    keywords: [Keyword.Boost],
    name: "Pedal to the Medal",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "pour-the-mold-red",
    functionalText: `Put a Mechanologist item with cost 2 or less from your hand into the arena.  If you have **boosted** this turn, put a steam counter on it.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC14.width-450.png",
    keywords: [],
    name: "Pour the Mold",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Mechanologist,
    identifier: "pour-the-mold-yellow",
    functionalText: `Put a Mechanologist item with cost 1 or less from your hand into the arena.  If you have **boosted** this turn, put a steam counter on it.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC15.width-450.png",
    keywords: [],
    name: "Pour the Mold",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Mechanologist,
    identifier: "pour-the-mold-blue",
    functionalText: `Put a Mechanologist item with cost 0 or less from your hand into the arena.  If you have **boosted** this turn, put a steam counter on it.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC16.width-450.png",
    keywords: [],
    name: "Pour the Mold",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Mechanologist,
    identifier: "aether-sink-yellow",
    functionalText: `Aether Sink enters the arena with a steam counter on it.  **Action** - {r}: If there are no steam counters on Aether Sink, put a steam counter on it. **Go again**  **Instant** - Remove a steam counter from Aether Sink: Aether Sink gains **Arcane Barrier 2** until end of turn. *(If your hero would be dealt arcane damage, you may pay {r}{r} instead. If you do, prevent 2 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP199.width-450.png",
    keywords: [],
    name: "Aether Sink",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 1,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Mechanologist,
    identifier: "cognition-nodes-blue",
    functionalText: `**Action** - {r}: If there are no steam counters on Cognition Nodes, put a steam counter on it. **Go again**  **Once per Turn Attack Reaction** - Remove a steam counter from Cognition Nodes: Target attack action card gains “If this hits, put it on the bottom of your deck.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP200.width-450.png",
    keywords: [],
    name: "Cognition Nodes",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 1,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Mechanologist,
    identifier: "convection-amplifier-red",
    functionalText: `Convection Amplifier enters the arena with 2 steam counters on it. When Convection Amplifier has no steam counters on it, destroy it.  **Action** - Remove a steam counter from Convection Amplifier: The next attack action card you play this turn gains **dominate**. **Go again** *(The defending hero can't defend the attack with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP201.width-450.png",
    keywords: [],
    name: "Convection Amplifier",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Mechanologist,
    identifier: "over-loop-red",
    functionalText: `If Over Loop hits, put it on the bottom of your deck.  **Boost** *(As an additional cost to play Over Loop, you may banish the top card of your deck. If it's a Mechanologist card, Over Loop gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS013-P.width-450.png",
    keywords: [Keyword.Boost],
    name: "Over Loop",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "over-loop-yellow",
    functionalText: `If Over Loop hits, put it on the bottom of your deck.  **Boost** *(As an additional cost to play Over Loop, you may banish the top card of your deck. If it's a Mechanologist card, Over Loop gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS033.width-450.png",
    keywords: [Keyword.Boost],
    name: "Over Loop",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "over-loop-blue",
    functionalText: `If Over Loop hits, put it on the bottom of your deck.  **Boost** *(As an additional cost to play Over Loop, you may banish the top card of your deck. If it's a Mechanologist card, Over Loop gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS034.width-450.png",
    keywords: [Keyword.Boost],
    name: "Over Loop",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "throttle-red",
    functionalText: `**Boost** *(As an additional cost to play Throttle, you may banish the top card of your deck. If it's a Mechanologist card, Throttle gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP208.width-450.png",
    keywords: [Keyword.Boost],
    name: "Throttle",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "throttle-yellow",
    functionalText: `**Boost** *(As an additional cost to play Throttle, you may banish the top card of your deck. If it's a Mechanologist card, Throttle gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP209.width-450.png",
    keywords: [Keyword.Boost],
    name: "Throttle",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "throttle-blue",
    functionalText: `**Boost** *(As an additional cost to play Throttle, you may banish the top card of your deck. If it's a Mechanologist card, Throttle gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP210.width-450.png",
    keywords: [Keyword.Boost],
    name: "Throttle",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "zero-to-sixty-red",
    functionalText: `**Boost** *(As an additional cost to play Zero to Sixty, you may banish the top card of your deck. If it's a Mechanologist card, Zero to Sixty gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP211.width-450.png",
    keywords: [Keyword.Boost],
    name: "Zero to Sixty",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "zero-to-sixty-yellow",
    functionalText: `**Boost** *(As an additional cost to play Zero to Sixty, you may banish the top card of your deck. If it's a Mechanologist card, Zero to Sixty gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP212.width-450.png",
    keywords: [Keyword.Boost],
    name: "Zero to Sixty",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "zero-to-sixty-blue",
    functionalText: `**Boost** *(As an additional cost to play Zero to Sixty, you may banish the top card of your deck. If it's a Mechanologist card, Zero to Sixty gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP213.width-450.png",
    keywords: [Keyword.Boost],
    name: "Zero to Sixty",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "zipper-hit-red",
    functionalText: `**Boost** *(As an additional cost to play Zipper Hit, you may banish the top card of your deck. If it's a Mechanologist card, Zipper Hit gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP214.width-450.png",
    keywords: [Keyword.Boost],
    name: "Zipper Hit",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "zipper-hit-yellow",
    functionalText: `**Boost** *(As an additional cost to play Zipper Hit, you may banish the top card of your deck. If it's a Mechanologist card, Zipper Hit gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP215.width-450.png",
    keywords: [Keyword.Boost],
    name: "Zipper Hit",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "zipper-hit-blue",
    functionalText: `**Boost** *(As an additional cost to play Zipper Hit, you may banish the top card of your deck. If it's a Mechanologist card, Zipper Hit gains **go again**.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP216.width-450.png",
    keywords: [Keyword.Boost],
    name: "Zipper Hit",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "locked-and-loaded-red",
    functionalText: `The next Mechanologist attack action card you play this turn gains +3{p}.  If you have **boosted** this turn, **opt 1**. *(Look at the top card of your deck. You may put it on the bottom.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC32.width-450.png",
    keywords: [Keyword.Opt],
    name: "Locked and Loaded",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Mechanologist,
    identifier: "locked-and-loaded-yellow",
    functionalText: `The next Mechanologist attack action card you play this turn gains +2{p}.  If you have **boosted** this turn, **opt 1**. *(Look at the top card of your deck. You may put it on the bottom.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC33.width-450.png",
    keywords: [Keyword.Opt],
    name: "Locked and Loaded",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Mechanologist,
    identifier: "locked-and-loaded-blue",
    functionalText: `The next Mechanologist attack action card you play this turn gains +1{p}.  If you have **boosted** this turn, **opt 1**. *(Look at the top card of your deck. You may put it on the bottom.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC34.width-450.png",
    keywords: [Keyword.Opt],
    name: "Locked and Loaded",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Mechanologist,
    identifier: "dissipation-shield-yellow",
    functionalText: `Dissipation Shield enters the arena with 4 steam counters on it.  At the beginning of your action phase, destroy Dissipation Shield unless you remove a steam counter from it.  **Instant** - Destroy Dissipation Shield: The next time your hero would be dealt damage this turn, prevent X damage, where X is the number of steam counters on Dissipation Shield.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP217.width-450.png",
    keywords: [],
    name: "Dissipation Shield",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 2,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Mechanologist,
    identifier: "hyper-driver-red",
    functionalText: `Hyper Driver enters the arena with 3 steam counters on it. When Hyper Driver has no steam counters on it, destroy it.  **Once per Turn Effect** - When you **boost** a card, remove a steam counter from Hyper Driver and gain {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP218.width-450.png",
    keywords: [],
    name: "Hyper Driver",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 1,
    
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Mechanologist,
    identifier: "optekal-monocle-blue",
    functionalText: `Optekal Monocle enters the arena with 5 steam counters on it. When Optekal Monocle has no steam counters on it, destroy it.  **Action** - Remove a steam counter from Optekal Monocle: **Opt 1**. **Go again** *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP219.width-450.png",
    keywords: [],
    name: "Optekal Monocle",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Ranger,
    identifier: "red-in-the-ledger-red",
    functionalText: `**Azalea Specialization** *(You may only have Red in the Ledger in your deck if your hero is Azalea.)*  *(Arrows can only be played from arsenal and only if you control a bow.)*  If Red in the Ledger hits a hero, they can't play or activate more than 1 action during their next turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP229.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Red in the Ledger",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    specialization: Hero.Azalea,
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "three-of-a-kind-red",
    functionalText: `Draw 3 cards. Until end of turn, you may only play cards from arsenal.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP232.width-450.png",
    keywords: [],
    name: "Three of a Kind",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "endless-arrow-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Endless Arrow hits, put it into your hand.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP228.width-450.png",
    keywords: [],
    name: "Endless Arrow",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "nock-the-deathwhistle-blue",
    functionalText: `**Azalea Specialization** *(You may only have Nock the Deathwhistle in your deck if your hero is Azalea.)*  Search your deck for an arrow card, reveal it, then shuffle your deck and put it on top of your deck.  **Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP231.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Reload],
    name: "Nock the Deathwhistle",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    specialization: Hero.Azalea,
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "rapid-fire-yellow",
    functionalText: `Until end of turn, arrows you control gain **go again.**  **Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC47.width-450.png",
    keywords: [Keyword.Reload],
    name: "Rapid Fire",
    rarity: Rarity.SuperRare,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "silver-the-tip-red",
    functionalText: `If you have no cards in your arsenal, look at the top 4 cards of your deck. You may put an arrow card from among them face up into your arsenal, then put the rest on the bottom of your deck in any order.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC51.width-450.png",
    keywords: [],
    name: "Silver the Tip",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "silver-the-tip-yellow",
    functionalText: `If you have no cards in your arsenal, look at the top 3 cards of your deck. You may put an arrow card from among them face up into your arsenal, then put the rest on the bottom of your deck in any order.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC52.width-450.png",
    keywords: [],
    name: "Silver the Tip",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "silver-the-tip-blue",
    functionalText: `If you have no cards in your arsenal, look at the top 2 cards of your deck. You may put an arrow card from among them face up into your arsenal, then put the rest on the bottom of your deck in any order.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC53.width-450.png",
    keywords: [],
    name: "Silver the Tip",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "take-aim-red",
    functionalText: `The next Ranger attack action card you play this turn, gains +3{p}.  **Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI028.width-450.png",
    keywords: [Keyword.Reload],
    name: "Take Aim",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "take-aim-yellow",
    functionalText: `The next Ranger attack action card you play this turn, gains +2{p}.  **Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP238.width-450.png",
    keywords: [Keyword.Reload],
    name: "Take Aim",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "take-aim-blue",
    functionalText: `The next Ranger attack action card you play this turn, gains +1{p}.  **Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP239.width-450.png",
    keywords: [Keyword.Reload],
    name: "Take Aim",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "head-shot-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Head Shot is put into your arsenal face up, it gains +2{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP240.width-450.png",
    keywords: [],
    name: "Head Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "head-shot-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Head Shot is put into your arsenal face up, it gains +2{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP241.width-450.png",
    keywords: [],
    name: "Head Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "head-shot-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Head Shot is put into your arsenal face up, it gains +2{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP242.width-450.png",
    keywords: [],
    name: "Head Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "hamstring-shot-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Hamstring Shot hits a hero, their first attack during their next turn costs an additional {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC60.width-450.png",
    keywords: [],
    name: "Hamstring Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "hamstring-shot-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Hamstring Shot hits a hero, their first attack during their next turn costs an additional {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC61.width-450.png",
    keywords: [],
    name: "Hamstring Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "hamstring-shot-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Hamstring Shot hits a hero, their first attack during their next turn costs an additional {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC62.width-450.png",
    keywords: [],
    name: "Hamstring Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "ridge-rider-shot-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Ridge Rider Shot is put into your arsenal face up, **opt 1**. *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP243.width-450.png",
    keywords: [Keyword.Opt],
    name: "Ridge Rider Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "ridge-rider-shot-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Ridge Rider Shot is put into your arsenal face up, **opt 1**. *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP244.width-450.png",
    keywords: [Keyword.Opt],
    name: "Ridge Rider Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "ridge-rider-shot-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Ridge Rider Shot is put into your arsenal face up, **opt 1**. *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP245.width-450.png",
    keywords: [Keyword.Opt],
    name: "Ridge Rider Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "salvage-shot-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Salvage Shot hits, put it on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP246.width-450.png",
    keywords: [],
    name: "Salvage Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "salvage-shot-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Salvage Shot hits, put it on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP247.width-450.png",
    keywords: [],
    name: "Salvage Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "salvage-shot-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Salvage Shot hits, put it on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP248.width-450.png",
    keywords: [],
    name: "Salvage Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "searing-shot-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Searing Shot hits a hero, they lose 1{h}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP249.width-450.png",
    keywords: [],
    name: "Searing Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "searing-shot-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Searing Shot hits a hero, they lose 1{h}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP250.width-450.png",
    keywords: [],
    name: "Searing Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "searing-shot-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Searing Shot hits a hero, they lose 1{h}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP251.width-450.png",
    keywords: [],
    name: "Searing Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "sic-‘em-shot-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS014-P.width-450.png",
    keywords: [],
    name: "Sic ‘Em Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "sic-‘em-shot-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS036.width-450.png",
    keywords: [],
    name: "Sic ‘Em Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "sic-‘em-shot-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS037.width-450.png",
    keywords: [],
    name: "Sic ‘Em Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "arknight-ascendancy-red",
    functionalText: `**Viserai Specialization** *(You may only have Arknight Ascendency in your deck if your hero is Viserai.)*  Arknight Ascendency costs {r} less to play for each Runechant you control.  If Arknight Ascendency hits, create X Runechant tokens, where X is the damage dealt by Arknight Ascendency.  **Dominate**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP265.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Dominate],
    name: "Arknight Ascendancy",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 6,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    specialization: Hero.Viserai,
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "mordred-tide-red",
    functionalText: `Until end of turn, if you would create a Runechant token, instead create that many plus 1.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP268.width-450.png",
    keywords: [],
    name: "Mordred Tide",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "ninth-blade-of-the-blood-oath-yellow",
    functionalText: `Ninth Blade of the Blood Oath costs {r} less to play for each Runechant you control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC82.width-450.png",
    keywords: [],
    name: "Ninth Blade of the Blood Oath",
    rarity: Rarity.SuperRare,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 9,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 9,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "become-the-arknight-blue",
    functionalText: `**Viserai Specialization** *(You may only have Become the Arknight in your deck if your hero is Viserai.)*  You may discard an action card. If you discard an attack action card this way, search your deck for a Runeblade ‘non-attack’ action card, reveal it, and put it into your hand. If you discard a ‘non-attack’ action card this way, search your deck for a Runeblade attack action card, reveal it, and put it into your hand. Shuffle your deck.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP267.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Become the Arknight",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    specialization: Hero.Viserai,
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "tome-of-the-arknight-blue",
    functionalText: `Reveal the top 2 cards of your deck. If you reveal an attack action card and a 'non-attack' action card this way, put them into your hand.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC84.width-450.png",
    keywords: [],
    name: "Tome of the Arknight",
    rarity: Rarity.SuperRare,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "spellblade-assault-red",
    functionalText: `When you attack with Spellblade Assault, create 2 Runechant tokens. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP270.width-450.png",
    keywords: [],
    name: "Spellblade Assault",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "spellblade-assault-yellow",
    functionalText: `When you attack with Spellblade Assault, create 2 Runechant tokens. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP271.width-450.png",
    keywords: [],
    name: "Spellblade Assault",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "spellblade-assault-blue",
    functionalText: `When you attack with Spellblade Assault, create 2 Runechant tokens. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP272.width-450.png",
    keywords: [],
    name: "Spellblade Assault",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "oath-of-the-arknight-red",
    functionalText: `Your next Runeblade attack this turn gains +3{p}.  Create a Runechant token. *(It's an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP279.width-450.png",
    keywords: [],
    name: "Oath of the Arknight",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "oath-of-the-arknight-yellow",
    functionalText: `Your next Runeblade attack this turn gains +2{p}.  Create a Runechant token. *(It's an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP280.width-450.png",
    keywords: [],
    name: "Oath of the Arknight",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "oath-of-the-arknight-blue",
    functionalText: `Your next Runeblade attack this turn gains +1{p}.  Create a Runechant token. *(It's an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP281.width-450.png",
    keywords: [],
    name: "Oath of the Arknight",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "amplify-the-arknight-red",
    functionalText: `Amplify the Arknight costs {r} less to play for each Runechant you control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP282.width-450.png",
    keywords: [],
    name: "Amplify the Arknight",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "amplify-the-arknight-yellow",
    functionalText: `Amplify the Arknight costs {r} less to play for each Runechant you control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP283.width-450.png",
    keywords: [],
    name: "Amplify the Arknight",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "amplify-the-arknight-blue",
    functionalText: `Amplify the Arknight costs {r} less to play for each Runechant you control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP284.width-450.png",
    keywords: [],
    name: "Amplify the Arknight",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "drawn-to-the-dark-dimension-red",
    functionalText: `Drawn to the Dark Dimension costs {r} less to play for each Runechant you control.  Draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC97.width-450.png",
    keywords: [],
    name: "Drawn to the Dark Dimension",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "drawn-to-the-dark-dimension-yellow",
    functionalText: `Drawn to the Dark Dimension costs {r} less to play for each Runechant you control.  Draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC98.width-450.png",
    keywords: [],
    name: "Drawn to the Dark Dimension",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "drawn-to-the-dark-dimension-blue",
    functionalText: `Drawn to the Dark Dimension costs {r} less to play for each Runechant you control.  Draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC99.width-450.png",
    keywords: [],
    name: "Drawn to the Dark Dimension",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "rune-flash-red",
    functionalText: `Rune Flash costs {r} less to play for each Runechant you control.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP288.width-450.png",
    keywords: [],
    name: "Rune Flash",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "rune-flash-yellow",
    functionalText: `Rune Flash costs {r} less to play for each Runechant you control.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP289.width-450.png",
    keywords: [],
    name: "Rune Flash",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "rune-flash-blue",
    functionalText: `Rune Flash costs {r} less to play for each Runechant you control.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP290.width-450.png",
    keywords: [],
    name: "Rune Flash",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "spellblade-strike-red",
    functionalText: `Create a Runechant token. *(It's an aura with “When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.”)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC103.width-450.png",
    keywords: [],
    name: "Spellblade Strike",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "spellblade-strike-yellow",
    functionalText: `Create a Runechant token. *(It's an aura with “When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.”)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC104.width-450.png",
    keywords: [],
    name: "Spellblade Strike",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "spellblade-strike-blue",
    functionalText: `Create a Runechant token. *(It's an aura with “When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.”)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC105.width-450.png",
    keywords: [],
    name: "Spellblade Strike",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "bloodspill-invocation-red",
    functionalText: `*(Aura's stay in the arena until they are destroyed.)*  **Go again**  When an attack action card you control hits, destroy Bloodspill Invocation then create 3 Runechant tokens. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*  When your hero is dealt damage, destroy Bloodspill Invocation.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP291.width-450.png",
    keywords: [],
    name: "Bloodspill Invocation",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Aura",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Runeblade,
    identifier: "bloodspill-invocation-yellow",
    functionalText: `*(Aura's stay in the arena until they are destroyed.)*  **Go again**  When an attack action card you control hits, destroy Bloodspill Invocation then create 3 Runechant tokens. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*  When your hero is dealt damage, destroy Bloodspill Invocation.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP292.width-450.png",
    keywords: [],
    name: "Bloodspill Invocation",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Aura",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Runeblade,
    identifier: "bloodspill-invocation-blue",
    functionalText: `*(Aura's stay in the arena until they are destroyed.)*  **Go again**  When an attack action card you control hits, destroy Bloodspill Invocation then create 3 Runechant tokens. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*  When your hero is dealt damage, destroy Bloodspill Invocation.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP293.width-450.png",
    keywords: [],
    name: "Bloodspill Invocation",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action – Aura",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Runeblade,
    identifier: "read-the-runes-red",
    functionalText: `Create 3 Runechant tokens. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP294.width-450.png",
    keywords: [],
    name: "Read the Runes",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "read-the-runes-yellow",
    functionalText: `Create 2 Runechant tokens. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP295.width-450.png",
    keywords: [],
    name: "Read the Runes",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "read-the-runes-blue",
    functionalText: `Create a Runechant token. *(It's an aura with “When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.”)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP296.width-450.png",
    keywords: [],
    name: "Read the Runes",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "blazing-aether-red",
    functionalText: `**Kano Specialization** *(You may only have Blazing Aether in your deck if your hero is Kano.)*  Deal X arcane damage to target hero, where X is the amount of arcane damage you have dealt to that hero this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP308.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Blazing Aether",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    specialization: Hero.Kano,
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "sonic-boom-yellow",
    functionalText: `Deal 3 arcane damage to target opposing hero.  If Sonic Boom deals damage, look at the top card of your deck. If it's a Wizard 'non-attack' action card, you may banish it. If you do, you may play it this turn as though it were an instant and it costs X resource points less to play, where X is the damage dealt by Sonic Boom.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP312.width-450.png",
    keywords: [],
    name: "Sonic Boom",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "forked-lightning-red",
    functionalText: `Deal 2 arcane damage to target hero.  Deal 2 arcane damage to target hero.  *(Effects that modify damage modify both damage effects of Forked Lightning. Forked Lightning is considered a single source of damage.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP310.width-450.png",
    keywords: [],
    name: "Forked Lightning",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "lesson-in-lava-yellow",
    functionalText: `**Kano Specialization** *(You may only have Lesson in Lava in your deck if your hero is Kano.)*  Deal 3 arcane damage to target opposing hero.  If Lesson in Lava deals damage, you may search your deck for a Wizard card with {r} cost equal to or less than the damage dealt by Lesson in Lava, reveal it, then shuffle your deck and put it on top of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP311.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Lesson in Lava",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    specialization: Hero.Kano,
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "tome-of-aetherwind-red",
    functionalText: `Choose 2. You may choose the same mode more than once;  - The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus 1. - Draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP313.width-450.png",
    keywords: [],
    name: "Tome of Aetherwind",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "aether-spindle-red",
    functionalText: `Deal 4 arcane damage to target opposing hero.  **Opt X**, where X is the damage dealt by Aether Spindle. *(Look at the top X cards of your deck. You may put them on the top and/or bottom in any order.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP314.width-450.png",
    keywords: [Keyword.Opt],
    name: "Aether Spindle",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "aether-spindle-yellow",
    functionalText: `Deal 3 arcane damage to target opposing hero.  **Opt X**, where X is the damage dealt by Aether Spindle. *(Look at the top X cards of your deck. You may put them on the top and/or bottom in any order.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP315.width-450.png",
    keywords: [Keyword.Opt],
    name: "Aether Spindle",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "aether-spindle-blue",
    functionalText: `Deal 2 arcane damage to target opposing hero.  **Opt X**, where X is the damage dealt by Aether Spindle. *(Look at the top X cards of your deck. You may put them on the top and/or bottom in any order.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP316.width-450.png",
    keywords: [Keyword.Opt],
    name: "Aether Spindle",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "stir-the-aetherwinds-red",
    functionalText: `You may play your next Wizard 'non-attack' action card this turn as though it were an instant and if it has an effect that deals arcane damage, instead that effect deals that much arcane damage plus 3.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP320.width-450.png",
    keywords: [],
    name: "Stir the Aetherwinds",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "stir-the-aetherwinds-yellow",
    functionalText: `You may play your next Wizard 'non-attack' action card this turn as though it were an instant and if it has an effect that deals arcane damage, instead that effect deals that much arcane damage plus 2.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP321.width-450.png",
    keywords: [],
    name: "Stir the Aetherwinds",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "stir-the-aetherwinds-blue",
    functionalText: `You may play your next Wizard 'non-attack' action card this turn as though it were an instant and if it has an effect that deals arcane damage, instead that effect deals that much arcane damage plus 1.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP322.width-450.png",
    keywords: [],
    name: "Stir the Aetherwinds",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "aether-flare-red",
    functionalText: `Deal 3 arcane damage to target opposing hero.  The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus X, where X is the damage dealt by Aether Flare.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP323.width-450.png",
    keywords: [],
    name: "Aether Flare",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "aether-flare-yellow",
    functionalText: `Deal 2 arcane damage to target opposing hero.  The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus X, where X is the damage dealt by Aether Flare.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP324.width-450.png",
    keywords: [],
    name: "Aether Flare",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "aether-flare-blue",
    functionalText: `Deal 1 arcane damage to target opposing hero.  The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus X, where X is the damage dealt by Aether Flare.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP325.width-450.png",
    keywords: [],
    name: "Aether Flare",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "index-red",
    functionalText: `Look at the top 5 cards of your deck. Put 1 card from among them on top of your deck, and the rest on the bottom of your deck in any order.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC135.width-450.png",
    keywords: [],
    name: "Index",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "index-yellow",
    functionalText: `Look at the top 4 cards of your deck. Put 1 card from among them on top of your deck, and the rest on the bottom of your deck in any order.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC136.width-450.png",
    keywords: [],
    name: "Index",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "index-blue",
    functionalText: `Look at the top 3 cards of your deck. Put 1 card from among them on top of your deck, and the rest on the bottom of your deck in any order.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC137.width-450.png",
    keywords: [],
    name: "Index",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "reverberate-red",
    functionalText: `Deal 3 arcane damage to target opposing hero.  If Reverberate deals damage, you may banish a Wizard 'non-attack' action card from your hand with {r} cost less than or equal to the damage dealt by Reverberate. If you do, you may play it this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP326.width-450.png",
    keywords: [],
    name: "Reverberate",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "reverberate-yellow",
    functionalText: `Deal 2 arcane damage to target opposing hero.  If Reverberate deals damage, you may banish a Wizard 'non-attack' action card from your hand with {r} cost less than or equal to the damage dealt by Reverberate. If you do, you may play it this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP327.width-450.png",
    keywords: [],
    name: "Reverberate",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "reverberate-blue",
    functionalText: `Deal 1 arcane damage to target opposing hero.  If Reverberate deals damage, you may banish a Wizard 'non-attack' action card from your hand with {r} cost less than or equal to the damage dealt by Reverberate. If you do, you may play it this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP328.width-450.png",
    keywords: [],
    name: "Reverberate",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "scalding-rain-red",
    functionalText: `Deal 4 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP329.width-450.png",
    keywords: [],
    name: "Scalding Rain",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "scalding-rain-yellow",
    functionalText: `Deal 3 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP330.width-450.png",
    keywords: [],
    name: "Scalding Rain",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "scalding-rain-blue",
    functionalText: `Deal 2 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP331.width-450.png",
    keywords: [],
    name: "Scalding Rain",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "zap-red",
    functionalText: `Deal 3 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP338.width-450.png",
    keywords: [],
    name: "Zap",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "zap-yellow",
    functionalText: `Deal 2 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP339.width-450.png",
    keywords: [],
    name: "Zap",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "zap-blue",
    functionalText: `Deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP340.width-450.png",
    keywords: [],
    name: "Zap",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "voltic-bolt-red",
    functionalText: `Deal 5 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS016-P.width-450.png",
    keywords: [],
    name: "Voltic Bolt",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "voltic-bolt-yellow",
    functionalText: `Deal 4 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS042.width-450.png",
    keywords: [],
    name: "Voltic Bolt",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "voltic-bolt-blue",
    functionalText: `Deal 3 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS043.width-450.png",
    keywords: [],
    name: "Voltic Bolt",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "command-and-conquer-red",
    functionalText: `Defense reaction cards can’t be played to Command and Conquer’s chain link.  If Command and Conquer hits a hero, destroy all cards in their arsenal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP360.width-450.png",
    keywords: [],
    name: "Command and Conquer",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "pursuit-of-knowledge-blue",
    functionalText: `If Pursuit of Knowledge hits, your hero gains +1{i} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC161.width-450.png",
    keywords: [],
    name: "Pursuit of Knowledge",
    rarity: Rarity.SuperRare,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "chains-of-eminence-red",
    functionalText: `**Go again**  When Chains of Eminence enters the arena, name a card. The named card can't be pitched, played or used to defend while Chains of Eminence is in the arena.  At the beginning of your action phase, destroy Chains of Eminence`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC162.width-450.png",
    keywords: [],
    name: "Chains of Eminence",
    rarity: Rarity.SuperRare,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Aura",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Generic,
    identifier: "rusted-relic-blue",
    functionalText: `**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC163.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Rusted Relic",
    rarity: Rarity.SuperRare,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "life-for-a-life-red",
    functionalText: `If Life for a Life hits, gain 1{h}.  When you play Life for a Life, if you have less {h} than an opposing hero, it gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP368.width-450.png",
    keywords: [],
    name: "Life for a Life",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "life-for-a-life-yellow",
    functionalText: `If Life for a Life hits, gain 1{h}.  When you play Life for a Life, if you have less {h} than an opposing hero, it gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP369.width-450.png",
    keywords: [],
    name: "Life for a Life",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "life-for-a-life-blue",
    functionalText: `If Life for a Life hits, gain 1{h}.  When you play Life for a Life, if you have less {h} than an opposing hero, it gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP370.width-450.png",
    keywords: [],
    name: "Life for a Life",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "enchanting-melody-red",
    functionalText: `**Go again**  If your hero would be dealt damage, instead destroy Enchanting Melody and prevent 4 damage that source would deal.  At the beginning of your end phase, destroy Enchanting Melody unless you have played a 'non-attack' action card this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP375.width-450.png",
    keywords: [],
    name: "Enchanting Melody",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Aura",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Generic,
    identifier: "enchanting-melody-yellow",
    functionalText: `**Go again**  If your hero would be dealt damage, instead destroy Enchanting Melody and prevent 3 damage that source would deal.  At the beginning of your end phase, destroy Enchanting Melody unless you have played a 'non-attack' action card this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP376.width-450.png",
    keywords: [],
    name: "Enchanting Melody",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Aura",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Generic,
    identifier: "enchanting-melody-blue",
    functionalText: `**Go again**  If your hero would be dealt damage, instead destroy Enchanting Melody and prevent 2 damage that source would deal.  At the beginning of your end phase, destroy Enchanting Melody unless you have played a 'non-attack' action card this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP377.width-450.png",
    keywords: [],
    name: "Enchanting Melody",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Aura",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Generic,
    identifier: "plunder-run-red",
    functionalText: `The next time an attack action card you control hits this turn, draw a card.  If Plunder Run is played from arsenal, the next attack action card you play this turn gains +3{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP378.width-450.png",
    keywords: [],
    name: "Plunder Run",
    rarity: Rarity.Rare,
    restrictedFormats: [Format.Commoner],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "plunder-run-yellow",
    functionalText: `The next time an attack action card you control hits this turn, draw a card.  If Plunder Run is played from arsenal, the next attack action card you play this turn gains +2{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP379.width-450.png",
    keywords: [],
    name: "Plunder Run",
    rarity: Rarity.Rare,
    restrictedFormats: [Format.Commoner],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "plunder-run-blue",
    functionalText: `The next time an attack action card you control hits this turn, draw a card.  If Plunder Run is played from arsenal, the next attack action card you play this turn gains +1{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP380.width-450.png",
    keywords: [],
    name: "Plunder Run",
    rarity: Rarity.Rare,
    restrictedFormats: [Format.Commoner],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "back-alley-breakline-red",
    functionalText: `If an activated ability or action card effect puts Back Alley Breakline face up into a zone from your deck, gain 1 action point.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC176.width-450.png",
    keywords: [],
    name: "Back Alley Breakline",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "back-alley-breakline-yellow",
    functionalText: `If an activated ability or action card effect puts Back Alley Breakline face up into a zone from your deck, gain 1 action point.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC177.width-450.png",
    keywords: [],
    name: "Back Alley Breakline",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "back-alley-breakline-blue",
    functionalText: `If an activated ability or action card effect puts Back Alley Breakline face up into a zone from your deck, gain 1 action point.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC178.width-450.png",
    keywords: [],
    name: "Back Alley Breakline",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "cadaverous-contraband-red",
    functionalText: `If Cadaverous Contraband hits, you may put a ‘non-attack’ action card from your graveyard on top of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC179.width-450.png",
    keywords: [],
    name: "Cadaverous Contraband",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "cadaverous-contraband-yellow",
    functionalText: `If Cadaverous Contraband hits, you may put a ‘non-attack’ action card from your graveyard on top of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC180.width-450.png",
    keywords: [],
    name: "Cadaverous Contraband",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "cadaverous-contraband-blue",
    functionalText: `If Cadaverous Contraband hits, you may put a ‘non-attack’ action card from your graveyard on top of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC181.width-450.png",
    keywords: [],
    name: "Cadaverous Contraband",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "fervent-forerunner-red",
    functionalText: `If Fervent Forerunner hits, **opt 2.** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*  If Fervent Forerunner is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC182.width-450.png",
    keywords: [Keyword.Opt],
    name: "Fervent Forerunner",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "fervent-forerunner-yellow",
    functionalText: `If Fervent Forerunner hits, **opt 2.** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*  If Fervent Forerunner is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC183.width-450.png",
    keywords: [Keyword.Opt],
    name: "Fervent Forerunner",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "fervent-forerunner-blue",
    functionalText: `If Fervent Forerunner hits, **opt 2.** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*  If Fervent Forerunner is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC184.width-450.png",
    keywords: [Keyword.Opt],
    name: "Fervent Forerunner",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "moon-wish-red",
    functionalText: `You may put a card from your hand on top of your deck rather than pay Moon Wish's {r} cost.  If Moon Wish hits, search your deck for a card named Sun Kiss, reveal it, put it into your hand, then shuffle your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC185.width-450.png",
    keywords: [],
    name: "Moon Wish",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "moon-wish-yellow",
    functionalText: `You may put a card from your hand on top of your deck rather than pay Moon Wish's {r} cost.  If Moon Wish hits, search your deck for a card named Sun Kiss, reveal it, put it into your hand, then shuffle your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC186.width-450.png",
    keywords: [],
    name: "Moon Wish",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "moon-wish-blue",
    functionalText: `You may put a card from your hand on top of your deck rather than pay Moon Wish's {r} cost.  If Moon Wish hits, search your deck for a card named Sun Kiss, reveal it, put it into your hand, then shuffle your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC187.width-450.png",
    keywords: [],
    name: "Moon Wish",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "push-the-point-red",
    functionalText: `If the last attack on this combat chain hit, Push the Point gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC188.width-450.png",
    keywords: [],
    name: "Push the Point",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "push-the-point-yellow",
    functionalText: `If the last attack on this combat chain hit, Push the Point gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC189.width-450.png",
    keywords: [],
    name: "Push the Point",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "push-the-point-blue",
    functionalText: `If the last attack on this combat chain hit, Push the Point gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC190.width-450.png",
    keywords: [],
    name: "Push the Point",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "ravenous-rabble-red",
    functionalText: `When you attack with Ravenous Rabble, reveal the top card of your deck. Ravenous Rabble gets -X{p}, where X is the pitch value of the card revealed this way. *(The pitch value is located in the top left corner of the card.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP393.width-450.png",
    keywords: [],
    name: "Ravenous Rabble",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "ravenous-rabble-yellow",
    functionalText: `When you attack with Ravenous Rabble, reveal the top card of your deck. Ravenous Rabble gets -X{p}, where X is the pitch value of the card revealed this way. *(The pitch value is located in the top left corner of the card.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP394.width-450.png",
    keywords: [],
    name: "Ravenous Rabble",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "ravenous-rabble-blue",
    functionalText: `When you attack with Ravenous Rabble, reveal the top card of your deck. Ravenous Rabble gets -X{p}, where X is the pitch value of the card revealed this way. *(The pitch value is located in the top left corner of the card.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP395.width-450.png",
    keywords: [],
    name: "Ravenous Rabble",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "rifting-red",
    functionalText: `If Rifting hits, you may play your next 'non-attack' action card this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC194.width-450.png",
    keywords: [],
    name: "Rifting",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "rifting-yellow",
    functionalText: `If Rifting hits, you may play your next 'non-attack' action card this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC195.width-450.png",
    keywords: [],
    name: "Rifting",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "rifting-blue",
    functionalText: `If Rifting hits, you may play your next 'non-attack' action card this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC196.width-450.png",
    keywords: [],
    name: "Rifting",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "vigor-rush-red",
    functionalText: `If you have played a 'non-attack' action card this turn, Vigor Rush gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC197.width-450.png",
    keywords: [],
    name: "Vigor Rush",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "vigor-rush-yellow",
    functionalText: `If you have played a 'non-attack' action card this turn, Vigor Rush gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC198.width-450.png",
    keywords: [],
    name: "Vigor Rush",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "vigor-rush-blue",
    functionalText: `If you have played a 'non-attack' action card this turn, Vigor Rush gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC199.width-450.png",
    keywords: [],
    name: "Vigor Rush",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "come-to-fight-red",
    functionalText: `The next attack action card you play this turn gains +3{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP414.width-450.png",
    keywords: [],
    name: "Come to Fight",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "come-to-fight-yellow",
    functionalText: `The next attack action card you play this turn gains +2{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP415.width-450.png",
    keywords: [],
    name: "Come to Fight",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "come-to-fight-blue",
    functionalText: `The next attack action card you play this turn gains +1{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP416.width-450.png",
    keywords: [],
    name: "Come to Fight",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "force-sight-red",
    functionalText: `The next attack action card you play this turn gains +3{p}.  If Force Sight is played from arsenal, **opt 2.** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC206.width-450.png",
    keywords: [Keyword.Opt],
    name: "Force Sight",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "force-sight-yellow",
    functionalText: `The next attack action card you play this turn gains +2{p}.  If Force Sight is played from arsenal, **opt 2.** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC207.width-450.png",
    keywords: [Keyword.Opt],
    name: "Force Sight",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "force-sight-blue",
    functionalText: `The next attack action card you play this turn gains +1{p}.  If Force Sight is played from arsenal, **opt 2.** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC208.width-450.png",
    keywords: [Keyword.Opt],
    name: "Force Sight",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "lead-the-charge-red",
    functionalText: `The next time you play an action card with cost 0 or greater this turn, gain 1 action point.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC209.width-450.png",
    keywords: [],
    name: "Lead the Charge",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "lead-the-charge-yellow",
    functionalText: `The next time you play an action card with cost 1 or greater this turn, gain 1 action point.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC210.width-450.png",
    keywords: [],
    name: "Lead the Charge",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "lead-the-charge-blue",
    functionalText: `The next time you play an action card with cost 2 or greater this turn, gain 1 action point.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC211.width-450.png",
    keywords: [],
    name: "Lead the Charge",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "sun-kiss-red",
    functionalText: `Gain 3{h}.  If you have played a card named Moon Wish this turn, draw a card and Sun Kiss gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC212.width-450.png",
    keywords: [],
    name: "Sun Kiss",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "sun-kiss-yellow",
    functionalText: `Gain 2{h}.  If you have played a card named Moon Wish this turn, draw a card and Sun Kiss gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC213.width-450.png",
    keywords: [],
    name: "Sun Kiss",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "sun-kiss-blue",
    functionalText: `Gain 1{h}.  If you have played a card named Moon Wish this turn, draw a card and Sun Kiss gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC214.width-450.png",
    keywords: [],
    name: "Sun Kiss",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "whisper-of-the-oracle-red",
    functionalText: `**Opt 4** *(Look at the top 4 cards of your deck. You may put them on the top and/or bottom in any order.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP423.width-450.png",
    keywords: [Keyword.Opt],
    name: "Whisper of the Oracle",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "whisper-of-the-oracle-yellow",
    functionalText: `**Opt 3** *(Look at the top 3 cards of your deck. You may put them on the top and/or bottom in any order.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP424.width-450.png",
    keywords: [Keyword.Opt],
    name: "Whisper of the Oracle",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "whisper-of-the-oracle-blue",
    functionalText: `**Opt 2** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP425.width-450.png",
    keywords: [Keyword.Opt],
    name: "Whisper of the Oracle",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "beast-within-yellow",
    functionalText: `If Beast Within is put into a graveyard from anywhere other than the combat chain, banish the top card of your deck and lose 1{h}. If it has 6 or more {p}, put it into your hand, otherwise, repeat this process.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP011.width-450.png",
    keywords: [],
    name: "Beast Within",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "massacre-red",
    functionalText: `When you attack with Massacre, if you have discarded a card with 6 or more {p} this turn, Massacre gains +2{p} and **intimidate.**  If Massacre is discarded to pay the cost of a Brute attack action card, **intimidate.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP012.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Massacre",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "argh…-smash!-yellow",
    functionalText: `Roll a 6 sided die. Destroy up to X items, where X is half the number rolled, rounded down.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU9.width-450.png",
    keywords: [],
    name: "Argh… Smash!",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "barraging-big-horn-red",
    functionalText: `As an additional cost to play Barraging Big Horn, discard a random card.  While Barraging Big Horn is defended by less than 2 non-equipment cards, it has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU10.width-450.png",
    keywords: [],
    name: "Barraging Big Horn",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "barraging-big-horn-yellow",
    functionalText: `As an additional cost to play Barraging Big Horn, discard a random card.  While Barraging Big Horn is defended by less than 2 non-equipment cards, it has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU11.width-450.png",
    keywords: [],
    name: "Barraging Big Horn",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "barraging-big-horn-blue",
    functionalText: `As an additional cost to play Barraging Big Horn, discard a random card.  While Barraging Big Horn is defended by less than 2 non-equipment cards, it has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU12.width-450.png",
    keywords: [],
    name: "Barraging Big Horn",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "predatory-assault-red",
    functionalText: `If you have discarded a card with 6 or more {p} this turn, Predatory Assault gains **dominate.** *(The defending hero can’t defend Predatory Assault with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU13.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Predatory Assault",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "predatory-assault-yellow",
    functionalText: `If you have discarded a card with 6 or more {p} this turn, Predatory Assault gains **dominate.** *(The defending hero can’t defend Predatory Assault with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU14.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Predatory Assault",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "predatory-assault-blue",
    functionalText: `If you have discarded a card with 6 or more {p} this turn, Predatory Assault gains **dominate.** *(The defending hero can’t defend Predatory Assault with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU15.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Predatory Assault",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "riled-up-red",
    functionalText: `If you have discarded a card with 6 or more {p} this turn, Riled Up gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP028.width-450.png",
    keywords: [],
    name: "Riled Up",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "riled-up-yellow",
    functionalText: `If you have discarded a card with 6 or more {p} this turn, Riled Up gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP029.width-450.png",
    keywords: [],
    name: "Riled Up",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "riled-up-blue",
    functionalText: `If you have discarded a card with 6 or more {p} this turn, Riled Up gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP030.width-450.png",
    keywords: [],
    name: "Riled Up",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "swing-fist-think-later-red",
    functionalText: `As an additional cost to play Swing Fist, Think Later, discard a random card.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU19.width-450.png",
    keywords: [],
    name: "Swing Fist, Think Later",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "swing-fist-think-later-yellow",
    functionalText: `As an additional cost to play Swing Fist, Think Later, discard a random card.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU20.width-450.png",
    keywords: [],
    name: "Swing Fist, Think Later",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "swing-fist-think-later-blue",
    functionalText: `As an additional cost to play Swing Fist, Think Later, discard a random card.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU21.width-450.png",
    keywords: [],
    name: "Swing Fist, Think Later",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "mangle-red",
    functionalText: `**Crush** - If Mangle deals 4 or more damage to a hero, destroy target equipment they control with a -1{d} counter on it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP051.width-450.png",
    keywords: [Keyword.Crush],
    name: "Mangle",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 8,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "righteous-cleansing-yellow",
    functionalText: `**Crush** - If Righteous Cleansing deals 4 or more damage to a hero, look at the top 5 cards of their deck. Banish 1 or more cards with the same name from among them, then put the rest on top of their deck in any order.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP052.width-450.png",
    keywords: [Keyword.Crush],
    name: "Righteous Cleansing",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 7,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 10,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "stamp-authority-blue",
    functionalText: `When Stamp Authority enters the arena, if you have 2 or more cards in your pitch zone with cost 3 or greater, your hero gains +1{i} until end of turn.  While Stamp Authority is in the arena, attack action card effects do not trigger when they hit.  At the beginning of your action phase, destroy Stamp Authority.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU28.width-450.png",
    keywords: [],
    name: "Stamp Authority",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "towering-titan-red",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*  At the beginning of your action phase, destroy Towering Titan then the next Guardian attack action card you play this turn gains +10{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP064.width-450.png",
    keywords: [],
    name: "Towering Titan",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 9,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "towering-titan-yellow",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*  At the beginning of your action phase, destroy Towering Titan then the next Guardian attack action card you play this turn gains +9{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP065.width-450.png",
    keywords: [],
    name: "Towering Titan",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 9,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "towering-titan-blue",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*  At the beginning of your action phase, destroy Towering Titan then the next Guardian attack action card you play this turn gains +8{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP066.width-450.png",
    keywords: [],
    name: "Towering Titan",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 9,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "crush-the-weak-red",
    functionalText: `**Crush** - If Crush the Weak deals 4 or more damage to a hero, they can't play attack action cards with 3 or less base {p} during their next action phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU32.width-450.png",
    keywords: [Keyword.Crush],
    name: "Crush the Weak",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "crush-the-weak-yellow",
    functionalText: `**Crush** - If Crush the Weak deals 4 or more damage to a hero, they can't play attack action cards with 3 or less base {p} during their next action phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU33.width-450.png",
    keywords: [Keyword.Crush],
    name: "Crush the Weak",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "crush-the-weak-blue",
    functionalText: `**Crush** - If Crush the Weak deals 4 or more damage to a hero, they can't play attack action cards with 3 or less base {p} during their next action phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU34.width-450.png",
    keywords: [Keyword.Crush],
    name: "Crush the Weak",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "chokeslam-red",
    functionalText: `**Crush** - If Chokeslam deals 4 or more damage to a hero, attack action cards they control can't gain {p} during their next action phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP070.width-450.png",
    keywords: [Keyword.Crush],
    name: "Chokeslam",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 8,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "chokeslam-yellow",
    functionalText: `**Crush** - If Chokeslam deals 4 or more damage to a hero, attack action cards they control can't gain {p} during their next action phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP071.width-450.png",
    keywords: [Keyword.Crush],
    name: "Chokeslam",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "chokeslam-blue",
    functionalText: `**Crush** - If Chokeslam deals 4 or more damage to a hero, attack action cards they control can't gain {p} during their next action phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP072.width-450.png",
    keywords: [Keyword.Crush],
    name: "Chokeslam",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "emerging-dominance-red",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*  At the beginning of your action phase, destroy Emerging Dominance then the next Guardian attack action card you play this turn gains +3{p} and **dominate**. *(The defending hero can't defend the attack with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP079.width-450.png",
    keywords: [],
    name: "Emerging Dominance",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "emerging-dominance-yellow",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*  At the beginning of your action phase, destroy Emerging Dominance then the next Guardian attack action card you play this turn gains +2{p} and **dominate**. *(The defending hero can't defend the attack with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP080.width-450.png",
    keywords: [],
    name: "Emerging Dominance",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "emerging-dominance-blue",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*  At the beginning of your action phase, destroy Emerging Dominance then the next Guardian attack action card you play this turn gains +1{p} and **dominate**. *(The defending hero can't defend the attack with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP081.width-450.png",
    keywords: [],
    name: "Emerging Dominance",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Ninja,
    identifier: "find-center-blue",
    functionalText: `**Combo** - If Crane Dance was the last attack this combat chain, Find Center can't be defended by cards with {r} cost less than the number of chain links you control, and it gains "If this hits, create a Zen State token."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP098.width-450.png",
    keywords: [Keyword.Combo],
    name: "Find Center",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "flood-of-force-yellow",
    functionalText: `**Combo** - If Rushing River or Flood of Force was the last attack this combat chain, when you attack with Flood of Force, reveal the top card of your deck. If it's a card with **combo,** put it into your hand then Flood of Force gains +3{p} and **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP099.width-450.png",
    keywords: [Keyword.Combo],
    name: "Flood of Force",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "herons-flight-red",
    functionalText: `**Combo** - If Crane Dance was the last attack this combat chain, when you attack with Heron's Flight, it gains +2{p} and you choose 1;  - Heron’s flight can only be defended by attack action cards. - Heron’s flight can only be defended by ‘non-attack’ action cards.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP100.width-450.png",
    keywords: [Keyword.Combo],
    name: "Heron’s Flight",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "crane-dance-red",
    functionalText: `**Combo** - If Soulbead Strike was the last attack this combat chain, Crane Dance gains +1{p}, **go again**, and it can't be defended by attack action cards with base {p} greater than the number of chain links you control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP107.width-450.png",
    keywords: [Keyword.Combo],
    name: "Crane Dance",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "crane-dance-yellow",
    functionalText: `**Combo** - If Soulbead Strike was the last attack this combat chain, Crane Dance gains +1{p}, **go again**, and it can't be defended by attack action cards with base {p} greater than the number of chain links you control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP108.width-450.png",
    keywords: [Keyword.Combo],
    name: "Crane Dance",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "crane-dance-blue",
    functionalText: `**Combo** - If Soulbead Strike was the last attack this combat chain, Crane Dance gains +1{p}, **go again**, and it can't be defended by attack action cards with base {p} greater than the number of chain links you control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP109.width-450.png",
    keywords: [Keyword.Combo],
    name: "Crane Dance",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "rushing-river-red",
    functionalText: `**Combo** - If Torrent of Tempo was the last attack this combat chain, Rushing River gains +1{p}, **go again**, and "If Rushing River hits, draw X cards then put X cards from your hand on top of your deck in any order, where X is the number of attacks that have hit this combat chain.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP110.width-450.png",
    keywords: [Keyword.Combo],
    name: "Rushing River",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "rushing-river-yellow",
    functionalText: `**Combo** - If Torrent of Tempo was the last attack this combat chain, Rushing River gains +1{p}, **go again**, and "If Rushing River hits, draw X cards then put X cards from your hand on top of your deck in any order, where X is the number of attacks that have hit this combat chain.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP111.width-450.png",
    keywords: [Keyword.Combo],
    name: "Rushing River",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "rushing-river-blue",
    functionalText: `**Combo** - If Torrent of Tempo was the last attack this combat chain, Rushing River gains +1{p}, **go again**, and "If Rushing River hits, draw X cards then put X cards from your hand on top of your deck in any order, where X is the number of attacks that have hit this combat chain.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP112.width-450.png",
    keywords: [Keyword.Combo],
    name: "Rushing River",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "flying-kick-red",
    functionalText: `If Flying Kick is played as chain link 3 or higher, it gains +2{r}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/IRA007-P_9qjDnLM.width-450.png",
    keywords: [],
    name: "Flying Kick",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.IraWelcomeDeck,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "flying-kick-yellow",
    functionalText: `If Flying Kick is played as chain link 3 or higher, it gains +2{r}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU64.width-450.png",
    keywords: [],
    name: "Flying Kick",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "flying-kick-blue",
    functionalText: `If Flying Kick is played as chain link 3 or higher, it gains +2{r}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU65.width-450.png",
    keywords: [],
    name: "Flying Kick",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "soulbead-strike-red",
    functionalText: `If Soulbead Strike hits, it gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP122.width-450.png",
    keywords: [],
    name: "Soulbead Strike",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "soulbead-strike-yellow",
    functionalText: `If Soulbead Strike hits, it gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP123.width-450.png",
    keywords: [],
    name: "Soulbead Strike",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "soulbead-strike-blue",
    functionalText: `If Soulbead Strike hits, it gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP124.width-450.png",
    keywords: [],
    name: "Soulbead Strike",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "torrent-of-tempo-red",
    functionalText: `If Torrent of Tempo hits, it gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/IRA006-P_Qj0R6lE.width-450.png",
    keywords: [],
    name: "Torrent of Tempo",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.IraWelcomeDeck,Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "torrent-of-tempo-yellow",
    functionalText: `If Torrent of Tempo hits, it gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP129.width-450.png",
    keywords: [],
    name: "Torrent of Tempo",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "torrent-of-tempo-blue",
    functionalText: `If Torrent of Tempo hits, it gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP130.width-450.png",
    keywords: [],
    name: "Torrent of Tempo",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "bittering-thorns-yellow",
    functionalText: `If Bittering Thorns hits, your next attack this turn gains +1{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/IRA005-P_YAgf1In.width-450.png",
    keywords: [],
    name: "Bittering Thorns",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.IraWelcomeDeck,Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "salt-the-wound-yellow",
    functionalText: `Salt the Wound gains +1{p} for each attack that has hit this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/IRA004-P_c88KAnK.width-450.png",
    keywords: [],
    name: "Salt the Wound",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.IraWelcomeDeck,Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "whirling-mist-blossom-yellow",
    functionalText: `**Ira Specialization** *(You may only have Whirling Mist Blossom in your deck if your hero is Ira.)*  If Whirling Mist Blossom hits, and it's the second or higher chain link in a row to hit, draw 2 cards.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/IRA003-P_BrjByqK.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Whirling Mist Blossom",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.IraWelcomeDeck,Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    specialization: Hero.Ira,
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "spoils-of-war-red",
    functionalText: `Your next weapon attack this turn gains +2{p} and **go again**.  Whenever a weapon you control hits this turn, create 2 Copper tokens.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP151.width-450.png",
    keywords: [],
    name: "Spoils of War",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "dauntless-red",
    functionalText: `Your next weapon attack this turn gains +3{p}.  The next defense reaction card the defending hero plays this turn costs an additional {r} to play.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU85.width-450.png",
    keywords: [],
    name: "Dauntless",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "dauntless-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p}.  The next defense reaction card the defending hero plays this turn costs an additional {r} to play.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU86.width-450.png",
    keywords: [],
    name: "Dauntless",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "dauntless-blue",
    functionalText: `Your next weapon attack this turn gains +1{p}.  The next defense reaction card the defending hero plays this turn costs an additional {r} to play.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU87.width-450.png",
    keywords: [],
    name: "Dauntless",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "hit-and-run-red",
    functionalText: `Your next weapon attack this turn gains **go again**.  If you have attacked with a weapon this turn, your next attack this turn gains +3{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP174.width-450.png",
    keywords: [],
    name: "Hit and Run",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "hit-and-run-yellow",
    functionalText: `Your next weapon attack this turn gains **go again**.  If you have attacked with a weapon this turn, your next attack this turn gains +2{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP175.width-450.png",
    keywords: [],
    name: "Hit and Run",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "hit-and-run-blue",
    functionalText: `Your next weapon attack this turn gains **go again**.  If you have attacked with a weapon this turn, your next attack this turn gains +1{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP176.width-450.png",
    keywords: [],
    name: "Hit and Run",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "push-forward-red",
    functionalText: `Your next weapon attack this turn gains +3{p}.  If you have attacked with a weapon this turn, your next attack this turn gains **dominate.** *(The defending hero can’t defend the attack with more than 1 card from their hand.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL030.width-450.png",
    keywords: [],
    name: "Push Forward",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "push-forward-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p}.  If you have attacked with a weapon this turn, your next attack this turn gains **dominate.** *(The defending hero can’t defend the attack with more than 1 card from their hand.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU95.width-450.png",
    keywords: [],
    name: "Push Forward",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "push-forward-blue",
    functionalText: `Your next weapon attack this turn gains +1{p}.  If you have attacked with a weapon this turn, your next attack this turn gains **dominate.** *(The defending hero can’t defend the attack with more than 1 card from their hand.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU96.width-450.png",
    keywords: [],
    name: "Push Forward",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Mechanologist,
    identifier: "meganetic-shockwave-blue",
    functionalText: `The defending hero must defend Meganetic Shockwave with X equipment they control, where X is the number of times you have **boosted** this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU103.width-450.png",
    keywords: [],
    name: "Meganetic Shockwave",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "absorption-dome-yellow",
    functionalText: `Absorption Dome enters the arena with steam counters on it equal to the number of times you have **boosted** this turn.  If your hero would be dealt damage, remove that many steam counters from Absorption Dome instead, then prevent damage equal to the number of steam counters removed this way.  When Absorption Dome has no steam counters on it, destroy it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU104.width-450.png",
    keywords: [],
    name: "Absorption Dome",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Mechanologist,
    identifier: "plasma-purifier-red",
    functionalText: `**Action** - {r}: If there are no steam counters on Plasma Purifier, put a steam counter on it. **Go again**  **Once per Turn Action** - Remove a steam counter from Plasma Purifier: Target Mechanologist pistol you control gains +1{p} until end of turn. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP190.width-450.png",
    keywords: [],
    name: "Plasma Purifier",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 2,
    
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Mechanologist,
    identifier: "high-speed-impact-red",
    functionalText: `If High Speed Impact hits, the next attack you boost this combat chain gains **dominate**. *(The defending hero can't defend the attack with more than 1 card from their hand.)*  **Boost** *(As an additional cost to play High Speed Impact, you may banish the top card of your deck. If it's a Mechanologist card, High Speed Impact gains* ***go again***.*)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP193.width-450.png",
    keywords: [Keyword.Boost],
    name: "High Speed Impact",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "high-speed-impact-yellow",
    functionalText: `If High Speed Impact hits, the next attack you boost this combat chain gains **dominate**. *(The defending hero can't defend the attack with more than 1 card from their hand.)*  **Boost** *(As an additional cost to play High Speed Impact, you may banish the top card of your deck. If it's a Mechanologist card, High Speed Impact gains* ***go again***.*)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP194.width-450.png",
    keywords: [Keyword.Boost],
    name: "High Speed Impact",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "high-speed-impact-blue",
    functionalText: `If High Speed Impact hits, the next attack you boost this combat chain gains **dominate**. *(The defending hero can't defend the attack with more than 1 card from their hand.)*  **Boost** *(As an additional cost to play High Speed Impact, you may banish the top card of your deck. If it's a Mechanologist card, High Speed Impact gains* ***go again***.*)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP195.width-450.png",
    keywords: [Keyword.Boost],
    name: "High Speed Impact",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "combustible-courier-red",
    functionalText: `If Combustible Courier hits, the next attack you **boost** this combat chain gains +3{p}.  **Boost** *(As an additional cost to play Combustible Courier, you may banish the top card of your deck. If it's a Mechanologist card, Combustible Courier gains* **go again**.*)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP202.width-450.png",
    keywords: [Keyword.Boost],
    name: "Combustible Courier",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "combustible-courier-yellow",
    functionalText: `If Combustible Courier hits, the next attack you **boost** this combat chain gains +3{p}.  **Boost** *(As an additional cost to play Combustible Courier, you may banish the top card of your deck. If it's a Mechanologist card, Combustible Courier gains* **go again**.*)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP203.width-450.png",
    keywords: [Keyword.Boost],
    name: "Combustible Courier",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "combustible-courier-blue",
    functionalText: `If Combustible Courier hits, the next attack you **boost** this combat chain gains +3{p}.  **Boost** *(As an additional cost to play Combustible Courier, you may banish the top card of your deck. If it's a Mechanologist card, Combustible Courier gains* **go again**.*)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP204.width-450.png",
    keywords: [Keyword.Boost],
    name: "Combustible Courier",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "overblast-red",
    functionalText: `Overblast gains +X{p}, where X is the number of times you have **boosted** this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU112.width-450.png",
    keywords: [],
    name: "Overblast",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "overblast-yellow",
    functionalText: `Overblast gains +X{p}, where X is the number of times you have **boosted** this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU113.width-450.png",
    keywords: [],
    name: "Overblast",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "overblast-blue",
    functionalText: `Overblast gains +X{p}, where X is the number of times you have **boosted** this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU114.width-450.png",
    keywords: [],
    name: "Overblast",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "teklovossens-workshop-red",
    functionalText: `**Opt X**, where X is the number of times you have **boosted** this turn. *(Look at the top X cards of your deck. You may put them on the top and/or bottom in any order.)*  Reveal the top card of your deck. If it’s a Mechanologist item card with cost 2 or less, put it into the arena.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU115.width-450.png",
    keywords: [Keyword.Opt],
    name: "Teklovossen’s Workshop",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Mechanologist,
    identifier: "teklovossens-workshop-yellow",
    functionalText: `**Opt X**, where X is the number of times you have **boosted** this turn. *(Look at the top X cards of your deck. You may put them on the top and/or bottom in any order.)*  Reveal the top card of your deck. If it’s a Mechanologist item card with cost 1 or less, put it into the arena.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU116.width-450.png",
    keywords: [Keyword.Opt],
    name: "Teklovossen’s Workshop",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Mechanologist,
    identifier: "teklovossens-workshop-blue",
    functionalText: `**Opt X**, where X is the number of times you have **boosted** this turn. *(Look at the top X cards of your deck. You may put them on the top and/or bottom in any order.)*  Reveal the top card of your deck. If it’s a Mechanologist item card with cost 0 or less, put it into the arena.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU117.width-450.png",
    keywords: [Keyword.Opt],
    name: "Teklovossen’s Workshop",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "remorseless-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Remorseless is put into your arsenal face up, until end of turn it gains "Defense reaction cards can't be played from arsenal to Remoreseless's chain link."  If Remorseless hits a hero, until the end of their next turn, whenever they play an action card, they lose 1{h}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP230.width-450.png",
    keywords: [],
    name: "Remorseless",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "poison-the-tips-yellow",
    functionalText: `Until end of turn, arrows you control gain "If this hits a hero, they discard a card."  **Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU124.width-450.png",
    keywords: [Keyword.Reload],
    name: "Poison the Tips",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "pathing-helix-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Pathing Helix hits and you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU129.width-450.png",
    keywords: [],
    name: "Pathing Helix",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "pathing-helix-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Pathing Helix hits and you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU130.width-450.png",
    keywords: [],
    name: "Pathing Helix",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "pathing-helix-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Pathing Helix hits and you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU131.width-450.png",
    keywords: [],
    name: "Pathing Helix",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "sleep-dart-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Sleep Dart hits a hero, they lose all hero card effects and activated abilities until the end of their next turn. *(Treat the hero card as if the text box is empty.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP255.width-450.png",
    keywords: [],
    name: "Sleep Dart",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "sleep-dart-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Sleep Dart hits a hero, they lose all hero card effects and activated abilities until the end of their next turn. *(Treat the hero card as if the text box is empty.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP256.width-450.png",
    keywords: [],
    name: "Sleep Dart",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "sleep-dart-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Sleep Dart hits a hero, they lose all hero card effects and activated abilities until the end of their next turn. *(Treat the hero card as if the text box is empty.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP257.width-450.png",
    keywords: [],
    name: "Sleep Dart",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "increase-the-tension-red",
    functionalText: `Your next arrow attack this turn gains +3{p} and "Defense reactions can't be played from hand this chain link."  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU135.width-450.png",
    keywords: [],
    name: "Increase the Tension",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "increase-the-tension-yellow",
    functionalText: `Your next arrow attack this turn gains +2{p} and "Defense reactions can't be played from hand this chain link."  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU136.width-450.png",
    keywords: [],
    name: "Increase the Tension",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "increase-the-tension-blue",
    functionalText: `Your next arrow attack this turn gains +1{p} and "Defense reactions can't be played from hand this chain link."  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU137.width-450.png",
    keywords: [],
    name: "Increase the Tension",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "dread-triptych-blue",
    functionalText: `When you attack with Dread Triptych, if you've played a 'non-attack' action card this turn, create a Runechant token.  When you attack with Dread Triptych, if you've dealt arcane damage this turn, create a Runechant token.  If Dread Triptych hits, create a Runechant token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP266.width-450.png",
    keywords: [],
    name: "Dread Triptych",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "rattle-bones-red",
    functionalText: `Banish target Runeblade attack action card from your graveyard. You may play it this turn.  If you have dealt arcane damage to an opposing hero this turn, you may play Rattle Bones as though it were an instant.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU143.width-450.png",
    keywords: [],
    name: "Rattle Bones",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "runeblood-barrier-yellow",
    functionalText: `Create 4 Runechant tokens.  If your hero would be dealt damage, instead destroy that many Runechants you control and prevent 1 damage that source would deal for each Runechant token destroyed this way.  At the beginning of your action phase, destroy Runeblood Barrier.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP269.width-450.png",
    keywords: [],
    name: "Runeblood Barrier",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action – Aura",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Runeblade,
    identifier: "mauvrion-skies-red",
    functionalText: `The next runeblade attack action card you play this turn gains **go again** and “If this hits, create 3 Runechant tokens.” *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP276.width-450.png",
    keywords: [],
    name: "Mauvrion Skies",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "mauvrion-skies-yellow",
    functionalText: `The next runeblade attack action card you play this turn gains **go again** and “If this hits, create 2 Runechant tokens.” *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP277.width-450.png",
    keywords: [],
    name: "Mauvrion Skies",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "mauvrion-skies-blue",
    functionalText: `The next runeblade attack action card you play this turn gains **go again** and “If this hits, create a Runechant token.” *(It’s an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP278.width-450.png",
    keywords: [],
    name: "Mauvrion Skies",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "consuming-volition-red",
    functionalText: `If you have dealt arcane damage this turn, Consuming Volition gains "If this hits a hero, they discard a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN025.width-450.png",
    keywords: [],
    name: "Consuming Volition",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "consuming-volition-yellow",
    functionalText: `If you have dealt arcane damage this turn, Consuming Volition gains "If this hits a hero, they discard a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU149.width-450.png",
    keywords: [],
    name: "Consuming Volition",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "consuming-volition-blue",
    functionalText: `If you have dealt arcane damage this turn, Consuming Volition gains "If this hits a hero, they discard a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU150.width-450.png",
    keywords: [],
    name: "Consuming Volition",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "meat-and-greet-red",
    functionalText: `If Meat and Greet hits, create a Runechant token. *(It's an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*  If you have dealt arcane damage to an opposing hero this turn, Meat and Greet gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP285.width-450.png",
    keywords: [],
    name: "Meat and Greet",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "meat-and-greet-yellow",
    functionalText: `If Meat and Greet hits, create a Runechant token. *(It's an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*  If you have dealt arcane damage to an opposing hero this turn, Meat and Greet gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP286.width-450.png",
    keywords: [],
    name: "Meat and Greet",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "meat-and-greet-blue",
    functionalText: `If Meat and Greet hits, create a Runechant token. *(It's an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*  If you have dealt arcane damage to an opposing hero this turn, Meat and Greet gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP287.width-450.png",
    keywords: [],
    name: "Meat and Greet",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "sutcliffes-research-notes-red",
    functionalText: `Reveal the top 3 cards of your deck. Create a Runechant token for each Runeblade attack action card revealed this way, then put the cards on top of your deck in any order. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP297.width-450.png",
    keywords: [],
    name: "Sutcliffe’s Research Notes",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "sutcliffes-research-notes-yellow",
    functionalText: `Reveal the top 2 cards of your deck. Create a Runechant token for each Runeblade attack action card revealed this way, then put the cards on top of your deck in any order. *(They're auras with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP298.width-450.png",
    keywords: [],
    name: "Sutcliffe’s Research Notes",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "sutcliffes-research-notes-blue",
    functionalText: `Reveal the top card of your deck. Create a Runechant token for each Runeblade attack action card revealed this way, then put the cards on top of your deck in any order. *(It’s an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.")*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP299.width-450.png",
    keywords: [],
    name: "Sutcliffe’s Research Notes",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "chain-lightning-yellow",
    functionalText: `You may play your next Wizard 'non-attack' action card this turn as though it were an instant.  If you have played another Wizard 'non-attack' action card this turn, deal 3 arcane damage to each opposing hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP309.width-450.png",
    keywords: [],
    name: "Chain Lightning",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "gaze-the-ages-blue",
    functionalText: `**Opt 2** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*  If you have played another Wizard 'non-attack' action card this turn, put Gaze the Ages into your hand as it resolves.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU163.width-450.png",
    keywords: [Keyword.Opt],
    name: "Gaze the Ages",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "cindering-foresight-red",
    functionalText: `If it's not your turn, you may play Cindering Foresight as though it were an instant.  The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus 1.  **Opt 3** *(Look at the top 3 cards of your deck. You may put them on the top and/or bottom in any order.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP317.width-450.png",
    keywords: [Keyword.Opt],
    name: "Cindering Foresight",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "cindering-foresight-yellow",
    functionalText: `If it's not your turn, you may play Cindering Foresight as though it were an instant.  The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus 1.  **Opt 2** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP318.width-450.png",
    keywords: [Keyword.Opt],
    name: "Cindering Foresight",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "cindering-foresight-blue",
    functionalText: `If it's not your turn, you may play Cindering Foresight as though it were an instant.  The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus 1.  **Opt 1** *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP319.width-450.png",
    keywords: [Keyword.Opt],
    name: "Cindering Foresight",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "foreboding-bolt-red",
    functionalText: `Deal 3 damage to target hero.  **Opt 1** *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU168.width-450.png",
    keywords: [Keyword.Opt],
    name: "Foreboding Bolt",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "foreboding-bolt-yellow",
    functionalText: `Deal 2 damage to target hero.  **Opt 1** *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU169.width-450.png",
    keywords: [Keyword.Opt],
    name: "Foreboding Bolt",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "foreboding-bolt-blue",
    functionalText: `Deal 1 damage to target hero.  **Opt 1** *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU170.width-450.png",
    keywords: [Keyword.Opt],
    name: "Foreboding Bolt",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "rousing-aether-red",
    functionalText: `Deal 4 arcane damage to target hero.  The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus 1.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU171.width-450.png",
    keywords: [],
    name: "Rousing Aether",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "rousing-aether-yellow",
    functionalText: `Deal 3 arcane damage to target hero.  The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus 1.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU172.width-450.png",
    keywords: [],
    name: "Rousing Aether",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "rousing-aether-blue",
    functionalText: `Deal 2 arcane damage to target hero.  The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus 1.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU173.width-450.png",
    keywords: [],
    name: "Rousing Aether",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "snapback-red",
    functionalText: `Deal 3 arcane damage to target hero.  If you have played another Wizard 'non-attack' action card this turn, you may play Snapback as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP332.width-450.png",
    keywords: [],
    name: "Snapback",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "snapback-yellow",
    functionalText: `Deal 2 arcane damage to target hero.  If you have played another Wizard 'non-attack' action card this turn, you may play Snapback as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP333.width-450.png",
    keywords: [],
    name: "Snapback",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "snapback-blue",
    functionalText: `Deal 1 arcane damage to target hero.  If you have played another Wizard 'non-attack' action card this turn, you may play Snapback as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP334.width-450.png",
    keywords: [],
    name: "Snapback",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "coax-a-commotion-red",
    functionalText: `If Coax a Commotion hits, choose any number:  - Each hero creates a Quicken token. - Each hero draws a card. - Each hero gains 1{h}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP359.width-450.png",
    keywords: [],
    name: "Coax a Commotion",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "gorganian-tome",
    functionalText: `**Legendary** *(You may only have 1 Gorganian Tome in your deck.)*  Draw X cards, where X is 1 plus the number of Gorganian Tomes in all graveyards.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP364.width-450.png",
    keywords: [Keyword.Legendary],
    name: "Gorganian Tome",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    
    fusions: [],
    
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "promise-of-plenty-red",
    functionalText: `If Promise of Plenty hits, each hero who doesn’t have a card in their arsenal puts the top card of their deck face down into their arsenal.  If Promise of Plenty is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU183.width-450.png",
    keywords: [],
    name: "Promise of Plenty",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "promise-of-plenty-yellow",
    functionalText: `If Promise of Plenty hits, each hero who doesn’t have a card in their arsenal puts the top card of their deck face down into their arsenal.  If Promise of Plenty is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU184.width-450.png",
    keywords: [],
    name: "Promise of Plenty",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "promise-of-plenty-blue",
    functionalText: `If Promise of Plenty hits, each hero who doesn’t have a card in their arsenal puts the top card of their deck face down into their arsenal.  If Promise of Plenty is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU185.width-450.png",
    keywords: [],
    name: "Promise of Plenty",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "cash-in-yellow",
    functionalText: `You may destroy 4 Coppers, 2 Silvers, or 1 Gold you control rather than pay Cash In's {r} cost.  Draw 2 cards.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU-188_.width-450.png",
    keywords: [],
    name: "Cash In",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 4,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "brutal-assault-red",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU192.width-450.png",
    keywords: [],
    name: "Brutal Assault",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "brutal-assault-yellow",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU193.width-450.png",
    keywords: [],
    name: "Brutal Assault",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "brutal-assault-blue",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/IRA010-P_CGHBP7m.width-450.png",
    keywords: [],
    name: "Brutal Assault",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.IraWelcomeDeck,Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "great-library-of-solana",
    functionalText: `**Legendary** *(You may only have 1 Great Library of Solana in your deck.)*  At the beginning of each end phase, if a hero has 2 or more cards with yellow color strips in their pitch zone, they gain +1{i} until end of turn.  **Action** - Discard 2 cards with yellow color strips: Destroy Great Library of Solana. Any hero may activate this ability. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON000.width-450.png",
    keywords: [Keyword.Legendary],
    name: "Great Library of Solana",
    rarity: Rarity.Fabled,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Landmark",
    cost: 2,
    
    fusions: [],
    
    
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Landmark,
  },{
    class: Class.Illusionist,
    identifier: "herald-of-erudition-yellow",
    functionalText: `**Dominate** *(The defending hero can't defend Herald of Erudition with more than 1 card from their hand.)*  If Herald of Erudition hits, put it into your hero's soul and draw 2 cards.  **Phantasm** *(If Herald of Erudition is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Erudition and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON004.width-450.png",
    keywords: [Keyword.Dominate,Keyword.Phantasm],
    name: "Herald of Erudition",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "herald-of-judgment-yellow",
    functionalText: `**Prism Specialization** *(You may only have Herald of Judgment in your deck if your hero is Prism.)*  If Herald of Judgment hits, put it into your hero's soul and the defending hero can't play cards from their banished zone during their next action phase. *(Put this card face up under your hero card.)*  **Phantasm** *(If Herald of Judgment is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Judgment and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB028.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Phantasm],
    name: "Herald of Judgment",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Instant – Aura",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [Talent.Light],
    
    
    
    specialization: Hero.Prism,
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "herald-of-triumph-red",
    functionalText: `Attack action cards have -1{p} while defending Herald of Triumph.  If Herald of Triumph hits, put it into your hero's soul. *(Put this card face up under your hero card.)*  **Phantasm** *(If Herald of Triumph is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Triumph and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON008.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Triumph",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "herald-of-triumph-yellow",
    functionalText: `Attack action cards have -1{p} while defending Herald of Triumph.  If Herald of Triumph hits, put it into your hero's soul. *(Put this card face up under your hero card.)*  **Phantasm** *(If Herald of Triumph is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Triumph and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON009.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Triumph",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "herald-of-triumph-blue",
    functionalText: `Attack action cards have -1{p} while defending Herald of Triumph.  If Herald of Triumph hits, put it into your hero's soul. *(Put this card face up under your hero card.)*  **Phantasm** *(If Herald of Triumph is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Triumph and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON010.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Triumph",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "herald-of-protection-red",
    functionalText: `If Herald of Protection hits, put it into your hero's soul and create a Spectral Shield token. *(It's an Illusionist aura with "If your hero would be dealt damage, instead destroy Spectral Shield and prevent 1 damage that source would deal.")*  **Phantasm** *(If Herald of Protection is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Protection and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB029.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Protection",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "herald-of-protection-yellow",
    functionalText: `If Herald of Protection hits, put it into your hero's soul and create a Spectral Shield token. *(It's an Illusionist aura with "If your hero would be dealt damage, instead destroy Spectral Shield and prevent 1 damage that source would deal.")*  **Phantasm** *(If Herald of Protection is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Protection and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB030.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Protection",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "herald-of-protection-blue",
    functionalText: `If Herald of Protection hits, put it into your hero's soul and create a Spectral Shield token. *(It's an Illusionist aura with "If your hero would be dealt damage, instead destroy Spectral Shield and prevent 1 damage that source would deal.")*  **Phantasm** *(If Herald of Protection is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Protection and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB031.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Protection",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "herald-of-ravages-red",
    functionalText: `If Herald of Ravages hits, put it into your hero's soul and deal 1 arcane damage to target hero. *(Put this card face up under your hero card.)*  **Phantasm** *(If Herald of Ravages is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Ravages and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/PSM010.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Ravages",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "herald-of-ravages-yellow",
    functionalText: `If Herald of Ravages hits, put it into your hero's soul and deal 1 arcane damage to target hero. *(Put this card face up under your hero card.)*  **Phantasm** *(If Herald of Ravages is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Ravages and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/23fgw5465b464.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Ravages",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "herald-of-ravages-blue",
    functionalText: `If Herald of Ravages hits, put it into your hero's soul and deal 1 arcane damage to target hero. *(Put this card face up under your hero card.)*  **Phantasm** *(If Herald of Ravages is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Ravages and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/PSM017.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Ravages",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "herald-of-rebirth-red",
    functionalText: `If Herald of Rebirth hits, put it into your hero's soul and put up to 1 card with phantasm from your graveyard on top of your deck. *(Put this card face up under your hero card.)*  **Phantasm** *(If Herald of Rebirth is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Rebirth and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/PSM011.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Rebirth",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "herald-of-rebirth-yellow",
    functionalText: `If Herald of Rebirth hits, put it into your hero's soul and put up to 1 card with phantasm from your graveyard on top of your deck. *(Put this card face up under your hero card.)*  **Phantasm** *(If Herald of Rebirth is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Rebirth and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON021.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Rebirth",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "herald-of-rebirth-blue",
    functionalText: `If Herald of Rebirth hits, put it into your hero's soul and put up to 1 card with phantasm from your graveyard on top of your deck. *(Put this card face up under your hero card.)*  **Phantasm** *(If Herald of Rebirth is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Rebirth and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/PSM018.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Herald of Rebirth",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "herald-of-tenacity-red",
    functionalText: `**Dominate** *(The defending hero can't defend Herald of Tenacity with more than 1 card from their hand.)*  If Herald of Tenacity hits, put it into your hero's soul. *(Put this card face up under your hero card.)*  **Phantasm** *(If Herald of Tenacity is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Tenacity and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/PSM012.width-450.png",
    keywords: [Keyword.Dominate,Keyword.Phantasm],
    name: "Herald of Tenacity",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "herald-of-tenacity-yellow",
    functionalText: `**Dominate** *(The defending hero can't defend Herald of Tenacity with more than 1 card from their hand.)*  If Herald of Tenacity hits, put it into your hero's soul. *(Put this card face up under your hero card.)*  **Phantasm** *(If Herald of Tenacity is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Tenacity and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON024.width-450.png",
    keywords: [Keyword.Dominate,Keyword.Phantasm],
    name: "Herald of Tenacity",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "herald-of-tenacity-blue",
    functionalText: `**Dominate** *(The defending hero can't defend Herald of Tenacity with more than 1 card from their hand.)*  If Herald of Tenacity hits, put it into your hero's soul. *(Put this card face up under your hero card.)*  **Phantasm** *(If Herald of Tenacity is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Herald of Tenacity and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/PSM019.width-450.png",
    keywords: [Keyword.Dominate,Keyword.Phantasm],
    name: "Herald of Tenacity",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "wartune-herald-red",
    functionalText: `If Wartune Herald hits, put it into your hero's soul. *(Put this card face up under your hero card.)*  **Phantasm** *(If Wartune Herald is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Wartune Herald and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB035.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Wartune Herald",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "wartune-herald-yellow",
    functionalText: `If Wartune Herald hits, put it into your hero's soul. *(Put this card face up under your hero card.)*  **Phantasm** *(If Wartune Herald is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Wartune Herald and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB036.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Wartune Herald",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "wartune-herald-blue",
    functionalText: `If Wartune Herald hits, put it into your hero's soul. *(Put this card face up under your hero card.)*  **Phantasm** *(If Wartune Herald is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Wartune Herald and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB037.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Wartune Herald",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Illusionist Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "bolting-blade-yellow",
    functionalText: `Bolting Blade costs {r}{r} less to play for each time you've **charged** this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON032.width-450.png",
    keywords: [],
    name: "Bolting Blade",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 4,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 7,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "lumina-ascension-yellow",
    functionalText: `**Boltyn Specialization** *(You may only have Lumina Ascension in your deck if your hero is Boltyn.)*  Until end of turn, weapons you control gain +1{p} and "If this hits, reveal the top card of your deck. If it's a Light card, put it into your hero's soul and gain 1{h}, otherwise put it on the bottom of your deck."  If you've **charged** this turn, you may attack an additional time with each weapon you control.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON034.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Lumina Ascension",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Light],
    
    
    
    specialization: Hero.Boltyn,
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "v-of-the-vanguard-yellow",
    functionalText: `**Boltyn Specialization** *(You may only have V of the Vanguard in your deck if your hero is Boltyn.)*  As an additional cost to play V of the Vanguard, you may **charge** your hero's soul any number of times. *(Put 1 or more cards from your hand face up under your hero card.)*  Attacks on this combat chain gain +1{p} for each Light card charged this way.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL009.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Charge],
    name: "V of the Vanguard",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [Talent.Light],
    
    
    
    specialization: Hero.Boltyn,
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "battlefield-blitz-red",
    functionalText: `If you’ve **charged** this turn, Battlefield Blitz gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL010.width-450.png",
    keywords: [],
    name: "Battlefield Blitz",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "battlefield-blitz-yellow",
    functionalText: `If you’ve **charged** this turn, Battlefield Blitz gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON037.width-450.png",
    keywords: [],
    name: "Battlefield Blitz",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "battlefield-blitz-blue",
    functionalText: `If you’ve **charged** this turn, Battlefield Blitz gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON038.width-450.png",
    keywords: [],
    name: "Battlefield Blitz",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "valiant-thrust-red",
    functionalText: `If you’ve **charged** this turn, Valiant Thrust gains +3{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL017.width-450.png",
    keywords: [],
    name: "Valiant Thrust",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "valiant-thrust-yellow",
    functionalText: `If you’ve **charged** this turn, Valiant Thrust gains +3{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON040.width-450.png",
    keywords: [],
    name: "Valiant Thrust",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "valiant-thrust-blue",
    functionalText: `If you’ve **charged** this turn, Valiant Thrust gains +3{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON041.width-450.png",
    keywords: [],
    name: "Valiant Thrust",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "bolt-of-courage-red",
    functionalText: `As an additional cost to play Bolt of Courage, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*  If you've **charged** this turn, Bolt of Courage gains "If this hits, draw a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL011.width-450.png",
    keywords: [Keyword.Charge],
    name: "Bolt of Courage",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "bolt-of-courage-yellow",
    functionalText: `As an additional cost to play Bolt of Courage, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*  If you've **charged** this turn, Bolt of Courage gains "If this hits, draw a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON043.width-450.png",
    keywords: [Keyword.Charge],
    name: "Bolt of Courage",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "bolt-of-courage-blue",
    functionalText: `As an additional cost to play Bolt of Courage, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*  If you've **charged** this turn, Bolt of Courage gains "If this hits, draw a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL022.width-450.png",
    keywords: [Keyword.Charge],
    name: "Bolt of Courage",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "cross-the-line-red",
    functionalText: `As an additional cost to play Cross the Line, you may **charge** your hero’s soul. *(Put a card from your hand face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL013.width-450.png",
    keywords: [Keyword.Charge],
    name: "Cross the Line",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "cross-the-line-yellow",
    functionalText: `As an additional cost to play Cross the Line, you may **charge** your hero’s soul. *(Put a card from your hand face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL019.width-450.png",
    keywords: [Keyword.Charge],
    name: "Cross the Line",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "cross-the-line-blue",
    functionalText: `As an additional cost to play Cross the Line, you may **charge** your hero’s soul. *(Put a card from your hand face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON047.width-450.png",
    keywords: [Keyword.Charge],
    name: "Cross the Line",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "engulfing-light-red",
    functionalText: `As an additional cost to play Engulfing Light, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*  If you've **charged** this turn, Engulfing Light gains "If this hits, put it into your hero's soul."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL014.width-450.png",
    keywords: [Keyword.Charge],
    name: "Engulfing Light",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "engulfing-light-yellow",
    functionalText: `As an additional cost to play Engulfing Light, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*  If you've **charged** this turn, Engulfing Light gains "If this hits, put it into your hero's soul."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON049.width-450.png",
    keywords: [Keyword.Charge],
    name: "Engulfing Light",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "engulfing-light-blue",
    functionalText: `As an additional cost to play Engulfing Light, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*  If you've **charged** this turn, Engulfing Light gains "If this hits, put it into your hero's soul."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL023.width-450.png",
    keywords: [Keyword.Charge],
    name: "Engulfing Light",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "express-lightning-red",
    functionalText: `As an additional cost to play Express Lightning, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL015.width-450.png",
    keywords: [Keyword.Charge],
    name: "Express Lightning",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "express-lightning-yellow",
    functionalText: `As an additional cost to play Express Lightning, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL020.width-450.png",
    keywords: [Keyword.Charge],
    name: "Express Lightning",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "express-lightning-blue",
    functionalText: `As an additional cost to play Express Lightning, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON053.width-450.png",
    keywords: [Keyword.Charge],
    name: "Express Lightning",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "take-flight-red",
    functionalText: `As an additional cost to play Take Flight, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*  If you've **charged** this turn, Take Flight gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL016.width-450.png",
    keywords: [Keyword.Charge],
    name: "Take Flight",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "take-flight-yellow",
    functionalText: `As an additional cost to play Take Flight, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*  If you've **charged** this turn, Take Flight gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL021.width-450.png",
    keywords: [Keyword.Charge],
    name: "Take Flight",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "take-flight-blue",
    functionalText: `As an additional cost to play Take Flight, you may **charge** your hero's soul. *(Put a card from your hand face up under your hero card.)*  If you've **charged** this turn, Take Flight gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON056.width-450.png",
    keywords: [Keyword.Charge],
    name: "Take Flight",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Warrior Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "celestial-cataclysm-yellow",
    functionalText: `As an additional cost to play Celestial Cataclysm, banish 3 cards from your hero's soul.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON062.width-450.png",
    keywords: [],
    name: "Celestial Cataclysm",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 7,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "soul-food-yellow",
    functionalText: `Put Soul Food and all cards in your hand into your hero's soul. *(Put the cards face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON064.width-450.png",
    keywords: [],
    name: "Soul Food",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "invigorating-light-red",
    functionalText: `When you play Invigorating Light, if there are no cards in your hero's soul, put it into your hero's soul when the combat chain closes. *(Put the card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL024.width-450.png",
    keywords: [],
    name: "Invigorating Light",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "invigorating-light-yellow",
    functionalText: `When you play Invigorating Light, if there are no cards in your hero's soul, put it into your hero's soul when the combat chain closes. *(Put the card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON067.width-450.png",
    keywords: [],
    name: "Invigorating Light",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "invigorating-light-blue",
    functionalText: `When you play Invigorating Light, if there are no cards in your hero's soul, put it into your hero's soul when the combat chain closes. *(Put the card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON068.width-450.png",
    keywords: [],
    name: "Invigorating Light",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "illuminate-red",
    functionalText: `If Illuminate hits, put it into your hero’s soul. *(Put this card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/PSM021.width-450.png",
    keywords: [],
    name: "Illuminate",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "illuminate-yellow",
    functionalText: `If Illuminate hits, put it into your hero’s soul. *(Put this card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON073.width-450.png",
    keywords: [],
    name: "Illuminate",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "illuminate-blue",
    functionalText: `If Illuminate hits, put it into your hero’s soul. *(Put this card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL027.width-450.png",
    keywords: [],
    name: "Illuminate",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "impenetrable-belief-red",
    functionalText: `If 3 or more cards have been put into an opposing hero's banished zone this turn, Impenetrable Belief gains +2{d} while defending.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON075.width-450.png",
    keywords: [],
    name: "Impenetrable Belief",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "impenetrable-belief-yellow",
    functionalText: `If 3 or more cards have been put into an opposing hero's banished zone this turn, Impenetrable Belief gains +2{d} while defending.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON076.width-450.png",
    keywords: [],
    name: "Impenetrable Belief",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "impenetrable-belief-blue",
    functionalText: `If 3 or more cards have been put into an opposing hero's banished zone this turn, Impenetrable Belief gains +2{d} while defending.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON077.width-450.png",
    keywords: [],
    name: "Impenetrable Belief",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "rising-solartide-red",
    functionalText: `If Rising Solartide hits, put it into your hero’s soul. *(Put this card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL025.width-450.png",
    keywords: [],
    name: "Rising Solartide",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "rising-solartide-yellow",
    functionalText: `If Rising Solartide hits, put it into your hero’s soul. *(Put this card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL026.width-450.png",
    keywords: [],
    name: "Rising Solartide",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "rising-solartide-blue",
    functionalText: `If Rising Solartide hits, put it into your hero’s soul. *(Put this card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON080.width-450.png",
    keywords: [],
    name: "Rising Solartide",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "seek-enlightenment-red",
    functionalText: `The next attack action card you play this turn gains +3{p} and "If this hits, put it into your hero's soul." *(Put the card face up under your hero card.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/PSM022.width-450.png",
    keywords: [],
    name: "Seek Enlightenment",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "seek-enlightenment-yellow",
    functionalText: `The next attack action card you play this turn gains +2{p} and "If this hits, put it into your hero's soul." *(Put the card face up under your hero card.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON082.width-450.png",
    keywords: [],
    name: "Seek Enlightenment",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Light Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "seek-enlightenment-blue",
    functionalText: `The next attack action card you play this turn gains +1{p} and "If this hits, put it into your hero's soul." *(Put the card face up under your hero card.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL028.width-450.png",
    keywords: [],
    name: "Seek Enlightenment",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Light Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Illusionist,
    identifier: "phantasmaclasm-red",
    functionalText: `Look at the defending hero's hand and choose a card. They put it on the bottom of their deck then draw a card.  **Phantasm** *(If Phantasmaclasm is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Phantasmaclasm and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/fy8w7r78545yit3787efygs8def.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Phantasmaclasm",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 9,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "phantasmify-red",
    functionalText: `The next attack action card you play this turn is Illusionist in addition to its other class types, and gains +3/4/5{p} and **phantasm.** *(If the attack is defended by a non-Illusionist attack action card with 6 or more {p}, destroy it and close the combat chain.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS054.width-450.png",
    keywords: [],
    name: "Phantasmify",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist, Instant",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Illusionist,
    identifier: "phantasmify-yellow",
    functionalText: `The next attack action card you play this turn is Illusionist in addition to its other class types, and gains +3/4/5{p} and **phantasm.** *(If the attack is defended by a non-Illusionist attack action card with 6 or more {p}, destroy it and close the combat chain.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS055.width-450.png",
    keywords: [],
    name: "Phantasmify",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist, Instant",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Illusionist,
    identifier: "phantasmify-blue",
    functionalText: `The next attack action card you play this turn is Illusionist in addition to its other class types, and gains +3/4/5{p} and **phantasm.** *(If the attack is defended by a non-Illusionist attack action card with 6 or more {p}, destroy it and close the combat chain.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS056.width-450.png",
    keywords: [],
    name: "Phantasmify",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist, Instant",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Illusionist,
    identifier: "enigma-chimera-red",
    functionalText: `**Phantasm** *(If Enigma Chimera is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Enigma Chimera and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON098.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Enigma Chimera",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 8,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "enigma-chimera-yellow",
    functionalText: `**Phantasm** *(If Enigma Chimera is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Enigma Chimera and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/PSM027.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Enigma Chimera",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "enigma-chimera-blue",
    functionalText: `**Phantasm** *(If Enigma Chimera is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Enigma Chimera and close the combat chain.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/PSM028.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Enigma Chimera",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "spears-of-surreality-red",
    functionalText: `**Phantasm** *(If Spears of Surreality is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Spears of Surreality and close the combat chain.)*  **Go again** *(If Spears of Surreality is destroyed, go again does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON101.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Spears of Surreality",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "spears-of-surreality-yellow",
    functionalText: `**Phantasm** *(If Spears of Surreality is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Spears of Surreality and close the combat chain.)*  **Go again** *(If Spears of Surreality is destroyed, go again does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON102.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Spears of Surreality",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "spears-of-surreality-blue",
    functionalText: `**Phantasm** *(If Spears of Surreality is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Spears of Surreality and close the combat chain.)*  **Go again** *(If Spears of Surreality is destroyed, go again does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/PSM029.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Spears of Surreality",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "spill-blood-red",
    functionalText: `Axes you control gain +2{p} and **dominate** until end of turn.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON109.width-450.png",
    keywords: [],
    name: "Spill Blood",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "dusk-path-pilgrimage-red",
    functionalText: `Your next weapon attack this turn gains +3{p} and "If this hits, you may attack an additional time with this weapon this turn." *(You must have an action point to attack an additional time.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS060.width-450.png",
    keywords: [],
    name: "Dusk Path Pilgrimage",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "dusk-path-pilgrimage-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p} and "If this hits, you may attack an additional time with this weapon this turn." *(You must have an action point to attack an additional time.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS061.width-450.png",
    keywords: [],
    name: "Dusk Path Pilgrimage",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "dusk-path-pilgrimage-blue",
    functionalText: `Your next weapon attack this turn gains +1{p} and "If this hits, you may attack an additional time with this weapon this turn." *(You must have an action point to attack an additional time.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS062.width-450.png",
    keywords: [],
    name: "Dusk Path Pilgrimage",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "plow-through-red",
    functionalText: `Your next weapon attack this turn gains +3{p} and "If this weapon is defended by an attack action card, it gains +1{p} until end of turn".  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON113.width-450.png",
    keywords: [],
    name: "Plow Through",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "plow-through-yellow",
    functionalText: `Your next weapon attack this turn gains +2{p} and "If this weapon is defended by an attack action card, it gains +1{p} until end of turn".  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON114.width-450.png",
    keywords: [],
    name: "Plow Through",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "plow-through-blue",
    functionalText: `Your next weapon attack this turn gains +1{p} and "If this weapon is defended by an attack action card, it gains +1{p} until end of turn".  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON115.width-450.png",
    keywords: [],
    name: "Plow Through",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "second-swing-red",
    functionalText: `If you have attacked with a weapon this turn, your next attack this turn gains +4{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON116.width-450.png",
    keywords: [],
    name: "Second Swing",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "second-swing-yellow",
    functionalText: `If you have attacked with a weapon this turn, your next attack this turn gains +3{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON117.width-450.png",
    keywords: [],
    name: "Second Swing",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "second-swing-blue",
    functionalText: `If you have attacked with a weapon this turn, your next attack this turn gains +2{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON118.width-450.png",
    keywords: [],
    name: "Second Swing",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "deep-rooted-evil-yellow",
    functionalText: `If a card with 6 or more {p} has been put into your banished zone this turn, you may play Deep Rooted Evil from your banished zone.  **Blood Debt** *(At the beginning of your end phase, if Deep Rooted Evil is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON123.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Deep Rooted Evil",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 3,
    
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "mark-of-the-beast-yellow",
    functionalText: `If Mark of the Beast would be put into your graveyard from anywhere, instead banish it.  **Blood Debt** *(At the beginning of your end phase, if Mark of the Beast is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON124.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Mark of the Beast",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "shadow-of-blasphomet-red",
    functionalText: `Draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, search your deck for a card with **blood debt**, banish it, then shuffle your deck.  **Blood Debt** *(At the beginning of your end phase, if Shadow of Blasmophet is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/KLUiCIJEFKdt8QM545A4g.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Shadow of Blasphomet",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 2,
    
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "endless-maw-red",
    functionalText: `As an additional cost to play Endless Maw, banish 3 random cards from your graveyard.  If a card with 6 or more {p} is banished this way, Endless maw gains +3{p}.  **Blood Debt** *(At the beginning of your end phase, if Endless Maw is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV012.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Endless Maw",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "endless-maw-yellow",
    functionalText: `As an additional cost to play Endless Maw, banish 3 random cards from your graveyard.  If a card with 6 or more {p} is banished this way, Endless maw gains +3{p}.  **Blood Debt** *(At the beginning of your end phase, if Endless Maw is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/3HnONyYapgg32MEXbFXUB.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Endless Maw",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "endless-maw-blue",
    functionalText: `As an additional cost to play Endless Maw, banish 3 random cards from your graveyard.  If a card with 6 or more {p} is banished this way, Endless maw gains +3{p}.  **Blood Debt** *(At the beginning of your end phase, if Endless Maw is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/SAy5p6Yoa21bM89UuG8l4.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Endless Maw",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "writhing-beast-hulk-red",
    functionalText: `As an additional cost to play Writhing Beast Hulk, banish 3 random cards from your graveyard.  If a card with 6 or more {p} is banished this way, Writhing Beast Hulk gains **dominate.** *(The defending hero can’t defend Writhing Beast Hulk with more than 1 card from their hand.)*  **Blood Debt** *(At the beginning of your end phase, if Writhing Beast Hulk is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV016.width-450.png",
    keywords: [Keyword.Dominate,Keyword.BloodDebt],
    name: "Writhing Beast Hulk",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "writhing-beast-hulk-yellow",
    functionalText: `As an additional cost to play Writhing Beast Hulk, banish 3 random cards from your graveyard.  If a card with 6 or more {p} is banished this way, Writhing Beast Hulk gains **dominate.** *(The defending hero can’t defend Writhing Beast Hulk with more than 1 card from their hand.)*  **Blood Debt** *(At the beginning of your end phase, if Writhing Beast Hulk is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON130.width-450.png",
    keywords: [Keyword.Dominate,Keyword.BloodDebt],
    name: "Writhing Beast Hulk",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "writhing-beast-hulk-blue",
    functionalText: `As an additional cost to play Writhing Beast Hulk, banish 3 random cards from your graveyard.  If a card with 6 or more {p} is banished this way, Writhing Beast Hulk gains **dominate.** *(The defending hero can’t defend Writhing Beast Hulk with more than 1 card from their hand.)*  **Blood Debt** *(At the beginning of your end phase, if Writhing Beast Hulk is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON131.width-450.png",
    keywords: [Keyword.Dominate,Keyword.BloodDebt],
    name: "Writhing Beast Hulk",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "convulsions-from-the-bellows-of-hell-red",
    functionalText: `As an additional cost to play Convulsions from the Bellows of Hell, banish 3 random cards from your graveyard.  If a card with 6 or more {p} is banished this way, the next attack action card you play this turn gains +3{p} and **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON132.width-450.png",
    keywords: [],
    name: "Convulsions from the Bellows of Hell",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "convulsions-from-the-bellows-of-hell-yellow",
    functionalText: `As an additional cost to play Convulsions from the Bellows of Hell, banish 3 random cards from your graveyard.  If a card with 6 or more {p} is banished this way, the next attack action card you play this turn gains +2{p} and **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON133.width-450.png",
    keywords: [],
    name: "Convulsions from the Bellows of Hell",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "convulsions-from-the-bellows-of-hell-blue",
    functionalText: `As an additional cost to play Convulsions from the Bellows of Hell, banish 3 random cards from your graveyard.  If a card with 6 or more {p} is banished this way, the next attack action card you play this turn gains +1{p} and **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV019.width-450.png",
    keywords: [],
    name: "Convulsions from the Bellows of Hell",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "boneyard-marauder-red",
    functionalText: `As an additional cost to play Boneyard Marauder, banish 3 random cards from your graveyard.  **Blood Debt** *(At the beginning of your end phase, if Boneyard Marauder is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB023.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Boneyard Marauder",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "boneyard-marauder-yellow",
    functionalText: `As an additional cost to play Boneyard Marauder, banish 3 random cards from your graveyard.  **Blood Debt** *(At the beginning of your end phase, if Boneyard Marauder is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON136.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Boneyard Marauder",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "boneyard-marauder-blue",
    functionalText: `As an additional cost to play Boneyard Marauder, banish 3 random cards from your graveyard.  **Blood Debt** *(At the beginning of your end phase, if Boneyard Marauder is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV018.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Boneyard Marauder",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "deadwood-rumbler-red",
    functionalText: `Draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, banish a card from a graveyard.  **Blood Debt** *(At the beginning of your end phase, if Deadwood Rumbler is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV010.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Deadwood Rumbler",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 3,
    
    fusions: [],
    pitch: 1,
    power: 8,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "deadwood-rumbler-yellow",
    functionalText: `Draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, banish a card from a graveyard.  **Blood Debt** *(At the beginning of your end phase, if Deadwood Rumbler is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON139.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Deadwood Rumbler",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 3,
    
    fusions: [],
    pitch: 2,
    power: 7,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "deadwood-rumbler-blue",
    functionalText: `Draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, banish a card from a graveyard.  **Blood Debt** *(At the beginning of your end phase, if Deadwood Rumbler is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV020.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Deadwood Rumbler",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 3,
    
    fusions: [],
    pitch: 3,
    power: 6,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "dread-screamer-red",
    functionalText: `As an additional cost to play Dread Screamer, banish 3 random cards from your graveyard  If a card with 6 or more {p} is banished this way, Dread Screamer gains **go again.**.  **Blood Debt** *(At the beginning of your end phase, if Dread Screamer is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV011.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Dread Screamer",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "dread-screamer-yellow",
    functionalText: `As an additional cost to play Dread Screamer, banish 3 random cards from your graveyard  If a card with 6 or more {p} is banished this way, Dread Screamer gains **go again.**.  **Blood Debt** *(At the beginning of your end phase, if Dread Screamer is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON142.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Dread Screamer",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "dread-screamer-blue",
    functionalText: `As an additional cost to play Dread Screamer, banish 3 random cards from your graveyard  If a card with 6 or more {p} is banished this way, Dread Screamer gains **go again.**.  **Blood Debt** *(At the beginning of your end phase, if Dread Screamer is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV021.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Dread Screamer",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "graveling-growl-red",
    functionalText: `Play Graveling Growl only if a card with 6 or more {p} has been put into your banished zone this turn.  **Blood Debt** *(At the beginning of your end phase, if Graveling Growl is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV013.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Graveling Growl",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "graveling-growl-yellow",
    functionalText: `Play Graveling Growl only if a card with 6 or more {p} has been put into your banished zone this turn.  **Blood Debt** *(At the beginning of your end phase, if Graveling Growl is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON145.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Graveling Growl",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "graveling-growl-blue",
    functionalText: `Play Graveling Growl only if a card with 6 or more {p} has been put into your banished zone this turn.  **Blood Debt** *(At the beginning of your end phase, if Graveling Growl is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON146.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Graveling Growl",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "hungering-slaughterbeast-red",
    functionalText: `As an additional cost to play Hungering Slaughterbeast, banish 3 random cards from your graveyard.  **Blood Debt** *(At the beginning of your end phase, if Hungering Slaughterbeast is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV014.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Hungering Slaughterbeast",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "hungering-slaughterbeast-yellow",
    functionalText: `As an additional cost to play Hungering Slaughterbeast, banish 3 random cards from your graveyard.  **Blood Debt** *(At the beginning of your end phase, if Hungering Slaughterbeast is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV017.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Hungering Slaughterbeast",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "hungering-slaughterbeast-blue",
    functionalText: `As an additional cost to play Hungering Slaughterbeast, banish 3 random cards from your graveyard.  **Blood Debt** *(At the beginning of your end phase, if Hungering Slaughterbeast is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON149.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Hungering Slaughterbeast",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "unwordly-bellow-red",
    functionalText: `As an additional cost to play Unworldly Bellow, banish 3 random cards from your graveyard.  The next Brute or Shadow attack action card you play this turn gains +4{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV015.width-450.png",
    keywords: [],
    name: "Unwordly Bellow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "unwordly-bellow-yellow",
    functionalText: `As an additional cost to play Unworldly Bellow, banish 3 random cards from your graveyard.  The next Brute or Shadow attack action card you play this turn gains +3{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON151.width-450.png",
    keywords: [],
    name: "Unwordly Bellow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "unwordly-bellow-blue",
    functionalText: `As an additional cost to play Unworldly Bellow, banish 3 random cards from your graveyard.  The next Brute or Shadow attack action card you play this turn gains +2{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV022.width-450.png",
    keywords: [],
    name: "Unwordly Bellow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Brute Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "shadow-of-ursur-blue",
    functionalText: `You may play Shadow of Ursur from your banished zone.  As an additional cost to play Shadow of Ursur, you may banish a card with blood debt from your hand. If you do, Shadow of Ursur gains **go again.**  **Blood Debt** *(At the beginning of your end phase, if Shadow of Ursur is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON156.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Shadow of Ursur",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "dimenxxional-crossroads-yellow",
    functionalText: `**Go again**  Whenever you play an attack action card or a 'non-attack' action card from the banished zone, if you haven't played another card of that type this turn, deal 1 arcane damage to target hero.  If you lose {h} during your turn, destroy Dimenxxional Crossroads. *(Damage causes loss of {h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON157.width-450.png",
    keywords: [],
    name: "Dimenxxional Crossroads",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Runeblade,
    identifier: "unhallowed-rites-red",
    functionalText: `If you have played a 'non-attack' action card this turn, you may play Unhallowed Rites from your banished zone.  You may put a 'non-attack' action card with blood debt from your graveyard on the bottom of your deck.  **Blood Debt** *(At the beginning of your end phase, if Unhallowed Rites is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN015.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Unhallowed Rites",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "unhallowed-rites-yellow",
    functionalText: `If you have played a 'non-attack' action card this turn, you may play Unhallowed Rites from your banished zone.  You may put a 'non-attack' action card with blood debt from your graveyard on the bottom of your deck.  **Blood Debt** *(At the beginning of your end phase, if Unhallowed Rites is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON160.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Unhallowed Rites",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "unhallowed-rites-blue",
    functionalText: `If you have played a 'non-attack' action card this turn, you may play Unhallowed Rites from your banished zone.  You may put a 'non-attack' action card with blood debt from your graveyard on the bottom of your deck.  **Blood Debt** *(At the beginning of your end phase, if Unhallowed Rites is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON161.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Unhallowed Rites",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "dimenxxional-gateway-red",
    functionalText: `Opt 3 *(Look at the top 3 cards of your deck. You may put them on the top and/or bottom in any order.)*  Reveal the top card of your deck. If it's a Runeblade card, deal 1 arcane damage to each opposing hero. If it's a Shadow card, you may banish it.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON162.width-450.png",
    keywords: [Keyword.Opt],
    name: "Dimenxxional Gateway",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "dimenxxional-gateway-yellow",
    functionalText: `Opt 2 *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*  Reveal the top card of your deck. If it's a Runeblade card, deal 1 arcane damage to each opposing hero. If it's a Shadow card, you may banish it.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON163.width-450.png",
    keywords: [Keyword.Opt],
    name: "Dimenxxional Gateway",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "dimenxxional-gateway-blue",
    functionalText: `Opt 1 *(Look at the top card of your deck. You may it on the bottom.)*  Reveal the top card of your deck. If it's a Runeblade card, deal 1 arcane damage to each opposing hero. If it's a Shadow card, you may banish it.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON164.width-450.png",
    keywords: [Keyword.Opt],
    name: "Dimenxxional Gateway",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "seeping-shadows-red",
    functionalText: `You may play Seeping Shadows from your banished zone.  The next attack action card with cost 2 or less you play this turns gains +1{p} and **go again.**  **Go again**  **Blood Debt** *(At the beginning of your end phase, if Seeping Shadows is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON165.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Seeping Shadows",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "seeping-shadows-yellow",
    functionalText: `You may play Seeping Shadows from your banished zone.  The next attack action card with cost 1 or less you play this turns gains +1{p} and **go again.**  **Go again**  **Blood Debt** *(At the beginning of your end phase, if Seeping Shadows is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN017.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Seeping Shadows",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "seeping-shadows-blue",
    functionalText: `You may play Seeping Shadows from your banished zone.  The next attack action card with cost 0 you play this turns gains +1{p} and **go again.**  **Go again**  **Blood Debt** *(At the beginning of your end phase, if Seeping Shadows is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON167.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Seeping Shadows",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "bounding-demigon-red",
    functionalText: `If you have played a 'non-attack' action card this turn, you may play Bounding Demigon from your banished zone. If you do, it gains +1{p}.  **Blood Debt** *(At the beginning of your end phase, if Bounding Demigon is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN009.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Bounding Demigon",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "bounding-demigon-yellow",
    functionalText: `If you have played a 'non-attack' action card this turn, you may play Bounding Demigon from your banished zone. If you do, it gains +1{p}.  **Blood Debt** *(At the beginning of your end phase, if Bounding Demigon is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON169.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Bounding Demigon",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "bounding-demigon-blue",
    functionalText: `If you have played a 'non-attack' action card this turn, you may play Bounding Demigon from your banished zone. If you do, it gains +1{p}.  **Blood Debt** *(At the beginning of your end phase, if Bounding Demigon is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON170.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Bounding Demigon",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "piercing-shadow-vise-red",
    functionalText: `You may play Piercing Shadow Vise from your banished zone.  If you have dealt arcane damage to an opposing hero this turn, Piercing Shadow Vise gains +2 {p}.  **Blood Debt** *(At the beginning of your end phase, if Piercing Shadow Vise is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN010.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Piercing Shadow Vise",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "piercing-shadow-vise-yellow",
    functionalText: `You may play Piercing Shadow Vise from your banished zone.  If you have dealt arcane damage to an opposing hero this turn, Piercing Shadow Vise gains +2 {p}.  **Blood Debt** *(At the beginning of your end phase, if Piercing Shadow Vise is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON172.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Piercing Shadow Vise",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "piercing-shadow-vise-blue",
    functionalText: `You may play Piercing Shadow Vise from your banished zone.  If you have dealt arcane damage to an opposing hero this turn, Piercing Shadow Vise gains +2 {p}.  **Blood Debt** *(At the beginning of your end phase, if Piercing Shadow Vise is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN018.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Piercing Shadow Vise",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "rift-bind-red",
    functionalText: `You may play Rift Bind from your banished zone. If you do, it gains +X{p}, where X is the number of 'non-attack' action cards you have played this turn.  **Blood Debt** *(At the beginning of your end phase, if Rift Bind is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN011.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Rift Bind",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "rift-bind-yellow",
    functionalText: `You may play Rift Bind from your banished zone. If you do, it gains +X{p}, where X is the number of 'non-attack' action cards you have played this turn.  **Blood Debt** *(At the beginning of your end phase, if Rift Bind is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON175.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Rift Bind",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "rift-bind-blue",
    functionalText: `You may play Rift Bind from your banished zone. If you do, it gains +X{p}, where X is the number of 'non-attack' action cards you have played this turn.  **Blood Debt** *(At the beginning of your end phase, if Rift Bind is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN019.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Rift Bind",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "rifted-torment-red",
    functionalText: `You may play Rifted Torment from your banished zone. If you do, deal 1 arcane damage to target hero.  **Blood Debt** *(At the beginning of your end phase, if Rifted Torment is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN012.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Rifted Torment",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "rifted-torment-yellow",
    functionalText: `You may play Rifted Torment from your banished zone. If you do, deal 1 arcane damage to target hero.  **Blood Debt** *(At the beginning of your end phase, if Rifted Torment is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON178.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Rifted Torment",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "rifted-torment-blue",
    functionalText: `You may play Rifted Torment from your banished zone. If you do, deal 1 arcane damage to target hero.  **Blood Debt** *(At the beginning of your end phase, if Rifted Torment is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/cardfaces/2021-MON-CHN/CHN020.png",
    keywords: [Keyword.BloodDebt],
    name: "Rifted Torment",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "rip-through-reality-red",
    functionalText: `You may play Rip Through Reality from your banished zone.  If you have dealt arcane damage to an opposing hero this turn, Rip Through Reality gains ((go again.**  **Blood Debt** *(At the beginning of your end phase, if Rip Through Reality is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN013.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Rip Through Reality",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "rip-through-reality-yellow",
    functionalText: `You may play Rip Through Reality from your banished zone.  If you have dealt arcane damage to an opposing hero this turn, Rip Through Reality gains ((go again.**  **Blood Debt** *(At the beginning of your end phase, if Rip Through Reality is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON181.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Rip Through Reality",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "rip-through-reality-blue",
    functionalText: `You may play Rip Through Reality from your banished zone.  If you have dealt arcane damage to an opposing hero this turn, Rip Through Reality gains ((go again.**  **Blood Debt** *(At the beginning of your end phase, if Rip Through Reality is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON182.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Rip Through Reality",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action - Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "seeds-of-agony-red",
    functionalText: `You may play Seeds of Agony from your banished zone.  The next attack action card with cost 2 or less you play this turn gains "When you attack with this, deal 1 arcane damage to target hero.”  **Go again**  **Blood Debt** *(At the beginning of your end phase, if Seeds of Agony is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN014.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Seeds of Agony",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "seeds-of-agony-yellow",
    functionalText: `You may play Seeds of Agony from your banished zone.  The next attack action card with cost 1 or less you play this turn gains "When you attack with this, deal 1 arcane damage to target hero.”  **Go again**  **Blood Debt** *(At the beginning of your end phase, if Seeds of Agony is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN016.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Seeds of Agony",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "seeds-of-agony-blue",
    functionalText: `You may play Seeds of Agony from your banished zone.  The next attack action card with cost 0 or less you play this turn gains "When you attack with this, deal 1 arcane damage to target hero.”  **Go again**  **Blood Debt** *(At the beginning of your end phase, if Seeds of Agony is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON185.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Seeds of Agony",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Runeblade Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "mutated-mass-blue",
    functionalText: `You may play Mutated Mass from your banished zone.  Mutated Mass's {p} and {d} is equal to twice the number of cards in your pitch zone with different costs.  **Blood Debt** *(At the beginning of your end phase, if Mutated Mass is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON191.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Mutated Mass",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
    cost: 1,
    
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Shadow],
    
    specialDefense: "*",
    specialPower: "*",
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "shadow-puppetry-red",
    functionalText: `The next attack action card you play this turn gains +1 {p}, **go again** and "If this attack hits, look at the top card of your deck. You may banish it.”  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON193.width-450.png",
    keywords: [],
    name: "Shadow Puppetry",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "tome-of-torment-red",
    functionalText: `You may play Tome of Torment from your banished zone.  Draw a card.  **Blood Debt**  *(At the beginning of your end phase, if Tome of Torment is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON194.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Tome of Torment",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action",
    cost: 0,
    
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "consuming-aftermath-red",
    functionalText: `As an additional cost to play Consuming Aftermath, you may banish a card from your hand. If a Shadow card is banished this way, Consuming Aftermath gains **dominate.** *(The defending hero can't defend Consuming Aftermath with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV023.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Consuming Aftermath",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "consuming-aftermath-yellow",
    functionalText: `As an additional cost to play Consuming Aftermath, you may banish a card from your hand. If a Shadow card is banished this way, Consuming Aftermath gains **dominate.** *(The defending hero can't defend Consuming Aftermath with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON196.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Consuming Aftermath",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "consuming-aftermath-blue",
    functionalText: `As an additional cost to play Consuming Aftermath, you may banish a card from your hand. If a Shadow card is banished this way, Consuming Aftermath gains **dominate.** *(The defending hero can't defend Consuming Aftermath with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON197.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Consuming Aftermath",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "soul-harvest-blue",
    functionalText: `**Legendary Levia Specialization** *(You may only have 1 Soul Harvest in your deck and only if your hero is Levia.)*  As an additional cost to play Soul Harvest, banish 6 cards from your graveyard. It gains +1{p} for each card with **blood debt** banished this way.  If Soul Harvest hits a hero, they banish all cards in their soul and lose {h} equal to the number of cards banished this way.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV008.width-450.png",
    keywords: [Keyword.Legendary,Keyword.Specialization],
    name: "Soul Harvest",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
    cost: 6,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 6,
    talents: [Talent.Shadow],
    
    
    
    specialization: Hero.Levia,
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "soul-reaping-red",
    functionalText: `**Legendary Chane Specialization** *(You may only have 1 Soul Reaping in your deck and only if your hero is Chane.)*  You may banish 1 or more cards from your hand rather than pay Soul Reaping's {r} cost. If you do, gain {r} for each card with **blood debt** banished this way.  While Soul Reaping is attacking a hero with 1 or more cards in their soul, it has go again.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN008.width-450.png",
    keywords: [Keyword.Legendary,Keyword.Specialization],
    name: "Soul Reaping",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
    cost: 6,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [Talent.Shadow],
    
    
    
    specialization: Hero.Chane,
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "howl-from-beyond-red",
    functionalText: `You may play Howl from Beyond from your banished zone.  The next attack action card you play this turn gains +3{p}.  **Go again**  **Blood Debt** *(At the beginning of your end phase, if Howl from Beyond is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN022.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Howl from Beyond",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "howl-from-beyond-yellow",
    functionalText: `You may play Howl from Beyond from your banished zone.  The next attack action card you play this turn gains +2{p}.  **Go again**  **Blood Debt** *(At the beginning of your end phase, if Howl from Beyond is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON201.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Howl from Beyond",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "howl-from-beyond-blue",
    functionalText: `You may play Howl from Beyond from your banished zone.  The next attack action card you play this turn gains +1{p}.  **Go again**  **Blood Debt** *(At the beginning of your end phase, if Howl from Beyond is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON202.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Howl from Beyond",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "ghostly-visit-red",
    functionalText: `You may play Ghostly Visit from your banished zone.  **Blood Debt** *(At the beginning of your end phase, if Ghostly Visit is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN021.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Ghostly Visit",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "ghostly-visit-yellow",
    functionalText: `You may play Ghostly Visit from your banished zone.  **Blood Debt** *(At the beginning of your end phase, if Ghostly Visit is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON204.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Ghostly Visit",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "ghostly-visit-blue",
    functionalText: `You may play Ghostly Visit from your banished zone.  **Blood Debt** *(At the beginning of your end phase, if Ghostly Visit is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON205.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Ghostly Visit",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "lunartide-plunderer-red",
    functionalText: `If Lunartide Plunderer hits a hero, banish Lunartide Plunderer and a card from their soul.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON206.width-450.png",
    keywords: [],
    name: "Lunartide Plunderer",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "lunartide-plunderer-yellow",
    functionalText: `If Lunartide Plunderer hits a hero, banish Lunartide Plunderer and a card from their soul.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN023.width-450.png",
    keywords: [],
    name: "Lunartide Plunderer",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "lunartide-plunderer-blue",
    functionalText: `If Lunartide Plunderer hits a hero, banish Lunartide Plunderer and a card from their soul.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON208.width-450.png",
    keywords: [],
    name: "Lunartide Plunderer",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "void-wraith-red",
    functionalText: `You may play Void Wraith from your banished zone.  **Blood Debt** *(At the beginning of your end phase, if Void Wraith is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON209.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Void Wraith",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "void-wraith-yellow",
    functionalText: `You may play Void Wraith from your banished zone.  **Blood Debt** *(At the beginning of your end phase, if Void Wraith is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON210.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Void Wraith",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "void-wraith-blue",
    functionalText: `You may play Void Wraith from your banished zone.  **Blood Debt** *(At the beginning of your end phase, if Void Wraith is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON211.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Void Wraith",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "spew-shadow-red",
    functionalText: `Choose an attack action card with cost 2 or less in your banished zone. You may play it this turn. If it attacks a Light hero, it gains +2{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON212.width-450.png",
    keywords: [],
    name: "Spew Shadow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "spew-shadow-yellow",
    functionalText: `Choose an attack action card with cost 1 or less in your banished zone. You may play it this turn. If it attacks a Light hero, it gains +2{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN024.width-450.png",
    keywords: [],
    name: "Spew Shadow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "spew-shadow-blue",
    functionalText: `Choose an attack action card with cost 0 or less in your banished zone. You may play it this turn. If it attacks a Light hero, it gains +2{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON214.width-450.png",
    keywords: [],
    name: "Spew Shadow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Shadow Action",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Shadow],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "tear-limb-from-limb-blue",
    functionalText: `Draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, the next Brute attack action card you play this turn gains +X{p}, where X is its base {p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON222.width-450.png",
    keywords: [],
    name: "Tear Limb from Limb",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 2,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "pulping-red",
    functionalText: `Draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Pulping gains **dominate.** *(The defending hero can't defend Pulping with more than 1 card from their hand.)*  While Pulping is defended by less than 2 non-equipment cards, it has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS051.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Pulping",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "pulping-yellow",
    functionalText: `Draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Pulping gains **dominate.** *(The defending hero can't defend Pulping with more than 1 card from their hand.)*  While Pulping is defended by less than 2 non-equipment cards, it has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS052.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Pulping",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "pulping-blue",
    functionalText: `Draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Pulping gains **dominate.** *(The defending hero can't defend Pulping with more than 1 card from their hand.)*  While Pulping is defended by less than 2 non-equipment cards, it has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS053.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Pulping",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "smash-with-big-tree-red",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV026.width-450.png",
    keywords: [],
    name: "Smash with Big Tree",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "smash-with-big-tree-yellow",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV027.width-450.png",
    keywords: [],
    name: "Smash with Big Tree",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "smash-with-big-tree-blue",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON228.width-450.png",
    keywords: [],
    name: "Smash with Big Tree",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "sonata-arcanix-red",
    functionalText: `Reveal the top X+3 cards of your deck.  For each 'non-attack' action card revealed this way, you may put an attack action card revealed this way into your hand. Then deal arcane damage to target hero equal to the number of cards put into your hand this way.  Shuffle your deck. Banish Sonata Arcanix.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON231.width-450.png",
    keywords: [],
    name: "Sonata Arcanix",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Runeblade Action",
    
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    specialCost: "XX",
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "vexing-malice-red",
    functionalText: `Deal 2 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS057.width-450.png",
    keywords: [],
    name: "Vexing Malice",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "vexing-malice-yellow",
    functionalText: `Deal 2 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS058.width-450.png",
    keywords: [],
    name: "Vexing Malice",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "vexing-malice-blue",
    functionalText: `Deal 2 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS059.width-450.png",
    keywords: [],
    name: "Vexing Malice",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "arcanic-crackle-red",
    functionalText: `Deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON235.width-450.png",
    keywords: [],
    name: "Arcanic Crackle",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "arcanic-crackle-yellow",
    functionalText: `Deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON236.width-450.png",
    keywords: [],
    name: "Arcanic Crackle",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "arcanic-crackle-blue",
    functionalText: `Deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN027.width-450.png",
    keywords: [],
    name: "Arcanic Crackle",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "exude-confidence-red",
    functionalText: `While Exude Confidence isn't defended by a card with equal or greater {p}, the defending hero can't play or activate instants or defense reactions this combat chain.  **Instant** - {r}{r}{r}: Exude Confidence gains +2{p}. Activate this ability only while Exude Confidence is attacking.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON245.width-450.png",
    keywords: [],
    name: "Exude Confidence",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "nourishing-emptiness-red",
    functionalText: `While there are no attack action cards in your graveyard, Nourishing Emptiness has **dominate** and "If this hits, your hero gains +1{i} until end of turn."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON246.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Nourishing Emptiness",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "rouse-the-ancients-blue",
    functionalText: `As an additional cost to play Rouse the Ancients, you may reveal any number of attack action cards from your hand with 13 or more total {p}. If you do, Rouse the Ancients gains +7{p} and **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON247.width-450.png",
    keywords: [],
    name: "Rouse the Ancients",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "out-muscle-red",
    functionalText: `While Out Muscle isn't defended by a card with equal or greater {p}, it has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON248.width-450.png",
    keywords: [],
    name: "Out Muscle",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "out-muscle-yellow",
    functionalText: `While Out Muscle isn't defended by a card with equal or greater {p}, it has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON249.width-450.png",
    keywords: [],
    name: "Out Muscle",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "out-muscle-blue",
    functionalText: `While Out Muscle isn't defended by a card with equal or greater {p}, it has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON250.width-450.png",
    keywords: [],
    name: "Out Muscle",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "seek-horizon-red",
    functionalText: `As an additional cost to play Seek Horizon, you may put a card from your hand on top of your deck. If you do, Seek Horizon gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON251.width-450.png",
    keywords: [],
    name: "Seek Horizon",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "seek-horizon-yellow",
    functionalText: `As an additional cost to play Seek Horizon, you may put a card from your hand on top of your deck. If you do, Seek Horizon gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON252.width-450.png",
    keywords: [],
    name: "Seek Horizon",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "seek-horizon-blue",
    functionalText: `As an additional cost to play Seek Horizon, you may put a card from your hand on top of your deck. If you do, Seek Horizon gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON253.width-450.png",
    keywords: [],
    name: "Seek Horizon",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "tremor-of-íarathael-red",
    functionalText: `If a card has been put into your banished zone this turn, Tremor of íArathael gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON254.width-450.png",
    keywords: [],
    name: "Tremor of íArathael",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "tremor-of-íarathael-yellow",
    functionalText: `If a card has been put into your banished zone this turn, Tremor of íArathael gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON255.width-450.png",
    keywords: [],
    name: "Tremor of íArathael",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "tremor-of-íarathael-blue",
    functionalText: `If a card has been put into your banished zone this turn, Tremor of íArathael gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON256.width-450.png",
    keywords: [],
    name: "Tremor of íArathael",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "captains-call-red",
    functionalText: `The next attack action card with cost 2 or less you play this turn gains +2{p}.  The next attack action card with cost 2 or less you play this turn gains **go again.**  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON260.width-450.png",
    keywords: [],
    name: "Captain’s Call",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "captains-call-yellow",
    functionalText: `The next attack action card with cost 1 or less you play this turn gains +2{p}.  The next attack action card with cost 1 or less you play this turn gains **go again.**  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON261.width-450.png",
    keywords: [],
    name: "Captain’s Call",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "captains-call-blue",
    functionalText: `The next attack action card with cost 0 or less you play this turn gains +2{p}.  The next attack action card with cost 0 or less you play this turn gains **go again.**  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON262.width-450.png",
    keywords: [],
    name: "Captain’s Call",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "adrenaline-rush-red",
    functionalText: `When you play Adrenaline Rush, if you have less {h} than an opposing hero, it gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON263.width-450.png",
    keywords: [],
    name: "Adrenaline Rush",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "adrenaline-rush-yellow",
    functionalText: `When you play Adrenaline Rush, if you have less {h} than an opposing hero, it gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON264.width-450.png",
    keywords: [],
    name: "Adrenaline Rush",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "adrenaline-rush-blue",
    functionalText: `When you play Adrenaline Rush, if you have less {h} than an opposing hero, it gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON265.width-450.png",
    keywords: [],
    name: "Adrenaline Rush",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "belittle-red",
    functionalText: `As an additional cost to play Belittle, you may reveal an attack action card with 3 or less base {p} from your hand. If you do, search your deck for a card named Minnowism, reveal it, put it into your hand, then shuffle your deck.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON266.width-450.png",
    keywords: [],
    name: "Belittle",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "belittle-yellow",
    functionalText: `As an additional cost to play Belittle, you may reveal an attack action card with 3 or less base {p} from your hand. If you do, search your deck for a card named Minnowism, reveal it, put it into your hand, then shuffle your deck.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON267.width-450.png",
    keywords: [],
    name: "Belittle",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "belittle-blue",
    functionalText: `As an additional cost to play Belittle, you may reveal an attack action card with 3 or less base {p} from your hand. If you do, search your deck for a card named Minnowism, reveal it, put it into your hand, then shuffle your deck.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON268.width-450.png",
    keywords: [],
    name: "Belittle",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "brandish-red",
    functionalText: `If Brandish hits, your next weapon attack this turn gains +1{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON269.width-450.png",
    keywords: [],
    name: "Brandish",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "brandish-yellow",
    functionalText: `If Brandish hits, your next weapon attack this turn gains +1{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON270.width-450.png",
    keywords: [],
    name: "Brandish",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "brandish-blue",
    functionalText: `If Brandish hits, your next weapon attack this turn gains +1{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON271.width-450.png",
    keywords: [],
    name: "Brandish",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "frontline-scout-red",
    functionalText: `You may look at the defending hero's hand.  If Frontline Scout is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON272.width-450.png",
    keywords: [],
    name: "Frontline Scout",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "frontline-scout-yellow",
    functionalText: `You may look at the defending hero's hand.  If Frontline Scout is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON273.width-450.png",
    keywords: [],
    name: "Frontline Scout",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "frontline-scout-blue",
    functionalText: `You may look at the defending hero's hand.  If Frontline Scout is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON274.width-450.png",
    keywords: [],
    name: "Frontline Scout",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "overload-red",
    functionalText: `**Dominate** *(The defending hero can’t defend Overload with more than 1 card from their hand.)*  If Overload hits, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON275.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Overload",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "overload-yellow",
    functionalText: `**Dominate** *(The defending hero can’t defend Overload with more than 1 card from their hand.)*  If Overload hits, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON276.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Overload",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "overload-blue",
    functionalText: `**Dominate** *(The defending hero can’t defend Overload with more than 1 card from their hand.)*  If Overload hits, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON277.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Overload",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "pound-for-pound-red",
    functionalText: `When you play Pound for Pound, if you have less {h} than an opposing hero, it gains **dominate.** *(The defending hero can't defend Pound for Pound with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON278.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Pound for Pound",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "pound-for-pound-yellow",
    functionalText: `When you play Pound for Pound, if you have less {h} than an opposing hero, it gains **dominate.** *(The defending hero can't defend Pound for Pound with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON279.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Pound for Pound",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "pound-for-pound-blue",
    functionalText: `When you play Pound for Pound, if you have less {h} than an opposing hero, it gains **dominate.** *(The defending hero can't defend Pound for Pound with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON280.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Pound for Pound",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "rally-the-rearguard-red",
    functionalText: `**Once per Turn Instant** - Discard a card: Rally the Rearguard gains +3{d}. Activate this ability only while Rally the Rearguard is defending.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV028.width-450.png",
    keywords: [],
    name: "Rally the Rearguard",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "rally-the-rearguard-yellow",
    functionalText: `**Once per Turn Instant** - Discard a card: Rally the Rearguard gains +3{d}. Activate this ability only while Rally the Rearguard is defending.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON282.width-450.png",
    keywords: [],
    name: "Rally the Rearguard",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "rally-the-rearguard-blue",
    functionalText: `**Once per Turn Instant** - Discard a card: Rally the Rearguard gains +3{d}. Activate this ability only while Rally the Rearguard is defending.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV029.width-450.png",
    keywords: [],
    name: "Rally the Rearguard",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "stony-wootonhog-red",
    functionalText: `While Stony Woottonhog is defended by less than 2 non-equipment cards, it has +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON284.width-450.png",
    keywords: [],
    name: "Stony Wootonhog",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "stony-wootonhog-yellow",
    functionalText: `While Stony Woottonhog is defended by less than 2 non-equipment cards, it has +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON285.width-450.png",
    keywords: [],
    name: "Stony Wootonhog",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "stony-wootonhog-blue",
    functionalText: `While Stony Woottonhog is defended by less than 2 non-equipment cards, it has +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON286.width-450.png",
    keywords: [],
    name: "Stony Wootonhog",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "surging-militia-red",
    functionalText: `Surging Militia has +1{p} for each non-equipment card defending it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON287.width-450.png",
    keywords: [],
    name: "Surging Militia",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "surging-militia-yellow",
    functionalText: `Surging Militia has +1{p} for each non-equipment card defending it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON288.width-450.png",
    keywords: [],
    name: "Surging Militia",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "surging-militia-blue",
    functionalText: `Surging Militia has +1{p} for each non-equipment card defending it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON289.width-450.png",
    keywords: [],
    name: "Surging Militia",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "yinti-yanti-red",
    functionalText: `While Yinti Yanti is attacking and you control an aura, it has +1{p}.  While Yinto Yanti is defending and you control an aura, it has +1{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON290.width-450.png",
    keywords: [],
    name: "Yinti Yanti",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "yinti-yanti-yellow",
    functionalText: `While Yinti Yanti is attacking and you control an aura, it has +1{p}.  While Yinto Yanti is defending and you control an aura, it has +1{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON291.width-450.png",
    keywords: [],
    name: "Yinti Yanti",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "yinti-yanti-blue",
    functionalText: `While Yinti Yanti is attacking and you control an aura, it has +1{p}.  While Yinto Yanti is defending and you control an aura, it has +1{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON292.width-450.png",
    keywords: [],
    name: "Yinti Yanti",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "zealous-belting-red",
    functionalText: `While there is a card in your pitch zone with {p} greater than Zealous Belting's base {p}, Zealous Belting has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON293.width-450.png",
    keywords: [],
    name: "Zealous Belting",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "zealous-belting-yellow",
    functionalText: `While there is a card in your pitch zone with {p} greater than Zealous Belting's base {p}, Zealous Belting has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON294.width-450.png",
    keywords: [],
    name: "Zealous Belting",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "zealous-belting-blue",
    functionalText: `While there is a card in your pitch zone with {p} greater than Zealous Belting's base {p}, Zealous Belting has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON295.width-450.png",
    keywords: [],
    name: "Zealous Belting",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "minnowism-red",
    functionalText: `The next attack action card with 3 or less base {p} you play this turn gains +3{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON296.width-450.png",
    keywords: [],
    name: "Minnowism",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "minnowism-yellow",
    functionalText: `The next attack action card with 3 or less base {p} you play this turn gains +2{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON297.width-450.png",
    keywords: [],
    name: "Minnowism",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "minnowism-blue",
    functionalText: `The next attack action card with 3 or less base {p} you play this turn gains +1{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON298.width-450.png",
    keywords: [],
    name: "Minnowism",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "warmongers-recital-red",
    functionalText: `The next attack action card you play this turn gains +3{p} and "If this hits, put it on the bottom of your deck."  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN028.width-450.png",
    keywords: [],
    name: "Warmonger’s Recital",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "warmongers-recital-yellow",
    functionalText: `The next attack action card you play this turn gains +2{p} and "If this hits, put it on the bottom of your deck."  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN029.width-450.png",
    keywords: [],
    name: "Warmonger’s Recital",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "warmongers-recital-blue",
    functionalText: `The next attack action card you play this turn gains +1{p} and "If this hits, put it on the bottom of your deck."  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON301.width-450.png",
    keywords: [],
    name: "Warmonger’s Recital",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "talisman-of-dousing-yellow",
    functionalText: `*(Items stay in the arena until they are destroyed.)*  **Go again**  **Spellvoid 1** *(If your hero would be dealt arcane damage, you may destroy Talisman of Dousing instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON302.width-450.png",
    keywords: [Keyword.Spellvoid],
    name: "Talisman of Dousing",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "korshem-crossroad-of-elements",
    functionalText: `**Legendary** *(You may only have 1 Korshem, Crossroads of the Elements in your deck.)*  **Go again**  Whenever a hero reveals 1 or more cards, they choose 1; Gain {r}, or gain 1{h}, or their next attack this turn gains +1{p}, or the next action card they defend with this turn gains +1{d}.  At the beginning of the end phase, if no hero has gained {r} or {h} from a card effect and no card or token controlled by a hero has had {p} or {d} increased this turn, destroy Korshem, Crossroads of the Elements.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE000_vertical.width-450.png",
    keywords: [Keyword.Legendary],
    name: "Korshem, Crossroad of Elements",
    rarity: Rarity.Fabled,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Action – Landmark",
    cost: 1,
    
    fusions: [],
    
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Landmark,
  },{
    class: Class.Guardian,
    identifier: "endless-winter-red",
    functionalText: `**Oldhim Specialization** *(You may only have Endless Winter in your deck if your hero is Oldhim.)*  **Ice Fusion** *(As an additional cost to play Endless Winter, you may reveal an Ice card from your hand.)*  If Endless Winter was **fused**, whenever the defending hero adds a defending card to this chain link, create a Frostbite token under their control.  If Endless Winter hits a hero, until the end of their next turn, whenever they activate an ability, create a Frostbite token under their control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE004.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Fusion],
    name: "Endless Winter",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 4,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 1,
    power: 8,
    talents: [Talent.Elemental],
    
    
    
    specialization: Hero.Oldhim,
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "oaken-old-red",
    functionalText: `**Earth and Ice Fusion** *(As an additional cost to play Oaken Old, you may reveal an Earth and an Ice card from your hand.)*  If Oaken Old was **fused**, it gains +2{p}, **dominate**, and “If this hits a hero, they put 2 random cards from their hand on the bottom of their deck in any order.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE005.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Oaken Old",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [Fusion.Earth,Fusion.Ice],
    pitch: 1,
    power: 7,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "entangle-red",
    functionalText: `**Earth Fusion** *(As an additional cost to play Entangle, you may reveal an Earth card from your hand.)*  If Entangle was **fused**, it gains "If this hits a hero, their first attack during their next turn has -2{p}."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE013.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Entangle",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [Fusion.Earth],
    pitch: 1,
    power: 7,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "entangle-yellow",
    functionalText: `**Earth Fusion** *(As an additional cost to play Entangle, you may reveal an Earth card from your hand.)*  If Entangle was **fused**, it gains "If this hits a hero, their first attack during their next turn has -2{p}."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE014.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Entangle",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [Fusion.Earth],
    pitch: 2,
    power: 6,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "entangle-blue",
    functionalText: `**Earth Fusion** *(As an additional cost to play Entangle, you may reveal an Earth card from your hand.)*  If Entangle was **fused**, it gains "If this hits a hero, their first attack during their next turn has -2{p}."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD021.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Entangle",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [Fusion.Earth],
    pitch: 3,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "glacial-footsteps-red",
    functionalText: `**Ice Fusion** *(As an additional cost to play Glacial Footsteps, you may reveal an Ice card from your hand.)*  If Glacial Footsteps was **fused**, it gains **dominate.** *(The defending hero can't defend Glacial Footsteps with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD008.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Glacial Footsteps",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 6,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 1,
    power: 10,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "glacial-footsteps-yellow",
    functionalText: `**Ice Fusion** *(As an additional cost to play Glacial Footsteps, you may reveal an Ice card from your hand.)*  If Glacial Footsteps was **fused**, it gains **dominate.** *(The defending hero can't defend Glacial Footsteps with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE017.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Glacial Footsteps",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 6,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 2,
    power: 9,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "glacial-footsteps-blue",
    functionalText: `**Ice Fusion** *(As an additional cost to play Glacial Footsteps, you may reveal an Ice card from your hand.)*  If Glacial Footsteps was **fused**, it gains **dominate.** *(The defending hero can't defend Glacial Footsteps with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD010.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Glacial Footsteps",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 6,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 3,
    power: 8,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "mulch-red",
    functionalText: `**Earth Fusion** *(As an additional cost to play Mulch, you may reveal an Earth card from your hand.)*  If Mulch was **fused**, it gains "If this hits a hero, put a card from their arsenal on the bottom of their deck."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE019.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Mulch",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 4,
    defense: 3,
    fusions: [Fusion.Earth],
    pitch: 1,
    power: 8,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "mulch-yellow",
    functionalText: `**Earth Fusion** *(As an additional cost to play Mulch, you may reveal an Earth card from your hand.)*  If Mulch was **fused**, it gains "If this hits a hero, put a card from their arsenal on the bottom of their deck."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE020.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Mulch",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 4,
    defense: 3,
    fusions: [Fusion.Earth],
    pitch: 2,
    power: 7,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "mulch-blue",
    functionalText: `**Earth Fusion** *(As an additional cost to play Mulch, you may reveal an Earth card from your hand.)*  If Mulch was **fused**, it gains "If this hits a hero, put a card from their arsenal on the bottom of their deck."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD022.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Mulch",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 4,
    defense: 3,
    fusions: [Fusion.Earth],
    pitch: 3,
    power: 6,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "snow-under-red",
    functionalText: `**Ice Fusion** *(As an additional cost to play Snow Under, you may reveal an Ice card from your hand.)*  If Snow Under was **fused**, it gains "If Snow Under hits a hero, create a Frostbite token under their control."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD009.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Snow Under",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 1,
    power: 7,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "snow-under-yellow",
    functionalText: `**Ice Fusion** *(As an additional cost to play Snow Under, you may reveal an Ice card from your hand.)*  If Snow Under was **fused**, it gains "If Snow Under hits a hero, create a Frostbite token under their control."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE023.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Snow Under",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 2,
    power: 6,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "snow-under-blue",
    functionalText: `**Ice Fusion** *(As an additional cost to play Snow Under, you may reveal an Ice card from your hand.)*  If Snow Under was **fused**, it gains "If Snow Under hits a hero, create a Frostbite token under their control."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD011.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Snow Under",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 3,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "emerging-avalanche-red",
    functionalText: `**Ice Fusion** *(As an additional cost to play Emerging Avalanche, you may reveal an Ice card from your hand.)*  **Go again**  When Emerging Avalanche enters the arena, if it was **fused**, create a Frostbite token under target hero control.  At the beginning of your action phase, destroy Emerging Avalanche then the next attack action card you play this turn gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE025.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Emerging Avalanche",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 1,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "emerging-avalanche-yellow",
    functionalText: `**Ice Fusion** *(As an additional cost to play Emerging Avalanche, you may reveal an Ice card from your hand.)*  **Go again**  When Emerging Avalanche enters the arena, if it was **fused**, create a Frostbite token under target hero control.  At the beginning of your action phase, destroy Emerging Avalanche then the next attack action card you play this turn gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE026.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Emerging Avalanche",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 2,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "emerging-avalanche-blue",
    functionalText: `**Ice Fusion** *(As an additional cost to play Emerging Avalanche, you may reveal an Ice card from your hand.)*  **Go again**  When Emerging Avalanche enters the arena, if it was **fused**, create a Frostbite token under target hero control.  At the beginning of your action phase, destroy Emerging Avalanche then the next attack action card you play this turn gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE027.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Emerging Avalanche",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 3,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "strength-of-sequoia-red",
    functionalText: `**Earth Fusion** *(As an additional cost to play Strength of Sequoia, you may reveal an Earth card from your hand.)*  **Go again**  When Strength of Sequoia enters the arena, if it was **fused**, create a Seismic Surge token.  At the beginning of your action phase, destroy Strength of Sequoia then the next attack action card you play this turn gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS078.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Strength of Sequoia",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [Fusion.Earth],
    pitch: 1,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "strength-of-sequoia-yellow",
    functionalText: `**Earth Fusion** *(As an additional cost to play Strength of Sequoia, you may reveal an Earth card from your hand.)*  **Go again**  When Strength of Sequoia enters the arena, if it was **fused**, create a Seismic Surge token.  At the beginning of your action phase, destroy Strength of Sequoia then the next attack action card you play this turn gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE029.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Strength of Sequoia",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [Fusion.Earth],
    pitch: 2,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "strength-of-sequoia-blue",
    functionalText: `**Earth Fusion** *(As an additional cost to play Strength of Sequoia, you may reveal an Earth card from your hand.)*  **Go again**  When Strength of Sequoia enters the arena, if it was **fused**, create a Seismic Surge token.  At the beginning of your action phase, destroy Strength of Sequoia then the next attack action card you play this turn gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD023.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Strength of Sequoia",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Guardian Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [Fusion.Earth],
    pitch: 3,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Ranger,
    identifier: "frost-lock-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Ice Fusion** *(As an additional cost to play Frost Lock, you may reveal an Ice card from your hand.)*  Cards and activated abilities cost opposing heros an additional {r} this turn.  If Frost Lock was **fused**, it gains +1{p} and "If this hits a hero, until the end of their next turn they can't pitch or play cards with base cost 0."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE035.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Frost Lock",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 3,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "light-it-up-yellow",
    functionalText: `**Lexi Specialization** *(You may only have Light it Up in your deck if your hero is Lexi.)*  **Lightning Fusion** *(As an additional cost to play Light it Up, you may reveal a Lightning card from your hand.)*  If Light it Up was **fused**, it gains "If this hits a hero, deal 1 damage to them for each equipment they control."  If Light it Up deals damage to a hero equal to or greater than the number of equipment they control, equipment they control lose and can't gain activated abilities until the end of their next turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE036.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Fusion],
    name: "Light It Up",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 2,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    specialization: Hero.Lexi,
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "ice-storm-red",
    functionalText: `**Ice and Lightning Fusion** *(As an additional cost to play Ice Storm, you may reveal an Ice and a Lightning card from your hand.)*  Your next arrow attack this turn gains +3{p}.  If Ice Storm was **fused**, your next arrow attack this turn gains "If this hits a hero, deal 1 damage to them" and "Whenever this attack deals damage to a hero, create that many Frostbite tokens under their control."  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE037.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Ice Storm",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action",
    cost: 0,
    defense: 2,
    fusions: [Fusion.Ice,Fusion.Lightning],
    pitch: 1,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "cold-wave-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Ice Fusion** *(As an additional cost to play Cold Wave, you may reveal an Ice card from your hand.)*  If Cold Wave was **fused**, cards and activated abilities cost opposing heroes an additional {r} this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE038.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Cold Wave",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 1,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "cold-wave-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Ice Fusion** *(As an additional cost to play Cold Wave, you may reveal an Ice card from your hand.)*  If Cold Wave was **fused**, cards and activated abilities cost opposing heroes an additional {r} this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE039.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Cold Wave",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 2,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "cold-wave-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Ice Fusion** *(As an additional cost to play Cold Wave, you may reveal an Ice card from your hand.)*  If Cold Wave was **fused**, cards and activated abilities cost opposing heroes an additional {r} this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE040.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Cold Wave",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 3,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "snap-shot-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Lightning Fusion** *(As an additional cost to play Snap Shot, you may reveal a Lightning card from your hand.)*  If Snap Shot was **fused**, you may activate abilities of bows you control an additional time this turn and as though they were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI010.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Snap Shot",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 1,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "snap-shot-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Lightning Fusion** *(As an additional cost to play Snap Shot, you may reveal a Lightning card from your hand.)*  If Snap Shot was **fused**, you may activate abilities of bows you control an additional time this turn and as though they were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE042.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Snap Shot",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 2,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "snap-shot-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Lightning Fusion** *(As an additional cost to play Snap Shot, you may reveal a Lightning card from your hand.)*  If Snap Shot was **fused**, you may activate abilities of bows you control an additional time this turn and as though they were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE043.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Snap Shot",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 3,
    power: 2,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "blizzard-bolt-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Ice Fusion** *(As an additional cost to play Blizzard Bolt, you may reveal an Ice card from your hand.)*  If Blizzard Bolt was **fused**, whenever an attack deals damage to a hero this turn, create a Frostbite token under their control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI022.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Blizzard Bolt",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 1,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "blizzard-bolt-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Ice Fusion** *(As an additional cost to play Blizzard Bolt, you may reveal an Ice card from your hand.)*  If Blizzard Bolt was **fused**, whenever an attack deals damage to a hero this turn, create a Frostbite token under their control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE045.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Blizzard Bolt",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 2,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "blizzard-bolt-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Ice Fusion** *(As an additional cost to play Blizzard Bolt, you may reveal an Ice card from your hand.)*  If Blizzard Bolt was **fused**, whenever an attack deals damage to a hero this turn, create a Frostbite token under their control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE046.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Blizzard Bolt",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 3,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "buzz-bolt-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Lightning Fusion** *(As an additional cost to play Buzz Bolt, you may reveal a Lightning card from your hand.)*  If Buzz Bolt was **fused**, whenever an attack hits a hero this turn, it deals 1 damage to them.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI007.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Buzz Bolt",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 1,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "buzz-bolt-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Lightning Fusion** *(As an additional cost to play Buzz Bolt, you may reveal a Lightning card from your hand.)*  If Buzz Bolt was **fused**, whenever an attack hits a hero this turn, it deals 1 damage to them.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI011.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Buzz Bolt",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 2,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "buzz-bolt-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Lightning Fusion** *(As an additional cost to play Buzz Bolt, you may reveal a Lightning card from your hand.)*  If Buzz Bolt was **fused**, whenever an attack hits a hero this turn, it deals 1 damage to them.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE049.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Buzz Bolt",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 3,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "chilling-icevein-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Ice Fusion** *(As an additional cost to play Chilling Icevein, you may reveal an Ice card from your hand.)*  If Chilling Icevein was **fused**, whenever an attack deals damage to a hero this turn, they discard a card unless they pay {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE050.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Chilling Icevein",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 1,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "chilling-icevein-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Ice Fusion** *(As an additional cost to play Chilling Icevein, you may reveal an Ice card from your hand.)*  If Chilling Icevein was **fused**, whenever an attack deals damage to a hero this turn, they discard a card unless they pay {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI023.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Chilling Icevein",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 2,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "chilling-icevein-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Ice Fusion** *(As an additional cost to play Chilling Icevein, you may reveal an Ice card from your hand.)*  If Chilling Icevein was **fused**, whenever an attack deals damage to a hero this turn, they discard a card unless they pay {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE052.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Chilling Icevein",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 3,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "dazzling-crescendo-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Lightning Fusion** *(As an additional cost to play Dazzling Crescendo, you may reveal an Lightning card from your hand.)*  If Dazzling Crescendo was **fused**, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI008.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Dazzling Crescendo",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 1,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "dazzling-crescendo-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Lightning Fusion** *(As an additional cost to play Dazzling Crescendo, you may reveal an Lightning card from your hand.)*  If Dazzling Crescendo was **fused**, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE054.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Dazzling Crescendo",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 2,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "dazzling-crescendo-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Lightning Fusion** *(As an additional cost to play Dazzling Crescendo, you may reveal an Lightning card from your hand.)*  If Dazzling Crescendo was **fused**, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE055.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Dazzling Crescendo",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 3,
    power: 2,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "flake-out-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Ice Fusion** *(As an additional cost to play Flake Out, you may reveal an Ice card from your hand.)*  If Flake Out was **fused**, it gains **dominate.** *(The defending hero can't defend Flake Out with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE056.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Flake Out",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 1,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "flake-out-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Ice Fusion** *(As an additional cost to play Flake Out, you may reveal an Ice card from your hand.)*  If Flake Out was **fused**, it gains **dominate.** *(The defending hero can't defend Flake Out with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE057.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Flake Out",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 2,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "flake-out-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Ice Fusion** *(As an additional cost to play Flake Out, you may reveal an Ice card from your hand.)*  If Flake Out was **fused**, it gains **dominate.** *(The defending hero can't defend Flake Out with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE058.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Flake Out",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 3,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "frazzle-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Lightning Fusion** *(As an additional cost to play Frazzle, you may reveal a Lightning card from your hand.)*  If Frazzle was **fused**, whenever an attack would deal damage this turn, instead it deals that much damage plus 1.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI009.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Frazzle",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 1,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "frazzle-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Lightning Fusion** *(As an additional cost to play Frazzle, you may reveal a Lightning card from your hand.)*  If Frazzle was **fused**, whenever an attack would deal damage this turn, instead it deals that much damage plus 1.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI012.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Frazzle",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 2,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "frazzle-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  **Lightning Fusion** *(As an additional cost to play Frazzle, you may reveal a Lightning card from your hand.)*  If Frazzle was **fused**, whenever an attack would deal damage this turn, instead it deals that much damage plus 1.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE061.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Frazzle",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 3,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "blossoming-spellblade-red",
    functionalText: `**Earth and Lightning Fusion** *(As an additional cost to play Blossoming Spellblade, you may reveal an Earth and a Lightning card from your hand.)*  If Blossoming Spellblade was **fused**, it gains "Whenever this deals damage to an opposing hero, you may banish a 'non-attack' action card from your graveyard. If you do, you may play it this turn as though it were an instant and if it would be put into your graveyard, instead banish it."  When you attack with Blossoming Spellblade, if it was **fused**, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE064.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Blossoming Spellblade",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [Fusion.Earth,Fusion.Lightning],
    pitch: 1,
    power: 6,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "flicker-wisp-yellow",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Flicker Wisp, you may reveal a Lightning card from your hand.)*  If Flicker Wisp was **fused**, until end of turn, action card effects you control that deal arcane damage, instead deal that much arcane damage plus 1.  Deal 1 arcane damage to target hero.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE065.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Flicker Wisp",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action",
    cost: 0,
    defense: 2,
    fusions: [Fusion.Lightning],
    pitch: 2,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "force-of-nature-blue",
    functionalText: `**Briar Specialization** *(You may only have Force of Nature in your deck if your hero is Briar.)*  **Earth Fusion** *(As an additional cost to play Force of Nature, you may reveal an Earth card from your hand.)*  Whenever an attack action card you control hits this turn, if its {p} is greater than its base {p}, draw a card.  If Force of Nature was fused, your next attack this turn gains +1{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE066.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Fusion],
    name: "Force of Nature",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action",
    cost: 0,
    defense: 3,
    fusions: [Fusion.Earth],
    pitch: 3,
    
    talents: [Talent.Elemental],
    
    
    
    specialization: Hero.Briar,
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "explosive-growth-red",
    functionalText: `**Earth Fusion** *(As an additional cost to play Explosive Growth, you may reveal an Earth card from your hand.)*  If Explosive Growth was **fused**, whenever it deals damage, attacks gain +1{p} this combat chain. When you attack with Explosive Growth, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI009.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Explosive Growth",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Earth],
    pitch: 1,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "explosive-growth-yellow",
    functionalText: `**Earth Fusion** *(As an additional cost to play Explosive Growth, you may reveal an Earth card from your hand.)*  If Explosive Growth was **fused**, whenever it deals damage, attacks gain +1{p} this combat chain. When you attack with Explosive Growth, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE068.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Explosive Growth",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Earth],
    pitch: 2,
    power: 2,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "explosive-growth-blue",
    functionalText: `**Earth Fusion** *(As an additional cost to play Explosive Growth, you may reveal an Earth card from your hand.)*  If Explosive Growth was **fused**, whenever it deals damage, attacks gain +1{p} this combat chain. When you attack with Explosive Growth, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE069.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Explosive Growth",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Earth],
    pitch: 3,
    power: 1,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "rites-of-lightning-red",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Rites of Lightning, you may reveal a Lightning card from your hand.)*  When you attack with Rites of Lightning, if it was **fused**, deal 1 arcane damage to target hero.  If you have dealt arcane damage this turn, Rites of Lightning gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/cardfaces/2021-ELE-BRI/BRI027.png",
    keywords: [Keyword.Fusion],
    name: "Rites of Lightning",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 1,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "rites-of-lightning-yellow",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Rites of Lightning, you may reveal a Lightning card from your hand.)*  When you attack with Rites of Lightning, if it was **fused**, deal 1 arcane damage to target hero.  If you have dealt arcane damage this turn, Rites of Lightning gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE071.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Rites of Lightning",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 2,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "rites-of-lightning-blue",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Rites of Lightning, you may reveal a Lightning card from your hand.)*  When you attack with Rites of Lightning, if it was **fused**, deal 1 arcane damage to target hero.  If you have dealt arcane damage this turn, Rites of Lightning gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE072.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Rites of Lightning",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 3,
    power: 2,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "arcanic-shockwave-red",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Arcanic Shockwave, you may reveal a Lightning card from your hand.)*  When you attack with Arcanic Shockwave, if it was **fused**, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE073.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Arcanic Shockwave",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 1,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "arcanic-shockwave-yellow",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Arcanic Shockwave, you may reveal a Lightning card from your hand.)*  When you attack with Arcanic Shockwave, if it was **fused**, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE074.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Arcanic Shockwave",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 2,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "arcanic-shockwave-blue",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Arcanic Shockwave, you may reveal a Lightning card from your hand.)*  When you attack with Arcanic Shockwave, if it was **fused**, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE075.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Arcanic Shockwave",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 3,
    power: 2,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "vela-flash-red",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Vela Flash, you may reveal a Lightning card from your hand.)*  If Vela Flash was **fused**, you may play your next 'non-attack' action card this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE076.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Vela Flash",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 1,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "vela-flash-yellow",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Vela Flash, you may reveal a Lightning card from your hand.)*  If Vela Flash was **fused**, you may play your next 'non-attack' action card this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE077.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Vela Flash",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 2,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "vela-flash-blue",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Vela Flash, you may reveal a Lightning card from your hand.)*  If Vela Flash was **fused**, you may play your next 'non-attack' action card this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE078.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Vela Flash",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [Fusion.Lightning],
    pitch: 3,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "rites-of-replenishment-red",
    functionalText: `**Earth Fusion** *(As an additional cost to play Rites of Replenishment, you may reveal an Earth card from your hand.)*  When you attack with Rites of Replenishment, if you have dealt arcane damage this turn, you may put a 'non-attack' action card from your graveyard on the bottom of your deck.  When you attack with Rites of Replenishment, if it was **fused**, you may put an attack action card from your graveyard on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI010.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Rites of Replenishment",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [Fusion.Earth],
    pitch: 1,
    power: 6,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "rites-of-replenishment-yellow",
    functionalText: `**Earth Fusion** *(As an additional cost to play Rites of Replenishment, you may reveal an Earth card from your hand.)*  When you attack with Rites of Replenishment, if you have dealt arcane damage this turn, you may put a 'non-attack' action card from your graveyard on the bottom of your deck.  When you attack with Rites of Replenishment, if it was **fused**, you may put an attack action card from your graveyard on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE080.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Rites of Replenishment",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [Fusion.Earth],
    pitch: 2,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "rites-of-replenishment-blue",
    functionalText: `**Earth Fusion** *(As an additional cost to play Rites of Replenishment, you may reveal an Earth card from your hand.)*  When you attack with Rites of Replenishment, if you have dealt arcane damage this turn, you may put a 'non-attack' action card from your graveyard on the bottom of your deck.  When you attack with Rites of Replenishment, if it was **fused**, you may put an attack action card from your graveyard on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI014.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Rites of Replenishment",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [Fusion.Earth],
    pitch: 3,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "stir-the-wildwood-red",
    functionalText: `**Earth Fusion** *(As an additional cost to play Stir the Wildwood, you may reveal an Earth card from your hand.)*  If you have dealt arcane damage to an opposing hero this turn, Stir the Wildwood gains +2{p}.  If Stir the Wildwood was **fused**, it gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB047.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Stir the Wildwood",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [Fusion.Earth],
    pitch: 1,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "stir-the-wildwood-yellow",
    functionalText: `**Earth Fusion** *(As an additional cost to play Stir the Wildwood, you may reveal an Earth card from your hand.)*  If you have dealt arcane damage to an opposing hero this turn, Stir the Wildwood gains +2{p}.  If Stir the Wildwood was **fused**, it gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI013.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Stir the Wildwood",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [Fusion.Earth],
    pitch: 2,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "stir-the-wildwood-blue",
    functionalText: `**Earth Fusion** *(As an additional cost to play Stir the Wildwood, you may reveal an Earth card from your hand.)*  If you have dealt arcane damage to an opposing hero this turn, Stir the Wildwood gains +2{p}.  If Stir the Wildwood was **fused**, it gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE084.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Stir the Wildwood",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [Fusion.Earth],
    pitch: 3,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "bramble-spark-red",
    functionalText: `**Earth Fusion** *(As an additional cost to play Bramble Spark, you may reveal an Earth card from your hand.)*  The next attack action card you play this turn gains "When you attack with this, deal 1 arcane damage to target hero."  If Bramble Spark was **fused**, the next attack action card you play this turn gains +3{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI012.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Bramble Spark",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action",
    cost: 0,
    defense: 2,
    fusions: [Fusion.Earth],
    pitch: 1,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "bramble-spark-yellow",
    functionalText: `**Earth Fusion** *(As an additional cost to play Bramble Spark, you may reveal an Earth card from your hand.)*  The next attack action card you play this turn gains "When you attack with this, deal 1 arcane damage to target hero."  If Bramble Spark was **fused**, the next attack action card you play this turn gains +2{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE086.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Bramble Spark",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action",
    cost: 0,
    defense: 2,
    fusions: [Fusion.Earth],
    pitch: 2,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "bramble-spark-blue",
    functionalText: `**Earth Fusion** *(As an additional cost to play Bramble Spark, you may reveal an Earth card from your hand.)*  The next attack action card you play this turn gains "When you attack with this, deal 1 arcane damage to target hero."  If Bramble Spark was **fused**, the next attack action card you play this turn gains +1{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI015.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Bramble Spark",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action",
    cost: 0,
    defense: 2,
    fusions: [Fusion.Earth],
    pitch: 3,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "inspire-lightning-red",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Inspire Lightning, you may reveal a Lightning card from your hand.)*  If Inspire Lightning was **fused**, deal 3 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE088.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Inspire Lightning",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action",
    cost: 1,
    defense: 2,
    fusions: [Fusion.Lightning],
    pitch: 1,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "inspire-lightning-yellow",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Inspire Lightning, you may reveal a Lightning card from your hand.)*  If Inspire Lightning was **fused**, deal 2 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE089.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Inspire Lightning",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action",
    cost: 1,
    defense: 2,
    fusions: [Fusion.Lightning],
    pitch: 2,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "inspire-lightning-blue",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Inspire Lightning, you may reveal a Lightning card from your hand.)*  If Inspire Lightning was **fused**, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE090.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Inspire Lightning",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Runeblade Action",
    cost: 1,
    defense: 2,
    fusions: [Fusion.Lightning],
    pitch: 3,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "fulminate-yellow",
    functionalText: `**Earth and/or Lightning Fusion** *(As an additional cost to play Fulminate, you may reveal an Earth and/or Lightning card from your hand.)*  If Fulminate was **fused** with an Earth card, attack action cards you control gain +3{p} this turn.  If Fulminate was **fused** with a Lightning card, attack action cards you control gain **go again** this turn.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE091.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Fulminate",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Action",
    cost: 2,
    defense: 2,
    fusions: [Fusion.Earth,Fusion.Lightning],
    pitch: 2,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "flashfreeze-red",
    functionalText: `**Ice and/or Lightning Fusion** *(As an additional cost to play Flashfreeze, you may reveal an Ice and/or Lightning card from your hand.)*  If Flashfreeze was **fused** with an Ice card, attacks you control this turn gain "When you attack with this, it gains **dominate**, unless the defending hero pays {r}{r}."  If Flashfreeze was **fused** with a Lightning card, attacks you control this turn gain "If this hits a hero, deal 3 damage to them."  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE092.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Flashfreeze",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Action",
    cost: 1,
    defense: 2,
    fusions: [Fusion.Ice,Fusion.Lightning],
    pitch: 1,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "entwine-earth-red",
    functionalText: `**Earth Fusion** *(As an additional cost to play Entwine Earth, you may reveal an Earth card from your hand.)*  If Entwine Earth was **fused**, it gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI016.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Entwine Earth",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [Fusion.Earth],
    pitch: 1,
    power: 6,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "entwine-earth-yellow",
    functionalText: `**Earth Fusion** *(As an additional cost to play Entwine Earth, you may reveal an Earth card from your hand.)*  If Entwine Earth was **fused**, it gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE095.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Entwine Earth",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [Fusion.Earth],
    pitch: 2,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "entwine-earth-blue",
    functionalText: `**Earth Fusion** *(As an additional cost to play Entwine Earth, you may reveal an Earth card from your hand.)*  If Entwine Earth was **fused**, it gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE096.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Entwine Earth",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [Fusion.Earth],
    pitch: 3,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "entwine-ice-red",
    functionalText: `**Ice Fusion** *(As an additional cost to play Entwine Ice, you may reveal an Ice card from your hand.)*  If Entwine Ice was **fused**, it gains **dominate.** *(The defending hero can't defend Entwine Ice with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE097.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Entwine Ice",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [Fusion.Ice],
    pitch: 1,
    power: 5,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "entwine-ice-yellow",
    functionalText: `**Ice Fusion** *(As an additional cost to play Entwine Ice, you may reveal an Ice card from your hand.)*  If Entwine Ice was **fused**, it gains **dominate.** *(The defending hero can't defend Entwine Ice with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE098.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Entwine Ice",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [Fusion.Ice],
    pitch: 2,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "entwine-ice-blue",
    functionalText: `**Ice Fusion** *(As an additional cost to play Entwine Ice, you may reveal an Ice card from your hand.)*  If Entwine Ice was **fused**, it gains **dominate.** *(The defending hero can't defend Entwine Ice with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE099.width-450.png",
    keywords: [Keyword.Fusion,Keyword.Dominate],
    name: "Entwine Ice",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [Fusion.Ice],
    pitch: 3,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "entwine-lightning-red",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Entwine Lightning, you may reveal a Lightning card from your hand.)*  If Entwine Lightning was **fused**, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI028.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Entwine Lightning",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [Fusion.Lightning],
    pitch: 1,
    power: 4,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "entwine-lightning-yellow",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Entwine Lightning, you may reveal a Lightning card from your hand.)*  If Entwine Lightning was **fused**, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE101.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Entwine Lightning",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [Fusion.Lightning],
    pitch: 2,
    power: 3,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "entwine-lightning-blue",
    functionalText: `**Lightning Fusion** *(As an additional cost to play Entwine Lightning, you may reveal a Lightning card from your hand.)*  If Entwine Lightning was **fused**, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE102.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Entwine Lightning",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [Fusion.Lightning],
    pitch: 3,
    power: 2,
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "invigorate-red",
    functionalText: `The next attack you **fuse** this turn gains +4{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS080.width-450.png",
    keywords: [],
    name: "Invigorate",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "invigorate-yellow",
    functionalText: `The next attack you **fuse** this turn gains +3{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS081.width-450.png",
    keywords: [],
    name: "Invigorate",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "invigorate-blue",
    functionalText: `The next attack you **fuse** this turn gains +2{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS082.width-450.png",
    keywords: [],
    name: "Invigorate",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "rejuvenate-red",
    functionalText: `Gain 3{h}  If you've **fused** this turn, you may play Rejuvenate as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE106.width-450.png",
    keywords: [],
    name: "Rejuvenate",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "rejuvenate-yellow",
    functionalText: `Gain 2{h}  If you've **fused** this turn, you may play Rejuvenate as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE107.width-450.png",
    keywords: [],
    name: "Rejuvenate",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "rejuvenate-blue",
    functionalText: `Gain 1{h}  If you've **fused** this turn, you may play Rejuvenate as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE108.width-450.png",
    keywords: [],
    name: "Rejuvenate",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Elemental Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Elemental],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "pulse-of-candlehold-yellow",
    functionalText: `**Legendary** *(You may only have 1 Pulse of Candlehold in your deck.)*  Put up to 2 target Earth, Lightning and/or Elemental action cards from your graveyard on top of your deck. Banish Pulse of Candlehold.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE113.width-450.png",
    keywords: [Keyword.Legendary],
    name: "Pulse of Candlehold",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Earth Lightning Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Earth,Talent.Lightning],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "channel-mount-heroic-red",
    functionalText: `**Go again**  Attack action cards you control have +3{p}.  **Channel Earth** - At the beginning of your end phase, put an flow counter on Channel Mount Heroic then destroy it unless you put an Earth card from your pitch zone on the bottom of your deck for each flow counter on it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE117.width-450.png",
    keywords: [Keyword.Channel],
    name: "Channel Mount Heroic",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action – Aura",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Generic,
    identifier: "tome-of-harvests-blue",
    functionalText: `As an additional cost to play Tome of Harvests, put a card from your arsenal on the bottom of your deck.  Draw 3 cards.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE118.width-450.png",
    keywords: [],
    name: "Tome of Harvests",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "evergreen-red",
    functionalText: `If Evergreen is played from arsenal, put it on the bottom of your deck when the combat chain closes.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI018.width-450.png",
    keywords: [],
    name: "Evergreen",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "evergreen-yellow",
    functionalText: `If Evergreen is played from arsenal, put it on the bottom of your deck when the combat chain closes.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE120.width-450.png",
    keywords: [],
    name: "Evergreen",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "evergreen-blue",
    functionalText: `If Evergreen is played from arsenal, put it on the bottom of your deck when the combat chain closes.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD026.width-450.png",
    keywords: [],
    name: "Evergreen",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "weave-earth-red",
    functionalText: `The next Earth or Elemental attack action card you play this turn gains +3{p}.  If it's **fused**, instead it gains +4{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI021.width-450.png",
    keywords: [],
    name: "Weave Earth",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "weave-earth-yellow",
    functionalText: `The next Earth or Elemental attack action card you play this turn gains +2{p}.  If it's **fused**, instead it gains +3{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE123.width-450.png",
    keywords: [],
    name: "Weave Earth",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "weave-earth-blue",
    functionalText: `The next Earth or Elemental attack action card you play this turn gains +1{p}.  If it's **fused**, instead it gains +2{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE124.width-450.png",
    keywords: [],
    name: "Weave Earth",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "autumns-touch-red",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE128.width-450.png",
    keywords: [],
    name: "Autumn’s Touch",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "autumns-touch-yellow",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI022.width-450.png",
    keywords: [],
    name: "Autumn’s Touch",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "autumns-touch-blue",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD024.width-450.png",
    keywords: [],
    name: "Autumn’s Touch",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "break-ground-red",
    functionalText: `When you attack with Break Ground, you may put a card from your arsenal on the bottom of your deck. If you do, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE131.width-450.png",
    keywords: [],
    name: "Break Ground",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "break-ground-yellow",
    functionalText: `When you attack with Break Ground, you may put a card from your arsenal on the bottom of your deck. If you do, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE132.width-450.png",
    keywords: [],
    name: "Break Ground",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "break-ground-blue",
    functionalText: `When you attack with Break Ground, you may put a card from your arsenal on the bottom of your deck. If you do, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD025.width-450.png",
    keywords: [],
    name: "Break Ground",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action – Attack",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "burgeoning-red",
    functionalText: `If Burgeoning is played from arsenal, it gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS069.width-450.png",
    keywords: [],
    name: "Burgeoning",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "burgeoning-yellow",
    functionalText: `If Burgeoning is played from arsenal, it gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS070.width-450.png",
    keywords: [],
    name: "Burgeoning",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "burgeoning-blue",
    functionalText: `If Burgeoning is played from arsenal, it gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS071.width-450.png",
    keywords: [],
    name: "Burgeoning",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "earthlore-surge-red",
    functionalText: `The next attack action card you play this turn gains +5{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI019.width-450.png",
    keywords: [],
    name: "Earthlore Surge",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "earthlore-surge-yellow",
    functionalText: `The next attack action card you play this turn gains +4{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE138.width-450.png",
    keywords: [],
    name: "Earthlore Surge",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "earthlore-surge-blue",
    functionalText: `The next attack action card you play this turn gains +3{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI024.width-450.png",
    keywords: [],
    name: "Earthlore Surge",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "sow-tomorrow-red",
    functionalText: `Put target Earth or Elemental action card with cost 0 or greater from your graveyard on the bottom of your deck. Banish Sow Tomorrow.  If Sow Tomorrow is played from arsenal, draw a card.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI020.width-450.png",
    keywords: [],
    name: "Sow Tomorrow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "sow-tomorrow-yellow",
    functionalText: `Put target Earth or Elemental action card with cost 1 or greater from your graveyard on the bottom of your deck. Banish Sow Tomorrow.  If Sow Tomorrow is played from arsenal, draw a card.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE141.width-450.png",
    keywords: [],
    name: "Sow Tomorrow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "sow-tomorrow-blue",
    functionalText: `Put target Earth or Elemental action card with cost 2 or greater from your graveyard on the bottom of your deck. Banish Sow Tomorrow.  If Sow Tomorrow is played from arsenal, draw a card.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI025.width-450.png",
    keywords: [],
    name: "Sow Tomorrow",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "amulet-of-earth",
    functionalText: `**Go again**  **Instant** - Destroy Amulet of Earth: Attack action cards you control gain +1{p} and +1{d} this turn. Activate this ability only if you have Earth **fused** this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS063.width-450.png",
    keywords: [],
    name: "Amulet of Earth",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Earth Action – Item",
    cost: 0,
    
    fusions: [],
    
    
    talents: [Talent.Earth],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "channel-lake-frigid-blue",
    functionalText: `**Go again**  Cards and activated abilities cost opposing heroes an additional {r}.  **Channel Ice** - At the beginning of your end phase, put a flow counter on Channel Lake Frigid then destroy it unless you put an Ice card from your pitch zone on the bottom of your deck for each flow counter on it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE146.width-450.png",
    keywords: [Keyword.Channel],
    name: "Channel Lake Frigid",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action – Aura",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Generic,
    identifier: "frost-fang-red",
    functionalText: `If Frost Fang hits a hero, they discard a card unless they pay {r}{r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD013.width-450.png",
    keywords: [],
    name: "Frost Fang",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "frost-fang-yellow",
    functionalText: `If Frost Fang hits a hero, they discard a card unless they pay {r}{r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE149.width-450.png",
    keywords: [],
    name: "Frost Fang",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "frost-fang-blue",
    functionalText: `If Frost Fang hits a hero, they discard a card unless they pay {r}{r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE150.width-450.png",
    keywords: [],
    name: "Frost Fang",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "ice-quake-red",
    functionalText: `Your next attack this turn gains +3{p}.  Whenever an attack hits a hero this turn, create a Frostbite token under their control.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE151.width-450.png",
    keywords: [],
    name: "Ice Quake",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "ice-quake-yellow",
    functionalText: `Your next attack this turn gains +2{p}.  Whenever an attack hits a hero this turn, create a Frostbite token under their control.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE152.width-450.png",
    keywords: [],
    name: "Ice Quake",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "ice-quake-blue",
    functionalText: `Your next attack this turn gains +1{p}.  Whenever an attack hits a hero this turn, create a Frostbite token under their control.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE153.width-450.png",
    keywords: [],
    name: "Ice Quake",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "weave-ice-red",
    functionalText: `The next Ice or Elemental attack action card you play this turn gains +3{p}.  If it's **fused**, it gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD014.width-450.png",
    keywords: [],
    name: "Weave Ice",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "weave-ice-yellow",
    functionalText: `The next Ice or Elemental attack action card you play this turn gains +2{p}.  If it's **fused**, it gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE155.width-450.png",
    keywords: [],
    name: "Weave Ice",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "weave-ice-blue",
    functionalText: `The next Ice or Elemental attack action card you play this turn gains +1{p}.  If it's **fused**, it gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE156.width-450.png",
    keywords: [],
    name: "Weave Ice",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "icy-encounter-red",
    functionalText: `If Icy Encounter hits a hero, create a Frostbite token under their control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE157.width-450.png",
    keywords: [],
    name: "Icy Encounter",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "icy-encounter-yellow",
    functionalText: `If Icy Encounter hits a hero, create a Frostbite token under their control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE158.width-450.png",
    keywords: [],
    name: "Icy Encounter",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "icy-encounter-blue",
    functionalText: `If Icy Encounter hits a hero, create a Frostbite token under their control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE159.width-450.png",
    keywords: [],
    name: "Icy Encounter",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "winters-grasp-red",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE160.width-450.png",
    keywords: [],
    name: "Winter’s Grasp",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "winters-grasp-yellow",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE161.width-450.png",
    keywords: [],
    name: "Winter’s Grasp",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "winters-grasp-blue",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD017.width-450.png",
    keywords: [],
    name: "Winter’s Grasp",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "chill-to-the-bone-red",
    functionalText: `The next time an Ice or Elemental attack hits a hero this turn, create 3 Frostbite tokens under their control.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE163.width-450.png",
    keywords: [],
    name: "Chill to the Bone",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "chill-to-the-bone-yellow",
    functionalText: `The next time an Ice or Elemental attack hits a hero this turn, create 2 Frostbite tokens under their control.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI024.width-450.png",
    keywords: [],
    name: "Chill to the Bone",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "chill-to-the-bone-blue",
    functionalText: `The next time an Ice or Elemental attack hits a hero this turn, create a Frostbite token under their control.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE165.width-450.png",
    keywords: [],
    name: "Chill to the Bone",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "polar-blast-red",
    functionalText: `Target opposing hero may pay {r}{r}{r}. If they don’t your next attack this turn gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*  If Polar Blast is played from arsenal, draw a card.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS072.width-450.png",
    keywords: [],
    name: "Polar Blast",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "polar-blast-yellow",
    functionalText: `Target opposing hero may pay {r}{r}. If they don’t your next attack this turn gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*  If Polar Blast is played from arsenal, draw a card.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS073.width-450.png",
    keywords: [],
    name: "Polar Blast",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "polar-blast-blue",
    functionalText: `Target opposing hero may pay {r}. If they don’t your next attack this turn gains **dominate.** *(The defending hero can't defend the attack with more than 1 card from their hand.)*  If Polar Blast is played from arsenal, draw a card.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS074.width-450.png",
    keywords: [],
    name: "Polar Blast",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "winters-bite-red",
    functionalText: `Target hero discards a card unless they pay {r}{r}{r}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE169.width-450.png",
    keywords: [],
    name: "Winter’s Bite",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "winters-bite-yellow",
    functionalText: `Target hero discards a card unless they pay {r}{r}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD016.width-450.png",
    keywords: [],
    name: "Winter’s Bite",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "winters-bite-blue",
    functionalText: `Target hero discards a card unless they pay {r}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI025.width-450.png",
    keywords: [],
    name: "Winter’s Bite",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "amulet-of-ice-blue",
    functionalText: `**Go again**  **Instant** - Destroy Amulet of Ice: Target hero discards a card unless they pay {r}{r}. Activate this ability only if you have Ice **fused** this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS064.width-450.png",
    keywords: [],
    name: "Amulet of Ice",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Ice Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Ice],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "channel-thunder-steppe-yellow",
    functionalText: `**Go again**  Whenever you play an action card, you may pay {r}. If you do, it gains **go again.**  **Channel Lightning** - At the beginning of your end phase, put a flow counter on Channel Thunder Steppe then destroy it unless you put a Lightning card from your pitch zone on the bottom of your deck for each flow counter on it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE175.width-450.png",
    keywords: [Keyword.Channel],
    name: "Channel Thunder Steppe",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action – Aura",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Generic,
    identifier: "flash-red",
    functionalText: `The next action card you play this turn with cost 0 or greater gains **go again.**  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE177.width-450.png",
    keywords: [],
    name: "Flash",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "flash-yellow",
    functionalText: `The next action card you play this turn with cost 1 or greater gains **go again.**  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI031.width-450.png",
    keywords: [],
    name: "Flash",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "flash-blue",
    functionalText: `The next action card you play this turn with cost 2 or greater gains **go again.**  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE179.width-450.png",
    keywords: [],
    name: "Flash",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "weave-lightning-red",
    functionalText: `The next Lightning or Elemental attack action card you play this turn gains +3{p}. If it's **fused**, it gains **go again.**  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS075.width-450.png",
    keywords: [],
    name: "Weave Lightning",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "weave-lightning-yellow",
    functionalText: `The next Lightning or Elemental attack action card you play this turn gains +2{p}. If it's **fused**, it gains **go again.**  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS076.width-450.png",
    keywords: [],
    name: "Weave Lightning",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "weave-lightning-blue",
    functionalText: `The next Lightning or Elemental attack action card you play this turn gains +1{p}. If it's **fused**, it gains **go again.**  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS077.width-450.png",
    keywords: [],
    name: "Weave Lightning",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "ball-lightning-red",
    functionalText: `Whenever a Lightning or Elemental action card would deal damage this combat chain, instead it deals that much damage plus 1.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE186.width-450.png",
    keywords: [],
    name: "Ball Lightning",
    rarity: Rarity.Common,
    restrictedFormats: [Format.Blitz,Format.Commoner],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
    cost: 0,
    defense: 0,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "ball-lightning-yellow",
    functionalText: `Whenever a Lightning or Elemental action card would deal damage this combat chain, instead it deals that much damage plus 1.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE187.width-450.png",
    keywords: [],
    name: "Ball Lightning",
    rarity: Rarity.Common,
    restrictedFormats: [Format.Blitz,Format.Commoner],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
    cost: 0,
    defense: 0,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "ball-lightning-blue",
    functionalText: `Whenever a Lightning or Elemental action card would deal damage this combat chain, instead it deals that much damage plus 1.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE188.width-450.png",
    keywords: [],
    name: "Ball Lightning",
    rarity: Rarity.Common,
    restrictedFormats: [Format.Blitz,Format.Commoner],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
    cost: 0,
    defense: 0,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "lightning-surge-red",
    functionalText: `If Lightning Surge is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE189.width-450.png",
    keywords: [],
    name: "Lightning Surge",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "lightning-surge-yellow",
    functionalText: `If Lightning Surge is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI029.width-450.png",
    keywords: [],
    name: "Lightning Surge",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "lightning-surge-blue",
    functionalText: `If Lightning Surge is played from arsenal, it gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE191.width-450.png",
    keywords: [],
    name: "Lightning Surge",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "heavens-claws-red",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI014.width-450.png",
    keywords: [],
    name: "Heaven’s Claws",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "heavens-claws-yellow",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI019.width-450.png",
    keywords: [],
    name: "Heaven’s Claws",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "heavens-claws-blue",
    functionalText: `null`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE194.width-450.png",
    keywords: [],
    name: "Heaven’s Claws",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "shock-striker-red",
    functionalText: `**Once per Turn Instant** - {r}{r}: Shock Striker gains "If Shock Striker hits a hero, deal 1 damage to them."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI015.width-450.png",
    keywords: [],
    name: "Shock Striker",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "shock-striker-yellow",
    functionalText: `**Once per Turn Instant** - {r}{r}: Shock Striker gains "If Shock Striker hits a hero, deal 1 damage to them."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE196.width-450.png",
    keywords: [],
    name: "Shock Striker",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "shock-striker-blue",
    functionalText: `**Once per Turn Instant** - {r}{r}: Shock Striker gains "If Shock Striker hits a hero, deal 1 damage to them."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE197.width-450.png",
    keywords: [],
    name: "Shock Striker",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "electrify-red",
    functionalText: `The next time an attack action card hits a hero this turn, it deals 3 damage to them.  If Electrify is played from arsenal, draw a card.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI016.width-450.png",
    keywords: [],
    name: "Electrify",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "electrify-yellow",
    functionalText: `The next time an attack action card hits a hero this turn, it deals 2 damage to them.  If Electrify is played from arsenal, draw a card.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI030.width-450.png",
    keywords: [],
    name: "Electrify",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "electrify-blue",
    functionalText: `The next time an attack action card hits a hero this turn, it deals 1 damage to them.  If Electrify is played from arsenal, draw a card.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB048.width-450.png",
    keywords: [],
    name: "Electrify",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "amulet-of-lightning-blue",
    functionalText: `**Go again**  **Instant** - Destroy Amulet of Lightning: Target action card gains **go again.** Activate this ability only if you have Lightning **fused** this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS065.width-450.png",
    keywords: [],
    name: "Amulet of Lightning",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Lightning Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Lightning],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Guardian,
    identifier: "tear-asunder-blue",
    functionalText: `Your next Guardian attack this turn gains +1{p}, **dominate**, and "If this hits a hero, they discard 2 cards."  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE205.width-450.png",
    keywords: [],
    name: "Tear Asunder",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Guardian Action",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Guardian,
    identifier: "embolden-red",
    functionalText: `**Go again**  When Embolden enters the arena, if you control another non-token aura, draw a card.  At the beginning of your action phase, destroy Embolden then the next Guardian attack action card you play this turn gains +5{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD030.width-450.png",
    keywords: [],
    name: "Embolden",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 4,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "embolden-yellow",
    functionalText: `**Go again**  When Embolden enters the arena, if you control another non-token aura, draw a card.  At the beginning of your action phase, destroy Embolden then the next Guardian attack action card you play this turn gains +4{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE207.width-450.png",
    keywords: [],
    name: "Embolden",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 4,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "embolden-blue",
    functionalText: `**Go again**  When Embolden enters the arena, if you control another non-token aura, draw a card.  At the beginning of your action phase, destroy Embolden then the next Guardian attack action card you play this turn gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE208.width-450.png",
    keywords: [],
    name: "Embolden",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 4,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "thump-red",
    functionalText: `While Thump’s {p} is greater than its base {p}, it gains **dominate** and "If this hits a hero, they discard a card." *(The defending hero can't defend Thump with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD028.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Thump",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "thump-yellow",
    functionalText: `While Thump’s {p} is greater than its base {p}, it gains **dominate** and "If this hits a hero, they discard a card." *(The defending hero can't defend Thump with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE210.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Thump",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "thump-blue",
    functionalText: `While Thump’s {p} is greater than its base {p}, it gains **dominate** and "If this hits a hero, they discard a card." *(The defending hero can't defend Thump with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD029.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Thump",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 4,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "seek-and-destroy-red",
    functionalText: `Your next arrow attack this turn gains +3{p} and "If this hits a hero, at the beginning of their next end phase, they discard all cards in their hand and destroy all cards in their arsenal."  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE215.width-450.png",
    keywords: [],
    name: "Seek and Destroy",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "boltn-shot-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Bolt’n’ Shot's {p} is greater than its base {p}, it has **go again** and "If this hits, **reload.**" *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI026.width-450.png",
    keywords: [Keyword.Reload],
    name: "Bolt’n’ Shot",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "boltn-shot-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Bolt’n’ Shot's {p} is greater than its base {p}, it has **go again** and "If this hits, **reload.**" *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE217.width-450.png",
    keywords: [Keyword.Reload],
    name: "Bolt’n’ Shot",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "boltn-shot-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Bolt’n’ Shot's {p} is greater than its base {p}, it has **go again** and "If this hits, **reload.**" *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE218.width-450.png",
    keywords: [Keyword.Reload],
    name: "Bolt’n’ Shot",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "over-flex-red",
    functionalText: `Your next arrow attack this turn gains +4{p}.  **Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI027.width-450.png",
    keywords: [Keyword.Reload],
    name: "Over Flex",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "over-flex-yellow",
    functionalText: `Your next arrow attack this turn gains +3{p}.  **Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE220.width-450.png",
    keywords: [Keyword.Reload],
    name: "Over Flex",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "over-flex-blue",
    functionalText: `Your next arrow attack this turn gains +2{p}.  **Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE221.width-450.png",
    keywords: [Keyword.Reload],
    name: "Over Flex",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "sting-of-sorcery-blue",
    functionalText: `**Go again**  Attack action cards you control gain “When you attack with this, deal 1 arcane damage to target hero.”  At the beginning of your end phase, destroy Sting of Sorcery.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE226.width-450.png",
    keywords: [],
    name: "Sting of Sorcery",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Runeblade Action – Aura",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Runeblade,
    identifier: "singeing-steelblade-red",
    functionalText: `When you attack with Singeing Steelblade, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE230.width-450.png",
    keywords: [],
    name: "Singeing Steelblade",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "singeing-steelblade-yellow",
    functionalText: `When you attack with Singeing Steelblade, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE231.width-450.png",
    keywords: [],
    name: "Singeing Steelblade",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "singeing-steelblade-blue",
    functionalText: `When you attack with Singeing Steelblade, deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE232.width-450.png",
    keywords: [],
    name: "Singeing Steelblade",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "swing-big-red",
    functionalText: `If Swing Big doesn't hit, the defending hero creates a Quicken token when the combat chain closes.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR002.width-450.png",
    keywords: [],
    name: "Swing Big",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 8,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "ready-to-roll-blue",
    functionalText: `**Kayo Specialization** *(You may only have Ready to Roll in your deck if your hero is Kayo.)*  If you would roll 1 or more dice this turn, instead roll that many dice plus 1 and ignore the lowest roll.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR003.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Ready to Roll",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    specialization: Hero.Kayo,
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "rolling-thunder-red",
    functionalText: `Roll a 6 sided die. Your next Brute attack this turn gains +X{p}, where X the number rolled.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR004.width-450.png",
    keywords: [],
    name: "Rolling Thunder",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "high-roller-red",
    functionalText: `**Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*  If you have rolled a 4, 5, or 6 on a die this turn, instead **intimidate** twice.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR005.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "High Roller",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "high-roller-yellow",
    functionalText: `**Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*  If you have rolled a 5 or 6 on a die this turn, instead **intimidate** twice.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR006.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "High Roller",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "high-roller-blue",
    functionalText: `**Intimidate** *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*  If you have rolled a 6 on a die this turn, instead **intimidate** twice.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR007.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "High Roller",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "bare-fangs-red",
    functionalText: `When you attack with Bare Fangs, draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Bare Fangs gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR008.width-450.png",
    keywords: [],
    name: "Bare Fangs",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "bare-fangs-yellow",
    functionalText: `When you attack with Bare Fangs, draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Bare Fangs gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR009.width-450.png",
    keywords: [],
    name: "Bare Fangs",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "bare-fangs-blue",
    functionalText: `When you attack with Bare Fangs, draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Bare Fangs gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR010.width-450.png",
    keywords: [],
    name: "Bare Fangs",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "wild-ride-red",
    functionalText: `When you attack with Wild Ride, draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Wild Ride gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR011.width-450.png",
    keywords: [],
    name: "Wild Ride",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "wild-ride-yellow",
    functionalText: `When you attack with Wild Ride, draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Wild Ride gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR012.width-450.png",
    keywords: [],
    name: "Wild Ride",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "wild-ride-blue",
    functionalText: `When you attack with Wild Ride, draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Wild Ride gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR013.width-450.png",
    keywords: [],
    name: "Wild Ride",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action – Attack",
    cost: 2,
    
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Brute,
    identifier: "bad-beats-red",
    functionalText: `Roll a 6 sided die. If the number rolled is a 4, 5, or 6, the next Brute attack action card you play this turn gains +5{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR014.width-450.png",
    keywords: [],
    name: "Bad Beats",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "bad-beats-yellow",
    functionalText: `Roll a 6 sided die. If the number rolled is a 5 or 6, the next Brute attack action card you play this turn gains +5{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR015.width-450.png",
    keywords: [],
    name: "Bad Beats",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Brute,
    identifier: "bad-beats-blue",
    functionalText: `Roll a 6 sided die. If the number rolled is a 6, the next Brute attack action card you play this turn gains +5{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR016.width-450.png",
    keywords: [],
    name: "Bad Beats",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Brute Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Guardian,
    identifier: "pulverize-red",
    functionalText: `**Heave 3** *(At the beginning of your end phase, if Pulverize is in your hand and you have an empty arsenal zone, you may pay {r}{r}{r} and put Pulverize face up into your arsenal. If you do, create 3 Seismic Surge tokens.)*  If Pulverize hits a hero, their first attack during their next turn has -4{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR021.width-450.png",
    keywords: [Keyword.Heave],
    name: "Pulverize",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 10,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 14,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "imposing-visage-blue",
    functionalText: `Search your deck for an aura card with cost X or less, put it into the arena, then shuffle your deck.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR022.width-450.png",
    keywords: [],
    name: "Imposing Visage",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action",
    
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    specialCost: "X3",
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Guardian,
    identifier: "nerves-of-steel-blue",
    functionalText: `When Nerves of Steel enters the arena, remove a -1{d} counter from a chest equipment you control.  **Battleworn** and **temper** on equipment you control doesn’t trigger if it defends an attack with 2 or less {p}. *(***Battleworn*** and ***temper*** trigger when the combat chain closes.)*  When your hero is dealt damage, destroy Nerves of Steel.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR023.width-450.png",
    keywords: [Keyword.Battleworn,Keyword.Temper],
    name: "Nerves of Steel",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action – Aura",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Guardian,
    identifier: "thunder-quake-red",
    functionalText: `**Heave 3** *(At the beginning of your end phase, if Thunder Quake is in your hand and you have an empty arsenal zone, you may pay {r}{r}{r} and put Thunder Quake face up into your arsenal. If you do, create 3 Seismic Surge tokens.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR024.width-450.png",
    keywords: [Keyword.Heave],
    name: "Thunder Quake",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 6,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 10,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "thunder-quake-yellow",
    functionalText: `**Heave 3** *(At the beginning of your end phase, if Thunder Quake is in your hand and you have an empty arsenal zone, you may pay {r}{r}{r} and put Thunder Quake face up into your arsenal. If you do, create 3 Seismic Surge tokens.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR025.width-450.png",
    keywords: [Keyword.Heave],
    name: "Thunder Quake",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 6,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 9,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "thunder-quake-blue",
    functionalText: `**Heave 3** *(At the beginning of your end phase, if Thunder Quake is in your hand and you have an empty arsenal zone, you may pay {r}{r}{r} and put Thunder Quake face up into your arsenal. If you do, create 3 Seismic Surge tokens.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR026.width-450.png",
    keywords: [Keyword.Heave],
    name: "Thunder Quake",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 6,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 8,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "macho-grande-red",
    functionalText: `**Dominate** *(The defending hero can't defend Macho Grande with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS087.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Macho Grande",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 7,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 10,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "macho-grande-yellow",
    functionalText: `**Dominate** *(The defending hero can't defend Macho Grande with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS088.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Macho Grande",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 7,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 9,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "macho-grande-blue",
    functionalText: `**Dominate** *(The defending hero can't defend Macho Grande with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS089.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Macho Grande",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action – Attack",
    cost: 7,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 8,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Guardian,
    identifier: "seismic-stir-red",
    functionalText: `Create 3 Seismic Surge tokens.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR030.width-450.png",
    keywords: [],
    name: "Seismic Stir",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Guardian,
    identifier: "seismic-stir-yellow",
    functionalText: `Create 2 Seismic Surge tokens.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR031.width-450.png",
    keywords: [],
    name: "Seismic Stir",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Guardian,
    identifier: "seismic-stir-blue",
    functionalText: `Create a Seismic Surge token.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR032.width-450.png",
    keywords: [],
    name: "Seismic Stir",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Guardian Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ninja,
    identifier: "break-tide-yellow",
    functionalText: `**Combo** - If Rushing River or Flood of Force was the last attack this combat chain, Break Tide gains +3{p}, **dominate**, and "If Break Tide hits, banish the top card of your deck. Until the end of your next turn, you may play it."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR038.width-450.png",
    keywords: [Keyword.Combo,Keyword.Dominate],
    name: "Break Tide",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "spring-tidings-yellow",
    functionalText: `**Benji Specialization** *(You may only have Spring Tidings in your deck if your hero is Benji.)*  When Spring Tidings hits, draw a card for each other attack action card with 2 or less base{p} you control on the combat chain.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR039.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Spring Tidings",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    specialization: Hero.Benji,
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "winds-of-eternity-blue",
    functionalText: `**Combo** - If Winds of Eternity was the last attack this combat chain, Winds of Eternity gains +2{p} and "If this hits, shuffle all cards named Hundred Winds you control on this combat chain into your deck."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR040.width-450.png",
    keywords: [Keyword.Combo],
    name: "Winds of Eternity",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "hundred-winds-red",
    functionalText: `**Combo** - If Hundred Winds was the last attack this combat chain, this attack gains +1{p} for each other card named Hundred Winds you control on this combat chain.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR041.width-450.png",
    keywords: [Keyword.Combo],
    name: "Hundred Winds",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "hundred-winds-yellow",
    functionalText: `**Combo** - If Hundred Winds was the last attack this combat chain, this attack gains +1{p} for each other card named Hundred Winds you control on this combat chain.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR042.width-450.png",
    keywords: [Keyword.Combo],
    name: "Hundred Winds",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "hundred-winds-blue",
    functionalText: `**Combo** - If Hundred Winds was the last attack this combat chain, this attack gains +1{p} for each other card named Hundred Winds you control on this combat chain.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR043.width-450.png",
    keywords: [Keyword.Combo],
    name: "Hundred Winds",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "ride-the-tailwind-red",
    functionalText: `When Ride the Tailwind hits, the next attack action card with 2 or less base {p} you play this combat chain gains **go again.**  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR044.width-450.png",
    keywords: [],
    name: "Ride the Tailwind",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "ride-the-tailwind-yellow",
    functionalText: `When Ride the Tailwind hits, the next attack action card with 2 or less base {p} you play this combat chain gains **go again.**  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR045.width-450.png",
    keywords: [],
    name: "Ride the Tailwind",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "ride-the-tailwind-blue",
    functionalText: `When Ride the Tailwind hits, the next attack action card with 2 or less base {p} you play this combat chain gains **go again.**  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR046.width-450.png",
    keywords: [],
    name: "Ride the Tailwind",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "twin-twisters-red",
    functionalText: `Choose 1:  - Twin Twisters gains "When this hits, your next attack this combat chain gains +1{p}.” - Twin Twisters gains +1{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR047.width-450.png",
    keywords: [],
    name: "Twin Twisters",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "twin-twisters-yellow",
    functionalText: `Choose 1:  - Twin Twisters gains "When this hits, your next attack this combat chain gains +1{p}.” - Twin Twisters gains +1{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR048.width-450.png",
    keywords: [],
    name: "Twin Twisters",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ninja,
    identifier: "twin-twisters-blue",
    functionalText: `Choose 1:  - Twin Twisters gains "When this hits, your next attack this combat chain gains +1{p}.” - Twin Twisters gains +1{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR049.width-450.png",
    keywords: [],
    name: "Twin Twisters",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ninja Action – Attack",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Warrior,
    identifier: "blood-on-her-hands-yellow",
    functionalText: `**Kassai Specialization**  As an additional cost to play Blood on Her Hands, destroy any number of Copper you control. For each Copper destroyed this way choose a mode. You may choose each mode twice.  - Target 1H weapon gains +1{p} this turn while attacking this turn. - Target 1H weapon gains **go again** this turn while attacking this turn. - Target 1H weapon may attack twice this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR055.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Blood on Her Hands",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    specialization: Hero.Kassai,
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "oath-of-steel-red",
    functionalText: `Whenever you attack with a weapon this turn, put a +1{p} counter on it.  At the beginning of your end phase, remove all +1{p} counters from weapons you control.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR056.width-450.png",
    keywords: [],
    name: "Oath of Steel",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "slice-and-dice-red",
    functionalText: `Whenever you attack with a sword or dagger this turn;  - If it's your first weapon attack this turn, it gains +1{p}. - If it's your second weapon attack this turn, it gains +3{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR057.width-450.png",
    keywords: [],
    name: "Slice and Dice",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "slice-and-dice-yellow",
    functionalText: `Whenever you attack with a sword or dagger this turn;  - If it's your first weapon attack this turn, it gains +1{p}. - If it's your second weapon attack this turn, it gains +2p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR058.width-450.png",
    keywords: [],
    name: "Slice and Dice",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "slice-and-dice-blue",
    functionalText: `Whenever you attack with a sword or dagger this turn;  - If it's your first weapon attack this turn, it gains +1{p}. - If it's your second weapon attack this turn, it gains +1{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR059.width-450.png",
    keywords: [],
    name: "Slice and Dice",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "outland-skirmish-red",
    functionalText: `Your next 1H weapon attack this turn gains +3{p}.  The next time a weapon hits this turn, create a Copper token.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR066.width-450.png",
    keywords: [],
    name: "Outland Skirmish",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "outland-skirmish-yellow",
    functionalText: `Your next 1H weapon attack this turn gains +2{p}.  The next time a weapon hits this turn, create a Copper token.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR067.width-450.png",
    keywords: [],
    name: "Outland Skirmish",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Warrior,
    identifier: "outland-skirmish-blue",
    functionalText: `Your next 1H weapon attack this turn gains +1{p}.  The next time a weapon hits this turn, create a Copper token.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR068.width-450.png",
    keywords: [],
    name: "Outland Skirmish",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Warrior Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Mechanologist,
    identifier: "dissolution-sphere-yellow",
    functionalText: `Dissolution Sphere enters the arena with a steam counter on it.  At the beginning of your action phase, destroy Dissolution Sphere unless you remove a steam counter from it.  Whenever your hero would be dealt exactly 1 damage, prevent it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR069.width-450.png",
    keywords: [],
    name: "Dissolution Sphere",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 2,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Mechanologist,
    identifier: "micro-processor-blue",
    functionalText: `**Data Doll Specialization** *(You may only have Micro-processor in your deck if your hero is Data Doll.)*  **Once Per Turn Action** - 0: **Opt 1**  **Once Per Turn Action** - 0: Draw a card then put a card from your hand on top of your deck.  **Once Per Turn Action** - 0: Banish the top card of your deck.  The first time you activate Micro-processor each turn, gain 1 action point.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR070.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Micro-Processor",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 2,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Mechanologist,
    identifier: "signal-jammer-blue",
    functionalText: `Signal Jammer enters the arena with a steam counter on it.  At the beginning of your action phase, destroy Signal Jammer unless you remove a steam counter from it.  Each hero can't play more than 1 'non-attack' action card each turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR071.width-450.png",
    keywords: [],
    name: "Signal Jammer",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Mechanologist,
    identifier: "teklo-pounder-blue",
    functionalText: `Teklo Pounder enters the arena with 3 steam counters on it. When Teklo Pounder has no steam counters on it, destroy it.  **Once per Turn Effect** - Whenever you boost an attack action card, remove a steam counter from Teklo Pounder. If you do, the attack gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR072.width-450.png",
    keywords: [],
    name: "Teklo Pounder",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Item",
    cost: 2,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Mechanologist,
    identifier: "t-bone-red",
    functionalText: `If you control a card on the combat chain that was boosted, the defending hero must defend T-Bone with an equipment they control if able.  **Boost** *(As an additional cost to play T-Bone, you may banish the top card of your deck. If it's a Mechanologist card, T-Bone gains ***go again.***)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR073.width-450.png",
    keywords: [Keyword.Boost],
    name: "T-Bone",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "t-bone-yellow",
    functionalText: `If you control a card on the combat chain that was boosted, the defending hero must defend T-Bone with an equipment they control if able.  **Boost** *(As an additional cost to play T-Bone, you may banish the top card of your deck. If it's a Mechanologist card, T-Bone gains ***go again.***)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR074.width-450.png",
    keywords: [Keyword.Boost],
    name: "T-Bone",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "t-bone-blue",
    functionalText: `If you control a card on the combat chain that was boosted, the defending hero must defend T-Bone with an equipment they control if able.  **Boost** *(As an additional cost to play T-Bone, you may banish the top card of your deck. If it's a Mechanologist card, T-Bone gains ***go again.***)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR075.width-450.png",
    keywords: [Keyword.Boost],
    name: "T-Bone",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 1,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "payload-red",
    functionalText: `If you have **boosted** this combat chain, Payload gains **dominate.** *(The defending hero can't defend Payload with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR076.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Payload",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "payload-yellow",
    functionalText: `If you have **boosted** this combat chain, Payload gains **dominate.** *(The defending hero can't defend Payload with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR077.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Payload",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "payload-blue",
    functionalText: `If you have **boosted** this combat chain, Payload gains **dominate.** *(The defending hero can't defend Payload with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR078.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Payload",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "zoom-in-red",
    functionalText: `When you attack with Zoom in, **opt X**, where X is the number of times you have **boosted** this combat chain. *(Look at the top X cards of your deck. You may put them on the top and/or bottom in any order.)*  **Boost** *(As an additional cost to play Zoom In, you may banish the top card of your deck. If it's a Mechanologist card, Zoom In gains ***go again.***)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR079.width-450.png",
    keywords: [Keyword.Opt,Keyword.Boost],
    name: "Zoom In",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "zoom-in-yellow",
    functionalText: `When you attack with Zoom in, **opt X**, where X is the number of times you have **boosted** this combat chain. *(Look at the top X cards of your deck. You may put them on the top and/or bottom in any order.)*  **Boost** *(As an additional cost to play Zoom In, you may banish the top card of your deck. If it's a Mechanologist card, Zoom In gains ***go again.***)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR080.width-450.png",
    keywords: [Keyword.Opt,Keyword.Boost],
    name: "Zoom In",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "zoom-in-blue",
    functionalText: `When you attack with Zoom in, **opt X**, where X is the number of times you have **boosted** this combat chain. *(Look at the top X cards of your deck. You may put them on the top and/or bottom in any order.)*  **Boost** *(As an additional cost to play Zoom In, you may banish the top card of your deck. If it's a Mechanologist card, Zoom In gains ***go again.***)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR081.width-450.png",
    keywords: [Keyword.Opt,Keyword.Boost],
    name: "Zoom In",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Mechanologist,
    identifier: "rotary-ram-red",
    functionalText: `The next Mechanologist attack action card you play this turn gains +3{p}.  If you have **boosted** this turn, put Rotary Ram on the bottom of your deck.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR082.width-450.png",
    keywords: [],
    name: "Rotary Ram",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Mechanologist,
    identifier: "rotary-ram-yellow",
    functionalText: `The next Mechanologist attack action card you play this turn gains +2{p}.  If you have **boosted** this turn, put Rotary Ram on the bottom of your deck.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR083.width-450.png",
    keywords: [],
    name: "Rotary Ram",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Mechanologist,
    identifier: "rotary-ram-blue",
    functionalText: `The next Mechanologist attack action card you play this turn gains +1{p}.  If you have **boosted** this turn, put Rotary Ram on the bottom of your deck.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR084.width-450.png",
    keywords: [],
    name: "Rotary Ram",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Mechanologist Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "battering-bolt-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  If Battering Bolt hits a hero, they reveal their hand and discard all cards other than action cards. Then they lose 1{h} for each card discarded this way.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR088.width-450.png",
    keywords: [],
    name: "Battering Bolt",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "tri-shot-blue",
    functionalText: `You may activate target bow you control 2 additional times this turn.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR089.width-450.png",
    keywords: [],
    name: "Tri-shot",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "release-the-tension-red",
    functionalText: `Your next arrow attack this turn gains +3{p} and "Defense reactions can't be played from arsenal this chain link."  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS096.width-450.png",
    keywords: [],
    name: "Release the Tension",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "release-the-tension-yellow",
    functionalText: `Your next arrow attack this turn gains +2{p} and "Defense reactions can't be played from arsenal this chain link."  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS097.width-450.png",
    keywords: [],
    name: "Release the Tension",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "release-the-tension-blue",
    functionalText: `Your next arrow attack this turn gains +1{p} and "Defense reactions can't be played from arsenal this chain link."  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS098.width-450.png",
    keywords: [],
    name: "Release the Tension",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "fatigue-shot-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  When Fatigue Shot hits a hero, the base {p} of the first attack action card they play during their next turn is halved, rounded up. *(An attack with 5 base {p} becomes 3{p}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR094.width-450.png",
    keywords: [],
    name: "Fatigue Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "fatigue-shot-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  When Fatigue Shot hits a hero, the base {p} of the first attack action card they play during their next turn is halved, rounded up. *(An attack with 5 base {p} becomes 3{p}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR095.width-450.png",
    keywords: [],
    name: "Fatigue Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "fatigue-shot-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  When Fatigue Shot hits a hero, the base {p} of the first attack action card they play during their next turn is halved, rounded up. *(An attack with 5 base {p} becomes 3{p}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR096.width-450.png",
    keywords: [],
    name: "Fatigue Shot",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "timidity-point-red",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  When Timidity Point hits a hero, attacks they control lose and can't gain **dominate** during their next turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR097.width-450.png",
    keywords: [],
    name: "Timidity Point",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "timidity-point-yellow",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  When Timidity Point hits a hero, attacks they control lose and can't gain **dominate** during their next turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR098.width-450.png",
    keywords: [],
    name: "Timidity Point",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "timidity-point-blue",
    functionalText: `*(Arrows can only be played from arsenal and only if you control a bow.)*  When Timidity Point hits a hero, attacks they control lose and can't gain **dominate** during their next turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR099.width-450.png",
    keywords: [],
    name: "Timidity Point",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action – Arrow Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Ranger,
    identifier: "read-the-glide-path-red",
    functionalText: `Your next arrow attack this turn gains +3{p}.  **Opt 1** *(Look at the top card of your deck. You may put it on the bottom.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR100.width-450.png",
    keywords: [Keyword.Opt],
    name: "Read the Glide Path",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "read-the-glide-path-yellow",
    functionalText: `Your next arrow attack this turn gains +2{p}.  **Opt 1** *(Look at the top card of your deck. You may put it on the bottom.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR101.width-450.png",
    keywords: [Keyword.Opt],
    name: "Read the Glide Path",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Ranger,
    identifier: "read-the-glide-path-blue",
    functionalText: `Your next arrow attack this turn gains +1{p}.  **Opt 1** *(Look at the top card of your deck. You may put it on the bottom.)*  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR102.width-450.png",
    keywords: [Keyword.Opt],
    name: "Read the Glide Path",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Ranger Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "runic-reclamation-red",
    functionalText: `When Runic Reclamation hits a hero, destroy target aura they control. If you do, create a Runechant token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR104.width-450.png",
    keywords: [],
    name: "Runic Reclamation",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "swarming-gloomveil-red",
    functionalText: `If you have played or created 1 or more auras this turn, Swarming Gloomveil gains **go again.** If you have played and/or created 2 or more, it gains +1{p}. If you have played and/or created 3 or more, it gains "When this hits a hero, they can't prevent arcane damage from sources you control this turn."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR105.width-450.png",
    keywords: [],
    name: "Swarming Gloomveil",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "revel-in-runeblood-red",
    functionalText: `If you have played an attack action card and another 'non-attack action' action card this turn, create 4 Runechant tokens.  At the beginning of your end phase, destroy all Runechants you control.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR106.width-450.png",
    keywords: [],
    name: "Revel in Runeblood",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Runeblade,
    identifier: "runeblood-incantation-red",
    functionalText: `**Go again**  Runeblood Incantation enters the arena with 3 verse counters on it.  At the beginning of your action phase, remove a verse counter from Runeblood Incantation. If you do create a Runechant token. Otherwise, destroy Runeblood Incantation.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR107.width-450.png",
    keywords: [],
    name: "Runeblood Incantation",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Aura",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Runeblade,
    identifier: "runeblood-incantation-yellow",
    functionalText: `**Go again**  Runeblood Incantation enters the arena with 2 verse counters on it.  At the beginning of your action phase, remove a verse counter from Runeblood Incantation. If you do create a Runechant token. Otherwise, destroy Runeblood Incantation.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR108.width-450.png",
    keywords: [],
    name: "Runeblood Incantation",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Aura",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Runeblade,
    identifier: "runeblood-incantation-blue",
    functionalText: `**Go again**  Runeblood Incantation enters the arena with a verse counter on it.  At the beginning of your action phase, remove a verse counter from Runeblood Incantation. If you do create a Runechant token. Otherwise, destroy Runeblood Incantation.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR109.width-450.png",
    keywords: [],
    name: "Runeblood Incantation",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Aura",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Runeblade,
    identifier: "drowning-dire-red",
    functionalText: `If you have played or created an aura this turn, Drowning Dire gains **dominate.** *(The defending hero can't defend Drowning Dire with more than 1 card from their hand.)*  When Drowning Dire hits, you may put a 'non-attack' action card from your graveyard on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR110.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Drowning Dire",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "drowning-dire-yellow",
    functionalText: `If you have played or created an aura this turn, Drowning Dire gains **dominate.** *(The defending hero can't defend Drowning Dire with more than 1 card from their hand.)*  When Drowning Dire hits, you may put a 'non-attack' action card from your graveyard on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR111.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Drowning Dire",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "drowning-dire-blue",
    functionalText: `If you have played or created an aura this turn, Drowning Dire gains **dominate.** *(The defending hero can't defend Drowning Dire with more than 1 card from their hand.)*  When Drowning Dire hits, you may put a 'non-attack' action card from your graveyard on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR112.width-450.png",
    keywords: [Keyword.Dominate],
    name: "Drowning Dire",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "reek-of-corruption-red",
    functionalText: `If you have played or created an aura this turn, Reek of Corruption gains "When this hits a hero, they discard a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR113.width-450.png",
    keywords: [],
    name: "Reek of Corruption",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "reek-of-corruption-yellow",
    functionalText: `If you have played or created an aura this turn, Reek of Corruption gains "When this hits a hero, they discard a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR114.width-450.png",
    keywords: [],
    name: "Reek of Corruption",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "reek-of-corruption-blue",
    functionalText: `If you have played or created an aura this turn, Reek of Corruption gains "When this hits a hero, they discard a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR115.width-450.png",
    keywords: [],
    name: "Reek of Corruption",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "shrill-of-skullform-red",
    functionalText: `If you have played or created an aura this turn, Shrill of Skullform gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR116.width-450.png",
    keywords: [],
    name: "Shrill of Skullform",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "shrill-of-skullform-yellow",
    functionalText: `If you have played or created an aura this turn, Shrill of Skullform gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR117.width-450.png",
    keywords: [],
    name: "Shrill of Skullform",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Runeblade,
    identifier: "shrill-of-skullform-blue",
    functionalText: `If you have played or created an aura this turn, Shrill of Skullform gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR118.width-450.png",
    keywords: [],
    name: "Shrill of Skullform",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Runeblade Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Wizard,
    identifier: "aether-wildfire-red",
    functionalText: `Deal 4 arcane damage to target opposing hero.  If Aether Wildfire is played during an opponents turn, until end of turn, action card effects that deal arcane damage instead deal that much arcane damage plus X, where X is the damage dealt by Aether Wildfire.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR123.width-450.png",
    keywords: [],
    name: "Aether Wildfire",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "scour-blue",
    functionalText: `Destroy X target aura tokens and/or auras with cost 0 controlled by target hero. Then deal arcane damage to that hero equal to the number of auras destroyed this way.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR124.width-450.png",
    keywords: [],
    name: "Scour",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    specialCost: "X",
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "emeritus-scolding-red",
    functionalText: `Deal 4 arcane damage to target hero. If Emeritus Scolding is played during an opponents turn, instead deal 6 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS090.width-450.png",
    keywords: [],
    name: "Emeritus Scolding",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "emeritus-scolding-yellow",
    functionalText: `Deal 3 arcane damage to target hero. If Emeritus Scolding is played during an opponents turn, instead deal 5 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS091.width-450.png",
    keywords: [],
    name: "Emeritus Scolding",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "emeritus-scolding-blue",
    functionalText: `Deal 2 arcane damage to target hero. If Emeritus Scolding is played during an opponents turn, instead deal 4 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS092.width-450.png",
    keywords: [],
    name: "Emeritus Scolding",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "pry-red",
    functionalText: `Target hero reveals 3 cards from their hand. If Pry is played during an opponents turn, instead they reveal all cards in their hand.  You may choose a card revealed this way. If you do, that hero puts it on the bottom of their deck then draws a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR128.width-450.png",
    keywords: [],
    name: "Pry",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "pry-yellow",
    functionalText: `Target hero reveals 2 cards from their hand. If Pry is played during an opponents turn, instead they reveal all cards in their hand.  You may choose a card revealed this way. If you do, that hero puts it on the bottom of their deck then draws a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR129.width-450.png",
    keywords: [],
    name: "Pry",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "pry-blue",
    functionalText: `Target hero reveals a card from their hand. If Pry is played during an opponents turn, instead they reveal all cards in their hand.  You may choose a card revealed this way. If you do, that hero puts it on the bottom of their deck then draws a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR130.width-450.png",
    keywords: [],
    name: "Pry",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "pyroglyphic-protection-red",
    functionalText: `If your hero would be dealt arcane damage, prevent 3 arcane damage that source would deal.  At the beginning of your action phase, destroy Pyroglyphic Protection.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR131.width-450.png",
    keywords: [],
    name: "Pyroglyphic Protection",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action – Aura",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Wizard,
    identifier: "pyroglyphic-protection-yellow",
    functionalText: `If your hero would be dealt arcane damage, prevent 2 arcane damage that source would deal.  At the beginning of your action phase, destroy Pyroglyphic Protection.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR132.width-450.png",
    keywords: [],
    name: "Pyroglyphic Protection",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action – Aura",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Wizard,
    identifier: "pyroglyphic-protection-blue",
    functionalText: `If your hero would be dealt arcane damage, prevent 1 arcane damage that source would deal.  At the beginning of your action phase, destroy Pyroglyphic Protection.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR133.width-450.png",
    keywords: [],
    name: "Pyroglyphic Protection",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action – Aura",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Wizard,
    identifier: "timekeepers-whim-red",
    functionalText: `Deal 5 arcane damage to target hero.  If Timekeeper's Whim is played during an opponents turn, put it on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR134.width-450.png",
    keywords: [],
    name: "Timekeeper’s Whim",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "timekeepers-whim-yellow",
    functionalText: `Deal 4 arcane damage to target hero.  If Timekeeper's Whim is played during an opponents turn, put it on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR135.width-450.png",
    keywords: [],
    name: "Timekeeper’s Whim",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Wizard,
    identifier: "timekeepers-whim-blue",
    functionalText: `Deal 3 arcane damage to target hero.  If Timekeeper's Whim is played during an opponents turn, put it on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR136.width-450.png",
    keywords: [],
    name: "Timekeeper’s Whim",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Illusionist,
    identifier: "fractal-replication-red",
    functionalText: `When you play or defend with Fractal Replication, it gains the abilities and effects of all Illusionist attack action cards on the combat chain.  Fractal Replication's {p} is equal to the greatest base {p} among Illusionist attack action cards on the combat chain.  Fractal Replication's {d} is equal to the greatest base {d} among Illusionist attack action cards on the combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR138.width-450.png",
    keywords: [],
    name: "Fractal Replication",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
    cost: 0,
    
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    specialDefense: "*",
    specialPower: "*",
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "miraging-metamorph-red",
    functionalText: `**Phantasm** *(When Miraging Metamorph is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Mirror Image and close the combat chain.)*  When Miraging Metamorph is destroyed, create a token that's a copy of an aura you control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR139.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Miraging Metamorph",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "shimmers-of-silver-blue",
    functionalText: `**Once per Turn Effect** - Whenever you attack with an Illusionist aura weapon, put a +1{p} counter on it.  **Spectra** *(Shimmers of Silver can be attacked. When Shimmers of Silver becomes the target of an attack, destroy it and close the combat chain. The attack does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR140.width-450.png",
    keywords: [Keyword.Spectra],
    name: "Shimmers of Silver",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Aura",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Illusionist,
    identifier: "haze-bending-blue",
    functionalText: `**Once per Turn Effect** - Whenever Haze Bending or another Illusionist non-token aura you control is destroyed, create a Spectral Shield token.  **Spectra** *(Dispersion Haze can be attacked. When Dispersion Haze becomes the target of an attack, destroy it and close the combat chain. The attack does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS093.width-450.png",
    keywords: [Keyword.Spectra],
    name: "Haze Bending",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Aura",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Illusionist,
    identifier: "passing-mirage-blue",
    functionalText: `Your first Illusionist attack each turn loses and can't gain **phantasm.**  **Spectra** *(Passing Mirage can be attacked. When Passing Mirage becomes the target of an attack, destroy it and close the combat chain. The attack does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS094.width-450.png",
    keywords: [Keyword.Spectra],
    name: "Passing Mirage",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Aura",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Illusionist,
    identifier: "pierce-reality-blue",
    functionalText: `The first Illusionist attack action card you play each turn has +2{p}.  **Spectra** *(Piercing Reality can be attacked. When Piercing Reality becomes the target of an attack, destroy it and close the combat chain. The attack does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS095.width-450.png",
    keywords: [Keyword.Spectra],
    name: "Pierce Reality",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Aura",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Illusionist,
    identifier: "coalescence-mirage-red",
    functionalText: `**Phantasm** *(If Coalescence Mirage is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Coalescence Mirage and close the combat chain.)*  When Coalescence Mirage is destroyed, you may put an Illusionist aura card with 0 from your hand into the arena.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR144.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Coalescence Mirage",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "coalescence-mirage-yellow",
    functionalText: `**Phantasm** *(If Coalescence Mirage is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Coalescence Mirage and close the combat chain.)*  When Coalescence Mirage is destroyed, you may put an Illusionist aura card with 0 from your hand into the arena.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR145.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Coalescence Mirage",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "coalescence-mirage-blue",
    functionalText: `**Phantasm** *(If Coalescence Mirage is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Coalescence Mirage and close the combat chain.)*  When Coalescence Mirage is destroyed, you may put an Illusionist aura card with 0 from your hand into the arena.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR146.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Coalescence Mirage",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "phantasmal-haze-red",
    functionalText: `**Phantasm** *(If Phantasmal Haze is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Phantasmal Haze and close the combat chain.)*  When Phantasmal Haze is destroyed, create a Spectral Shield token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR147.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Phantasmal Haze",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 8,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "phantasmal-haze-yellow",
    functionalText: `**Phantasm** *(If Phantasmal Haze is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Phantasmal Haze and close the combat chain.)*  When Phantasmal Haze is destroyed, create a Spectral Shield token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR148.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Phantasmal Haze",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 2,
    power: 7,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "phantasmal-haze-blue",
    functionalText: `**Phantasm** *(If Phantasmal Haze is defended by a non-Illusionist attack action card with 6 or more {p}, destroy Phantasmal Haze and close the combat chain.)*  When Phantasmal Haze is destroyed, create a Spectral Shield token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR149.width-450.png",
    keywords: [Keyword.Phantasm],
    name: "Phantasmal Haze",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action – Attack",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 3,
    power: 6,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Illusionist,
    identifier: "veiled-intentions-red",
    functionalText: `**Go again**  The next attack action card you play this turn is Illusionist in addition to its other card, and gains +4{p}, **phantasm**, and "When this is destroyed, draw a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR150.width-450.png",
    keywords: [],
    name: "Veiled Intentions",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Illusionist,
    identifier: "veiled-intentions-yellow",
    functionalText: `**Go again**  The next attack action card you play this turn is Illusionist in addition to its other card, and gains +3{p}, **phantasm**, and "When this is destroyed, draw a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR151.width-450.png",
    keywords: [],
    name: "Veiled Intentions",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Illusionist,
    identifier: "veiled-intentions-blue",
    functionalText: `**Go again**  The next attack action card you play this turn is Illusionist in addition to its other card, and gains +2{p}, **phantasm**, and "When this is destroyed, draw a card."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR152.width-450.png",
    keywords: [],
    name: "Veiled Intentions",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Illusionist Action",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "bingo-red",
    functionalText: `When Bingo hits a hero, they reveal a card from their hand. If an attack action card is revealed this way, Bingo gains **go again.** If a 'non-attack' action card is revealed this way, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR156.width-450.png",
    keywords: [],
    name: "Bingo",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 5,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "firebreathing-red",
    functionalText: `**Instant** - {r}: Firebreathing gains +1{p}. Activate this ability only while Firebreathing is attacking.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR157.width-450.png",
    keywords: [],
    name: "Firebreathing",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "cash-out-blue",
    functionalText: `As an additional cost to play Cash Out, you may destroy any number of weapons, equipment and/or non-token items you control.  Create a Silver token for each permanent destroyed this way.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR158.width-450.png",
    keywords: [],
    name: "Cash Out",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "knick-knack-bric-a-brac-red",
    functionalText: `As an additional cost to play Knick Knack Bric-a-brac, you may destroy any number of Copper, Silver, and/or Gold you control.  Search your deck for a card with Amulet, Potion, or Talisman in its name, put it into the arena, then shuffle. For each 4 Copper, 2 Silver, and/or 1 Gold destroyed this way, repeat this process.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR159.width-450.png",
    keywords: [],
    name: "Knick Knack Bric-a-brac",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 3,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "this-rounds-on-me-blue",
    functionalText: `Each hero draws a card.  Until the start of your next turn, attacks that target you have -1{p}.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR160.width-450.png",
    keywords: [],
    name: "This Round’s on Me",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "life-of-the-party-red",
    functionalText: `You may discard or destroy a card you control named Crazy Brew rather than pay Life of the Party's {r} cost. If you do, choose all modes, otherwise choose 1 at random;  - Life of the Party gains "When this hits, gain life 2{h}." - Life of the Party gains +2{p}. - Life of the Party gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS084.width-450.png",
    keywords: [],
    name: "Life of the Party",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    power: 4,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "life-of-the-party-yellow",
    functionalText: `You may discard or destroy a card you control named Crazy Brew rather than pay Life of the Party's {r} cost. If you do, choose all modes, otherwise choose 1 at random;  - Life of the Party gains "When this hits, gain life 2{h}." - Life of the Party gains +2{p}. - Life of the Party gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS085.width-450.png",
    keywords: [],
    name: "Life of the Party",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    power: 3,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "life-of-the-party-blue",
    functionalText: `You may discard or destroy a card you control named Crazy Brew rather than pay Life of the Party's {r} cost. If you do, choose all modes, otherwise choose 1 at random;  - Life of the Party gains "When this hits, gain life 2{h}." - Life of the Party gains +2{p}. - Life of the Party gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS086.width-450.png",
    keywords: [],
    name: "Life of the Party",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Attack",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    power: 2,
    talents: [],
    
    
    
    
    subType: ActionSubType.Attack,
  },{
    class: Class.Generic,
    identifier: "high-striker-red",
    functionalText: `The next time an attack you control hits this turn, create 6 Copper tokens.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR164.width-450.png",
    keywords: [],
    name: "High Striker",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "high-striker-yellow",
    functionalText: `The next time an attack you control hits this turn, create 4 Copper tokens.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR165.width-450.png",
    keywords: [],
    name: "High Striker",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "high-striker-blue",
    functionalText: `The next time an attack you control hits this turn, create 2 Copper tokens.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR166.width-450.png",
    keywords: [],
    name: "High Striker",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "pick-a-card-any-card-red",
    functionalText: `Look at target opponent's hand then name a card.  Choose a random card from their hand and reveal it. If it's the named card, create a Silver token. Repeat this process thrice.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR167.width-450.png",
    keywords: [],
    name: "Pick a Card, Any Card",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "pick-a-card-any-card-yellow",
    functionalText: `Look at target opponent's hand then name a card.  Choose a random card from their hand and reveal it. If it's the named card, create a Silver token. Repeat this process twice.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR168.width-450.png",
    keywords: [],
    name: "Pick a Card, Any Card",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "pick-a-card-any-card-blue",
    functionalText: `Look at target opponent's hand then name a card.  Choose a random card from their hand and reveal it. If it's the named card, create a Silver token. Repeat this process once.  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR169.width-450.png",
    keywords: [],
    name: "Pick a Card, Any Card",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "smashing-good-time-red",
    functionalText: `The next time an attack action card hits a hero this turn, you may destroy an item they control with 2 or less{r}  If Smashing Good Time is played from arsenal, the next attack action card you play this turn gains +3{p}  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR170.width-450.png",
    keywords: [],
    name: "Smashing Good Time",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "smashing-good-time-yellow",
    functionalText: `The next time an attack action card hits a hero this turn, you may destroy an item they control with 2 or less{r}  If Smashing Good Time is played from arsenal, the next attack action card you play this turn gains +2{p}  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR171.width-450.png",
    keywords: [],
    name: "Smashing Good Time",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "smashing-good-time-blue",
    functionalText: `The next time an attack action card hits a hero this turn, you may destroy an item they control with 2 or less{r}  If Smashing Good Time is played from arsenal, the next attack action card you play this turn gains +1{p}  **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR172.width-450.png",
    keywords: [],
    name: "Smashing Good Time",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.NonAttack,
  },{
    class: Class.Generic,
    identifier: "amulet-of-assertiveness-yellow",
    functionalText: `**Go again**  **Attack Reaction** - Destroy Amulet of Assertiveness: Target attack gains "When this hits, banish the top card of your deck. If it's an attack action card, you may play it this turn." Activate this ability only if you have 4 or more cards in hand.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR176.width-450.png",
    keywords: [],
    name: "Amulet of Assertiveness",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "amulet-of-echoes-blue",
    functionalText: `**Go again**  **Instant** - Destroy Amulet of Echoes: Target hero discards 2 cards. Activate this ability only if they have played 2 or more cards with the same name this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR177.width-450.png",
    keywords: [],
    name: "Amulet of Echoes",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "amulet-of-havencall-blue",
    functionalText: `**Go again**  **Defense Reaction** - Destroy Amulet of Havencall: Search your deck for a card named Rally the Rearguard, add it to this chain link as a defending card, then shuffle. Activate this ability only if you have no cards in hand.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR178.width-450.png",
    keywords: [],
    name: "Amulet of Havencall",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "amulet-of-ignition-yellow",
    functionalText: `**Go again**  **Instant** - Destroy Amulet of Ignition: The next ability you activate this turn costs {r} less. Activate this ability only if you haven't played a card or activated an ability this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR179.width-450.png",
    keywords: [],
    name: "Amulet of Ignition",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "amulet-of-intervention-blue",
    functionalText: `**Go again**  **Instant** - Destroy Amulet of Intervention: Prevent the next 1 damage that would be dealt to your hero this turn. Activate this ability only while your hero is the target of a source that would deal damage equal to or greater than your hero's {h}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR180.width-450.png",
    keywords: [],
    name: "Amulet of Intervention",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "amulet-of-oblation-blue",
    functionalText: `**Go again**  **Instant** - Destroy Amulet of Oblation: Until end of turn, target attack action gains "If this would be put into a graveyard, instead put it on the bottom of its owner's deck." Activate this ability only if a card has entered a graveyard this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR181.width-450.png",
    keywords: [],
    name: "Amulet of Oblation",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "clarity-potion-blue",
    functionalText: `**Instant** - Destroy Clarity Potion: **Opt 2.** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR182.width-450.png",
    keywords: [],
    name: "Clarity Potion",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "healing-potion-blue",
    functionalText: `**Action** - Destroy Healing Potion: Gain 2{h}. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR183.width-450.png",
    keywords: [],
    name: "Healing Potion",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "potion-of-seeing-blue",
    functionalText: `**Instant** - Destroy Potion of Seeing: Look at target hero's hand.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR184.width-450.png",
    keywords: [],
    name: "Potion of Seeing",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "potion-of-deja-vu-blue",
    functionalText: `**Instant** - Destroy Potion of Déjà Vu: Put all cards from your pitch zone on top of your deck in any order. *(Opponents don't get to see the order of the cards.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR185.width-450.png",
    keywords: [],
    name: "Potion of Deja Vu",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "potion-of-ironhide-blue",
    functionalText: `**Instant** - Destroy Potion of Ironhide: Attack action cards you own gain +1{d} this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR186.width-450.png",
    keywords: [],
    name: "Potion of Ironhide",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "potion-of-luck-blue",
    functionalText: `**Instant** - Destroy Potion of Luck: Shuffle your hand and arsenal into your deck then draw that many cards.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR187.width-450.png",
    keywords: [],
    name: "Potion of Luck",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "talisman-of-balance-blue",
    functionalText: `**Go again**  At the beginning of your end phase, if you have less cards in arsenal than an opposing hero, destroy Talisman of Balance and put the top card of your deck into an empty arsenal zone you control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR188.width-450.png",
    keywords: [],
    name: "Talisman of Balance",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "talisman-of-cremation-blue",
    functionalText: `**Go again**  When you play a card from your banished zone, destroy Talisman of Cremation and name a card. Banish all cards with the chosen name from each opposing hero's graveyard.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR189.width-450.png",
    keywords: [],
    name: "Talisman of Cremation",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "talisman-of-featherfoot-yellow",
    functionalText: `**Go again**  When an attack you control gains exactly +1{p} from an effect during the reaction step, destroy Talisman of Featherfoot and the attack gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR190.width-450.png",
    keywords: [],
    name: "Talisman of Featherfoot",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "talisman-of-recompense-yellow",
    functionalText: `**Go again**  Whenever you pitch a card, if you would gain exactly one {r}, instead destroy Talisman of Recompense and gain {r}{r}{r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR191.width-450.png",
    keywords: [],
    name: "Talisman of Recompense",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "talisman-of-tithes-blue",
    functionalText: `**Go again**  If an opponent would draw 1 or more cards during your action phase, instead destroy Talisman of Tithes and they draw that many cards minus 1.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR192.width-450.png",
    keywords: [],
    name: "Talisman of Tithes",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  },{
    class: Class.Generic,
    identifier: "talisman-of-warfare-yellow",
    functionalText: `**Go again**  When a source you control deals exactly 2 damage to an opposing hero, destroy Talisman of Warfare and all cards in all arsenals.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR193.width-450.png",
    keywords: [],
    name: "Talisman of Warfare",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Generic Action – Item",
    cost: 0,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Item,
  }];
  const attackReactions: ActionCard[] = [{
    class: Class.Ninja,
    identifier: "ancestral-empowerment-red",
    functionalText: `Target Ninja attack action card gains +1{p}.  Draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP103.width-450.png",
    keywords: [],
    name: "Ancestral Empowerment",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Ninja – Attack Reaction",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "glint-the-quicksilver-blue",
    functionalText: `Target weapon attack gains **go again**.  **Reprise** - If the defending hero has defended with a card from their hand this chain link, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP147.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Glint the Quicksilver",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "rout-red",
    functionalText: `Target weapon attack gains +3{p}.  **Reprise** - If the defending hero has defended with a card from their hand this chain link, you may return target non-equipment defending card to its owners hand.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP148.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Rout",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "singing-steelblade-yellow",
    functionalText: `**Dorinthea Specialization** *(You may only have Singing Steelblade in your deck if your hero is Dorinthea.)*  Target weapon attack gains +1{p}.  **Reprise** - If the defending hero has defended with a card from hand this chain link, search your deck for an attack reaction card, banish it face up, then shuffle your deck. You may play it this chain link.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP149.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Reprise],
    name: "Singing Steelblade",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    specialization: Hero.Dorinthea,
    
  },{
    class: Class.Warrior,
    identifier: "overpower-red",
    functionalText: `Target weapon attack gains +4{p}  **Reprise** - If the defending hero has defended with a card from their hand this chain link, instead it gains +6{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/TEA10.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Overpower",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "overpower-yellow",
    functionalText: `Target weapon attack gains +3{p}  **Reprise** - If the defending hero has defended with a card from their hand this chain link, instead it gains +5{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP154.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Overpower",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "overpower-blue",
    functionalText: `Target weapon attack gains +2{p}  **Reprise** - If the defending hero has defended with a card from their hand this chain link, instead it gains +4{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP155.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Overpower",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 3,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "ironsong-response-red",
    functionalText: `**Reprise** - If the defending hero has defended with a card from their hand this chain link, target weapon attack gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS008-P.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Ironsong Response",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "ironsong-response-yellow",
    functionalText: `**Reprise** - If the defending hero has defended with a card from their hand this chain link, target weapon attack gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS030.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Ironsong Response",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "ironsong-response-blue",
    functionalText: `**Reprise** - If the defending hero has defended with a card from their hand this chain link, target weapon attack gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS031.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Ironsong Response",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "biting-blade-red",
    functionalText: `Target weapon attack gains +3{p}.  **Reprise** - If the defending hero has defended with a card from their hand this chain link, weapons you control gain +1{p} until end of turn`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/TEA8.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Biting Blade",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.DorintheaHeroDeck,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "biting-blade-yellow",
    functionalText: `Target weapon attack gains +2{p}.  **Reprise** - If the defending hero has defended with a card from their hand this chain link, weapons you control gain +1{p} until end of turn`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_136.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Biting Blade",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "biting-blade-blue",
    functionalText: `Target weapon attack gains +1{p}.  **Reprise** - If the defending hero has defended with a card from their hand this chain link, weapons you control gain +1{p} until end of turn`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/TEA20.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Biting Blade",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.DorintheaHeroDeck,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "stroke-of-foresight-red",
    functionalText: `Target weapon attack gains +3{p}.  **Reprise** - If the defending hero has defended with a card from their hand this chain link, draw a card, then put a card from your hand on the top or bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/TEA9.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Stroke of Foresight",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "stroke-of-foresight-yellow",
    functionalText: `Target weapon attack gains +2{p}.  **Reprise** - If the defending hero has defended with a card from their hand this chain link, draw a card, then put a card from your hand on the top or bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/TEA17.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Stroke of Foresight",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "stroke-of-foresight-blue",
    functionalText: `Target weapon attack gains +1{p}.  **Reprise** - If the defending hero has defended with a card from their hand this chain link, draw a card, then put a card from your hand on the top or bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP170.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Stroke of Foresight",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "pummel-red",
    functionalText: `Choose 1; - Target club or hammer weapon attack gains +4{p}. - Target attack action with cost 2 or greater gains +4{p} and “If this hits a hero, they discard a card.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP399.width-450.png",
    keywords: [],
    name: "Pummel",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Generic Attack Reaction",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "pummel-yellow",
    functionalText: `Choose 1; - Target club or hammer weapon attack gains +3{p}. - Target attack action with cost 2 or greater gains +3{p} and “If this hits a hero, they discard a card.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP400.width-450.png",
    keywords: [],
    name: "Pummel",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Generic Attack Reaction",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "pummel-blue",
    functionalText: `Choose 1; - Target club or hammer weapon attack gains +2{p}. - Target attack action with cost 2 or greater gains +2{p} and “If this hits a hero, they discard a card.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO27.width-450.png",
    keywords: [],
    name: "Pummel",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Generic Attack Reaction",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "razor-reflex-red",
    functionalText: `Choose 1; - Target sword or dagger weapon attack gains +3{p}. - Target attack action card with cost 1 or less gains +3{p} and “If this hits, this attack gains **go again**.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/TEA16.width-450.png",
    keywords: [],
    name: "Razor Reflex",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Generic Attack Reaction",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "razor-reflex-yellow",
    functionalText: `Choose 1; - Target sword or dagger weapon attack gains +2{p}. - Target attack action card with cost 1 or less gains +2{p} and “If this hits, this attack gains **go again**.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP403.width-450.png",
    keywords: [],
    name: "Razor Reflex",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Generic Attack Reaction",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "razor-reflex-blue",
    functionalText: `Choose 1; - Target sword or dagger weapon attack gains +1{p}. - Target attack action card with cost 1 or less gains +1{p} and “If this hits, this attack gains **go again**.”`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP404.width-450.png",
    keywords: [],
    name: "Razor Reflex",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.AttackReaction,
    typeText: "Generic Attack Reaction",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "twinning-blade-yellow",
    functionalText: `You may attack an additional time with target sword this turn. *(You must have an action point to attack an additional time.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP150.width-450.png",
    keywords: [],
    name: "Twinning Blade",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "unified-decree-yellow",
    functionalText: `Target weapon attack gains +3{p}.  **Reprise** - If the defending hero has defended with a card from their hand this chain link, look at the top card of your deck. If it's an attack reaction card, you may banish it. If you do, you may play it this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU83.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Unified Decree",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "out-for-blood-red",
    functionalText: `Target weapon attack gains +3{p}.  **Reprise** - If the defending hero has defended with a card from their hand this chain link, your next attack this turn gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP165.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Out for Blood",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "out-for-blood-yellow",
    functionalText: `Target weapon attack gains +2{p}.  **Reprise** - If the defending hero has defended with a card from their hand this chain link, your next attack this turn gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP166.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Out for Blood",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "out-for-blood-blue",
    functionalText: `Target weapon attack gains +1{p}.  **Reprise** - If the defending hero has defended with a card from their hand this chain link, your next attack this turn gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP167.width-450.png",
    keywords: [Keyword.Reprise],
    name: "Out for Blood",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "lunging-press-blue",
    functionalText: `Target attack action card gains +1{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/IRA011-P_6omATzN.width-450.png",
    keywords: [],
    name: "Lunging Press",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.IraWelcomeDeck,Release.KatsuHeroDeck,Release.CrucibleOfWar],
    type: Type.AttackReaction,
    typeText: "Generic Attack Reaction",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "beacon-of-victory-yellow",
    functionalText: `As an additional cost to play Beacon of Victory, banish X cards from your hero's soul. X can't be 0.  Target attack gains +X{p}.  If you've **charged** this turn, search your deck for an action card with cost X or less, reveal it, put it into your hand, then shuffle your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON033.width-450.png",
    keywords: [],
    name: "Beacon of Victory",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.AttackReaction,
    typeText: "Light Warrior Attack Reaction",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Light],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "courageous-steelhand-red",
    functionalText: `If you've **charged** this turn, target attack gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL012.width-450.png",
    keywords: [],
    name: "Courageous Steelhand",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.AttackReaction,
    typeText: "Light Warrior Attack Reaction",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Light],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "courageous-steelhand-yellow",
    functionalText: `If you've **charged** this turn, target attack gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL018.width-450.png",
    keywords: [],
    name: "Courageous Steelhand",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.AttackReaction,
    typeText: "Light Warrior Attack Reaction",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Light],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "courageous-steelhand-blue",
    functionalText: `If you've **charged** this turn, target attack gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON059.width-450.png",
    keywords: [],
    name: "Courageous Steelhand",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.AttackReaction,
    typeText: "Light Warrior Attack Reaction",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Light],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "shatter-yellow",
    functionalText: `Until end of turn, target 2H weapon gains "Whenever this would deal {p} damage, instead you may destroy target defending equipment with {d} less than the damage that would be dealt this way.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR054.width-450.png",
    keywords: [],
    name: "Shatter",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "blade-runner-red",
    functionalText: `Target 1H weapon attack gains **go again.**  Your next weapon attack this turn gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR060.width-450.png",
    keywords: [],
    name: "Blade Runner",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "blade-runner-yellow",
    functionalText: `Target 1H weapon attack gains **go again.**  Your next weapon attack this turn gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR061.width-450.png",
    keywords: [],
    name: "Blade Runner",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "blade-runner-blue",
    functionalText: `Target 1H weapon attack gains **go again.**  Your next weapon attack this turn gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR062.width-450.png",
    keywords: [],
    name: "Blade Runner",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "in-the-swing-red",
    functionalText: `Play In the Swing only if you have attacked 2 or more times with weapons this turn.  Target weapon attack gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB057.width-450.png",
    keywords: [],
    name: "In the Swing",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "in-the-swing-yellow",
    functionalText: `Play In the Swing only if you have attacked 2 or more times with weapons this turn.  Target weapon attack gains +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR064.width-450.png",
    keywords: [],
    name: "In the Swing",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "in-the-swing-blue",
    functionalText: `Play In the Swing only if you have attacked 2 or more times with weapons this turn.  Target weapon attack gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR065.width-450.png",
    keywords: [],
    name: "In the Swing",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.AttackReaction,
    typeText: "Warrior Attack Reaction",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  }];
  const defenseReactions: ActionCard[] = [{
    class: Class.Brute,
    identifier: "reckless-swing-blue",
    functionalText: `As an additional cost to play Reckless Swing, discard a random card.  If the discarded card has 6 or more {p}, deal 2 damage to the attacking hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP013.width-450.png",
    keywords: [],
    name: "Reckless Swing",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Brute Defense Reaction",
    cost: 0,
    defense: 4,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Guardian,
    identifier: "staunch-response-red",
    functionalText: `As an additional cost to play Staunch Response you may pay {r}{r}{r}{r}. If you do, Staunch Response gains +3{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP058.width-450.png",
    keywords: [],
    name: "Staunch Response",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Guardian Defense Reaction",
    cost: 2,
    defense: 7,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Guardian,
    identifier: "staunch-response-yellow",
    functionalText: `As an additional cost to play Staunch Response you may pay {r}{r}{r}{r}. If you do, Staunch Response gains +3{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP059.width-450.png",
    keywords: [],
    name: "Staunch Response",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Guardian Defense Reaction",
    cost: 2,
    defense: 6,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Guardian,
    identifier: "staunch-response-blue",
    functionalText: `As an additional cost to play Staunch Response you may pay {r}{r}{r}{r}. If you do, Staunch Response gains +3{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO20.width-450.png",
    keywords: [],
    name: "Staunch Response",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Guardian Defense Reaction",
    cost: 2,
    defense: 5,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Ninja,
    identifier: "flic-flak-red",
    functionalText: `If the next card you defend with this turn is a card with **combo**, it gains +2{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP113.width-450.png",
    keywords: [],
    name: "Flic Flak",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Ninja – Defense Reaction",
    cost: 0,
    defense: 4,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Ninja,
    identifier: "flic-flak-yellow",
    functionalText: `If the next card you defend with this turn is a card with **combo**, it gains +2{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP114.width-450.png",
    keywords: [],
    name: "Flic Flak",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Ninja – Defense Reaction",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Ninja,
    identifier: "flic-flak-blue",
    functionalText: `If the next card you defend with this turn is a card with **combo**, it gains +2{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/KSU25.width-450.png",
    keywords: [],
    name: "Flic Flak",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.KatsuHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Ninja – Defense Reaction",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "steelblade-shunt-red",
    functionalText: `If Steelblade Shunt defends a weapon attack, deal 1 damage to the attacking hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/TEA11.width-450.png",
    keywords: [],
    name: "Steelblade Shunt",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Warrior Defense Reaction",
    cost: 1,
    defense: 6,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "steelblade-shunt-yellow",
    functionalText: `If Steelblade Shunt defends a weapon attack, deal 1 damage to the attacking hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP157.width-450.png",
    keywords: [],
    name: "Steelblade Shunt",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Warrior Defense Reaction",
    cost: 1,
    defense: 5,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Warrior,
    identifier: "steelblade-shunt-blue",
    functionalText: `If Steelblade Shunt defends a weapon attack, deal 1 damage to the attacking hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP158.width-450.png",
    keywords: [],
    name: "Steelblade Shunt",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Warrior Defense Reaction",
    cost: 1,
    defense: 4,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "unmovable-red",
    functionalText: `*(Defense reactions can be played from hand or arsenal to defend. It costs 3 to defend with Unmovable.)*  If Unmovable is played from arsenal, it gains +1{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP411.width-450.png",
    keywords: [],
    name: "Unmovable",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Generic Defense Reaction",
    cost: 3,
    defense: 7,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "unmovable-yellow",
    functionalText: `*(Defense reactions can be played from hand or arsenal to defend. It costs 3 to defend with Unmovable.)*  If Unmovable is played from arsenal, it gains +1{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP412.width-450.png",
    keywords: [],
    name: "Unmovable",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Generic Defense Reaction",
    cost: 3,
    defense: 6,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "unmovable-blue",
    functionalText: `*(Defense reactions can be played from hand or arsenal to defend. It costs 3 to defend with Unmovable.)*  If Unmovable is played from arsenal, it gains +1{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP413.width-450.png",
    keywords: [],
    name: "Unmovable",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Generic Defense Reaction",
    cost: 3,
    defense: 5,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "sink-below-red",
    functionalText: `You may put a card from your hand on the bottom of your deck. If you do, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP408.width-450.png",
    keywords: [],
    name: "Sink Below",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Generic Defense Reaction",
    cost: 0,
    defense: 4,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "sink-below-yellow",
    functionalText: `You may put a card from your hand on the bottom of your deck. If you do, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP409.width-450.png",
    keywords: [],
    name: "Sink Below",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Generic Defense Reaction",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "sink-below-blue",
    functionalText: `You may put a card from your hand on the bottom of your deck. If you do, draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP410.width-450.png",
    keywords: [],
    name: "Sink Below",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.DefenseReaction,
    typeText: "Generic Defense Reaction",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Ranger,
    identifier: "take-cover-red",
    functionalText: `**Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP234.width-450.png",
    keywords: [Keyword.Reload],
    name: "Take Cover",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.DefenseReaction,
    typeText: "Ranger Defense Reaction",
    cost: 0,
    defense: 4,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Ranger,
    identifier: "take-cover-yellow",
    functionalText: `**Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP235.width-450.png",
    keywords: [Keyword.Reload],
    name: "Take Cover",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.DefenseReaction,
    typeText: "Ranger Defense Reaction",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Ranger,
    identifier: "take-cover-blue",
    functionalText: `**Reload** *(If you have no cards in your arsenal, you may put a card from your hand face down into your arsenal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP236.width-450.png",
    keywords: [Keyword.Reload],
    name: "Take Cover",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.DefenseReaction,
    typeText: "Ranger Defense Reaction",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Runeblade,
    identifier: "reduce-to-runechant-red",
    functionalText: `Reduce to Runechant costs {r} less to play for each Runechant you control.  Create a Runechant token. *(It's an aura with “When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.”)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS015-P.width-450.png",
    keywords: [],
    name: "Reduce to Runechant",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.DefenseReaction,
    typeText: "Runeblade Defense Reaction",
    cost: 1,
    defense: 4,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Runeblade,
    identifier: "reduce-to-runechant-yellow",
    functionalText: `Reduce to Runechant costs {r} less to play for each Runechant you control.  Create a Runechant token. *(It's an aura with “When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.”)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS039.width-450.png",
    keywords: [],
    name: "Reduce to Runechant",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.DefenseReaction,
    typeText: "Runeblade Defense Reaction",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Runeblade,
    identifier: "reduce-to-runechant-blue",
    functionalText: `Reduce to Runechant costs {r} less to play for each Runechant you control.  Create a Runechant token. *(It's an aura with “When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.”)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS040.width-450.png",
    keywords: [],
    name: "Reduce to Runechant",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.DefenseReaction,
    typeText: "Runeblade Defense Reaction",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Wizard,
    identifier: "absorb-in-aether-red",
    functionalText: `The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus 2.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC123.width-450.png",
    keywords: [],
    name: "Absorb in Aether",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.DefenseReaction,
    typeText: "Wizard Defense Reaction",
    cost: 1,
    defense: 4,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Wizard,
    identifier: "absorb-in-aether-yellow",
    functionalText: `The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus 2.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC124.width-450.png",
    keywords: [],
    name: "Absorb in Aether",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.DefenseReaction,
    typeText: "Wizard Defense Reaction",
    cost: 1,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Wizard,
    identifier: "absorb-in-aether-blue",
    functionalText: `The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus 2.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC125.width-450.png",
    keywords: [],
    name: "Absorb in Aether",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.DefenseReaction,
    typeText: "Wizard Defense Reaction",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "fate-foreseen-red",
    functionalText: `**Opt 1** *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB024.width-450.png",
    keywords: [Keyword.Opt],
    name: "Fate Foreseen",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.DefenseReaction,
    typeText: "Generic Defense Reaction",
    cost: 0,
    defense: 4,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "fate-foreseen-yellow",
    functionalText: `**Opt 1** *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP406.width-450.png",
    keywords: [Keyword.Opt],
    name: "Fate Foreseen",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.DefenseReaction,
    typeText: "Generic Defense Reaction",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "fate-foreseen-blue",
    functionalText: `**Opt 1** *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP407.width-450.png",
    keywords: [Keyword.Opt],
    name: "Fate Foreseen",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.DefenseReaction,
    typeText: "Generic Defense Reaction",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Ranger,
    identifier: "tripwire-trap-red",
    functionalText: `*(Traps can only be played from arsenal.)*  Hit effects don't trigger this chain link unless the attacking hero pays {r}. *(The attacking hero chooses whether to pay {r} as Tripwire Trap resolves.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU126.width-450.png",
    keywords: [],
    name: "Tripwire Trap",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.DefenseReaction,
    typeText: "Ranger Defense Reaction – Trap",
    cost: 0,
    defense: 4,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Trap,
  },{
    class: Class.Ranger,
    identifier: "pitfall-trap-yellow",
    functionalText: `*(Traps can only be played from arsenal.)*  Deal 2 damage to the attacking hero unless they pay {r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI029.width-450.png",
    keywords: [],
    name: "Pitfall Trap",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.CrucibleOfWar],
    type: Type.DefenseReaction,
    typeText: "Ranger Defense Reaction – Trap",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Trap,
  },{
    class: Class.Ranger,
    identifier: "rockslide-trap-blue",
    functionalText: `*(Traps can only be played from arsenal.)*  Target attack gets -2{p} unless the attacking hero pays {r}. *(The attacking hero chooses whether to pay {r} as Rock Slide Trap resolves.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU128.width-450.png",
    keywords: [],
    name: "Rockslide Trap",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.DefenseReaction,
    typeText: "Ranger Defense Reaction – Trap",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    subType: ActionSubType.Trap,
  },{
    class: Class.Generic,
    identifier: "springboard-somersault-yellow",
    functionalText: `If Springboard Somersault is played from arsenal, it gains +2{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO15.width-450.png",
    keywords: [],
    name: "Springboard Somersault",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.IraWelcomeDeck,Release.KatsuHeroDeck,Release.RhinarHeroDeck,Release.DorintheaHeroDeck,Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.DefenseReaction,
    typeText: "Generic Defense Reaction",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "soul-shield-yellow",
    functionalText: `Put Soul Shield into your hero's soul when the combat chain closes. *(Put this card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON063.width-450.png",
    keywords: [],
    name: "Soul Shield",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.DefenseReaction,
    typeText: "Light Defense Reaction",
    cost: 2,
    defense: 6,
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Light],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "guardian-of-the-shadowrealm-red",
    functionalText: `**Action** - {r}{r}: Return Guardian of the Shadowrealm from your banished zone into your hand. Activate this ability only while Guardian of the Shadowrealm is in your banished zone.  **Blood Debt** *(At the beginning of your end phase, if Guardian of the Shadowrealm is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON192.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Guardian of the Shadowrealm",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.DefenseReaction,
    typeText: "Shadow Defense Reaction",
    cost: 2,
    defense: 6,
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Shadow],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "rise-above-red",
    functionalText: `You may put a card from your hand on top of your deck rather than pay Rise Above's {r} cost.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON257.width-450.png",
    keywords: [],
    name: "Rise Above",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.DefenseReaction,
    typeText: "Generic Defense Reaction",
    cost: 2,
    defense: 4,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "rise-above-yellow",
    functionalText: `You may put a card from your hand on top of your deck rather than pay Rise Above's {r} cost.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON258.width-450.png",
    keywords: [],
    name: "Rise Above",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.DefenseReaction,
    typeText: "Generic Defense Reaction",
    cost: 2,
    defense: 3,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "rise-above-blue",
    functionalText: `You may put a card from your hand on top of your deck rather than pay Rise Above's {r} cost.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON259.width-450.png",
    keywords: [],
    name: "Rise Above",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.DefenseReaction,
    typeText: "Generic Defense Reaction",
    cost: 2,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Guardian,
    identifier: "biting-gale-red",
    functionalText: `**Ice Fusion** *(As an additional cost to play Biting Gale, you may reveal an Ice card from your hand.)*  If Biting Gale was **fused**, the attacking hero discards a card unless they pay {r}{r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE007.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Biting Gale",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.DefenseReaction,
    typeText: "Elemental Guardian Defense Reaction",
    cost: 2,
    defense: 4,
    fusions: [Fusion.Ice],
    pitch: 1,
    
    talents: [Talent.Elemental],
    
    
    
    
    
  },{
    class: Class.Guardian,
    identifier: "biting-gale-yellow",
    functionalText: `**Ice Fusion** *(As an additional cost to play Biting Gale, you may reveal an Ice card from your hand.)*  If Biting Gale was **fused**, the attacking hero discards a card unless they pay {r}{r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD012.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Biting Gale",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.DefenseReaction,
    typeText: "Elemental Guardian Defense Reaction",
    cost: 2,
    defense: 3,
    fusions: [Fusion.Ice],
    pitch: 2,
    
    talents: [Talent.Elemental],
    
    
    
    
    
  },{
    class: Class.Guardian,
    identifier: "biting-gale-blue",
    functionalText: `**Ice Fusion** *(As an additional cost to play Biting Gale, you may reveal an Ice card from your hand.)*  If Biting Gale was **fused**, the attacking hero discards a card unless they pay {r}{r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE009.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Biting Gale",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.DefenseReaction,
    typeText: "Elemental Guardian Defense Reaction",
    cost: 2,
    defense: 2,
    fusions: [Fusion.Ice],
    pitch: 3,
    
    talents: [Talent.Elemental],
    
    
    
    
    
  },{
    class: Class.Guardian,
    identifier: "turn-timber-red",
    functionalText: `**Earth Fusion** *(As an additional cost to play Turn Timber, you may reveal an Earth card from your hand.)*  If Turn Timber was **fused**, it gains +2{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD019.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Turn Timber",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.DefenseReaction,
    typeText: "Elemental Guardian Defense Reaction",
    cost: 2,
    defense: 6,
    fusions: [Fusion.Earth],
    pitch: 1,
    
    talents: [Talent.Elemental],
    
    
    
    
    
  },{
    class: Class.Guardian,
    identifier: "turn-timber-yellow",
    functionalText: `**Earth Fusion** *(As an additional cost to play Turn Timber, you may reveal an Earth card from your hand.)*  If Turn Timber was **fused**, it gains +2{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE011.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Turn Timber",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.DefenseReaction,
    typeText: "Elemental Guardian Defense Reaction",
    cost: 2,
    defense: 5,
    fusions: [Fusion.Earth],
    pitch: 2,
    
    talents: [Talent.Elemental],
    
    
    
    
    
  },{
    class: Class.Guardian,
    identifier: "turn-timber-blue",
    functionalText: `**Earth Fusion** *(As an additional cost to play Turn Timber, you may reveal an Earth card from your hand.)*  If Turn Timber was **fused**, it gains +2{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE012.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Turn Timber",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.DefenseReaction,
    typeText: "Elemental Guardian Defense Reaction",
    cost: 2,
    defense: 4,
    fusions: [Fusion.Earth],
    pitch: 3,
    
    talents: [Talent.Elemental],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "pulse-of-isenloft-blue",
    functionalText: `**Legendary** *(You may only have 1 Pulse of Isenloft in your deck.)*  Earth, Ice, and Elemental action cards have +1{d} while defending this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE114.width-450.png",
    keywords: [Keyword.Legendary],
    name: "Pulse of Isenloft",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.DefenseReaction,
    typeText: "Ice Earth Defense Reaction",
    cost: 2,
    defense: 6,
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Earth,Talent.Ice],
    
    
    
    
    
  },{
    class: Class.Runeblade,
    identifier: "sigil-of-suffering-red",
    functionalText: `Deal 1 arcane damage to the attacking hero.  If you have dealt arcane damage this turn, Sigil of Suffering gains +1{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE227.width-450.png",
    keywords: [],
    name: "Sigil of Suffering",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.DefenseReaction,
    typeText: "Runeblade Defense Reaction",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Runeblade,
    identifier: "sigil-of-suffering-yellow",
    functionalText: `Deal 1 arcane damage to the attacking hero.  If you have dealt arcane damage this turn, Sigil of Suffering gains +1{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE228.width-450.png",
    keywords: [],
    name: "Sigil of Suffering",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.DefenseReaction,
    typeText: "Runeblade Defense Reaction",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Runeblade,
    identifier: "sigil-of-suffering-blue",
    functionalText: `Deal 1 arcane damage to the attacking hero.  If you have dealt arcane damage this turn, Sigil of Suffering gains +1{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE229.width-450.png",
    keywords: [],
    name: "Sigil of Suffering",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.DefenseReaction,
    typeText: "Runeblade Defense Reaction",
    cost: 0,
    defense: 1,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Ninja,
    identifier: "wax-on-red",
    functionalText: `While Wax On is defending an attack action card with cost 0, it gains +2{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR050.width-450.png",
    keywords: [],
    name: "Wax On",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.DefenseReaction,
    typeText: "Ninja Defense Reaction",
    cost: 0,
    defense: 3,
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Ninja,
    identifier: "wax-on-yellow",
    functionalText: `While Wax On is defending an attack action card with cost 0, it gains +2{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR051.width-450.png",
    keywords: [],
    name: "Wax On",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.DefenseReaction,
    typeText: "Ninja Defense Reaction",
    cost: 0,
    defense: 2,
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Ninja,
    identifier: "wax-on-blue",
    functionalText: `While Wax On is defending an attack action card with cost 0, it gains +2{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR052.width-450.png",
    keywords: [],
    name: "Wax On",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.DefenseReaction,
    typeText: "Ninja Defense Reaction",
    cost: 0,
    defense: 1,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Wizard,
    identifier: "sigil-of-parapets-blue",
    functionalText: `While Sigil of Parapets is defending, whenever you play a Wizard card, Sigil of Parapet's gains +2{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR122.width-450.png",
    keywords: [],
    name: "Sigil of Parapets",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.DefenseReaction,
    typeText: "Wizard Defense Reaction",
    cost: 1,
    defense: 2,
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  }];
  const instants: ActionCard[] = [{
    class: Class.Generic,
    identifier: "go-bananas-yellow",
    functionalText: `Name an action card. Open and reveal a booster pack of Flesh and Blood and put all cards with the chosen name into your hand. If the booster pack does not contain a card with the chosen name, you may repeat this process.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LSS002-P.width-450.png",
    keywords: [],
    name: "Go Bananas",
    rarity: Rarity.Promo,
    restrictedFormats: [],
    sets: [Release.Promos],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 0,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Brute,
    identifier: "bone-head-barrier-yellow",
    functionalText: `Roll a 6 sided die. Prevent the next X damage that would be dealt to your hero this turn, where X is the number rolled.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_10.width-450.png",
    keywords: [],
    name: "Bone Head Barrier",
    rarity: Rarity.SuperRare,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Instant,
    typeText: "Brute Instant",
    cost: 1,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "remembrance-yellow",
    functionalText: `Shuffle up to 3 action cards from your graveyard into your deck.  Banish Remembrance.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_163.width-450.png",
    keywords: [],
    name: "Remembrance",
    rarity: Rarity.SuperRare,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 0,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "sigil-of-solace-red",
    functionalText: `Gain 3{h}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP387.width-450.png",
    keywords: [],
    name: "Sigil of Solace",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 0,
    
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "sigil-of-solace-yellow",
    functionalText: `Gain 2{h}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP388.width-450.png",
    keywords: [],
    name: "Sigil of Solace",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 0,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "sigil-of-solace-blue",
    functionalText: `Gain 1{h}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/KSU30.width-450.png",
    keywords: [],
    name: "Sigil of Solace",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.KatsuHeroDeck,Release.RhinarHeroDeck,Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "art-of-war-yellow",
    functionalText: `Choose 2;  - Attack action cards you control gain +1{p} and +1{d} this turn. - The next attack action card you play this turn, gains **go again**. - Until end of turn, you may defend with attack action cards from arsenal. - You may banish an attack action card from your hand. If you do, draw 2 cards.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP366.width-450.png",
    keywords: [],
    name: "Art of War",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 1,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "eirinas-prayer-red",
    functionalText: `Reveal the top card of your deck. Prevent the next X arcane damage that would be dealt to your hero this turn, where X is 6 minus the pitch value of the card revealed this way. *(The pitch value is located in the top left corner of the card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP384.width-450.png",
    keywords: [],
    name: "Eirina’s Prayer",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 1,
    
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "eirinas-prayer-yellow",
    functionalText: `Reveal the top card of your deck. Prevent the next X arcane damage that would be dealt to your hero this turn, where X is 5 minus the pitch value of the card revealed this way. *(The pitch value is located in the top left corner of the card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP385.width-450.png",
    keywords: [],
    name: "Eirina’s Prayer",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 1,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "eirinas-prayer-blue",
    functionalText: `Reveal the top card of your deck. Prevent the next X arcane damage that would be dealt to your hero this turn, where X is 4 minus the pitch value of the card revealed this way. *(The pitch value is located in the top left corner of the card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP386.width-450.png",
    keywords: [],
    name: "Eirina’s Prayer",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 1,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Guardian,
    identifier: "blessing-of-serenity-red",
    functionalText: `The next time your hero would be dealt {p} damage this turn, prevent 3 damage that source would deal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU41.width-450.png",
    keywords: [],
    name: "Blessing of Serenity",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Instant,
    typeText: "Guardian Instant",
    cost: 0,
    
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Guardian,
    identifier: "blessing-of-serenity-yellow",
    functionalText: `The next time your hero would be dealt {p} damage this turn, prevent 2 damage that source would deal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU42.width-450.png",
    keywords: [],
    name: "Blessing of Serenity",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Instant,
    typeText: "Guardian Instant",
    cost: 0,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Guardian,
    identifier: "blessing-of-serenity-blue",
    functionalText: `The next time your hero would be dealt {p} damage this turn, prevent 1 damage that source would deal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU43.width-450.png",
    keywords: [],
    name: "Blessing of Serenity",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Instant,
    typeText: "Guardian Instant",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Ranger,
    identifier: "feign-death-yellow",
    functionalText: `Play Feign Death only if your hero has been dealt damage this turn.  The next time your hero would be dealt damage this turn, prevent it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP233.width-450.png",
    keywords: [],
    name: "Feign Death",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Instant,
    typeText: "Ranger Instant",
    cost: 1,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Wizard,
    identifier: "aetherize-blue",
    functionalText: `**Negate** target instant card with cost {r} or less. *(The card does not resolve. Put it into its owner's graveyard.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU164.width-450.png",
    keywords: [Keyword.Negate],
    name: "Aetherize",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Instant,
    typeText: "Wizard Instant",
    cost: 1,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "snag-blue",
    functionalText: `Attack action cards can't gain {p} from their own effects, or the effects of attack reaction cards this turn. *(This only affects {p} that would be gained after Snag has resolved.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU182.width-450.png",
    keywords: [],
    name: "Snag",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "reinforce-the-line-red",
    functionalText: `Target defending attack action card gains +4{d}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU189.width-450.png",
    keywords: [],
    name: "Reinforce the Line",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 0,
    
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "reinforce-the-line-yellow",
    functionalText: `Target defending attack action card gains +3{d}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU190.width-450.png",
    keywords: [],
    name: "Reinforce the Line",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 0,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "reinforce-the-line-blue",
    functionalText: `Target defending attack action card gains +2{d}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU191.width-450.png",
    keywords: [],
    name: "Reinforce the Line",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Illusionist,
    identifier: "arc-light-sentinel-yellow",
    functionalText: `**Prism Specialization** *(You may only have Arc Light Sentinel in your deck if your hero is Prism.)*  If Arc Light Sentinel is in the arena when an opponent announces an attack, they must choose Arc Light Sentinel as the target of the attack.  **Spectra** *(Arc Light Sentinel can be attacked. When Arc Light Sentinel becomes the target of an attack, destroy it and close the combat chain. The attack does not resolve.)*  `,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON005.width-450.png",
    keywords: [Keyword.Specialization,Keyword.Spectra],
    name: "Arc Light Sentinel",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Light Illusionist Instant – Aura",
    cost: 6,
    
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Light],
    
    
    
    specialization: Hero.Prism,
    subType: ActionSubType.Aura,
  },{
    class: Class.Illusionist,
    identifier: "genesis-yellow",
    functionalText: `At the start of your turn, you may put a card from your hand into your hero's soul. If it's an Illusionist card, create a Spectral Shield token. If it's a Light card, draw a card.  **Spectra** *(Genesis can be attacked. When Genesis becomes the target of an attack, destroy it and close the combat chain. The attack does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON006.width-450.png",
    keywords: [Keyword.Spectra],
    name: "Genesis",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Light Illusionist Instant – Aura",
    cost: 4,
    
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Illusionist,
    identifier: "parable-of-humility-yellow",
    functionalText: `Attack action cards controlled by an opposing hero have -1{p} while attacking and defending.  **Spectra** *(Parable of Humility can be attacked. When Parable of Humility becomes the target of an attack, destroy it and close the combat chain. The attack does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB025.width-450.png",
    keywords: [Keyword.Spectra],
    name: "Parable of Humility",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Instant,
    typeText: "Light Illusionist Instant – Aura",
    cost: 4,
    
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Illusionist,
    identifier: "merciful-retribution-yellow",
    functionalText: `Whenever an aura or attack action card you control is destroyed, deal 1 arcane damage to target hero. If it's a non-token Light card, put it into your hero's soul. *(Put it face up under your hero card.)*  **Spectra** *(Merciful Retribution can be attacked. When Merciful Retribution becomes the target of an attack, destroy it and close the combat chain. The attack does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB026.width-450.png",
    keywords: [Keyword.Spectra],
    name: "Merciful Retribution",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Instant,
    typeText: "Light Illusionist Instant – Aura",
    cost: 4,
    
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Illusionist,
    identifier: "ode-to-wrath-yellow",
    functionalText: `Whenever a source you control deals damage to an opposing hero, they lose 1{h}.  Illusionist attack action cards you control have **go again.** *(If an attack is destroyed, **go again** does not resolve.)*  **Spectra** *(Ode to Wrath can be attacked. When Ode to Wrath becomes the target of an attack, destroy it and close the combat chain. The attack does not resolve.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB027.width-450.png",
    keywords: [Keyword.Spectra],
    name: "Ode to Wrath",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Instant,
    typeText: "Light Illusionist Instant – Aura",
    cost: 4,
    
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Light],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    class: Class.Generic,
    identifier: "tome-of-divinity-yellow",
    functionalText: `Draw 2 cards.  If a card has been put into your hero's soul this turn, instead draw 3 cards.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON065.width-450.png",
    keywords: [],
    name: "Tome of Divinity",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Light Instant",
    cost: 4,
    
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Light],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "glisten-red",
    functionalText: `Distribute up to four +1{p} counters among any number of weapons you control.  At the beginning of your end phase, remove all +1{p} counters from weapons you control. *(If a permanent is no longer a weapon during your end phase, +1{p} counters on it are not removed.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON069.width-450.png",
    keywords: [],
    name: "Glisten",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Light Instant",
    cost: 2,
    
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Light],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "glisten-yellow",
    functionalText: `Distribute up to three +1{p} counters among any number of weapons you control.  At the beginning of your end phase, remove all +1{p} counters from weapons you control. *(If a permanent is no longer a weapon during your end phase, +1{p} counters on it are not removed.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON070.width-450.png",
    keywords: [],
    name: "Glisten",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Light Instant",
    cost: 2,
    
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Light],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "glisten-blue",
    functionalText: `Distribute up to two +1{p} counters among any number of weapons you control.  At the beginning of your end phase, remove all +1{p} counters from weapons you control. *(If a permanent is no longer a weapon during your end phase, +1{p} counters on it are not removed.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON071.width-450.png",
    keywords: [],
    name: "Glisten",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Light Instant",
    cost: 2,
    
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Light],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "blinding-beam-red",
    functionalText: `Blinding Beam cost {r} less to play if it targets a Shadow Card.  Target attacking or defending attack action card gets -3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON084.width-450.png",
    keywords: [],
    name: "Blinding Beam",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Light Instant",
    cost: 1,
    
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Light],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "blinding-beam-yellow",
    functionalText: `Blinding Beam cost {r} less to play if it targets a Shadow Card.  Target attacking or defending attack action card gets -2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON085.width-450.png",
    keywords: [],
    name: "Blinding Beam",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Light Instant",
    cost: 1,
    
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Light],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "blinding-beam-blue",
    functionalText: `Blinding Beam cost {r} less to play if it targets a Shadow Card.  Target attacking or defending attack action card gets -1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON086.width-450.png",
    keywords: [],
    name: "Blinding Beam",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Light Instant",
    cost: 1,
    
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Light],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "ray-of-hope-yellow",
    functionalText: `Attacks you control have +1{p} while attacking a Shadow hero this turn.  If you have less {h} than an opposing Shadow hero, put {name} into your hero's soul. *(Put this card face up under your hero card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS044.width-450.png",
    keywords: [],
    name: "Ray of Hope",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Instant,
    typeText: "Light Instant",
    cost: 1,
    
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Light],
    
    
    
    
    
  },{
    class: Class.Illusionist,
    identifier: "prismatic-shield-red",
    functionalText: `Create 3 Spectral Shield tokens. *(They’re Illusionist auras with "If your hero would be dealt damage, instead destroy Spectral Shield and prevent 1 damage that source would deal.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/PSM026.width-450.png",
    keywords: [],
    name: "Prismatic Shield",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Instant,
    typeText: "Illusionist Instant",
    cost: 3,
    
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Illusionist,
    identifier: "prismatic-shield-yellow",
    functionalText: `Create 2 Spectral Shield tokens. *(They’re Illusionist auras with "If your hero would be dealt damage, instead destroy Spectral Shield and prevent 1 damage that source would deal.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON093.width-450.png",
    keywords: [],
    name: "Prismatic Shield",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Illusionist Instant",
    cost: 3,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Illusionist,
    identifier: "prismatic-shield-blue",
    functionalText: `Create 1 Spectral Shield tokens. *(It’s an Illusionist aura with "If your hero would be dealt damage, instead destroy Spectral Shield and prevent 1 damage that source would deal.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON094.width-450.png",
    keywords: [],
    name: "Prismatic Shield",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Illusionist Instant",
    cost: 3,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Runeblade,
    identifier: "invert-existence-blue",
    functionalText: `You may play Invert Existence from your banished zone.  Banish up to 2 cards in an opposing hero's graveyard. If an attack action card and a 'non-attack' action card are banished this way, deal 2 arcane damage to that hero.  **Blood Debt** *(At the beginning of your end phase, if Invert Existence is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON158.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Invert Existence",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Shadow Runeblade Instant",
    cost: 1,
    
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Shadow],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "doomsday-blue",
    functionalText: `**Legendary Levia Specialization** *(You may only have 1 Doomsday in your deck and only if your hero is Levia.)*  Play Doomsday only if there are 6 or more cards with blood debt in your banished zone.  Create a Blasmophet, the Soul Harvester token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON189.width-450.png",
    keywords: [Keyword.Legendary,Keyword.Specialization],
    name: "Doomsday",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Shadow Instant",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Shadow],
    
    
    
    specialization: Hero.Levia,
    
  },{
    class: Class.Generic,
    identifier: "eclipse-blue",
    functionalText: `**Legendary Chane Specialization** *(You may only have 1 Eclipse in your deck and only if your hero is Chane.)*  Play Eclipse only if you have played 6 or more cards with **blood debt** this turn. If you have, you may play Eclipse from your banished zone.  Create an Ursur, the Soul Reaper token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON190.width-450.png",
    keywords: [Keyword.Legendary,Keyword.Specialization],
    name: "Eclipse",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Shadow Instant",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Shadow],
    
    
    
    specialization: Hero.Chane,
    
  },{
    class: Class.Generic,
    identifier: "blood-tribute-red",
    functionalText: `**Opt 3**, then banish the top card of your deck. (Look at the top 3 cards of your deck. You may put them on the top and/or bottom in any order.)`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON215.width-450.png",
    keywords: [Keyword.Opt],
    name: "Blood Tribute",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Shadow Instant",
    cost: 0,
    
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Shadow],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "blood-tribute-yellow",
    functionalText: `**Opt 2**, then banish the top card of your deck. (Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON216.width-450.png",
    keywords: [Keyword.Opt],
    name: "Blood Tribute",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Shadow Instant",
    cost: 0,
    
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Shadow],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "blood-tribute-blue",
    functionalText: `**Opt 1**, then banish the top card of your deck. (Look at the top card of your deck. You may put it on the bottom.)`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV025.width-450.png",
    keywords: [Keyword.Opt],
    name: "Blood Tribute",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Instant,
    typeText: "Shadow Instant",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Shadow],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "eclipse-existence-blue",
    functionalText: `Until end of turn, whenever an attack hits a Light hero, you may banish a card from their soul. If they do, they lose 1{h}.  If you have more {h} than an opposing Light hero, you may banish an action card from your graveyard.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS045.width-450.png",
    keywords: [],
    name: "Eclipse Existence",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Instant,
    typeText: "Shadow Instant",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Shadow],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "memorial-ground-red",
    functionalText: `Put target attack action card with cost 2 or less from your graveyard on top of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON303.width-450.png",
    keywords: [],
    name: "Memorial Ground",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 0,
    
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "memorial-ground-yellow",
    functionalText: `Put target attack action card with cost 1 or less from your graveyard on top of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON304.width-450.png",
    keywords: [],
    name: "Memorial Ground",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 0,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "memorial-ground-blue",
    functionalText: `Put target attack action card with cost 0 or less from your graveyard on top of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON305.width-450.png",
    keywords: [],
    name: "Memorial Ground",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Guardian,
    identifier: "awakening-blue",
    functionalText: `**Earth Fusion** *(As an additional cost to play Awakening, you may reveal an Earth card from your hand.)*  If you have less {h} than an opposing hero, create Seismic Surge tokens equal to the difference. If Awakening was **fused**, instead create twice that many Seismic Surge tokens.  Search your deck for a Guardian attack action card with cost less than or equal to the number of Seismic Surge tokens you control, reveal it, put it into your hand, then shuffle your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE006.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Awakening",
    rarity: Rarity.Majestic,
    restrictedFormats: [Format.Blitz,Format.Commoner],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Elemental Guardian Instant",
    cost: 2,
    
    fusions: [Fusion.Earth],
    pitch: 3,
    
    talents: [Talent.Elemental],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "exposed-to-the-elements-blue",
    functionalText: `**Earth and/or Ice Fusion** *(As an additional cost to play Exposed to the Elements, you may reveal an Earth and/or Ice card from your hand.)*  If Exposed to the Elements was **fused** with an Earth card, put a -1{d} counter on target equipment.  If Exposed to the Elements was **fused** with an Ice card, destroy an equipment with 0{d} controlled by target hero unless they pay {r}{r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE093.width-450.png",
    keywords: [Keyword.Fusion],
    name: "Exposed to the Elements",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Elemental Instant",
    cost: 2,
    
    fusions: [Fusion.Earth,Fusion.Ice],
    pitch: 3,
    
    talents: [Talent.Elemental],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "pulse-of-volthaven-red",
    functionalText: `**Legendary** *(You may only have 1 Pulse of Volthaven in your deck.)*  Your next Ice, Lightning, or Elemental attack this turn gains +4{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE112.width-450.png",
    keywords: [Keyword.Legendary],
    name: "Pulse of Volthaven",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Lightning Ice Instant",
    cost: 0,
    
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Ice,Talent.Lightning],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "summerwood-shelter-red",
    functionalText: `Target defending Earth or Elemental action card gains +4{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE125.width-450.png",
    keywords: [],
    name: "Summerwood Shelter",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Earth Instant",
    cost: 0,
    
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Earth],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "summerwood-shelter-yellow",
    functionalText: `Target defending Earth or Elemental action card gains +3{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI023.width-450.png",
    keywords: [],
    name: "Summerwood Shelter",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Instant,
    typeText: "Earth Instant",
    cost: 0,
    
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Earth],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "summerwood-shelter-blue",
    functionalText: `Target defending Earth or Elemental action card gains +2{d}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE127.width-450.png",
    keywords: [],
    name: "Summerwood Shelter",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Earth Instant",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Earth],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "blizzard-blue",
    functionalText: `Target attack loses and can't gain **go again** unless the attacking hero pays {r}{r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE147.width-450.png",
    keywords: [],
    name: "Blizzard",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Ice Instant",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Ice],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "blink-blue",
    functionalText: `Gain 1 action point. *(You can only gain action points during your action phase.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE176.width-450.png",
    keywords: [],
    name: "Blink",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Lightning Instant",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Lightning],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "lightning-press-red",
    functionalText: `Target attack action card with cost 1 or less gains +3{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI018.width-450.png",
    keywords: [],
    name: "Lightning Press",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Instant,
    typeText: "Lightning Instant",
    cost: 0,
    
    fusions: [],
    pitch: 1,
    
    talents: [Talent.Lightning],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "lightning-press-yellow",
    functionalText: `Target attack action card with cost 1 or less gains +2{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE184.width-450.png",
    keywords: [],
    name: "Lightning Press",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Lightning Instant",
    cost: 0,
    
    fusions: [],
    pitch: 2,
    
    talents: [Talent.Lightning],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "lightning-press-blue",
    functionalText: `Target attack action card with cost 1 or less gains +1{p}`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE185.width-450.png",
    keywords: [],
    name: "Lightning Press",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Instant,
    typeText: "Lightning Instant",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [Talent.Lightning],
    
    
    
    
    
  },{
    class: Class.Guardian,
    identifier: "steadfast-red",
    functionalText: `Prevent the next 6 damage that would be dealt to your hero this turn by a source of your choice.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR033.width-450.png",
    keywords: [],
    name: "Steadfast",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Instant,
    typeText: "Guardian Instant",
    cost: 3,
    
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Guardian,
    identifier: "steadfast-yellow",
    functionalText: `Prevent the next 5 damage that would be dealt to your hero this turn by a source of your choice.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR034.width-450.png",
    keywords: [],
    name: "Steadfast",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Instant,
    typeText: "Guardian Instant",
    cost: 3,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Guardian,
    identifier: "steadfast-blue",
    functionalText: `Prevent the next 4 damage that would be dealt to your hero this turn by a source of your choice.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR035.width-450.png",
    keywords: [],
    name: "Steadfast",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Instant,
    typeText: "Guardian Instant",
    cost: 3,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Ranger,
    identifier: "rain-razors-yellow",
    functionalText: `Arrows have +2{p} while attacking this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR090.width-450.png",
    keywords: [],
    name: "Rain Razors",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Instant,
    typeText: "Ranger Instant",
    cost: 0,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "even-bigger-than-that!-red",
    functionalText: `Play Even Bigger Than That! only if you've dealt {p} this turn.  **Opt 3**, then reveal the top card of your deck. If it has {p} greater than the amount of damage you've dealt this turn, create a Quicken token and draw a card. *(Look at the top 3 cards of your deck. You may put them on the top and/or bottom in any order.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB058.width-450.png",
    keywords: [Keyword.Opt],
    name: "Even Bigger Than That!",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 0,
    
    fusions: [],
    pitch: 1,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "even-bigger-than-that!-yellow",
    functionalText: `Play Even Bigger Than That! only if you've dealt {p} this turn.  **Opt 2**, then reveal the top card of your deck. If it has {p} greater than the amount of damage you've dealt this turn, create a Quicken token and draw a card. *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB059.width-450.png",
    keywords: [Keyword.Opt],
    name: "Even Bigger Than That!",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 0,
    
    fusions: [],
    pitch: 2,
    
    talents: [],
    
    
    
    
    
  },{
    class: Class.Generic,
    identifier: "even-bigger-than-that!-blue",
    functionalText: `Play Even Bigger Than That! only if you've dealt {p} this turn.  **Opt 1**, then reveal the top card of your deck. If it has {p} greater than the amount of damage you've dealt this turn, create a Quicken token and draw a card. *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB060.width-450.png",
    keywords: [Keyword.Opt],
    name: "Even Bigger Than That!",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Instant,
    typeText: "Generic Instant",
    cost: 0,
    
    fusions: [],
    pitch: 3,
    
    talents: [],
    
    
    
    
    
  }];
  const equipment: EquipmentCard[] = [{
    class: Class.Generic,
    identifier: "spell-fray-cloak",
    functionalText: `**Spellvoid 1** *(If your hero would be dealt arcane damage, you may destroy Spell Fray Chest instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL006.width-450.png",
    keywords: [Keyword.Spellvoid],
    name: "Spell Fray Cloak",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.LeviaBlitzDeck],
    type: Type.Equipment,
    typeText: "Generic Equipment – Chest",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Generic,
    identifier: "spell-fray-gloves",
    functionalText: `**Spellvoid 1** *(If your hero would be dealt arcane damage, you may destroy Spell Fray Gloves instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN006.width-450.png",
    keywords: [Keyword.Spellvoid],
    name: "Spell Fray Gloves",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck],
    type: Type.Equipment,
    typeText: "Generic Equipment – Arms",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Generic,
    identifier: "spell-fray-leggings",
    functionalText: `**Spellvoid 1** *(If your hero would be dealt arcane damage, you may destroy Spell Fray Leggings instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/PSM007.width-450.png",
    keywords: [Keyword.Spellvoid],
    name: "Spell Fray Leggings",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.PrismBlitzDeck],
    type: Type.Equipment,
    typeText: "Generic Equipment – Legs",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    class: Class.Brute,
    identifier: "scabskin-leathers",
    functionalText: `**Once per turn Action** - 0: Roll a 6 sided die. Gain action points equal to half the number rolled, rounded down.  **Battleworn** *(If you defend with Scabskin Leathers, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB003-P.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Scabskin Leathers",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Brute Equipment - Legs",
    defense: 2,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    class: Class.Brute,
    identifier: "barkbone-strapping",
    functionalText: `**Instant** - Destroy Barkbone Strapping: Roll a 6 die. Gain {r} equal to half the number rolled, rounded down.  **Battleworn** *(If you defend with Barkbone Strapping, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/RNR5.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Barkbone Strapping",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.RhinarHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Brute Equipment – Chest",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Guardian,
    identifier: "tectonic-plating",
    functionalText: `**Once per turn Action** - {r}: Create a Seismic Surge aura token. **Go again**  **Battleworn** *(If you defend with Tectonic Plating, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB004-P.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Tectonic Plating",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Guardian Equipment – Chest",
    defense: 2,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Guardian,
    identifier: "helm-of-isens-peak",
    functionalText: `**Action** - {r}, destroy Helm of Isen Peak: Your hero gains +1{i} until end of turn.  **Battleworn** *(If you defend with Helm of Isen’s Peak, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BVO4.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Helm of Isen’s Peak",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.OldhimBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Guardian Equipment – Head",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    class: Class.Ninja,
    identifier: "mask-of-momentum",
    functionalText: `**Once per Turn Effect** - When an attack action card you control is the third or higher chain link in a row to hit, draw a card.  **Blade Break** *(If you defend with Mask of Momentum, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB005-P.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Mask of Momentum",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Ninja Equipment – Head",
    defense: 2,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    class: Class.Ninja,
    identifier: "breaking-scales",
    functionalText: `**Attack Reaction** - Destroy Breaking Scales: Target attack action card with **combo** gains +1{p}.  **Battleworn** *(If you defend with Breaking Scales, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/KSU7.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Breaking Scales",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.KatsuHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Ninja Equipment – Arms",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Warrior,
    identifier: "braveforge-bracers",
    functionalText: `**Once per turn Action** - {r}: Your next weapon attack this turn gains +1{p}. Activate this ability only if a weapon you control has hit this turn. **Go again**  **Battleworn** *(If you defend with Braveforge Bracers, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB006-P.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Braveforge Bracers",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Warrior Equipment – Arms",
    defense: 2,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Warrior,
    identifier: "refraction-bolters",
    functionalText: `When a weapon you control hits, you may destroy Refraction Bolters. If you do, the attack gains **go again**.  **Battleworn** (If you defend with Refraction Bolters, put a -1{d} counter on it when the combat chain closes.)`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/TEA7.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Refraction Bolters",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Warrior Equipment – Legs",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    class: Class.Generic,
    identifier: "fyendals-spring-tunic",
    functionalText: `At the start of your turn, if Fyendal’s Spring Tunic has less than 3 energy counters, you may put an energy counter on it.  **Instant** - Remove 3 energy counters from Fyendal’s Spring Tunic: Gain {r}  **Blade Break** *(If your defend with Fyendal’s Spring Tunic, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB001-P.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Fyendal’s Spring Tunic",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.WelcomeToRathe,Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Generic Equipment – Chest",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Generic,
    identifier: "hope-merchants-hood",
    functionalText: `**Instant** - Destroy Hope Merchant’s Hood: Shuffle any number of cards from your hand into your deck, then draw that many cards.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/TEA4.width-450.png",
    keywords: [],
    name: "Hope Merchant’s Hood",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Generic Equipment – Head",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    class: Class.Generic,
    identifier: "heartened-cross-strap",
    functionalText: `**Action** - Destroy Heartened Cross Strap: The next attack action card you play this turn costs {r}{r} less to play. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB063.width-450.png",
    keywords: [],
    name: "Heartened Cross Strap",
    rarity: Rarity.Common,
    restrictedFormats: [Format.Blitz],
    sets: [Release.Promos,Release.BriarBlitzDeck,Release.KatsuHeroDeck,Release.PrismBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Generic Equipment – Chest",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Generic,
    identifier: "goliath-gauntlet",
    functionalText: `**Action** - Destroy Goliath Gauntlet: The next attack action card with cost 2 or greater you play this turn gains +2{p}. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB064.width-450.png",
    keywords: [],
    name: "Goliath Gauntlet",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.BravoBlitzDeck,Release.LeviaBlitzDeck,Release.OldhimBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Generic Equipment – Arms",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Generic,
    identifier: "snapdragon-scalers",
    functionalText: `**Attack Reaction** - Destroy Snapdragon Scalers: Target attack action card with cost 1 or less gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB065.width-450.png",
    keywords: [],
    name: "Snapdragon Scalers",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.BoltynBlitzDeck,Release.ChaneBlitzDeck,Release.RhinarHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Generic Equipment – Legs",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    class: Class.Generic,
    identifier: "ironrot-helm",
    functionalText: `**Blade Break** *(If your defend with Ironrot Helm, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/IRONROT01.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Ironrot Helm",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.KatsuHeroDeck,Release.RhinarHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Generic Equipment – Head",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    class: Class.Generic,
    identifier: "ironrot-plate",
    functionalText: `**Blade Break** *(If your defend with Ironrot Plate, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/IRONROT02.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Ironrot Plate",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Generic Equipment – Chest",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Generic,
    identifier: "ironrot-gauntlet",
    functionalText: `**Blade Break** *(If your defend with Ironrot Gauntlet, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/IRONROT03.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Ironrot Gauntlet",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.RhinarHeroDeck,Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Generic Equipment – Arms",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Generic,
    identifier: "ironrot-legs",
    functionalText: `**Blade Break** *(If your defend with Ironrot Legs, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/IRONROT04.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Ironrot Legs",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BravoBlitzDeck,Release.KatsuHeroDeck,Release.LexiBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Equipment,
    typeText: "Generic Equipment – Legs",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    class: Class.Mechanologist,
    identifier: "teklo-foundry-heart",
    functionalText: `**Once per Turn Action** - {r}: Banish the top 2 cards of your deck. Gain {r} for each Mechanologist card banished this way. Activate this ability only if you have **boosted** this turn. **Go again**  **Battleworn** *(If you defend with Teklo Foundry Heart, put a -1 {d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB008-P.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Teklo Foundry Heart",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Mechanologist Equipment – Chest",
    defense: 2,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Mechanologist,
    identifier: "achilles-accelerator",
    functionalText: `**Instant** - Destroy Achilles Accelerator: Gain 1 action point. Activate this ability only if you have **boosted** this turn.  **Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP186.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Achilles Accelerator",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Mechanologist Equipment – Legs",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    class: Class.Ranger,
    identifier: "skullbone-crosswrap",
    functionalText: `**Once per Turn Action** - Turn a face down card in your arsenal face up: **Opt 1**. **Go again**  **Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*  **Blade Break** *(If you defend with Skullbone Crosswrap, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB009-P.width-450.png",
    keywords: [Keyword.ArcaneBarrier,Keyword.BladeBreak],
    name: "Skullbone Crosswrap",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Ranger Equipment – Head",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    class: Class.Ranger,
    identifier: "bulls-eye-bracers",
    functionalText: `**Action** - Destroy Bull's Eye Bracers: If you have no cards in your arsenal, you may put an arrow card from your hand face up into your arsenal. It gains +1{p} until end of turn. **Go again**  **Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP226.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Bull’s Eye Bracers",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Ranger Equipment – Arms",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Runeblade,
    identifier: "grasp-of-the-arknight",
    functionalText: `**Once per Turn Action** - {r}{r}: Create a Runechant token. This ability costs an additional {r} to activate for each Runechant you control. **Go again**  **Battleworn** *(If you defend with Grasp of the Arknight, put a -1 {d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB010-P.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Grasp of the Arknight",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Runeblade Equipment – Arms",
    defense: 2,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Runeblade,
    identifier: "crown-of-dichotomy",
    functionalText: `**Action** - {r}, destroy Crown of Dichotomy: Put target Runeblade attack action card and target Runeblade 'non-attack' action card from your graveyard on top of your deck in any order.  **Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP263.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Crown of Dichotomy",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Runeblade Equipment – Head",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    class: Class.Wizard,
    identifier: "storm-striders",
    functionalText: `**Instant** - {r}, destroy Storm Striders: You may play your next Wizard 'non-attack' action card this turn as though it were an instant.  **Arcane Barrier 2** *(If your hero would be dealt arcane damage, you may pay {r}{r} instead. If you do, prevent 2 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB011-P.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Storm Striders",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Wizard Equipment – Legs",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    class: Class.Wizard,
    identifier: "robe-of-rapture",
    functionalText: `**Action** - Destroy Robe of Rapture: Gain {r}{r}{r}.  **Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP306.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Robe of Rapture",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Wizard Equipment – Chest",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Generic,
    identifier: "arcanite-skullcap",
    functionalText: `If you have less {h} than your opponent, Arcanite Skullcap gains +1{d} and **Arcane Barrier 3**. *(If your hero would be dealt arcane damage, you may pay {r}{r}{r} instead. If you do, prevent 3 arcane damage that source would deal.)*  **Battleworn** *(If you defend with Arcanite Skullcap, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB007-P.width-450.png",
    keywords: [Keyword.ArcaneBarrier,Keyword.Battleworn],
    name: "Arcanite Skullcap",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.ArcaneRising,Release.Everfest],
    type: Type.Equipment,
    typeText: "Generic Equipment – Head",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    class: Class.Generic,
    identifier: "talismanic-lens",
    functionalText: `**Instant** - Destroy Talismanic Lens: **Opt 2** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB066.width-450.png",
    keywords: [],
    name: "Talismanic Lens",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Generic Equipment – Head",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    class: Class.Generic,
    identifier: "vest-of-the-first-fist",
    functionalText: `When an attack action card you control hits, you may destroy Vest of the First Fist. If you do, gain {r}{r}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP356.width-450.png",
    keywords: [],
    name: "Vest of the First Fist",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Generic Equipment – Chest",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Generic,
    identifier: "bracers-of-belief",
    functionalText: `**Action** - Destroy Bracers of Belief: Reveal the top card of your deck. If you do, the next attack action card you play this turn, gains +X{p}, where X is 3 minus the pitch value of the card revealed this way. **Go again** *(The pitch value is located in the top left corner of the card.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP355.width-450.png",
    keywords: [],
    name: "Bracers of Belief",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Generic Equipment – Arms",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Generic,
    identifier: "mage-master-boots",
    functionalText: `**Action** - {r}, destroy Mage Master Boots: The next 'non-attack' action card you play this turn gains **go again**. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB067.width-450.png",
    keywords: [],
    name: "Mage Master Boots",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Generic Equipment – Legs",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    class: Class.Generic,
    identifier: "nullrune-hood",
    functionalText: `**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB068.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Nullrune Hood",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Generic Equipment – Head",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    class: Class.Generic,
    identifier: "nullrune-robe",
    functionalText: `**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB069.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Nullrune Robe",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Generic Equipment – Chest",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Generic,
    identifier: "nullrune-gloves",
    functionalText: `**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB070.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Nullrune Gloves",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Generic Equipment – Arms",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Generic,
    identifier: "nullrune-boots",
    functionalText: `**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB071.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Nullrune Boots",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Generic Equipment – Legs",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    class: Class.Brute,
    identifier: "skullhorn",
    functionalText: `**Action** - Destroy Skullhorn: Draw a card then discard a random card. **Go again**  **Arcane Barrier 2** *(If your hero would be dealt arcane damage, you may pay {r}{r} instead. If you do, prevent 2 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP009.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Skullhorn",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Brute Equipment – Head",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    class: Class.Guardian,
    identifier: "crater-fist",
    functionalText: `**Action** - {r}{r}{r}, destroy Crater Fist: Your attacks with **crush** gain +2{p} this turn. **Go again**  **Temper** *(If you defend with Crater Fist, put a -1{d} counter on it when the combat chain closes then destroy it if it has 0{d}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP049.width-450.png",
    keywords: [Keyword.Temper],
    name: "Crater Fist",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Guardian Equipment – Arms",
    defense: 2,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Ninja,
    identifier: "breeze-rider-boots",
    functionalText: `When a Ninja attack action card you control hits, you may destroy Breeze Rider Boots. If you do, attack action cards with **combo** gain **go again** this turn.  **Battleworn** *(If you defend with Breeze Rider Boots, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP097.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Breeze Rider Boots",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Ninja Equipment – Legs",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    class: Class.Warrior,
    identifier: "courage-of-bladehold",
    functionalText: `**Action** - Destroy Courage of Bladehold: Your sword attacks cost {r} less this turn. **Go again**  **Temper** *(If you defend with Courage of Bladehold, put a -1{d} counter on it when the combat chain closes then destroy it if it has 0{d}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB073.width-450.png",
    keywords: [Keyword.Temper],
    name: "Courage of Bladehold",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Warrior Equipment – Chest",
    defense: 2,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Mechanologist,
    identifier: "viziertronic-model-i",
    functionalText: `**Action** - destroy Vizertronic Model i: Whenever you **boost** this turn, draw a card then put a card from your hand on top of your deck. **Go again**  **Arcane Barrier 2** *(If your hero would be dealt arcane damage, you may pay {r}{r} instead. If you do, prevent 2 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP187.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Viziertronic Model i",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Mechanologist, Equipment – Head",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    class: Class.Ranger,
    identifier: "perch-grapplers",
    functionalText: `**Action** - {r}{r}, destroy Perch Grapplers: Until end of turn, face up arrow cards played from arsenal gain **go again**. **Go again**  **Blade Break** *(If you defend with Perch Grapplers, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP227.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Perch Grapplers",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Ranger Equipment – Legs",
    defense: 2,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    class: Class.Runeblade,
    identifier: "bloodsheath-skeleta",
    functionalText: `**Instant** - Destroy Bloodsheath Skeleta: The next attack action card and 'non-attack' action card you play this turn gain "This card costs {r} less to play for each Runechant you control."  **Temper** *(If you defend with Bloodsheath Skeleta, put a -1{d} counter on it when the combat chain closes then destroy it if it has 0{d}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP264.width-450.png",
    keywords: [Keyword.Temper],
    name: "Bloodsheath Skeleta",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Runeblade Equipment – Chest",
    defense: 2,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Wizard,
    identifier: "metacarpus-node",
    functionalText: `Whenever you play a card with an effect that deals arcane damage, you may pay {r}. If you do, that effect deals that much arcane damage plus 1 and at the beginning of the end phase, destroy Metacarpus Node.  **Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP307.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Metacarpus Node",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Wizard Equipment – Arms",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Generic,
    identifier: "gamblers-gloves",
    functionalText: `If an effect would resolve that includes rolling a 6 sided die, instead you may destroy Gambler’s Gloves. If you do, the controller of the effect rerolls all 6 sided dice rolled this way. *(You decide whether to use Gambler’s Glove after seeing the result of the die roll.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB074.width-450.png",
    keywords: [],
    name: "Gambler’s Gloves",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Generic Equipment – Arms",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Generic,
    identifier: "vestige-of-sol",
    functionalText: `Whenever you pitch a Light card, if a card has been put into your hero’s soul this turn, gain {r}.  **Blade Break** *(If you defend with Vestige of Sol, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB017.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Vestige of Sol",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Equipment,
    typeText: "Light Equipment – Chest",
    defense: 1,
    
    talents: [Talent.Light],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Generic,
    identifier: "halo-of-illumination",
    functionalText: `**Instant** - {r}, destroy Halo of Illumination: Put a card from your hand into your hero's soul. If it's a Light card, draw a card. *(Put the card face up under your hero card.)*  **Spellvoid 2** *(If your hero would be dealt arcane damage, you may destroy Halo of Illumination instead. If you do, prevent 2 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL005.width-450.png",
    keywords: [Keyword.Spellvoid],
    name: "Halo of Illumination",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Equipment,
    typeText: "Light Equipment – Head",
    defense: 0,
    
    talents: [Talent.Light],
    subType: EquipmentSubType.Head
  },{
    class: Class.Illusionist,
    identifier: "phantasmal-footsteps",
    functionalText: `The first time an Illusionist attack action card you control is destroyed each turn, you may pay {r}. If you do, gain 1 action point.  Whenever you defend with Phantasmal Footsteps, you may pay {r}. If you do, its {d} becomes 1 until end of turn.  If Phantasmal Footsteps defends a non-Illusionist attack with 6 or more {p}, destroy it when the combat chain closes.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB019.width-450.png",
    keywords: [],
    name: "Phantasmal Footsteps",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Equipment,
    typeText: "Illusionist Equipment – Legs",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    class: Class.Illusionist,
    identifier: "dream-weavers",
    functionalText: `**Action** - Destroy Dream Weavers: The next Illusionist attack action card you play this turn loses and can't gain phantasm. **Go again**  **Spellvoid 1** *(If your hero would be dealt arcane damage, you may destroy Dream Weaver instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/PSM006.width-450.png",
    keywords: [Keyword.Spellvoid],
    name: "Dream Weavers",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Equipment,
    typeText: "Illusionist Equipment – Arms",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Warrior,
    identifier: "valiant-dynamo",
    functionalText: `At the beginning of your end phase, if you have attacked 2 or more times with weapons this turn, you may remove a -1{d} counter from Valiant Dynamo.  **Battleworn** *(If you defend with Valiant Dynamo, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB020.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Valiant Dynamo",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Equipment,
    typeText: "Warrior Equipment – Legs",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    class: Class.Warrior,
    identifier: "gallantry-gold",
    functionalText: `**Action** - {r}, destroy Gallantry Gold: Your weapon attacks gain +1{p} this turn. **Go again**  **Battleworn** *(If you defend with Gallantry Gold, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BOL007.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Gallantry Gold",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Equipment,
    typeText: "Warrior Equipment – Arms",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Brute,
    identifier: "hooves-of-the-shadowbeast",
    functionalText: `Whenever a card with 6 or more {p} is put into your banished zone, you may destroy Hooves of the Shadowbeast. If you do, gain 1 action point. *(When an equipment is destroyed, it's put into the graveyard.)*  **Battleworn** *(If you defend with Hooves of the Shadowbeast, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LEV007.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Hooves of the Shadowbeast",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Equipment,
    typeText: "Shadow Brute Equipment – Legs",
    defense: 1,
    
    talents: [Talent.Shadow],
    subType: EquipmentSubType.Legs
  },{
    class: Class.Generic,
    identifier: "carrion-husk",
    functionalText: `If you defend with Carrion Husk, banish it when the combat chain closes.  At the start of your turn, if you have 13 or less {h}, banish Carrion Husk.  **Blood Debt** *(At the beginning of your end phase, if Carrion Husk is in your banished zone, lose 1{h}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB018.width-450.png",
    keywords: [Keyword.BloodDebt],
    name: "Carrion Husk",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Equipment,
    typeText: "Shadow, Equipment, Chest",
    defense: 6,
    
    talents: [Talent.Shadow],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Generic,
    identifier: "ebon-fold",
    functionalText: `**Instant** - {r}, destroy Ebon Fold: Banish a card from your hand. If it's a Shadow card, draw a card.  **Spellvoid 2** *(If your hero would be dealt arcane damage, you may destroy Ebon Fold instead. If you do, prevent 2 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB072.width-450.png",
    keywords: [Keyword.Spellvoid],
    name: "Ebon Fold",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.ChaneBlitzDeck,Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Equipment,
    typeText: "Shadow, Equipment, Head",
    defense: 0,
    
    talents: [Talent.Shadow],
    subType: EquipmentSubType.Head
  },{
    class: Class.Runeblade,
    identifier: "aether-ironweave",
    functionalText: `**Action** - Destroy Aether Ironweave: Gain {r}{r}. Activate this ability only if you have played an attack action card and a 'non-attack' action card this turn. **Go again**  **Battleworn** *(If you defend with Aether Ironweave, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN005.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Aether Ironweave",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Equipment,
    typeText: "Runeblade Equipment – Chest",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Generic,
    identifier: "blood-drop-brocade",
    functionalText: `**Instant** - Destroy Blood Drop Brocade: Gain {r}. Activate this ability only if you have dealt or been dealt {p} damage this turn. *(When an equipment is destroyed, it's put into the graveyard.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON238.width-450.png",
    keywords: [],
    name: "Blood Drop Brocade",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Generic Equipment – Chest",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Generic,
    identifier: "stubby-hammerers",
    functionalText: `**Action** - Destroy Stubby Hammerers: Attack action cards with 3 or less base power gain +1{p} while attacking this turn. **Go again** *(When an equipment is destroyed, it's put into the graveyard.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON239.width-450.png",
    keywords: [],
    name: "Stubby Hammerers",
    rarity: Rarity.Common,
    restrictedFormats: [Format.Blitz],
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Generic Equipment – Arms",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Generic,
    identifier: "time-skippers",
    functionalText: `**Action** - {r}{r}{r}, destroy Time Skippers: Gain 2 action points. *(When an equipment is destroyed, it's put into the graveyard.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON240.width-450.png",
    keywords: [],
    name: "Time Skippers",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Generic Equipment – Legs",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    class: Class.Generic,
    identifier: "ironhide-helm",
    functionalText: `When you defend with Ironhide Helm, you may pay {r}. If you do, it gains +2{d} and destroy it when the combat chain closes. *(When an equipment is destroyed, it's put into the graveyard.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON241.width-450.png",
    keywords: [],
    name: "Ironhide Helm",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Generic Equipment – Head",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    class: Class.Generic,
    identifier: "ironhide-plate",
    functionalText: `When you defend with Ironhide Plate, you may pay {r}. If you do, it gains +2{d} and destroy it when the combat chain closes. *(When an equipment is destroyed, it's put into the graveyard.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON242.width-450.png",
    keywords: [],
    name: "Ironhide Plate",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Generic Equipment – Chest",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Generic,
    identifier: "ironhide-gauntlet",
    functionalText: `When you defend with Ironhide Gauntlet, you may pay {r}. If you do, it gains +2{d} and destroy it when the combat chain closes. *(When an equipment is destroyed, it's put into the graveyard.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON243.width-450.png",
    keywords: [],
    name: "Ironhide Gauntlet",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Generic Equipment – Arms",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Generic,
    identifier: "ironhide-legs",
    functionalText: `When you defend with Ironhide Legs, you may pay {r}. If you do, it gains +2{d} and destroy it when the combat chain closes. *(When an equipment is destroyed, it's put into the graveyard.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD007.width-450.png",
    keywords: [],
    name: "Ironhide Legs",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Equipment,
    typeText: "Generic Equipment – Legs",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    class: Class.Generic,
    identifier: "crown-of-seeds",
    functionalText: `**Once per Turn Instant** - {r}, put a face down card from your arsenal on the bottom of your deck: Draw a card and prevent the next 1 damage that would be dealt to your hero this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB052.width-450.png",
    keywords: [],
    name: "Crown of Seeds",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Equipment,
    typeText: "Earth Equipment – Head",
    defense: 0,
    
    talents: [Talent.Earth],
    subType: EquipmentSubType.Head
  },{
    class: Class.Generic,
    identifier: "plume-of-evergrowth",
    functionalText: `**Instant** - {r}{r}{r}, destroy Plume of Evergrowth: Return target Earth action card or Earth instant card from your graveyard to your hand.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI005.width-450.png",
    keywords: [],
    name: "Plume of Evergrowth",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Equipment,
    typeText: "Earth Equipment – Head",
    defense: 0,
    
    talents: [Talent.Earth],
    subType: EquipmentSubType.Head
  },{
    class: Class.Generic,
    identifier: "heart-of-ice",
    functionalText: `**Once per Turn Action** - {r}: Cards and activated abilities cost opposing heroes additional {r} this turn. **Go again**  **Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*  **Blade Break** *(If you defend with Heart of Ice, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB053.width-450.png",
    keywords: [Keyword.ArcaneBarrier,Keyword.BladeBreak],
    name: "Heart of Ice",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Equipment,
    typeText: "Ice Equipment – Chest",
    defense: 1,
    
    talents: [Talent.Ice],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Generic,
    identifier: "coat-of-frost",
    functionalText: `**Action** - Destroy Coat of Frost: Create a Frostbite token under target hero's control. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD005.width-450.png",
    keywords: [],
    name: "Coat of Frost",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Equipment,
    typeText: "Ice Equipment – Chest",
    defense: 0,
    
    talents: [Talent.Ice],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Generic,
    identifier: "shock-charmers",
    functionalText: `**Instant** - {r}{r}: The next time an attack action card you control hits a hero this turn, it deals 1 damage to them.  **Spellvoid 2** *(If your hero would be dealt arcane damage, you may destroy Shock Charmers instead. If you do, prevent 2 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB054.width-450.png",
    keywords: [Keyword.Spellvoid],
    name: "Shock Charmers",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Equipment,
    typeText: "Lightning Equipment – Arms",
    defense: 0,
    
    talents: [Talent.Lightning],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Generic,
    identifier: "mark-of-lightning",
    functionalText: `Whenever a Lightning or Elemental attack you control is defended by a card from hand, you may destroy Mark of Lightning. If you do, the attack deals 1 damage to the defending hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI005.width-450.png",
    keywords: [],
    name: "Mark of Lightning",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Equipment,
    typeText: "Lightning Equipment – Arms",
    defense: 0,
    
    talents: [Talent.Lightning],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Guardian,
    identifier: "rampart-of-the-rams-head",
    functionalText: `Whenever you defend with Rampart of the Ram’s Head, you may pay {r}. If you do, it gains +1{d} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB049.width-450.png",
    keywords: [],
    name: "Rampart of the Ram’s Head",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Equipment,
    typeText: "Guardian Equipment – Off-Hand",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.OffHand
  },{
    class: Class.Guardian,
    identifier: "rotten-old-buckler",
    functionalText: `**Blade Break** *(If you defend with Rotten Old Buckler, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD003.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Rotten Old Buckler",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Equipment,
    typeText: "Guardian Equipment – Off-Hand",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.OffHand
  },{
    class: Class.Ranger,
    identifier: "new-horizon",
    functionalText: `If you have a face up card in your arsenal, you have an additional arsenal zone.  If New Horizon is destroyed, destroy all cards in your arsenal.  **Blade Break** *(If you defend with New Horizon, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB050.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "New Horizon",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Equipment,
    typeText: "Ranger Equipment – Head",
    defense: 2,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    class: Class.Ranger,
    identifier: "honing-hood",
    functionalText: `**Instant** - Destroy Honing Hood: Return all cards in your arsenal to your hand, then put a card from your hand face down into your arsenal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI003.width-450.png",
    keywords: [],
    name: "Honing Hood",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Equipment,
    typeText: "Ranger Equipment – Head",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    class: Class.Runeblade,
    identifier: "spellbound-creepers",
    functionalText: `**Once per Turn Instant** - {r}, put a bind counter on Spellbound Creepers: You may play your next 'non-attack' action card this turn as though it were an instant. Activate this ability only if you have attacked or defended with an attack action card this turn.  At the beginning of your end phase, destroy Spellbound Creepers unless you have dealt arcane damage equal to or greater than the number of bind counters on Spellbound Creepers.  **Blade Break** *(If you defend with Spellbound Creepers, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB051.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Spellbound Creepers",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Equipment,
    typeText: "Runeblade Equipment – Legs",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    class: Class.Runeblade,
    identifier: "sutcliffes-suede-hides",
    functionalText: `**Attack Reaction** - {r}, destroy Sutcliffe's Suede Hides: Target attack action card gains **go again.** Activate this ability only if you have played a 'non-attack' action card this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI008.width-450.png",
    keywords: [],
    name: "Sutcliffe’s Suede Hides",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Equipment,
    typeText: "Runeblade Equipment – Legs",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    class: Class.Generic,
    identifier: "ragamuffins-hat",
    functionalText: `**Instant** - Destroy Ragamuffin’s Hat: Draw a card then put a card from your hand on the top or bottom of your deck. Activate this ability only if you have 1 card in hand.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE233.width-450.png",
    keywords: [],
    name: "Ragamuffin’s Hat",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Generic Equipment – Head",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    class: Class.Generic,
    identifier: "deep-blue",
    functionalText: `**Action** - Put a card from your hand on the bottom of your deck, destroy Deep Blue: Gain {r}{r}{r}. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI004.width-450.png",
    keywords: [],
    name: "Deep Blue",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Equipment,
    typeText: "Generic Equipment – Chest",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Generic,
    identifier: "cracker-jax",
    functionalText: `**Action** - Destroy Cracker Jax: The next attack action card you play this turn gains +1{p}. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE235.width-450.png",
    keywords: [],
    name: "Cracker Jax",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Generic Equipment – Arms",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Generic,
    identifier: "runaways",
    functionalText: `**Instant** - Destroy Runaways: Prevent the next 1 damage that would be dealt to your hero this turn. Activate this ability only if your hero has been dealt damage this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE236.width-450.png",
    keywords: [],
    name: "Runaways",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Equipment,
    typeText: "Generic Equipment – Legs",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Legs
  },{
    class: Class.Brute,
    identifier: "skull-crushers",
    functionalText: `Whenever you roll a 5 or 6 on a die, your Brute attacks gain +1{p} this turn.  Whenever you roll a 1 on a die, destroy Skull Crushers.  **Battleworn** *(If you defend with Skull Crushers, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR001.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Skull Crushers",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Equipment,
    typeText: "Brute Equipment – Arms",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Guardian,
    identifier: "stalagmite-bastion-of-isenloft",
    functionalText: `Whenever you defend with Stalagmite, create a Frostbite token under the attacking hero's control. **Temper**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB078.width-450.png",
    keywords: [Keyword.Temper],
    name: "Stalagmite, Bastion of Isenloft",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Equipment,
    typeText: "Ice Guardian Equipment – Off-Hand",
    defense: 2,
    
    talents: [Talent.Ice],
    subType: EquipmentSubType.OffHand
  },{
    class: Class.Guardian,
    identifier: "earthlore-bounty",
    functionalText: `Whenever you draw a card from the effect of an action card, create a Seismic Surge token for each card drawn this way.  **Temper** *(If you defend with Earthlore Bounty, put a -1{d} counter on it when the combat chain closes then destroy it if it has 0{d}.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB076.width-450.png",
    keywords: [Keyword.Temper],
    name: "Earthlore Bounty",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Equipment,
    typeText: "Guardian Equipment – Chest",
    defense: 2,
    
    talents: [],
    subType: EquipmentSubType.Chest
  },{
    class: Class.Ninja,
    identifier: "mask-of-the-pouncing-lynx",
    functionalText: `When an attack action card you control hits, you may destroy Mask of the Pouncing Lynx. If you do, search your deck for an attack action card with 2 or less {p}, banish it, then shuffle. You may play it this turn.  **Blade Break** *(If you defend with Mask of the Pouncing Lynx, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR037.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Mask of the Pouncing Lynx",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Equipment,
    typeText: "Ninja Equipment – Head",
    defense: 2,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    class: Class.Warrior,
    identifier: "helm-of-sharp-eye",
    functionalText: `**Attack Reaction** - {r}, destroy Helm of Sharp Eye: Banish the top card of your deck. You may play it this combat chain. Activate this ability only if you control a weapon with {p} greater than twice it's base {p}.  **Battleworn** *(If you defend with Helm of Sharp Eye, put a -1{d} counter on it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR053.width-450.png",
    keywords: [Keyword.Battleworn],
    name: "Helm of Sharp Eye",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Equipment,
    typeText: "Warrior Equipment – Head",
    defense: 1,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    class: Class.Merchant,
    identifier: "silver-palms",
    functionalText: `At the start of each other hero's turn, if they have less {h} than you, they may draw a card. If they do, you create a Silver token.  **Blade Break** *(If you defend with Silver Paws, destroy it when the combat chain closes.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR086.width-450.png",
    keywords: [Keyword.BladeBreak],
    name: "Silver Palms",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Equipment,
    typeText: "Merchant Equipment – Arms",
    defense: 2,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Runeblade,
    identifier: "vexing-quillhand",
    functionalText: `**Action** - Destroy Vexing Quillhand: Create 2 Runechant tokens. **Go again**  **Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR103.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Vexing Quillhand",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Equipment,
    typeText: "Runeblade Equipment – Arms",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Arms
  },{
    class: Class.Illusionist,
    identifier: "crown-of-reflection",
    functionalText: `**Instant** - Destroy Crown of Reflection: Destroy target Illusionist aura you control. If you do, you may put an Illusionist aura card from your hand into the arena with cost less than or equal the aura destroyed this way. Activate Crown of Reflection only during your action phase.  **Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR137.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Crown of Reflection",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Equipment,
    typeText: "Illusionist Equipment – Head",
    defense: 0,
    
    talents: [],
    subType: EquipmentSubType.Head
  },{
    class: Class.Generic,
    identifier: "arcane-lantern",
    functionalText: `**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR155.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Arcane Lantern",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Equipment,
    typeText: "Generic Equipment – Off-Hand",
    
    
    talents: [],
    subType: EquipmentSubType.OffHand
  }];
  const heroes: HeroCard[] = [{
    class: Class.Merchant,
    identifier: "ruudi-gem-keeper",
    functionalText: `You may only have PSA graded cards in your deck.  **Once per Turn Action** - {r}: Reveal the top card of your deck. If it’s graded Gem Min 10, put it into your hand, otherwise each opponent may draw a card. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LSS001.width-450.png",
    keywords: [],
    name: "Ruu’di, Gem Keeper",
    rarity: Rarity.Promo,
    restrictedFormats: [],
    sets: [Release.Promos],
    type: Type.Hero,
    typeText: "Hero – Merchant",
    intellect: 4,
    hero: Hero.Ruudi,
    life: 40,
    young: null
  },{
    class: Class.Shapeshifter,
    identifier: "taylor",
    functionalText: `You may have equipment of any class or talent in your inventory. Each equipment in your starting inventory must have a different name.  At the start of your turn, you may banish an equipment you control. If you do, equip a card of the same subtype from your inventory.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LSS003_A.width-450.png",
    keywords: [],
    name: "Taylor",
    rarity: Rarity.Promo,
    restrictedFormats: [],
    sets: [Release.Promos],
    type: Type.Hero,
    typeText: "Shapeshifter Hero – Young",
    intellect: 4,
    hero: Hero.Taylor,
    life: 18,
    young: true
  },{
    class: Class.Bard,
    identifier: "yorick-weaver-of-tales",
    functionalText: `At the start of the game, all heroes shuffle their starting decks together. All heroes share the same deck and graveyard this game.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LSS004_A.width-450.png",
    keywords: [],
    name: "Yorick, Weaver of Tales",
    rarity: Rarity.Promo,
    restrictedFormats: [],
    sets: [Release.Promos],
    type: Type.Hero,
    typeText: "Bard Hero – Young",
    intellect: 4,
    hero: Hero.Yorick,
    life: 20,
    young: true
  },{
    class: Class.Brute,
    identifier: "rhinar-reckless-rampage",
    functionalText: `Whenever you discard a card with 6 or more {p} during your action phase, **intimidate**. *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER001-P.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Rhinar, Reckless Rampage",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.RhinarHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Brute Hero",
    intellect: 4,
    hero: Hero.Rhinar,
    life: 40,
    young: null
  },{
    class: Class.Brute,
    identifier: "rhinar",
    functionalText: `When you discard a card with 6 or more {p} during your action phase, **intimidate**. *(Target hero banishes face down a random card from their hand. At the beginning of the end phase, return all cards banished this way to their owners hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER005-P.width-450.png",
    keywords: [Keyword.Intimidate],
    name: "Rhinar",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Promos,Release.RhinarHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Hero,
    typeText: "Brute Hero – Young",
    intellect: 4,
    hero: Hero.Rhinar,
    life: 20,
    young: true
  },{
    class: Class.Guardian,
    identifier: "bravo-showstopper",
    functionalText: `**Action** - {r}{r}: Until end of turn, your attack action cards with cost 3 or greater gains **dominate**. **Go again** *(The defending hero can’t defend with more than 1 card from their hand)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER002-P.width-450.png",
    keywords: [],
    name: "Bravo, Showstopper",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.BravoBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Guardian Hero",
    intellect: 4,
    hero: Hero.Bravo,
    life: 40,
    young: null
  },{
    class: Class.Guardian,
    identifier: "bravo",
    functionalText: `**Action** - {r}{r}: Until end of turn, your attack action cards with cost 3 or greater gains **dominate**. **Go again** *(The defending hero can’t defend with more than 1 card from their hand)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER006-P.width-450.png",
    keywords: [],
    name: "Bravo",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Promos,Release.BravoBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Hero,
    typeText: "Guardian Hero – Young",
    intellect: 4,
    hero: Hero.Bravo,
    life: 20,
    young: true
  },{
    class: Class.Ninja,
    identifier: "katsu-the-wanderer",
    functionalText: `The first time an attack action card you control hits, you may discard a card with cost 0. If you do, search your deck for a card with **combo**, banish it face up, then shuffle your deck. You may play it this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER003-P.width-450.png",
    keywords: [],
    name: "Katsu, the Wanderer",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.KatsuHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Ninja Hero",
    intellect: 4,
    hero: Hero.Katsu,
    life: 40,
    young: null
  },{
    class: Class.Ninja,
    identifier: "katsu",
    functionalText: `The first time an attack action card you control hits, you may discard a card with cost 0. If you do, search your deck for a card with **combo**, banish it face up, then shuffle your deck. You may play it this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER007-P.width-450.png",
    keywords: [],
    name: "Katsu",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Promos,Release.KatsuHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Hero,
    typeText: "Ninja Hero – Young",
    intellect: 4,
    hero: Hero.Katsu,
    life: 20,
    young: true
  },{
    class: Class.Warrior,
    identifier: "dorinthea-ironsong",
    functionalText: `**Once per turn Effect** - When a weapon you control hits, you may attack an additional time with that weapon this turn. *(You must have an action point to attack an additional time.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER004-P.width-450.png",
    keywords: [],
    name: "Dorinthea Ironsong",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Warrior Hero",
    intellect: 4,
    hero: Hero.Dorinthea,
    life: 40,
    young: null
  },{
    class: Class.Warrior,
    identifier: "dorinthea",
    functionalText: `**Once per turn Effect** - When a weapon you control hits, you may attack an additional time with that weapon this turn. *(You must have an action point to attack an additional time.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER008-P.width-450.png",
    keywords: [],
    name: "Dorinthea",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Promos,Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe],
    type: Type.Hero,
    typeText: "Warrior Hero – Young",
    intellect: 4,
    hero: Hero.Dorinthea,
    life: 20,
    young: true
  },{
    class: Class.Mechanologist,
    identifier: "dash-inventor-extraordinaire",
    functionalText: `You may start the game with a Mechanologist item with cost 2 or less in the arena. *(It’s considered to have entered the arena.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER009-P.width-450.png",
    keywords: [],
    name: "Dash, Inventor Extraordinaire",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Mechanologist Hero",
    intellect: 4,
    hero: Hero.Dash,
    life: 40,
    young: null
  },{
    class: Class.Mechanologist,
    identifier: "dash",
    functionalText: `You may start the game with a Mechanologist item with cost 2 or less in the arena. *(It’s considered to have entered the arena.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER013-P.width-450.png",
    keywords: [],
    name: "Dash",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Hero,
    typeText: "Mechanologist Hero – Young",
    intellect: 4,
    hero: Hero.Dash,
    life: 20,
    young: true
  },{
    class: Class.Ranger,
    identifier: "azalea-ace-in-the-hole",
    functionalText: `**Once per Turn Action** - 0: Put a card from your arsenal on the bottom of your deck. If you do, put the top card of your deck face up into your arsenal. If it’s an arrow card, it gains **dominate** until end of turn. **Go again** *(The defending hero can’t defend the attack with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER010-P.width-450.png",
    keywords: [],
    name: "Azalea, Ace in the Hole",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Ranger Hero",
    intellect: 4,
    hero: Hero.Azalea,
    life: 40,
    young: null
  },{
    class: Class.Ranger,
    identifier: "azalea",
    functionalText: `**Once per Turn Action** - 0: Put a card from your arsenal on the bottom of your deck. If you do, put the top card of your deck face up into your arsenal. If it’s an arrow card, it gains **dominate** until end of turn. **Go again** *(The defending hero can’t defend the attack with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER014-P.width-450.png",
    keywords: [],
    name: "Azalea",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Hero,
    typeText: "Ranger Hero – Young",
    intellect: 4,
    hero: Hero.Azalea,
    life: 20,
    young: true
  },{
    class: Class.Runeblade,
    identifier: "viserai-rune-blood",
    functionalText: `Whenever you play a Runeblade card, if you have played another 'non-attack' action card this turn, create a Runechant token. *(It's an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.”)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER011-P.width-450.png",
    keywords: [],
    name: "Viserai, Rune Blood",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Runeblade Hero",
    intellect: 4,
    hero: Hero.Viserai,
    life: 40,
    young: null
  },{
    class: Class.Runeblade,
    identifier: "viserai",
    functionalText: `Whenever you play a Runeblade card, if you have played another 'non-attack' action card this turn, create a Runechant token. *(It's an aura with "When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero.”)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER015-P.width-450.png",
    keywords: [],
    name: "Viserai",
    rarity: Rarity.Token,
    restrictedFormats: [Format.Blitz],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Hero,
    typeText: "Runeblade Hero – Young",
    intellect: 4,
    hero: Hero.Viserai,
    life: 20,
    young: true
  },{
    class: Class.Wizard,
    identifier: "kano-dracai-of-aether",
    functionalText: `**Instant** - {r}{r}{r}: Look at the top card of your deck. If it's a 'non-attack' action card, you may banish it. If you do, you may play it this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER012-P.width-450.png",
    keywords: [],
    name: "Kano, Dracai of Aether",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Wizard Hero",
    intellect: 4,
    hero: Hero.Kano,
    life: 30,
    young: null
  },{
    class: Class.Wizard,
    identifier: "kano",
    functionalText: `**Instant** - {r}{r}{r}: Look at the top card of your deck. If it's a 'non-attack' action card, you may banish it. If you do, you may play it this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER016-P.width-450.png",
    keywords: [],
    name: "Kano",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising],
    type: Type.Hero,
    typeText: "Wizard Hero – Young",
    intellect: 4,
    hero: Hero.Kano,
    life: 15,
    young: true
  },{
    class: Class.Brute,
    identifier: "kayo-berserker-runt",
    functionalText: `Whenever you play an attack action card with base power 6 or more {p}, roll a 6 sided die. On;  - 1 to 4 - Halve the attack's base {p}, rounded down.  - 5 to 6 - Double the attack's base {p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER025.width-450.png",
    keywords: [],
    name: "Kayo, Berserker Runt",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Brute Hero – Young",
    intellect: 4,
    hero: Hero.Kayo,
    life: 19,
    young: true
  },{
    class: Class.Ninja,
    identifier: "ira-crimson-haze",
    functionalText: `Your second attack each turn gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER000-P.width-450.png",
    keywords: [],
    name: "Ira, Crimson Haze",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.IraWelcomeDeck,Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Ninja Hero – Young",
    intellect: 4,
    hero: Hero.Ira,
    life: 20,
    young: true
  },{
    class: Class.Ninja,
    identifier: "benji-the-piercing-wind",
    functionalText: `Attack action cards you control with 2 or less {p} can't be defended by cards from hand. *(This includes defense reaction cards.)*  **Once per Turn Effect** - When an attack action card you control hits, your next attack this turn gains +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER026.width-450.png",
    keywords: [],
    name: "Benji, the Piercing Wind",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Ninja Hero – Young",
    intellect: 4,
    hero: Hero.Benji,
    life: 17,
    young: true
  },{
    class: Class.Warrior,
    identifier: "kassai-cintari-sellsword",
    functionalText: `Your second sword attack each turn costs {r} less.  At the beginning of your end phase, if you have attacked 2 or more times with weapons this turn, create a Copper token for each weapon attack that hit. *(It's an item with "**Action**- {r}{r}{r}{r}, destroy Copper: Draw a card. **Go again**")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER029.width-450.png",
    keywords: [],
    name: "Kassai, Cintari Sellsword",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Warrior Hero – Young",
    intellect: 4,
    hero: Hero.Kassai,
    life: 20,
    young: true
  },{
    class: Class.Shapeshifter,
    identifier: "shiyana-diamond-gemini",
    functionalText: `You may have **specialization** cards of any hero in your deck.  At the beginning of your action phase, Shiyana becomes a copy of target hero until the start of your next turn, and gains "Cards you own are the class of your hero in addition to their other class types."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU97.width-450.png",
    keywords: [],
    name: "Shiyana, Diamond Gemini",
    rarity: Rarity.Legendary,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Shapeshifter Hero – Young",
    intellect: 4,
    hero: Hero.Shiyana,
    life: 20,
    young: true
  },{
    class: Class.Mechanologist,
    identifier: "data-doll-mkii",
    functionalText: `Whenever a Mechanologist item with cost 2 or less is put into your banished zone from your deck, put it into the arena.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER027.width-450.png",
    keywords: [],
    name: "Data Doll MKII",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Mechanologist Hero – Young",
    intellect: 3,
    hero: Hero.DataDoll,
    life: 20,
    young: true
  },{
    class: Class.Merchant,
    identifier: "kavdaen-trader-of-skins",
    functionalText: `**Once per Turn Action** - {r}{r}{r}: If a hero has more {h} than all other hero’s, they lose 1{h} and create a Copper token. Then if a hero has less {h} than all other hero’s, they gain 1{h}. **Go again** *(It's an item with "***Action*** - {r}{r}{r}{r}, destroy Copper: Draw a card. ***Go again***")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER028.width-450.png",
    keywords: [],
    name: "Kavdaen, Trader of Skins",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Merchant Hero – Young",
    intellect: 4,
    hero: Hero.Kavdaen,
    life: 20,
    young: true
  },{
    class: Class.Illusionist,
    identifier: "prism-sculptor-of-arc-light",
    functionalText: `**Once per Turn Instant** - {r}{r}, banish a card from Prism's soul: Create a Spectral Shield token. *(It's an Illusionist aura with "If your hero would be dealt damage, instead destroy Spectral Shield and prevent 1 damage that source would deal.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER030.width-450.png",
    keywords: [],
    name: "Prism, Sculptor of Arc Light",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Hero,
    typeText: "Light Illusionist Hero",
    intellect: 4,
    hero: Hero.Prism,
    life: 40,
    young: null
  },{
    class: Class.Illusionist,
    identifier: "prism",
    functionalText: `**Once per Turn Instant** - {r}{r}, banish a card from Prism's soul: Create a Spectral Shield token. *(It's an Illusionist aura with "If your hero would be dealt damage, instead destroy Spectral Shield and prevent 1 damage that source would deal.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER034.width-450.png",
    keywords: [],
    name: "Prism",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Hero,
    typeText: "Light Illusionist Hero – Young",
    intellect: 4,
    hero: Hero.Prism,
    life: 20,
    young: true
  },{
    class: Class.Warrior,
    identifier: "ser-boltyn-breaker-of-dawn",
    functionalText: `If you've **charged** this turn, attacks you control have +1{p} while defended by an attack action card.  **Attack Reaction** - Banish a card from Boltyn's soul: Target attack with {p} greater than its base {p} gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER031.width-450.png",
    keywords: [],
    name: "Ser Boltyn, Breaker of Dawn",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Hero,
    typeText: "Light Warrior Hero",
    intellect: 4,
    hero: Hero.Boltyn,
    life: 40,
    young: null
  },{
    class: Class.Warrior,
    identifier: "boltyn",
    functionalText: `If you've **charged** this turn, attacks you control have +1{p} while defended by an attack action card.  **Attack Reaction** - Banish a card from Boltyn's soul: Target attack with {p} greater than its base {p} gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER035.width-450.png",
    keywords: [],
    name: "Boltyn",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Hero,
    typeText: "Light Warrior Hero – Young",
    intellect: 4,
    hero: Hero.Boltyn,
    life: 20,
    young: true
  },{
    class: Class.Brute,
    identifier: "levia-shadowborn-abomination",
    functionalText: `If a card with 6 or more {p} has been put into your banished zone this turn, cards you own lose **blood debt** during the end phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER032.width-450.png",
    keywords: [],
    name: "Levia, Shadowborn Abomination",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Hero,
    typeText: "Shadow Brute Hero",
    intellect: 4,
    hero: Hero.Levia,
    life: 40,
    young: null
  },{
    class: Class.Brute,
    identifier: "levia",
    functionalText: `If a card with 6 or more {p} has been put into your banished zone this turn, cards you own lose **blood debt** during the end phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER036.width-450.png",
    keywords: [],
    name: "Levia",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Hero,
    typeText: "Shadow Brute Hero – Young",
    intellect: 4,
    hero: Hero.Levia,
    life: 20,
    young: true
  },{
    class: Class.Runeblade,
    identifier: "chane-bound-by-shadow",
    functionalText: `**Once per Turn Action** - Create a Soul Shackle token: Your next Runeblade or Shadow action this turn gains **go again. Go again** *(It's a Shadow Runeblade aura with "At the beginning of your action phase, banish the top card of your deck.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER033.width-450.png",
    keywords: [],
    name: "Chane, Bound by Shadow",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Hero,
    typeText: "Shadow Runeblade Hero",
    intellect: 4,
    hero: Hero.Chane,
    life: 40,
    young: null
  },{
    class: Class.Runeblade,
    identifier: "chane",
    functionalText: `**Once per Turn Action** - Create a Soul Shackle token: Your next Runeblade or Shadow action this turn gains **go again. Go again** *(It's a Shadow Runeblade aura with "At the beginning of your action phase, banish the top card of your deck.")*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER037.width-450.png",
    keywords: [],
    name: "Chane",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Hero,
    typeText: "Shadow Runeblade Hero – Young",
    intellect: 4,
    hero: Hero.Chane,
    life: 20,
    young: true
  },{
    class: Class.Guardian,
    identifier: "oldhim-grandfather-of-eternity",
    functionalText: `**Essence of Earth and Ice** *(You may have Earth and Ice cards in your deck.)*  **Once per Turn Defense Reaction** - {r}{r}{r}: If an Earth card is pitched this way, prevent the next 2 damage that would be dealt to Oldhim this turn. If an Ice card is pitched this way, the attacking hero puts a card from their hand on top of their deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER042.width-450.png",
    keywords: [Keyword.Essence],
    name: "Oldhim, Grandfather of Eternity",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Hero,
    typeText: "Elemental Guardian Hero",
    intellect: 4,
    hero: Hero.Oldhim,
    life: 40,
    young: null
  },{
    class: Class.Guardian,
    identifier: "oldhim",
    functionalText: `**Essence of Earth and Ice** *(You may have Earth and Ice cards in your deck.)*  **Once per Turn Defense Reaction** - {r}{r}{r}: If an Earth card is pitched this way, prevent the next 2 damage that would be dealt to Oldhim this turn. If an Ice card is pitched this way, the attacking hero puts a card from their hand on top of their deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER045.width-450.png",
    keywords: [Keyword.Essence],
    name: "Oldhim",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Hero,
    typeText: "Elemental Guardian Hero – Young",
    intellect: 4,
    hero: Hero.Oldhim,
    life: 20,
    young: true
  },{
    class: Class.Ranger,
    identifier: "lexi-livewire",
    functionalText: `**Essence of Ice and Lightning** *(You may have Ice and Lightning cards in your deck.)*  **Once per Turn Action** - Turn a face down card in your arsenal face up: If it's a Lightning card, your next attack this turn gains **go again.** If it's an Ice card, create a Frostbite token under target hero's control. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER043.width-450.png",
    keywords: [Keyword.Essence],
    name: "Lexi, Livewire",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Hero,
    typeText: "Elemental Ranger Hero",
    intellect: 4,
    hero: Hero.Lexi,
    life: 40,
    young: null
  },{
    class: Class.Ranger,
    identifier: "lexi",
    functionalText: `**Essence of Ice and Lightning** *(You may have Ice and Lightning cards in your deck.)*  **Once per Turn Action** - Turn a face down card in your arsenal face up: If it's a Lightning card, your next attack this turn gains **go again.** If it's an Ice card, create a Frostbite token under target hero's control. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER046.width-450.png",
    keywords: [Keyword.Essence],
    name: "Lexi",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Hero,
    typeText: "Elemental Ranger Hero – Young",
    intellect: 4,
    hero: Hero.Lexi,
    life: 20,
    young: true
  },{
    class: Class.Runeblade,
    identifier: "briar-warden-of-thorns",
    functionalText: `**Essence of Earth and Lightning** *(You may have Earth and Lightning cards in your deck.)*  The first time an attack action card you control deals damage to an opposing hero, create an Embodiment of Earth token.  Whenever you play your second 'non-attack' action card each turn, create an Embodiment of Lightning token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER044.width-450.png",
    keywords: [Keyword.Essence],
    name: "Briar, Warden of Thorns",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Promos,Release.Monarch],
    type: Type.Hero,
    typeText: "Elemental Runeblade Hero",
    intellect: 4,
    hero: Hero.Briar,
    life: 40,
    young: null
  },{
    class: Class.Runeblade,
    identifier: "briar",
    functionalText: `**Essence of Earth and Lightning** *(You may have Earth and Lightning cards in your deck.)*  The first time an attack action card you control deals damage to an opposing hero, create an Embodiment of Earth token.  Whenever you play your second 'non-attack' action card each turn, create an Embodiment of Lightning token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER047.width-450.png",
    keywords: [Keyword.Essence],
    name: "Briar",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Promos,Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Hero,
    typeText: "Elemental Runeblade Hero – Young",
    intellect: 4,
    hero: Hero.Briar,
    life: 20,
    young: true
  },{
    class: Class.Guardian,
    identifier: "bravo-star-of-the-show",
    functionalText: `**Essence of Earth, Ice, and Lightning** *(You may have Earth, Ice, and Lightning cards in your deck.)*  At the start of your turn, you may reveal an Earth, an Ice, and a Lightning card from your hand. If you do, the next attack action card with cost 3 or greater you play this turn gains +2{p}, **dominate**, and **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR017.width-450.png",
    keywords: [Keyword.Essence],
    name: "Bravo, Star of the Show",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Hero,
    typeText: "Elemental Guardian Hero",
    intellect: 4,
    hero: Hero.Bravo,
    life: 40,
    young: null
  },{
    class: Class.Guardian,
    identifier: "valda-brightaxe",
    functionalText: `Whenever an opponent draws a card during an action phase, create a Seismic Surge token for each card drawn this way.  At the start of your turn, if you control 3 or more Seismic Surge tokens, cards you own with **crush** gain **dominate** this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER051.width-450.png",
    keywords: [],
    name: "Valda Brightaxe",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Hero,
    typeText: "Guardian Hero – Young",
    intellect: 4,
    hero: Hero.Valda,
    life: 21,
    young: true
  },{
    class: Class.Merchant,
    identifier: "genis-wotchuneed",
    functionalText: `**Once per Turn Action** - {r}{r}: Each other hero may put a card from their hand on the bottom of their deck. If they do, they draw a card and you create a Silver token. If you gain no Silver this way, draw a card. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER053.width-450.png",
    keywords: [],
    name: "Genis Wotchuneed",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Hero,
    typeText: "Merchant Hero – Young",
    intellect: 4,
    hero: Hero.GenisWotchuneed,
    life: 20,
    young: true
  },{
    class: Class.Wizard,
    identifier: "iyslander",
    functionalText: `**Essence of Ice** *(You may have Ice cards in your deck.)*  If it's not your turn, you may play blue 'non-attack' action cards from your arsenal as though they were an instant.  Whenever you play an Ice card during an opponents turn, create a Frostbite token under their control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER052.width-450.png",
    keywords: [Keyword.Essence],
    name: "Iyslander",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Everfest],
    type: Type.Hero,
    typeText: "Elemental Wizard Hero – Young",
    intellect: 4,
    hero: Hero.Iyslander,
    life: 18,
    young: true
  }];
  const resources: ResourceCard[] = [{
    class: Class.Generic,
    identifier: "heart-of-fyendal-blue",
    functionalText: `When you pitch Heart of Fyendal, if you have less {h} than your opponent, gain 1{h}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/WTR_0.width-450.png",
    keywords: [Keyword.Legendary],
    name: "Heart of Fyendal",
    rarity: Rarity.Fabled,
    restrictedFormats: [],
    sets: [Release.WelcomeToRathe],
    type: Type.Resource,
    typeText: "Generic Resource – Gem",
    
    
    pitch: 3,
    talents: [],
    subType: ResourceSubType.Gem
  },{
    class: Class.Generic,
    identifier: "cracked-bauble-yellow",
    functionalText: `*(Cracked Bauble exists to support Booster Draft and sealed Deck formats. A player may add any number of Cracked Baubles to their deck. Typically, a player would only do this if they did not have enough legally playable cards to make a 30 card minimum deck.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS083.width-450.png",
    keywords: [],
    name: "Cracked Bauble",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.WelcomeToRathe,Release.ArcaneRising,Release.CrucibleOfWar,Release.Monarch,Release.Monarch],
    type: Type.Resource,
    typeText: "Generic Resource",
    
    
    pitch: 2,
    talents: [],
    
  },{
    class: Class.Generic,
    identifier: "eye-of-ophidia-blue",
    functionalText: `**Legendary** *(You may only have 1 Eye of Ophidia in your deck.)*  When you pitch Eye of Ophidia, **opt 2.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC0.width-450.png",
    keywords: [Keyword.Legendary,Keyword.Opt],
    name: "Eye of Ophidia",
    rarity: Rarity.Fabled,
    restrictedFormats: [],
    sets: [Release.ArcaneRising],
    type: Type.Resource,
    typeText: "Generic Resource – Gem",
    
    
    pitch: 3,
    talents: [],
    subType: ResourceSubType.Gem
  },{
    class: Class.Runeblade,
    identifier: "arknight-shard-blue",
    functionalText: `**Legendary Viserai Specialization** *(You may only have 1 Arknight Shard in your deck, and only if your hero is Viserai.)*  When you pitch Arknight Shard, create a Runechant token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU0.width-450.png",
    keywords: [Keyword.Legendary,Keyword.Specialization],
    name: "Arknight Shard",
    rarity: Rarity.Fabled,
    restrictedFormats: [],
    sets: [Release.CrucibleOfWar],
    type: Type.Resource,
    typeText: "Runeblade Resource – Gem",
    
    
    pitch: 3,
    talents: [],
    subType: ResourceSubType.Gem
  },{
    class: Class.Guardian,
    identifier: "grandeur-of-valahai-blue",
    functionalText: `**Legendary** (You may only have 1 Grandeur of Valahai in your deck.)  When you pitch Grandeur of Valahai, create a Seismic Surge token.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR000.width-450.png",
    keywords: [Keyword.Legendary],
    name: "Grandeur of Valahai",
    rarity: Rarity.Fabled,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Resource,
    typeText: "Guardian Resource – Gem",
    
    
    pitch: 3,
    talents: [],
    subType: ResourceSubType.Gem
  }];
  const tokens: TokenCard[] = [{
    class: Class.Guardian,
    identifier: "seismic-surge",
    functionalText: `At the beginning of your action phase, destroy Seismic Surge then the next Guardian attack action card you play this turn costs {r} less to play.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/OLD032.width-450.png",
    keywords: [],
    name: "Seismic Surge",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.OldhimBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe,Release.CrucibleOfWar,Release.Monarch,Release.Everfest],
    type: Type.Token,
    typeText: "Guardian Token – Aura",
    talents: [],
    subType: TokenSubType.Aura
  },{
    class: Class.Generic,
    identifier: "quicken",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*  When you play an attack card or attack with a weapon, destroy Quicken then the attack gains **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/cardfaces/promos/XXX009.png",
    keywords: [],
    name: "Quicken",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.RhinarHeroDeck,Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe,Release.CrucibleOfWar,Release.Everfest],
    type: Type.Token,
    typeText: "Generic Token – Aura",
    talents: [],
    subType: TokenSubType.Aura
  },{
    class: Class.Runeblade,
    identifier: "runechant",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*  When you play an attack action card or attack with a weapon, destroy Runechant and deal 1 arcane damage to target opposing hero`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP300.width-450.png",
    keywords: [],
    name: "Runechant",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.ArcaneRising,Release.CrucibleOfWar,Release.Everfest],
    type: Type.Token,
    typeText: "Runeblade Token – Aura",
    talents: [],
    subType: TokenSubType.Aura
  },{
    class: Class.Ninja,
    identifier: "zen-state",
    functionalText: `Zen State enters the arena with 1 balance counter on it. At the beginning of your action phase, destroy Zen State unless you remove a balance counter from it.  Whenever your hero would be dealt damage, prevent 1 damage that source would deal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP137.width-450.png",
    keywords: [],
    name: "Zen State",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Token,
    typeText: "Ninja Token – Aura",
    talents: [],
    subType: TokenSubType.Aura
  },{
    class: Class.Generic,
    identifier: "copper",
    functionalText: `**Action** - {r}{r}{r}{r}, destroy Copper: Draw a card. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB055.width-450.png",
    keywords: [],
    name: "Copper",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.CrucibleOfWar,Release.Everfest],
    type: Type.Token,
    typeText: "Generic Token – Item",
    talents: [],
    subType: TokenSubType.Item
  },{
    class: Class.Illusionist,
    identifier: "spectral-shield",
    functionalText: `*(Auras stay in the arena until they are destroyed.)*  If your hero would be dealt damage, instead destroy Spectral Shield and prevent 1 damage that source would deal.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/PSM030.width-450.png",
    keywords: [],
    name: "Spectral Shield",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.PrismBlitzDeck,Release.Monarch,Release.Everfest],
    type: Type.Token,
    typeText: "Illusionist Token – Aura",
    talents: [],
    subType: TokenSubType.Aura
  },{
    class: Class.Runeblade,
    identifier: "soul-shackle",
    functionalText: `*(Auras stay in the arena.)*  At the beginning of your action phase, banish the top card of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CHN030.width-450.png",
    keywords: [],
    name: "Soul Shackle",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Token,
    typeText: "Shadow Runeblade Token – Aura",
    talents: [Talent.Shadow],
    subType: TokenSubType.Aura
  },{
    class: Class.Generic,
    identifier: "blasmophet-the-soul-harvester",
    functionalText: `*(Allies can be attacked, can't be defended with {d}, and are destroyed when they have taken damage equal to their {h}. At end of turn, heal all damage dealt to Blasmophet.)*  **Once per Turn Action** - 0: **Attack**  Whenever Blasmophet attacks, you may banish a Shadow card from your hand. If you do, the defending hero banishes a card from their soul.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB021.width-450.png",
    keywords: [],
    name: "Blasmophet, the Soul Harvester",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Token,
    typeText: "Shadow Token – Demon Ally",
    talents: [Talent.Shadow],
    subType: TokenSubType.Ally
  },{
    class: Class.Generic,
    identifier: "ursur-the-soul-reaper",
    functionalText: `*(Allies can be attacked, can't be defended with {d}, and are destroyed when they have taken damage equal to their {h}. At end of turn, heal all damage dealt to Ursur.)*  **Once per Turn Action** - 0: **Attack**  While Ursur is attacking a hero with 1 or more cards in their soul, the attack has **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB022.width-450.png",
    keywords: [],
    name: "Ursur, the Soul Reaper",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Token,
    typeText: "Shadow Token – Demon Ally",
    talents: [Talent.Shadow],
    subType: TokenSubType.Ally
  },{
    class: Class.Generic,
    identifier: "embodiment-of-earth",
    functionalText: `‘Non-attack' action cards you control have +1{d} while defending.  At the beginning of your action phase, destroy Embodiment of Earth.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI003.width-450.png",
    keywords: [],
    name: "Embodiment of Earth",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Token,
    typeText: "Elemental Token – Aura",
    talents: [Talent.Elemental],
    subType: TokenSubType.Aura
  },{
    class: Class.Generic,
    identifier: "embodiment-of-lightning",
    functionalText: `When you play an attack action card, destroy Embodiment of Lightning and the attack gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/BRI002.width-450.png",
    keywords: [],
    name: "Embodiment of Lightning",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Token,
    typeText: "Elemental Token – Aura",
    talents: [Talent.Elemental],
    subType: TokenSubType.Aura
  },{
    class: Class.Generic,
    identifier: "frostbite",
    functionalText: `Cards and activated abilities you control cost an additional {r}.  At the beginning of your end phase or when you play a card or activate an ability, destroy Frostbite.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LXI030.width-450.png",
    keywords: [],
    name: "Frostbite",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.LexiBlitzDeck,Release.OldhimBlitzDeck,Release.Monarch,Release.Everfest],
    type: Type.Token,
    typeText: "Elemental Token – Aura",
    talents: [Talent.Elemental],
    subType: TokenSubType.Aura
  },{
    class: Class.Generic,
    identifier: "silver",
    functionalText: `**Action** - {r}{r}{r}, destroy Silver: Draw a card. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR195.width-450.png",
    keywords: [],
    name: "Silver",
    rarity: Rarity.Common,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Token,
    typeText: "Generic Token – Item",
    talents: [],
    subType: TokenSubType.Item
  }];
  const weapons: WeaponCard[] = [{
    class: Class.Brute,
    identifier: "romping-club",
    functionalText: `**Once per Turn Action** - {r}{r}: **Attack**  **Once per Turn Effect** – When you discard a card with 6 or more {p}, Romping Club gains +1{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS001-P.width-450.png",
    keywords: [],
    name: "Romping Club",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Promos,Release.RhinarHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Brute Weapon - Club (2H)  ",
    handsRequired: HandsRequired.TwoHanded,
    power: 4,
    
    talents: [],
    subType: WeaponSubType.Club
  },{
    class: Class.Guardian,
    identifier: "anothos",
    functionalText: `**Once per turn Action** - {r}{r}{r}:**Attack**  While there are 2 or more cards with cost 3 or greater in your pitch zone, Anothos has +2{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB061.width-450.png",
    keywords: [],
    name: "Anothos",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Promos,Release.Promos,Release.BravoBlitzDeck,Release.HistoryPack1,Release.WelcomeToRathe,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Guardian Weapon – Hammer (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 4,
    
    talents: [],
    subType: WeaponSubType.Hammer
  },{
    class: Class.Ninja,
    identifier: "harmonized-kodachi",
    functionalText: `**Once per Turn Action** - {r}: **Attack**  If you have a card with cost 0 in your pitch zone, Harmonized Kodachi has **go again**.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS003-P.width-450.png",
    keywords: [],
    name: "Harmonized Kodachi",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Promos,Release.KatsuHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Ninja Weapon – Dagger (1H)",
    handsRequired: HandsRequired.OneHanded,
    
    
    talents: [],
    subType: WeaponSubType.Dagger
  },{
    class: Class.Warrior,
    identifier: "dawnblade",
    functionalText: `**Once per Turn Action** - {r}: **Attack**  If Dawnblade hits, and it’s the second time it has hit this turn, put a +1{p} counter on Dawnblade.  At the beginning of your end phase, if Dawnblade has not hit this turn, remove all +1{p} counters from Dawnblade.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB062.width-450.png",
    keywords: [],
    name: "Dawnblade",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Promos,Release.Promos,Release.DorintheaHeroDeck,Release.HistoryPack1,Release.WelcomeToRathe,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Warrior Weapon – Sword (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 3,
    
    talents: [],
    subType: WeaponSubType.Sword
  },{
    class: Class.Mechanologist,
    identifier: "teklo-plasma-pistol",
    functionalText: `**Action** - Remove a steam counter from Teklo Plasma Pistol: **Attack**  **Action** - {r}: If there are no steam counters on Teklo Plasma Pistol, put a steam counter on it. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS009-P.width-450.png",
    keywords: [],
    name: "Teklo Plasma Pistol",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Mechanologist Weapon – Pistol (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 2,
    
    talents: [],
    subType: WeaponSubType.Pistol
  },{
    class: Class.Ranger,
    identifier: "death-dealer",
    functionalText: `**Once per Turn Action** - {r}: If you have no cards in your arsenal, you may put an arrow card from your hand face up into your arsenal. If you do, draw a card. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS010-P.width-450.png",
    keywords: [],
    name: "Death Dealer",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Ranger Weapon – Bow (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [],
    subType: WeaponSubType.Bow
  },{
    class: Class.Runeblade,
    identifier: "nebula-blade",
    functionalText: `Once per Turn Action - {r}{r}: **Attack**  If Nebula Blade hits, create a Runechant token.  If you have played a 'non-attack' action card this turn, Nebula Blade gains +3{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS011-P.width-450.png",
    keywords: [],
    name: "Nebula Blade",
    rarity: Rarity.Token,
    restrictedFormats: [Format.Blitz],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Runeblade Weapon – Sword (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 1,
    
    talents: [],
    subType: WeaponSubType.Sword
  },{
    class: Class.Wizard,
    identifier: "crucible-of-aetherweave",
    functionalText: `**Once per Turn Instant** - {r}: The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus 1.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS012-P.width-450.png",
    keywords: [],
    name: "Crucible of Aetherweave",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.HistoryPack1,Release.ArcaneRising,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Wizard Weapon – Staff (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [],
    subType: WeaponSubType.Staff
  },{
    class: Class.Brute,
    identifier: "mandible-claw",
    functionalText: `**Once per Turn Action** - {r}{r}: **Attack**  If you have discarded a card with 6 or more {p} this turn, Mandible Claw gains **go again.**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP004.width-450.png",
    keywords: [],
    name: "Mandible Claw",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Brute Weapon – Claw (1H)",
    handsRequired: HandsRequired.OneHanded,
    power: 3,
    
    talents: [],
    subType: WeaponSubType.Claw
  },{
    class: Class.Guardian,
    identifier: "sledge-of-anvilheim",
    functionalText: `**Action** - {r}{r}{r}{r}: **Attack**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP046.width-450.png",
    keywords: [],
    name: "Sledge of Anvilheim",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Guardian Weapon – Hammer (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 6,
    
    talents: [],
    subType: WeaponSubType.Hammer
  },{
    class: Class.Ninja,
    identifier: "edge-of-autumn",
    functionalText: `**Once per Turn Action** - {r}: **Attack**. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/IRA002-P_03Jc6pa.width-450.png",
    keywords: [],
    name: "Edge of Autumn",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.IraWelcomeDeck,Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Ninja Weapon – Sword (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 1,
    
    talents: [],
    subType: WeaponSubType.Sword
  },{
    class: Class.Ninja,
    identifier: "zephyr-needle",
    functionalText: `**Once per Turn Attack** - {r}: **Attack**. **Go again**  If Zephyr Needle is defended by a card with {d} greater than Zephyr Needle's {p}, destroy Zephyr Needle when the combat chain closes.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP093.width-450.png",
    keywords: [],
    name: "Zephyr Needle",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Ninja Weapon – Dagger (1H)",
    handsRequired: HandsRequired.OneHanded,
    power: 2,
    
    talents: [],
    subType: WeaponSubType.Dagger
  },{
    class: Class.Warrior,
    identifier: "cintari-saber",
    functionalText: `**Once per Turn Action** - {r}: **Attack**  Whenever Cintari Saber is defended by 1 or more attack action cards, it gains +1{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP141.width-450.png",
    keywords: [],
    name: "Cintari Saber",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Warrior Weapon – Sword (1H)",
    handsRequired: HandsRequired.OneHanded,
    power: 2,
    
    talents: [],
    subType: WeaponSubType.Sword
  },{
    class: Class.Mechanologist,
    identifier: "plasma-barrel-shot",
    functionalText: `**Once per Turn Action** - Remove a steam counter from Plasma Barrel Shot: **Attack**  **Action** - {r}{r}: If there are no steam counters on Plasma Barrel Shot, put a steam counter on it. **Go again**  X is equal to 1 plus the number of times you have **boosted** this combat chain.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP183.width-450.png",
    keywords: [],
    name: "Plasma Barrel Shot",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Mechanologist Weapon – Gun (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    specialPower: "X",
    talents: [],
    subType: WeaponSubType.Gun
  },{
    class: Class.Ranger,
    identifier: "red-liner",
    functionalText: `**Once per Turn Action** - 0: If you have no cards in your arsenal, put an arrow card from your hand face up into your arsenal. **Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP224.width-450.png",
    keywords: [],
    name: "Red Liner",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Ranger Weapon – Bow (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [],
    subType: WeaponSubType.Bow
  },{
    class: Class.Runeblade,
    identifier: "reaping-blade",
    functionalText: `**Once per Turn Action** - {r}: **Attack**  If a hero has more {h} than any other hero, they can't gain {h}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP261.width-450.png",
    keywords: [],
    name: "Reaping Blade",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Runeblade Weapon – Sword (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 3,
    
    talents: [],
    subType: WeaponSubType.Sword
  },{
    class: Class.Wizard,
    identifier: "aether-conduit",
    functionalText: `**Once per Turn Action** - {r}{r}: Deal 2 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP304.width-450.png",
    keywords: [],
    name: "Aether Conduit",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Wizard Weapon – Staff (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [],
    subType: WeaponSubType.Staff
  },{
    class: Class.Generic,
    identifier: "talishar-the-lost-prince",
    functionalText: `**Once per Turn Action** - {r}{r}, put a rust counter on Talishar, the Lost Prince: **Attack**  At the beginning of your end phase, if Talishar, the Lost Prince has 3 or more rust counters on it, destroy it.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/1HP367.width-450.png",
    keywords: [],
    name: "Talishar, the Lost Prince",
    rarity: Rarity.Rare,
    restrictedFormats: [],
    sets: [Release.HistoryPack1,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Generic Weapon – Sword (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [],
    subType: WeaponSubType.Sword
  },{
    class: Class.Illusionist,
    identifier: "luminaris",
    functionalText: `During your action phase, Illusionist auras you control are weapons with 1{p} and "**Once per Turn Action** - 0: **Attack**"  While there is a card with a yellow color strip in your pitch zone, Illusionist attacks you control have **go again.**"`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON003.width-450.png",
    keywords: [],
    name: "Luminaris",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Weapon,
    typeText: "Light Illusionist Weapon – Scepter (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [Talent.Light],
    subType: WeaponSubType.Scepter
  },{
    class: Class.Warrior,
    identifier: "raydn-duskbane",
    functionalText: `**Once per Turn Action** - 0: **Attack**  If you've **charged** this turn, Raydn gains +3{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON031.width-450.png",
    keywords: [],
    name: "Raydn, Duskbane",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Weapon,
    typeText: "Light Warrior Weapon – Sword (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [Talent.Light],
    subType: WeaponSubType.Sword
  },{
    class: Class.Illusionist,
    identifier: "iris-of-reality",
    functionalText: `Illusionist Weapon - Orb (2H)  During your action phase, Illusionist auras you control are weapons with 4{p} and **Once per Turn Action** - {r}{r}{r}: **Attack. Go again**`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS048.width-450.png",
    keywords: [],
    name: "Iris of Reality",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.PrismBlitzDeck,Release.Monarch],
    type: Type.Weapon,
    typeText: "Illusionist Weapon – Orb (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [],
    subType: WeaponSubType.Orb
  },{
    class: Class.Warrior,
    identifier: "hatchet-of-body",
    functionalText: `**Once per Turn Action** - {r}: **Attack**  Whenever you attack with Hatchet of Body, if Hatchet of Mind was the last attack this turn, Hatchet of Body gains +1{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS049.width-450.png",
    keywords: [],
    name: "Hatchet of Body",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Weapon,
    typeText: "Warrior Weapon – Axe (1H)",
    handsRequired: HandsRequired.OneHanded,
    power: 2,
    
    talents: [],
    subType: WeaponSubType.Axe
  },{
    class: Class.Warrior,
    identifier: "hatchet-of-mind",
    functionalText: `**Once per Turn Action** - {r}: **Attack**  Whenever you attack with Hatchet of Mind, if Hatchet of Body was the last attack this turn, Hatchet of Mind gains +1{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS050.width-450.png",
    keywords: [],
    name: "Hatchet of Mind",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.BoltynBlitzDeck,Release.Monarch],
    type: Type.Weapon,
    typeText: "Warrior Weapon – Axe (1H)",
    handsRequired: HandsRequired.OneHanded,
    power: 2,
    
    talents: [],
    subType: WeaponSubType.Axe
  },{
    class: Class.Brute,
    identifier: "hexagore-the-death-hydra",
    functionalText: `**Once per Turn Action** - {r}{r}: **Attack**  Whenever you attack with Hexagore, the Death Hydra, it deals damage to you equal to 6 minus the number of cards with **blood debt** in your banished zone.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON121.width-450.png",
    keywords: [],
    name: "Hexagore, the Death Hydra",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Weapon,
    typeText: "Shadow Brute Weapon – Flail (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 6,
    
    talents: [Talent.Shadow],
    subType: WeaponSubType.Flail
  },{
    class: Class.Runeblade,
    identifier: "galaxxi-black",
    functionalText: `**Once per Turn Action** - {r}: **Attack**  If you have played a card from your banished zone this turn, Galaxxi Black gains +2{p} until end of turn.  If Galaxxi Black hits a hero, deal 1 arcane damage to that hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS046.width-450.png",
    keywords: [],
    name: "Galaxxi Black",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.ChaneBlitzDeck,Release.Monarch],
    type: Type.Weapon,
    typeText: "Shadow Runeblade Weapon – Sword (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 1,
    
    talents: [Talent.Shadow],
    subType: WeaponSubType.Sword
  },{
    class: Class.Brute,
    identifier: "ravenous-meataxe",
    functionalText: `**Once per Turn Action** - {r}{r}: **Attack**  Whenever you attack with Ravenous Meataxe, draw a card then discard a random card. If a card with 6 or more {p} is discarded this way, Ravenous Meataxe gains +2{p} until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS047.width-450.png",
    keywords: [],
    name: "Ravenous Meataxe",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.LeviaBlitzDeck,Release.Monarch],
    type: Type.Weapon,
    typeText: "Brute Weapon – Axe (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 3,
    
    talents: [],
    subType: WeaponSubType.Axe
  },{
    class: Class.Runeblade,
    identifier: "dread-scythe",
    functionalText: `**Once per Turn Action** - {r}{r}{r}: **Attack**  Whenever you attack with Dread Scythe, deal 1 arcane damage to the defending hero.  A hero dealt damage by Dread Scythe can't gain {h} during their next action phase.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/MON229.width-450.png",
    keywords: [],
    name: "Dread Scythe",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Weapon,
    typeText: "Runeblade Weapon – Scythe (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 3,
    
    talents: [],
    subType: WeaponSubType.Scythe
  },{
    class: Class.Guardian,
    identifier: "winters-wail",
    functionalText: `**Once per Turn Action** - {r}{r}{r}: **Attack**  If an Ice card is pitched this way, Winter’s Wail gains "If this hits a hero, create a Frostbite token under their control."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE003.width-450.png",
    keywords: [],
    name: "Winter’s Wail",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Monarch],
    type: Type.Weapon,
    typeText: "Elemental Guardian Weapon – Hammer (1H)",
    handsRequired: HandsRequired.OneHanded,
    power: 4,
    
    talents: [Talent.Elemental],
    subType: WeaponSubType.Hammer
  },{
    class: Class.Ranger,
    identifier: "shiver",
    functionalText: `**Once per Turn Instant** - {r}: You may put an arrow card from your hand face up into an empty arsenal zone you control. If you do, choose 1;  - It gains +1{p} until end of turn.  - It gains **dominate** until end of turn. *(The defending hero can't defend the attack with more than 1 card from their hand.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS067.width-450.png",
    keywords: [],
    name: "Shiver",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.LexiBlitzDeck,Release.Monarch],
    type: Type.Weapon,
    typeText: "Elemental Ranger Weapon – Bow (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [Talent.Elemental],
    subType: WeaponSubType.Bow
  },{
    class: Class.Ranger,
    identifier: "voltaire-strike-twice",
    functionalText: `**Twice per Turn Instant** - {r}: You may put an arrow card from your hand face up into an empty arsenal zone you control. If you do, choose 1;  - It gains +1{p} until end of turn. - It gains **go again** until end of turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB075.width-450.png",
    keywords: [],
    name: "Voltaire, Strike Twice",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Promos,Release.Monarch],
    type: Type.Weapon,
    typeText: "Elemental Ranger Weapon – Bow (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [Talent.Elemental],
    subType: WeaponSubType.Bow
  },{
    class: Class.Guardian,
    identifier: "titans-fist",
    functionalText: `**Once per Turn Action** - {r}{r}{r}: **Attack**  If there is a card with cost 3 or greater in your pitch zone, Titan’s Fist has +1{p}.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS066.width-450.png",
    keywords: [],
    name: "Titan’s Fist",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.OldhimBlitzDeck,Release.Monarch],
    type: Type.Weapon,
    typeText: "Guardian Weapon – Hammer (1H)",
    handsRequired: HandsRequired.OneHanded,
    power: 3,
    
    talents: [],
    subType: WeaponSubType.Hammer
  },{
    class: Class.Runeblade,
    identifier: "rosetta-thorn",
    functionalText: `**Once per Turn Action** - {r}: **Attack**  Whenever you attack with Rosetta Thorn, if you've played an attack action card and a 'non-attack' action card this turn, deal 2 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS068.width-450.png",
    keywords: [],
    name: "Rosetta Thorn",
    rarity: Rarity.Token,
    restrictedFormats: [],
    sets: [Release.Promos,Release.BriarBlitzDeck,Release.Monarch],
    type: Type.Weapon,
    typeText: "Runeblade Weapon – Sword (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 2,
    
    talents: [],
    subType: WeaponSubType.Sword
  },{
    class: Class.Runeblade,
    identifier: "duskblade",
    functionalText: `**Once per Turn Action** - {r}: **Attack**  Whenever you attack with Duskblade, if you've played an attack action card and a 'non-attack' action card this turn, put a +1{p} counter on Duskblade.  At the beginning of your end phase, if you haven't played an attack action card and a 'non-attack' action card this turn, remove all +1{p} counters from Duskblade.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ELE223.width-450.png",
    keywords: [],
    name: "Duskblade",
    rarity: Rarity.Majestic,
    restrictedFormats: [Format.Blitz,Format.Commoner],
    sets: [Release.Monarch],
    type: Type.Weapon,
    typeText: "Runeblade Weapon – Sword (2H)",
    handsRequired: HandsRequired.TwoHanded,
    power: 2,
    
    talents: [],
    subType: WeaponSubType.Sword
  },{
    class: Class.Ranger,
    identifier: "dreadbore",
    functionalText: `**Once per Turn Action** - {r}: You may put an arrow card from your hand face up into an empty arsenal zone you control. If you do, it gains +1{p} until end of turn. **Go again**  Arrows you control have "Defense reactions can't be played from hand this chain link."`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR087.width-450.png",
    keywords: [],
    name: "Dreadbore",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Weapon,
    typeText: "Ranger Weapon – Bow (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [],
    subType: WeaponSubType.Bow
  },{
    class: Class.Wizard,
    identifier: "krakens-aethervein",
    functionalText: `**Once per Turn Instant** - {r}{r}{r}: Deal 1 arcane damage to target opposing hero. Draw a card for each arcane damage dealt this way.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR121.width-450.png",
    keywords: [],
    name: "Kraken’s Aethervein",
    rarity: Rarity.Majestic,
    restrictedFormats: [],
    sets: [Release.Everfest],
    type: Type.Weapon,
    typeText: "Wizard Weapon – Staff (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [],
    subType: WeaponSubType.Staff
  }];

  export const cards: ( ActionCard | EquipmentCard | HeroCard | ResourceCard | TokenCard | WeaponCard )[] = [
    ...actions,
    ...attackReactions,
    ...defenseReactions,
    ...instants,
    ...equipment,
    ...heroes,
    ...resources,
    ...tokens,
    ...weapons,
  ];
  