let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); 
}

// Second navbar
function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.down-arrow')) {
      var dropdowns = document.getElementsByClassName("sub-menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  

// Product container start
const sliders = document.querySelectorAll('.Pslider');
const prevBtns = document.querySelectorAll('.prev');
const nextBtns = document.querySelectorAll('.next');

sliders.forEach((slider, index) => {
    const prevBtn = prevBtns[index];
    const nextBtn = nextBtns[index];

    let slideIndex = 0;

    prevBtn.addEventListener('click', () => {
        slideIndex -= 4;
        if (slideIndex < 0) {
            slideIndex = 0;
        }
        slider.style.transform = `translateX(-${slideIndex * 25}%)`;
    });

    nextBtn.addEventListener('click', () => {
        slideIndex += 4;
        if (slideIndex > 4) {
            slideIndex = 4;
        }
        slider.style.transform = `translateX(-${slideIndex * 25}%)`;
    });
});





document.querySelectorAll('.custom-select').forEach(function(customSelect) {
    const dropdown = customSelect.nextElementSibling;

    customSelect.addEventListener('click', function() {
        dropdown.classList.toggle('open');
    });

    dropdown.querySelectorAll('.option').forEach(function(option) {
        option.addEventListener('click', function() {
            customSelect.querySelector('.selected-option').textContent = option.querySelector('.item').textContent;
            dropdown.classList.remove('open');
        });
    });
});

document.addEventListener('click', function(event) {
    document.querySelectorAll('.dropdown').forEach(function(dropdown) {
        if (!event.target.closest('.select-container')) {
            dropdown.classList.remove('open');
        }
    });
});

// last slider
let customSlideIndex = 0;

function showCustomSlide(n) {
    const slides = document.querySelectorAll('.custom-slider img');
    if (n >= slides.length) {
        customSlideIndex = 0;
    } else if (n < 0) {
        customSlideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[customSlideIndex].style.display = 'block';
}

function customNextSlide() {
    customSlideIndex++;
    showCustomSlide(customSlideIndex);
}

function customPrevSlide() {
    customSlideIndex--;
    showCustomSlide(customSlideIndex);
}

showCustomSlide(customSlideIndex);

setInterval(() => {
    customNextSlide();
}, 3000);



