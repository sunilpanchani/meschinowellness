import React from 'react';
import Breadcrumb from '@/Components/Breadcrumb';
import Organization from '@/Components/Organization';


export const metadata = {
    title: "How It Works For Organization - Meschino Health and Wellness",
};

const page = () => {

    return (
        <>
            <Breadcrumb title="How It Works" item="Organization" />
            <Organization />
        </>
    );
};

export default page;