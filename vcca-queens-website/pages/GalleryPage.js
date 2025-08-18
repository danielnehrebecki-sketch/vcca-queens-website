// src/pages/GalleryPage.js

// This function generates the static HTML structure for the Gallery page.
// We've added a container for a "Message Box" to display alerts.
export const renderGalleryPage = () => {
    return `
        <div class="container mx-auto px-4 py-12">
            
            <!-- Gallery Hero Section -->
            <section class="bg-gray-100 rounded-lg shadow-md p-8 mb-12 text-center">
                <h2 class="text-4xl font-bold text-chevy-gold font-lobster mb-4">Featured Car Gallery</h2>
                <p class="text-lg text-gray-800 max-w-3xl mx-auto">
                    Explore some of the stunning vintage Chevrolets from our club members. Vote for your favorite!
                </p>
            </section>

            <!-- Message Box for alerts -->
            <div id="message-box" class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-opacity duration-300 opacity-0 hidden">
                <div class="bg-club-maroon text-white p-6 rounded-lg shadow-2xl text-center">
                    <p class="text-lg font-bold" id="message-text">Message goes here.</p>
                </div>
            </div>

            <!-- Dynamic Gallery Grid -->
            <section id="gallery-grid">
                <h3 class="text-3xl font-bold text-club-maroon border-b-2 border-chevy-gold pb-2 mb-8">
                    Our Collection
                </h3>
                <div id="gallery-grid-container" class="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <!-- Gallery items will be dynamically injected here by JavaScript -->
                    <p>Loading gallery...</p>
                </div>
            </section>

        </div>
    `;
};

// This is the core function for the voting system.
const handleVote = (carId) => {
    // Show a temporary message box instead of an alert().
    const messageBox = document.getElementById('message-box');
    const messageText = document.getElementById('message-text');
    if (!messageBox || !messageText) {
        console.error("Message box elements not found. Cannot display vote confirmation.");
        return;
    }

    // Get the current votes from localStorage.
    let storedVotes = JSON.parse(localStorage.getItem('carVotes')) || {};

    // Get the current vote count for the specific car.
    let currentVotes = storedVotes[carId] || 0;
    
    // Increment the vote count.
    currentVotes++;
    storedVotes[carId] = currentVotes;

    // Save the updated votes back to localStorage.
    localStorage.setItem('carVotes', JSON.stringify(storedVotes));

    // Update the vote count on the page without reloading.
    const voteCountElement = document.getElementById(`votes-count-${carId}`);
    if (voteCountElement) {
        voteCountElement.textContent = `${currentVotes} Votes`;
    }

    // Display a confirmation message.
    messageText.textContent = `Voted for Car ID ${carId}! Total votes: ${currentVotes}`;
    messageBox.classList.remove('hidden');
    messageBox.classList.add('opacity-100');

    // Hide the message box after 3 seconds.
    setTimeout(() => {
        messageBox.classList.remove('opacity-100');
        messageBox.classList.add('opacity-0');
        setTimeout(() => {
            messageBox.classList.add('hidden');
        }, 300);
    }, 3000);
};


// This function fetches the data and populates the gallery with voting buttons.
export const populateGalleryPage = async () => {
    console.log('Populating gallery page...');
    try {
        const galleryContainer = document.getElementById('gallery-grid-container');
        if (!galleryContainer) {
            console.error("Gallery container not found. Aborting population.");
            return;
        }

        // Fetch the data from our static JSON file.
        const response = await fetch('/src/data/data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Get stored votes from localStorage, or use a default if none exist.
        const storedVotes = JSON.parse(localStorage.getItem('carVotes')) || {};
        
        // Clear any loading messages.
        galleryContainer.innerHTML = '';

        // Iterate through the featured cars and update vote counts from localStorage.
        const carsWithVotes = data.featuredCars.map(car => {
            const votesFromStorage = storedVotes[car.id] || 0;
            return { ...car, votes: votesFromStorage };
        });

        // Populate the gallery grid using the fetched data with updated vote counts.
        galleryContainer.innerHTML = carsWithVotes.map(car => `
            <div class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
                <img src="${car.image}" alt="${car.name}" loading="lazy" class="w-full h-48 object-cover" />
                
                <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                    <span class="text-white text-lg font-bold">${car.name}</span>
                    <span class="text-white text-sm font-light">Owned by: ${car.owner}</span>
                    <div class="mt-4 flex flex-col items-center">
                        <span class="text-white text-md font-bold" id="votes-count-${car.id}">${car.votes} Votes</span>
                        <button data-car-id="${car.id}" class="vote-button mt-2 bg-chevy-gold text-black font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-opacity-80 transition-colors">
                            Vote
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        // Attach event listeners to all the vote buttons.
        document.querySelectorAll('.vote-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const carId = e.target.getAttribute('data-car-id');
                handleVote(carId);
            });
        });

    } catch (error) {
        console.error("Failed to load gallery data:", error);
        const galleryContainer = document.getElementById('gallery-grid-container');
        if (galleryContainer) {
            galleryContainer.innerHTML = `<p class="text-red-600">Failed to load gallery. Please try again later.</p>`;
        }
    }
    console.log('Gallery page population complete.');
};
