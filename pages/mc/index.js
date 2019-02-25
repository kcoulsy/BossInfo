import React, { Component } from 'react';
import Head from '../../components/head';
import ContentContainer from '../../components/ContentContainer';
import MainContainer from '../../components/MainContainer';
import BossList from '../../components/BossList';

import { mc } from '../../data/data';

class MoltenCore extends Component {
 render() {
     return (
    <MainContainer>
    <Head title="Home" />
        <BossList bosses={mc.bosses}/>
     <ContentContainer panels={['overview', 'strategy', 'abilities', 'loot', 'tips', 'videos']}>
     {(panel, handleChange) => {
         switch(panel) {
            case 'overview':
                return <div>you are on the overview</div>
            case 'strategy':
                return <div>you are on the strategy</div>
            case 'abilities':
                return <div>you are on the abilties</div>
            case 'loot':
                return <div>you are on the loot</div>
            case 'tips':
                return <div>you are on the tips</div>
            case 'videos':
                return <div>you are on the videos</div>
            default: 
                return <div>hello where are you</div>
         }
     }}
     </ContentContainer>
     </MainContainer>)
 }
}

export default MoltenCore;