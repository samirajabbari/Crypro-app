import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./Modals.module.css";
function Chart({ type, data }) {
  return (
    <div>
      <div className={styles.graph}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width="38rem" height="24rem" data={data}>
            <Line
              type="monotone"
              stroke="#00ff95"
              dataKey={type}
              strokeWidth="1px"
            />
            <CartesianGrid stroke="#404042" />
            <YAxis dataKey={type} domain={["auto", "auto"]} />
            <XAxis dataKey="date" hide />
            <Tooltip />
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
