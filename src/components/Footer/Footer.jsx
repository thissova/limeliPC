import React from 'react';
import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.mainDiv} id={"purchase-footer"}>

            <div className={styles.title}>
                <h1>Order now your gaming PC</h1>
            </div>
            <a className={styles.button} href={"https://t.me/LimeliDS"} target={"_blank"}><button >Our contacts</button></a>
            <div className={styles.copyright}><p>©Limeli PC team</p></div>
        </div>
    );
};

export default Footer;