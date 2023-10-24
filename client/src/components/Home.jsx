import React from 'react'
import { NavbarWithMegaMenu } from "./Navbar";
import { CarouselDefault } from './CoinCards';
import Bitcoin from './Bitcoin';
import Table from './Table';
import { TopStories } from './TopStories';

const Home = () => {
  return (
    <div>
      <NavbarWithMegaMenu/>
      <CarouselDefault/>
      <Bitcoin/>
      <div className='flex justify-space-between  items-center'> 
      <Table/>
      <TopStories/>
      </div>
    </div>
  )
}

export default Home
