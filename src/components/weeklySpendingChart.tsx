import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const initialData = [
  { day: "Mon", Electricity: 100, Water: 125, Gas: 60 },
  { day: "Tue", Electricity: 40, Water: 170, Gas: 230 },
  { day: "Wed", Electricity: 140, Water: 125, Gas: 50 },
  { day: "Thu", Electricity: 160, Water: 190, Gas: 90 },
  { day: "Fri", Electricity: 150, Water: 125, Gas: 190 },
  { day: "Sat", Electricity: 30, Water: 250, Gas: 60 },
  { day: "Sun", Electricity: 130, Water: 80, Gas: 40 },
];

const WeeklySpendingChart: React.FC = () => {
  const [selectedData, setSelectedData] = useState<string[]>([
    "Electricity",
    "Water",
    "Gas",
  ]);
  const [timeRange, setTimeRange] = useState<string>("lastWeek");

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedData((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleTimeRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeRange(e.target.value);
  };

  const CustomYAxisTick = (props: any) => {
    const { x, y, payload } = props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={4} fontSize={12} textAnchor="end" fill="#666">
          {`${payload.value}$`}
        </text>
      </g>
    );
  };

  const CustomTooltip = (props: any) => {
    const { active, payload } = props;

    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-300 p-2 rounded">
          <p className="text-sm font-semibold">{`${payload[0].payload.day}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={`tooltip-${index}`} className="text-xs">
              <span className="font-semibold">{`${entry.dataKey}: `}</span>
              {`${entry.value}`}
            </p>
          ))}
        </div>
      );
    }

    return null;
  };

  const renderLegend = (props: any) => {
    const { payload } = props;
    return (
      <div className="flex justify-between items-center w-full pb-8 pl-6">
        <h2 className="font-bold">Spending</h2>
        <div className="flex items-center gap-8">
          <div className="flex space-x-8">
            {payload.map((entry: any, index: number) => (
              <div
                key={`item-${index}`}
                className="flex items-center space-x-2"
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: entry.color }}
                ></div>
                <span className="text-sm">{entry.value}</span>
              </div>
            ))}
          </div>
          <select
            value={timeRange}
            onChange={handleTimeRangeChange}
            className="bg-secondary rounded-lg text-sm p-1"
          >
            <option value="lastWeek">Last Week</option>
            <option value="lastMonth">Last Month</option>
            <option value="lastYear">Last Year</option>
          </select>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-background border rounded-[30px]">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={initialData}
          margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
          barCategoryGap="20%"
          barSize={8}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            axisLine={{ strokeDasharray: "3 3", stroke: "none" }}
            tickLine={false}
          />
          <YAxis
            tickCount={6}
            domain={[0, 250]}
            axisLine={false}
            tick={<CustomYAxisTick />}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={renderLegend} verticalAlign="top" />
          {selectedData.map((dataKey) => (
            <Bar
              key={dataKey}
              dataKey={dataKey}
              fill={
                dataKey === "Electricity"
                  ? "#2F21AC"
                  : dataKey === "Water"
                  ? "#FF9D00"
                  : "#FF3425"
              }
              radius={[10, 10, 0, 0]}
              isAnimationActive={false}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklySpendingChart;
