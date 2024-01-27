import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TableCoins.module.css";

import TableRow from "./TableRow";
import { MoonLoader } from "react-spinners";

function TableCoins({
  coins,
  loader,
  monySymbol,
  setShowModal,
  SetcoinId,
  SetChartData,
  currency,
  
}) {
  return (
    <div className={styles.container}>
      {loader ? (
        <MoonLoader color="#36d786" />
      ) : (
        <table className="table table-dark table-striped ">
          <thead>
            <tr>
              <th scope="col">Coin</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">24h</th>
              <th scope="col">Total Volume</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => {
              return (
                <TableRow
                  key={coin.id}
                  coin={coin}
                  monySymbol={monySymbol}
                  setShowModal={setShowModal}
                  SetcoinId={SetcoinId}
                  SetChartData={SetChartData}
                  currency={currency}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoins;
