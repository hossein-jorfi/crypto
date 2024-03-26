import styles from '../../styles/SecendBanner.module.css'
import { dollerChange, formatCryptoPrice } from '@/utils/helpers';

const SecendBanner = ({ data, name, symbol }) => {

     const currentValue = data.price;
     return (
          <div className={styles.main}>
               <div className={styles.titleContainer}>
                    <p className={`${styles.title} farsi`}>نمای کلی</p>
                    <span className={styles.line}></span>
               </div>
               <span className={styles.descreption}>
                    <span>{'($)'}</span>
                    {name} ({symbol}) Price Movements
               </span>
               <div className={styles.tableContainer}>
                    <div className={`${styles.table__head} row`}>
                         <span className='col'>Period</span>
                         <span className='col text-center'>Change</span>
                         <span className='col'>Change {'(%)'}</span>
                    </div>
                    <div className={`${styles.table__row} row text-center`}>
                         <span className='col'>Today</span>
                         <span
                              className={`
                              ${data.percent_change_24h > 0 ? styles.plus : styles.minus}
                              col
                              `}
                         >
                              $ {formatCryptoPrice(
                                   dollerChange(data.percent_change_24h, currentValue)
                              )}
                         </span>
                         <span className={`${data.percent_change_24H > 0 ? styles.plus : styles.minus} col`}>
                              %{data.percent_change_24h.toFixed(2)}
                         </span>
                    </div>
                    <div className={`${styles.table__row} row text-center`}>
                         <span className='col'>7 Days</span>
                         <span className={`${data.percent_change_7d > 0 ? styles.plus : styles.minus} col`}>
                              $ {formatCryptoPrice(
                                   dollerChange(data.percent_change_7d, currentValue)
                              )}
                         </span>
                         <span className={`${data.percent_change_7d > 0 ? styles.plus : styles.minus} col`}>
                              %{data.percent_change_7d.toFixed(2)}
                         </span>
                    </div>
                    <div className={`${styles.table__row} row text-center`}>
                         <span className='col'>30 Days</span>
                         <span className={`${data.percent_change_30d > 0 ? styles.plus : styles.minus} col`}>
                              $ {formatCryptoPrice(
                                   dollerChange(data.percent_change_30d, currentValue)
                              )}
                         </span>
                         <span className={`${data.percent_change_30d > 0 ? styles.plus : styles.minus} col`}>
                              %{data.percent_change_30d.toFixed(2)}
                         </span>
                    </div>
                    <div className={`${styles.table__row} row text-center`}>
                         <span className='col'>3 Months</span>
                         <span className={`${data.percent_change_90d > 0 ? styles.plus : styles.minus} col`}>
                              $ {formatCryptoPrice(
                                   dollerChange(data.percent_change_90d, currentValue)
                              )}
                         </span>
                         <span className={`${data.percent_change_90d > 0 ? styles.plus : styles.minus} col`}>
                              %{data.percent_change_90d.toFixed(2)}
                         </span>
                    </div>
               </div>
          </div>
     );
};

export default SecendBanner;