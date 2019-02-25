import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components';

export default class BossList extends Component {
  render() {
      const {bosses, selected} = this.props;
      console.log('bosses', bosses)
    return (
      <BossListContainer>
          {bosses.map((boss, i) => {
              return <Link href={boss.url} key={i}><BossListButton selected={selected === boss.name}>{boss.name}</BossListButton></Link>
          })}
      </BossListContainer>
    )
  }
}

const BossListContainer = styled.div`
grid-area: 2 / 1 / 4 / 2;
display: flex;
flex-direction: column;
overflow: hidden;
border-right: 1px solid #979797;
&:hover {
    overflow: auto;
  }`;

const BossListButton = styled.a`
height: 50px;
flex: 0 0 50px;
margin: 10px;
color: white;
background: ${props => props.selected ? '#515256' : '#26282c'};
display: flex;
justify-content: center;
align-items: center;
&:hover {
    cursor: pointer;
    background: #36383f;
}`;