document.addEventListener('DOMContentLoaded', function () {
    const snowContainer = document.querySelector('.snow-container');

    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';

      // Randomly choose the keyframe for each snowflake
      const keyframes = ['fall', 'fall-left', 'fall-right'];
      const randomKeyframe = keyframes[Math.floor(Math.random() * keyframes.length)];
      snowflake.style.animationName = randomKeyframe;

      // Apply additional styles for size and speed variations
      if (Math.random() < 0.3) {
        snowflake.classList.add('small');
      } else if (Math.random() < 0.6) {
        snowflake.classList.add('large');
      }

      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.top = `-${Math.random() * 10}vh`; /* Set initial top position above the visible area */

      snowContainer.appendChild(snowflake);

      // Remove the snowflake when it reaches the bottom
      snowflake.addEventListener('animationiteration', () => {
        snowContainer.removeChild(snowflake);
      });
    }

    // Create a snowflake every 100 milliseconds (adjust the interval as needed)
    setInterval(createSnowflake, 30);
  });