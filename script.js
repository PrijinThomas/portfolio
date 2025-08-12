document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggleBtn = document.getElementById('themeToggleBtn');
  const icon = toggleBtn.querySelector('i');

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });
});


  const text = "Web Developer | Python | Full Stack Developer";
  const speed = 60; // typing speed in ms
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typed-text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      document.getElementById("typed-text").style.borderRight = "none"; // remove cursor after typing
    }
  }

  window.onload = typeWriter;


 
 // main.js
document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
});
