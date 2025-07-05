import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function useGaspAnimations() {

  useEffect(() => {
    
    gsap.to("#dashboard", {
      boxShadow: "0px 15px 25px -5px #7e22ceaa",
      duration: 0.3,
      scrollTrigger: {
        trigger: "#hero-section",
        start: "60% 60%",
        end: "80% 80%",
      },
    });

    gsap.to("#dashboard", {
      scale: 1,
      translateY: 0,
      rotateX: "0deg",
      scrollTrigger: {
        trigger: "#hero-section",
        start: window.innerWidth > 1024 ? "top 95%" : "top 70%", // Ajuste para responsividade
        end: "bottom bottom",
        scrub: 1,
      },
    });

    const revealElements = document.querySelectorAll(".reveal-up");

    const timelines = [];

    revealElements.forEach((el) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true, 
        },
      });

      tl.to(el, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      timelines.push(tl);
    });

    ScrollTrigger.refresh(); 

    return () => {
      timelines.forEach((tl) => tl.kill());
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
  
