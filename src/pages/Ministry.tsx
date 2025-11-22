import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { FaPray, FaBible, FaMusic } from "react-icons/fa";
import { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import Button from "../components/ui/Button";
import { createPortal } from "react-dom";
import { useDonate } from "../components/shared/DonateContext";

const Ministry = () => {
  const { openModal } = useDonate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  useGSAP(() => {
    // Hero Animation
    const heroSplit = new SplitText("#ministry-head", { type: "lines, chars" });
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.lines, {
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from("#ministry-sub", {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "power2.inOut",
      delay: 1,
    });

    // Daily Inspiration Animation
    gsap.from("#inspiration-card", {
      scrollTrigger: {
        trigger: "#inspiration-section",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Conference Animation
    const conferenceTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#conference-section",
        start: "top 70%",
      },
    });

    conferenceTl
      .from("#conference-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })
      .from(
        ".conference-feature",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );
  });

  useEffect(() => {
    VanillaTilt.init(
      Array.from(document.querySelectorAll(".tilt-card")) as HTMLElement[],
      {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      }
    );
  }, []);

  return (
    <div className="bg-black-light text-white overflow-x-hidden">
      {/* Section 1: Emergence Concert (Hero) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-purple-900/40 to-black-light z-10"></div>
          <img
            src="/assets/4.jpg"
            alt="Concert Crowd"
            className="w-full h-full object-cover scale-105"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-1 rounded-full border border-purple-500/50 bg-purple-900/30 backdrop-blur-sm">
            <span className="text-purple-300 text-xs md:text-sm font-medium tracking-wider uppercase">
              Upcoming Worship Experience
            </span>
          </div>
          <h1
            className="text-5xl md:text-8xl lg:text-[100px] font-black leading-none tracking-tighter mb-8"
            id="ministry-head"
          >
            “EMERGENCE
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
              CONCERT”
            </span>
          </h1>
          <p
            className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
            id="ministry-sub"
          >
            A night where heaven touches earth. Join us for an electrifying
            atmosphere of undiluted worship, prophetic sounds, and the rising of
            a new generation of kingdom giants.
          </p>
          <div className="flex justify-center mt-2" id="btn">
            <Button
              title="See More"
              containerClass="bg-black-light hover:bg-gray-800 cursor-pointer hover:scale-105"
              handleClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </section>

      {/* Section 2: Daily Inspiration */}
      <section
        id="inspiration-section"
        className="py-24 px-4 relative flex items-center justify-center min-h-[80vh]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-purple-900/20 via-black-light to-black-light z-0"></div>

        <div
          id="inspiration-card"
          className="relative z-10 max-w-4xl tilt-card w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 text-center shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-linear-to-r from-purple-600 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
            <FaBible className="text-3xl text-white" />
          </div>

          <h2 className="text-2xl md:text-3xl font-serif text-purple-300 mb-8 mt-6">
            Daily Inspiration
          </h2>

          <blockquote className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-white">
            "For God is Spirit, so those who worship him must worship in spirit
            and in truth."
          </blockquote>

          <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-transparent mx-auto mb-6"></div>

          <cite className="text-xl text-gray-400 not-italic font-medium">
            - John 4:24
          </cite>
        </div>
      </section>

      {/* Section 3: Youth Conference */}
      <section
        id="conference-section"
        className="py-24 px-4 relative bg-linear-to-t from-purple-900/20 to-black-light"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2
              id="conference-title"
              className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
            >
              YOUTH <span className="text-purple-500">CONFERENCE</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our annual Youth Conference is designed to develop, empower, and
              spiritually equip young believers. With teachings, worship,
              workshops, and worship nights, the conference strengthens the
              foundation of faith and leadership among Christian youths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: The Word */}
            <div className="conference-feature group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
              <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaBible className="text-3xl text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Word</h3>
              <p className="text-gray-400 leading-relaxed">
                Deep exposition of scriptures to ground you in truth and unveil
                mysteries for your rising.
              </p>
            </div>

            {/* Feature 2: Prayer */}
            <div className="conference-feature group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
              <div className="bg-purple-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaPray className="text-3xl text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Prayer</h3>
              <p className="text-gray-400 leading-relaxed">
                Intense sessions of intercession and spiritual warfare to break
                limits and birth destinies.
              </p>
            </div>

            {/* Feature 3: Worship */}
            <div className="conference-feature group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
              <div className="bg-pink-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaMusic className="text-3xl text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Worship</h3>
              <p className="text-gray-400 leading-relaxed">
                Ascend into the throne room through heart-rending worship and
                prophetic sounds.
              </p>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-black-light text-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[95vh] overflow-y-auto">
              <div className="p-6">
                <div className="text-center mb-8">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-50 text-red-600 hover:text-gray-600"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <h2 className="text-4xl font-bold text-purple-100 mb-4">
                    THE EMERGENCE CONCERT
                  </h2>
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    A Worship Encounter That Transforms Lives
                  </h3>
                  <p className="text-lg text-white max-w-3xl mx-auto">
                    The Emergence Concert is our annual worship event that
                    brings thousands of young believers together for a night of
                    revival, sound, and supernatural encounters.
                  </p>
                  <p className="text-lg text-white mt-4 max-w-3xl mx-auto">
                    From an explosive launch in 2024, the concert has grown into
                    a spiritual movement marked by testimonies, salvation, and
                    deep encounters with God.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-purple-100 text-center mb-4">
                    The Emergence 2026 – Special Mission
                  </h3>
                  <p className="text-lg text-white text-center mb-6">
                    In 2026, the Emergence Concert extends beyond the hall — We
                    will be visiting the Correctional Centre for a mini-concert,
                    outreach, and gift distribution.
                  </p>
                  <p className="text-lg text-white text-center mb-6">
                    This is part of our commitment to:
                  </p>
                  <ul className="text-center space-y-2 mb-6">
                    <li>• Kingdom evangelism</li>
                    <li>• Community impact</li>
                    <li>• Christian social responsibility</li>
                    <li>• Spreading hope through worship</li>
                  </ul>
                  <p className="text-lg text-white text-center">
                    We aim to raise ₦5,000,000 for the outreach and concert
                    execution with an expanded vision to raise up to ₦10,000,000
                    to support all youth activities for the year.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Button
                    title="Donate Now"
                    containerClass="bg-black-light hover:bg-gray-800 cursor-pointer hover:scale-105 transition-transform duration-300"
                    handleClick={openModal}
                  />
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Ministry;
