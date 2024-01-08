"use client"
import styles from "./style.module.css"
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return(
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <div className={styles.headerLogo}>
            <Link href="/" className={styles.headerLogoLink}>
              <Image src="/logo-cube.svg" width={24} height={24} alt="logotype" />
              <Image src="/logo-text.svg" width={79} height={13} alt="logotype"/>
            </Link>
          </div>
          <nav className={styles.headerMenu}>
            <div className={isOpen ? `${styles.headerBurgerBtn} ${styles.active}` : styles.headerBurgerBtn}
                 onClick={toggle}
            >
              <span className={styles.burgerBtnLine}></span>
              <span className={styles.burgerBtnLine}></span>
              <span className={styles.burgerBtnLine}></span>
            </div>
            <ul className={isOpen ? `${styles.headerMenuList} ${styles.active}` : styles.headerMenuList}>
              <li className={styles.headerMenuItem}>
                <Link href="#" className={styles.headerMenuLink}>Map</Link>
              </li>
              <li>
                <Link href="#" className={styles.headerMenuLink}>iLand</Link>
              </li>
              <li>
                <Link href="#" className={styles.headerMenuLink}>For brands</Link>
              </li>
              <li>
                <Link href="#" className={styles.headerMenuLink}>Whitepaper</Link>
              </li>
              <div className={styles.headerBtn + ' ' + styles.mobile}>Explore Cuberium</div>
            </ul>
          </nav>
          <div className={styles.headerBtn}>Explore Cuberium</div>
        </div>
      </div>
    </header>
  )
}

export default Header