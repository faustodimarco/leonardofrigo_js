function isDesktop() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

// Text Splitter
if (isDesktop()) {
  let typeSplit = new SplitType("[split]", {
    types: "lines, words, chars",
    tagName: "span",
  });

  // Text Blur Reveal About
  gsap.fromTo(
    "[animation=about01] .char",
    {
      filter: "blur(10px)",
      opacity: 0.5,
      scaleY: 0.1,
      scaleX: 1.8,
    },
    {
      filter: "blur(0px)",
      opacity: 1,
      scaleY: 1,
      scaleX: 1,
      ease: "power2.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: "[trigger=about01]",
        start: "center center",
        end: "bottom top",
        //markers:true,
        scrub: 1,
        onEnter: () => ScrollTrigger.refresh(),
      },
    }
  );
}
