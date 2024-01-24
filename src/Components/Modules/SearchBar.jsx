import { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import { SearchApi } from "../Services/crypto.js";
import { FadeLoader } from "react-spinners";

function SearchBar({ currency, setCurrency, setMonySymbol }) {
  const [searched, setsearched] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loader, setLoader] = useState(true);

  const selectHandler = (event) => {
    const selectValue = event.target.value;
    setCurrency((currency) => selectValue);
    switch (selectValue) {
      case "usd":
        setMonySymbol("$");
        break;
      case "eur":
        setMonySymbol("€");
        break;
      case "jpy":
        setMonySymbol("¥");
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    const controler = new AbortController();
    // console.log(searched);
    setSearchResult([]);
    if (!searched) {
      setLoader(false);
      return;
    }
    const searchApi = async () => {
      try {
        const res = await fetch(SearchApi(searched), {
          signal: controler.signal,
        });
        const json = await res.json();
        // console.log(json.coins);
        if (json.coins) {
          setSearchResult(json.coins);
          setLoader(false);
        }
      } catch (error) {
        if (error.name === "AbbortError") {
          alert(error.message);
        }
        if (error.code == 429) {
          alert("Wrong Data for search");
        }
      }
    };
    setLoader(true);
    searchApi();
    return () => {
      controler.abort();
    };
  }, [searched]);

  return (
    <div className={styles.searchbox}>
      <input
        type="text"
        placeholder="Search"
        value={searched}
        onChange={(event) => setsearched(event.target.value)}
      />
      <select onChange={selectHandler}>
        <option value="usd" symbol="$">
          USD
        </option>
        <option value="eur" symbol="€">
          EUR
        </option>
        <option value="jpy" symbol="¥">
          JPY
        </option>
      </select>

      {(!!searchResult.length || loader) && (
        <div className={styles.resultBox}>
          {loader ? (
            <FadeLoader color="#00ff95" />
          ) : (
            <ul className={styles.list}>
              {searchResult.map((coin) => {
                return (
                  <li key={coin.id}>
                    <img src={coin.thumb} />
                    <span>{coin.name}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
