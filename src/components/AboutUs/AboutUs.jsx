import React from 'react';
import styles from "./AboutUs.module.css"
import image from "../../assets/image-removebg-preview (4).png";

const AboutUs = () => {
    return (
        <div id={"about-us"} className={styles.mainDiv}>
            <div>
                <img src={image} alt={"headerImage"} className={styles.image}/>
            </div>
            <div className={styles.headerText}>
                <div className={styles.header}>
                    <h1>About us</h1>
                </div>
                <div className={styles.description}>
                    <p>We are called Limelipc. Our company consists of 3 experienced workers well versed in a PC. We are located on Sobonnaya Street Sumy.
                        So far, we have only 1 assembly in our assortment (in the future we will supplement), we can also assemble a PC to order.</p>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;