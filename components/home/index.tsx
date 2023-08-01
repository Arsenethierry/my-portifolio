import React from 'react';
import LandingPage from './landing-page';
import Projects from './projects';
import Technologies from './technologie';
import { PersonalDetails } from '../../shared/utils/types';

type Props = {
    personalDetails: PersonalDetails;
};

function HomePage({ personalDetails }: Props) {

    return (
        <div>
            <div className='overflow-x-clip'>
                <LandingPage personalDetails={personalDetails} />
                <Projects />
                <Technologies />
            </div>
        </div>
    );
}

export default HomePage;