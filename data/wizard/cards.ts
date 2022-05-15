
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
    class: Class.Wizard,
    identifier: "kano-dracai-of-aether",
    functionalText: `**Instant** - {r}{r}{r}: Look at the top card of your deck. If it's a 'non-attack' action card, you may banish it. If you do, you may play it this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER012-P.width-450.png",
    keywords: [],
    name: "Kano, Dracai of Aether",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.ArcaneRising,Release.CrucibleOfWar],
    type: Type.Hero,
    typeText: "Wizard Hero",
    intellect: 4,
    hero: Hero.Kano,
    life: 30,
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "kano",
    functionalText: `**Instant** - {r}{r}{r}: Look at the top card of your deck. If it's a 'non-attack' action card, you may banish it. If you do, you may play it this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER016-P.width-450.png",
    keywords: [],
    name: "Kano",
    rarity: Rarity.Token,
    sets: [Release.HeroDeck,Release.ArcaneRising],
    type: Type.Hero,
    typeText: "Wizard Hero – Young",
    intellect: 4,
    hero: Hero.Kano,
    life: 15,
    young: true,
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "crucible-of-aetherweave",
    functionalText: `**Once per Turn Instant** - {r}: The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus 1.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS012-P.width-450.png",
    keywords: [],
    name: "Crucible of Aetherweave",
    rarity: Rarity.Token,
    sets: [Release.Promos,Release.ArcaneRising,Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Wizard Weapon – Staff (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [Talent.NotTalented],
    subType: WeaponSubType.Staff
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "storm-striders",
    functionalText: `**Instant** - {r}, destroy Storm Striders: You may play your next Wizard 'non-attack' action card this turn as though it were an instant.

