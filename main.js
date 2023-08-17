let loader = document.getElementById("page-loader");
window.addEventListener(
  "load",
  function (load) {
    window.removeEventListener("load", load, false);
    setTimeout(function () {
      loader.style.display = "none";
    }, 1300);
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
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // sticky navbar
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // remove icon menu
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
// darkmode
let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};
// loadmore
// let loadMoreBtn = document.querySelector("#load-more");
// let currentItem = 3;

// loadMoreBtn.onclick = () => {
//   let boxes = [...document.querySelectorAll(".container .card")];
//   for (let i = currentItem; i < currentItem + 3; i++) {
//     boxes[i].style.display = "inline-block";
//   }
//   currentItem += 3;

//   if (currentItem >= boxes.length) {
//     loadMoreBtn.style.display = "inline-block";
//   }

// };
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

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 1500,
  delay: 100,
});
ScrollReveal().reveal(" .heading,  .profession-container", {
  origin: "top",
});
ScrollReveal().reveal(
  ".services-container, .portfolio-box, .about-content p, .contact form, .service-gif img, .services-img2 img",
  { origin: "bottom" }
);
ScrollReveal().reveal(
  ".home-content h3, .about-content2, .about-content2 p, .services-content2 p, .services-content2 .tags2 , .about-content, .about-content p, .service-content",
  { delay: 100, origin: "left" }
);
ScrollReveal().reveal(" ", { origin: "right" });

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
