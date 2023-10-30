document.addEventListener("DOMContentLoaded", function () {
    const worldForm = document.getElementById("worldForm");
    const generatedContent = document.getElementById("generatedContent");

    const climates = [
        {
            name: "Tropical Rainforest",
            imageSrc: "tropical_rainforest.jpg",
            caption: "A lush and vibrant rainforest teeming with life."
        },
        // Add more climate objects as needed
    ];

    const settlements = [
        {
            name: "Small Town",
            imageSrc: "small_town.jpg",
            caption: "A quaint small town nestled in the countryside."
        },
        // Add more settlement objects as needed
    ];

    const ancients = [
        {
            name: "Ancient Ruins",
            imageSrc: "ancient_ruins.jpg",
            caption: "The remains of a once-great civilization."
        },
        // Add more ancient structure objects as needed
    ];

    const physicalFeatures = [
        {
            name: "Deep Forest",
            imageSrc: "deep_forest.jpg",
            caption: "A dense and mysterious forest filled with ancient trees."
        },
        // Add more physical feature objects as needed
    ];

    const inhabitants = [
        {
            name: "Dwarf",
            imageSrc: "dwarf.jpg",
            caption: "A stout and sturdy dwarf."
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
        const settlementsCount = parseInt(document.getElementById("settlements").value);
        const ancientsCount = parseInt(document.getElementById("ancients").value);
        const featuresCount = parseInt(document.getElementById("features").value);
        const inhabitantsCount = parseInt(document.getElementById("inhabitants").value);

        const selectedSettlements = getRandomElements(settlements, settlementsCount);
        const selectedAncients = getRandomElements(ancients, ancientsCount);
        const selectedFeatures = getRandomElements(physicalFeatures, featuresCount);
        const selectedInhabitants = getRandomElements(inhabitants, inhabitantsCount);

        generatedContent.innerHTML = `
            <h2>${worldName}</h2>
            <h3>Selected Details:</h3>
            <div>
                <h4>Settlements:</h4>
                <ul>
                    ${selectedSettlements.map(item => `<li>${item.name}</li>`).join("")}
                </ul>
            </div>
            <div>
                <h4>Ancient Structures:</h4>
                <ul>
                    ${selectedAncients.map(item => `<li>${item.name}</li>`).join("")}
                </ul>
            </div>
            <div>
                <h4>Physical Features:</h4>
                <ul>
                    ${selectedFeatures.map(item => `<li>${item.name}</li>`).join("")}
                </ul>
            </div>
            <div>
                <h4>Inhabitants:</h4>
                <ul>
                    ${selectedInhabitants.map(item => `<li>${item.name}</li>`).join("")}
                </ul>
            </div>
        `;
    });
});