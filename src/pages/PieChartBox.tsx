import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Done", value: 40 },
  { name: "Pending", value: 30 },
  { name: "Running", value: 30 },
];

export function PieChartBox() {
  return (
    <div className="bg-bgCard p-4 rounded-xl border  h-80">
      <h3 className="font-medium mb-4">Pie Chart</h3>

      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={data} dataKey="value" fill="#16a34a" />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}