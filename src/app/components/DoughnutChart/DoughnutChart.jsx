import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["#D32A33", "#17242E"],
      borderColor: ["#D32A33", "#17242E"],
      borderWidth: 1,
    },
  ],
};
const DoughnutChart = () => {
  return <Doughnut data={data} />;
};

export default DoughnutChart;
