document.addEventListener("DOMContentLoaded", function () {
  const worldForm = document.getElementById("worldForm");
  const generatedContent = document.getElementById("generatedContent");

  // Settlement Section Checkbox Functionality
  const enableSettlementsCheckbox = document.getElementById("enableSettlements");
  const settlementsSelect = document.getElementById("settlements");
  const settlementPOISelect = document.getElementById("settlementPOI");
  const racesSelect = document.getElementById("races");
  const encountersSelect = document.getElementById("encounters");

  enableSettlementsCheckbox.addEventListener("change", function () {
    settlementsSelect.disabled = !this.checked;
    settlementPOISelect.disabled = !this.checked;
    racesSelect.disabled = !this.checked;
    encountersSelect.disabled = !this.checked;
  });

  // Start World Generator Arrays

  //   Start Settlement Arrays

  const settlements = [
    {
      name: "Small Town",
      link: "https://example.com/small_town",
      description: "Quaint town known for its tight-knit community.",
      image: "../images/locations/smallTown.jpg",
    },
    {
      name: "River Town",
      link: "https://example.com/river_town",
      description: "Thrives on water-based trade and fishing.",
      image: "../images/locations/riverTown.jpg",
    },
    {
      name: "Mining Outpost",
      link: "https://example.com/mining_outpost",
      description: "Settlement focused on mining and resource extraction.",
      image: "../images/locations/miningOutpost.jpg",
    },
    {
      name: "Coastal Village",
      link: "https://example.com/coastal_village",
      description: "Relies on maritime activities and coastal trade.",
      image: "../images/locations/coastalVillage.jpg",
    },
    {
      name: "Forest Hamlet",
      link: "https://example.com/forest_hamlet",
      description: "Hidden within a dense forest, in harmony with nature.",
      image: "../images/locations/forestVillage.jpg",
    },
    {
      name: "Mountain Stronghold",
      link: "https://example.com/mountain_stronghold",
      description: "Built into the mountainside for defense and resources.",
      image: "../images/locations/mountainStronghold.jpg",
    },
    {
      name: "Desert Oasis",
      link: "https://example.com/desert_oasis",
      description: "Vital stop in the desert for travelers and adventurers.",
      image: "../images/locations/desertOasis.jpg",
    },
    {
      name: "Swamp Village",
      link: "https://example.com/swamp_village",
      description: "Relies on the unique resources and challenges of the swamp.",
      image: "../images/locations/swampVillage.jpg",
    },
    {
      name: "Magical Enclave",
      link: "https://example.com/magical_enclave",
      description: "Hub for magical research, study, and the mystical arts.",
      image: "../images/locations/magicalEnclave.jpg",
    },
    {
      name: "Nomadic Camp",
      link: "https://example.com/nomadic_camp",
      description: "Mobile settlement of wandering tribes or travelers.",
      image: "../images/locations/nomadicCamp.jpg",
    },
    {
      name: "Underground City",
      link: "https://example.com/underground_city",
      description: "Thrives below the surface, away from the eyes above.",
      image: "../images/locations/undergroundCity.jpg",
    },
    {
      name: "Floating Citadel",
      link: "https://example.com/floating_citadel",
      description: "A marvel in the sky or above water, feat. magical or technological engineering.",
      image: "../images/locations/floatingCitadel.jpg",
    },
    {
      name: "Beachside Resort",
      link: "https://example.com/beachside_resort",
      description: "Popular destination for relaxation and tourism.",
      image: "../images/locations/beachsideResort.jpg",
    },
    {
      name: "Borderland Garrison",
      link: "https://example.com/borderland_garrison",
      description: "Defensive outpost strategically located at a border.",
      image: "../images/locations/borderlandGarrison.jpg",
    },
    {
      name: "Trade Hub",
      link: "https://example.com/trade_hub",
      description: "Bustling center of commerce for traders, merchants, and caravans.",
      image: "../images/locations/tradeHub.jpg",
    },
    {
      name: "Outpost",
      link: "https://example.com/outpost",
      description: "A remote settlement, often serving as a military or exploratory outpost.",
      image: "../images/locations/outpost.jpg",
    },
    {
      name: "Stronghold",
      link: "https://example.com/stronghold",
      description: "Well-fortified settlement known for its defenses and security.",
      image: "../images/locations/stronghold.jpg",
    },
    {
      name: "Fishing Village",
      link: "https://example.com/fishing_village",
      description: "Relies on fishing and coastal activities for sustenance.",
      image: "../images/locations/fishingVIllage.jpg",
    },
    {
      name: "Market Town",
      link: "https://example.com/market_town",
      description: "Thriving center for trade and commerce, known for its markets.",
      image: "../images/locations/marketTown.jpg",
    },
    {
      name: "Arcane Refuge",
      link: "https://example.com/arcane_refuge",
      description: "A secluded place for magical study, often hidden from the world.",
      image: "../images/locations/arcaneRefuge.jpg",
    },
    {
      name: "Settler's Camp",
      link: "https://example.com/settlers_camp",
      description: "Temporary camp for settlers establishing new territories.",
      image: "../images/locations/settlersCamp.jpg",
    },
    {
      name: "Nomad's Oasis",
      link: "https://example.com/nomads_oasis",
      description: "Mobile oasis settlement for nomadic tribes in the desert.",
      image: "../images/locations/nomadsOasis.jpg",
    },
    {
      name: "Skyward Retreat",
      link: "https://example.com/skyward_retreat",
      description: "Elevated settlement in the mountains or trees, offering panoramic views.",
      image: "../images/locations/skywardRetreat.jpg",
    },
    {
      name: "Lakeside Haven",
      link: "https://example.com/lakeside_haven",
      description: "Tranquil settlement nestled by a picturesque lake.",
      image: "../images/locations/lakesideHaven.jpg",
    },
    {
      name: "Refugee Camp",
      link: "https://example.com/refugee_camp",
      description: "Temporary shelter for refugees, often near conflict zones.",
      image: "../images/locations/refugeeCamp.png",
    },
    {
      name: "Cavern Enclave",
      link: "https://example.com/cavern_enclave",
      description: "Settlement built within natural caverns, hidden from the surface.",
      image: "../images/locations/cavernEnclave.jpg",
    },
    {
      name: "Sylvan Retreat",
      link: "https://example.com/sylvan_retreat",
      description: "Hidden settlement in the heart of a magical or enchanted forest.",
      image: "../images/locations/sylvanRetreat.jpg",
    },
    {
      name: "Pirate Cove",
      link: "https://example.com/pirate_cove",
      description: "Hidden harbor for pirates, smugglers, and sailors of ill repute.",
      image: "../images/locations/pirateCove.jpg",
    },
    {
      name: "Watchtower Outpost",
      link: "https://example.com/watchtower_outpost",
      description: "Guarded outpost with a strategic watchtower for surveillance.",
      image: "../images/locations/watchtowewOutpost.jpg",
    },
    {
      name: "Wayfarer's Rest",
      link: "https://example.com/wayfarers_rest",
      description: "Rest stop for travelers and adventurers journeying through the wilderness.",
      image: "../images/locations/wayfarersRest.png",
    },
  ];  

  const settlementPOI = [
    {
      name: "Pilgrimage site",
      link: "https://example.com/pilgrimage_site",
      description: "A sacred site that attracts pilgrims from distant lands."
    },
    {
      name: "Temple to the Gods",
      link: "https://example.com/temple_to_the_gods",
      description: "A grand temple dedicated to the worship of powerful deities."
    },
    {
      name: "Large sewer system",
      link: "https://example.com/large_sewer_system",
      description: "An extensive underground network of sewers, perfect for urban exploration."
    },
    {
      name: "Mysterious Standing Stones",
      link: "https://example.com/mysterious_standing_stones",
      description: "Ancient stones with mystical symbols, shrouded in mystery and lore."
    },
    {
      name: "Enchanted Garden",
      link: "https://example.com/enchanted_garden",
      description: "A magical garden filled with flora and fauna with enchanting properties."
    },
    {
      name: "Arena of Champions",
      link: "https://example.com/arena_of_champions",
      description: "A coliseum where mighty warriors engage in epic battles for glory."
    },
    {
      name: "Mage's Library",
      link: "https://example.com/mages_library",
      description: "A repository of arcane knowledge, guarded by powerful spells and enchantments."
    },
    {
      name: "Haunted Manor",
      link: "https://example.com/haunted_manor",
      description: "A spooky and eerie manor inhabited by restless spirits and ghostly apparitions."
    },
    {
      name: "Thieves' Guild Hideout",
      link: "https://example.com/thieves_guild_hideout",
      description: "A secret den where skilled thieves plan and execute their daring heists."
    },
    {
      name: "Ancient Ruins",
      link: "https://example.com/ancient_ruins",
      description: "The remnants of a once-great civilization, now abandoned and surrounded by history."
    },
    {
      name: "Goblin Market",
      link: "https://example.com/goblin_market",
      description: "A bustling market run by mischievous goblins, offering rare and peculiar goods."
    },
    {
      name: "Cursed Well",
      link: "https://example.com/cursed_well",
      description: "A well with a dark curse, rumored to bring misfortune to those who drink from it."
    },
    {
      name: "Wizard's Tower",
      link: "https://example.com/wizards_tower",
      description: "A towering structure where wise wizards conduct magical experiments and studies."
    },
    {
      name: "Beastmaster's Menagerie",
      link: "https://example.com/beastmasters_menagerie",
      description: "A collection of exotic and fantastical creatures, tamed and cared for by skilled beastmasters."
    },
    {
      name: "Enigmatic Obelisk",
      link: "https://example.com/enigmatic_obelisk",
      description: "A mysterious obelisk with inscriptions that hold the key to ancient secrets."
    },
    {
      name: "Astral Observatory",
      link: "https://example.com/astral_observatory",
      description: "An observatory where astronomers study the celestial bodies and the mysteries of the cosmos."
    },
    {
      name: "Underground Arena",
      link: "https://example.com/underground_arena",
      description: "An arena hidden beneath the surface, where clandestine competitions take place."
    },
    {
      name: "Lighthouse of the Lost Souls",
      link: "https://example.com/lighthouse_of_the_lost_souls",
      description: "A haunting lighthouse guiding lost souls, surrounded by tales of maritime tragedies."
    },
    {
      name: "Mystical Hot Springs",
      link: "https://example.com/mystical_hot_springs",
      description: "Natural hot springs with magical properties, known for their healing and rejuvenating effects."
    },
    {
      name: "World Renowned Bakery",
      link: "https://example.com/world_renowned_bakery",
      description: "A bakery famous across realms for its delectable pastries and enchanting confections."
    },
    {
      name: "Sorcerer's Market",
      link: "https://example.com/sorcerers_market",
      description: "A market where sorcerers and magic practitioners trade rare ingredients and mystical artifacts."
    },
    {
      name: "The Whispering Grove",
      link: "https://example.com/whispering_grove",
      description: "A serene grove with trees that seem to whisper ancient secrets to those who listen."
    },
    {
      name: "Dragon's Hoard",
      link: "https://example.com/dragons_hoard",
      description: "A legendary treasure hoard that may be guarded by a mighty dragon, attracting brave adventurers."
    },
    {
      name: "Clockwork Workshop",
      link: "https://example.com/clockwork_workshop",
      description: "A workshop where skilled artisans craft intricate clockwork devices and automata."
    },
    {
      name: "Feywild Portal",
      link: "https://example.com/feywild_portal",
      description: "A mystical portal connecting the mortal realm to the enchanting and unpredictable Feywild."
    },
  ];

  const races = [
    {
      name: "Aarakocra",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/aarakocra.html",
      image: "../images/aarakocraRace.webp"
    },
    {
      name: "Aasimar",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/aasimar.html",
      image: "../images/aasimar.webp"
    },
    {
      name: "Astral Elves",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/astralElf.html",
      image: "../images/astralElf.webp"
    },
    {
      name: "Autognomes",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/autognome.html",
      image: "../images/autognome.jpg"
    },
    {
      name: "Bugbears",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/bugbear.html",
      image: "../images/bugbearRace.jpg"
    },
    {
      name: "Cats",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/cats.html",
      image: "../images/cats.webp"
    },
    {
      name: "Centaurs",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/centaur.html",
      image: "../images/centaurRace.webp"
    },
    {
      name: "Changelings",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/changeling.html",
      image: "../images/changeling.webp"
    },
    {
      name: "Deep Gnomes",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/deepGnome.html",
      image: "../images/deepGnome.webp"
    },
    {
      name: "Dogs",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/dogs.html",
      image: "../images/dogs.avif"
    },
    {
      name: "Dragonborn",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/dragonborn.html",
      image: "../images/dragonborn.png"
    },
    {
      name: "Duergar",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/duergar.html",
      image: "../images/duergar.webp"
    },
    {
      name: "Dwarves",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/dwarf.html",
      image: "../images/dwarf.png"
    },
    {
      name: "Eladrin",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/eladrin.html",
      image: "../images/eladrin.webp"
    },
    {
      name: "Elves",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/elf.html",
      image: "../images/elf.png"
    },
    {
      name: "Fairies",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/fairy.html",
      image: "../images/fairy.png"
    },
    {
      name: "Firbolgs",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/firbolg.html",
      image: "../images/firbolg.webp"
    },
    {
      name: "Air Genasi",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/genasiAir.html",
      image: "../images/genasiAir.png"
    },
    {
      name: "Earth Genasi",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/genasiEarth.html",
      image: "../images/genasiEarth.jpg"
    },
    {
      name: "Fire Genasi",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/genasiFire.html",
      image: "../images/genasiFire.jpg"
    },
    {
      name: "Water Genasi",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/genasiWater.html",
      image: "../images/genasiWater.webp"
    },
    {
      name: "Giff",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/giff.html",
      image: "../images/giff.webp"
    },
    {
      name: "Githyanki",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/githyanki.html",
      image: "../images/githyanki.webp"
    },
    {
      name: "Githzerai",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/githzerai.html",
      image: "../images/githzerai.webp"
    },
    {
      name: "Gnomes",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/gnome.html",
      image: "../images/gnome.png"
    },
    {
      name: "Goblins",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/goblin.html",
      image: "../images/goblinRace.webp"
    },
    {
      name: "Goliaths",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/goliath.html",
      image: "../images/goliath.png"
    },
    {
      name: "Hadozee",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/hadozee.html",
      image: "../images/hadozee.webp"
    },
    {
      name: "Half-Elves",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/halfElf.html",
      image: "../images/halfelf.png"
    },
    {
      name: "Halflings",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/halfling.html",
      image: "../images/halfling.png"
    },
    {
      name: "Half-Orcs",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/halfOrc.html",
      image: "../images/halfOrc.png"
    },
    {
      name: "Harengon",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/harengon.html",
      image: "../images/harengon.webp"
    },
    {
      name: "Hobgoblins",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/hobgoblin.html",
      image: "../images/hobgoblinRace.jpg"
    },
    {
      name: "Humans",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/human.html",
      image: "../images/human.png"
    },
    {
      name: "Kenku",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/kenku.html",
      image: "../images/kenku.webp"
    },
    {
      name: "Kobold",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/kobold.html",
      image: "../images/koboldRace.webp"
    },
    {
      name: "Lizardfolk",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/lizardfolk.html",
      image: "../images/lizardfolk.webp"
    },
    {
      name: "Minotaurs",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/minotaur.html",
      image: "../images/minotaurRace.png"
    },
    {
      name: "Orcs",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/orc.html",
      image: "../images/orcRace.webp"
    },
    {
      name: "Owlin",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/owlin.html",
      image: "../images/owlin.jpg"
    },
    {
      name: "Plasmoids",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/plasmoid.html",
      image: "../images/plasmoid.webp"
    },
    {
      name: "Satyrs",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/satyr.html",
      image: "../images/satyr.png"
    },
    {
      name: "Sea Elves",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/seaElf.html",
      image: "../images/seaElf.png"
    },
    {
      name: "Shadar-kai",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/shadarkai.html",
      image: "../images/Shadarkai.webp"
    },
    {
      name: "Shifters",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/shifter.html",
      image: "../images/shifter.webp"
    },
    {
      name: "Tabaxi",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/tabaxi.html",
      image: "../images/tabaxi.webp"
    },
    {
      name: "Thri-kreen",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/thrikreen.html",
      image: "../images/thrikreen.webp"
    },
    {
      name: "Tieflings",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/tiefling.html",
      image: "../images/tiefling.png"
    },
    {
      name: "Tortles",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/tortle.html",
      image: "../images/tortle.webp"
    },
    {
      name: "Tritons",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/triton.html",
      image: "../images/triton.webp"
    },
    {
      name: "Yuan-Ti",
      link: "https://chaidgpt.github.io/TheBardicLexicon/playerResources/racePages/yuanti.html",
      image: "../images/yuanti.webp"
    },
  ];

  const encounters = [
    {
      name: "a Falling Objects",
      description: "You hear yelling from above you. Suddenly, various objects rain down, shattering on impact."
    },
    {
      name: "a Mysterious Figure",
      description: "A cloaked figure approaches, handing you a cryptic message before disappearing into the surroundings."
    },
    {
      name: "a Lost Creature",
      description: "You come across a distressed creature in need of help. Its owner is nowhere to be found."
    },
    {
      name: "a Makeshift Market",
      description: "In a clearing, creatures have set up a makeshift market, selling peculiar and rare items."
    },
    {
      name: "an Enchanted Pool",
      description: "A hidden pool in the wilderness. What will happen if you drink from it?."
    },
    {
      name: "a Dancing Lights",
      description: "Mysterious lights lead you off the path to a hidden area with strange flora and fauna."
    },
    {
      name: "a Talking Statue",
      description: "A statue suddenly comes to life, imparting ancient wisdom, or posing a riddle, or talking nonsense before freezing again."
    },
    {
      name: "a Thunderstorm Shelter",
      description: "A sudden thunderstorm forces you to seek shelter. Lightning reveals a hidden cave entrance nearby."
    },
    {
      name: "a Wandering Performer",
      description: "A traveling entertainer offers to perform a tale of your adventures for a small fee."
    },
    {
      name: "a Mirror Portal",
      description: "A magical mirror reflects a different location. Stepping through transports you to that place momentarily."
    },
    {
      name: "Giant Footprints",
      description: "Enormous footprints lead into the wilderness. What could have made them?"
    },
    {
      name: "a Haunted Well",
      description: "A well in the area is said to be haunted, with unsettling visions for those who peer inside."
    },
    {
      name: "a Doppelganger's Encounter",
      description: "You spot someone who looks exactly like one of the party members. They claim not to know you."
    },
    {
      name: "a Cursed Coin",
      description: "A cursed coin is found on the ground, bringing both fortune and misfortune to whoever possesses it."
    },
    {
      name: "a Spectral Musician",
      description: "A ghostly musician plays a haunting melody. Those who listen too long risk being drawn into the ethereal realm."
    },
    {
      name: "a Trapped Faerie",
      description: "A faerie is caught in a magical trap. Freeing it earns you the gratitude of the Fey, who may aid you in the future."
    },
    {
      name: "a Glowing Cave",
      description: "A cave is filled with bioluminescent mushrooms. Harvesting them may have magical effects or attract curious creatures."
    },
    {
      name: "a Cursed Reflection",
      description: "An abandoned mirror reflects a distorted version of reality. Gazing too long may have strange consequences."
    },
    {
      name: "a Friendly Mimic",
      description: "You encounter a mimic that, instead of attacking, offers useful information or assistance in exchange for food."
    },
    {
      name: "a Time-Shifted Location",
      description: "You stumble upon a location seemingly stuck in a time loop, each area revealing a different point in history."
    },
    {
      name: "Whispering Trees",
      description: "The trees in a dense forest seem to whisper secrets. Listening carefully might reveal valuable information."
    },
    {
      name: "Blinking Creatures",
      description: "Creatures with the ability to blink in and out of existence appear, acting with confusion or hostility."
    },
    {
      name: "a Talisman Vendor",
      description: "A charismatic vendor offers enchanted talismans. The effects vary, and some may have unintended consequences."
    },
    {
      name: "a Rogue Fey Circle",
      description: "A faerie ring appears in the moonlight. Stepping inside transports you to a different location in the world."
    },
    {
      name: "an Oracle's Vision",
      description: "An oracle appears, providing a cryptic vision about the party's future. Deciphering it may lead to crucial insights."
    },
    {
      name: "a Diplomatic Ambush",
      description: "A group of creatures approaches, seeking an alliance against a common foe. Their sincerity is questionable."
    },
    {
      name: "a Spider-Infested Area",
      description: "You stumble upon an area infested with giant spiders. Exploring may reveal valuable silk or the presence of a deadly arachnid."
    },
    {
      name: "a Cursed Painting",
      description: "An eerie painting here location seems cursed. Gazing at it transports you to a nightmarish realm for a brief moment."
    },
    {
      name: "Wandering Wizards",
      description: "Two wizards engage in a magical duel nearby. The party may choose to intervene or watch the spectacle unfold."
    },
    {
      name: "a Feywild Glimpse",
      description: "A portal to the Feywild briefly opens, allowing glimpses of vibrant landscapes and playful fey creatures."
    },
    {
      name: "a Bardic Challenge",
      description: "A local bard challenges the party to a contest of skill. Winning earns admiration, while losing may result in jests."
    },
    {
      name: "Cursed Caverns",
      description: "A network of caverns is cursed, causing strange phenomena. Navigating them may lead to hidden treasures or peril."
    },
    {
      name: "a Temporal Freeze",
      description: "Time freezes momentarily. Exploring during this frozen moment may reveal secrets or present unique challenges."
    },
    {
      name: "an Oracle's Garden",
      description: "A secluded garden is tended by an oracle. Eating the fruits there provides visions of possible futures."
    },
    {
      name: "Enchanted Wildlife",
      description: "You encounter a group of animals exhibiting magical traits. Interacting with them may lead to unexpected outcomes."
    },
    {
      name: "a Goblin Ambush",
      description: "Goblins set up an ambush, hoping to loot unsuspecting travelers. The party must navigate or confront the threat."
    },
    {
      name: "a Moonlit Ritual",
      description: "You chance upon a group performing a mysterious moonlit ritual. Observing or interrupting could have consequences."
    },
    {
      name: "a Ghostly Guide",
      description: "A benevolent ghost offers guidance, leading the party to a hidden location or providing useful information."
    },
    {
      name: "Shifting Shadows",
      description: "Strange shadows move independently, hinting at a magical disturbance or the presence of otherworldly entities."
    },
    {
      name: "a Curious Book",
      description: "An old book that seems to have been dropped is found. What could be written inside?"
    },
    {
      name: "Strange Footprints",
      description: "A set of strange footprints leads away from where you are. What made them, and should you follow?"
    },
    {
      name: "a Curious Set of Dice",
      description: "You come across an unattended set of dice. What would happen if you roll them?"
    },
    {
      name: "a Pile of Dismembered Limbs",
      description: "You find a pile of all manor of limbs. out of the corner of your eye it looks like they might be moving."
    },
    {
      name: "an Old Tombstone",
      description: "A tombstone stands alone, covered in moss and vines."
    },
    {
      name: "a Magical Bag",
      description: "You find a clearly magical bag that has been left unattended. What could be inside?"
    },
    {
      name: "an Exceptional Child",
      description: "A child approaches. They seem to have the answers to all your questions, but how?"
    },
  ];  
  
  //   End Settlement Arrays

  // Start Template Arrays

  const template = [
    {
      name: "T1111",
      link: "https://example.com/",
    },
    {
      name: "T2222",
      link: "https://example.com/",
    },
    {
      name: "T3333",
      link: "https://example.com/",
    },
    {
      name: "T4444",
      link: "https://example.com/",
    },
    {
      name: "T5555",
      link: "https://example.com/",
    },
    {
      name: "T6666",
      link: "https://example.com/",
    },
    {
      name: "T7777",
      link: "https://example.com/",
    },
    {
      name: "T8888",
      link: "https://example.com/",
    },
  ];

  const templatePOI = [
    {
      name: "t1111",
      link: "https://example.com/",
    },
    {
      name: "t2222",
      link: "https://example.com/",
    },
    {
      name: "t3333",
      link: "https://example.com/",
    },
    {
      name: "t4444",
      link: "https://example.com/",
    },
    {
      name: "t5555",
      link: "https://example.com/",
    },
    {
      name: "t6666",
      link: "https://example.com/",
    },
    {
      name: "t7777",
      link: "https://example.com/",
    },
    {
      name: "t8888",
      link: "https://example.com/",
    },
  ];

  // End Template Arrays

  // End World Generator Arrays

  function getRandomElements(array, count) {
    const shuffledArray = array.slice().sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, count);
  }

  worldForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const settlementsCountInput = document.getElementById("settlements");
    let settlementsCount;
  
    if (settlementsCountInput.value === "random") {
      settlementsCount = Math.floor(Math.random() * 10) + 1;
    } else {
      settlementsCount = parseInt(settlementsCountInput.value);
    }
  
    const settlementPOICountInput = document.getElementById("settlementPOI");
    let settlementPOICount;
  
    if (settlementPOICountInput.value === "random") {
      settlementPOICount = "random";
    } else {
      settlementPOICount = parseInt(settlementPOICountInput.value);
    }
  
    const racesCountInput = document.getElementById("races");
    let racesCount;
  
    if (racesCountInput.value === "random") {
      racesCount = "random";
    } else {
      racesCount = parseInt(racesCountInput.value);
    }

    // Encounters
    const encountersCountInput = document.getElementById("encounters");
    let encountersCount;
  
    if (encountersCountInput.value === "random") {
      const randomEncountersCount = Math.floor((Math.random() * 4) + 1);
      selectedEncountersForSettlement = getRandomElements(encounters, randomEncountersCount);
    } else {
      selectedEncountersForSettlement = getRandomElements(encounters, encountersCount);
    }    
  // ----------

    const selectedSettlements = getRandomElements(settlements, settlementsCount);
  
    let content = ``;
  
    if (settlementsCount > 0) {
      content += ``;
  
      for (let i = 0; i < settlementsCount; i++) {
        const selectedSettlement = selectedSettlements[i];
  
        let settlementPOICountForSettlement;
        if (settlementPOICount === "random") {
          settlementPOICountForSettlement = Math.floor((Math.random() * 3) + 1);
        } else {
          settlementPOICountForSettlement = settlementPOICount;
        }
  
        const selectedSettlementPOI = getRandomElements(
          settlementPOI,
          settlementPOICountForSettlement
        );
  
        let selectedRacesForSettlement;
        if (racesCount === "random") {
          const randomRacesCount = Math.floor((Math.random() * 4) + 1)
          selectedRacesForSettlement = getRandomElements(races, randomRacesCount);
        } else {
          selectedRacesForSettlement = getRandomElements(races, racesCount);
        }

       // Encounters
let encountersCountValue;

if (encountersCountInput.value === "random") {
  encountersCountValue = "random";
} else {
  encountersCountValue = parseInt(encountersCountInput.value);
}

let selectedEncountersForSettlement;

if (encountersCountValue === "random") {
  const randomEncountersCount = Math.floor((Math.random() * 5) + 1); // Adjusted to 5 encounters
  selectedEncountersForSettlement = getRandomElements(encounters, randomEncountersCount);
} else {
  selectedEncountersForSettlement = getRandomElements(encounters, encountersCountValue);
}

  
        content += `
    <div class="row">
      <div class="col-md-6">
        <h4 class="text-center" style="font-family: 'endor'";><strong>${selectedSettlement.name}</strong></h4>
        <p>${selectedSettlement.description}</p>
        <img src="${selectedSettlement.image}" alt="${settlements.name}" class="img-fluid shadow-sm" style="max-width: 100%; max-height: auto; margin-bottom: 10px; border-radius: 10px">
      </div>
      <div class="col-md-6">

        <div class="container">
          <h5><strong>Points of Interest:</strong></h5>
          <ul>`;

          content += selectedSettlementPOI
          .map((item) => `
            <li>
              <strong>${item.name}:</strong> ${item.description}
            </li>`)
          .join("");        

  content += `</ul>
        </div>

        <div class="container">
          <h5><strong>Inhabitants:</strong></h5>
          <ul>`;

  content += selectedRacesForSettlement
    .map((race) => `
    <li class="list-inline-item">
      <div>
        <a href="${race.link}" target="_blank">
          <img src="${race.image}" alt="${race.name}" class="img-thumbnail bestiary-figure" style="max-width: 70px; max-height: auto; margin-bottom: 5px;">
        </a>
        <p class="text-center">${race.name}</p>
      </div>
    </li>`)
    .join("");

  content += `</ul>
      </div>

      

      <div class="container">
      <h5><strong>The party sees...</strong></h5>
      <ul>`;

      content += selectedEncountersForSettlement
      .map((encounter) => `
        <li>
          <strong>${encounter.name}:</strong> ${encounter.description}
        </li>`)
      .join("");        

content += `</ul>
    </div>
    </div>
  </div>`;

  if (i < settlementsCount - 1) {
    // Add some margin between settlements
    content += `<div class="my-4"></div> <hr>`;
  }
}
  
      content += `</div>`;
      generatedContent.innerHTML = content;
    }
  });
});