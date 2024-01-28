import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";


export const aboutAni = () => {

  gsap.registerPlugin(ScrollTrigger);

  let allowScroll = true; // sometimes we want to ignore scroll-related stuff, like when an Observer-based section is transitioning.
  let scrollTimeout = gsap.delayedCall(1, () => allowScroll = true).pause(); // controls how long we should wait after an Observer-based animation is initiated before we allow another scroll-related action
  let currentIndex = 0;
  let swipePanels = gsap.utils.toArray(".swipe-section .panel");

  // set z-index levels for the swipe panels
  gsap.set(swipePanels, { zIndex: i => swipePanels.length - i })

  // create an observer and disable it to start
  let intentObserver = ScrollTrigger.observe({
    type: "wheel,touch",
    onUp: () => allowScroll && gotoPanel(currentIndex - 1, false),
    onDown: () => allowScroll && gotoPanel(currentIndex + 1, true),
    tolerance: 10,
    preventDefault: true,
    onEnable(self) {
      allowScroll = false;
      scrollTimeout.restart(true);
      // when enabling, we should save the scroll position and freeze it. This fixes momentum-scroll on Macs, for example.
      let savedScroll = self.scrollY();
      self._restoreScroll = () => self.scrollY(savedScroll); // if the native scroll repositions, force it back to where it should be
      document.addEventListener("scroll", self._restoreScroll, { passive: false });
    },
    onDisable: self => document.removeEventListener("scroll", self._restoreScroll)
  });
  intentObserver.disable();

  // handle the panel swipe animations
  function gotoPanel(index, isScrollingDown) {
    // Check if the index is within the bounds of available panels
    if (index < 0 || index >= swipePanels.length) {
      // Disable the observer and allow native scrolling
      intentObserver.disable();
      return;
    }

    allowScroll = false;
    scrollTimeout.restart(true);

    let target = isScrollingDown ? swipePanels[currentIndex] : swipePanels[index];
    gsap.to(target, {
      yPercent: isScrollingDown ? -100 : 0,
      duration: 0.5
    });

    currentIndex = index;
  }

  // pin swipe section and initiate observer
  ScrollTrigger.create({
    trigger: ".swipe-section",
    pin: true,
    start: "top top",
    end: "+=40",
    onEnter: (self) => {
      // Jump to just one pixel past the start of this section so we can hold there
      self.scroll(self.start + 1);
      // Enable the observer to stop native scrolling
      intentObserver.enable();
    },
    onEnterBack: (self) => {
      // Jump to one pixel before the end of this section so we can hold there
      self.scroll(self.end - 1);
      // Enable the observer to stop native scrolling
      intentObserver.enable();
    }
  });

  // horizontal scrolling section 
  let horizontalSections = gsap.utils.toArray(".horizontal .panel");
  gsap.to(horizontalSections, {
    xPercent: -100 * (horizontalSections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: '.horizontal',
      pin: true,
      scrub: 1,
      end: "+=8000",

    }
  });
}

export default aboutAni;