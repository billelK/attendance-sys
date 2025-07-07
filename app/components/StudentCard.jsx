import { IoPhonePortrait } from "react-icons/io5";
import { HiCalendar } from "react-icons/hi";
import { FaBirthdayCake } from "react-icons/fa";

export default function StudentCard({ student }) {
  const {
    fullName,
    studentId,
    className,
    photoUrl,
    qrImageUrl,
    schoolName = "Springfield High School",
  } = student;

  return (
    <div className="inline-flex rounded-lg shadow-lg overflow-hidden bg-gray-800 text-white border border-gray-700 ">
      <div className="flex flex-row items-stretch">
        {/* Left: QR Code Image */}
        <div className="flex items-center justify-center">
          <img
            src={qrImageUrl || "/qr.svg"}
            alt="QR Code"
            className="w-65 h-full object-contain rounded-l-lg rounded-tr-[12px] rounded-br-[12px]"
          />
        </div>

        {/* Right: Student Info */}
        <div className="flex flex-col items-center justify-between p-6 w-[400px] h-full">
          {/* Avatar and Info */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex gap-2 items-center mb-10">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-600">
                <img
                  src={photoUrl || "/avatar.png"}
                  alt="Avatar"
                  className="object-cover w-full h-full"
                />
              </div>
              
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold">{fullName}</h3>
                    <p className="text-sm text-gray-300">ID: {studentId}</p>
                </div>

                <div className="pl-25">
                  <img className="w-20 h-20" src="CGMA-logo-white.png" alt="" />
              </div>
            </div>
            {/* <p className="text-sm text-gray-300">Class: {className}</p> */}
            <div className="flex items-center gap-15">
              <div className="flex flex-col items-start gap-2">
                <div className="flex gap-2">   
                  <IoPhonePortrait/>
                <p className="text-sm text-gray-300">Phone Number : 0696140239</p>  
                </div>
                <div className="flex gap-2">   
                  <HiCalendar/>  
                  <p className="text-sm text-gray-300">Enrollment Date : 2025-07-06</p>
                </div>
                <div className="flex gap-2">   
                  <FaBirthdayCake/>  
                  <p className="text-sm text-gray-300">Date of Birth : 2025-07-06</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
