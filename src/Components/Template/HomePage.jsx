import { useEffect, useState } from "react";

//Component - Files
import TableCoins from "../Modules/TableCoins.jsx";
import { CryptoApi } from "../Services/crypto.js";
import Pagination from "../Modules/pagination.jsx";
import SearchBar from "../Modules/SearchBar.jsx";
import Modals from "../Modules/Modals.jsx";
import styles from "./HomePage.module.css";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("USD");
  const [monySymbol, setMonySymbol] = useState("$");
  const [showModal, setShowModal] = useState(false);
  const [coinId, SetcoinId] = useState([]);
  const [chartData, SetChartData] = useState([]);

  useEffect(() => {
    setLoader(true);
    const CoinFetch = async () => {
      try {
        const res = await fetch(CryptoApi(page, currency));
        const json = await res.json();
        setCoins(json);
        setLoader(false);
      } catch {
        console.log(err);
      }
    };
    CoinFetch();
  }, [page, currency]);

  //Body
  return (
    <div className={styles.container}>
      {showModal && (
        <Modals
          setShowModal={setShowModal}
          chartData={chartData}
          monysymbol={monySymbol}
        />
      )}
      <SearchBar
        currency={currency}
        setCurrency={setCurrency}
        setMonySymbol={setMonySymbol}
      />
      <TableCoins
        coins={coins}
        loader={loader}
        monySymbol={monySymbol}
        setShowModal={setShowModal}
        SetcoinId={SetcoinId}
        SetChartData={SetChartData}
        currency={currency}
      />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
