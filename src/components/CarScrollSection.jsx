import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import carImg from "@/assets/car.png";
import { metrics } from "@/constants/metrics";

gsap.registerPlugin(ScrollTrigger);

const CarScrollSection = () => {
  const sectionRef = useRef(null);
  const carGroupRef = useRef(null);
  const metric1Ref = useRef(null);
  const metric2Ref = useRef(null);
  const metric3Ref = useRef(null);
  const metric4Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const metricRefs = [metric1Ref, metric2Ref, metric3Ref, metric4Ref];

      // Initial state: car group starts on the left
      gsap.set(carGroupRef.current, { x: "-5vw" });
      metricRefs.forEach((ref) => {
        gsap.set(ref.current, { opacity: -6, y: 40 });
      });

      // Create the master timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3400",
          scrub: 1,
          pin: true,
        },
      });

      // Animate car group (car + dark bg) from left to right
      // End at ~84vw so rear of car remains visible at right edge
      tl.to(
        carGroupRef.current,
        {
          x: "84vw",
          ease: "none",
          duration: 1,
        },
        0
      );

      // Reveal metrics in pairs: 1+3 together, then 2+4 together
      // Each pair has a small delay between the two cards for stagger effect
      const metricTimings = [0.25, 0.55, 0.31, 0.61]; // [metric1, metric2, metric3, metric4]
      metricTimings.forEach((timing, i) => {
        tl.to(
          metricRefs[i].current,
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: "power2.out",
          },
          timing
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#c8c8c8]"
      style={{ height: "100vh" }}
    >
      {/* Pinned viewport container */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background text layer — green band + text */}
        <div className="absolute inset-0 flex items-center">
          <div className="relative w-full">
            <div
              className="absolute left-0 bg-[#3DDC84]"
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                height: "16vw",
                width: "100vw",
              }}
            />
            <h1
              className="relative whitespace-nowrap font-black italic uppercase tracking-tight text-[#1a1a2e] px-[3vw]"
              style={{ fontSize: "10vw", lineHeight: "1" }}
            >
              WELCOME ITZFIZZ
            </h1>
          </div>
        </div>

        {/* Car group — car image with dark background, both move as one */}
        <div
          ref={carGroupRef}
          className="absolute"
          style={{
            top: "50%",
            transform: "translateY(-50%)",
            left: "0",
            height: "16vw",
            width: "200vw",
            willChange: "transform",
            zIndex: 10,
          }}
        >
          {/* Dark background starting from car position */}
          <div
            className="absolute bg-[#1a1a1a]"
            style={{
              left: "10vw",
              top: 0,
              bottom: 0,
              width: "200vw",
            }}
          />
          {/* Car image */}
          <img
            src={carImg}
            alt="Car"
            style={{
              width: "30vw",
              position: "absolute",
              left: "5vw",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
            }}
          />
        </div>

        {/* Metric cards layer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 20 }}
        >
          <div
            ref={metric1Ref}
            className={`metric-card metric-1 absolute ${metrics[0].bg} ${metrics[0].text} rounded-2xl px-8 py-6 shadow-lg flex flex-col justify-center`}
            style={{ top: "7%", left: "50%" }}
          >
            <p className="metric-value font-bold">{metrics[0].value}</p>
            <p className="metric-label mt-2 opacity-80">{metrics[0].label}</p>
          </div>

          <div
            ref={metric2Ref}
            className={`metric-card metric-2 absolute ${metrics[1].bg} ${metrics[1].text} rounded-2xl px-8 py-6 shadow-lg flex flex-col justify-center`}
            style={{ top: "7%", left: "calc(50% + var(--metric-gap))" }}
          >
            <p className="metric-value font-bold">{metrics[1].value}</p>
            <p className="metric-label mt-2 opacity-80">{metrics[1].label}</p>
          </div>

          <div
            ref={metric3Ref}
            className={`metric-card metric-3 absolute ${metrics[2].bg} ${metrics[2].text} rounded-2xl px-8 py-6 shadow-lg flex flex-col justify-center`}
            style={{ bottom: "8%", left: "50%" }}
          >
            <p className="metric-value font-bold">{metrics[2].value}</p>
            <p className="metric-label mt-2 opacity-80">{metrics[2].label}</p>
          </div>

          <div
            ref={metric4Ref}
            className={`metric-card metric-4 absolute ${metrics[3].bg} ${metrics[3].text} rounded-2xl px-8 py-6 shadow-lg flex flex-col justify-center`}
            style={{ bottom: "8%", left: "calc(50% + var(--metric-gap))" }}
          >
            <p className="metric-value font-bold">{metrics[3].value}</p>
            <p className="metric-label mt-2 opacity-80">{metrics[3].label}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarScrollSection;
