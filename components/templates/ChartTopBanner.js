import React from 'react';
import styles from '../../styles/ChartTopBanner.module.css'
import { formatPrice } from '@/utils/helpers';

const ChartTopBanner = ({ quote }) => {
     console.log(quote.USD.percent_change_24h);
     return (
          <div className={`${styles.main} my-4 d-flex align-items-baseline`}>
               <h2 className={styles.price}>$ {formatPrice(quote.USD.price)}</h2>
               <span className={styles.percent}>
                    {quote.USD.percent_change_24h.toFixed(2)}%
               </span>
               <span className={styles.day}>{'(1 day)'}</span>
          </div>
     );
};

export default ChartTopBanner;

{/* <div className={styles.times}>
                    <span className={`${styles.time}`}>24H</span>
                    <span className={`${styles.time} ${styles.active__time}`}>1W</span>
                    <span className={`${styles.time}`}>1H</span>
                    <span className={`${styles.time}`}>1M</span>
                    <span className={`${styles.time}`}>1Y</span>
                    <span className={`${styles.time}`}>3Y</span>
               </div> */}