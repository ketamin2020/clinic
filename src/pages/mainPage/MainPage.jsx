import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Advantages from "../../components/advantages/Advantages";
import Services from "../../components/services/Services";
import Doctors from "../../components/doctors/Doctors";
import Total from "../../components/total/Total";
import Map from "../../components/maps/Map";

const MainPage = () => {
  return (
    <MainLayout>
      <Total />
      <Services />
      <Advantages />
      <Doctors />
      <Map />
    </MainLayout>
  );
};

export default MainPage;
