// JavaScript code goes here
const chatContainer = document.getElementById('chat-container');
const userInputForm = document.getElementById('user-input');
const userQueryInput = document.getElementById('user-query');

// Function to add user message to chat container
function addUserMessage(message) {
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'bot-message'; // Reusing bot message style for user message
    userMessageDiv.textContent = message;
    chatContainer.appendChild(userMessageDiv);
}

// Function to add bot message to chat container
function addBotMessage(message) {
    const botMessageDiv = document.createElement('div');
    botMessageDiv.className = 'bot-message';
    botMessageDiv.textContent = message;
    chatContainer.appendChild(botMessageDiv);
}

// Sample data for responses
const responses = {
    'news': "Latest news: india win the series 3-1 beat england!",
    'match': "Latest match: india win the series",
    'cricket': "Latest cricket match: India vs. england, 5th test, March 5th, 2024",
    'team': "Team Name: India\nCountry: India",
    'player': "Player Name: Virat Kohli\nAge: 33\nCountry: India\nRole: Batsman",
    'blog': "Check out our latest blog post: 'Top 10 Moments of Cricket History'",
    'matches': "Upcoming Match: India vs. england, 5nd test, March 5th, 2024"
};

// Function to handle user input
function handleUserInput(event) {
    event.preventDefault();
    const userQuery = userQueryInput.value.trim().toLowerCase();
    addUserMessage(userQuery);
    if (responses.hasOwnProperty(userQuery)) {
        addBotMessage(responses[userQuery]);
    } else {
        addBotMessage("Sorry, I couldn't understand your query.");
    }
    userQueryInput.value = ''; // Clear input field after sending message
    chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to bottom
}

// Event listener for user input form submission
userInputForm.addEventListener('submit', handleUserInput);
