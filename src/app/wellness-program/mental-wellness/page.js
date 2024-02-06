import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import MentalHealth from '@/components/MentalHealth';

export const metadata = {
    title: "Mental Health - Meschino Health and Wellness",
};

const page = () => {

    return (
        <>
            <Breadcrumb title="Wellness Program" item="Mental Health" />
            <MentalHealth />
        </>
    );
};

export default page;