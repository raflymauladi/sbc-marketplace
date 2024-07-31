"use client";
import Image from "next/image";
import Link from "next/link";

export default function SidebarSeller({ value }) {
  //   const value = 0;
  return (
    <>
      <div className="w-full flex justify-center">
        <Image src="/cichub.png" width="150" height="150" className="px-2 py-4" />
      </div>
      <div className="flex flex-col gap-2 px-3">
        {value == 0 ? (
          <div className="cursor-pointer bg-[#038300]">Dashboard</div>
        ) : (
          <div className="cursor-pointer">Dashboard</div>
        )}
        {value == 1 ? (
          <div className="cursor-pointer bg-[#038300]">Data Produks</div>
        ) : (
          <div className="cursor-pointer">Data Produks</div>
        )}
        {value == 2 ? (
          <div className="cursor-pointer bg-[#038300]">Data Order</div>
        ) : (
          <div className="cursor-pointer">Data Order</div>
        )}
        {value == 3 ? (
          <div className="cursor-pointer bg-[#038300]"> Sales Report</div>
        ) : (
          <div className="cursor-pointer">Sales Report</div>
        )}
        {value == 4 ? (
          <div className="cursor-pointer bg-[#038300]">Grafik Sales</div>
        ) : (
          <div className="cursor-pointer">Grafik Sales</div>
        )}
      </div>
      <div className="px-3 mt-10 flex justify-center w-full">
        <div className="bg-white border-black border-solid w-full text-center rounded-md">
          Logout
        </div>
      </div>
    </>
  );
}
