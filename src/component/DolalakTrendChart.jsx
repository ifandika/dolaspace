import { Chart } from "react-google-charts";


/**
 * Contains data interest people in year.
 */
export const data = [
  ["Tahun", "Jumlah Peminata Orang", "Jumlah Penari Aktif"],
  ["2020", 320, 180],
  ["2021", 410, 220],
  ["2022", 385, 210],
  ["2023", 520, 290],
  ["2024", 610, 340],
  ["2025", 575, 320],
  ["2026", 720, 410],
];


/**
 * Contains configuration for chart of increase interest in dolalak dance.
 */
export const options = {
  title: "Peminatan Minat terhadap Budaya Tari Dolalak (2020-2026)",
  subtitle: "Data mengenai peminat dan penari aktif di Kabupaten Purworejo",
  curveType: "function",
  lineWidth: 4,
  pointSize: 8,
  legend: { position: "bottom" },
  colors: ["#E8B84B", "#1A1A1A"],
  backgroundColor: "transparent",
  chartArea: { width: "85%", height: "70%" },
  hAxis: {
    title: "Tahun",
    titleTextStyle: { color: "#1A1A1A", italic: false, bold: true },
    textStyle: { color: "#1A1A1A" },
  },
  vAxis: {
    title: "Total (orang)",
    minValue: 0,
    titleTextStyle: { color: "#1A1A1A", italic: false, bold: true },
    textStyle: { color: "#1A1A1A" },
    gridlines: { color: "#E5E7EB" },
  },
  titleTextStyle: {
    color: "#1A1A1A",
    fontSize: 18,
    bold: true,
  },
  subtitleTextStyle: {
    color: "#6B7280",
    fontSize: 12,
  },
  tooltip: { isHtml: true },
};


/**
 * This is UI chart for increase interest people about dolalak dance.
 * @returns 
 */
const DolalakTrendChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border-2 border-amber-200">


      {/* UI Chart */}
      <Chart
        chartType="LineChart"
        width="100%"
        height="450px"
        data={data}
        options={options}
      />

    </div>
  );
};

export default DolalakTrendChart;