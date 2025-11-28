// Toggle between Light Mode and Dark Mode

const toggleBtn = document.getElementById("theme-button");
const toggleIcon = document.getElementById("switch-theme-icon");
const used_theme = localStorage.getItem("theme");

let sun_loc = "assets/sun.svg";
let moon_loc = "assets/moon.svg";

if (window.location.pathname.includes("/page") == true) {
  sun_loc = "../assets/sun.svg";
  moon_loc = "../assets/moon.svg";
}
console.log(moon_loc);

// Load saved theme
if (used_theme === "dark") {
  document.body.classList.add("dark-mode");

  // Configure Button and Icon
  toggleIcon.src = used_theme ? sun_loc : moon_loc;
  toggleIcon.style.filter = used_theme
    ? "invert(1) grayscale(1)"
    : "invert(0) grayscale(1)";
}

// Toggle theme when button is clicked
toggleBtn.addEventListener("click", () => {
  document.body.style.transitionDuration = ".4s";
  const dark = document.body.classList.toggle("dark-mode");

  console.log("Dark Mode " + (dark ? "Enabled" : "Disabled"));

  // Configure Button and Icon
  toggleIcon.src = dark ? sun_loc : moon_loc;
  toggleIcon.style.filter = dark
    ? "invert(1) grayscale(1)"
    : "invert(0) grayscale(1)";

  // Save the current theme
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
