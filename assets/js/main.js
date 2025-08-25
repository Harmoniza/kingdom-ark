/* =========================
   Kingdom Ark – Core UI
   ========================= */

// Set current year in any footer with #year
(function setYear() {
  var el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
})();

// Scroll reveal for elements with .reveal or .fade-in
(function scrollReveal() {
  var items = [].slice.call(document.querySelectorAll(".reveal, .fade-in"));
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) {
      el.classList.add("reveal-visible");
    });
    return;
  }
  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach(function (el) {
    io.observe(el);
  });
})();

// Header subtle shrink on scroll
(function headerShrink() {
  var header = document.querySelector(".site-header");
  if (!header) return;
  var last = 0;
  window.addEventListener("scroll", function () {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (y > 8 && last <= 8) {
      header.style.padding = ".55rem .8rem";
      header.style.background =
        "linear-gradient(180deg, rgba(10,18,32,.92), rgba(10,18,32,.65))";
    }
    if (y <= 8 && last > 8) {
      header.style.padding = ".85rem 1rem";
      header.style.background =
        "linear-gradient(180deg, rgba(10,18,32,.88), rgba(10,18,32,.55))";
    }
    last = y;
  });
})();

// Smooth anchor scroll enhancement
(function smoothAnchors() {
  var links = [].slice.call(document.querySelectorAll('a[href^="#"]'));
  links.forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href").slice(1);
      var target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", "#" + id);
    });
  });
})();

// Button ripple effect
(function ripple() {
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".btn");
    if (!btn) return;
    var circle = document.createElement("span");
    var d = Math.max(btn.clientWidth, btn.clientHeight);
    circle.style.width = circle.style.height = d + "px";
    var rect = btn.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left - d / 2 + "px";
    circle.style.top = e.clientY - rect.top - d / 2 + "px";
    circle.className = "ripple";
    btn.appendChild(circle);
    setTimeout(function () {
      circle.remove();
    }, 600);
  });
})();
(function injectRippleStyle() {
  var css =
    ".btn{position:relative;overflow:hidden} .btn .ripple{position:absolute;border-radius:50%;transform:scale(0);animation:rip .6s ease-out;background:rgba(255,255,255,.55);mix-blend-mode:overlay;} @keyframes rip{to{transform:scale(2.4);opacity:0}}";
  var s = document.createElement("style");
  s.textContent = css;
  document.head.appendChild(s);
})();

// Back-to-top button
(function backToTop() {
  var btn = document.getElementById("back-to-top");
  if (!btn) return;
  btn.style.display = "none";

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

// Nav toggle for mobile
(function navToggle() {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", function () {
    links.classList.toggle("open");
  });
})();
