const plantList = [
    { name: "Kōwhai", light: "full-sun", soil: "loamy", moisture: "moderate", size: 3 },
    { name: "Pōhutukawa", light: "full-sun", soil: "sandy", moisture: "dry", size: 8 },
    { name: "Harakeke (Flax)", light: "partial-shade", soil: "loamy", moisture: "wet", size: 6 },
    { name: "Mānuka", light: "full-sun", soil: "sandy", moisture: "dry", size: 2 },
    { name: "Puka", light: "partial-shade", soil: "clay", moisture: "moderate", size: 5 },
  ];

  const form = document.getElementById('plant-picker-form');
  const resultsContainer = document.getElementById('plant-results');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    const light = form.light.value;
    const soil = form.soil.value;
    const moisture = form.moisture.value;
    const minSize = parseInt(form.minSize.value) || 0; // Default to 0 if empty
    const maxSize = parseInt(form.maxSize.value) || Infinity; // Default to Infinity if empty

    // Filter the plant list based on the selected criteria
    const matchingPlants = plantList.filter(plant =>
        (light === 'any' || plant.light === light) &&
        (soil === 'any' || plant.soil === soil) &&
        (moisture === 'any' || plant.moisture === moisture) &&
        plant.size >= minSize &&
        plant.size <= maxSize
      );

    // Display the matching plants
    resultsContainer.innerHTML = '';
    if (matchingPlants.length > 0) {
      matchingPlants.forEach(plant => {
        const li = document.createElement('li');
        li.textContent = plant.name;
        resultsContainer.appendChild(li);
      });
    } else {
      resultsContainer.innerHTML = '<li>No matching plants found.</li>';
    }
  });