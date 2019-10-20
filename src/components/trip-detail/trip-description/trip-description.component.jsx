import React from 'react';
import Moment from 'react-moment';
import { TripDescriptionStyle, DescriptionHolder, InfoIconHolder, InfoIcon, TextHolder } from './trip-description.styles';
import Title from '../../title/title.component';
import Text from '../../text/text.component';

const TripDescription = ({ tripInfo }) => {

    const tripInfoIcons = {
        price: 'pd-icon-money',
        data: 'pd-icon-hour',
        difficultly: 'pd-icon-camp-bag',
        size: 'pd-icon-male',
        days: 'pd-icon-watch',
        distance: 'pd-icon-distance'
    };

    const tripDate = tripInfo.data.toDate();

    return (
        <TripDescriptionStyle>
            <Title title="MORE INFO" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit" />
            <DescriptionHolder>
                <InfoIconHolder>
                    {
                        Object.keys(tripInfoIcons).map(key => (
                            <InfoIcon key={key}>
                                <i className={tripInfoIcons[key]}></i>
                                <em>{key}</em>
                                <h3>{key === "data" ? (
                                    <Moment format="YYYY/MM/DD">
                                        {tripDate}
                                    </Moment>
                                ) : tripInfo[key]
                                }</h3>
                            </InfoIcon>
                        ))
                    }
                </InfoIconHolder>
                <TextHolder>
                    <Text text={tripInfo.description} style={{ textAlign: 'left' }} isHtml />
                </TextHolder>
            </DescriptionHolder>
        </TripDescriptionStyle>
    )
};

export default TripDescription;