import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import VanillaTilt from "vanilla-tilt";
import Button from "../components/ui/Button";
import { createPortal } from "react-dom";

const Ministry = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const newsPosts = [
    {
      title: "Youth Conference",
      excerpt:
        "Our annual Youth Conference is designed to develop, empower, and spiritually equip young believers. With teachings, worship, workshops, and worship nights, the conference strengthens the foundation of faith and leadership among Christian youths.",
      image: "/assets/back.png",
      date: "Annual Event",
      category: "Events",
      hasSeeMore: true,
    },
    {
      title: "New Bible Study Program Launch",
      excerpt:
        "Introducing our weekly online Bible study sessions for deeper spiritual growth.",
      image: "/assets/back.png",
      date: "Annual Event",
      category: "Programs",
    },
    {
      title: "Community Outreach Success",
      excerpt:
        "Our recent outreach program reached over 500 families in the region.",
      image: "/assets/back.png",
      date: "Yealy Event",
      category: "Outreach",
    },
  ];

  useGSAP(() => {
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

    const scriptureTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#scripture-section",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    scriptureTimeline
      .from("#scripture-img", {
        opacity: 0,
        x: -100,
        duration: 0.8,
        ease: "power2.out",
      })
      .from(
        "#scripture-text",
        {
          opacity: 0,
          x: 100,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      );

    const programsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#programs-section",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    programsTimeline.from(".program-card", {
      opacity: 0,
      y: 50,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.2,
    });
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
    <div>
      {/* Hero Section */}
      <section className="bg-[linear-gradient(rgba(26,16,34,0.7)_0%,rgba(74,20,140,0.5)_100%),url('/assets/back.png')] bg-cover bg-center bg-no-repeat w-full h-screen flex items-center justify-center px-4">
        <div className="text-center text-white">
          <div className="flex justify-center mt-10 mb-10">
            <p className="uppercase bg-black-light w-50 py-1 rounded-full border border-white/70 text-xs ">
              Upcoming Event
            </p>
          </div>
          <h1
            className="text-5xl font-black leading-tight tracking-tight lg:text-[80px] text-gradient"
            id="ministry-head"
          >
            <span>
              {" "}
              “The Emergence <br className="md:hidden" /> Concert”
            </span>
          </h1>
          <p className="text-lg mt-6 max-w-2xl mx-auto" id="ministry-sub">
            Join us for an unforgettable night of worship, music, and spiritual
            renewal. Experience the power of faith through our upcoming youth
            concert event.
          </p>
          <div className="flex justify-center mt-12" id="btn">
            <Button
              title="See More"
              containerClass="bg-black-light hover:bg-gray-800 cursor-pointer hover:scale-105"
              handleClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </section>

      {/* Scripture Section */}
      <section
        className="py-16 bg-gray-50 overflow-x-hidden"
        id="scripture-section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div id="scripture-img">
              <img
                src="/assets/back.png"
                alt="Ministry"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div
              id="scripture-text"
              className="text-center md:text-left tilt-card bg-purple-100 py-25 px-5 rounded-lg"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">
                Daily Inspiration
              </h2>
              <blockquote className="text-lg italic text-white/50 mb-4">
                "For God is Spirit, so those who worship him must worship in
                spirit and in truth."
              </blockquote>
              <cite className="text-primary font-semibold">- John 4:24</cite>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">
            News & Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md  overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-purple-100 mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold text-black-light mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">{post.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergence Concert Modal */}
      {isModalOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-black-light text-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
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

                <div className="text-center mb-8">
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
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Ministry;
