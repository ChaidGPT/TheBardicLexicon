document.addEventListener("DOMContentLoaded", function () {
  const worldForm = document.getElementById("worldForm");
  const generatedContent = document.getElementById("generatedContent");

  // Settlement Section Checkbox Functionality
  const enableSettlementsCheckbox = document.getElementById("enableSettlements");
  const settlementsSelect = document.getElementById("settlements");
  const settlementPOISelect = document.getElementById("settlementPOI");

  // Races Section Functionality
  const racesSelect = document.getElementById("races");

  enableSettlementsCheckbox.addEventListener("change", function () {
    settlementsSelect.disabled = !this.checked;
    settlementPOISelect.disabled = !this.checked;
    racesSelect.disabled = !this.checked;
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
      image: "../images/locations/smallTown.jpg",
    },
    {
      name: "Borderland Garrison",
      link: "https://example.com/borderland_garrison",
      description: "Defensive outpost strategically located at a border.",
      image: "../images/locations/smallTown.jpg",
    },
    {
      name: "Trade Hub",
      link: "https://example.com/trade_hub",
      description: "Bustling center of commerce for traders, merchants, and caravans.",
      image: "../images/locations/smallTown.jpg",
    },
    {
      name: "Outpost",
      link: "https://example.com/outpost",
      description: "A remote settlement, often serving as a military or exploratory outpost.",
      image: "../images/locations/smallTown.jpg",
    },
    {
      name: "Stronghold",
      link: "https://example.com/stronghold",
      description: "Well-fortified settlement known for its defenses and security.",
      image: "../images/locations/smallTown.jpg",
    },
    {
      name: "Fishing Village",
      link: "https://example.com/fishing_village",
      description: "Relies on fishing and coastal activities for sustenance.",
      image: "../images/locations/smallTown.jpg",
    },
    {
      name: "Market Town",
      link: "https://example.com/market_town",
      description: "Thriving center for trade and commerce, known for its markets.",
      image: "../images/locations/smallTown.jpg",
    },
    {
      name: "Arcane Refuge",
      link: "https://example.com/arcane_refuge",
      description: "A secluded place for magical study, often hidden from the world.",
      image: "../images/locations/smallTown.jpg",
    },
    {
      name: "Settler's Camp",
      link: "https://example.com/settlers_camp",
      description: "Temporary camp for settlers establishing new territories.",
      image: "../images/locations/smallTown.jpg",
    },
    {
      name: "Nomad's Oasis",
      link: "https://example.com/nomads_oasis",
      description: "Mobile oasis settlement for nomadic tribes in the desert.",
      image: "../images/locations/smallTown.jpg",
    },
    {
      name: "Skyward Retreat",
      link: "https://example.com/skyward_retreat",
      description: "Elevated settlement in the mountains or trees, offering panoramic views.",
      image: "../images/locations/smallTown.jpg",
    },
    {
      name: "Lakeside Haven",
      link: "https://example.com/lakeside_haven",
      description: "Tranquil settlement nestled by a picturesque lake.",
      image: "../images/locations/smallTown.jpg",
    },
    {
      name: "Refugee Camp",
      link: "https://example.com/refugee_camp",
      description: "Temporary shelter for refugees, often near conflict zones.",
      image: "../images/locations/smallTown.jpg",
    },
    {
      name: "Cavern Enclave",
      link: "https://example.com/cavern_enclave",
      description: "Settlement built within natural caverns, hidden from the surface.",
      image: "../images/locations/smallTown.jpg",
    },
    {
      name: "Sylvan Retreat",
      link: "https://example.com/sylvan_retreat",
      description: "Hidden settlement in the heart of a magical or enchanted forest.",
      image: "../images/locations/smallTown.jpg",
    },
    {
      name: "Pirate Cove",
      link: "https://example.com/pirate_cove",
      description: "Hidden harbor for pirates, smugglers, and sailors of ill repute.",
      image: "../images/locations/smallTown.jpg",
    },
    {
      name: "Watchtower Outpost",
      link: "https://example.com/watchtower_outpost",
      description: "Guarded outpost with a strategic watchtower for surveillance.",
      image: "../images/locations/smallTown.jpg",
    },
    {
      name: "Wayfarer's Rest",
      link: "https://example.com/wayfarers_rest",
      description: "Rest stop for travelers and adventurers journeying through the wilderness.",
      image: "../images/locations/smallTown.jpg",
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

  // Start World Generator Arrays

  function getRandomElements(array, count) {
    const shuffledArray = array.slice().sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, count);
  }

  worldForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const worldName = document.getElementById("worldName").value;
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
  
    const selectedSettlements = getRandomElements(settlements, settlementsCount);
  
    let content = `<h2>${worldName}</h2>`;
  
    if (settlementsCount > 0) {
      content += `<div class="container"><hr>`;
  
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
              <strong>${item.name}:</strong> ${item.description} <a href="${item.link}" target="_blank">(Learn more)</a>
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