let jokeCount = 0;
let currentCategory = 'general';
let currentJoke = {
    setup: '',
    delivery: ''
};

// Get random joke on page load
window.addEventListener('load', () => {
    getRandomJoke();
});

// Main function to fetch random joke
async function getRandomJoke() {
    const jokeText = document.getElementById('jokeText');
    const getJokeBtn = document.getElementById('getJokeBtn');
    
    // Show loading state
    jokeText.textContent = 'Loading a joke...';
    jokeText.className = 'loading';
    getJokeBtn.disabled = true;
    
    try {
        // Using JokeAPI - Free API for jokes
        const response = await fetch(`https://v2.jokeapi.dev/joke/${currentCategory}?type=single`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch joke');
        }
        
        const data = await response.json();
        
        // Check if joke was successfully retrieved
        if (data.error) {
            jokeText.textContent = 'Oops! Could not load a joke. Try again!';
            jokeText.className = '';
        } else {
            // Display the joke
            displayJoke(data.joke);
            jokeCount++;
            document.getElementById('jokeCount').textContent = jokeCount;
        }
    } catch (error) {
        console.error('Error fetching joke:', error);
        jokeText.textContent = '❌ Error loading joke. Please check your internet connection and try again.';
        jokeText.className = '';
    } finally {
        getJokeBtn.disabled = false;
    }
}

// Alternative function to fetch two-part jokes
async function getRandomJokeWithPunchline() {
    const jokeText = document.getElementById('jokeText');
    const getJokeBtn = document.getElementById('getJokeBtn');
    
    jokeText.textContent = 'Loading a joke...';
    jokeText.className = 'loading';
    getJokeBtn.disabled = true;
    
    try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/${currentCategory}?type=twopart`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch joke');
        }
        
        const data = await response.json();
        
        if (data.error) {
            jokeText.textContent = 'Oops! Could not load a joke. Try again!';
        } else {
            displayTwoPartJoke(data.setup, data.delivery);
            jokeCount++;
            document.getElementById('jokeCount').textContent = jokeCount;
        }
    } catch (error) {
        console.error('Error fetching joke:', error);
        jokeText.textContent = '❌ Error loading joke. Please try again.';
    } finally {
        getJokeBtn.disabled = false;
    }
}

// Display single-part joke
function displayJoke(joke) {
    const jokeContent = document.getElementById('jokeContent');
    jokeContent.innerHTML = `<p class="joke-content-text">${escapeHtml(joke)}</p>`;
    currentJoke = { setup: joke, delivery: '' };
}

// Display two-part joke
function displayTwoPartJoke(setup, delivery) {
    const jokeContent = document.getElementById('jokeContent');
    jokeContent.innerHTML = `
        <p class="joke-setup">${escapeHtml(setup)}</p>
        <p class="joke-punchline">${escapeHtml(delivery)}</p>
    `;
    currentJoke = { setup: setup, delivery: delivery };
}

// Get joke by category
async function getJokeByCategory(category) {
    currentCategory = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Fetch new joke
    getRandomJoke();
}

// Copy joke to clipboard
function copyToClipboard() {
    const jokeText = currentJoke.delivery 
        ? `${currentJoke.setup}\n${currentJoke.delivery}`
        : currentJoke.setup;
    
    navigator.clipboard.writeText(jokeText).then(() => {
        showNotification('Joke copied to clipboard! 📋');
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy joke to clipboard');
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Allow Enter key to get new joke
document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        getRandomJoke();
    }
});
