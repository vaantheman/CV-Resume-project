import React from 'react';
import Sidebar from '../Sidebar';
import styles from './Layout.module.scss';
import classnames from 'classnames';
import { useSelector } from 'react-redux';
import Footer from '../Footer';

function Layout({ children }) {
    const darkMode = useSelector((state) => state.darkMode.darkMode);

    return (
        <div className={styles.container}>
            <div
                className={classnames(styles.sidebarContainer, {
                    [styles.dark]: darkMode,
                })}
            >
                <Sidebar />
            </div>
            <div
                className={classnames(styles.mainContentContainer, {
                    [styles.dark]: darkMode,
                })}
            >
                <div>{children}</div>

                <Footer />
            </div>
        </div>
    );
}

export default Layout;
