let loader = document.getElementById("page-loader");
window.addEventListener(
  "load",
  function (load) {
    window.removeEventListener("load", load, false);
    setTimeout(function () {
      loader.style.display = "none";
    }, 300);
  },
  false
);
//menu icon
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
//scroll
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");


window.onscroll = () => {
  const top = window.scrollY;
  const offset = 150;
  
  sections.forEach((sec) => {
    const secTop = sec.offsetTop;
    const secHeight = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= secTop - offset && top < secTop + secHeight - offset) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document.querySelector(`header nav a[href*="${id}"]`).classList.add("active");
    }
  });

  const header = document.querySelector(".header");
  header.classList.toggle("sticky", top > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
// darkmode
let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

let loadMoreBtn = document.querySelector("#load-more");
let currentItems = 3;

loadMoreBtn.addEventListener("click", () => {
  const elementList = [...document.querySelectorAll(".container .card")];
  for (let i = currentItems; i < currentItems + 3; i++) {
    if (elementList[i]) {
      elementList[i].style.display = "inline-block";
    }
  }
  currentItems += 3;
  // hide load button after fully
  if (currentItems >= elementList.length) event.target.classList.add("loaded");
});

// ScrollReveal({
//   reset: true,
//   distance: "60px",
//   duration: 1000,
//   delay: 100,
// });
// ScrollReveal().reveal("", {
//   origin: "top",
// });
// ScrollReveal().reveal(
//   " .portfolio-box, .about-content p, .contact form, .service-gif img, .services-img2 img",
//   { origin: "bottom" }
// );
// ScrollReveal().reveal(
//   ".home-content h3, .about-content2, .about-content2 p, .services-content2 p, .services-content2 .tags2 , .about-content, .about-content p, .service-content p, .service-content .tags ",
//   { delay: 100, origin: "left" }
// );
// ScrollReveal().reveal(" ", { origin: "right" });

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_ut2yglo";
  const templateID = "template_kb1fcit";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!!");
    })
    .catch((err) => console.log(err));
}

const cards = document.querySelectorAll('.image-card img');
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.close-btn');
  let scale = 1;

  cards.forEach(card => {
    card.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = card.src;
      scale = 1;
      modalImg.style.transform = `scale(${scale})`;
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });

  modalImg.addEventListener('wheel', (e) => {
    e.preventDefault();
    scale += e.deltaY * -0.001;
    scale = Math.min(Math.max(0.5, scale), 3);
    modalImg.style.transform = `scale(${scale})`;
  });