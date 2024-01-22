import React, { useState } from "react";
import styles from "./Pagination.module.css";

function Pagination() {
  const [page, setPage] = useState(1);
  const prevHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };
  const nextHandler = () => {
    if (page >= 10) return;
    setPage((page) => page + 1);
  };

  return (
    <div className={styles.container}>
      <button onClick={prevHandler}>Prev</button>
      <div className={styles.pagenumber}>
        <span
          style={
            page === 1
              ? { backgroundColor: "#057c49" }
              : { backgroundColor: "inherit" }
          }
        >
          1
        </span>
        <span>2</span>
        <span className={styles.spiliter}>...</span>
        {page > 2 && page < 9 && (
          <>
            <span>{page}</span>
            <span className={styles.spiliter}>...</span>
          </>
        )}
        <span>9</span>
        <span>10</span>
      </div>

      <button onClick={nextHandler}>next</button>
    </div>
  );
}

export default Pagination;
