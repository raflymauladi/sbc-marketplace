"use client";
import Image from "next/image";
import SidebarSeller from "../../layout/seller/page.js";

export default function SalesReport() {
  const data = {
    // options: {
    //   plugins: {
    //     legend: {
    //       display: true,
    //       label: {
    //         color: "rgb(255, 99, 132)",
    //       },
    //     },
    //   },
    // },
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "",
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <main className="flex justify-center flex-col items-center h-screen w-screen">
      <div className="flex w-full h-full gap-4">
        <div className="bg-[#87CEEB] h-full w-2/12 flex flex-col gap-4">
          <SidebarSeller value="3" />
        </div>
        <div className="w-10/12 flex justify-center items-center h-full">
          <p>Sales Report</p>
        </div>
      </div>
    </main>
  );
}
