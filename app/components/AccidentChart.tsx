"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Filler);

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  labels,
  datasets: [
    {
      label: "Accidents reported",
      data: [18, 23, 28, 34, 41, 39, 35, 29, 22, 27, 31, 26],
      borderColor: "#0ea5e9",
      backgroundColor: "rgba(14, 165, 233, 0.18)",
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointBackgroundColor: "#0284c7",
    },
    {
      label: "Response readiness",
      data: [78, 82, 84, 88, 90, 89, 91, 92, 90, 93, 94, 95],
      borderColor: "#9333ea",
      backgroundColor: "rgba(147, 51, 234, 0.18)",
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointBackgroundColor: "#7c3aed",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "#0f172a",
      },
    },
    tooltip: {
      mode: "index" as const,
      intersect: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#475569",
      },
      grid: {
        color: "rgba(148, 163, 184, 0.2)",
      },
    },
    y: {
      ticks: {
        color: "#475569",
      },
      grid: {
        color: "rgba(148, 163, 184, 0.2)",
      },
    },
  },
};

export default function AccidentChart() {
  return <Line options={options} data={data} />;
}
