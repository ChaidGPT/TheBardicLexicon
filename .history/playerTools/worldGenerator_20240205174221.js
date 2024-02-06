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

  // World Generator Arrays

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
      link: "https://example.com/aarakocra",
    },
    {
      name: "Aasimar",
      link: "https://example.com/aasimar",
    },
    {
      name: "Astral Elves",
      link: "https://example.com/astral-elves",
    },
    {
      name: "Autognomes",
      link: "https://example.com/autognomes",
    },
    {
      name: "Bugbears",
      link: "https://example.com/bugbears",
    },
    {
      name: "Cats",
      link: "https://example.com/cats",
    },
    {
      name: "Centaurs",
      link: "https://example.com/centaurs",
    },
    {
      name: "Changelings",
      link: "https://example.com/changelings",
    },
    {
      name: "Deep Gnomes",
      link: "https://example.com/deep-gnomes",
    },
    {
      name: "Dogs",
      link: "https://example.com/dogs",
    },
    {
      name: "Dragonborn",
      link: "https://example.com/dragonborn",
    },
    {
      name: "Duergar",
      link: "https://example.com/duergar",
    },
    {
      name: "Dwarves",
      link: "https://example.com/dwarves",
    },
    {
      name: "Eladrin",
      link: "https://example.com/eladrin",
    },
    {
      name: "Elves",
      link: "https://example.com/elves",
    },
    {
      name: "Firbolgs",
      link: "https://example.com/firbolgs",
    },
    {
      name: "Air Genasi",
      link: "https://example.com/air-genasi",
    },
    {
      name: "Earth Genasi",
      link: "https://example.com/earth-genasi",
    },
    {
      name: "Fire Genasi",
      link: "https://example.com/fire-genasi",
    },
    {
      name: "Water Genasi",
      link: "https://example.com/water-genasi",
    },
    {
      name: "Giff",
      link: "https://example.com/giff",
    },
    {
      name: "Githyanki",
      link: "https://example.com/githyanki",
    },
    {
      name: "Githzerai",
      link: "https://example.com/githzerai",
    },
    {
      name: "Gnomes",
      link: "https://example.com/gnomes",
    },
    {
      name: "Goblins",
      link: "https://example.com/goblins",
    },
    {
      name: "Goliaths",
      link: "https://example.com/goliaths",
    },
    {
      name: "Hadozee",
      link: "https://example.com/hadozee",
    },
    {
      name: "Half-Elves",
      link: "https://example.com/half-elves",
    },
    {
      name: "Half-Orcs",
      link: "https://example.com/half-orcs",
    },
    {
      name: "Harengon",
      link: "https://example.com/harengon",
    },
    {
      name: "Hobgoblins",
      link: "https://example.com/hobgoblins",
    },
    {
      name: "Humans",
      link: "https://example.com/humans",
    },
    {
      name: "Kenku",
      link: "https://example.com/kenku",
    },
    {
      name: "Kobold",
      link: "https://example.com/kobold",
    },
    {
      name: "Lizardfolk",
      link: "https://example.com/lizardfolk",
    },
    {
      name: "Dwarves",
      link: "https://example.com/dwarves",
    },
    {
      name: "Minotaurs",
      link: "https://example.com/minotaurs",
    },
    {
      name: "Orcs",
      link: "https://example.com/orcs",
    },
    {
      name: "Owlin",
      link: "https://example.com/owlin",
    },
    {
      name: "Satyrs",
      link: "https://example.com/satyrs",
    },
    {
      name: "Sea Elves",
      link: "https://example.com/sea-elves",
    },
    {
      name: "Shadar-kai",
      link: "https://example.com/shadar-kai",
    },
    {
      name: "Shifters",
      link: "https://example.com/shifters",
    },
    {
      name: "Tabaxi",
      link: "https://example.com/tabaxi",
    },
    {
      name: "Thri-kreen",
      link: "https://example.com/thri-kreen",
    },
    {
      name: "Tieflings",
      link: "https://example.com/tieflings",
    },
    {
      name: "Tortles",
      link: "https://example.com/tortles",
    },
    {
      name: "Tritons",
      link: "https://example.com/tritons",
    },
    {
      name: "Yuan-Ti",
      link: "https://example.com/yuan-ti",
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
      settlementsCount = Math.floor(Math.random() * 5) + 1;
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
          settlementPOICountForSettlement = Math.floor(Math.random() * 5) + 1;
        } else {
          settlementPOICountForSettlement = settlementPOICount;
        }
  
        const selectedSettlementPOI = getRandomElements(
          settlementPOI,
          settlementPOICountForSettlement
        );
  
        let selectedRacesForSettlement;
        if (racesCount === "random") {
          const randomRacesCount = Math.floor(Math.random() * 5) + 1;
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
    .map((race) => `<li>${race.name}</li>`)
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
  
      const printButton = document.getElementById("printButton");
      printButton.style.display = "block";
    }
  });
});