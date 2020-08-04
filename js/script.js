window.addEventListener("load", function () {
  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);

  document.querySelector(".preloader").classList.add("opacity-0");
});

function scrollToTop() {
  $(window).scrollTop(0);
}

// Portfolio Item Filter

const filterContainer = document.querySelector(".portfolio-filter"),
  filterBtns = filterContainer.children,
  totalfilterBtn = filterBtns.length,
  portfolioItems = document.querySelectorAll(".portfolio-item"),
  totalPortfolioItem = portfolioItems.length;

for (let i = 0; i < totalfilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");
    for (let k = 0; k < totalPortfolioItem; k++) {
      if (filterValue === portfolioItems[k].getAttribute("data-category")) {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      } else {
        portfolioItems[k].classList.remove("show");
        portfolioItems[k].classList.add("hide");
      }
      if (filterValue === "all") {
        portfolioItems[k].classList.remove("hide");
        portfolioItems[k].classList.add("show");
      }
    }
  });
}

// Portfolio Item Filter End

// Portfolio LightBox

const lightbox = document.querySelector(".lightbox"),
  lightboxImg = document.querySelector(".lightbox-img"),
  lightboxClose = lightbox.querySelector(".lightbox-close"),
  lightboxText = document.querySelector(".caption-text"),
  lightboxCounter = document.querySelector(".caption-counter");
let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
  portfolioItems[i].addEventListener("click", function () {
    itemIndex = i;
    changeItem();
    toggleLightBox();
  });
}
function nextItem() {
  if (itemIndex === totalPortfolioItem - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
}
function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalPortfolioItem - 1;
  } else {
    itemIndex--;
  }
  changeItem();
}

function toggleLightBox() {
  lightbox.classList.toggle("open");
}

function changeItem() {
  imgSrc = portfolioItems[itemIndex]
    .querySelector(".portfolio-img img")
    .getAttribute("src");
  lightboxImg.src = imgSrc;
  lightboxText.innerHTML = portfolioItems[itemIndex].querySelector(
    "h4"
  ).innerHTML;
  lightboxCounter.innerHTML = itemIndex + 1 + " of " + totalPortfolioItem;
}

// Portfolio LightBox Close
lightbox.addEventListener("click", function () {
  if (event.target === lightboxClose || event.target == lightbox) {
    toggleLightBox();
  }
});

// Side Nav
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section");
totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    //   removes class = back-section
    removeBackSectionClass();

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        //   add class = back-section
        addBackSectionClass(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
    showSection(this);

    if (window.innerWidth < 1200) {
      sideSectionTogglerBtn();
    }
  });
}

function removeBackSectionClass() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}
function addBackSectionClass(num) {
  allSection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");

  showSection(this);
  updateNav(this);
  removeBackSectionClass();
  addBackSectionClass(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  side = document.querySelector(".side");

navTogglerBtn.addEventListener("click", () => {
  sideSectionTogglerBtn();
});

function sideSectionTogglerBtn() {
  side.classList.toggle("opens"), navTogglerBtn.classList.toggle("opens");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("opens");
  }
}

function TopAbout() {
  let element = document.getElementById("about-top");
  element.scrollIntoView();
}
function TopServices() {
  let element = document.getElementById("services-top");
  element.scrollIntoView();
}
function TopPortfolio() {
  let element = document.getElementById("portfolio-top");
  element.scrollIntoView();
}
function TopTestimonial() {
  let element = document.getElementById("testimonials-top");
  element.scrollIntoView();
}
function TopContact() {
  let element = document.getElementById("contact-top");
  element.scrollIntoView();
}

function validation() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;
  let error_message = document.getElementById("error_message");
  let text;

  document.getElementById("error_message").style.padding = "10px";
  document.getElementById("error_message").style.borderRadius = "25px";
  document.getElementById("error_message").style.color = "#fdf9ff";
  document.getElementById("error_message").style.fontWeight = "500";

  if (name.length < 3) {
    text = "Please enter your name";
    error_message.innerHTML = text;
    return false;
  } else if (email.indexOf("@") == -1 || email.length < 10) {
    text = "Please enter a email";
    error_message.innerHTML = text;
    return false;
  } else if (subject.length < 3) {
    text = "Please enter the subject";
    error_message.innerHTML = text;
    return false;
  } else if (message.length === 0) {
    text = "Please enter your message";
    error_message.innerHTML = text;
    return false;
  }
}
