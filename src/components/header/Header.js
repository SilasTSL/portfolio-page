import styles from './Header.module.css';

import React from 'react'

export const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <a href="#home" className={styles.logoImageContainer}>
                <img className={styles.logoImage} src={require("../../images/silas-logo.png")} />   
            </a>
            <div className={styles.headerLinkContainer}>
                <a href="#introduction" className={styles.headerLink}>
                    <div className={styles.headerLinkNumber}>01.</div>
                    <div>Introduction</div>
                </a>    
                <a href="#skills" className={styles.headerLink}>
                    <div className={styles.headerLinkNumber}>02.</div>
                    <div>Skills</div>
                </a>    
                <a href="#portfolio" className={styles.headerLink}>
                    <div className={styles.headerLinkNumber}>03.</div>
                    <div>Portfolio</div>
                </a>    
                <a href="#contactme" className={styles.headerLink}>
                    <div className={styles.headerLinkNumber}>04.</div>
                    <div>Contact me</div>
                </a>
            </div>
        </div>
    )
}
