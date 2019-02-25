import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
background: #26282c;
border: 1px solid #979797;
padding: 10px;
font-size: 20px;
color: white;
&:hover {
  cursor: pointer;
  background: #36383f;
}`;

export default (props) => (
  <StyledButton name={props.name} onClick={props.onClick}>{props.children}</StyledButton>
);