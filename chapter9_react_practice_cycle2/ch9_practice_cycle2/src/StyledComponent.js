import React from 'react';
import styled, { css } from 'styled-components';

// 9.4.5 responsive design
const sizes = {
    desktop: 1024,
    tablet: 768
};

// according to above size object media query function automate creation
// ref : https://www.styled-components.com/docs/advanced#media-templates
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)};
        }
    `;
    return acc;
}, {});

const Box = styled.div`
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;

    /* 9.4.5 responsive design */
    width: 1024px;
    margin: 0 auto;
    /* @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100%;
    } */

    ${media.desktop`width: 768px;`};
    ${media.tablet`width:100%;`};
`;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 600;

    /* use & choice self.. */
    &:hover {
    background: rgba(255, 255, 255, 0.9);
    }
    /* when inverted value is true.. style apply */
    ${props =>
        props.inverted &&
        css`
            background: none;
            border: 2px solid white;
            color: white;
            &:hover {
                background: white;
                color: black;
            }
        `};
    & + button {
        margin-left: 1rem;
    }
`;

const StyledComponent = () => (
  <Box color="black">
    <Button>Hello</Button>
    <Button inverted={true}>Border only</Button>
  </Box>
);

export default StyledComponent;