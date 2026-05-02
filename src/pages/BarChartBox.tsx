import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "A", value: 20 },
  { name: "B", value: 40 },
  { name: "C", value: 30 },
];

export function BarChartBox() {
  return (
    <div className="bg-bgCard p-4 rounded-xl border  h-80">
      <h3 className="font-medium mb-4">Bar Chart</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}