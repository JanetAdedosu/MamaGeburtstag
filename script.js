// script.js
document.getElementById('surprise-button').addEventListener('click', function () {
    // Play birthday audio
    const birthdayAudio = document.getElementById('birthday-audio');
    birthdayAudio.play();
  
    // Show surprise GIF
    const surpriseGif = document.getElementById('surprise-gif');
    surpriseGif.style.display = 'block';
  
    // Play extra audio after a delay
    setTimeout(() => {
      const extraAudio = document.getElementById('extra-audio');
      extraAudio.play();
    }, 3000); // 3 seconds delay
  
    // Change message text
    document.getElementById('message').textContent = 'Surprise! Happy Birthday! 🎉';
  });
  // script.js

