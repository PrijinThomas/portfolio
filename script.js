document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("themeToggleSwitch");
  const body = document.body;

  toggleSwitch.addEventListener("change", () => {
    body.classList.toggle("dark-mode", toggleSwitch.checked);
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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const alertBox = document.getElementById("alertSuccess");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/prijinthomas2003@gmail.com", {
      method: "POST",
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success === "true") {
        alertBox.classList.remove("d-none");
        form.reset();
        setTimeout(() => {
          alertBox.classList.add("d-none");
        }, 4000);
      }
    })
    .catch(error => console.error("Error:", error));
  });
});

