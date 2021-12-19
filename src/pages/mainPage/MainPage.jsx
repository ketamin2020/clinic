import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Advantages from "../../components/advantages/Advantages";
import Services from "../../components/services/Services";

const MainPage = () => {
  return (
    <MainLayout>
      <Services />
      <Advantages />
    </MainLayout>
  );
};

export default MainPage;
