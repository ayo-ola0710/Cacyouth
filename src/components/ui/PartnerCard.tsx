import React, { useState } from "react";

interface PartnerCardProps {
  icon: React.ComponentType;
  title: string;
  priceRange: string;
  description: string;
  features: string[];
  className?: string;
  children?: React.ReactNode;
}

const PartnerCard = ({
  icon,
  title,
  priceRange,
  description,
  features,
  className,
}: PartnerCardProps) => {
  const [showAll, setShowAll] = useState(false);
  const visibleFeatures = showAll ? features : features.slice(0, 3);

  return (
    <div
      className={`border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col bg-white/90 ${className}`}
    >
      <span className=" text-4xl mb-4 text-black-light">
        {React.createElement(icon)}
      </span>

      <h3 className="text-xl font-bold text-gray-200">{title}</h3>
      <p className="text-lg font-semibold text-black-light mb-2">
        {priceRange}
      </p>
      <p className="text-sm text-gray-600 mb-4">{description}</p>

      <ul className="mt-4 space-y-2 text-sm text-gray-700 grow">
        {visibleFeatures.map((feature, index) => (
          <li key={index} className="flex items-start">
            • {feature}
          </li>
        ))}
      </ul>

      {features.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 text-black-light hover:text-primary-dark font-semibold text-sm transition-colors"
        >
          {showAll ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
};

export default PartnerCard;
