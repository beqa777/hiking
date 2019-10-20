import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { getTripDetailStart, getTripDetailClean } from '../../redux/trip-detail/trip-details.actions';
import { selectInfo, selectIsLoading, selectInfoError } from '../../redux/trip-detail/trip-detail.selectors';

import AboutTrip from '../../components/trip-detail/about-trip/about-trip.component';
import TripDescription from '../../components/trip-detail/trip-description/trip-description.component';
import TripGallery from '../../components/trip-detail/trip-gallery/trip-gallery.component';
import SimilarTrips from '../../components/trip-detail/similar-trips/similar-trips.component';
import { TripDetailStyle, IframeHolder } from './trip-detail.styles';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import WithFailure from '../../components/with-failure/with-failure.component';

const TripDetail = ({ getTrips, tripClean, tripInfo, isLoading}) => {

    const { tripId } = useParams();
    useEffect(() => {
        getTrips(tripId);
        // set scroll to top
        // window.scrollTo(0, 0);
        // clean on component destruction
        return () => {
            tripClean();
        };
    }, [getTrips, tripClean, tripId])

    return (
        WithSpinner(
            <TripDetailStyle>
                <AboutTrip />
                <TripDescription tripInfo={tripInfo} />
                <IframeHolder>
                    <iframe title={tripInfo.unic_slug} src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d22191.286418480635!2d6.8025366289428435!3d45.95306515645095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x47895206a5aac83d%3A0x1a904355940831b!2sLe+Br%C3%A9vent!3m2!1d45.933853899999995!2d6.8375189999999995!4m5!1s0x478953b28f1da1f9%3A0x1ee9d7d8d8b5a1b3!2sPointe+Noire+de+Pormenaz!3m2!1d45.958436!2d6.801139!5e0!3m2!1sit!2sus!4v1479291389776" width="100%" height="100%" frameBorder="0" allowFullScreen=""></iframe>
                </IframeHolder>
                <TripGallery />
                <SimilarTrips filteredSlug={tripInfo.unic_slug} />
            </TripDetailStyle>
        )({ isLoading: isLoading, elWidth: '100%', elHeight: '300rem' })
    );
};

const mapStateToProps = createStructuredSelector({
    tripInfo: selectInfo,
    isLoading: selectIsLoading,
    error: selectInfoError
});

const mapDispatchToProps = dispatch => ({
    getTrips: (slug) => dispatch(getTripDetailStart(slug)),
    tripClean: () => dispatch(getTripDetailClean())
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithFailure
)(TripDetail);  