import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { getTripDetailStart, getTripDetailClean } from '../../redux/trip-detail/trip-details.actions';
import { selectInfo } from '../../redux/trip-detail/trip-detail.selectors';

import AboutTrip from '../../components/trip-detail/about-trip/about-trip.component';

const TripDetail = ({ getTrips, tripClean, tripInfo }) => {
    console.log(tripInfo);
    
    const { tripId } = useParams();
    useEffect(() => {
        getTrips(tripId);

        // clean on component destruction
        return () => {
            tripClean();
        };
    }, [getTrips, tripClean, tripId])

    return (
        <AboutTrip />
    )
};

const mapStateToProps = createStructuredSelector({
    tripInfo: selectInfo
});

const mapDispatchToProps = dispatch => ({
    getTrips: (slug) => dispatch(getTripDetailStart(slug)),
    tripClean: () => dispatch(getTripDetailClean())
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(TripDetail);  