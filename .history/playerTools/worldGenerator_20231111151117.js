document.addEventListener("DOMContentLoaded", function () {
  const worldForm = document.getElementById("worldForm");
  const generatedContent = document.getElementById("generatedContent");
  
  // Settlement Section Checkbox Functionality
  const enableSettlementsCheckbox =
    document.getElementById("enableSettlements");
  const settlementsSelect = document.getElementById("settlements");
  const settlementPOISelect = document.getElementById("settlementPOI");

  // Template Section Checkbox Functionality
  const enableTemplateCheckbox = document.getElementById("enableTemplate");
  const templateSelect = document.getElementById("template");
  const templatePOISelect = document.getElementById("templatePOI");



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
  const settlementsCount = parseInt(settlementsSelect.value);
  const settlementPOICount = parseInt(settlementPOISelect.value);

  const selectedSettlements = getRandomElements(settlements, settlementsCount);
  const selectedSettlementPOI = getRandomElements(settlementPOI, settlementPOICount);

  let content = `<h2>${worldName}</h2>`;

  if (settlementsCount > 0) {
      content += `<h5>Settlements</h5>`;
      for (let i = 0; i < settlementsCount; i++) {
          const selectedSettlement = getRandomElements(settlements, 1)[0];
          const selectedSettlementPOI = getRandomElements(
              settlementPOI,
              settlementPOISelect.value
          );

          content += `
              <ul>
                  <li>${selectedSettlement.name}
                      <ul>
                          ${selectedSettlementPOI
                              .map(
                                  (item) =>
                                      `<li><a href="${item.link}" target="_blank">${item.name}</a></li>`
                              )
                              .join("")}
                      </ul>
                  </li>
              </ul>
          `;
      }
  }

  // New template section content generation
const enableTemplate = enableTemplateCheckbox.checked;
if (enableTemplate) {
    const templateCount = parseInt(templateSelect.value);

    // Add logic to append template content to the generated content
    content += `<h5>Templates</h5>`;
    for (let i = 0; i < templateCount; i++) {
        const selectedTemplate = getRandomElements(template, 1)[0];
        const selectedTemplatePOI = getRandomElements(templatePOI, templatePOISelect.value);

        content += `
            <ul>
                <li>${selectedTemplate.name}
                    <ul>
                        ${selectedTemplatePOI
                            .map(
                                (item) =>
                                    `<li><a href="${item.link}" target="_blank">${item.name}</a></li>`
                            )
                            .join("")}
                    </ul>
                </li>
            </ul>
        `;
    }
}

  // Display the content
  generatedContent.innerHTML = content;

  // Display the Print buttons
  const printButton = document.getElementById("printButton");

  printButton.style.display = "block";
});

printButton.addEventListener("click", function () {
  // Format the content for printing
  const contentToPrint = `
            <html>
                <head>
                    <title>Print</title>
                    <style>
                        /* Add your custom styles here */
                        body {
                            font-family: 'Arial', sans-serif;
                            margin: 20px;
                        }
                        h1 {
                            color: #333;
                        }
                        /* Add more styles as needed */
                    </style>
                </head>
                <body>
                    <header>
                        <img src="../images/logo.png" alt="The Bardic Lexicon Logo" width="100" height="100">
                        <h1>Your Custom Header</h1>
                    </header>
                    ${generatedContent.innerHTML}
                </body>
            </html>
        `;

  // Create a new window for printing
  const printWindow = window.open("", "_blank");
  printWindow.document.write("<html><head><title>Print</title></head><body>");
  printWindow.document.write(contentToPrint);
  printWindow.document.write("</body></html>");

  // Trigger the print function
  printWindow.print();
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