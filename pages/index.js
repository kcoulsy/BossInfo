import React from 'react'
import Link from 'next/link'
import styled from 'styled-components';
import Head from '../components/head'
import Nav from '../components/nav'
import Card from '../components/Card';

const raid = [{
  raid: 'ony',
  title: 'Onyxia\'s Lair',
  url: '',
  imageUrl: '/static/images/ony.png'
},{
  raid: 'mc',
  title: 'Molten Core',
  url: '/mc',
  imageUrl: '/static/images/mc.png'
},{
  raid: 'bwl',
  title: 'Blackwing Lair',
  url: '',
  imageUrl: '/static/images/bwl.png'
},{
  raid: 'zg',
  title: 'Zul Gurub',
  url: '',
  imageUrl: '/static/images/zg.png'
},{
  raid: 'aq20',
  title: 'AQ 20',
  url: '',
  imageUrl: '/static/images/aq20.png'
},{
  raid: 'aq40',
  title: 'AQ 40',
  url: '',
  imageUrl: '/static/images/aq40.png'
},{
  raid: 'naxx',
  title: 'Naxxaramas',
  url: '',
  imageUrl: '/static/images/naxx.png'
},{
  raid: 'world',
  title: 'World Bosses',
  url: '',
  imageUrl: '/static/images/world.png'
},]
const Home = () => (
  <div>
    <Head title="Home" />

    <div className="hero">
      <div className="row">
      <CardContainerTitle>Raids</CardContainerTitle>
        {raid.map(raid => <Card title={raid.title} url={raid.url} imageUrl={raid.imageUrl} key={raid.raid} />)}
      </div>
    </div>

    <style jsx global>{`
      * {
        padding: 0;
        margin: 0;
        color: white;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      body {
        background: #36383f;
      }
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 910px;
        margin: 80px auto 40px;
        display: flex;
        flex-wrap: wrap;
      }
    `}</style>
  </div>
)

const CardContainerTitle = styled.h3`
font-weight: normal;
margin: 0;
width: 100%;
padding: 10px 0;
line-height: 1.15;
font-size: 43px;`;

export default Home
