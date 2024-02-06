import React from "react";
import HRA from "@/Components/HRA";
import Info from "@/Components/Info";
import Service from "@/Components/Service";
import Welcome from "@/Components/Welcome";

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
