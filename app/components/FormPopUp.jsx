
"use client";
// import { twMerge } from 'tailwind-merge';
import {
  Avatar,
  AvatarGroup,
  Button,
  Datepicker,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Label,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import { HiCalendar, HiUserAdd } from "react-icons/hi";
import { IoPersonAddSharp, IoPerson } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";


export function Component() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex items-center justify-center">
        <button onClick={() => setIsOpen(true)} type="submit" className=" p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-accent dark:hover:bg-accent dark:focus:ring-blue-800">
               <IoPersonAddSharp className="h-5 w-5" />
        </button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <DrawerHeader title="NEW STUDENT" titleIcon={IoPerson} />
        <DrawerItems>
          <form action="#">
            <div className="mb-6 mt-3">
              <Label htmlFor="FirstName" className="mb-2 block">
                First Name
              </Label>
              <TextInput id="FirstName" name="FirstName" placeholder="e.g. John" />
            </div>
            <div className="mb-6 mt-3">
              <Label htmlFor="LastName" className="mb-2 block">
                Last Name
              </Label>
              <TextInput id="LastName" name="LastName" placeholder="e.g. Doe" />
            </div>
            {/* <div className="mb-6">
              <Label htmlFor="description" className="mb-2 block">
                Description
              </Label>
              <Textarea id="description" name="description" placeholder="Write event description..." rows={4} />
            </div> */}
            <div className="mb-6 mt-3">
              <Label htmlFor="Phone" className="mb-2 block">
                Phone Number
              </Label>
              <TextInput id="Phone" name="Phone" placeholder="" />
            </div>
            <div className="mb-6 mt-3">
              <Label htmlFor="Email" className="mb-2 block">
                Email
              </Label>
              <TextInput id="Email" name="Email" placeholder="e.g. JohnDoe@gmail.com" />
            </div>
            <div className="mb-6">
              <Label htmlFor="title" className="mb-2 block">
                Date of Birth
              </Label>
              <Datepicker />
            </div>
            <Button className="w-full dark:bg-accent">
              <IoPerson className="mr-2" />
              Add student
            </Button>
          </form>
        </DrawerItems>
      </Drawer>
    </>
  );
}

export default Component