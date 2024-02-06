import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import CorporateWellness from '@/components/CorporateWellness';

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