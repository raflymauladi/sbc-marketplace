"use client";
import { Bar } from "react-chartjs-2";

import SidebarSeller from "../../layout/seller/page.js";

export default function SellerDashboard() {
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
    <main class="flex justify-center flex-col items-center h-screen w-screen">
      <div class="flex w-full h-full gap-4">
        <div class="bg-[#87CEEB] h-full w-2/12 flex flex-col gap-4">
          <SidebarSeller value="0" />
        </div>
        <div class="w-10/12">
          <p>Dashboard</p>
          <Bar data={data} />
        </div>
      </div>
    </main>
  );
}
