import styles from '../../styles/SecendBanner.module.css'
import { dollerChange, formatPrice, formatCryptoPrice } from '@/utils/helpers';

const SecendBanner = ({ data }) => {
     
     const currentValue = data.price;
     return (
          <div className={styles.main}>
               <div className={styles.titleContainer}>
                    <p className={`${styles.title} farsi`}>نمای کلی</p>
                    <span className={styles.line}></span>
               </div>
               <span className={styles.descreption}>
                    <span>{'($)'}</span>
                    Bitcoin (BTC) Price Movements
               </span>
               <div className={styles.tableContainer}>
                    <div className={styles.table__head}>
                         <span>Period</span>
                         <span>Change</span>
                         <span>Change {'(%)'}</span>
                    </div>
                    <div className={styles.table__row}>
                         <span>Today</span>
                         <span className={data.percent_change_24h > 0 ? styles.plus : styles.minus}>
                              $ {formatCryptoPrice(
                                   dollerChange(data.percent_change_24h, currentValue)
                              )}
                         </span>
                         <span className={data.percent_change_24H > 0 ? styles.plus : styles.minus}>
                              %{data.percent_change_24h.toFixed(2)}
                         </span>
                    </div>
                    <div className={styles.table__row}>
                         <span>7 Days</span>
                         <span className={data.percent_change_7d > 0 ? styles.plus : styles.minus}>
                              $ {formatCryptoPrice(
                                   dollerChange(data.percent_change_7d, currentValue)
                              )}
                         </span>
                         <span className={data.percent_change_7d > 0 ? styles.plus : styles.minus}>
                              %{data.percent_change_7d.toFixed(2)}
                         </span>
                    </div>
                    <div className={styles.table__row}>
                         <span>30 Days</span>
                         <span className={data.percent_change_30d > 0 ? styles.plus : styles.minus}>
                              $ {formatCryptoPrice(
                                   dollerChange(data.percent_change_30d, currentValue)
                              )}
                         </span>
                         <span className={data.percent_change_30d > 0 ? styles.plus : styles.minus}>
                              %{data.percent_change_30d.toFixed(2)}
                         </span>
                    </div>
                    <div className={styles.table__row}>
                         <span>3 Months</span>
                         <span className={data.percent_change_90d > 0 ? styles.plus : styles.minus}>
                              $ {formatCryptoPrice(
                                   dollerChange(data.percent_change_90d, currentValue)
                              )}
                         </span>
                         <span className={data.percent_change_90d > 0 ? styles.plus : styles.minus}>
                              %{data.percent_change_90d.toFixed(2)}
                         </span>
                    </div>
               </div>
          </div>
     );
};

export default SecendBanner;