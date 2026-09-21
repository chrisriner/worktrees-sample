// Site-wide JavaScript. Every page loads this one file.

// Fill in the current year in the footer, if the page has one.
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Highlight the nav link matching the page currently being viewed. This means
// a new page only needs its <a> added to the nav; the class is applied here.
const currentPage = window.location.pathname.split("/").pop() || "index.html";
for (const link of document.querySelectorAll(".site-nav a")) {
  const target = link.getAttribute("href");
  link.classList.toggle("active", target === currentPage);
}
