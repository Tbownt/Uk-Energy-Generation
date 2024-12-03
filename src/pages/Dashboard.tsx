import React from "react";
import { useEnergyData } from "../hooks/useEnergyData";
import EnergyCard from "../components/EnergyCard";
import Loader from "../components/Loader";
import EnergyChart from "../components/EnergyChart";

const Dashboard = () => {
  const { data, loading } = useEnergyData();

  if (loading) {
    return (
      <div
        role="status"
        className="flex justify-center items-center min-h-screen"
      >
        <Loader />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center text-gray-500 mt-20">
        <p>No data available.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6 text-indigo-600 text-center">
        Power Generation in the United Kingdom
      </h1>

      <div className="flex flex-col gap-2 items-center mb-2">
        <p className="text-2xl text-slate-500">
          From: {new Date(data.data.from).toLocaleString()}
        </p>
        <p className="text-2xl text-slate-500">
          To: {new Date(data.data.to).toLocaleDateString()}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mb-6">
        <div className="lg:self-center flex-1 max-w-lg mx-auto">
          <EnergyChart data={data.data.generationmix} />
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.data.generationmix.map((source: any, index: number) => (
            <EnergyCard
              key={index}
              fuel={source.fuel}
              percentage={source.perc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
