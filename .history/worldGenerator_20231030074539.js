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

    function getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    worldForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the default form submission behavior

        const worldName = document.getElementById('worldName').value;
        const randomClimate = getRandomElement(climates);
        const randomSettlement = getRandomElement(settlements);
        const randomAncient = getRandomElement(ancients);
        const randomPhysicalFeature = getRandomElement(physicalFeatures);
        const randomInhabitant = getRandomElement(inhabitants);

        generatedContent.innerHTML = `
            <h2>${worldName}</h2>
            <p><strong>Climate:</strong> ${randomClimate}</p>
            <h3>Features:</h3>
            <ul>
                <li>Settlements: ${randomSettlement}</li>
                <li>Ancients: ${randomAncient}</li>
                <li>Physical Features: ${randomPhysicalFeature}</li>
            </ul>
            <p><strong>Inhabitants:</strong> ${randomInhabitant}</p>
        `;
    });
});