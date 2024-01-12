import styles from "./style.module.css"
import Image from "next/image";
import Link from "next/link";
import Button from "@/app/components/button/Button";

import {teamItems} from "./teamItems"


export default function Team() {
  return(
    <section className={styles.team}>
      <div className="container">
        <h2 className={styles.teamTitle + " title"}>Our team</h2>
        <div className={styles.teamInner}>
          {teamItems.map((teamItem) => (
            <div className={styles.teamItem} key={teamItem.fullName}>
              <div className={styles.teamItemImg}>
                <Image src={`/${teamItem.image}.png`} className={styles.itemImg} width={126} height={126} alt={`${teamItem.fullName} image`}/>
                <Link className={styles.linkedIn} href={teamItem.socialMedia.link} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2.71429 12.9998H0V3.6665H2.71429V12.9998ZM12.6667 12.9998H9.95238V8.01397C9.95238 6.71477 9.50362 6.06797 8.61424 6.06797C7.90943 6.06797 7.46248 6.4301 7.2381 7.1553C7.2381 8.33317 7.2381 12.9998 7.2381 12.9998H4.52381C4.52381 12.9998 4.56 4.59984 4.52381 3.6665H6.66629L6.83186 5.53317H6.88795C7.44438 4.59984 8.33376 3.96704 9.55338 3.96704C10.4808 3.96704 11.2308 4.23304 11.8035 4.9013C12.3799 5.5705 12.6667 6.46837 12.6667 7.7293V12.9998Z" fill="#0F1115"/>
                    <path d="M2.66667 1.66659C2.66667 2.40259 2.06968 2.99992 1.33333 2.99992C0.596989 2.99992 -1.64073e-07 2.40259 -1.64073e-07 1.66659C-1.64073e-07 0.930585 0.596989 0.333252 1.33333 0.333252C2.06968 0.333252 2.66667 0.930585 2.66667 1.66659Z" fill="#0F1115"/>
                  </svg>
                </Link>
              </div>
              <div className={styles.teamDivider}></div>
              <h4 className={styles.teamItemName}>
                {teamItem.fullName}
              </h4>
              <p className={styles.teamItemPosition}>
                {teamItem.position}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.teamMore}>
          <Button title="See more"/>
        </div>
      </div>
    </section>
  )
}