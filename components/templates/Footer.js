import styles from "../../styles/Footer.module.css";
import Logo from "../../public/LOGO.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-light">
      <div className="container-xxl p-5">
        <div>
          <Image src={Logo} alt="Finobit Logo" height="40" />
        </div>
        <div className="farsi mt-3 d-flex flex-wrap w-100 w-sm-50 justify-content-between">
          <div>
            <span>محصولات</span>
          </div>
          <div>
            <span>یادگیری</span>
          </div>
          <div>
            <span>دسترسی</span>
          </div>
          <div>
            <span>محصولات</span>
          </div>
          <div>
            <span>یادگیری</span>
          </div>
          <div>
            <span>دسترسی</span>
          </div>
        </div>
      </div>
      <div></div>
      <div className={`${styles.nameCon} farsi d-flex justify-content-center`}>
        <Link href="https://github.com/hossein-jorfi/" className={styles.name}>
          <span>توسعه حیسن جرفی</span>
          <span className={styles.line}> | </span>
          <span className={styles.github}>Github</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
