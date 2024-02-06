import React from 'react';
import Breadcrumb from '@/Components/Breadcrumb';
import MeschinoHealthLiteracy from '@/Components/MeschinoHealthLiteracy';

export const metadata = {
    title: "Meschino Health Literacy - Meschino Health and Wellness",
};

const page = () => {

    return (
        <>
            <Breadcrumb title="Wellness Program" item="Meschino Health Literacy" />
            <MeschinoHealthLiteracy />
        </>
    );
};

export default page;