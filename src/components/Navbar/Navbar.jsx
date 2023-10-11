import React, {useState} from 'react';
import logo from "../../assets/logo.png"
import styles from './Navbar.module.css'
import {RiCloseLine, RiMenu3Line} from "react-icons/ri";
import classnames from "classnames";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
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
                <a href={"#purchase-footer"}>Purchase now</a>
            </div>
            <div className={styles.menu}>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>}
                {toggleMenu && (
                    <div className={classnames("scale-up-center", styles.menuBlock)}>
                        <div className={classnames(styles.menuBlockLinks)}>
                            <p><a href={"#home"}>Home</a></p>
                            <p><a href={"#about-us"}>About us</a></p>
                            <p><a href={"#our-works"}>Our works</a></p>
                            <p><a href={"#purchase-footer"}>Purchase now</a></p>
                        </div>
                    </div>
                )}
            </div>



        </div>
    );
};

export default Navbar;