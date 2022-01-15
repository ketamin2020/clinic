import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Advantages from "../../components/advantages/Advantages";
import Services from "../../components/services/Services";
import Doctors from "../../components/doctors/Doctors";
import Entry from "../../components/entry/Entry";
import Map from "../../components/maps/Map";

const MainPage = () => {
  return (
    <MainLayout>
      <Entry />
      <Services />
      <Advantages />
      <Doctors />
      <Map />
    </MainLayout>
  );
};

export default MainPage;
