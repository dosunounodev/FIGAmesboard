import React from "react";
import TopBar from "components/TopBar";
import SideBar from "components/SideBar";
import Main from "components/Main";
import Footer from "components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <TopBar />
      <SideBar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default MainLayout;
