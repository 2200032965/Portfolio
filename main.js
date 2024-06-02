const numStars = 1000; // Number of stars
const starField = document.querySelector(".star-field");
const totalAnimationDuration = 10; // Total animation duration in seconds

// Create the stars
for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    // Random size between 1px and 3px
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Random opacity between 0 and 1 for each star
    star.style.opacity = Math.random() * 0.5;

    // Random twinkling duration between 1 and 4 seconds for each star
    star.style.animationDuration = `${Math.random() * 3 + 1}s`;

    // Random delay between 0 and 10 seconds for each star
    star.style.animationDelay = `${Math.random() * totalAnimationDuration}s`;

    // Randomly select color for 10% of the stars
    if (Math.random() < 0.1) {
        const colors = ["yellow", "blue", "green", "purple", "pink"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        star.style.backgroundColor = randomColor;
    }

    starField.appendChild(star);
}