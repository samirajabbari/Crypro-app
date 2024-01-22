import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <header>
        <Header />
      </header>
      {children}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
