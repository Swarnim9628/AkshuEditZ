const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen
    ? 'bi bi-x'
    : 'bi bi-list';
}
const container = document.querySelector('.cards-container');
let currentIndex = 0;

function nextCard() {
  currentIndex = (currentIndex + 1) % container.children.length;
  updateCarousel();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + container.children.length) % container.children.length;
  updateCarousel();
}

function updateCarousel() {
  const cardWidth = container.children[0].offsetWidth;
  container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
