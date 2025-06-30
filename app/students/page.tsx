"use client";

import React,{useState} from 'react'
import Table from "@/app/components/Table";
import NavBar from "@/app/components/NavBar";
import Pagination  from '@/app/components/Pagination';
import { students } from '@/data';

const Student = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowPerPage = 10; 
  const pages = Math.ceil(students.length / rowPerPage); 

  const sliceEnd = currentPage * rowPerPage;
  const sliceStart = sliceEnd - rowPerPage;

  const studentsPerCurrentPage = students.slice(sliceStart,sliceEnd)

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className='w-full h-full flex flex-col'>
      <NavBar/>
      <div className='flex-1 '>
        <Table students={studentsPerCurrentPage}/>
      </div>
      <Pagination onPageChange={onPageChange} pages={pages} currentPage={currentPage}/>
    </div>
  )
}

export default Student
