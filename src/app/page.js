import React from "react";
import Welcome from '../components/Welcome';
import Service from '../components/Service';
import Info from "@/components/Info";
import HRA from "@/components/HRA";

export const metadata = {
  title: "Meschino Health and Wellness",
};

const page = () => {

  return (
    <>
      <Welcome />
      <Service />
      <HRA />
      <Info />
    </>
  );
};

export default page;
