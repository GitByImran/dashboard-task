import React from "react";
import {
  AudioLines,
  ChevronDown,
  ChevronUp,
  Droplet,
  Ellipsis,
  Thermometer,
} from "lucide-react";

const EnvironmentController: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex gap-8 p-4 rounded-[30px] bg-background border">
          <button className="p-6 rounded-[30px] bg-background shadow-lg">
            <Thermometer size={30} />
          </button>
          <div className="flex flex-grow justify-between">
            <div className="flex flex-col justify-between">
              <h2 className="text-sm font-bold">Indoor Temperature</h2>
              <p className="font-semibold">
                <sub className="text-lg -top-0.5">+</sub>
                <span className="text-4xl">25</span>
                <sub className="text-lg -top-0.5">°c</sub>
              </p>
            </div>
            <div className="h-full w-10 bg-secondary rounded-[30px] p-2 flex flex-col justify-center items-center">
              <AudioLines className="-rotate-90" />
            </div>
          </div>
        </div>
        <div className="flex gap-8 p-4 rounded-[30px] bg-background border">
          <button className="p-6 rounded-[30px] bg-background shadow-lg">
            <Droplet size={30} />
          </button>
          <div className="flex flex-grow justify-between">
            <div className="flex flex-col justify-between">
              <h2 className="text-sm font-bold">Humadity</h2>
              <p className="font-semibold">
                <span className="text-4xl">30</span>
                <sub className="text-lg -top-0.5">%</sub>
              </p>
            </div>
            <div className="h-full w-10 bg-secondary rounded-[30px] p-2 flex flex-col justify-between items-center">
              <button>
                <ChevronUp size={20} />
              </button>
              <button>
                <ChevronDown size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-between items-center bg-background border p-4 px-6 rounded-[30px]">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-sm font-bold">Light Intensity</h2>
          <Ellipsis />
        </div>
        <img src="/li-metre.png" alt="" className="h-auto w-52" />
      </div>
    </div>
  );
};

export default EnvironmentController;
