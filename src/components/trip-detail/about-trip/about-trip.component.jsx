import React from 'react';
import { AboutTripStyle, TripInfoHolder, TripInfo, TripGuideHolder, TripGuide } from './about-trip.styles';
import Title from '../../title/title.component';
import Text from '../../text/text.component';
import BackgroundImage from '../../background-image/background-image.component';
import hiker1 from '../../../resources/images/team/hiker1.jpg';

const AboutTrip = () => (
    <AboutTripStyle>
        <TripInfoHolder>
            <TripInfo>
                <Title title="BEATIFUL TREK" text="Discover the wild nature" />

                <Text text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Vero architecto, nesciunt, modi nam reprehenderit eligendi impedit
                        perferendis consequuntur doloribus aliquid officiis ipsa id asperiores
                        eius magnam ut ducimus ipsum dolor nihil molestias commodi quasi sapiente
                        qui explicabo. Soluta, eum, quia.`}
                />
            </TripInfo>
            <TripGuideHolder>
                <TripGuide>
                    <BackgroundImage imageUrl={hiker1} elWidth="65px" elHeight="65px" />
                    <div>
                        <h3>Mountain Guide</h3>
                        <span>Name: John Doe</span>
                        <span>Nation: Italy</span>
                    </div>

                    <div>
                    </div>

                </TripGuide>
            </TripGuideHolder>
        </TripInfoHolder>
    </AboutTripStyle>
);

export default AboutTrip;