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

    // Function to animate the about section when it comes into view
    function animateAboutSection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('about-page--visible');
            }
        });
    }

    // Create an Intersection Observer
    const aboutSectionObserver = new IntersectionObserver(animateAboutSection, {
        root: null, // Viewport
        threshold: 0.2 // 20% of the section is visible
    });

    // Target the about section and observe it
    const aboutSection = document.querySelector('#about');
    aboutSectionObserver.observe(aboutSection);

    // Function to animate the service packages when they come into view
    function animateServicePackages(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('package--visible');
            }
        });
    }

    // Create an Intersection Observer
    const servicePackageObserver = new IntersectionObserver(animateServicePackages, {
        root: null, // Viewport
        threshold: 0.2 // 20% of the section is visible
    });

    // Target the service packages and observe them
    const servicePackages = document.querySelectorAll('.package');
    servicePackages.forEach(package => {
        servicePackageObserver.observe(package);
    });


    function animatePricingSections(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('pricing-table--visible');
            }
        });
    }

    // Create an Intersection Observer for the pricing sections
    const pricingSectionObserver = new IntersectionObserver(animatePricingSections, {
        root: null, // Viewport
        threshold: 0.2 // 20% of the section is visible
    });

    // Target the pricing sections and observe them
    const pricingSections = document.querySelectorAll('.pricing-table');
    pricingSections.forEach(section => {
        pricingSectionObserver.observe(section);
    });


    function animateFeedbackCards(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fd-card--visible');
            }
        });
    }

    // Create an Intersection Observer for the feedback cards
    const feedbackCardObserver = new IntersectionObserver(animateFeedbackCards, {
        root: null, // Viewport
        threshold: 0.2 // 20% of the section is visible
    });

    // Target the feedback cards and observe them
    const feedbackCards = document.querySelectorAll('.feedback .fd-card');
    feedbackCards.forEach(card => {
        feedbackCardObserver.observe(card);
    });


    function checkOtherCategory(select) {
        var otherCategoryInput = document.getElementById("otherCategory");
        if (select.value === "Other") {
            otherCategoryInput.style.display = "block";
            otherCategoryInput.setAttribute("required", "true"); // Mark as required if "Other" is selected
        } else {
            otherCategoryInput.style.display = "none";
            otherCategoryInput.removeAttribute("required"); // Remove required attribute if "Other" is not selected
        }
    }

    function checkOtherPackage(select) {
        var otherPackageInput = document.getElementById("otherPackage");
        if (select.value === "Other") {
            otherPackageInput.style.display = "block";
            otherPackageInput.setAttribute("required", "true"); // Mark as required if "Other" is selected
        } else {
            otherPackageInput.style.display = "none";
            otherPackageInput.removeAttribute("required"); // Remove required attribute if "Other" is not selected
        }
    }