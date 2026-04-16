document.addEventListener("DOMContentLoaded", () => {
  // HOME HEADER
  const topbarInner = document.querySelector(".topbar-inner");
  const homeToggle = document.querySelector(".nav-toggle");
  const homeNav = document.querySelector(".nav");

  if (topbarInner && homeToggle && homeNav) {
    homeToggle.addEventListener("click", () => {
      const isOpen = topbarInner.classList.toggle("is-open");
      homeToggle.setAttribute("aria-expanded", String(isOpen));
    });

    homeNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        topbarInner.classList.remove("is-open");
        homeToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // INNER PAGES HEADER
  const siteNav = document.querySelector(".site-nav");
  const innerToggle = document.querySelector(".site-nav__toggle");
  const innerLinks = document.querySelector(".site-nav__links");

  if (siteNav && innerToggle && innerLinks) {
    innerToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("is-open");
      innerToggle.setAttribute("aria-expanded", String(isOpen));
    });

    innerLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("is-open");
        innerToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});
