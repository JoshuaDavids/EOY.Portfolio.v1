const links = document.querySelectorAll(".alternate-style"),
  totalLinks = links.length;

function setActiveStyle(color) {
  for (let i = 0; i < totalLinks; i++) {
    if (color === links[i].getAttribute("title")) {
      links[i].removeAttribute("disabled");
    } else {
      links[i].setAttribute("disabled", "true");
    }
  }
}

// Body Skin

const bodySkin = document.querySelectorAll(".body-skin"),
  totalBodySkin = bodySkin.length;
for (let i = 0; i < totalBodySkin; i++) {
  bodySkin[i].addEventListener("change", function () {
    if (this.value === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  });
}

document.querySelector(".toggle").addEventListener("click", () => {
  document.querySelector(".style-swapper").classList.toggle("open");
});
