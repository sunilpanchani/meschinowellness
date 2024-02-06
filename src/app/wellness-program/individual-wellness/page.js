import React from 'react';
import Breadcrumb from '@/Components/Breadcrumb';
import IndividualWellness from '@/Components/IndividualWellness';

export const metadata = {
  title: "Individual Wellness - Meschino Health and Wellness",
};

const page = () => {

  return (
    <>
      <Breadcrumb title="Wellness Program" item="Individual Wellness" />
      <IndividualWellness />
    </>
  );
};

export default page;