**Arcane Barrier 2** *(If your hero would be dealt arcane damage, you may pay {r}{r} instead. If you do, prevent 2 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/FAB011-P.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Storm Striders",
    rarity: Rarity.Legendary,
    sets: [Release.Promos,Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Wizard Equipment – Legs",
    defense: 0,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Legs
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "robe-of-rapture",
    functionalText: `**Action** - Destroy Robe of Rapture: Gain {r}{r}{r}.

**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC117.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Robe of Rapture",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Equipment,
    typeText: "Wizard Equipment – Chest",
    defense: 0,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Chest
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "blazing-aether-red",
    functionalText: `**Kano Specialization** *(You may only have Blazing Aether in your deck if your hero is Kano.)*

Deal X arcane damage to target hero, where X is the amount of arcane damage you have dealt to that hero this turn.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC118.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Blazing Aether",
    rarity: Rarity.Majestic,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    specialization: Hero.Kano,
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "sonic-boom-yellow",
    functionalText: `Deal 3 arcane damage to target opposing hero.

If Sonic Boom deals damage, look at the top card of your deck. If it's a Wizard 'non-attack' action card, you may banish it. If you do, you may play it this turn as though it were an instant and it costs X resource points less to play, where X is the damage dealt by Sonic Boom.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC119.width-450.png",
    keywords: [],
    name: "Sonic Boom",
    rarity: Rarity.Majestic,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "forked-lightning-red",
    functionalText: `Deal 2 arcane damage to target hero.

Deal 2 arcane damage to target hero.

*(Effects that modify damage modify both damage effects of Forked Lightning. Forked Lightning is considered a single source of damage.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC120.width-450.png",
    keywords: [],
    name: "Forked Lightning",
    rarity: Rarity.SuperRare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 3,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "lesson-in-lava-yellow",
    functionalText: `**Kano Specialization** *(You may only have Lesson in Lava in your deck if your hero is Kano.)*

Deal 3 arcane damage to target opposing hero.

If Lesson in Lava deals damage, you may search your deck for a Wizard card with {r} cost equal to or less than the damage dealt by Lesson in Lava, reveal it, then shuffle your deck and put it on top of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC121.width-450.png",
    keywords: [Keyword.Specialization],
    name: "Lesson in Lava",
    rarity: Rarity.SuperRare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    specialization: Hero.Kano,
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "tome-of-aetherwind-red",
    functionalText: `Choose 2. You may choose the same mode more than once;

- The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus 1.
- Draw a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC122.width-450.png",
    keywords: [],
    name: "Tome of Aetherwind",
    rarity: Rarity.SuperRare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 2,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },,,,{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "aether-spindle-red",
    functionalText: `Deal 4 arcane damage to target opposing hero.

**Opt X**, where X is the damage dealt by Aether Spindle. *(Look at the top X cards of your deck. You may put them on the top and/or bottom in any order.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC126.width-450.png",
    keywords: [Keyword.Opt],
    name: "Aether Spindle",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "aether-spindle-yellow",
    functionalText: `Deal 3 arcane damage to target opposing hero.

**Opt X**, where X is the damage dealt by Aether Spindle. *(Look at the top X cards of your deck. You may put them on the top and/or bottom in any order.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC127.width-450.png",
    keywords: [Keyword.Opt],
    name: "Aether Spindle",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "aether-spindle-blue",
    functionalText: `Deal 2 arcane damage to target opposing hero.

**Opt X**, where X is the damage dealt by Aether Spindle. *(Look at the top X cards of your deck. You may put them on the top and/or bottom in any order.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC128.width-450.png",
    keywords: [Keyword.Opt],
    name: "Aether Spindle",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [Format.Blitz],
    class: Class.Wizard,
    identifier: "stir-the-aetherwinds-red",
    functionalText: `You may play your next Wizard 'non-attack' action card this turn as though it were an instant and if it has an effect that deals arcane damage, instead that effect deals that much arcane damage plus 3.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC129.width-450.png",
    keywords: [],
    name: "Stir the Aetherwinds",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 2,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [Format.Blitz],
    class: Class.Wizard,
    identifier: "stir-the-aetherwinds-yellow",
    functionalText: `You may play your next Wizard 'non-attack' action card this turn as though it were an instant and if it has an effect that deals arcane damage, instead that effect deals that much arcane damage plus 2.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC130.width-450.png",
    keywords: [],
    name: "Stir the Aetherwinds",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 2,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [Format.Blitz],
    class: Class.Wizard,
    identifier: "stir-the-aetherwinds-blue",
    functionalText: `You may play your next Wizard 'non-attack' action card this turn as though it were an instant and if it has an effect that deals arcane damage, instead that effect deals that much arcane damage plus 1.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC131.width-450.png",
    keywords: [],
    name: "Stir the Aetherwinds",
    rarity: Rarity.Rare,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 2,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "aether-flare-red",
    functionalText: `Deal 3 arcane damage to target opposing hero.

The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus X, where X is the damage dealt by Aether Flare.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC132.width-450.png",
    keywords: [],
    name: "Aether Flare",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "aether-flare-yellow",
    functionalText: `Deal 2 arcane damage to target opposing hero.

The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus X, where X is the damage dealt by Aether Flare.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC133.width-450.png",
    keywords: [],
    name: "Aether Flare",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "aether-flare-blue",
    functionalText: `Deal 1 arcane damage to target opposing hero.

The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus X, where X is the damage dealt by Aether Flare.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC134.width-450.png",
    keywords: [],
    name: "Aether Flare",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "index-red",
    functionalText: `Look at the top 5 cards of your deck. Put 1 card from among them on top of your deck, and the rest on the bottom of your deck in any order.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC135.width-450.png",
    keywords: [],
    name: "Index",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 2,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "index-yellow",
    functionalText: `Look at the top 4 cards of your deck. Put 1 card from among them on top of your deck, and the rest on the bottom of your deck in any order.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC136.width-450.png",
    keywords: [],
    name: "Index",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 2,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "index-blue",
    functionalText: `Look at the top 3 cards of your deck. Put 1 card from among them on top of your deck, and the rest on the bottom of your deck in any order.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC137.width-450.png",
    keywords: [],
    name: "Index",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 2,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "reverberate-red",
    functionalText: `Deal 3 arcane damage to target opposing hero.

If Reverberate deals damage, you may banish a Wizard 'non-attack' action card from your hand with {r} cost less than or equal to the damage dealt by Reverberate. If you do, you may play it this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC138.width-450.png",
    keywords: [],
    name: "Reverberate",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "reverberate-yellow",
    functionalText: `Deal 2 arcane damage to target opposing hero.

If Reverberate deals damage, you may banish a Wizard 'non-attack' action card from your hand with {r} cost less than or equal to the damage dealt by Reverberate. If you do, you may play it this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC139.width-450.png",
    keywords: [],
    name: "Reverberate",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "reverberate-blue",
    functionalText: `Deal 1 arcane damage to target opposing hero.

If Reverberate deals damage, you may banish a Wizard 'non-attack' action card from your hand with {r} cost less than or equal to the damage dealt by Reverberate. If you do, you may play it this turn as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC140.width-450.png",
    keywords: [],
    name: "Reverberate",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "scalding-rain-red",
    functionalText: `Deal 4 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC141.width-450.png",
    keywords: [],
    name: "Scalding Rain",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "scalding-rain-yellow",
    functionalText: `Deal 3 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC142.width-450.png",
    keywords: [],
    name: "Scalding Rain",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "scalding-rain-blue",
    functionalText: `Deal 2 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC143.width-450.png",
    keywords: [],
    name: "Scalding Rain",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "zap-red",
    functionalText: `Deal 3 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC144.width-450.png",
    keywords: [],
    name: "Zap",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "zap-yellow",
    functionalText: `Deal 2 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC145.width-450.png",
    keywords: [],
    name: "Zap",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "zap-blue",
    functionalText: `Deal 1 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/ARC146.width-450.png",
    keywords: [],
    name: "Zap",
    rarity: Rarity.Common,
    sets: [Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "voltic-bolt-red",
    functionalText: `Deal 5 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS016-P.width-450.png",
    keywords: [],
    name: "Voltic Bolt",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "voltic-bolt-yellow",
    functionalText: `Deal 4 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS042.width-450.png",
    keywords: [],
    name: "Voltic Bolt",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "voltic-bolt-blue",
    functionalText: `Deal 3 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS043.width-450.png",
    keywords: [],
    name: "Voltic Bolt",
    rarity: Rarity.Common,
    sets: [Release.Promos,Release.ArcaneRising],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "aether-conduit",
    functionalText: `**Once per Turn Action** - {r}{r}: Deal 2 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU160.width-450.png",
    keywords: [],
    name: "Aether Conduit",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Weapon,
    typeText: "Wizard Weapon – Staff (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [Talent.NotTalented],
    subType: WeaponSubType.Staff
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "metacarpus-node",
    functionalText: `Whenever you play a card with an effect that deals arcane damage, you may pay {r}. If you do, that effect deals that much arcane damage plus 1 and at the beginning of the end phase, destroy Metacarpus Node.

**Arcane Barrier 1** *(If your hero would be dealt arcane damage, you may pay {r} instead. If you do, prevent 1 arcane damage that source would deal.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU161.width-450.png",
    keywords: [Keyword.ArcaneBarrier],
    name: "Metacarpus Node",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Equipment,
    typeText: "Wizard Equipment – Arms",
    defense: 0,
    
    talents: [Talent.NotTalented],
    subType: EquipmentSubType.Arms
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "chain-lightning-yellow",
    functionalText: `You may play your next Wizard 'non-attack' action card this turn as though it were an instant.

If you have played another Wizard 'non-attack' action card this turn, deal 3 arcane damage to each opposing hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU162.width-450.png",
    keywords: [],
    name: "Chain Lightning",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "gaze-the-ages-blue",
    functionalText: `**Opt 2** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*

If you have played another Wizard 'non-attack' action card this turn, put Gaze the Ages into your hand as it resolves.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU163.width-450.png",
    keywords: [Keyword.Opt],
    name: "Gaze the Ages",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "aetherize-blue",
    functionalText: `**Negate** target instant card with cost {r} or less. *(The card does not resolve. Put it into its owner's graveyard.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU164.width-450.png",
    keywords: [Keyword.Negate],
    name: "Aetherize",
    rarity: Rarity.Majestic,
    sets: [Release.CrucibleOfWar],
    type: Type.Instant,
    typeText: "Wizard Instant",
    cost: 1,
    
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "cindering-foresight-red",
    functionalText: `If it's not your turn, you may play Cindering Foresight as though it were an instant.

The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus 1.

**Opt 3** *(Look at the top 3 cards of your deck. You may put them on the top and/or bottom in any order.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU165.width-450.png",
    keywords: [Keyword.Opt],
    name: "Cindering Foresight",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 2,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "cindering-foresight-yellow",
    functionalText: `If it's not your turn, you may play Cindering Foresight as though it were an instant.

The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus 1.

**Opt 2** *(Look at the top 2 cards of your deck. You may put them on the top and/or bottom in any order.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU166.width-450.png",
    keywords: [Keyword.Opt],
    name: "Cindering Foresight",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 2,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "cindering-foresight-blue",
    functionalText: `If it's not your turn, you may play Cindering Foresight as though it were an instant.

The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus 1.

**Opt 1** *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU167.width-450.png",
    keywords: [Keyword.Opt],
    name: "Cindering Foresight",
    rarity: Rarity.Rare,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 2,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "foreboding-bolt-red",
    functionalText: `Deal 3 damage to target hero.

**Opt 1** *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU168.width-450.png",
    keywords: [Keyword.Opt],
    name: "Foreboding Bolt",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "foreboding-bolt-yellow",
    functionalText: `Deal 2 damage to target hero.

**Opt 1** *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU169.width-450.png",
    keywords: [Keyword.Opt],
    name: "Foreboding Bolt",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "foreboding-bolt-blue",
    functionalText: `Deal 1 damage to target hero.

**Opt 1** *(Look at the top card of your deck. You may put it on the bottom.)*`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU170.width-450.png",
    keywords: [Keyword.Opt],
    name: "Foreboding Bolt",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "rousing-aether-red",
    functionalText: `Deal 4 arcane damage to target hero.

The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus 1.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU171.width-450.png",
    keywords: [],
    name: "Rousing Aether",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "rousing-aether-yellow",
    functionalText: `Deal 3 arcane damage to target hero.

The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus 1.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU172.width-450.png",
    keywords: [],
    name: "Rousing Aether",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "rousing-aether-blue",
    functionalText: `Deal 2 arcane damage to target hero.

The next card you play this turn with an effect that deals arcane damage, instead deals that much arcane damage plus 1.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU173.width-450.png",
    keywords: [],
    name: "Rousing Aether",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [Format.Blitz],
    class: Class.Wizard,
    identifier: "snapback-red",
    functionalText: `Deal 3 arcane damage to target hero.

If you have played another Wizard 'non-attack' action card this turn, you may play Snapback as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU174.width-450.png",
    keywords: [],
    name: "Snapback",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [Format.Blitz],
    class: Class.Wizard,
    identifier: "snapback-yellow",
    functionalText: `Deal 2 arcane damage to target hero.

If you have played another Wizard 'non-attack' action card this turn, you may play Snapback as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU175.width-450.png",
    keywords: [],
    name: "Snapback",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [Format.Blitz],
    class: Class.Wizard,
    identifier: "snapback-blue",
    functionalText: `Deal 1 arcane damage to target hero.

If you have played another Wizard 'non-attack' action card this turn, you may play Snapback as though it were an instant.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/CRU176.width-450.png",
    keywords: [],
    name: "Snapback",
    rarity: Rarity.Common,
    sets: [Release.CrucibleOfWar],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 1,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "iyslander",
    functionalText: `**Essence of Ice** *(You may have Ice cards in your deck.)*

If it's not your turn, you may play 'non-attack' action cards with blue color strips from your arsenal as though they were an instant.

Whenever you play an Ice card during an opponents turn, create a Frostbite token under their control.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/HER052.width-450.png",
    keywords: [Keyword.Essence],
    name: "Iyslander",
    rarity: Rarity.Majestic,
    sets: [Release.HeroDeck,Release.Everfest],
    type: Type.Hero,
    typeText: "Elemental Wizard Hero – Young",
    intellect: 4,
    hero: Hero.Iyslander,
    life: 18,
    young: true,
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "krakens-aethervein",
    functionalText: `**Once per Turn Instant** - {r}{r}{r}: Deal 1 arcane damage to target opposing hero. Draw a card for each arcane damage dealt this way.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR121.width-450.png",
    keywords: [],
    name: "Kraken's Aethervein",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Weapon,
    typeText: "Wizard Weapon – Staff (2H)",
    handsRequired: HandsRequired.TwoHanded,
    
    
    talents: [Talent.NotTalented],
    subType: WeaponSubType.Staff
  },,{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "aether-wildfire-red",
    functionalText: `Deal 4 arcane damage to target opposing hero.

If Aether Wildfire is played during an opponents turn, until end of turn, action card effects that deal arcane damage instead deal that much arcane damage plus X, where X is the damage dealt by Aether Wildfire.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR123.width-450.png",
    keywords: [],
    name: "Aether Wildfire",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "scour-blue",
    functionalText: `Destroy X target aura tokens and/or auras with cost 0 controlled by target hero. Then deal arcane damage to that hero equal to the number of auras destroyed this way.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR124.width-450.png",
    keywords: [],
    name: "Scour",
    rarity: Rarity.Majestic,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    specialCost: "X",
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "emeritus-scolding-red",
    functionalText: `Deal 4 arcane damage to target hero. If Emeritus Scolding is played during an opponents turn, instead deal 6 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS090.width-450.png",
    keywords: [],
    name: "Emeritus Scolding",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "emeritus-scolding-yellow",
    functionalText: `Deal 3 arcane damage to target hero. If Emeritus Scolding is played during an opponents turn, instead deal 5 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS091.width-450.png",
    keywords: [],
    name: "Emeritus Scolding",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "emeritus-scolding-blue",
    functionalText: `Deal 2 arcane damage to target hero. If Emeritus Scolding is played during an opponents turn, instead deal 4 arcane damage to target hero.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/LGS092.width-450.png",
    keywords: [],
    name: "Emeritus Scolding",
    rarity: Rarity.Rare,
    sets: [Release.Promos,Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 2,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "pry-red",
    functionalText: `Target hero reveals 3 cards from their hand. If Pry is played during an opponents turn, instead they reveal all cards in their hand.

You may choose a card revealed this way. If you do, that hero puts it on the bottom of their deck then draws a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR128.width-450.png",
    keywords: [],
    name: "Pry",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "pry-yellow",
    functionalText: `Target hero reveals 2 cards from their hand. If Pry is played during an opponents turn, instead they reveal all cards in their hand.

You may choose a card revealed this way. If you do, that hero puts it on the bottom of their deck then draws a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR129.width-450.png",
    keywords: [],
    name: "Pry",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "pry-blue",
    functionalText: `Target hero reveals a card from their hand. If Pry is played during an opponents turn, instead they reveal all cards in their hand.

You may choose a card revealed this way. If you do, that hero puts it on the bottom of their deck then draws a card.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR130.width-450.png",
    keywords: [],
    name: "Pry",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 0,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "pyroglyphic-protection-red",
    functionalText: `If your hero would be dealt arcane damage, prevent 3 arcane damage that source would deal.

At the beginning of your action phase, destroy Pyroglyphic Protection.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR131.width-450.png",
    keywords: [],
    name: "Pyroglyphic Protection",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action – Aura",
    cost: 2,
    defense: 2,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "pyroglyphic-protection-yellow",
    functionalText: `If your hero would be dealt arcane damage, prevent 2 arcane damage that source would deal.

At the beginning of your action phase, destroy Pyroglyphic Protection.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR132.width-450.png",
    keywords: [],
    name: "Pyroglyphic Protection",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action – Aura",
    cost: 2,
    defense: 2,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "pyroglyphic-protection-blue",
    functionalText: `If your hero would be dealt arcane damage, prevent 1 arcane damage that source would deal.

At the beginning of your action phase, destroy Pyroglyphic Protection.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR133.width-450.png",
    keywords: [],
    name: "Pyroglyphic Protection",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action – Aura",
    cost: 2,
    defense: 2,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    subType: ActionSubType.Aura,
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "timekeepers-whim-red",
    functionalText: `Deal 5 arcane damage to target hero.

If Timekeeper's Whim is played during an opponents turn, put it on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR134.width-450.png",
    keywords: [],
    name: "Timekeeper's Whim",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 3,
    defense: 3,
    pitch: 1,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "timekeepers-whim-yellow",
    functionalText: `Deal 4 arcane damage to target hero.

If Timekeeper's Whim is played during an opponents turn, put it on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR135.width-450.png",
    keywords: [],
    name: "Timekeeper's Whim",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 3,
    defense: 3,
    pitch: 2,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  },{
    bannedFormats: [],
    class: Class.Wizard,
    identifier: "timekeepers-whim-blue",
    functionalText: `Deal 3 arcane damage to target hero.

If Timekeeper's Whim is played during an opponents turn, put it on the bottom of your deck.`,
    imageUrl: "https://storage.googleapis.com/fabmaster/media/images/EVR136.width-450.png",
    keywords: [],
    name: "Timekeeper's Whim",
    rarity: Rarity.Common,
    sets: [Release.Everfest],
    type: Type.Action,
    typeText: "Wizard Action",
    cost: 3,
    defense: 3,
    pitch: 3,
    
    talents: [Talent.NotTalented],
    
    
    
    
    
  }];
  