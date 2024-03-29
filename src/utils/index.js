const realData = {
  languages: ["JavaScript", "Python", "Java", "C#", "C++"],
  metrics: [
    {
      name: "Popularity Index",
      data: [85, 78, 70, 65, 60], // Real-time data
    },
    {
      name: "Usage in Web Development",
      data: [90, 68, 80, 30, 42], // Real-time data
    },
    {
      name: "Community Rating",
      data: [4.7, 4.3, 4.6, 4.1, 3.8], // Real-time data
    },
    {
      name: "Job Market Demand",
      data: [80, 58, 74, 35, 48], // Real-time data
    },
  ],
};
// Assuming you have a separate file, for example, `covidData.js`

export default realData;

const covidData = {
  countries: ["USA", "India", "Brazil", "France", "Russia"],
  metrics: [
    {
      name: "Infected Ratio",
      data: [], // Updated real-time data will be fetched
    },
    {
      name: "Dead Ratio",
      data: [], // Updated real-time data will be fetched
    },
  ],
};

export { covidData };
