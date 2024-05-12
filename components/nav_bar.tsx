import React from 'react'
import styles from "../styles/navbar.module.css";

const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <div className={styles.firstSection}>
                <h1 className={styles.title}> Blog Spot. </h1>
                <nav>
                    <ul className={styles.navList}>
                        <li className={styles.navTitle}> Articles </li>
                        <li className={styles.navTitle}> Podcast </li>
                        <li className={styles.navTitle}> Talk to Us</li>
                    </ul>
                </nav>
            </div>
            <div className={styles.secondSection}>
                <button className={styles.menuButton}> <p className={styles.buttonContent}> Menu </p> </button>
            </div>
        </div>
    )
}

export default NavBar;