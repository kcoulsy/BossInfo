import React, { Component } from 'react'
import styled from 'styled-components';

export default (props) => <BossListButton>{props.children}</BossListButton>;

const BossListButton = styled.a`
height: 50px;
flex: 0 0 50px;
margin: 10px;
color: white;
background: #26282c;
display: flex;
justify-content: center;
align-items: center;
&:hover {
    cursor: pointer;
    background: #36383f;
}`;