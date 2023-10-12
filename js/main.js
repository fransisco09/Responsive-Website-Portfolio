// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};


const text = "Daniel Fransisko Sitio";

function typeWriter() {
    const typedText = document.getElementById('typed-text');
    const cursor = document.querySelector('.cursor');

    let i = 0;
    function type() {
        if (i < text.length) {
            typedText.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, Math.random() * 200); // Waktu delay random untuk efek typing yang alami
        } else {
            cursor.style.display = 'none';
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', typeWriter);


