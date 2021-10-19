import React from "react";
import Link from "next/link"
import styles from "../styles/layout.module.scss"

export const NavBar = () => {
  return (
    <nav className={`${styles.nav}`}>
      <div className={`${styles.wrapper} ${styles.flex}`}>

        <div>
          <Link href="/">
            <a title="crisDevels">
              crisDevels
            </a>
          </Link>
        </div>

        <div>
          <div>
            <Link href="/about">
              <a title="about">about</a>
            </Link>
          </div>
        </div>

      </div>
      
    </nav>
  )
}