// Featured-album carousel: auto-advance, manual controls, and accessible state.
(() => {
  const carousel = document.querySelector(".hero");
  if (!carousel) return;

  const slides = Array.from(carousel.querySelectorAll(".hero-slide"));
  const dots = Array.from(carousel.querySelectorAll(".hero-dot"));
  const previousButton = carousel.querySelector(".hero-previous");
  const nextButton = carousel.querySelector(".hero-next");
  const currentCount = carousel.querySelector(".hero-current");
  const announcement = carousel.querySelector(".hero-announcement");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const intervalMs = 5000;
  let currentIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));
  let timerId = null;
  let pointerInside = false;
  let focusInside = false;

  function renderSlide(nextIndex) {
    currentIndex = (nextIndex + slides.length) % slides.length;

    slides.forEach((slide, index) => {
      const isActive = index === currentIndex;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
      slide.inert = !isActive;
    });

    dots.forEach((dot, index) => {
      const isActive = index === currentIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", String(isActive));
    });

    currentCount.textContent = String(currentIndex + 1).padStart(2, "0");
    announcement.textContent = `Featured album ${currentIndex + 1} of ${slides.length}: ${slides[currentIndex].querySelector("h1, h2").textContent.replace(/\s+/g, " ").trim()}`;
  }

  function clearTimer() {
    if (timerId !== null) {
      window.clearInterval(timerId);
      timerId = null;
    }
  }

  function startTimer() {
    clearTimer();
    if (reducedMotion.matches || pointerInside || focusInside || document.hidden || slides.length < 2) return;
    timerId = window.setInterval(() => renderSlide(currentIndex + 1), intervalMs);
  }

  function goToSlide(index) {
    renderSlide(index);
    startTimer();
  }

  previousButton.addEventListener("click", () => goToSlide(currentIndex - 1));
  nextButton.addEventListener("click", () => goToSlide(currentIndex + 1));
  dots.forEach((dot, index) => dot.addEventListener("click", () => goToSlide(index)));

  carousel.addEventListener("mouseenter", () => {
    pointerInside = true;
    clearTimer();
  });
  carousel.addEventListener("mouseleave", () => {
    pointerInside = false;
    startTimer();
  });
  carousel.addEventListener("focusin", () => {
    focusInside = true;
    clearTimer();
  });
  carousel.addEventListener("focusout", () => {
    window.setTimeout(() => {
      focusInside = carousel.contains(document.activeElement);
      startTimer();
    }, 0);
  });
  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToSlide(currentIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goToSlide(currentIndex + 1);
    }
  });
  document.addEventListener("visibilitychange", startTimer);
  reducedMotion.addEventListener("change", startTimer);

  renderSlide(currentIndex);
  startTimer();
})();