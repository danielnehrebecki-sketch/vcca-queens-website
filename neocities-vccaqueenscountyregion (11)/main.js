// src/main.js

// Import all our page rendering functions.
import { renderHomePage, populateHomePage } from './pages/HomePage.js';
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderAboutPage } from './pages/AboutPage.js';
import { renderEventsPage, populateEventsPage } from './pages/EventsPage.js';
import { renderGalleryPage, populateGalleryPage } from './pages/GalleryPage.js';
import { renderMembershipPage } from './pages/MembershipPage.js';
import { renderContactPage } from './pages/ContactPage.js'; // Import the new contact page function

// Get the main containers from the index.html file.
const mainContentContainer = document.getElementById('main-content');
const headerContainer = document.getElementById('header-container');
const footerContainer = document.getElementById('footer-container');

// This function acts as our client-side router.
// It checks the URL hash and renders the appropriate page.
const handleRoute = () => {
    // Get the current URL hash, defaulting to '#' for the homepage.
    const path = window.location.hash || '#';

    // Use a switch statement to handle different routes.
    switch (path) {
        case '#':
            mainContentContainer.innerHTML = renderHomePage();
            populateHomePage(); // Populate the homepage with dynamic data
            break;
        case '#about':
            mainContentContainer.innerHTML = renderAboutPage();
            break;
        case '#events':
            mainContentContainer.innerHTML = renderEventsPage();
            populateEventsPage(); // Populate the events page with dynamic data
            break;
        case '#gallery':
            mainContentContainer.innerHTML = renderGalleryPage();
            populateGalleryPage(); // Populate the gallery page with dynamic data
            break;
        case '#membership':
            mainContentContainer.innerHTML = renderMembershipPage();
            break;
        case '#contact':
            mainContentContainer.innerHTML = renderContactPage();
            break;
        default:
            // Handle 404 Not Found or redirect to the home page.
            mainContentContainer.innerHTML = `
                <div class="container mx-auto px-4 py-20 text-center">
                    <h2 class="text-4xl font-bold text-club-maroon">Page Not Found</h2>
                    <p class="mt-4 text-lg">The page you were looking for does not exist. Please check the URL or return to the <a href="#" class="text-chevy-gold hover:underline">homepage</a>.</p>
                </div>
            `;
            break;
    }
};

// This is the main function that runs when the page loads.
const app = () => {
    // Inject the Header's HTML into its container.
    headerContainer.innerHTML = renderHeader();
    
    // Inject the Footer's HTML into its container.
    footerContainer.innerHTML = renderFooter();

    // Call our router function once when the app loads to render the initial page.
    handleRoute();
};

// Listen for hash changes in the URL. This allows for multi-page navigation.
window.addEventListener('hashchange', handleRoute);

// Listen for the DOM to be fully loaded before running our app function.
document.addEventListener('DOMContentLoaded', app);
