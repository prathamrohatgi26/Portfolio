import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './floatingBrackets.css';

gsap.registerPlugin(ScrollTrigger);

const FloatingBrackets = () => {
  const leftBracketRef = useRef(null);
  const rightBracketRef = useRef(null);

  useEffect(() => {
    // Animate left bracket
    gsap.to(leftBracketRef.current, {
      y: () => -window.innerHeight + 100, // Move up as page scrolls
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth following effect
        invalidateOnRefresh: true
      }
    });

    // Animate right bracket
    gsap.to(rightBracketRef.current, {
      y: () => -window.innerHeight + 100, // Move up as page scrolls
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth following effect
        invalidateOnRefresh: true
      }
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div ref={leftBracketRef} className="floating-bracket left-bracket">
        &lt;
      </div>
      <div ref={rightBracketRef} className="floating-bracket right-bracket">
        /&gt;
      </div>
    </>
  );
};

export default FloatingBrackets; 