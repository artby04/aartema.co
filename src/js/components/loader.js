import { gsap } from "gsap";
import imagesLoaded from "imagesloaded";

const content = document.querySelector("main");

const imagesLoad = imagesLoaded(content);

imagesLoad.on("done", (instance) => {
  gsap.to("svg", {
    scale: 0,
  });

  gsap.to(".blinder", {
    scaleY: 0,
    stagger: 0.3,
    ease: "power3.out",
  });
});

const timeline = gsap.timeline();

timeline.to(
  [".logo"],
  {
    y: 0,
    stagger: 0.3,
    duration: 2.5,
    ease: "power4.out",
  },
  0
);
