"use client";
import Image from "next/image";
import Link from "next/link";

export default function SidebarSeller({ value }) {
  //   const value = 0;
  return (
    <>
      <div class="w-full flex justify-center">
        <Image src="/cichub.png" width="150" height="150" class="px-2 py-4" />
      </div>
      <div class="flex flex-col gap-2 px-3">
        {value == 0 ? (
          <div class="cursor-pointer bg-[#038300]">Dashboard</div>
        ) : (
          <div class="cursor-pointer">Dashboard</div>
        )}
        {value == 1 ? (
          <div class="cursor-pointer bg-[#038300]">Data Produks</div>
        ) : (
          <div class="cursor-pointer">Data Produks</div>
        )}
        {value == 2 ? (
          <div class="cursor-pointer bg-[#038300]">Data Order</div>
        ) : (
          <div class="cursor-pointer">Data Order</div>
        )}
        {value == 3 ? (
          <div class="cursor-pointer bg-[#038300]"> Sales Report</div>
        ) : (
          <div class="cursor-pointer">Sales Report</div>
        )}
        {value == 4 ? (
          <div class="cursor-pointer bg-[#038300]">Grafik Sales</div>
        ) : (
          <div class="cursor-pointer">Grafik Sales</div>
        )}
      </div>
      <div class="px-3 mt-10 flex justify-center w-full">
        <div class="bg-white border-black border-solid w-full text-center rounded-md">
          Logout
        </div>
      </div>
    </>
  );
}
