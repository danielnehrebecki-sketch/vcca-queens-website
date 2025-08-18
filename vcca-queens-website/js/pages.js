// Function to render the Header component
const renderHeader = () => {
    return `
        <nav class="bg-club-maroon text-white p-4 shadow-lg fixed top-0 w-full z-10">
            <div class="container mx-auto flex flex-wrap justify-between items-center">
                <a href="#" class="flex items-center space-x-2">
                    <img src="club%20logo.jpg" 
                        alt="VCCA Queens Club Logo" 
                        class="h-10 w-auto rounded-full"
                        onerror="this.onerror=null;this.src='https://placehold.co/80x80/FFCC00/FFFFFF?text=Logo';" />
                    <span class="text-2xl font-bold font-lobster text-chevy-gold">VCCA Queens</span>
                </a>
                <div class="block lg:hidden">
                    <button id="menu-button" class="text-white focus:outline-none">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
                <div id="nav-menu" class="hidden w-full lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0">
                    <ul class="lg:flex items-center space-y-4 lg:space-y-0 lg:space-x-8">
                        <li><a href="#home" class="block hover:text-chevy-gold transition-colors duration-300">Home</a></li>
                        <li><a href="#about" class="block hover:text-chevy-gold transition-colors duration-300">About Us</a></li>
                        <li><a href="#events" class="block hover:text-chevy-gold transition-colors duration-300">Events</a></li>
                        <li><a href="#gallery" class="block hover:text-chevy-gold transition-colors duration-300">Gallery</a></li>
                        <li><a href="#membership" class="block hover:text-chevy-gold transition-colors duration-300">Membership</a></li>
                        <li><a href="#contact" class="block hover:text-chevy-gold transition-colors duration-300">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
};

// Function to render the Footer component
const renderFooter = () => {
    return `
        <footer class="bg-dark-gray text-white py-8">
            <div class="container mx-auto px-4 text-center">
                <p>&copy; 2025 VCCA Queens County Region. All Rights Reserved.</p>
            </div>
        </footer>
    `;
};

const renderHomePage = () => {
    return `
        <section class="bg-cover bg-center h-screen flex items-center justify-center text-center text-white" style="background-image: url('banner.jpg');">
            <div class="bg-black bg-opacity-50 p-8 rounded-lg">
                <h1 class="text-5xl font-bold font-lobster text-chevy-gold">VCCA Queens County Region</h1>
                <p class="mt-4 text-xl">The Voice of the Chevrolet Enthusiast</p>
                <a href="#about" class="mt-8 inline-block bg-chevy-gold text-black font-bold py-3 px-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
                    Learn More
                </a>
            </div>
        </section>

        <section class="container mx-auto px-4 py-12">
            <div class="bg-gray-100 rounded-lg shadow-md p-8 text-center">
                <h3 class="text-3xl font-bold text-club-maroon mb-4">Download Our App</h3>
                <p class="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                    Add our website to your home screen for an app-like experience!
                </p>
                <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                    <a href="#" id="iphone-download-link" class="inline-flex items-center space-x-2 bg-black text-white py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
                        <i class="fab fa-apple text-2xl"></i>
                        <span>Download App for iPhone</span>
                    </a>
                    <a href="#" id="android-download-link" class="inline-flex items-center space-x-2 bg-black text-white py-3 px-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
                        <i class="fab fa-google-play text-2xl"></i>
                        <span>Download App for Android</span>
                    </a>
                </div>
            </div>
        </section>
        
        <section id="about" class="container mx-auto px-4 py-12">
            <h2 class="text-3xl font-bold text-club-maroon text-center border-b-2 border-chevy-gold pb-2 mb-8">
                About Our Club
            </h2>
            <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="order-2 md:order-1">
                    <p class="text-gray-700 leading-relaxed">
                        The VCCA Queens County Region is dedicated to the preservation, restoration, and enjoyment of vintage Chevrolet automobiles. We are a family of enthusiasts who share a passion for the classic cars that have defined American automotive history.
                    </p>
                    <p class="text-gray-700 leading-relaxed mt-4">
                        Our club is a community of car owners, restorers, and admirers who come together to share knowledge, attend events, and celebrate the timeless beauty of these vehicles.
                    </p>
                </div>
                <div class="order-1 md:order-2">
                    <img src="flag%20eagle.gif.gif" alt="A patriotic flag and eagle graphic" class="rounded-lg shadow-md transition-transform duration-300 hover:scale-105" />
                </div>
            </div>
        </section>

        <section class="bg-gray-100 py-12">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-club-maroon text-center border-b-2 border-chevy-gold pb-2 mb-8">
                    Featured Member Cars
                </h2>
                <div id="featured-cars-container" class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    </div>
            </div>
        </section>

        <section class="bg-club-maroon text-white text-center py-12">
            <h2 class="text-3xl font-bold font-lobster mb-4">Join Our Club!</h2>
            <p class="text-lg mb-6 max-w-2xl mx-auto">
                Become a part of the VCCA Queens family. Connect with fellow enthusiasts, participate in exclusive events, and celebrate the history of Chevrolet.
            </p>
            <a href="#membership" class="bg-chevy-gold text-black font-bold py-3 px-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
                Become a Member
            </a>
        </section>
    `;
};

const populateHomePage = () => {
    const container = document.getElementById('featured-cars-container');
    if (container) {
        container.innerHTML = websiteData.featuredCars.slice(0, 4).map(car => `
            <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <img src="${car.image}" alt="${car.name}" loading="lazy" class="w-full h-48 object-cover">
                <div class="p-4 text-center">
                    <h3 class="font-bold text-xl text-club-maroon">${car.name}</h3>
                    <p class="text-sm text-gray-600">Owned by: ${car.owner}</p>
                </div>
            </div>
        `).join('');
    }

    const iphoneLink = document.getElementById('iphone-download-link');
    const androidLink = document.getElementById('android-download-link');
    
    if (iphoneLink) {
        iphoneLink.addEventListener('click', (e) => {
            e.preventDefault();
            showMessage("Add to Home Screen (iPhone)", `
                <ol class="list-decimal list-inside space-y-2 mt-4">
                    <li>Tap the <i class="fas fa-upload fa-lg mx-1"></i> icon at the bottom of the screen.</li>
                    <li>Scroll down and tap "Add to Home Screen".</li>
                    <li>Tap "Add" to finish.</li>
                </ol>
            `);
        });
    }
    if (androidLink) {
        androidLink.addEventListener('click', (e) => {
            e.preventDefault();
            showMessage("Add to Home Screen (Android)", `
                <ol class="list-decimal list-inside space-y-2 mt-4">
                    <li>Tap the three-dot menu <i class="fas fa-ellipsis-v fa-lg mx-1"></i> in the top-right corner.</li>
                    <li>Tap "Add to Home screen".</li>
                    <li>Tap "Add" to finish.</li>
                </ol>
            `);
        });
    }
};

const renderAboutPage = () => {
    return `
        <div class="container mx-auto px-4 py-12">
            <section class="bg-gray-100 rounded-lg shadow-md p-8 mb-12 text-center">
                <h2 class="text-4xl font-bold text-chevy-gold font-lobster mb-4">About Us</h2>
                <p class="text-lg text-gray-800 max-w-3xl mx-auto">
                    The VCCA Queens County Region is a non-profit club dedicated to the preservation and enjoyment of vintage Chevrolet automobiles.
                </p>
            </section>

            <section class="mb-12">
                <h3 class="text-3xl font-bold text-club-maroon border-b-2 border-chevy-gold pb-2 mb-8">
                    Our History
                </h3>
                <div class="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p class="text-gray-700 leading-relaxed">
                            Founded in 2001, the VCCA Queens County Region has grown from a small group of passionate car owners into a vibrant community. Our founders, a few dedicated individuals with a shared love for classic Chevrolets, met in a local garage to discuss their restoration projects. From those humble beginnings, the club has become a central hub for enthusiasts in Queens and the wider New York metropolitan area.
                        </p>
                        <p class="text-gray-700 leading-relaxed mt-4">
                            Over the decades, we have hosted countless car shows, parades, and social gatherings, fostering a spirit of camaraderie and mutual respect among our members. We're proud to carry on the legacy of Chevrolet history and share our passion with the next generation.
                        </p>
                    </div>
                    <div>
                        <img 
                            src="chevrolet symbol.jpg" 
                            alt="A patriotic flag and eagle graphic" 
                            class="rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                            onerror="this.onerror=null;this.src='https://placehold.co/800x600/e5e7eb/6b7280?text=Image+Not+Found';"
                        />
                    </div>
                </div>
            </section>

            <section class="bg-club-maroon text-white rounded-lg shadow-md p-8 text-center mb-12">
                <h3 class="text-3xl font-bold mb-4 font-lobster">Our Mission</h3>
                <p class="text-lg max-w-2xl mx-auto">
                    To serve as a community for vintage Chevrolet owners and enthusiasts, promoting the preservation, restoration, and appreciation of these classic automobiles through education, fellowship, and shared events.
                </p>
            </section>

            <section class="bg-gray-100 rounded-lg shadow-md p-8 text-center">
                <h3 class="text-3xl font-bold text-club-maroon border-b-2 border-chevy-gold pb-2 mb-8">
                    Our Passion
                </h3>
                <div class="grid md:grid-cols-2 gap-8 items-center">
                    <div class="order-2 md:order-1">
                        <p class="text-gray-700 leading-relaxed">
                            Our club is built on a passion for timeless American engineering and design. The 1957 Chevrolet is a perfect example of the vehicles we love to restore, showcase, and drive. Its iconic tailfins, chrome accents, and powerful engine make it a symbol of a golden age in automotive history.
                        </p>
                        <p class="text-gray-700 leading-relaxed mt-4">
                            This classic beauty represents the spirit of our club: honoring the past while creating new memories on the open road.
                        </p>
                    </div>
                    <div class="order-1 md:order-2">
                        <img src="1957 chevy.jpg" 
                            alt="A beautiful red and white 1957 Chevrolet" 
                            class="rounded-lg shadow-md transition-transform duration-300 hover:scale-105" 
                            onerror="this.src='https://placehold.co/1200x800/e5e7eb/6b7280?text=Image+Not+Found'; this.style.filter='grayscale(100%)';" />
                    </div>
                </div>
            </section>
        </div>
    `;
};

const renderEventsPage = () => {
    return `
        <div class="container mx-auto px-4 py-12">

            <section class="bg-gray-100 rounded-lg shadow-md p-8 mb-12 text-center">
                <h2 class="text-4xl font-bold text-chevy-gold font-lobster mb-4">Upcoming Events</h2>
                <p class="text-lg text-gray-800 max-w-3xl mx-auto">
                    Join us for our next club meeting or car show! Everyone is welcome.
                </p>
            </section>
            
            <section class="mb-12">
                <div class="event-card">
                    <h3 class="text-2xl font-bold text-club-maroon mb-2">Cruise Night</h3>
                    <p class="text-lg"><strong>Date & Time:</strong> Monday, August 11, from 6:30 PM to 9:30 PM</p>
                </div>
            </section>

            <div class="external-link">
                <p>
                    <i class="fas fa-camera-retro"></i> View the current newsletter:
                    <a href="https://myalbum.com/album/6dZPnYtNcqY4uZ/?invite=adadb610-ff82-42f8-bb34-a4c0ed439372">
                        Click to open Newsletters
                    </a>
                </p>
            </div>
        </div>
    `;
};

const populateEventsPage = () => {
    const container = document.getElementById('events-list-container');
    if (container) {
        container.innerHTML = websiteData.upcomingEvents.map(event => `
            <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row items-center transition-transform duration-300 hover:scale-105">
                <img 
                    src="${event.image}" 
                    alt="${event.name}" 
                    class="w-full md:w-1/3 h-48 md:h-full object-cover" 
                    onerror="this.onerror=null;this.src='https://placehold.co/1200x800/800000/FFFFFF?text=Image+Not+Found';"
                >
                <div class="p-6 w-full md:w-2/3">
                    <h4 class="text-2xl font-bold text-club-maroon">${event.name}</h4>
                    <p class="text-gray-600 mt-2">
                        <i class="fas fa-calendar-alt text-chevy-gold mr-2"></i>
                        ${event.date}
                    </p>
                    <p class="text-gray-600 mt-1">
                        <i class="fas fa-map-marker-alt text-chevy-gold mr-2"></i>
                        ${event.location}
                    </p>
                    <p class="text-gray-700 leading-relaxed mt-4">${event.description}</p>
                </div>
            </div>
        `).join('');
    }
};

const renderGalleryPage = () => {
    return `
        <div class="container mx-auto px-4 py-12">
            <section class="bg-gray-100 rounded-lg shadow-md p-8 mb-12 text-center">
                <h2 class="text-4xl font-bold text-chevy-gold font-lobster mb-4">Featured Car Gallery</h2>
                <p class="text-lg text-gray-800 max-w-3xl mx-auto">
                    Explore some of the stunning vintage Chevrolets from our club members. Vote for your favorite!
                </p>
            </section>

            <section id="gallery">
                <h3 class="text-3xl font-bold text-club-maroon border-b-2 border-chevy-gold pb-2 mb-8">
                    Our Collection
                </h3>
                <div id="gallery-grid-container" class="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    </div>
            </section>
        </div>
    `;
};

const populateGalleryPage = () => {
    const container = document.getElementById('gallery-grid-container');
    const storedVotes = JSON.parse(localStorage.getItem('carVotes')) || {};

    if (container) {
        container.innerHTML = websiteData.featuredCars.map(car => {
            const votes = storedVotes[car.id] || 0;
            return `
                <div class="bg-white rounded-lg shadow-md overflow-hidden text-center transition-transform duration-300 hover:scale-105">
                    <img src="${car.image}" alt="${car.name}" loading="lazy" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h3 class="font-bold text-xl text-club-maroon">${car.name}</h3>
                        <p class="text-sm text-gray-600">Owned by: ${car.owner}</p>
                        <div class="flex items-center justify-center mt-2">
                            <button onclick="handleVote(${car.id})" class="flex items-center space-x-2 bg-chevy-gold text-black py-2 px-4 rounded-full font-bold shadow-md hover:bg-opacity-80 transition-colors">
                                <i class="fas fa-heart"></i>
                                <span>Vote</span>
                            </button>
                        </div>
                        <p class="text-sm text-gray-500 mt-2">Votes: <span id="votes-count-${car.id}">${votes}</span></p>
                    </div>
                </div>
            `;
        }).join('');
    }
};

const renderMembershipPage = () => {
    return `
        <div class="container mx-auto px-4 py-12">
            <section class="bg-gray-100 rounded-lg shadow-md p-8 mb-12 text-center">
                <h2 class="text-4xl font-bold text-chevy-gold font-lobster mb-4">Become a Member</h2>
                <p class="text-lg text-gray-800 max-w-3xl mx-auto">
                    Join the VCCA Queens County Region and become part of a community that celebrates the heritage of Chevrolet.
                </p>
            </section>

            <section class="mb-12">
                <h3 class="text-3xl font-bold text-club-maroon border-b-2 border-chevy-gold pb-2 mb-8">
                    Benefits of Membership
                </h3>
                <ul class="list-disc list-inside text-gray-700 leading-loose space-y-2">
                    <li>Access to exclusive club events and car shows.</li>
                    <li>Connect with experienced restorers and technicians.</li>
                    <li>Receive our monthly newsletter with club news and stories.</li>
                    <li>Participation in club-only cruises and tours.</li>
                    <li>Be part of a vibrant, welcoming community of fellow enthusiasts.</li>
                    <li>Get access to expert advice for your restoration projects.</li>
                </ul>
            </section>

            <section class="mb-12">
                <h4 class="text-2xl font-bold text-club-maroon border-b-2 border-chevy-gold pb-1 mb-4">
                    How to Join
                </h4>
                <p class="text-gray-700">
                    To join, please fill out the form below or visit the <a href="#contact" class="text-club-maroon font-bold hover:text-chevy-gold underline">Contact Us</a> page.
                </p>
            </section>

            <section class="bg-gray-100 rounded-lg shadow-md p-8">
                <h4 class="text-2xl font-bold text-club-maroon border-b-2 border-chevy-gold pb-1 mb-4">
                    Membership Application
                </h4>
                <form id="membership-form" class="space-y-6">
                    <div>
                        <label for="member-name" class="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="member-name" name="member-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-chevy-gold focus:ring-chevy-gold sm:text-sm p-2" required>
                    </div>
                    <div>
                        <label for="member-email" class="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="member-email" name="member-email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-chevy-gold focus:ring-chevy-gold sm:text-sm p-2" required>
                    </div>
                    <div>
                        <label for="member-phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="tel" id="member-phone" name="member-phone" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-chevy-gold focus:ring-chevy-gold sm:text-sm p-2">
                    </div>
                    <div>
                        <label for="car-info" class="block text-sm font-medium text-gray-700">Your Chevrolet (Year, Make, Model)</label>
                        <textarea id="car-info" name="car-info" rows="2" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-chevy-gold focus:ring-chevy-gold sm:text-sm p-2"></textarea>
                    </div>
                    <div>
                        <button type="submit" class="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-black bg-chevy-gold hover:bg-opacity-80 transition-colors duration-300">
                            Submit Application
                        </button>
                    </div>
                </form>
            </section>
        </div>
    `;
};

const renderContactPage = () => {
    return `
        <div class="container mx-auto px-4 py-12">
            <section class="bg-gray-100 rounded-lg shadow-md p-8 mb-12 text-center">
                <h2 class="text-4xl font-bold text-chevy-gold font-lobster mb-4">Contact Us</h2>
                <p class="text-lg text-gray-800 max-w-3xl mx-auto">
                    Have a question? We'd love to hear from you.
                </p>
            </section>

            <section class="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 class="text-3xl font-bold text-club-maroon border-b-2 border-chevy-gold pb-2 mb-8">
                    Club Leadership
                </h3>
                <p class="text-lg font-bold text-gray-800">Director-President</p>
                <p class="text-gray-700">Name: Sebastian D'Agostino</p>
                <p class="text-gray-700">Home Phone: (718) 225-3438</p>
                <p class="text-gray-700">Cell Phone: (917) 837-5383</p>

                <div class="contact-links">
                    <a href="http://antiquechevyclubofqueens.org/" target="_blank" class="retro-button">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 640 512">
                            <path fill="white" d="M544 192h-16l-30.6-61.1C485.1 118.4 472.9 112 460 112H324.8l-43.2-64H128c-17.7 0-32 14.3-32 32v48H48C21.5 128 0 149.5 0 176v128c0 26.5 21.5 48 48 48h16c0 35.3 28.7 64 64 64s64-28.7 64-64h256c0 35.3 28.7 64 64 64s64-28.7 64-64h16c26.5 0 48-21.5 48-48v-32c0-53-43-96-96-96zM128 368a32 32 0 1 1 0-64 32 32 0 0 1 0 64zm384 0a32 32 0 1 1 0-64 32 32 0 0 1 0 64z"/>
                        </svg>
                        Antique Chevrolet Club of Queens - Website
                    </a>
                    <a href="https://www.facebook.com/qcrvcca" target="_blank" class="retro-button">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 320 512">
                            <path fill="white" d="M279.14 288l14.22-92.66h-88.91V127.56c0-25.35 12.42-50.06 52.24-50.06H293V6.26S262.43 0 234.36 0c-73.22 0-121.1 44.38-121.1 124.72V195.3H64v92.66h49.26V512h100.2V288z"/>
                        </svg>
                        Follow us on Facebook
                    </a>
                </div>
            </section>

            <section class="bg-gray-100 rounded-lg shadow-md p-8 mt-8">
                <h3 class="text-3xl font-bold text-club-maroon border-b-2 border-chevy-gold pb-2 mb-8 text-center">
                    Send Us a Message
                </h3>
                <form id="contact-form" class="space-y-6">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-chevy-gold focus:ring-chevy-gold sm:text-sm p-2" required>
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" name="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-chevy-gold focus:ring-chevy-gold sm:text-sm p-2" required>
                    </div>
                    <div>
                        <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
                        <input type="text" id="subject" name="subject" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-chevy-gold focus:ring-chevy-gold sm:text-sm p-2" required>
                    </div>
                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" name="message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-chevy-gold focus:ring-chevy-gold sm:text-sm p-2" required></textarea>
                    </div>
                    <div>
                        <button type="submit" class="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-black bg-chevy-gold hover:bg-opacity-80 transition-colors duration-300">
                            Send Message
                        </button>
                    </div>
                </form>
            </section>
        </div>
    `;
};