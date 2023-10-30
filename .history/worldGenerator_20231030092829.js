document.addEventListener("DOMContentLoaded", function () {
  const worldForm = document.getElementById("worldForm");
  const generatedContent = document.getElementById("generatedContent");

  const climates = [
    {
        name: "Tropical Rainforest",
        imageSrc: "tropical_rainforest.jpg",
        caption: "A lush and vibrant rainforest teeming with life."
    },
    {
        name: "Arctic Tundra",
        imageSrc: "arctic_tundra.jpg",
        caption: "A vast expanse of frozen, barren terrain."
    },
    // Add more climates as needed
];

const settlements = [
    {
        name: "Small Town",
        imageSrc: "small_town.jpg",
        caption: "A quaint small town nestled in the countryside."
    },
    {
        name: "Major City",
        imageSrc: "major_city.jpg",
        caption: "A bustling metropolis filled with people and opportunities."
    },
    // Add more types of settlements as needed
];

const ancients = [
    {
        name: "Ancient Ruins",
        imageSrc: "ancient_ruins.jpg",
        caption: "The remains of a once-great civilization."
    },
    {
        name: "Sunken Ruins",
        imageSrc: "sunken_ruins.jpg",
        caption: "Hidden beneath the waves, these ruins hold untold secrets."
    },
    // Add more ancient structures as needed
];

const physicalFeatures = [
    {
        name: "Deep Forest",
        imageSrc: "deep_forest.jpg",
        caption: "A dense and mysterious forest filled with ancient trees."
    },
    {
        name: "A Salt Lake",
        imageSrc: "salt_lake.jpg",
        caption: "A unique saltwater lake with high salinity levels."
    },
    // Add more physical features as needed
];

const inhabitants = [
    {
        name: "Dwarf",
        imageSrc: "dwarf.jpg",
        caption: "A stout and sturdy dwarf."
    },
    {
        name: "Elf",
        imageSrc: "elf.jpg",
        caption: "An elegant and graceful elf."
    },
    // Add more types of inhabitants as needed
];

  function getRandomElements(array, count) {
    const shuffledArray = array.slice().sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, count);
  }

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
        <div class="row">
            <div class="col-md-3">
                ${selectedSettlements.map(item => `
                    <figure class="figure">
                        <img src="${item.imageSrc}" class="figure-img img-fluid rounded" alt="${item.name}">
                        <figcaption class="figure-caption">${item.caption}</figcaption>
                    </figure>
                `).join('')}
            </div>
            <div class="col-md-3">
                ${selectedAncients.map(item => `
                    <figure class="figure">
                        <img src="${item.imageSrc}" class="figure-img img-fluid rounded" alt="${item.name}">
                        <figcaption class="figure-caption">${item.caption}</figcaption>
                    </figure>
                `).join('')}
            </div>
            <div class="col-md-3">
                ${selectedFeatures.map(item => `
                    <figure class="figure">
                        <img src="${item.imageSrc}" class="figure-img img-fluid rounded" alt="${item.name}">
                        <figcaption class="figure-caption">${item.caption}</figcaption>
                    </figure>
                `).join('')}
            </div>
            <div class="col-md-3">
                ${selectedInhabitants.map(item => `
                    <figure class="figure">
                        <img src="${item.imageSrc}" class="figure-img img-fluid rounded" alt="${item.name}">
                        <figcaption class="figure-caption">${item.caption}</figcaption>
                    </figure>
                `).join('')}
            </div>
        </div>
    `;
});
});
