import React from 'react';
import Image from 'next/image';
import Btc from '../../public/BTC.png'
import styles from '../../styles/NameBanner.module.css'
import { useEffect, useState } from 'react';

const NameBanner = ({ name, symbol, slug }) => {
     const [icon, setIcon] = useState('')

     // useEffect(() => {
     //      fetch(`https://api.coingecko.com/api/v3/coins/${slug}`)
     //           .then(res => res.json())
     //           .then(res => setIcon(res.image.small))
     // }, [])

     return (
          <div className={`${styles.main} d-flex justify-content-between align-items-center`}>
               <div className='d-flex align-items-center'>
                    <Image src={Btc} width='48' height='48' alt={`${name} icon`} />
                    {/* {
                         icon ? <Image
                              loader={() => icon} src={icon}
                              width='48'
                              height='48'
                              alt={`${name} icon`}
                         />
                              :
                              <span></span>
                    } */}
                    <div className='d-flex flex-column flex-md-row me-2'>
                         <span className={`${styles.name} p-0 m-0`}>
                              {name} Price
                         </span>
                         <span className={`${styles.stand} p-0 me-1 `} >
                              ({symbol})
                         </span>
                    </div>
               </div>
               {/* <div>
                    <select name="USD($)" className={styles.select}>
                         <option value="test1">{'USD($)'}</option>
                         <option value="test2">test2</option>
                         <option value="test3">test3</option>
                         <option value="test4">test4</option>
                    </select>
               </div> */}
          </div>
     );
};

export default NameBanner;