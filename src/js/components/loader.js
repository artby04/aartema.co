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
    x: 0,
    stagger: 0.3,
    duration: 1,
    ease: Elastic.easeOut.config(1, 0.3),
  },
  0
);
