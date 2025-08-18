// src/pages/ContactPage.js

// This function generates the static HTML content for the "Contact Us" page.
export const renderContactPage = () => {
    return `
        <div class="container mx-auto px-4 py-12">
            
            <!-- Contact Hero Section -->
            <section class="bg-gray-100 rounded-lg shadow-md p-8 mb-12 text-center">
                <h2 class="text-4xl font-bold text-chevy-gold font-lobster mb-4">Contact Us</h2>
                <p class="text-lg text-gray-800 max-w-3xl mx-auto">
                    We'd love to hear from you! Please reach out with any questions, comments, or inquiries.
                </p>
            </section>

            <!-- Contact Information & Form Section -->
            <section class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <!-- Contact Info -->
                <div class="bg-white rounded-lg shadow-md p-8">
                    <h3 class="text-2xl font-bold text-club-maroon border-b-2 border-chevy-gold pb-2 mb-4">
                        Our Information
                    </h3>
                    <p class="text-gray-700 mb-4">
                        If you have an urgent inquiry or prefer traditional communication, you can find our details below.
                    </p>
                    <div class="flex items-center mb-4">
                        <i class="fas fa-envelope text-chevy-gold text-2xl mr-4"></i>
                        <div>
                            <p class="font-bold">Email</p>
                            <a href="mailto:info@vccaqueens.org" class="text-gray-600 hover:text-club-maroon">info@vccaqueens.org</a>
                        </div>
                    </div>
                    <div class="flex items-center mb-4">
                        <i class="fas fa-phone-alt text-chevy-gold text-2xl mr-4"></i>
                        <div>
                            <p class="font-bold">Phone</p>
                            <a href="tel:555-123-4567" class="text-gray-600 hover:text-club-maroon">(555) 123-4567</a>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <i class="fas fa-map-marker-alt text-chevy-gold text-2xl mr-4"></i>
                        <div>
                            <p class="font-bold">Address</p>
                            <p class="text-gray-600">Queens County, NY</p>
                        </div>
                    </div>
                </div>

                <!-- Contact Form - We will add functionality to this later -->
                <div class="bg-white rounded-lg shadow-md p-8">
                    <h3 class="text-2xl font-bold text-club-maroon border-b-2 border-chevy-gold pb-2 mb-4">
                        Send Us a Message
                    </h3>
                    <form action="#" method="post" id="contact-form">
                        <div class="mb-4">
                            <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
                            <input type="text" id="name" name="name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chevy-gold" required>
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                            <input type="email" id="email" name="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chevy-gold" required>
                        </div>
                        <div class="mb-4">
                            <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
                            <textarea id="message" name="message" rows="5" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-chevy-gold" required></textarea>
                        </div>
                        <button type="submit" class="w-full bg-club-maroon text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

        </div>
    `;
};