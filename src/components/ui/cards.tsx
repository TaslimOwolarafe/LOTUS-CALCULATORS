/* eslint-disable @next/next/no-img-element */
'use client';
import React from "react";
import { useRouter } from "next/navigation";

interface ActionCardProps {
  icon: string;
  title: string;
  afterBreak?: string;
  description: string;
  to?: string;
  disabled?: boolean;
}

const ActionCard: React.FC<ActionCardProps> = ({
  icon,
  title,
  afterBreak,
  description,
  to = "/",
  disabled = false,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (!disabled && to) {
      router.push(to);
    }
  };

  return (
    <div onClick={handleClick}
      className={`relative w-[304.23px] rounded-lg shadow-md p-11 py-3 flex flex-col items-center justify-center text-left h-[305.57px] cursor-pointer ${disabled ? 'bg-gray-300 text-gray-500' : 'bg-white text-black'
        }`}
      style={{
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {/* Icon */}
      <div className="absolute bg-[#FFE4E3] rounded-lg w-[63.99px] h-[63.99px] mb-4 top-4 right-6 p-4">
        <img src={icon} alt={title} className="w-[33.39px] h-[33.39px]" />
      </div>

      <div className="pt-9">
        {/* Title */}
        <h3 className="text-lg font-bold text-[26.8px] text-700 text-[#BF0401]">{title}<br />{afterBreak}</h3>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-2">{description}</p>
      </div>

    </div>
  );
};

export default ActionCard;
