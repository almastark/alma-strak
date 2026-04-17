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

// PAGE FADE IN

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    document.body.classList.add("page-loaded");
  });
});

// PAGE FADE OUT
document.querySelectorAll('a[href]').forEach(link => {
  link.addEventListener('click', e => {
    const url = link.getAttribute('href');

    if (
      !url ||
      url.startsWith('#') ||
      url.startsWith('http') ||
      link.hasAttribute('target') ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }

    e.preventDefault();
    document.body.classList.remove('page-loaded');

    setTimeout(() => {
      window.location.href = url;
    }, 180);
  });
});

// SCROLL REVEAL

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12
});

revealElements.forEach(el => observer.observe(el));
