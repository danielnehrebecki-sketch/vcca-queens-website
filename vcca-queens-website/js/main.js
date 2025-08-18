// Function to show a custom message box
const showMessage = (title, message) => {
    const messageBox = document.getElementById('message-box');
    const messageTitle = document.getElementById('message-title');
    const messageContent = document.getElementById('message-content');
    const dismissButton = document.getElementById('dismiss-message-button');

    if (messageBox && messageTitle && messageContent && dismissButton) {
        messageTitle.textContent = title;
        messageContent.innerHTML = message;

        // Show the message box
        messageBox.classList.remove('hidden');
        setTimeout(() => {
            messageBox.classList.add('show');
        }, 10);

        // Hide the message box after a few seconds or on button click
        const hideMessageBox = () => {
            messageBox.classList.remove('show');
            setTimeout(() => {
                messageBox.classList.add('hidden');
            }, 300);
        };

        const timeoutId = setTimeout(hideMessageBox, 5000);
        
        dismissButton.onclick = () => {
            clearTimeout(timeoutId);
            hideMessageBox();
        };
    } else {
        console.error("Message box elements not found.");
    }
};

// Function to handle gallery voting
const handleVote = (carId) => {
    let storedVotes = JSON.parse(localStorage.getItem('carVotes')) || {};
    let currentVotes = storedVotes[carId] || 0;
    currentVotes++;
    storedVotes[carId] = currentVotes;
    localStorage.setItem('carVotes', JSON.stringify(storedVotes));

    const voteCountElement = document.getElementById(`votes-count-${carId}`);
    if (voteCountElement) {
        voteCountElement.textContent = currentVotes;
    }

    const car = websiteData.featuredCars.find(c => c.id === carId);
    const carName = car ? car.name : 'this car';

    showMessage("Vote Counted!", `You've voted for the ${carName}. This car now has ${currentVotes} vote(s).`);
};

// Function to handle contact form submission
const setupContactForm = () => {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            showMessage(
                "Thank you!",
                "<p>Your message has been received. Please note that a backend server is required to send this form data to an email address.</p><p class='mt-2'>We will reply to you as soon as we can!</p>"
            );

            form.reset();
        });
    }
};

// Function to handle membership form submission
const setupMembershipForm = () => {
    const form = document.getElementById('membership-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            showMessage(
                "Membership Application Received!",
                "<p>Thank you for your interest in joining the VCCA Queens County Region. Your application has been received and we will be in touch shortly.</p>"
            );
            
            form.reset();
        });
    }
};

// Main Application Logic
const main = () => {
    const headerContainer = document.getElementById('header-container');
    const mainContent = document.getElementById('main-content');
    const footerContainer = document.getElementById('footer-container');

    if (headerContainer) {
        headerContainer.innerHTML = renderHeader();
    }
    if (footerContainer) {
        footerContainer.innerHTML = renderFooter();
    }

    const routes = {
        '#home': { render: renderHomePage, postRender: populateHomePage },
        '#about': { render: renderAboutPage, postRender: null },
        '#events': { render: renderEventsPage, postRender: null },
        '#gallery': { render: renderGalleryPage, postRender: populateGalleryPage },
        '#membership': { render: renderMembershipPage, postRender: setupMembershipForm },
        '#contact': { render: renderContactPage, postRender: setupContactForm }
    };

    const handleRouteChange = () => {
        const route = window.location.hash || '#home';
        if (mainContent && routes[route]) {
            mainContent.innerHTML = routes[route].render();
            if (routes[route].postRender) {
                routes[route].postRender();
            }
        } else if (mainContent) {
            mainContent.innerHTML = `
                <div class="container mx-auto px-4 py-12 text-center">
                    <h2 class="text-4xl font-bold text-club-maroon mb-4">404 - Page Not Found</h2>
                    <p class="text-lg text-gray-700">The page you are looking for does not exist.</p>
                    <a href="#home" class="mt-8 inline-block bg-chevy-gold text-black font-bold py-3 px-8 rounded-lg shadow-lg transition-transform duration-300 hover:scale-110">
                        Go to Home
                    </a>
                </div>
            `;
        }
    };

    window.addEventListener('hashchange', handleRouteChange);
    handleRouteChange();

    const menuButton = document.getElementById('menu-button');
    const navMenu = document.getElementById('nav-menu');
    if (menuButton && navMenu) {
        menuButton.addEventListener('click', () => {
            navMenu.classList.toggle('hidden');
        });
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.add('hidden');
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', main);