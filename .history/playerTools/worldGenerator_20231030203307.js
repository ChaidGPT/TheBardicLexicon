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
            name: "Harbor Town",
            link: "https://example.com/small_town",
        },
        {
            name: "River Town",
            link: "https://example.com/small_town",
        },
        // Add more settlement objects as needed
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