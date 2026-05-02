import { AreaChartBox } from "./AreaChartBox";
import { BarChartBox } from "./BarChartBox";
import { PieChartBox } from "./PieChartBox";

export default function Home() {
  return (
    <div className="space-y-6">

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Stat title="Total Projects" value="24" />
        <Stat title="Running" value="12" />
        <Stat title="Completed" value="10" />
        <Stat title="Pending" value="2" />
      </div>

      {/* CHARTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        <AreaChartBox />
        <BarChartBox />
        <PieChartBox />

      </div>

    </div>
  );
}

function Stat({ title, value }: any) {
  return (
    <div className="bg-card p-4 rounded-xl border">
      <p className="text-sm text-text-primary">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}