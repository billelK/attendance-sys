
"use client";

import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo } from "flowbite-react";
import {HiChartPie} from "react-icons/hi";
import {GiGraduateCap} from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";

export default function Component() {
  return (
    <Sidebar className="h-screen w-64" aria-label="Sidebar with logo branding example">
      <div className="h-[180px] w-[180px] mb-5">
         <img  src="CGMA-logo-white.png" alt="next" />
      </div>
      <SidebarItems >
        <SidebarItemGroup>
          <SidebarItem className=" text-xl" href="/" icon={HiChartPie} >
            Dashboard
          </SidebarItem>
          <SidebarItem className=" text-xl" href="/teachers" icon={GiGraduateCap} >
            Teachers
          </SidebarItem>
          <SidebarItem className=" text-xl" href="/students" icon={BsPeopleFill} >
            Students
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
