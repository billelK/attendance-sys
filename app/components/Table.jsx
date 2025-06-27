
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import {students} from "@/data/index.ts";
import { BsThreeDots } from "react-icons/bs";

export function Component() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell> </TableHeadCell>
            <TableHeadCell>Full Name</TableHeadCell>
            <TableHeadCell>STUDENT ID</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>PHone</TableHeadCell>
            <TableHeadCell>
              <span className="sr-only">Edit</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
        {students.map((student) => (
            <TableRow key={student.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell><img className="h-10 w-10 rounded-full" src={student.profile} alt={student.id} /></TableCell>
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {student.name}
                </TableCell>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell>
                <a href="">
                    <BsThreeDots/>
                </a>
                </TableCell>
            </TableRow>
        ))}
        </TableBody>
        {/* 
        <TableBody className="divide-y">
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17"
            </TableCell>
            <TableCell>Sliver</TableCell>
            <TableCell>Laptop</TableCell>
            <TableCell>$2999</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </TableCell>
            <TableCell>White</TableCell>
            <TableCell>Laptop PC</TableCell>
            <TableCell>$1999</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a>
            </TableCell>
          </TableRow>
          <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
            <TableCell>Black</TableCell>
            <TableCell>Accessories</TableCell>
            <TableCell>$99</TableCell>
            <TableCell>
              <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Edit
              </a>
            </TableCell>
          </TableRow>
        </TableBody> */}
      </Table>
    </div>
  );
}
export default Component;