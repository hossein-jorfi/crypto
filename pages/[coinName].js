import Chart from '@/components/modules/Chart';
import AboutCoin from '@/components/templates/AboutCoin';
import ChartTopBanner from '@/components/templates/ChartTopBanner';
import Convert from '@/components/templates/Convert';
import LeaderBoard from '@/components/templates/LeaderBoard';
import NameBanner from '@/components/templates/NameBanner';
import SecendBanner from '@/components/templates/SecendBanner';
import { useEffect, useState } from 'react';

const coinName = ({ data: { data }, query }) => {
     console.log(data);
     const coin_name = query.coinName.toUpperCase()
     const quote = data[coin_name].quote

     return (
          <div className='container-xxl mt-5 row' style={{ margin: '0 auto' }}>
               <div className='col-12 col-lg-9 p-0 p-lg-3'>
                    <NameBanner {...data[coin_name]} />
                    <ChartTopBanner {...data[coin_name]} />
                    <Chart coinName={coin_name} />
                    <SecendBanner data={quote.USD} />
                    <AboutCoin {...data[coin_name]} />
               </div>
               <div className='col-12 col-lg-3 p-0 p-lg-3'>
                    <Convert {...data[coin_name]} />
                    <LeaderBoard />
               </div>
          </div>
     );
};

export default coinName;

export const getServerSideProps = async ({ query }) => {

     const parameters = {
          symbol: query.coinName,
          convert: 'USD'
     };
     const headers = {
          Accepts: 'application/json',
          'X-CMC_PRO_API_KEY': process.env.COINMARKET_API_KEY
     };


     const res = await fetch(process.env.COINMARKET_URL + '?' + new URLSearchParams(parameters), {
          method: 'GET',
          headers: headers
     })
     const data = await res.json()

     return {
          props: {
               data,
               query
          }
     }
}