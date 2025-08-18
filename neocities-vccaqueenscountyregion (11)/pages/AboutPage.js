// src/pages/AboutPage.js

// This function generates the static HTML content for the "About Us" page.
export const renderAboutPage = () => {
    return `
        <div class="container mx-auto px-4 py-12">
            
            <section class="bg-gray-100 rounded-lg shadow-md p-8 mb-12 text-center">
                <h2 class="text-4xl font-bold text-chevy-gold font-lobster mb-4">About Our Club</h2>
                <p class="text-lg text-gray-800 max-w-3xl mx-auto">
                    The VCCA Queens County Region is dedicated to the preservation, restoration, and enjoyment of vintage Chevrolet automobiles. We are a passionate community of owners, enthusiasts, and historians.
                </p>
            </section>

            <section class="mb-12">
                <div class="flex flex-col md:flex-row items-center md:space-x-8">
                    <div class="md:w-1/2">
                        <img src="/assets/about-history.jpg" alt="Vintage Car Club History" class="rounded-lg shadow-lg mb-6 md:mb-0 w-full">
                    </div>
                    <div class="md:w-1/2">
                        <h3 class="text-3xl font-bold text-club-maroon border-b-2 border-chevy-gold pb-2 mb-4">
                            Our History
                        </h3>
                        <p class="text-gray-700 leading-relaxed">
                            Founded in 1960, the Vintage Chevrolet Club of America was established to bring together enthusiasts who share a common love for classic Chevrolets. The Queens County Region was officially chartered in 1975, serving as a hub for local members to connect, share knowledge, and organize events. Our club has grown from a small group of friends into a thriving community that spans generations.
                        </p>
                    </div>
                </div>
            </section>

            <section class="mb-12">
                <div class="flex flex-col-reverse md:flex-row items-center md:space-x-8">
                    <div class="md:w-1/2">
                        <h3 class="text-3xl font-bold text-club-maroon border-b-2 border-chevy-gold pb-2 mb-4">
                            Our Mission
                        </h3>
                        <p class="text-gray-700 leading-relaxed">
                            Our mission is to foster a welcoming environment for all who appreciate the history and craftsmanship of Chevrolet automobiles. We provide resources for restoration projects, host car shows and rallies, and promote the fellowship among members. We believe that these classic cars are not just metal and glass, but a cherished part of American history that deserves to be celebrated.
                        </p>
                    </div>
                    <div class="md:w-1/2">
                        <img src="/assets/about-mission.jpg" alt="Club members discussing a car" class="rounded-lg shadow-lg mb-6 md:mb-0 w-full">
                    </div>
                </div>
            </section>

            <section id="membership-cta" class="bg-chevy-gold text-black rounded-lg shadow-md p-8 text-center">
                <h3 class="text-2xl font-bold mb-2 font-lobster">Ready to Join Us?</h3>
                <p class="text-lg mb-4">
                    Become part of our family of Chevrolet enthusiasts.
                </p>
                <a href="#membership-form" class="bg-club-maroon text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
                    Learn More
                </a>
            </section>
        </div>
    `;
};
};