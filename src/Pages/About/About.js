import React from 'react';
import MyLocation from '../MyLocation/MyLocation';

import PageTitle from '../Shared/PageTitle/PageTitle';

const About = () => {
    return (
        <div>
            <PageTitle title="About"></PageTitle>
            <h2>This is About us</h2>
            <MyLocation></MyLocation>
        </div>
    );
};

export default About;