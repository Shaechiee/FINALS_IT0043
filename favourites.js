// Add an event listener to each heart icon
(function() {
  const heart = document.getElementById('heart');
  heart.addEventListener('click', function() {
    heart.classList.toggle('red');
  });
})();

// Add to Favourites 
document.querySelectorAll('.fa-heart').forEach(heart => {
    heart.addEventListener('click', () => {
      heart.classList.toggle('favourite');
    });
  });

  const navToggler = document.getElementById('nav-toggler');
const navbarNav = document.getElementById('navbarNav');

navToggler.addEventListener('click', () => {
  navToggler.classList.toggle('open');
  navbarNav.classList.toggle('open');
});

// Meet the team Js
const cards = document.querySelectorAll(".grid-item");
cards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    cards.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});