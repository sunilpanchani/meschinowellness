import React from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import Individual from '@/components/Individual';

export const metadata = {
    title: "How It Works For Individual - Meschino Health and Wellness",
};

const page = () => {

    return (
        <>
            <Breadcrumb title="How It Works" item="Individual" />
            <Individual />
        </>
    );
};

export default page;