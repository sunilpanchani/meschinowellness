import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import IndividualWellness from '@/components/IndividualWellness';

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