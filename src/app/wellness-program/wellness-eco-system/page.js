import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import WellnessEcoSystem from '@/components/WellnessEcoSystem';

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