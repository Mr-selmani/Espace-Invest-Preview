import React from "react";

// Use the Image component when you change the output settings to normal
import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";

/**
 * ShadCN imports
 */
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";

const DashboardHeader = ({ title }) => {
  return (
    <header className="border-b sticky top-0 bg-white px-5 z-40">
      <div className="max-w-6xl mx-auto h-20 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <div className="flex items-center gap-5">
          <form className="relative mr-20 mobile:hidden">
            <CiSearch
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8BA3CB]"
            />
            <Input
              type="email"
              placeholder="Email"
              className="pl-12 bg-[#F5F7FA] border-0 rounded-full h-12 font-semibold placeholder:text-[#8BA3CB]"
            />
          </form>
          <div className="bg-[#F5F7FA] w-12 h-12 aspect-square rounded-full flex items-center justify-center cursor-pointer hover:bg-red-50 transition-all">
            <IoMdNotificationsOutline size={25} color="#FE5C73" />
          </div>
          <img
            src="/assets/images/user_sample.jpeg"
            height={40}
            width={40}
            alt="User Name"
            className="rounded-full aspect-square object-cover w-12 cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
