"use client";

import WeeklySpendingChart from "@/components/weeklySpendingChart";
import SearchBox from "@/shared/searchbox";
import React, { useState } from "react";
import RoomController from "./roomController";
import EnvironmentController from "./environmentController";
import PersonalzeController from "./personalzeController";
import { Armchair, BedDouble, ChefHat, Table } from "lucide-react";

const Dashboard = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const rooms = [
    { name: "Living Room", value: 174, icon: <Armchair size={30} /> },
    { name: "Bedroom", value: 196, icon: <BedDouble size={30} /> },
    { name: "Study Room", value: 289, icon: <Table size={30} /> },
    { name: "Kitchen", value: 201, icon: <ChefHat size={30} /> },
  ];

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="text-slate-600">
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-5">
          <div className="flex items-center justify-between gap-4">
            <SearchBox />
            <h2 className="text-sm">
              <span className="font-bold">Monday</span>
              {", "}
              <span>10 February 2020</span>
            </h2>
          </div>
          <div className="my-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {rooms.map((room, index) => (
              <RoomController
                key={index}
                room={room}
                totalValue={300}
                hovered={hoveredIndex === index}
              />
            ))}
          </div>
          <div>
            <EnvironmentController />
          </div>
          <div className="my-4">
            <WeeklySpendingChart />
          </div>
        </div>
        <div className="col-span-2 rounded-[30px] overflow-hidden">
          <PersonalzeController />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
