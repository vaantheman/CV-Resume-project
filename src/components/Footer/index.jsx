import React from 'react';
import styles from './Footer.module.scss';
import classnames from 'classnames';
import { useSelector } from 'react-redux';

function Footer() {
    const darkMode = useSelector((state) => state.darkMode.darkMode);
    const today = new Date();
    return (
        <div
            className={classnames(styles.footerContainer, {
                [styles.dark]: darkMode,
            })}
        >
            &copy; Van Loc Doan {today.toLocaleDateString()}
        </div>
    );
}

export default Footer;
