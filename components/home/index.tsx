import React from 'react';
import LandingPage from './landing-page';
import Projects from './projects';
import { PersonalDetails } from '../../shared/utils/types';
import Skills from './technologie';

type Props = {
    personalDetails: PersonalDetails;
};

function HomePage({ personalDetails }: Props) {

    return (
        <div>
            <div className='overflow-x-clip'>
                <LandingPage personalDetails={personalDetails} />
                {/* <Projects /> */}
                <Skills />
            </div>
        </div>
    );
}

export default HomePage;