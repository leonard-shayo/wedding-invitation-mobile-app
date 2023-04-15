// Query for the toggle that is used to change between themes
const toggle = document.querySelector("#themeToggle");

console.log(toggle)

// Listen for the toggle check/uncheck to toggle the dark class on the <body>
toggle.addEventListener("ionChange", (ev) => {
  console.log("changed");
  console.log(toggle);


  document.body.classList.toggle("dark", ev.detail.checked);
});

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

console.log(prefersDark);


// Listen for changes to the prefers-color-scheme media query
prefersDark.addEventListener((e) => checkToggle(e.matches));

// Called when the app loads
function loadApp() {
  checkToggle(prefersDark.matches);
}

// Called by the media query to check/uncheck the toggle
function checkToggle(shouldCheck) {
  toggle.checked = shouldCheck;
}

export default loadApp;
