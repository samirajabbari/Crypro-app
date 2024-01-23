import React, { useState } from "react";
import styles from "./Pagination.module.css";

function Pagination({ page, setPage }) {
  const prevHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };
  const nextHandler = () => {
    if (page >= 10) return;
    setPage((page) => page + 1);
  };

  const pageHandler = (event) => {
    const innerHtmlValue = event.target.innerHTML;
    setPage(parseInt(innerHtmlValue,10));
    console.log(page, innerHtmlValue);
  };

  return (
    <div className={styles.container}>
      <button
        className={page === 1 ? styles.disable : null}
        onClick={prevHandler}
      >
        Prev
      </button>
      <div className={styles.pagenumber}>
        <span
          onClick={pageHandler}
          className={page === 1 ? styles.selected : null}
        >
          1
        </span>
        <span
          onClick={pageHandler}
          className={page === 2 ? styles.selected : null}
        >
          2
        </span>
        <span onClick={pageHandler} className={styles.spiliter}>
          ...
        </span>
        {page > 2 && page < 9 && (
          <>
            <span onClick={pageHandler} className={styles.selected}>
              {page}
            </span>
            <span className={styles.spiliter}>...</span>
          </>
        )}
        <span
          onClick={pageHandler}
          className={page === 9 ? styles.selected : null}
        >
          9
        </span>
        <span
          onClick={pageHandler}
          className={page === 10 ? styles.selected : null}
        >
          10
        </span>
      </div>

      <button
        className={page === 10 ? styles.disable : null}
        onClick={nextHandler}
      >
        next
      </button>
    </div>
  );
}

export default Pagination;
