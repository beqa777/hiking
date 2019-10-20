import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { ShowcaseTreksStyle } from './showcase-treks.styles';

import Title from '../title/title.component';
import Trek from '../trek/trek.component';
import WithCarouselHolder from '../carousel-holder/with-carousel-holder.component';
import CarouselSlider from 'react-carousel-slider';

import { createStructuredSelector } from 'reselect';
import { getTripsStart } from '../../redux/trips/trip.actions';
import { selectError, selectLoading, selectTrips } from '../../redux/trips/trip.selector';
import WithFailure from '../with-failure/with-failure.component';
import WithSpinner from '../with-spinner/with-spinner.component';


const ShowcaseTreks = ({ t, elWidth, elHeight, getTrips, trips, isLoading }) => {

    //start getting images 
    useEffect(() => {
        getTrips()
    }, [getTrips])

    const history = useHistory();

    const treksData = trips.map(trip => {

        return WithCarouselHolder(Trek)({
            elWidth: '46rem',
            elHeight: '52rem',
            click: () => {
                history.push(`/trip/${trip.unic_slug}`);
            },
            ...trip
        })
    });

    return (
        WithSpinner(
            <ShowcaseTreksStyle {...{ elWidth, elHeight }}>
                <Title title={t('descriptions.trips.title')} text={t('descriptions.trips.text')} />
                <CarouselSlider
                    accEle={{ button: false }}
                    sliderBoxStyle={{
                        height: '63rem',
                        width: '100%',
                        background: '#F6F6F6'
                    }}
                    manner={{
                        autoSliding: { interval: '5s' },
                        duration: '1s'
                    }}
                    itemsStyle={{ background: '#F6F6F6' }}
                    textBoxStyle={{ background: '#F6F6F6' }}
                    slideCpnts={treksData}
                />
            </ShowcaseTreksStyle>
        )({ isLoading, height: '63rem' })
    );
}

const mapStateToProps = createStructuredSelector({
    isLoading: selectLoading,
    error: selectError,
    trips: selectTrips
});

const mapDispatchToProps = dispatch => ({
    getTrips: () => dispatch(getTripsStart())
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withTranslation('common'),
    WithFailure
)(ShowcaseTreks); 