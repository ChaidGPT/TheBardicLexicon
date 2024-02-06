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
      description: "This is a small and quaint town, known for its tight-knit community and simplicity.",
    },
    {
      name: "River Town",
      link: "https://example.com/river_town",
      description: "Situated along a winding river, this town thrives on water-based trade and fishing.",
    },
    {
      name: "Harbor Town",
      link: "https://example.com/harbor_town",
      description: "A bustling harbor town with a lively port, attracting sailors and traders from afar.",
    },
    {
      name: "Trade Outpost",
      link: "https://example.com/trade_outpost",
      description: "An isolated trade outpost strategically positioned for crossroads commerce.",
    },
    {
      name: "Mining Town",
      link: "https://example.com/mining_town",
      description: "Nestled in the mountains, this town thrives on mining and resource extraction.",
    },
    {
      name: "Fishing Village",
      link: "https://example.com/fishing_village",
      description: "A humble village focused on fishing, providing a serene coastal lifestyle.",
    },
    {
      name: "Forest Encampment",
      link: "https://example.com/forest_encampment",
      description: "Hidden in the heart of the forest, this settlement coexists with nature.",
    },
    {
      name: "Mage's Enclave",
      link: "https://example.com/mages_enclave",
      description: "A magical enclave where mages gather to study and harness arcane powers.",
    },
    {
      name: "Monastery",
      link: "https://example.com/monastery",
      description: "A peaceful monastery where monks practice ancient traditions and contemplation.",
    },
    {
      name: "Nomadic Camp",
      link: "https://example.com/nomadic_camp",
      description: "A mobile camp of nomads, moving across vast landscapes in search of resources.",
    },
    {
      name: "Dwarven Stronghold",
      link: "https://example.com/dwarven_stronghold",
      description: "Carved into the mountains, this stronghold is the epitome of dwarven craftsmanship.",
    },
    {
      name: "Elven Treetop Village",
      link: "https://example.com/elven_treetop_village",
      description: "An elevated village nestled in the trees, where elves live in harmony with nature.",
    },
    {
      name: "Goblin Market",
      link: "https://example.com/goblin_market",
      description: "A chaotic market run by goblins, offering a variety of unique and peculiar goods.",
    },
    {
      name: "Swamp Settlement",
      link: "https://example.com/swamp_settlement",
      description: "Built on stilts, this settlement thrives in the mysterious and challenging swamp environment.",
    },
    {
      name: "Orcish Encampment",
      link: "https://example.com/orcish_encampment",
      description: "An encampment where orcs gather, known for their martial prowess and strength.",
    },
    {
      name: "Magical Academy",
      link: "https://example.com/magical_academy",
      description: "A prestigious academy where aspiring wizards and sorcerers master the arcane arts.",
    },
    {
      name: "Haunted Hamlet",
      link: "https://example.com/haunted_hamlet",
      description: "A mysterious hamlet with a haunting past, rumored to be visited by otherworldly entities.",
    },
    {
      name: "Underground City",
      link: "https://example.com/underground_city",
      description: "Built beneath the surface, this city thrives in the subterranean realms.",
    },
    {
      name: "Coastal Citadel",
      link: "https://example.com/coastal_citadel",
      description: "A fortified citadel overlooking the coast, providing protection from maritime threats.",
    },
    {
      name: "Beastman Tribe Camp",
      link: "https://example.com/beastman_tribe_camp",
      description: "A camp where diverse beastman tribes convene, each with unique traditions and cultures.",
    },
    {
      name: "Celestial Outpost",
      link: "https://example.com/celestial_outpost",
      description: "An outpost aligned with celestial forces, serving as a beacon of divine influence.",
    },
    {
      name: "Arcane Refuge",
      link: "https://example.com/arcane_refuge",
      description: "A refuge for those seeking protection from magical threats, hidden from the mundane world.",
    },
    {
      name: "Desert Oasis",
      link: "https://example.com/desert_oasis",
      description: "An oasis in the midst of the desert, providing a vital water source and respite for travelers.",
    },
    {
      name: "Royal Capital",
      link: "https://example.com/royal_capital",
      description: "The majestic capital ruled by royalty, embodying grandeur and political significance.",
    },
    {
      name: "Mageocracy",
      link: "https://example.com/mageocracy",
      description: "A society governed by powerful mages, where magic influences every aspect of life.",
    },
    {
      name: "Merchant Metropolis",
      link: "https://example.com/merchant_metropolis",
      description: "A bustling metropolis known for its vibrant markets and flourishing trade.",
    },
    {
      name: "Demonic Citadel",
      link: "https://example.com/demonic_citadel",
      description: "A citadel tainted by demonic influence, harboring dark secrets and malevolent power.",
    },
    {
      name: "Dragon's Roost",
      link: "https://example.com/dragons_roost",
      description: "A roost inhabited by dragons, where these majestic creatures reign supreme.",
    },
    {
      name: "Floating City",
      link: "https://example.com/floating_city",
      description: "A city suspended in the sky, supported by magical forces and awe-inspiring architecture.",
    },
    {
      name: "Necropolis",
      link: "https://example.com/necropolis",
      description: "A city of the dead, where undead creatures roam and ancient tombs hold dark secrets.",
    },
    {
      name: "Archipelago Metropolis",
      link: "https://example.com/archipelago_metropolis",
      description: "A metropolis spread across a chain of islands, connected by maritime trade and travel.",
    },
    {
      name: "Giantkin Citadel",
      link: "https://example.com/giantkin_citadel",
      description: "A citadel inhabited by giantkin, where colossal beings shape the landscape to their will.",
    },
    {
      name: "Subterranean Metropolis",
      link: "https://example.com/subterranean_metropolis",
      description: "An underground metropolis with intricate tunnels and chambers, hidden from the surface world.",
    },
    {
      name: "Celestial City",
      link: "https://example.com/celestial_city",
      description: "A city touched by celestial forces, radiating divine energy and embodying purity.",
    },
    {
      name: "City of the Dead",
      link: "https://example.com/city_of_the_dead",
      description: "A city inhabited by undead beings, where the line between life and death blurs.",
    },
    {
      name: "Empyreal Bastion",
      link: "https://example.com/empyreal_bastion",
      description: "A bastion elevated to the heavens, symbolizing celestial protection and divine guardianship.",
    },
    {
      name: "Floating Gardens",
      link: "https://example.com/floating_gardens",
      description: "Gardens suspended in the air, adorned with vibrant flora and offering breathtaking views.",
    },
    {
      name: "Elemental Conflux",
      link: "https://example.com/elemental_conflux",
      description: "A conflux where elemental forces converge, shaping the landscape and influencing its inhabitants.",
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
              <p><strong>Settlement Type: &nbsp</strong>${selectedSettlement.name}</p>
              <p><strong>Description:</strong> ${selectedSettlement.description}</p>
              <p><strong>Points of Interest:</strong></p><ul>`;
  
        content += selectedSettlementPOI
          .map((item) => `<li>${item.name}</li>`)
          .join("");
  
        content += `</ul>
            </div>
            <div class="col-md-6">
              <br><br><p><strong>Races:</strong></p><ul>`;
  
        content += selectedRacesForSettlement
          .map((race) => `<li>${race.name}</li>`)
          .join("");
  
        content += `</ul>
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