import React, { Component } from 'react';
import styled from 'styled-components';
import upperFirst from 'lodash/upperFirst';

import Button from './Button'

export default class ContentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            panel: props.panels[0]
        }
    }
    changePanel = (ev) => {
        ev.preventDefault();
        const name = ev.target.name;
        this.setState({panel: name})
    }
    render() {
        const {children, panels} = this.props;
        return (<StyledContainer>
            <MainContainer>
            {children(this.state.panel)}
            </MainContainer>
            <ButtonContainer>
                {panels.map((panel, i)=> <Button name={panel} onClick={this.changePanel} key={i}>{upperFirst(panel)}</Button>)}
            </ButtonContainer>
        </StyledContainer>)
    }
}

const StyledContainer = styled.div`
grid-area: 2 / 2 / 4 / 3;
display: flex;
flex-direction: column;
position: relative;
margin: 10px;
width: calc(100% - 20px);
height: calc(100% - 40px);
padding-bottom: 50px;
color: white;`;

const ButtonContainer = styled.div`
position: absolute;
bottom: -5px;
right: 10px;
`;

const MainContainer = styled.div`
height: 100%;
overflow-y: auto`;