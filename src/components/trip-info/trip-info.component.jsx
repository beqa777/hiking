import React from 'react';
import { TripInfoStyle, Detail, InfoHolder } from './trip-info.styles';

const TripInfo = () => (
    <TripInfoStyle>
        <Detail primary>
            <InfoHolder>
                <div>1</div>
                <div>Days</div>
            </InfoHolder>

            <InfoHolder>
                <div>20</div>
                <div>Max Group Size</div>
            </InfoHolder>

            <InfoHolder>
                <div>Medium</div>
                <div>Difficultly</div>
            </InfoHolder>

        </Detail>

        <Detail>
            Trekking Expedition
        </Detail>

        <Detail primary>3
        </Detail>
    </TripInfoStyle>
);

export default TripInfo;