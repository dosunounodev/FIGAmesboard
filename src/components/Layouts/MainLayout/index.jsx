import React from "react";
import TopBar from "../../TopBar";
import SideBar from "../../SideBar";
import Footer from "../../Footer";
import { MainContainer } from "./styles";

const MainLayout = ({ children }) => {
  return (
    <>
      <TopBar />
      <SideBar />
      <MainContainer>
        {children}
        <Footer />
      </MainContainer>
    </>
  );
};

export default MainLayout;
