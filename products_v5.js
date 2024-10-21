// Wait for DOM content to be loaded
document.addEventListener("DOMContentLoaded", () => {
  // Remove 'notFlash' attribute
  document
    .querySelectorAll("[notFlash]")
    .forEach((el) => el.removeAttribute("notFlash"));
  
  // Initialize GSAP animations
  initGSAP();
});

function initGSAP() {
  const defaults = {
    stagger: 0.07,
    duration: 0.5,
    durationFast: 0.35,
    durationNavbar: 0.25,
    ease: "power1.out",
  };

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
  
  gsap.from("[animation=hero_img]", {
    opacity: 0,
    y: "30%",
    duration: defaults.durationFast,
    ease: defaults.ease,
    scrollTrigger: {
      trigger: $(this),
      start: center top,
    }
  }
}
