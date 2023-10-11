import React from 'react';
import styles from "./OurWorks.module.css"
import image1 from "./../../assets/image-removebg-preview (1).png"
import image2 from "./../../assets/image-removebg-preview (2).png"
import image3 from "./../../assets/image-removebg-preview (3).png"

const OurWorks = () => {
    return (
        <div id={"our-works"} className={styles.mainDiv}>
            <div className={styles.headerText}>
                <div className={styles.header}>
                    <h1>Our works</h1>
                </div>
                <div className={styles.description}>
                    <p>This is a phantom assembly:

                        Intel Xeon E5 2650 V2 processor (Intel Core i7 8th generation);
                        Video card: AMD Radeon RX 580 8GB;
                        RAM: 16GB DDR3
                        Drives: SSD 128GB and HDD 500GB
                        Corps: 2e Gaming Runa
                        BP: 2e Gaming 500W, serphid 80+, protection against voltage jumps, short circuit.</p>
                </div>
            </div>
            <div className={styles.images}>
                <div>
                    <img src={image1} alt={"headerImage"} className={styles.image}/>
                </div>
                <div>
                    <img src={image2} alt={"headerImage"} className={styles.image}/>
                </div>
                <div>
                    <img src={image3} alt={"headerImage"} className={styles.image}/>
                </div>
            </div>
        </div>
    );
};

export default OurWorks;