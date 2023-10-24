import React from 'react';
import { Typography } from '@material-tailwind/react';
import { Button } from "@material-tailwind/react";

const Bitcoin = () => {
  return (
    <div className='bg-blue-500 w-full h-34 mt-10 flex justify-between items-center'>
      <div className='ml-36'>
      <Typography  color='white' variant="h1">Trade Cryptocurrency With Ease</Typography>
      <Button className='mt-4' color="white">Get Started</Button>
      </div>
      <img
        className='w-36 h-36'
        src='https://w7.pngwing.com/pngs/139/617/png-transparent-bitcoin-sign-bitcoin-symbol-bitcoin-logo-bitcoin-crypto-bitcoin-coin-bitcoin-3d-icon-thumbnail.png'
        alt='Bitcoin Logo'
      />
    </div>
  );
};

export default Bitcoin;
