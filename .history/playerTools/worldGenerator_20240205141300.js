document.addEventListener("DOMContentLoaded", function () {
  const worldForm = document.getElementById("worldForm");
  const generatedContent = document.getElementById("generatedContent");

  // Settlement Section Checkbox Functionality
  const enableSettlementsCheckbox = document.getElementById("enableSettlements");
  const settlementsSelect = document.getElementById("settlements");
  const settlementPOISelect = document.getElementById("settlementPOI");

  // Template Section Checkbox Functionality
  const enableTemplateCheckbox = document.getElementById("enableTemplate");
  const templateSelect = document.getElementById("template");
  const templatePOISelect = document.getElementById("templatePOI");

  // Races Section Functionality
  const racesSelect = document.getElementById("races");

  // Enable/disable races options based on checkbox state
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
    },
    {
      name: "River Town",
      link: "https://example.com/river_town",
    },
    {
      name: "Harbor Town",
      link: "https://example.com/harbor_town",
    },
    {
      name: "Trade Outpost",
      link: "https://example.com/trade_outpost",
    },
    {
      name: "Mining Town",
      link: "https://example.com/mining_town",
    },
    {
      name: "Fishing Village",
      link: "https://example.com/fishing_village",
    },
    {
      name: "Forest Encampment",
      link: "https://example.com/forest_encampment",
    },
    {
      name: "Mage's Enclave",
      link: "https://example.com/mages_enclave",
    },
    {
      name: "Monastery",
      link: "https://example.com/monastery",
    },
    {
      name: "Nomadic Camp",
      link: "https://example.com/nomadic_camp",
    },
    {
      name: "Dwarven Stronghold",
      link: "https://example.com/dwarven_stronghold",
    },
    {
      name: "Elven Treetop Village",
      link: "https://example.com/elven_treetop_village",
    },
    {
      name: "Goblin Market",
      link: "https://example.com/goblin_market",
    },
    {
      name: "Swamp Settlement",
      link: "https://example.com/swamp_settlement",
    },
    {
      name: "Orcish Encampment",
      link: "https://example.com/orcish_encampment",
    },
    {
      name: "Magical Academy",
      link: "https://example.com/magical_academy",
    },
    {
      name: "Haunted Hamlet",
      link: "https://example.com/haunted_hamlet",
    },
    {
      name: "Underground City",
      link: "https://example.com/underground_city",
    },
    {
      name: "Coastal Citadel",
      link: "https://example.com/coastal_citadel",
    },
    {
      name: "Beastman Tribe Camp",
      link: "https://example.com/beastman_tribe_camp",
    },
    {
      name: "Celestial Outpost",
      link: "https://example.com/celestial_outpost",
    },
    {
      name: "Arcane Refuge",
      link: "https://example.com/arcane_refuge",
    },
    {
      name: "Desert Oasis",
      link: "https://example.com/desert_oasis",
    },
    {
      name: "Royal Capital",
      link: "https://example.com/royal_capital",
    },
    {
      name: "Mageocracy",
      link: "https://example.com/mageocracy",
    },
    {
      name: "Merchant Metropolis",
      link: "https://example.com/merchant_metropolis",
    },
    {
      name: "Demonic Citadel",
      link: "https://example.com/demonic_citadel",
    },
    {
      name: "Dragon's Roost",
      link: "https://example.com/dragons_roost",
    },
    {
      name: "Floating City",
      link: "https://example.com/floating_city",
    },
    {
      name: "Necropolis",
      link: "https://example.com/necropolis",
    },
    {
      name: "Archipelago Metropolis",
      link: "https://example.com/archipelago_metropolis",
    },
    {
      name: "Giantkin Citadel",
      link: "https://example.com/giantkin_citadel",
    },
    {
      name: "Subterranean Metropolis",
      link: "https://example.com/subterranean_metropolis",
    },
    {
      name: "Celestial City",
      link: "https://example.com/celestial_city",
    },
    {
      name: "City of the Dead",
      link: "https://example.com/city_of_the_dead",
    },
    {
      name: "Empyreal Bastion",
      link: "https://example.com/empyreal_bastion",
    },
    {
      name: "Floating Gardens",
      link: "https://example.com/floating_gardens",
    },
    {
      name: "Elemental Conflux",
      link: "https://example.com/elemental_conflux",
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
      name: "Human",
      link: "https://example.com/human",
    },
    {
      name: "Elf",
      link: "https://example.com/elf",
    },
    {
      name: "Dwarf",
      link: "https://example.com/dwarf",
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

    const selectedRaces = getRandomElements(races, racesCount);
    const selectedSettlements = getRandomElements(settlements, settlementsCount);

    let content = `<h2>${worldName}</h2>`;

    if (settlementsCount > 0) {
      content += `<div class="container">`; // Bootstrap container for styling

      for (let i = 0; i < settlementsCount; i++) {
        const selectedSettlement = getRandomElements(settlements, 1)[0];

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

        // Add races for each settlement
        const selectedRacesForSettlement =
          racesCount !== "random" ? getRandomElements(races, racesCount) : getRandomElements(races, 1);

        content += `
          <div class="row">
            <div class="col-md-6">
              <p><strong>Settlement:</strong> ${selectedSettlement.name}</p>
            </div>
            <div class="col-md-6">`;

        if (selectedSettlementPOI.length > 0) {
          content += `<p><strong>Points of Interest:</strong></p><ul>`;
          content += selectedSettlementPOI
            .map((item) => `<li>${item.name}</li>`)
            .join("");
          content += `</ul>`;
        }

        if (selectedRacesForSettlement.length > 0) {
          content += `<p><strong>Races:</strong></p><ul>`;
          content += selectedRacesForSettlement
            .map((race) => `<li>${race.name}</li>`)
            .join("");
          content += `</ul>`;
        }

        content += `</div></div>`;
      }

      content += `</div>`;
      generatedContent.innerHTML = content;

      const printButton = document.getElementById("printButton");
      printButton.style.display = "block";
    }
  });

  const printButton = document.getElementById("printButton");
  printButton.addEventListener("click", function () {
    // ... (existing code)
  });

  // Enable/disable settlement options based on checkbox state
  enableTemplateCheckbox.addEventListener("change", function () {
    templateSelect.disabled = !this.checked;
    templatePOISelect.disabled = !this.checked;
  });

  // Enable/disable template options based on checkbox state
  enableSettlementsCheckbox.addEventListener("change", function () {
    settlementsSelect.disabled = !this.checked;
    settlementPOISelect.disabled = !this.checked;
  });
});