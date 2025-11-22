import BrandCard from "../ui/BrandCard.tsx";
import { GiMusicalNotes, GiTrumpet, GiPrayer, GiGears } from "react-icons/gi";

const brandData = [
  {
    icon: GiMusicalNotes,
    title: "Music Ministry",
    content: ["BGVS (Background Vocalists)", "Praise Team"],
  },
  {
    icon: GiTrumpet,
    title: "Musicians",
    content: ["Band Department"],
  },
  {
    icon: GiPrayer,
    title: "Support Ministries",
    content: ["Welfare Department", "Intercessor Department"],
  },
  {
    icon: GiGears,
    title: " Operational Foundation",
    content: [
      "Secretariat",
      "Library Department",
      "Finance Department",
      "Media Department",
    ],
  },
];

const BrandValueSection = () => {
  return (
    <section className="py-16 sm:py-24" id="brand-value">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl">
            Our Choir Structure
          </h2>
          <p className="mt-4 text-lg text-text-light-muted dark:text-text-dark-muted max-w-2xl mx-auto">
            The harmonious blend of voices and ministries that create our
            symphony of worship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {brandData.map((brand, index) => (
            <BrandCard
              key={index}
              icon={brand.icon}
              title={brand.title}
              content={brand.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValueSection;
