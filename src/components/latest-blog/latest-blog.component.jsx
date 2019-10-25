import React from 'react';
import { LatestBlogStyle, BlogHolder, Blog, BlogInfo } from './latest-blog.style';
import BackgroundImage from '../background-image/background-image.component';
import Title from '../title/title.component';
import { withTranslation } from 'react-i18next';
import blog1 from '../../resources/images/blog/blog2.jpg';
import blog2 from '../../resources/images/blog/blog1.jpg';

const LatestBlog = ({ t }) => (
    <LatestBlogStyle>
        <Title title={t('descriptions.latestBlogs.title')} text={t('descriptions.latestBlogs.text')} />
        <BlogHolder>
            <Blog>
                <BackgroundImage elWidth="50%" elHeight="100%" imageUrl={blog1} />
                <BlogInfo>
                    <h3>adventure time</h3>
                    <span>02.11.2019</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Expedita, voluptas corporis. Maxime sapiente, adipisci laborum.
                    </p>
                    <span>More</span>
                </BlogInfo>
            </Blog>

            <Blog>
                <BackgroundImage elWidth="50%" elHeight="100%" imageUrl={blog2} />
                <BlogInfo>
                    <h3>Wild Mountain</h3>
                    <span>05.07.2019</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Expedita, voluptas corporis. Maxime sapiente, adipisci laborum.
                    </p>
                    <span>More</span>
                </BlogInfo>
            </Blog>
        </BlogHolder>

    </LatestBlogStyle>
);

export default withTranslation('common')(LatestBlog);
