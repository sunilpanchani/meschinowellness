import React from 'react';
import Breadcrumb from '@/Components/Breadcrumb';
import WellnessEcoSystem from '@/Components/WellnessEcoSystem';

export const metadata = {
    title: "Wellness Eco-System - Meschino Health and Wellness",
};

const page = () => {

    return (
        <>
            <Breadcrumb title="Wellness Program" item="Wellness Eco-System" />
            <WellnessEcoSystem />
        </>
    );
};

export default page;