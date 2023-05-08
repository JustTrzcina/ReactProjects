import React from "react";

import styles from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";
import headerImage from "../../assets/images/meals.jpg"

const Header = (props) =>{
    return <React.Fragment>
        <header className={styles.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={styles["main-image"]}>
            <img src={headerImage} alt="Table with food"/>
        </div>
    </React.Fragment>
}

export default Header