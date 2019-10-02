import React from 'react';
import { TripInfoStyle, Detail, InfoHolder } from './trip-info.styles';

const TripInfo = () => (
    <TripInfoStyle>
        <Detail primary>
            <InfoHolder>
                <span>1</span>
                <span>Days</span>
            </InfoHolder>

           <InfoHolder>
                <span>20</span>
                <span>Max Group Size</span>
            </InfoHolder>

            <InfoHolder>
                <span>Medium</span>
                <span>Difficultly</span>
            </InfoHolder>

        </Detail>

        <Detail>
            Trekking Expedition
        </Detail>

        <Detail primary>
            <span>Monte bianco</span>
            <span>Courmayeur, France</span>
        </Detail>
    </TripInfoStyle>
);

export default TripInfo;