import React from "react";
import Title from "../Common/Title";
import Welcome from "../Components/Welcome";
import Service from "../Components/Service";
import HRA from "../Components/HRA";
import Info from "../Components/Info";

const Home = () => {

  return (
    <>
      <Title title="Meschino Health and Wellness" />
      <Welcome />
      <Service />
      <HRA />
      <Info />
    </>
  );
};

export default Home;
