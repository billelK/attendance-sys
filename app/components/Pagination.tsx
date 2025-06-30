"use client";

import { Pagination } from "flowbite-react";

type ComponentProps = {
  onPageChange: (page: number) => void;
  pages: number;
  currentPage: number;
};

export function Component({onPageChange, pages, currentPage}: ComponentProps) {
  
  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination currentPage={currentPage} totalPages={pages} onPageChange={onPageChange} showIcons />
    </div>
  );
}

export default Component;