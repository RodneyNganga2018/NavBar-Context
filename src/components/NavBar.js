import React, {useContext} from 'react';
import MyContext from '../context/MyContext';
import styles from './NavBar.module.css';

const NavBar = (props) => {
    const context = useContext(MyContext).name;

    return (
        <div className={styles.nav}>
            <h1 className={styles.navBar}>{context}</h1>
        </div>
    )
}

export default NavBar;