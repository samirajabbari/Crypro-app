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

function Modals({ setShowModal, chartData, monysymbol }) {
  const [type, setType] = useState("prices");
  const [data, setData] = useState([]);
  const { id, name, image, current_price, ath, market_cap } = chartData.coin;
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
  const typeHandler = (event) => {
    const type = event.target.id;
    setType(type);
  };
  return (
    <div className={styles.container}>
      <button className={styles.closed} onClick={chartHandler}>
        <FontAwesomeIcon icon={faCircleXmark} className={styles.icon} />
      </button>

      <div className={styles.chart}>
        <div className={styles.curencyInfo}>
          <img src={image} />
          <span>{name}</span>
        </div>
        <Chart data={data} type={type} />
        <div className={styles.ChangeType}>
          <button
            id={"prices"}
            onClick={typeHandler}
            style={
              type === "prices"
                ? {
                    backgroundColor: "#065031",
                    color: "white",
                  }
                : null
            }
          >
            prices
          </button>
          <button
            id={"market_caps"}
            onClick={typeHandler}
            style={
              type === "market_caps"
                ? {
                    backgroundColor: "#065031",
                    color: "white",
                  }
                : null
            }
          >
            {" "}
            market Caps
          </button>
          <button
            id={"total_volumes"}
            onClick={typeHandler}
            style={
              type === "total_volumes"
                ? {
                    backgroundColor: "#065031",
                    color: "white",
                  }
                : null
            }
          >
            total Volumes
          </button>
        </div>
        <div className={styles.detailes}>
          <div className={styles.detaile}>
            <p>Prices:</p>
            <span>
              {monysymbol}
              {current_price.toLocaleString("en-US")}
            </span>
          </div>
          <div className={styles.detaile}>
            <p>ATH:</p>
            <span>{ath}</span>
          </div>
          <div className={styles.detaile}>
            <p>Market Cap:</p>
            <span>{market_cap.toLocaleString("en-US")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modals;
