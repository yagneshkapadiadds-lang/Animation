document.addEventListener("DOMContentLoaded", function () {
  const scrollSection = document.querySelector(".dragon-scroll-section");
  const gallery = document.querySelector(".dragon-circle-gallery");

  if (!scrollSection || !gallery) {
    console.log("scroll section or gallery not found");
    return;
  }

  const items = gallery.querySelectorAll(".dragon-item");
  console.log("dragon items found:", items.length);

  if (!items.length) {
    console.log("no dragon items found");
    return;
  }

  const total = items.length;

  function getRadius() {
    if (window.innerWidth < 768) return 140;
    if (window.innerWidth < 1024) return 220;
    return 300;
  }

  let radius = getRadius();
  let currentRotation = 0;

  function updateGallery(rotationDeg) {
    currentRotation = rotationDeg;

    items.forEach((item, index) => {
      const angle = (360 / total) * index + rotationDeg;
      const rad = angle * Math.PI / 180;

      const x = Math.sin(rad) * radius;
      const z = Math.cos(rad) * radius;
      const y = Math.sin(rad) * 20;

      const normalized = (z + radius) / (2 * radius);
      const scale = 0.68 + normalized * 0.42;
      const opacity = 0.35 + normalized * 0.65;

      item.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), ${z}px) scale(${scale})`;
      item.style.opacity = opacity;
      item.style.zIndex = 10 + Math.floor(z + radius);
    });
  }

  /* first show all images in circle immediately */
  updateGallery(0);

  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.log("GSAP or ScrollTrigger not loaded");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: scrollSection,
    start: "top top",
    end: () => "+=" + (window.innerHeight * 3),
    pin: true,
    pinSpacing: true,
    scrub: 1,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      const rotationDeg = self.progress * 360;
      updateGallery(rotationDeg);
    }
  });

  window.addEventListener("resize", function () {
    radius = getRadius();
    updateGallery(currentRotation);
    ScrollTrigger.refresh();
  });
});

























document.addEventListener("DOMContentLoaded", function () {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        console.log("GSAP or ScrollTrigger not loaded");
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const hero = document.querySelector(".unhung-hero");
    if (!hero) {
        console.log("Hero section not found");
        return;
    }

    // Better rendering
    gsap.set(".bottle", {
        transformOrigin: "50% 50%",
        force3D: true,
        willChange: "transform"
    });

    // IMPORTANT:
    // Put your bottles visually in their NORMAL/REAL positions using Elementor.
    // This JS will animate FROM those positions -> to center collision -> back to those positions.

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "+=1800",
            scrub: 1.4,
            pin: true,
            anticipatePin: 1
        }
    });

    // STAGE 1: all bottles move toward center and collide
    tl.to(".bottle-1", {
        x: 180,
        y: 120,
        rotate: 18,
        scale: 0.96,
        ease: "none"
    }, 0);

    tl.to(".bottle-2", {
        x: 210,
        y: -40,
        rotate: 14,
        scale: 0.98,
        ease: "none"
    }, 0);

    tl.to(".bottle-3", {
        x: 170,
        y: -140,
        rotate: 24,
        scale: 0.94,
        ease: "none"
    }, 0);

    tl.to(".bottle-4", {
        x: -170,
        y: 110,
        rotate: -16,
        scale: 0.96,
        ease: "none"
    }, 0);

    tl.to(".bottle-5", {
        x: -220,
        y: -30,
        rotate: -12,
        scale: 0.98,
        ease: "none"
    }, 0);

    tl.to(".bottle-6", {
        x: -180,
        y: -150,
        rotate: -20,
        scale: 0.95,
        ease: "none"
    }, 0);

    // STAGE 2: extra impact feeling near center
    tl.to(".bottle-1", {
        x: 140,
        y: 90,
        rotate: 10,
        scale: 0.93,
        ease: "none"
    }, 0.35);

    tl.to(".bottle-2", {
        x: 170,
        y: -10,
        rotate: 8,
        scale: 0.95,
        ease: "none"
    }, 0.35);

    tl.to(".bottle-3", {
        x: 130,
        y: -100,
        rotate: 16,
        scale: 0.91,
        ease: "none"
    }, 0.35);

    tl.to(".bottle-4", {
        x: -130,
        y: 85,
        rotate: -10,
        scale: 0.93,
        ease: "none"
    }, 0.35);

    tl.to(".bottle-5", {
        x: -180,
        y: -5,
        rotate: -8,
        scale: 0.95,
        ease: "none"
    }, 0.35);

    tl.to(".bottle-6", {
        x: -145,
        y: -105,
        rotate: -14,
        scale: 0.92,
        ease: "none"
    }, 0.35);

    // STAGE 3: all bottles go back to their original Elementor positions
    tl.to(".bottle-1", {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        ease: "none"
    }, 0.7);

    tl.to(".bottle-2", {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        ease: "none"
    }, 0.7);

    tl.to(".bottle-3", {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        ease: "none"
    }, 0.7);

    tl.to(".bottle-4", {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        ease: "none"
    }, 0.7);

    tl.to(".bottle-5", {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        ease: "none"
    }, 0.7);

    tl.to(".bottle-6", {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        ease: "none"
    }, 0.7);
});











    