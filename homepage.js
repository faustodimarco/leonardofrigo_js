// ---------------------------------------------------- // Text Splitter

let typeSplit = new SplitType("[split]", {
  types: "lines, words, chars",
  tagName: "span",
});

// ---------------------------------------------------- // Slick Slider

$("#material_slick").slick({
  infinite: true,
  //variableWidth: true,
  slidesToShow: 1,
  swipe: true,
  arrows: false,
  swipeToSlide: true,
  //focusOnSelect: true,
  //centerMode: true,
  autoplay: true,
  autoplaySpeed: 1000,
});

// ---------------------------------------------------- // Hero Video Animation

gsap.to("[animation=vid01]", {
  scale: 0.75,
  borderRadius: "100%",
  ease: "power1.out",
  scrollTrigger: {
    trigger: "[trigger=tr01]",
    start: "top top",
    end: "center top",
    scrub: true,
  },
});

// ---------------------------------------------------- // Hero Heading & Paragraph Animation

var heroTl = gsap.timeline({ delay: 0.1 });

heroTl.from("[animation=hero_h] .line", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "power1.out",
  stagger: 0.1,
});

heroTl.from("[animation=hero_p] .line", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "power1.out",
  stagger: 0.1,
});

// ---------------------------------------------------- // About Timeline

var s02Tl = gsap.timeline({
  scrollTrigger: {
    trigger: "[trigger=nav]",
    start: "top top",
  },
});

// ---------------------------------------------------- // About Border Animation

s02Tl.fromTo(
  "[animation=brd01]",
  {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
  },
  {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    duration: 0.5,
    ease: "power1.out",
  },
  0
);

// ---------------------------------------------------- // Navbar Animation & Color

s02Tl.from(".navbar-w", {
  y: "-100%",
  duration: 0.25,
  ease: "power1.out",
});

$("section[data-theme]").each(function () {
  let theme = 1;
  if ($(this).attr("data-theme") === "dark") theme = 2;

  ScrollTrigger.create({
    trigger: $(this),
    start: "top top",
    end: "bottom top",
    onToggle: ({ self, isActive }) => {
      if (isActive)
        gsap.to(".navbar", { ...colorThemes[theme], duration: 0.3 });
    },
  });
});

// ---------------------------------------------------- // Section 03 Heading Animation

gsap.from("[animation=s03_h] .line", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "power1.out",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "[trigger=tr03]",
    start: "center bottom",
  },
});

// ---------------------------------------------------- // Section 03 Timeline

var s03Tl = gsap.timeline({
  scrollTrigger: {
    trigger: "[trigger=tr03]",
    start: "center center",
  },
});

// ---------------------------------------------------- // Section 03 Paragraph Animation

s03Tl.from("[animation=s03_p] .line", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "power1.out",
  stagger: 0.1,
});

// ---------------------------------------------------- // Section 03 Link Animation

s03Tl.from(
  "[animation=s03_link] .char",
  {
    y: "100%",
    opacity: 0,
    duration: 0.25,
    ease: "power1.out",
    stagger: 0.05,
  },
  1
);

s03Tl.from(
  "[animation=s03_line]",
  {
    width: "0%",
    duration: 0.25,
  },
  1
);

// ---------------------------------------------------- // Section 03 Image Corner Animation

s03Tl.from(
  "[animation=img01]",
  {
    borderBottomLeftRadius: "0%",
    duration: 1,
    ease: "power1.out",
  },
  1
);

// ---------------------------------------------------- // Section 04 Timeline

var s04Tl = gsap.timeline({
  scrollTrigger: {
    trigger: "[trigger=tr04]",
    start: "40% bottom",
  },
});

// ---------------------------------------------------- // Section 04 Heading

s04Tl.from("[animation=s04_h] .line", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "power1.out",
  stagger: 0.1,
});

s04Tl.from("[animation=s04_h2] .char", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "power1.out",
  stagger: 0.1,
});

// ---------------------------------------------------- // Section 04 Paragraph

s04Tl.from("[animation=s04_p] .line", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "power1.out",
  stagger: 0.1,
});

// ---------------------------------------------------- // Section 04 imageElements

var s04imgTl = gsap.timeline({
  scrollTrigger: {
    trigger: "[trigger=tr04]",
    start: "70% bottom",
    stagger: 0.5,
  },
});

s04imgTl.from("[animation=s04_img]", {
  scale: 0.5,
  duration: 0.5,
  ease: "power1.in",
});

s04imgTl.from("[animation=s04_img]", {
  borderRadius: "100%",
  duration: 0.5,
  ease: "power1.in",
});

// ---------------------------------------------------- // Section 05 Heading Animation

gsap.from("[animation=s05_h] .line", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "power1.out",
  stagger: 0.1,
  scrollTrigger: {
    trigger: "[trigger=tr05]",
    start: "center bottom",
  },
});

// ---------------------------------------------------- // Section 05 Timeline

var s05Tl = gsap.timeline({
  scrollTrigger: {
    trigger: "[trigger=tr05]",
    start: "center center",
  },
});

// ---------------------------------------------------- // Section 05 Paragraph Animation

s05Tl.from("[animation=s05_p] .line", {
  y: "100%",
  opacity: 0,
  duration: 0.5,
  ease: "power1.out",
  stagger: 0.1,
});

// ---------------------------------------------------- // Section 05 Link Animation

s05Tl.from(
  "[animation=s05_link] .char",
  {
    y: "100%",
    opacity: 0,
    duration: 0.25,
    ease: "power1.out",
    stagger: 0.05,
  },
  0
);

s05Tl.from(
  "[animation=s05_line]",
  {
    width: "0%",
    duration: 0.25,
  },
  0
);

// ---------------------------------------------------- // Section 05 Image Corner Animation

s05Tl.from(
  "[animation=s05_img]",
  {
    borderTopRightRadius: "0%",
    duration: 1,
    ease: "power1.out",
  },
  0
);

// ---------------------------------------------------- // Section 06

var s06Tl = gsap.timeline({
  scrollTrigger: {
    trigger: "[trigger=tr04]",
    start: "70% bottom",
    stagger: 0.5,
  },
});
