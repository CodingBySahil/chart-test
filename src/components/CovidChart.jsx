// In your CovidCharts.js file
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { covidData } from "../utils";

const CovidCharts = () => {
  const [chartData, setChartData] = useState(covidData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/countries?yesterday=false"
        );
        const data = await response.json();
        console.log(data[0].cases);

        const updatedData = {
          ...covidData,
          metrics: [
            {
              ...covidData.metrics[0],
              data: data.map((country) => country.cases / country.population),
            },
            {
              ...covidData.metrics[1],
              data: data.map((country) => country.deaths / country.population),
            },
          ],
        };

        console.log(updatedData);

        setChartData(updatedData);
      } catch (error) {
        console.error("Error fetching COVID-19 data:", error);
      }
    };

    fetchData();
  }, []);

  // Define chart options (customize as needed)
  const options = {
    scales: {
      x: { title: { display: true, text: "Countries" } },
      y: { title: { display: true, text: "Ratio" }, min: 0 },
    },
  };

  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <div className="w-[60%]">
        <h2 className="text-4xl mb-10 font-bold text-blue-600 text-center">
          COVID-19 Data
        </h2>
        {/* <Line data={chartData} /> */}
        <Line
          data={{
            labels: chartData.countries,
            datasets: [
              {
                label: chartData.metrics[0].name,
                data: chartData.metrics[0].data,
                backgroundColor: "rgba(75, 192, 192, 0.5)", // Customize colors as needed
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
              {
                label: chartData.metrics[1].name,
                data: chartData.metrics[1].data,
                backgroundColor: "rgba(255, 99, 132, 0.5)", // Customize colors as needed
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },
            ],
          }}
          options={options}
        />
      </div>
    </div>
  );
};

export default CovidCharts;
