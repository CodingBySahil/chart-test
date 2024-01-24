// LineChart.js
import React, { useEffect, useState, useContext } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { GlobalContext } from "../context/GlobalContextProvider.jsx";
import { CovidCharts } from "../components";

Chart.register(CategoryScale);

const LineChart = () => {
  // import globalContext
  const { chartDataShowing, chartData } = useContext(GlobalContext);

  useEffect(() => {
    chartDataShowing();
  }, []); // Empty dependency array means this useEffect runs once, like componentDidMount

  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <div className="w-[60%]">
        <h2 className="text-4xl mb-10 font-bold text-blue-600 text-center">
          Language Popularity Comparison
        </h2>
        {/* <Line data={chartData} /> */}
        <Line data={chartData} />
      </div>

      <CovidCharts></CovidCharts>
    </div>
  );
};

export default LineChart;
