import React from 'react';
import styles from '../../styles/AboutCoin.module.css'
import { formatCryptoPrice } from '@/utils/helpers';

const AboutCoin = ({ name, symbol, quote: { USD: { market_cap, market_cap_dominance, price, percent_change_24h } }, cmc_rank }) => {

     return (
          <div className='mt-5'>
               <h2 className={`${styles.title} farsi`}>
                    درباره <span className={styles.name}>{name}</span>
               </h2>
               <p className='farsi about'>
                    <span className={styles.name}>{name}</span> با نماد اختصاری <span className={styles.name}>{symbol}</span> یک ارز دیجیتال یا شکلی از دارایی دیجیتال است که با ارزش بازار حدود <span className={styles.name}>{market_cap.toLocaleString()}</span> دلار، در رتبه <span className={styles.name}>{cmc_rank}</span> بازار قرار داشته و سهم <span className={styles.name}>{market_cap_dominance}</span> درصدی از کل بازار را در اختیار دارد . هر واحد از <span className={styles.name}>{name}</span> در این لحظه با قیمت <span className={styles.name}>{formatCryptoPrice(price)}</span> دلار، با احتساب نرخ تتر ۵۱,۶۶۰ تومان معامله می شود و حجم مبادلات روزانه آن - دلار است. قیمت در ۲۴ ساعت اخیر <span className={styles.name}>{percent_change_24h.toFixed(2)}%</span> افزایش یافته است.
               </p>
          </div>
     );
};

export default AboutCoin;