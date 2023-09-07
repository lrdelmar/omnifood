// console.log("Hello World!");

// creating the constant
// const myName = "Lauren";
// printing to console
// console.log(myName);

// selecting the html class variable
// const h1 = document.querySelector(".heading-primary");
// console.log(h1);

// edit attributes
// h1.textContent = myName;
// h1.style.backgroundColor = "red";
// h1.style.padding = "5rem";

// listen for an event
// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

// automatically sets current year in footer
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// makes the mobile nav open/close
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

// toggles the mobile navigation menu
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// implement smooth scrolling on links
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // if href is # scroll to the top smoothly
    if (href === "#")
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });

    // if href is not # but starts with # scroll smoothly
    if (href != "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behaviour: "smooth" });

      // close the mobile navigation
      if (link.classList.contains("main-nav-link"))
        headerEl.classList.toggle("nav-open");
    }
  });
});

// sticky navigation bar

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    // add sticky class if the section-hero is not intersecting
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    // remove the sticky class if the section-hero is intersecting
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // null means the viewport
    root: null,
    // when viewport is completly out of view
    threshold: 0,
    // adjust the start point of the sticky nav by it's height
    rootMargin: "-48px",
  }
);
// observe when the section-hero element is within view
obs.observe(sectionHeroEl);

// CODE NOT NECESSARY ANYMORE (current safari version now supports flexbox gap) will leave active for older versions
///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
