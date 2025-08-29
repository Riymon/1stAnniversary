    document.addEventListener("DOMContentLoaded", function() {
        var audio = document.getElementById("background-music");
        audio.currentTime = 41; // Start at 14 seconds
        
        // Try to play the audio on page load
        audio.play().catch(function() {
            // If autoplay is blocked, wait for user interaction
            document.addEventListener("click", function() {
                audio.currentTime = 15; // Ensure it starts at 14 seconds on click
                audio.play();
            }, { once: true });
        });
    });