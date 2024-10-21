// Wait for DOM content to be loaded
document.addEventListener("DOMContentLoaded", () => {
  // Remove 'notFlash' attribute
  document
    .querySelectorAll("[notFlash]")
    .forEach((el) => el.removeAttribute("notFlash"));

  // Check if the device is desktop
  if (window.matchMedia("(min-width: 1024px)").matches) {
    // Initialize GSAP animations only for desktop
    initGSAP();
  }
});

function initGSAP() {
  const defaults = {
    stagger: 0.07,
    duration: 0.5,
    durationFast: 0.35,
    durationNavbar: 0.25,
    ease: "power1.out",
  };

  // Hero Video Animation
  gsap.to("[animation=vid01]", {
    scale: 0.75,
    borderRadius: "100%",
    ease: defaults.ease,
    scrollTrigger: {
      trigger: "[trigger=tr01]",
      start: "top top",
      end: "center top",
      scrub: true,
    },
  });

  // Hero Heading & Paragraph Animation
  const heroTl = gsap.timeline({ delay: 0.25 });
  ["hero_h", "hero_p"].forEach((selector) => {
    heroTl.from(`[animation=${selector}] .line`, {
      y: "100%",
      opacity: 0,
      duration: defaults.durationFast,
      ease: defaults.ease,
      stagger: defaults.stagger,
    });
  });

  // About Timeline and Animations
  const s02Tl = gsap.timeline({
    scrollTrigger: {
      trigger: "[trigger=nav]",
      start: "top top",
    },
  });

  // Navbar Animation
  gsap.from(".navbar-w", {
    y: "-100%",
    duration: defaults.durationNavbar,
    ease: defaults.ease,
    scrollTrigger: {
      trigger: "[trigger=nav]",
      start: "center top",
      toggleActions: "play none none reverse",
    },
  });

  // Reusable animation function
  const animateLines = (selector, trigger, start = "center bottom") => {
    gsap.from(`[animation=${selector}] .line`, {
      y: "100%",
      opacity: 0,
      duration: defaults.durationFast,
      ease: defaults.ease,
      stagger: defaults.stagger,
      scrollTrigger: {
        trigger: `[trigger=${trigger}]`,
        start: start,
      },
    });
  };

  // Section 03 Animations
  animateLines("s03_h", "tr03");

  const s03Tl = gsap.timeline({
    scrollTrigger: {
      trigger: "[trigger=tr03]",
      start: "center center",
    },
  });

  s03Tl
    .from("[animation=s03_p] .line", {
      y: "100%",
      opacity: 0,
      duration: defaults.durationFast,
      ease: defaults.ease,
      stagger: defaults.stagger,
    })
    .from(
      "[animation=s03_link] .line",
      {
        y: "100%",
        opacity: 0,
        duration: defaults.durationFast,
        ease: defaults.ease,
        stagger: defaults.stagger,
      },
      1
    )
    .from(
      "[animation=s03_line]",
      {
        width: "0%",
        duration: defaults.durationFast,
      },
      1
    )
    .from(
      "[animation=img01]",
      {
        borderBottomLeftRadius: "0%",
        duration: defaults.duration,
        ease: defaults.ease,
      },
      1
    );

  // Section 04 Animations
  const s04Tl = gsap.timeline({
    scrollTrigger: {
      trigger: "[trigger=tr04]",
      start: "40% bottom",
    },
  });

  ["s04_h", "s04_h2", "s04_p"].forEach((selector) => {
    s04Tl.from(
      `[animation=${selector}] ${selector.includes("h2") ? ".char" : ".line"}`,
      {
        y: "100%",
        opacity: 0,
        duration: defaults.durationFast,
        ease: defaults.ease,
        stagger: defaults.stagger,
      }
    );
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "[trigger=tr04]",
        start: "70% bottom",
      },
    })
    .from("[animation=s04_img]", {
      scale: 0.5,
      borderRadius: "100%",
      duration: defaults.durationFast,
      ease: "power1.in",
    });

  // Section 05 Animations
  animateLines("s05_h", "tr05");

  const s05Tl = gsap.timeline({
    scrollTrigger: {
      trigger: "[trigger=tr05]",
      start: "center center",
    },
  });

  s05Tl
    .from("[animation=s05_p] .line", {
      y: "100%",
      opacity: 0,
      duration: defaults.durationFast,
      ease: defaults.ease,
      stagger: defaults.stagger,
    })
    .from(
      "[animation=s05_link] .line",
      {
        y: "100%",
        opacity: 0,
        duration: defaults.durationFast,
        ease: defaults.ease,
        stagger: defaults.stagger,
      },
      0
    )
    .from(
      "[animation=s05_line]",
      {
        width: "0%",
        duration: defaults.durationFast,
      },
      0
    )
    .from(
      "[animation=s05_img]",
      {
        borderTopRightRadius: "0%",
        duration: defaults.duration,
        ease: defaults.ease,
      },
      0
    );
}

// Slick Slider initialization (moved outside of DOMContentLoaded for performance)
$("#material_slick").slick({
  infinite: true,
  slidesToShow: 1,
  swipe: true,
  arrows: false,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 1000,
});

// Text Splitter (moved outside of DOMContentLoaded for performance)
new SplitType("[split]", {
  types: "lines, words, chars",
  tagName: "span",
});
