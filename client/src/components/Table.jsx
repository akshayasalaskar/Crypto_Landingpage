import { Typography } from '@material-tailwind/react'
import React from 'react'

const Table = () => {
  return (
    
    <div class="flex mt-10 w-3/4 flex-col shadow-md">
     <Typography className='ml-20' variant="h3">Explore Markets</Typography>
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full ">
        <div class="overflow-hidden">
          <table class="min-w-full text-center text-sm font-light">
            <thead
              class="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
              <tr>
                <th scope="col" class=" px-6 py-4 text-gray-500">Trading Pair</th>
                <th scope="col" class=" px-6 py-4 text-gray-500">Last Traded Price</th>
                <th scope="col" class=" px-6 py-4 text-gray-500">24H Change%</th>
                <th scope="col" class=" px-6 py-4 text-gray-500">24 H Trading Volume</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap  px-6 py-4 font-medium">BTC/USDT</td>
                <td class="whitespace-nowrap  px-6 py-4 text-black">28.437.25</td>
                <td class="whitespace-nowrap  px-6 py-4  text-black">+0.16%</td>
                <td class="whitespace-nowrap  px-6 py-4  text-black">1,5855.99</td>
              </tr>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap  px-6 py-4 font-medium">BTC/USDT</td>
                <td class="whitespace-nowrap  px-6 py-4   text-black">28.437.25</td>
                <td class="whitespace-nowrap  px-6 py-4  text-black">+0.16%</td>
                <td class="whitespace-nowrap  px-6 py-4  text-black">1,5855.99</td>
              </tr>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap  px-6 py-4 font-medium">BTC/USDT</td>
                <td class="whitespace-nowrap  px-6 py-4   text-black">28.437.25</td>
                <td class="whitespace-nowrap  px-6 py-4  text-black">+0.16%</td>
                <td class="whitespace-nowrap  px-6 py-4  text-black">1,5855.99</td>
              </tr>
              <tr class="border-b dark:border-neutral-500">
                <td class="whitespace-nowrap  px-6 py-4 font-medium">BTC/USDT</td>
                <td class="whitespace-nowrap  px-6 py-4   text-black">28.437.25</td>
                <td class="whitespace-nowrap  px-6 py-4  text-black">+0.16%</td>
                <td class="whitespace-nowrap  px-6 py-4  text-black">1,5855.99</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Table
