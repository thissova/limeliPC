import React from 'react';
import logo from "../../assets/logo.png"
import styles from './Navbar.module.css'

const Navbar = () => {
    return (<div className={styles.mainDiv}>
            <div>
                <img src={logo} alt={"logo"} className={styles.logo}/>
            </div>

            <div className={styles.breadCrumb}>
                <a href={"#home"}>Home</a>
            </div>

            <div className={styles.breadCrumb}>
                <a href={"#about-us"}>About us</a>
            </div>
            <div className={styles.breadCrumb}>
                <a href={"#our-works"}>Our works</a>
            </div>
            <div className={styles.breadCrumb}>
                <a href={"#purchase"}>Purchase now</a>
            </div>


        </div>
    );
};

export default Navbar;