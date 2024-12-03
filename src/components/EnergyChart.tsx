import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend);

const EnergyChart = ({ data }: EnergyChartProps) => {
  const chartData = {
    labels: data.map(
      (item) =>
        item.fuel.charAt(0).toUpperCase() +
        item.fuel.substring(1) +
        ` ${item.perc}%`
    ),
    datasets: [
      {
        label: "Percent of energy used is",
        data: data.map((item) => item.perc),
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#ffce56",
          "#4bc0c0",
          "#9966ff",
          "#ff9f40",
          "#c9cbcf",
          "#ff6384",
          "#4bc0c0",
        ],
        borderColor: "#FFFFFF",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg flex justify-center">
      <div className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
        <Doughnut
          data={chartData}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: {
                  font: {
                    weight: "bold",
                  },
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default EnergyChart;
