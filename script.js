(function () {
  "use strict";

  var STORAGE_KEY = "gg-theme";
  var LANG_KEY = "gg-lang";
  var root = document.documentElement;

  function getPreferredTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    var toggle = document.querySelector(".theme-toggle");
    if (toggle) toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  // Apply immediately to avoid flash of wrong theme.
  applyTheme(getPreferredTheme());

  function getPreferredLang() {
    var saved = localStorage.getItem(LANG_KEY);
    return saved === "fr" ? "fr" : "en";
  }

  function applyLang(lang) {
    root.setAttribute("lang", lang);

    var toggle = document.querySelector(".lang-toggle");
    if (toggle) {
      toggle.textContent = lang === "fr" ? "EN" : "FR";
      toggle.setAttribute("aria-label", lang === "fr" ? "Switch to English" : "Passer en français");
    }

    // Plain-text elements: cache original English on first swap, then toggle.
    var textEls = document.querySelectorAll("[data-fr]");
    for (var i = 0; i < textEls.length; i++) {
      var el = textEls[i];
      if (!el.hasAttribute("data-en")) {
        el.setAttribute("data-en", el.textContent);
      }
      el.textContent = lang === "fr" ? el.getAttribute("data-fr") : el.getAttribute("data-en");
    }

    // Elements with embedded markup (links, emphasis) use innerHTML swap instead.
    var htmlEls = document.querySelectorAll("[data-fr-html]");
    for (var j = 0; j < htmlEls.length; j++) {
      var elh = htmlEls[j];
      if (!elh.hasAttribute("data-en-html")) {
        elh.setAttribute("data-en-html", elh.innerHTML);
      }
      elh.innerHTML = lang === "fr" ? elh.getAttribute("data-fr-html") : elh.getAttribute("data-en-html");
    }

    // Links whose target file differs by language (e.g. an EN vs FR resume PDF).
    var hrefEls = document.querySelectorAll("[data-fr-href]");
    for (var k = 0; k < hrefEls.length; k++) {
      var elr = hrefEls[k];
      if (!elr.hasAttribute("data-en-href")) {
        elr.setAttribute("data-en-href", elr.getAttribute("href"));
      }
      elr.setAttribute("href", lang === "fr" ? elr.getAttribute("data-fr-href") : elr.getAttribute("data-en-href"));
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var current = root.getAttribute("data-theme");
        var next = current === "dark" ? "light" : "dark";
        applyTheme(next);
        localStorage.setItem(STORAGE_KEY, next);
      });
    }

    var navToggle = document.querySelector(".nav-toggle");
    var header = document.querySelector(".site-header");
    if (navToggle && header) {
      navToggle.addEventListener("click", function () {
        var open = header.classList.toggle("nav-open");
        navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    applyLang(getPreferredLang());

    var langToggle = document.querySelector(".lang-toggle");
    if (langToggle) {
      langToggle.addEventListener("click", function () {
        var current = root.getAttribute("lang") === "fr" ? "fr" : "en";
        var next = current === "fr" ? "en" : "fr";
        applyLang(next);
        localStorage.setItem(LANG_KEY, next);
      });
    }
  });
})();
