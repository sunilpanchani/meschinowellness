import React from 'react';
import Breadcrumb from '@/Components/Breadcrumb';
import CorporateWellness from '@/Components/CorporateWellness';

export const metadata = {
    title: "Corporate Wellness - Meschino Health and Wellness",
};

const page = () => {

    return (
        <>
            <Breadcrumb title="Wellness Program" item="Corp Health" />
            <CorporateWellness />
        </>
    );
};

export default page;