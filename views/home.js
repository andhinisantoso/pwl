import React from 'react';
import AppAbout from '../assets/components/home/about';
import AppContact from '../assets/components/home/contact';
import AppHomes from '../assets/components/home/homes';
import AppFeatures from '../assets/components/home/features';

export default function AppHome() {
    return(
        <div className="main">
            <AppHomes/>
            <AppFeatures/>
            <AppAbout/>
            <AppContact/>
        </div>
    )
}