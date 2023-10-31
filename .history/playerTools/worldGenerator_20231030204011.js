document.addEventListener("DOMContentLoaded", function () {
    const worldForm = document.getElementById("worldForm");
    const generatedContent = document.getElementById("generatedContent");
    const enableSettlementsCheckbox = document.getElementById("enableSettlements");
    const settlementsSelect = document.getElementById("settlements");
    const settlementPOISelect = document.getElementById("settlementPOI");

    const climates = [
        {
            name: "Tropical Rainforest",
            link: "https://example.com/tropical_rainforest",
        },
        // Add more climate objects as needed
    ];

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
            link: "https://example.com/small_town",
        },
        {
            name: "Temple to the Gods",
            link: "https://example.com/small_town",
        },
        {
            name: "Large sewer system",
            link: "https://example.com/small_town",
        },
        // Add more settlementPOI objects as needed
    ];

    const ancients = [
        {
            name: "Ancient Ruins",
            link: "https://example.com/ancient_ruins",
        },
        {
            name: "Sunken Ruins",
            link: "https://example.com/ancient_ruins",
        },
        {
            name: "Ancient Castle",
            link: "https://example.com/ancient_ruins",
        },
        // Add more ancient structure objects as needed
    ];

    const physicalFeatures = [
        {
            name: "Deep Forest",
            link: "https://example.com/deep_forest",
        },
        {
            name: "Tall Mountain Range",
            link: "https://example.com/deep_forest",
        },
        {
            name: "Tundra",
            link: "https://example.com/deep_forest",
        },
        // Add more physical feature objects as needed
    ];

    const inhabitants = [
        {
            name: "Elf",
            link: "../playerResources/racePages/elf.html",
        },
        {
            name: "Dwarf",
            link: "../playerResources/racePages/dwarf.html",
        },
        {
            name: "Human",
            link: "../playerResources/racePages/human.html",
        },
        // Add more inhabitant objects as needed
    ];

    function getRandomElements(array, count) {
        const shuffledArray = array.slice().sort(() => 0.5 - Math.random());
        return shuffledArray.slice(0, count);
    }

    worldForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const worldName = document.getElementById("worldName").value;
        const settlementsCount = parseInt(settlementsSelect.value);
        const settlementPOICount = parseInt(settlementPOISelect.value);
        // const ancientsCount = parseInt(document.getElementById("ancients").value);
        // const featuresCount = parseInt(document.getElementById("features").value);
        // const inhabitantsCount = parseInt(document.getElementById("inhabitants").value);

        const selectedSettlements = getRandomElements(settlements, settlementsCount);
        const selectedSettlementPOI = getRandomElements(settlementPOI, settlementPOICount);
        // const selectedAncients = getRandomElements(ancients, ancientsCount);
        // const selectedFeatures = getRandomElements(physicalFeatures, featuresCount);
        // const selectedInhabitants = getRandomElements(inhabitants, inhabitantsCount);

        let content = `<h2>${worldName}</h2>`;

        content += `<h5>Settlements</h5>`;
        selectedSettlements.forEach(settlement => {
            content += `
                <ul>
                    <li>${settlement.name}
                        <ul>
                            ${selectedSettlementPOI.map(item => `<li><a href="${item.link}" target="_blank">${item.name}</a></li>`).join("")}
                        </ul>
                    </li>
                </ul>
            `;
        });

        // content += `
        //     <div>
        //         <h4>Ancient Structures:</h4>
        //         <ul>
        //             ${selectedAncients.map(item => `<li><a href="${item.link}" target="_blank">${item.name}</a></li>`).join("")}
        //         </ul>
        //     </div>
        //     <div>
        //         <h5>Physical Features:</h5>
        //         <ul>
        //             ${selectedFeatures.map(item => `<li><a href="${item.link}" target="_blank">${item.name}</a></li>`).join("")}
        //         </ul>
        //     </div>
        //     <div>
        //         <h5>Inhabitants:</h5>
        //         <ul>
        //             ${selectedInhabitants.map(item => `<li><a href="${item.link}" target="_blank">${item.name}</a></li>`).join("")}
        //         </ul>
        //     </div>
        // `;

        generatedContent.innerHTML = content;
    });

    enableSettlementsCheckbox.addEventListener("change", function () {
        settlementsSelect.disabled = !this.checked;
        settlementPOISelect.disabled = !this.checked;
    });
});