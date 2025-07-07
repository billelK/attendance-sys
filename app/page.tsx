import StudentCard from "@/app/components/StudentCard";


export default function Home() {
  const student = {
  fullName: "Lell Man",
    studentId: "S001",
    className: "10th Grade",
    photoUrl: "/profile.jpg",
    qrData: "https://example.com/student/S001",
    schoolName: "Springfield High School",
};
  return (
    <div className=" grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p className="">DASHBOARD Work In Progress</p>
      <StudentCard student={student}/>
    </div>
  );
}
