import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TableCoins.module.css";

import chartDown from "../../assets/chart-down.svg";
import chartup from "../../assets/chart-up.svg";

function TableRow({
  coin: {
    symbol,
    image,
    name,
    current_price,
    price_change_percentage_24h: priceChange,
    total_volume,
  },
}) {
  return (
    <tr className={styles.trdirection}>
      <td>
        <div className={styles.coinCountainer}>
          <img src={image} alt="icon" className={styles.icon}></img>
          {symbol.toUpperCase()}
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td style={priceChange > 0 ? { color: "#008000" } : { color: "#ff4545" }}>
        {priceChange.toFixed(2)}%
      </td>
      <td>{total_volume}</td>
      <td>
        <img src={priceChange > 0 ? chartup : chartDown}></img>
      </td>
    </tr>
  );
}

export default TableRow;
