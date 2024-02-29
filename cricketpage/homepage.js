document.addEventListener('DOMContentLoaded', function() {
    // Function to display a welcome message
    function displayWelcomeMessage() {
        alert('Welcome to our cricket website!');
    }

    // Call the function when the DOM content is loaded
    displayWelcomeMessage();
});


// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Toggle mobile navigation
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('active');
    });
});

// Display current date in the footer
document.addEventListener('DOMContentLoaded', function() {
    const currentDateElement = document.querySelector('.current-date');
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    currentDateElement.textContent = currentDate;
});

// Example of fetching data from an API and displaying it on the page
document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://api.example.com/news';
    const newsContainer = document.querySelector('.latest-news');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Process the data and display it on the page
            for (const item of data.articles) {
                const articleElement = document.createElement('div');
                articleElement.classList.add('article');
                articleElement.innerHTML = `
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <a href="${item.url}" target="_blank">Read More</a>
                `;
                newsContainer.appendChild(articleElement);
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
