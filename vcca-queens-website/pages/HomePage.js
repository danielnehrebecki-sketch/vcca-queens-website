// src/pages/HomePage.js

// This function generates the static HTML structure for the entire homepage.
// Note: It no longer contains the hard-coded data.
export const renderHomePage = () => {
    return `
        <section class="relative h-[60vh] md:h-[80vh] bg-cover bg-center text-white" style="background-image: url('/assets/hero-banner.jpg');">
            <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
                <h1 class="text-4xl md:text-6xl font-bold font-lobster drop-shadow-lg animate-fade-in-up">
                    VCCA Queens County Region
                </h1>
                <p class="mt-2 text-xl md:text-2xl font-raleway animate-fade-in-up-delay">
                    Celebrating Classic Chevrolet Cars in Queens, NY
                </p>
                <div class="mt-8 flex space-x-4">
                    <a href="#membership" class="bg-club-maroon hover:bg-club-maroon-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                        Join the Club
                    </a>
                    <a href="#events" class="bg-chevy-gold hover:bg-chevy-gold-dark text-black font-bold py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                        View Upcoming Events
                    </a>
                </div>
            </div>
        </section>

        <section id="events" class="py-12 bg-gray-100">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-chevy-gold text-center mb-8 border-b-2 border-chevy-gold pb-2">
                    Upcoming Events
                </h2>
                <div class="flex flex-wrap justify-center gap-6" id="events-container">
                    <p>Loading events...</p>
                </div>
                <div class="text-center mt-8">
                    <a href="#all-events" class="text-lg text-club-maroon hover:underline">
                        View All Events →
                    </a>
                </div>
            </div>
        </section>

        <section id="gallery" class="py-12">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-chevy-gold text-center mb-8 border-b-2 border-chevy-gold pb-2">
                    Featured Cars
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4" id="gallery-container">
                    <p>Loading cars...</p>
                </div>
                <div class="text-center mt-8">
                    <a href="#full-gallery" class="text-lg text-club-maroon hover:underline">
                        Explore the Full Gallery →
                    </a>
                </div>
            </div>
        </section>

        <section id="membership" class="py-12 bg-club-maroon text-white text-center">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold mb-4 font-lobster">Join Our Community!</h2>
                <p class="text-lg max-w-2xl mx-auto mb-6">
                    Become a member to connect with fellow enthusiasts, participate in exclusive events, and celebrate the heritage of classic Chevrolets.
                </p>
                <a href="#membership-form" class="bg-chevy-gold text-black font-bold py-3 px-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
                    Join Now
                </a>
            </div>
        </section>
    `;
};

// This function now fetches the data and populates the containers.
export const populateHomePage = async () => {
    // Fetch the data from our static JSON file.
    const response = await fetch('/src/data/data.json');
    const data = await response.json();

    const eventsContainer = document.getElementById('events-container');
    const galleryContainer = document.getElementById('gallery-container');

    // Populate Events using the fetched data
    eventsContainer.innerHTML = data.upcomingEvents.map(event => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105" style="max-width: 350px;">
            <img src="${event.image}" alt="${event.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-xl font-bold text-club-maroon">${event.name}</h3>
                <p class="text-gray-600">${event.date}</p>
                <p class="text-gray-600">${event.location}</p>
                <button class="mt-4 bg-chevy-gold text-black font-bold py-2 px-4 rounded hover:bg-opacity-80 transition-colors">RSVP</button>
            </div>
        </div>
    `).join('');

    // Populate Gallery using the fetched data
    galleryContainer.innerHTML = data.featuredCars.map(car => `
        <div class="relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <img src="${car.image}" alt="${car.name}" loading="lazy" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span class="text-white text-lg font-bold text-center p-2">${car.name}</span>
            </div>
        </div>
    `).join('');
};