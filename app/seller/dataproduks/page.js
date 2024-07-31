"use client";
import Image from "next/image";
import Link from "next/link";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import SidebarSeller from "../../layout/seller/page.js";

export default function Graphics() {
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
          <SidebarSeller value="1" />
        </div>
        <div className="w-10/12">
          <p>Data Produks</p>
          <Bar data={data} />
        </div>
      </div>
    </main>
  );
}
