import React from "react";
import "./LayoutMain.css";
import Main from "../Main";
import Footer from "../Footer";
import Header from "../Header";
import HeaderUser from "../Header/HeaderUser";

export default function LayoutMain({ children, headerUser = false }) {
  return (
    <div className="layout-main">
      {headerUser ? <HeaderUser /> : <Header />}
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
