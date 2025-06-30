
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";
import { BsPeopleFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

export function Component() {
  return (
    <Navbar  className=" w-full !bg-[#111827]" fluid rounded>
      <NavbarBrand as={Link} href="#">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">All Students</span>
      </NavbarBrand>
        <form className="flex items-center max-w-sm">   
            <label>Search</label>
            <div className="relative w-full ml-2">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <BsPeopleFill className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search student name..." required />
            </div>
            <button type="submit" className=" p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <IoIosSearch className="h-5 w-5"/>
            </button>
        </form>

    </Navbar>
  );
}

export default Component;