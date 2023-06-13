import Link from 'next/link';
import styles from '../../styles/Article.module.css'
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Article = () => {

     const [data, setData] = useState(null)

     useEffect(() => {
          const fetchBlogData = async () => {
               const blgData = await fetch(
                    'https://academy.finobit.io/index.php/wp-json/wp/v2/posts?_embed'
               );
               const blgJsnData = await blgData.json();
               const blgJsnData2 = blgJsnData.filter(item => item.id != '6833' )
               setData(blgJsnData2);
          };
          fetchBlogData();
     }, []);

     return (
          <div className='main farsi'>
               <h3>مقالات مرتبط</h3>
               <span className={styles.line}></span>
               <div className={`${styles.cardContainer} row pt-3`}>
                    {
                         data ?
                              data.map(item =>
                                   <div key={item.id} className='my-2 col-12 col-sm-6 col-md-4'>
                                        <div className={`${styles.card}`}>
                                             <Image
                                                  unoptimized
                                                  alt='article image'
                                                  loader={() => item._embedded['wp:featuredmedia']['0'].source_url}
                                                  src={item._embedded['wp:featuredmedia']['0'].source_url}
                                                  width='150'
                                                  height='100'
                                             />
                                             <span>{item.title.rendered}</span>
                                             <Link href={item.link} className={styles.link}>ادامه مطلب</Link>
                                        </div>
                                   </div>
                              )
                              : <p className='farsi'>در حال گرفتن اطلاعات...</p>
                    }
               </div>
          </div>
     );
};

export default Article;