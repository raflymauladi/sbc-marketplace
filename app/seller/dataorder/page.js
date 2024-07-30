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
    <main class="flex justify-center flex-col items-center h-screen w-screen">
      <div class="flex w-full h-full gap-4">
        <div class="bg-[#87CEEB] h-full w-2/12 flex flex-col gap-4">
          <SidebarSeller value="2" />
        </div>
        <p class="text-2xl font-black mb-4 pt"> Data Order</p>{" "}
        <table class="table-fixed">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Pembeli</th>
              <th>Jumlah Pesanan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Nia Ramadhani</td>
              <td>2</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Neneng</td>
              <td>3</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sofiya</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
        <table class="table-fixed"></table>
      </div>
    </main>
  );
}
