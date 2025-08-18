// src/components/Header.js

// This function generates the HTML for the website's header and navigation bar.
export const renderHeader = () => {
    return `
        <header class="bg-club-maroon text-white text-center p-5 border-b-4 border-chevy-gold shadow-lg">
            <h1 class="text-4xl md:text-5xl font-bold font-lobster">
                VCCA Queens County Region
            </h1>
            <p class="mt-1 text-lg">Vintage Chevrolet Club of America</p>
        </header>

        <nav class="bg-gray-800 text-white p-2 md:p-4 shadow-lg sticky top-0 z-10">
            <div class="container mx-auto flex justify-center space-x-4 md:space-x-8">
                <a href="/" class="text-white hover:text-chevy-gold font-bold transition-colors duration-200">Home</a>
                <a href="#about" class="text-white hover:text-chevy-gold font-bold transition-colors duration-200">About Us</a>
                <a href="#membership" class="text-white hover:text-chevy-gold font-bold transition-colors duration-200">Membership</a>
                <a href="#events" class="text-white hover:text-chevy-gold font-bold transition-colors duration-200">Events</a>
                <a href="#gallery" class="text-white hover:text-chevy-gold font-bold transition-colors duration-200">Gallery</a>
                <a href="#contact" class="text-white hover:text-chevy-gold font-bold transition-colors duration-200">Contact</a>
            </div>
        </nav>
    `;
};