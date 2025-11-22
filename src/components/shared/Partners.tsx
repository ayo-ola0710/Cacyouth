import PartnerCard from "../ui/PartnerCard.tsx";
import {
  MdDiamond,
  MdWorkspacePremium,
  MdFavorite,
  MdVolunteerActivism,
} from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const partnerData = [
  {
    icon: MdDiamond,
    title: "Kingdom Impact Partner",
    priceRange: "₦1,000,000 and above",
    description:
      "For partners who want to sow deeply into what God is doing through this ministry.",
    features: [
      "Headline branding across all official platforms",
      "Stage mentions and full logo projection during key moments of the concert",
      "Premium digital visibility (website, livestream, promo videos & social media)",
      "Priority logo placement on all printed and digital materials",
      "Product/Brand voice-over woven into selected program segments",
      "Optional spotlight/interview opportunity",
      "VIP seating & access to restricted areas",
      "Featured recognition in post-event reports",
      "Certificate of Partnership + Appreciation Plaque",
    ],
  },
  {
    icon: MdWorkspacePremium,
    title: "Legacy Builder Partner",
    priceRange: "₦500,000 — ₦1,000,000",
    description:
      "For partners who want to stand visibly with this vision and help strengthen its reach.",
    features: [
      "Prominent logo placement on selected promotional materials",
      "Social media features and partner highlight posts",
      "Exhibition space at the event (for product display or engagement)",
      "Product/Brand voice-over during selected periods",
      "Stage acknowledgment during program",
      "Logo on sponsor banner",
      "Website listing",
      "Certificate of Partnership",
    ],
  },
  {
    icon: MdFavorite,
    title: "Friends of the Fellowship",
    priceRange: "₦100,000 — ₦500,000",
    description:
      "For partners who want to support and be part of what God is building.",
    features: [
      "Logo on sponsor banner",
      "Recognition in the printed program",
      "Website listing",
      "Social media 'Thank You' feature",
      "Certificate of Appreciation",
    ],
  },
  {
    icon: MdVolunteerActivism,
    title: "In-Kind Supporters",
    priceRange: "",
    description:
      "For partners offering products, services, or equipment that help make the event possible.",
    features: [
      "Recognition based on value of support",
      "Name mention during program",
      "Listing on website and program",
      "Appreciation announcement during the event",
    ],
  },
];

const Partners = () => {
  useGSAP(() => {
    const packTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#packages",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    packTimeline.from(".partner-card", {
      opacity: 0,
      yPercent: 100,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.3,
    });
  });
  return (
    <section className="py-16 sm:py-24 bg-purple-100" id="packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" id="pack">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
            PARTNER WITH US
          </h2>
          <p className="mt-4 text-lg text-text-light-muted dark:text-text-dark-muted max-w-2xl mx-auto">
            Together, we can raise a generation of skilled, Spirit-filled
            worshippers and extend the sound of God’s kingdom across the region.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {partnerData.map((partner, index) => (
            <PartnerCard
              key={index}
              icon={partner.icon}
              title={partner.title}
              priceRange={partner.priceRange}
              description={partner.description}
              features={partner.features}
              className="partner-card"
            />
          ))}
        </div>
      </div>
    </section>
    //
  );
};

export default Partners;
