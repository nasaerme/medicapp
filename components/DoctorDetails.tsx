"use client";
import { useState } from "react";

const DoctorDetails = () => {
  const [isActive, setIsActive] = useState("availability");

  return (
    <div className="">
      <div className="flex items-center justify-between uppercase tracking-widest">
        <button onClick={()=>setIsActive('service')} className={isActive === 'service' ? "py-4 px-8 w-full bg-blue-600 text-white" : "border border-gray-200 py-4 px-8 w-full bg-slate-100 text-slate-800"} >
          Service Details
        </button>
        <button onClick={()=>setIsActive('availability')}  className={isActive === 'availability' ? "py-4 px-8 w-full bg-blue-600 text-white" : "border border-gray-200 py-4 px-8 w-full bg-slate-100 text-slate-800"}>
          Availability
        </button>
      </div>

      <div className="py-8 px-6">
        {isActive === "availability" ? (
          <div>Availability Details Component</div>
        ) : (
          <div>Service Details Component</div>
        )}
      </div>
    </div>
  );
};

export default DoctorDetails;
