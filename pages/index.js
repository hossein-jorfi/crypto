import React from 'react';
import { useState, useEffect } from 'react';

const index = ({ data2 }) => {

  console.log(data2);

  const data = JSON.stringify({
    post: 5726,
    author_name: 'developer test',
    author_email: 'developer@gmail.com',
    content: 'testtestest',
  });

  useEffect(() => {
    fetch('https://academy.finobit.io/index.php/wp-json/wp/v2/comments?post=4760')
      .then(res => res.json())
      .then(res2 => console.log(res2))
  })

  // useEffect(() => {
  //   fetch('https://academy.finobit.io/index.php/wp-json/wp/v2/comments', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: data,
  //   })
  //     .then(res => res.json())
  //     .then(res2 => console.log(res2))
  // }, [])

  return (
    <div className='container'>
      <h1 className='container'>test</h1>
    </div>
  );
};

export default index;

export async function getServerSideProps() {

  const parameters = {
    convert: 'USD'
  };
  const headers = {
    Accepts: 'application/json',
    'X-CMC_PRO_API_KEY': process.env.COINMARKET_API_KEY
  };


  const res = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
    method: 'GET',
    headers: headers
  })
  const data2 = await res.json()

  return {
    props: {
      data2
    }
  }
}