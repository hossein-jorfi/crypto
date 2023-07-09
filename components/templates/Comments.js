import { useEffect, useState } from "react";
import styles from "../../styles/Comments.module.css";

const Comments = ({ symbol }) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState("");

  const dataToSend = JSON.stringify({
    post: 6833,
    author_name: name,
    author_email: "test@gmail.com",
    content: `${symbol}*${content}`,
  });
  const submitHandler = () => {
    if (!name || !content) {
      alert("وارد کردن اسم و متن کامنت الزامی است");
    } else {
      fetch("https://academy.finobit.io/index.php/wp-json/wp/v2/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: dataToSend,
      })
        .then((res) => res.json())
        .then((res2) =>
          alert("کامنت شما با موفقیت ارسال شد و پس از تایید نشان داده میشود")
        );
    }
  };

  useEffect(() => {
    fetch(
      "https://academy.finobit.io/index.php/wp-json/wp/v2/comments?post=6833"
    )
      .then((res) => res.json())
      .then((res2) => setComments(res2));
  }, []);

  const formatCommentContent = (rendered) => {
    const result = rendered.replace(/<[^>]+>/g, "").split("*");
    return result;
  };

  return (
    <>
      <div className={styles.main}>
        <h6 className="farsi">کامنت ها</h6>
        <div className="d-flex align-items-center">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="اسم"
            className={`${styles.input} farsi m-0`}
          />
          <button onClick={submitHandler} className={`${styles.button} farsi`}>
            ارسال
          </button>
        </div>
        <div>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            maxLength="280"
            className={`${styles.textArea} farsi`}
            placeholder="یه چیزی بنویس..."
          ></textarea>
        </div>
      </div>
      <div className={`${styles.commentsContainer} farsi`}>
        {/* {comments ? (
          comments.map((item) => {
            if (formatCommentContent(item.content.rendered)[0] === symbol) {
              return (
                <div key={item.id} className={styles.comment}>
                  <p className={styles.name}>{item.author_name}</p>
                  <p className={styles.areaText}>
                    {formatCommentContent(item.content.rendered)[1]}
                  </p>
                </div>
              );
            }
          })
        ) : (
          <div className={styles.comment}>
            <p className={styles.areaText}>در حال گرفتن اطلاعات</p>
          </div>
        )} */}
        <div className={styles.comment}>
          <p className={styles.name}>اسم</p>
          <p className={styles.areaText}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
        <div className={styles.comment}>
          <p className={styles.name}>اسم</p>
          <p className={styles.areaText}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
        <div className={styles.comment}>
          <p className={styles.name}>اسم</p>
          <p className={styles.areaText}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
        <div className={styles.comment}>
          <p className={styles.name}>اسم</p>
          <p className={styles.areaText}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
        <div className={styles.comment}>
          <p className={styles.name}>اسم</p>
          <p className={styles.areaText}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
      </div>
    </>
  );
};

export default Comments;
