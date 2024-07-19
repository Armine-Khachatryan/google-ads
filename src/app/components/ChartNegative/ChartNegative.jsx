import React from "react";
// Styles
import { Wrapper } from "./ChartNegative.styles";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: true,
      text: "Negative Keywords Added",
    },
  },
  maintainAspectRatio: false,
};

const labels = ["January"];

export const data = {
  labels,
  datasets: [
    {
      label: "Industry Benchmark",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#D32A33",
      backgroundColor: "#D32A33",
    },
    {
      label: "You",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "#17242E",
      backgroundColor: "#17242E",
    },
  ],
};

const HorizontalChart = () => {
  return (
    <Bar
      options={options}
      data={data}
      width={1117}
      height={250}
      
    />
  );
};

const ChartNegative = () => {
  return (
    <Wrapper>
      <p className="chart-info">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>

      <div className="chart-wrapper">
        <HorizontalChart />
      </div>
    </Wrapper>
  );
};

export default ChartNegative;
