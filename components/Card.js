import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';

const Card = props => (
    <Link href={props.url}>
        <CardWrapper>
        <CardImage src={props.imageUrl} />
        <CardOverlay onClick={props.handleClick}>{props.title}</CardOverlay>
        </CardWrapper>
    </Link>
);

const CardWrapper = styled.a`
padding: 0;
max-width: 300px;
height: auto;
text-align: left;
text-decoration: none;
color: #434343;
border: 1px solid #1d1e22
position: relative;
`;
const CardOverlay = styled.div`
    width: 100%;
    height: 100%;
    background: black;
    position: absolute;
    top: 0;
    opacity: 0;
    transition: opacity 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 45px;
    color: white;
    &:hover {
        opacity: 0.4;
        cursor: pointer;
    }`;

    const CardImage = styled.img`
    height: 100%`;

export default Card;