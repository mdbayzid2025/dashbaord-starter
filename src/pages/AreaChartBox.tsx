import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", value: 30 },
  { name: "Tue", value: 50 },
  { name: "Wed", value: 40 },
  { name: "Thu", value: 70 },
  { name: "Fri", value: 60 },
];

export function AreaChartBox() {
  return (
    <div className="bg-bgCard p-4 rounded-xl border h-80">
      <h3 className="font-medium mb-4">Area Chart</h3>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data} margin={{left: 0}} >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#16a34a"
            fill="#bbf7d0"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}