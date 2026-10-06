import { Chart } from "react-google-charts";


/**
 * Contains data or area and percentage.
 */
export const data = [
  ["Daerah", "Persentase"],
  ["Pituruh", 45],
  ["Bruno", 15],
  ["Loano", 10],
  ["Gebang", 25],
  ["Bagelen", 5],
];


/**
 * Contains data for percentage of interest dolalak dance in purworejo.
 */
export const options = {
  title: "Percentage of Interest",
  pieSliceText: "percentage",
  pieHole: 0.4,
  colors: ["#E8B84B", "#D4A017", "#8B6914", "#5C4A0F", "#1A1A1A"],
  legend: { position: "bottom" },
  chartArea: { width: "85%", height: "75%" },
  backgroundColor: "transparent",
  titleTextStyle: { fontSize: 16, bold: true, color: "#1A1A1A" },
};


/**
 * Return UI layout for chart dolalak dance interest.
 * @returns 
 */
const DolalakChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-amber-200">


      {/* UI Chart */}
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />

    </div>
  );
};

export default DolalakChart;