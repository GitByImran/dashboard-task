"use client";

import React from "react";
import Link from "next/link";
import { ImSwitch } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
import { FiBarChart2 } from "react-icons/fi";
import { BiShield } from "react-icons/bi";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { CgHome } from "react-icons/cg";
import { AiOutlineDashboard } from "react-icons/ai";
import { usePathname } from "next/navigation";

const menus = [
  { icon: <AiOutlineDashboard />, label: "dashboard", goto: "/" },
  { icon: <CgHome />, label: "home", goto: "" },
  { icon: <HiOutlineDeviceMobile />, label: "device", goto: "" },
  { icon: <BiShield />, label: "security", goto: "" },
  { icon: <FiBarChart2 />, label: "statistics", goto: "" },
  { icon: <AiOutlineUser />, label: "members", goto: "" },
];

const Dashbar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky hidden sm:block">
      <div className="dashbar-parent min-w-[200px] h-screen space-y-20 bg-[#3326AE] rounded-[40px] overflow-hidden">
        <div className="text-white my-10">
          <img src="/logo.png" alt="" className="mx-auto" />
        </div>
        <div className="flex flex-col gap-2">
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.goto}
              className={`group hovered-dashmenu min-w-max text-xs flex items-center gap-2 ml-6 py-3 px-4 rounded-l-full ${
                pathname === menu.goto ? "active-dashmenu" : ""
              }`}
            >
              <span className="icon text-xl group-hover:text-red-500">
                {menu.icon}
              </span>
              <span className="label capitalize group-hover:text-black">
                {menu.label}
              </span>
            </Link>
          ))}
        </div>
        <div>
          <Link
            href="/logout"
            className={`group hovered-dashmenu min-w-max text-xs flex items-center gap-2 ml-6 py-3 px-4 rounded-l-full ${
              pathname === "/logout" ? "active-dashmenu" : ""
            }`}
          >
            <span className="icon text-xl group-hover:text-red-500">
              <ImSwitch />
            </span>
            <span className="label capitalize group-hover:text-black">
              Logout
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashbar;
