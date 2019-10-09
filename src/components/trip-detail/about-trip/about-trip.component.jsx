import React from 'react';
import { AboutTripStyle, TripInfoHolder, TripInfo } from './about-trip.styles';
import Title from '../../title/title.component';
import Text from '../../text/text.component';

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
        </TripInfoHolder>
    </AboutTripStyle>
);

export default AboutTrip;