import { useEffect, useState } from "react";

//Component - Files
import TableCoins from "../Modules/TableCoins.jsx";
import { CryptoApi } from "../Services/crypto.js";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const CoinFetch = async () => {
      try {
        const res = await fetch(CryptoApi());
        const json = await res.json();
        setCoins(json);
        setLoader(false);
      } catch {
        console.log(err);
      }
    };
    CoinFetch();
  }, []);

  //Body
  return (
    <div>
      <TableCoins coins={coins} loader={loader} />
    </div>
  );
}

export default HomePage;
