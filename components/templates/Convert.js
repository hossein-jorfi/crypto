import styles from '../../styles/Convert.module.css';
import React, { useState, useEffect, useRef } from 'react';

const Convert = ({ symbol, quote: { USD } }) => {
     const currentPrice = USD.price;
     const refC = useRef(null);
     const refT = useRef(null);

     const [dollorPrice, setDollarPrice] = useState(0);

     const [coinCount, setCoinCount] = useState('');
     const [toman, setToman] = useState('');

     useEffect(() => {
          const fetchDollerPrice = async () => {
               const res = await fetch('https://api.tetherland.com/currencies')
               const res2 = await res.json()
               setDollarPrice(+(res2.data.currencies.USDT.price))
          }
          fetchDollerPrice()
     }, [])

     useEffect(() => {
          if (document.activeElement === refC.current) {
               setToman(coinCount * currentPrice * dollorPrice)
          } else if (document.activeElement === refT.current) {
               setCoinCount((toman / dollorPrice) / currentPrice)
          }
     }, [coinCount, toman])

     const coinCountHandler = e => {
          setCoinCount(e.target.value)
     }

     const tomanHandler = e => {
          setToman(e.target.value)
     }

     return (
          <div className={styles.main}>
               <div className={`${styles.nameCon} position-relative`}>
                    <p className={`${styles.title} farsi`}>تبدیل</p>
                    <span className={styles.line}></span>
               </div>
               <div className={styles.inputContainer}>
                    {
                         dollorPrice ?
                              <>
                                   <div className={styles.inputContainer}>
                                        <input
                                             ref={refC}
                                             onChange={coinCountHandler}
                                             value={coinCount}
                                             type="text"
                                             className={styles.input}
                                             placeholder='0.00'
                                        />
                                        <span className={styles.symbol}>
                                             {symbol}
                                        </span>
                                   </div>
                                   <div className={styles.inputContainer}>
                                        <input
                                             ref={refT}
                                             onChange={tomanHandler}
                                             value={toman}
                                             type="text"
                                             className={`${styles.input} farsi`}
                                             placeholder='0.00'
                                        />
                                        <span className={`${styles.symbol} farsi`}>تومن</span>
                                   </div>
                              </>
                              :
                              <span className='farsi'>در حال دانلود...</span>
                    }
               </div>
               <button className={`${styles.button} farsi my-4`}>معامله</button>
          </div>
     );
};

export default Convert;
