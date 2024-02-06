import React from 'react';
import Breadcrumb from '@/Components/Breadcrumb';
import MentalHealth from '@/Components/MentalHealth';

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