import React, { useEffect } from 'react';

const Title = ({ title }) => {

    useEffect(() => {

        document.title = title;

        return () => {
            document.title = 'Meschino Health and Wellness';
        };

    }, [title]);

    return null;
};

export default Title;