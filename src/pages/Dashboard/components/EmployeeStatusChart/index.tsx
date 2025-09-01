/* eslint-disable @typescript-eslint/no-explicit-any */
// External Libraries
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// Interfaces
import type { ChartProps } from "../../../../interfaces/ChartProps";
import { Box, Typography } from "@mui/material";

const EmployeeStatusChart = (props: ChartProps) => {
  const COLORS = ["#22C55E", "#637381"];

  return (
    <Box my={4}>
      <Typography variant="h4">
        Status dos Funcionários
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={props.chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#22C55E"
            label
          >
            {props.chartData.map((_: any, index: number) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default EmployeeStatusChart;
