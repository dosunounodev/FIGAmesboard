import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default MainLayout;
