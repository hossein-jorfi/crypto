import styles from '../../styles/Convert.module.css'
import React, { useState } from 'react';
import { useEffect } from 'react';

const Convert = ({ symbol, quote: { USD } }) => {

     const currentPrice = USD.price;

     const [dollorPrice, setDollerPrice] = useState(51000)
     const [count, setCount] = useState('')
     const [toman, setToman] = useState(0)

     useEffect(() => {
          const finalDollar = currentPrice * count;
          const convertedValue = finalDollar * dollorPrice;
          setToman(convertedValue.toLocaleString());
     }, [count, currentPrice, dollorPrice]);

     const changeHandler = (e) => {
          setCount(e.target.value);
     };

     return (
          <div className={styles.main}>
               <div className={`${styles.nameCon} position-relative`}>
                    <p className={`${styles.title} farsi`}>تبدیل</p>
                    <span className={styles.line}></span>
               </div>
               <div className={styles.inputContainer}>
                    <input
                         onChange={changeHandler}
                         value={count}
                         type="number"
                         className={styles.input}
                         placeholder={`0.00 ${symbol}`}
                    />
               </div>
               <div className='d-flex justify-content-center align-items-center'>
                    <p className='farsi my-4'>{toman} تومن</p>
               </div>
               <button className={`${styles.button} farsi m-0`}>
                    معامله
               </button>
          </div>
     );
};

export default Convert;
