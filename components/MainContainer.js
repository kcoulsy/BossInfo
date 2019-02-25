import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
margin: 30px;
width: calc(100% - 100px);
height:  calc(100% - 100px);
background: #1d1e22;
border: 5px solid #1d1e22;
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-template-rows: 60px 1fr 1fr;
  grid-gap: 1em 1em;`

export default (props) => <MainContainer>{props.children}</MainContainer>;
