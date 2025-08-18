// src/pages/EventsPage.js

// This function generates the static HTML structure for the Events page.
export const renderEventsPage = () => {
    return `
        <div class="container mx-auto px-4 py-12">
            
            <!-- Events Hero Section -->
            <section class="bg-gray-100 rounded-lg shadow-md p-8 mb-12 text-center">
                <h2 class="text-4xl font-bold text-chevy-gold font-lobster mb-4">Upcoming Events</h2>
                <p class="text-lg text-gray-800 max-w-3xl mx-auto">
                    Join us for our upcoming car shows, club meetings, and special events.
                </p>
            </section>

            <!-- Dynamic Events List -->
            <section id="events-list">
                <h3 class="text-3xl font-bold text-club-maroon border-b-2 border-chevy-gold pb-2 mb-8">
                    All Events
                </h3>
                <div id="events-list-container" class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <!-- Events will be dynamically injected here by JavaScript -->
                    <p>Loading events...</p>
                </div>
            </section>

        </div>
    `;
};

// This function now fetches the data and populates the containers.
export const populateEventsPage = async () => {
    try {
        // Fetch the data from our static JSON file.
        const response = await fetch('/src/data/data.json');
        const data = await response.json();

        const eventsListContainer = document.getElementById('events-list-container');
        
        // Clear any loading messages.
        eventsListContainer.innerHTML = '';

        // Populate Events using the fetched data
        eventsListContainer.innerHTML = data.upcomingEvents.map(event => `
            <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src="${event.image}" alt="${event.name}" class="w-full h-56 object-cover">
                <div class="p-6">
                    <h4 class="text-2xl font-bold text-club-maroon">${event.name}</h4>
                    <p class="text-gray-600 mt-2"><span class="font-semibold">Date:</span> ${event.date}</p>
                    <p class="text-gray-600"><span class="font-semibold">Location:</span> ${event.location}</p>
                    <p class="text-gray-700 mt-4">${event.description}</p>
                    <button class="mt-6 w-full bg-chevy-gold text-black font-bold py-3 px-4 rounded-lg hover:bg-opacity-80 transition-colors">RSVP</button>
                </div>
            </div>
        `).join('');
    } catch (error) {
        console.error("Failed to load events data:", error);
        const eventsListContainer = document.getElementById('events-list-container');
        eventsListContainer.innerHTML = `<p class="text-red-600">Failed to load events. Please try again later.</p>`;
    }
};
