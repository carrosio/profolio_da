const navLinks = document.querySelectorAll('nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSection = document.querySelector(link.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


<p class="text-lg w-full mb-8 md:text-2xl md:mb-8 md:pr-16">
              I am Mauricio Molina, a passionate and ambitious data analyst driven to explore the world of data and conquer new horizons.
              Since childhood, I have had an insatiable curiosity and a relentless pursuit of excellence. I am determined to become the best in my field, pushing boundaries and leaving an indelible mark.
              With my analytical prowess, I transform raw data into valuable insights, empowering decision-makers. My empathetic nature allows me to understand the human element behind the data, creating impactful solutions.
              Beyond data analysis, I embrace challenges, staying ahead of emerging trends. Let's embark on a journey to unlock the limitless possibilities of data and create a transformative future.
            </p>