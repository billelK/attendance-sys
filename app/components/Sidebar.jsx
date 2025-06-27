
"use client";

import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo } from "flowbite-react";
import {HiChartPie} from "react-icons/hi";
import {GiGraduateCap} from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";

export default function Component() {
  return (
    <Sidebar className="h-screen w-64" aria-label="Sidebar with logo branding example">
      <div>
         <img className="h-[120px] w-[180px]" src="nextjs.png" alt="next" />
      </div>
      <SidebarItems >
        <SidebarItemGroup>
          <SidebarItem href="/" icon={HiChartPie} >
            Dashboard
          </SidebarItem>
          <SidebarItem href="/teachers" icon={GiGraduateCap} >
            Teachers
          </SidebarItem>
          <SidebarItem href="/students" icon={BsPeopleFill} >
            Students
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
