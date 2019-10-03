import styled from 'styled-components';

export const LatestBlogStyle = styled.div`
    width: 100%;
    height: 59rem;
    background-color: #F6F6F6;
    padding: 3rem;
`;

export const BlogHolder = styled.div`
    width: 110rem;
    height: 100%;
    margin: auto;
    margin-top: 20px;
`;

export const Blog = styled.div`
    margin-left: 5rem;
    box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
    width: 46rem;
    height: 35rem;
    float: left;
    div {
        float: left;
    }
`;

export const BlogInfo = styled.div`
    padding: 30px;
    height: 100%;    
    width: 50%;
    h3 {
        font-weight: 400;
        font-size: 16px;
        line-height: 34px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        margin: 0px 0 9px 0;
        color: #2F2911;
        transition: opacity .4s ease;
    }
    span {
        color: #6E6B66;
        letter-spacing: 0;
        display: inline-block;
        margin-right: 9px;
        font-weight: 400;
        transition: opacity .4s ease;
        font-family: "Trirong", serif;
        font-size: 14px;
        line-height: 24px
    }

    p {
        font-family: "Trirong", serif;
        color: #6E6B66;
        font-size: 14px;
        line-height: 24px;
        letter-spacing: 0.5px;
        font-weight: 300;
    }

    & :last-child{
        color: #CBBD9A;
        letter-spacing: 0;
        font-weight: bold;
        margin-bottom: 9px;
        margin-top: 15px !important;
        cursor: pointer;
        display: inline-block;
        margin-right: 9px;
    }
`;