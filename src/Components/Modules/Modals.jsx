import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import React, { PureComponent, useEffect } from "react";
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
import { useState } from "react";
import { convertData } from "../../Helpers/ConvertData";
import Chart from "./Chart";

function Modals({ setShowModal, chartData }) {
  const [type, setType] = useState("prices");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (chartData) {
      const fetchData = async () => {
        const data = await convertData(chartData, type);
        setData(data);
      };
      fetchData();
    }
  }, [chartData, type]);

  const chartHandler = () => {
    // const data = convertData(chartData, type);
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <button onClick={chartHandler}>
        <FontAwesomeIcon icon={faCircleXmark} className={styles.icon} />
      </button>

      <div className={styles.chart}>
        <Chart data={data} type={type}/>
      </div>
    </div>
  );
}

export default Modals;
