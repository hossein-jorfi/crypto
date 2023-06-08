import styles from '../../styles/Comments.module.css'

const Comments = () => {
     return (
          <>
               <div className={styles.main}>
                    <h6 className='farsi'>کامنت ها</h6>
                    <div className='d-flex align-items-center'>
                         <input
                              type="text"
                              placeholder='اسم'
                              className={`${styles.input} farsi m-0`}
                         />
                         <button className={`${styles.button} farsi`}>
                              ارسال
                         </button>
                    </div>
                    <div>
                         <textarea
                              maxLength='280'
                              className={`${styles.textArea} farsi`}
                              placeholder='یه چیزی بنویس...'
                         >

                         </textarea>
                    </div>
               </div>
               <div className={`${styles.commentsContainer} farsi`}>
                    <div className={styles.comment}>
                         <p className={styles.name}>اسم</p>
                         <p className={styles.areaText}>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                         </p>
                    </div>
                    <div className={styles.comment}>
                         <p className={styles.name}>اسم</p>
                         <p className={styles.areaText}>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                         </p>
                    </div>
                    <div className={styles.comment}>
                         <p className={styles.name}>اسم</p>
                         <p className={styles.areaText}>
                              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                         </p>
                    </div>
                    <div className={styles.comment}>
                         <p className={styles.name}>اسم</p>
                         <p className={styles.areaText}>
                              aasa
                         </p>
                    </div>
                    
               </div>
          </>
     );
};

export default Comments;