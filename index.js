// Write your code in this file!

const currentUser = "string";

let welcomeMessage = 'Welcome to Flatbook, ';
welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';

let excitedWelcomeMessage = 'WELCOME TO FLATBOOK, ';
excitedWelcomeMessage = 'WELCOME TO FLATBOOK, ' + currentUser.toUpperCase() + '!';

let shortGreeting = 'Welcome, ';
shortGreeting = 'Welcome, ' + currentUser.substring(0,1) + '!';
