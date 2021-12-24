import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Entry from "../../components/entry/Entry";
import Advantages from "../../components/advantages/Advantages";
import Services from "../../components/services/Services";
import Doctors from "../../components/doctors/Doctors";
import Total from "../../components/total/Total";

const MainPage = () => {
  return (
    <MainLayout>
      <Entry />
      <Services />
      <Doctors />
      <Total />
      <Advantages />
    </MainLayout>
  );
};

export default MainPage;
