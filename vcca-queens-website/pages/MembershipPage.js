// src/pages/MembershipPage.js

// This function generates the static HTML content for the "Membership" page.
export const renderMembershipPage = () => {
    return `
        <div class="container mx-auto px-4 py-12">
            
            <!-- Membership Hero Section -->
            <section class="bg-gray-100 rounded-lg shadow-md p-8 mb-12 text-center">
                <h2 class="text-4xl font-bold text-chevy-gold font-lobster mb-4">Become a Member Today!</h2>
                <p class="text-lg text-gray-800 max-w-3xl mx-auto">
                    Join the VCCA Queens County Region and become part of our family of classic Chevrolet enthusiasts.
                </p>
            </section>

            <!-- Membership Benefits Section -->
            <section class="mb-12">
                <h3 class="text-3xl font-bold text-club-maroon border-b-2 border-chevy-gold pb-2 mb-8 text-center">
                    Member Benefits
                </h3>
                <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <!-- Benefit 1 -->
                    <div class="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
                        <div class="text-4xl text-chevy-gold mb-4 text-center">
                            <i class="fas fa-users"></i>
                        </div>
                        <h4 class="text-xl font-bold text-center mb-2">Community & Fellowship</h4>
                        <p class="text-gray-700 text-center">
                            Connect with fellow enthusiasts, share restoration tips, and build lasting friendships.
                        </p>
                    </div>
                    <!-- Benefit 2 -->
                    <div class="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
                        <div class="text-4xl text-chevy-gold mb-4 text-center">
                            <i class="fas fa-calendar-alt"></i>
                        </div>
                        <h4 class="text-xl font-bold text-center mb-2">Exclusive Events</h4>
                        <p class="text-gray-700 text-center">
                            Gain access to members-only meetings, private tours, and exclusive club events.
                        </p>
                    </div>
                    <!-- Benefit 3 -->
                    <div class="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
                        <div class="text-4xl text-chevy-gold mb-4 text-center">
                            <i class="fas fa-wrench"></i>
                        </div>
                        <h4 class="text-xl font-bold text-center mb-2">Restoration Resources</h4>
                        <p class="text-gray-700 text-center">
                            Tap into a wealth of knowledge and resources to help with your next project.
                        </p>
                    </div>
                </div>
            </section>

            <!-- Join Now Section -->
            <section class="bg-club-maroon text-white rounded-lg shadow-md p-8 text-center">
                <h3 class="text-2xl font-bold mb-4 font-lobster">Ready to Join?</h3>
                <p class="text-lg max-w-2xl mx-auto mb-6">
                    Download our membership application form below and start your journey with us.
                </p>
                <a href="/assets/vcca-membership-form.pdf" target="_blank" class="bg-chevy-gold text-black font-bold py-3 px-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
                    Download Application
                </a>
            </section>
        </div>
    `;
};
