import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const MultiAxis = ({ color = "black" }) => {
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Line Chart - Multi Axis",
      },
      legend: {
        labels: {
          color,
         
        },
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        ticks: { color, beginAtZero: true },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        ticks: { color, beginAtZero: true },
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        ticks: { color, beginAtZero: true },
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        hoverBorderColor: "orange",
        data: labels.map(() =>

          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "#D32A33",
        backgroundColor: "#ff638555",
        yAxisID: "y",
        fontColor: "#D32A33",
        color: "rgb(255, 99, 132)",
      },

      {
        label: "Dataset 2",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "#17242E",
        backgroundColor: "#17242e53",
        yAxisID: "y1",
        color,
      },
    ],
  };
  return <Line options={options} data={data} />;
};

export default MultiAxis;
