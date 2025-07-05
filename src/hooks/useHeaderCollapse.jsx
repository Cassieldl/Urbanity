import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useHeaderCollapse() {
  useEffect(() => {
    const RESPONSIVE_WIDTH = 1024;

    let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH;
    const collapseBtn = document.getElementById("collapse-btn");
    const collapseHeaderItems = document.getElementById("collapsed-header-items");
    const headerLinks = collapseHeaderItems?.querySelectorAll(".header-links");

    if (!collapseBtn || !collapseHeaderItems) return;

    const linkAnimationIn = () => {
      gsap.fromTo(
        headerLinks,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    };

    function onHeaderClickOutside(e) {
      if (!collapseHeaderItems.contains(e.target) && !collapseBtn.contains(e.target)) {
        toggleHeader();
      }
    }

    function toggleHeader() {
      if (isHeaderCollapsed) {
        gsap.to(collapseHeaderItems, {
          width: "60vw",
          opacity: 1,
          duration: 0.01,
          ease: "power2.out",
          onComplete: linkAnimationIn,
        });

        collapseBtn.classList.remove("bi-list");
        collapseBtn.classList.add("bi-x", "max-lg:tw-fixed");
        isHeaderCollapsed = false;

        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1);
      } else {
        gsap.to(collapseHeaderItems, {
          width: "0vw",
          opacity: 0,
          duration: 0.1,
          ease: "power2.inOut",
        });

        collapseBtn.classList.remove("bi-x", "max-lg:tw-fixed");
        collapseBtn.classList.add("bi-list");
        isHeaderCollapsed = true;

        window.removeEventListener("click", onHeaderClickOutside);
      }
    }

    function responsive() {
      if (window.innerWidth > RESPONSIVE_WIDTH) {
        gsap.set(collapseHeaderItems, { clearProps: "width,opacity" });
        gsap.set(headerLinks, { clearProps: "all" });
      } else {
        isHeaderCollapsed = true;
        gsap.set(collapseHeaderItems, { width: "0vw", opacity: 0 });
      }
    }

    collapseBtn.addEventListener("click", toggleHeader);
    window.addEventListener("resize", responsive);
    responsive();

    // ScrollTrigger para navbar escurecer ao rolar
    ScrollTrigger.create({
      trigger: "#hero-section",
      start: "top top",
      end: "bottom top",
      onEnter: () => {
        document.querySelector("header").classList.add("tw-bg-black", "tw-bg-opacity-80", "tw-backdrop-blur-sm");
      },
      onLeaveBack: () => {
        document.querySelector("header").classList.remove("tw-bg-black", "tw-bg-opacity-80", "tw-backdrop-blur-sm");
      }
    });

    return () => {
      collapseBtn.removeEventListener("click", toggleHeader);
      window.removeEventListener("resize", responsive);
      window.removeEventListener("click", onHeaderClickOutside);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
}
