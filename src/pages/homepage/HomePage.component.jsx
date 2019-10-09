import React from 'react';
import AboutUs from '../../components/about/about-component';
import Service from '../../components/service/service.component';
import ShowcaseTreks from '../../components/showcase-treks/showcase-treks.component';
import ImageGallery from '../../components/image-gallery/image-gallery.component';
import Team from '../../components/team/team.component';
import LatestBlog from '../../components/latest-blog/latest-blog.component';

const HomePage = () => (
    <React.Fragment>
        <AboutUs />
        <Service />
        <ImageGallery elHeight='200px' />
        <ShowcaseTreks />
        <Team />
        <LatestBlog />
    </React.Fragment>
);

export default HomePage;