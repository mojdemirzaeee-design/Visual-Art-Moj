document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var lightbox = document.querySelector("[data-lightbox]");
  if (!lightbox) return;

  var lightboxInner = lightbox.querySelector(".lightbox-inner");
  var lightboxCaption = lightbox.querySelector(".lightbox-caption");
  var closeBtn = lightbox.querySelector(".lightbox-close");

  function openLightbox(tile) {
    var label = tile.getAttribute("data-label") || "";
    var img = tile.querySelector("img");

    lightboxInner.querySelectorAll("img, .placeholder-tile").forEach(function (el) {
      el.remove();
    });

    if (img) {
      var clone = img.cloneNode(true);
      lightboxInner.insertBefore(clone, lightboxCaption);
    } else {
      var div = document.createElement("div");
      div.className = "placeholder-tile";
      lightboxInner.insertBefore(div, lightboxCaption);
    }

    lightboxCaption.textContent = label;
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".gallery-grid [data-label], .gallery-grid img").forEach(function (el) {
    el.addEventListener("click", function () {
      openLightbox(el.closest("[data-label]") || el.closest("figure") || el);
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });
});
