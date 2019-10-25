import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Trek from '../../trek/trek.component';
import { getTripsStart } from '../../../redux/trips/trip.actions';
import { selectTrips } from '../../../redux/trips/trip.selector';
import WithCarouselHolder from '../../carousel-holder/with-carousel-holder.component';
import Title from '../../title/title.component';
import {withTranslation} from 'react-i18next';

import { SimilarTripsStyle, SimilarTripsHolder } from './similar-trips.styles';

const SimilarTrips = ({ t, trips, getTrips, filteredSlug }) => {

    const history = useHistory(); 

    // when trips is ready
    if (trips) {
        trips = trips.filter(el => el.unic_slug !== filteredSlug);
        let randomIndex = Math.floor(Math.random() * 2);
        trips.splice(randomIndex, 1);
    }

    useEffect(() => {
        getTrips();
    }, [getTrips]);

    return (
        <SimilarTripsStyle>
            <Title title={t('descriptions.similarTrips.title')} text={t('descriptions.similarTrips.text')} />
            <SimilarTripsHolder>
                {
                    trips.map(trip => (
                        <React.Fragment key={trip.unic_slug}>
                            {
                                WithCarouselHolder(Trek)({
                                    elWidth: '42rem',
                                    elHeight: '52rem',
                                    click: () => {
                                        history.push(`/trip/${trip.unic_slug}`);
                                    },
                                    ...trip
                                })
                            }
                        </React.Fragment>
                    ))
                }
            </SimilarTripsHolder>
        </SimilarTripsStyle>
    );
};

const mapStateToProps = createStructuredSelector({
    trips: selectTrips
});

const mapDispatchToProps = dispatch => ({
    getTrips: () => dispatch(getTripsStart())
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withTranslation('common')
)(SimilarTrips);