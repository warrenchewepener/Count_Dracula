const prompt = require("prompt-sync")();

function greetUser() {
    // Get the current time
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    // Define the greetings based on the time
    var greeting;
    if (currentHour < 12) {
        greeting = "Good morning";
    } else if (currentHour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    // Prompt the user for input
    var userName = prompt("What is your name?:");
    if (userName !== null && userName !== "") {
        // Respond with the greeting and user's name
        console.log(greeting + ", " + userName + "! ");
    } else {
        // If the user doesn't provide a name, just greet them without it
        console.log(greeting + "! Have you ever left our Galaxy the Milky Way?");
    }
}

// Call the function to greet the user when the page loads
greetUser();

const answer = prompt("Would you like to interact with me?");

if (answer === "yes")  
    console.log("Greetings, we have much to talk about!");

function ladders(climb)  {
    return climb * 1431;
}

function ladder(name, surname) {
    const dry = ladders(name);
    const hungry = `My name is Vlad III Dracula I was born in ${dry}`;
    return hungry;
}

console.log(ladder(1));

console.log("I can do the following");

const years = ["Mind Control", "Change of Character", "Disappear"];

console.log(years[0]);
console.log(years[1]);
console.log(years[2]); 

const pluto = prompt("Before we go on our adventure can you please tell me what color eyes you have?");

if (pluto === "brown") 
    console.log("You are independent, determined and confident");

if (pluto === "blue")   
    console.log("Your eyes symbolize beauty and purity");

if (pluto === "green")
    console.log("Your eyes symbolize intelligence, passion and creativity");

const pluto2 = prompt("Do you have a coat I can borrow?");

if (pluto2 === "yes")
    console.log("Thank you for your generosity");
else 
    console.log("Pardon my rudeness");

const pluto3 = prompt("Do you have a spare cigarette in your pocket?");

if (pluto3 === "yes")
    console.log("Thank you please put it aside I will collect it just now");
else 
    console.log("What a Pity");

const pluto4 = prompt("Do you have a compass in your pocket?");

if (pluto4 === "yes") {
    console.log("Please direct me in the Northern direction");
} else {
    console.log("Thank you I will ask the matron down the road");
}


console.log("Sorry to leave you but I must leave")

sinners = prompt("Can you please rate the conversation we had?,either good or bad?")



if (sinners === "good") {
    console.log("Thank You!")
} 

