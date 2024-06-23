import {
  AirVent,
  Bell,
  Dot,
  Ellipsis,
  LampCeiling,
  MessageCircle,
  Music,
  Router,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const PersonalzeController = () => {
  return (
    <div className="hidden sm:block">
      <div className="bg-secondary p-4 py-8 rounded-[30px] space-y-4">
        <div className="flex items-center justify-center gap-4">
          <MessageCircle size={16} />
          <img
            src="/profile.jpg"
            alt=""
            className="h-16 w-16 rounded-full border overflow-hidden object-cover"
          />
          <Bell size={16} />
        </div>
        <h2 className="text-center text-sm font-bold">Welcome Annie!</h2>
        <div className="bg-background p-4 rounded-3xl space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold">My Devices</h2>
            <button>
              <Ellipsis />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <button className="relative w-full h-28 rounded-3xl bg-[#FFE0E0]">
                <AirVent size={50} className="mx-auto" />
                <Dot
                  className="absolute right-0 bottom-0 text-[#FFA2A2]"
                  size={40}
                />
              </button>
              <h2 className="text-sm font-bold text-center mt-2">AC</h2>
            </div>
            <div>
              <button className="relative w-full h-28 rounded-3xl bg-[#E0FFDE]">
                <Router size={50} className="mx-auto" />
                <Dot
                  className="absolute right-0 bottom-0 text-[#99E295]"
                  size={40}
                />
              </button>
              <h2 className="text-sm font-bold text-center mt-2">Router</h2>
            </div>
            <div>
              <button className="relative w-full h-28 rounded-3xl bg-[#FFEBD0]">
                <Music size={50} className="mx-auto" />
                <Dot
                  className="absolute right-0 bottom-0 text-[#FFBE67]"
                  size={40}
                />
              </button>
              <h2 className="text-sm font-bold text-center mt-2">
                Music System
              </h2>
            </div>
            <div>
              <button className="relative w-full h-28 rounded-3xl bg-[#D8F6FF]">
                <LampCeiling size={50} className="mx-auto" />
                <Dot
                  className="absolute right-0 bottom-0 text-[#93D9EF]"
                  size={40}
                />
              </button>
              <h2 className="text-sm font-bold text-center mt-2">Lamps</h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src="/women.png"
          alt=""
          className="h-full w-full object-cover rounded-[30px] mt-4"
        />
      </div>
    </div>
  );
};

export default PersonalzeController;
