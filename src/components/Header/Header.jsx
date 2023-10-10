import React from 'react';
import styles from "./Header.module.css"
import headerImage from "../../assets/image-removebg-preview (5).png"

const Header = () => {
    return (
        <div className={styles.mainDiv} id={"home"}>
            <div className={styles.headerText}>
                <div className={styles.header}>
                    <h1>Explore beyond your imagination</h1>
                </div>
                <div className={styles.description}>
                    <p>Do you play games on the old computer and you want update it?
                        LimeliPC can make a computer that will pull any games, up to Cyberpunk 2077 and more other games</p>
                </div>
            </div>
            <div>
                <img src={headerImage} alt={"headerImage"} className={styles.image}/>
            </div>
        </div>
    );
};

export default Header;