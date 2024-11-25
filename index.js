AOS.init({
    duration: 1200,
  })

document.addEventListener('DOMContentLoaded', () => {
  const starsContainer = document.querySelector('.stars');
  const numStars = 100; // Количество звезд

  for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      star.style.animationDuration = `${1 + Math.random()}s`;
      starsContainer.appendChild(star);
  }
});
