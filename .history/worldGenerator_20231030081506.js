document.addEventListener('DOMContentLoaded', function () {
    const worldForm = document.getElementById('worldForm');
    const generatedContent = document.getElementById('generatedContent');

    const climates = [
        "Temperate with magical anomalies",
        "Harsh desert with scorching temperatures",
        "Cold and foggy, with steep, rugged terrain",
        "Underwater, bioluminescent depths"
        // Add more climates as needed
    ];

    const settlements = [
        "Small Town",
        "Major City",
        "Harbor Town",
        "Village",
        "Outpost"
        // Add more types of settlements as needed
    ];

    const ancients = [
        "Ancient Ruins",
        "Sunken Ruins",
        "Buried Ruins",
        "Ancient Castle"
        // Add more ancient structures as needed
    ];

    const physicalFeatures = [
        "Deep Forest",
        "A Salt Lake",
        "Estuary",
        "River used heavily for trade",
        "Mystical Glade",
        "Volcano",
        "Canyon"
        // Add more physical features as needed
    ];

    const inhabitants = [
        "Woodland creatures",
        "Druids",
        "Magical beings",
        "Nomadic tribes",
        "Desert creatures",
        "Dwarves",
        "Mountain creatures",
        "Merfolk",
        "Sea creatures",
        "Aquatic races"
        // Add more types of inhabitants as needed
    ];

    function getRandomElements(array, count) {
        const shuffledArray = array.slice().sort(() => 0.5 - Math.random());
        return shuffledArray.slice(0, count);
    }

    worldForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const worldName = document.getElementById('worldName').value;
        const settlementsCount = parseInt(document.getElementById('settlements').value);
        const ancientsCount = parseInt(document.getElementById('ancients').value);
        const featuresCount = parseInt(document.getElementById('features').value);
        const inhabitantsCount = parseInt(document.getElementById('inhabitants').value);

        const selectedSettlements = getRandomElements(settlements, settlementsCount);
        const selectedAncients = getRandomElements(ancients, ancientsCount);
        const selectedFeatures = getRandomElements(physicalFeatures, featuresCount);
        const selectedInhabitants = getRandomElements(inhabitants, inhabitantsCount);

        generatedContent.innerHTML = `
            <h2>${worldName}</h2>
            <h3>Selected Details:</h3>
            <ul>
                <li>Settlements: ${selectedSettlements.join(', ')}</li>
                <li>Ancient Structures: ${selectedAncients.join(', ')}</li>
                <li>Physical Features: ${selectedFeatures.join(', ')}</li>
                <li>Inhabitants: ${selectedInhabitants.join(', ')}</li>
            </ul>
        `;
    });
});