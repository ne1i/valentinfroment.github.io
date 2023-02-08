const button = document.getElementById("switch-style");
const link = document.getElementById("style-sheet");

button.addEventListener("click", function() {
  if (link.getAttribute("href") === "style1.css") {
    link.setAttribute("href", "style2.css");
  } else {
    link.setAttribute("href", "style1.css");
  }
});
