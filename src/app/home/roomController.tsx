import React, { useState } from "react";
import { Ellipsis } from "lucide-react";

interface RoomControllerProps {
  room: { name: string; value: number; icon: any };
  hovered: boolean;
  totalValue: number;
}

const RoomController: React.FC<RoomControllerProps> = ({
  room,
  hovered,
  totalValue,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const percentage = (room.value / totalValue) * 100;

  const radius = 16;
  const progress = 2 * Math.PI * radius;
  const offset = progress - (percentage / 100) * progress;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`group border rounded-[40px] p-8 space-y-4 transition-colors duration-300 ease-in-out ${
        isHovered ? "bg-[#3326AE]" : "bg-background"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center justify-between">
        <p className={`text-sm font-bold ${isHovered ? "text-white" : ""}`}>
          {room.name}
        </p>
        <button>
          <Ellipsis className={`${isHovered ? "text-white" : ""}`} />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex justify-center items-center h-fit w-fit p-[1px] rounded-full overflow-hidden bg-white shadow-lg">
          <div className="relative">
            <svg
              className="w-16 h-16"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="text-transparent"
                strokeWidth="3"
                stroke="currentColor"
                fill="transparent"
                r="16"
                cx="18"
                cy="18"
              />
              <circle
                className={isHovered ? "text-[#FF392B]" : "text-[#3326AE]"}
                strokeWidth="3"
                strokeDasharray={progress}
                strokeDashoffset={offset}
                strokeLinecap="round"
                stroke="currentColor"
                fill="transparent"
                r="16"
                cx="18"
                cy="18"
                transform="rotate(-90 18 18)"
              />
            </svg>
            <div
              className={`${
                isHovered ? "bg-[#3326AE] text-white" : "bg-accent"
              } absolute inset-0 flex items-center justify-center h-12 w-12 rounded-full top-[8px] left-[8px]`}
            >
              {room.icon}
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold group-hover:text-white">
            {room.value}
          </h2>
          <p className="text-xs font-semibold tracking-wider group-hover:text-white">
            kwh
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomController;
