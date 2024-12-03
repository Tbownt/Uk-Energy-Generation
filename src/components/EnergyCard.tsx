import React from "react";

const EnergyCard = ({ fuel, percentage }: EnergyCardProps) => {
  const getColor = () => {
    let rounded = Math.round(percentage);
    if (rounded > 40) return "bg-green-500";
    if (rounded < 20) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center relative">
      <div
        role="presentation"
        className={`absolute top-0 left-0 w-full h-2 ${getColor()}`}
      />

      <h2 className="text-xl font-bold capitalize mb-2">{fuel}</h2>
      <p className="text-4xl font-extrabold text-blue-500">{percentage}%</p>
    </div>
  );
};

export default EnergyCard;
