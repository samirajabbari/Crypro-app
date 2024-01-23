import { useEffect, useState } from "react";

//Component - Files
import TableCoins from "../Modules/TableCoins.jsx";
import { CryptoApi } from "../Services/crypto.js";
import Pagination from "../Modules/pagination.jsx";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoader(true);
    const CoinFetch = async () => {
      try {
        const res = await fetch(CryptoApi(page));
        const json = await res.json();
        setCoins(json);
        setLoader(false);
      } catch {
        console.log(err);
      }
    };
    CoinFetch();
  }, [page]);

  //Body
  return (
    <div>
      <TableCoins coins={coins} loader={loader} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
