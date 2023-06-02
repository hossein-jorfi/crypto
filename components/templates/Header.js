import { useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/LOGO.png'
import MenuIcon from '../../public/menu.svg'
import styles from '../../styles/Header.module.css'
import Link from 'next/link';
import styled from 'styled-components';

const Header = () => {

     const items = [
          { value: 'خانه', href: '/#' },
          { value: 'وبلاگ', href: '/#' },
          { value: 'آکادمی', href: '/#' },
          { value: 'دوره ها', href: '/#' },
     ]

     const [click, setClick] = useState(false);
     const clickHandler = () => setClick(!click);

     return (
          <nav className="navbar bg-body-tertiary fixed-top mb-5 bg-light">
               <div className="container-xxl d-flex justify-content-between justify-content-sm-start">
                    <a className="navbar-brand" href="#">
                         <Image src={Logo} alt='Finobit Logo' width='40' height='40' />
                    </a>
                    <div className='farsi w-50 d-none d-sm-flex ms-1'>
                         {items.map(item =>
                              <div key={item.value}>
                                   <Link
                                        href={item.href}
                                        className={styles.link}
                                   >
                                        {item.value}
                                   </Link>
                              </div>
                         )}
                    </div>
                    <div className='d-block d-sm-none'>
                         <Image
                              className={styles.icon}
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasNavbar"
                              src={MenuIcon}
                              alt='menu icon'
                              width='24'
                              height='24'
                         />
                         <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                              <div className="offcanvas-header">
                                   <Image src={Logo} alt='Finobit Logo' width='40' height='40' />
                                   <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                              </div>
                              <div className="offcanvas-body farsi">
                                   {items.map(item =>
                                        <div key={item.value} className='mb-4 w-100'>
                                             <Link
                                                  href={item.href}
                                                  className={styles.link2}
                                             >
                                                  {item.value}
                                             </Link>
                                        </div>
                                   )}
                              </div>
                         </div>
                    </div>
               </div>
          </nav>

     );
};

export default Header;