import { useState, useRef, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow
} from 'flowbite-react';
import { BsThreeDots } from 'react-icons/bs';
import ListGroup from '@/app/components/ListGroup.jsx';

export function Component({ students }) {
  const [activeMenuId, setActiveMenuId] = useState(null);
  const menuWrapperRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuWrapperRef.current && !menuWrapperRef.current.contains(event.target)) {
        setActiveMenuId(null);
      }
    }

    if (activeMenuId !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeMenuId]);

  return (
    <div className="flex-1 my-2">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell></TableHeadCell>
            <TableHeadCell>Full Name</TableHeadCell>
            <TableHeadCell>STUDENT ID</TableHeadCell>
            <TableHeadCell>Email</TableHeadCell>
            <TableHeadCell>Phone</TableHeadCell>
            <TableHeadCell>
              <span className="sr-only">Actions</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {students.map((student) => (
            <TableRow
              key={student.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <TableCell>
                <img
                  className="h-10 w-10 rounded-full"
                  src={student.profile}
                  alt={student.id}
                />
              </TableCell>
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {student.name}
              </TableCell>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.phone}</TableCell>
              <TableCell>
                <div className="relative inline-block">
                  {/* 3 dots icon */}
                  <BsThreeDots
                    className="cursor-pointer"
                    onClick={() =>
                      setActiveMenuId((prev) =>
                        prev === student.id ? null : student.id
                      )
                    }
                  />

                  {/* Conditional menu */}
                  {activeMenuId === student.id && (
                    <div ref={menuWrapperRef}>
                      <ListGroup onClose={() => setActiveMenuId(null)} />
                    </div>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Component;
