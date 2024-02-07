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
      description: "Quaint town known for its tight-knit community."
    },
    {
      name: "River Town",
      link: "https://example.com/river_town",
      description: "Thrives on water-based trade and fishing."
    },
    {
      name: "Mining Outpost",
      link: "https://example.com/mining_outpost",
      description: "Settlement focused on mining and resource extraction."
    },
    {
      name: "Coastal Village",
      link: "https://example.com/coastal_village",
      description: "Relies on maritime activities and coastal trade."
    },
    {
      name: "Forest Hamlet",
      link: "https://example.com/forest_hamlet",
      description: "Hidden within a dense forest, in harmony with nature."
    },
    {
      name: "Mountain Stronghold",
      link: "https://example.com/mountain_stronghold",
      description: "Built into the mountainside for defense and resources."
    },
    {
      name: "Desert Oasis",
      link: "https://example.com/desert_oasis",
      description: "Vital stop in the desert for travelers and adventurers."
    },
    {
      name: "Swamp Village",
      link: "https://example.com/swamp_village",
      description: "Relies on the unique resources and challenges of the swamp."
    },
    {
      name: "Magical Enclave",
      link: "https://example.com/magical_enclave",
      description: "Hub for magical research, study, and the mystical arts."
    },
    {
      name: "Nomadic Camp",
      link: "https://example.com/nomadic_camp",
      description: "Mobile settlement of wandering tribes or travelers."
    },
    {
      name: "Underground City",
      link: "https://example.com/underground_city",
      description: "Thrives below the surface, away from the eyes above."
    },
    {
      name: "Floating Citadel",
      link: "https://example.com/floating_citadel",
      description: "A marvel in the sky or above water, feat. magical or technological engineering."
    },
    {
      name: "Beachside Resort",
      link: "https://example.com/beachside_resort",
      description: "Popular destination for relaxation and tourism."
    },
    {
      name: "Borderland Garrison",
      link: "https://example.com/borderland_garrison",
      description: "Defensive outpost strategically located at a border."
    },
    {
      name: "Trade Hub",
      link: "https://example.com/trade_hub",
      description: "Bustling center of commerce for traders, merchants, and caravans."
    },
    {
      name: "Outpost",
      link: "https://example.com/outpost",
      description: "A remote settlement, often serving as a military or exploratory outpost."
    },
    {
      name: "Stronghold",
      link: "https://example.com/stronghold",
      description: "Well-fortified settlement known for its defenses and security."
    },
    {
      name: "Fishing Village",
      link: "https://example.com/fishing_village",
      description: "Relies on fishing and coastal activities for sustenance."
    },
    {
      name: "Market Town",
      link: "https://example.com/market_town",
      description: "Thriving center for trade and commerce, known for its markets."
    },
    {
      name: "Arcane Refuge",
      link: "https://example.com/arcane_refuge",
      description: "A secluded place for magical study, often hidden from the world."
    },
    {
      name: "Settler's Camp",
      link: "https://example.com/settlers_camp",
      description: "Temporary camp for settlers establishing new territories."
    },
    {
      name: "Nomad's Oasis",
      link: "https://example.com/nomads_oasis",
      description: "Mobile oasis settlement for nomadic tribes in the desert."
    },
    {
      name: "Skyward Retreat",
      link: "https://example.com/skyward_retreat",
      description: "Elevated settlement in the mountains or trees, offering panoramic views."
    },
    {
      name: "Lakeside Haven",
      link: "https://example.com/lakeside_haven",
      description: "Tranquil settlement nestled by a picturesque lake."
    },
    {
      name: "Refugee Camp",
      link: "https://example.com/refugee_camp",
      description: "Temporary shelter for refugees, often near conflict zones."
    },
    {
      name: "Cavern Enclave",
      link: "https://example.com/cavern_enclave",
      description: "Settlement built within natural caverns, hidden from the surface."
    },
    {
      name: "Sylvan Retreat",
      link: "https://example.com/sylvan_retreat",
      description: "Hidden settlement in the heart of a magical or enchanted forest."
    },
    {
      name: "Pirate Cove",
      link: "https://example.com/pirate_cove",
      description: "Hidden harbor for pirates, smugglers, and sailors of ill repute."
    },
    {
      name: "Watchtower Outpost",
      link: "https://example.com/watchtower_outpost",
      description: "Guarded outpost with a strategic watchtower for surveillance."
    },
    {
      name: "Wayfarer's Rest",
      link: "https://example.com/wayfarers_rest",
      description: "Rest stop for travelers and adventurers journeying through the wilderness."
    },
  ];  

  const settlementPOI = [
    {
      name: "Pilgrimage site",
      link: "https://example.com/pilgrimage_site",
    },
    {
      name: "Temple to the Gods",
      link: "https://example.com/temple_to_the_gods",
    },
    {
      name: "Large sewer system",
      link: "https://example.com/large_sewer_system",
    },
    {
      name: "Mysterious Standing Stones",
      link: "https://example.com/mysterious_standing_stones",
    },
    {
      name: "Enchanted Garden",
      link: "https://example.com/enchanted_garden",
    },
    {
      name: "Arena of Champions",
      link: "https://example.com/arena_of_champions",
    },
    {
      name: "Mage's Library",
      link: "https://example.com/mages_library",
    },
    {
      name: "Haunted Manor",
      link: "https://example.com/haunted_manor",
    },
    {
      name: "Thieves' Guild Hideout",
      link: "https://example.com/thieves_guild_hideout",
    },
    {
      name: "Ancient Ruins",
      link: "https://example.com/ancient_ruins",
    },
    {
      name: "Goblin Market",
      link: "https://example.com/goblin_market",
    },
    {
      name: "Cursed Well",
      link: "https://example.com/cursed_well",
    },
    {
      name: "Wizard's Tower",
      link: "https://example.com/wizards_tower",
    },
    {
      name: "Beastmaster's Menagerie",
      link: "https://example.com/beastmasters_menagerie",
    },
    {
      name: "Enigmatic Obelisk",
      link: "https://example.com/enigmatic_obelisk",
    },
    {
      name: "Astral Observatory",
      link: "https://example.com/astral_observatory",
    },
    {
      name: "Underground Arena",
      link: "https://example.com/underground_arena",
    },
    {
      name: "Lighthouse of the Lost Souls",
      link: "https://example.com/lighthouse_of_the_lost_souls",
    },
    {
      name: "Mystical Hot Springs",
      link: "https://example.com/mystical_hot_springs",
    },
    {
      name: "World Renowned Bakery",
      link: "https://example.com/world_renowned_bakery",
    },
    {
      name: "Sorcerer's Market",
      link: "https://example.com/sorcerers_market",
    },
    {
      name: "The Whispering Grove",
      link: "https://example.com/whispering_grove",
    },
    {
      name: "Dragon's Hoard",
      link: "https://example.com/dragons_hoard",
    },
    {
      name: "Clockwork Workshop",
      link: "https://example.com/clockwork_workshop",
    },
    {
      name: "Feywild Portal",
      link: "https://example.com/feywild_portal",
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
          settlementPOICountForSettlement = Math.floor((Math.random() * 10) + 1);
        } else {
          settlementPOICountForSettlement = settlementPOICount;
        }
  
        const selectedSettlementPOI = getRandomElements(
          settlementPOI,
          settlementPOICountForSettlement
        );
  
        let selectedRacesForSettlement;
        if (racesCount === "random") {
          const randomRacesCount = Math.floor(Math.random() * 10);
          selectedRacesForSettlement = getRandomElements(races, randomRacesCount);
        } else {
          selectedRacesForSettlement = getRandomElements(races, racesCount);
        }
  
        content += `
    <div class="row">
      <div class="col-md-6">
        <h4><strong>${selectedSettlement.name}</strong></h4>
        <p>${selectedSettlement.description}</p>
      </div>
      <div class="col-md-6">
        <div class="container">
          <p><strong>Points of Interest:</strong></p>
          <ul>`;

  content += selectedSettlementPOI
    .map((item) => `<li>${item.name}</li>`)
    .join("");

  content += `</ul>
        </div>

        <div class="container">
          <p><strong>Inhabitants:</strong></p>
          <ul>`;

  content += selectedRacesForSettlement
    .map((race) => `
    <li class="list-inline-item">
      <div>
        <a href="${race.link}" target="_blank">
          <img src="${race.image}" alt="${race.name}" class="img-thumbnail" style="max-width: 70px; max-height: auto; margin-bottom: 5px;">
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