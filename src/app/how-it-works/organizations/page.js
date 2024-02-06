import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import Organization from '@/components/Organization';

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