import styles from '../../styles/Article.module.css'

const Article = () => {
     return (
          <div className='main farsi'>
               <h3>مقالات مرتبط</h3>
               <span className={styles.line}></span>
               <div className={`${styles.cardContainer} row pt-5`}>
                    <div className='col-12 my-2 col-sm-6 col-md'>
                         <div className={`${styles.card}`}>
                              مقاله
                         </div>
                    </div>
                    <div className='col-12 my-2 col-sm-6 col-md'>
                         <div className={`${styles.card}`}>
                              مقاله
                         </div>
                    </div>
                    <div className='col-12 my-2 col-sm-6 col-md'>
                         <div className={`${styles.card}`}>
                              مقاله
                         </div>
                    </div>
                    <div className='col-12 my-2 col-sm-6 col-md'>
                         <div className={`${styles.card}`}>
                              مقاله
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Article;