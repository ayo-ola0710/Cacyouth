import { useEffect } from "react";
import BrandValueSection from "../components/shared/BrandValueSection.tsx";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import VanillaTilt from "vanilla-tilt";

const About = () => {
  const testimonials = [
    {
      quote:
        "CACYOF has transformed my life through faith and community. The concerts inspire me to serve God.",
      name: "Sarah Johnson",
      role: "Youth Leader",
    },
    {
      quote:
        "Being part of this fellowship has given me purpose and connected me with amazing people.",
      name: "Michael Adebayo",
      role: "Member",
    },
    {
      quote:
        "The spiritual growth I've experienced here is incredible. Grateful for this family.",
      name: "Grace Okafor",
      role: "Worship Team",
    },
  ];

  useGSAP(() => {
    const titleSplit = new SplitText("#about-title", { type: "lines, chars" });
    titleSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(titleSplit.lines, {
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from("#about-desc h2", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      delay: 1,
    });

    gsap.from("#about-desc p", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      delay: 1.2,
    });

    const impactTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#impact",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    impactTimeline
      .from("#impact h2", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
      })
      .from(
        "#impact p",
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        ".impact-card",
        {
          opacity: 0,
          y: 50,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.4"
      );

    const testimonialsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    });

    testimonialsTimeline
      .from("#testimonials h2", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
      })
      .from(
        ".testimonial-card",
        {
          opacity: 0,
          y: 50,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
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
    <section>
      <div className="bg-linear-to-r from-purple-100 to-black-light h-70 md:h-100">
        <p
          className="text-center  text-7xl md:text-[150px] text-gradient pt-30 md:pt-25"
          id="about-title"
        >
          About Us
        </p>
      </div>
      <div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20"
        id="about-desc"
      >
        <h2 className="text-3xl font-bold  leading-tight tracking-tight text-primary sm:text-4xl">
          About the Fellowship
        </h2>
        <div className="mt-6 max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-text-light-muted dark:text-text-dark-muted">
            The Christ Apostolic Church Youth Fellowship (CACYOF) of the
            Medaiyese Region is <br className="hidden md:block" /> dedicated to
            nurturing a generation of young leaders grounded in faith, purpose,
            and <br className="hidden md:block" /> community. Our annual concert
            is the cornerstone of this mission, creating a powerful{" "}
            <br className="hidden md:block" />
            platform for spiritual growth, talent discovery, and positive youth
            engagement.
          </p>
        </div>
      </div>
      <section className="py-16 sm:py-24 bg-purple-100" id="impact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
              Our Impact
            </h2>
            <p className="mt-4 text-lg text-text-light-muted dark:text-text-dark-muted max-w-2xl mx-auto">
              Harmonizing faith and community to create life-changing encounters
              with God through the gift of music.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-black-light -mt-5">
            <div className="p-5 bg-white/70 rounded-xl impact-card tilt-card hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-extrabold text-primary">500,000+</h3>
              <p className="mt-2 text-lg font-medium">Youth Members</p>
            </div>
            <div className="p-5 bg-white/70 rounded-xl impact-card hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-extrabold text-primary">100,000+</h3>
              <p className="mt-2 text-lg font-medium">Online Views</p>
            </div>
            <div className="p-5 bg-white/70 rounded-xl impact-card hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-extrabold text-primary">10,000 +</h3>
              <p className="mt-2 text-lg font-medium">Life touched </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24 bg-white/70" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
              What Our Community Says
            </h2>
            <p className="mt-4 text-lg text-text-light-muted dark:text-text-dark-muted max-w-2xl mx-auto">
              Hear from members whose lives have been transformed through our
              fellowship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl testimonial-card tilt-card hover:shadow-lg transition-shadow duration-300"
              >
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-right">
                  <cite className="font-semibold text-black-light">
                    {testimonial.name}
                  </cite>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BrandValueSection />
    </section>
  );
};

export default About;
