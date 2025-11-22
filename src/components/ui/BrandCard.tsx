import React from "react";

interface BrandCardProps {
  icon: React.ComponentType;
  title: string;
  content: string[];
}

const BrandCard = ({ icon, title, content }: BrandCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100/50 rounded-xl text-center">
      <span className=" text-4xl mb-4 text-primary">
        {React.createElement(icon)}
      </span>
      <h4 className="font-bold mb-4">{title}</h4>
      <ul className="text-sm text-gray-700 space-y-1">
        {content.map((item, index) => (
          <li key={index} className="flex items-center justify-left">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandCard;
