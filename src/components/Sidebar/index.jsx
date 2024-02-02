import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import PersonalInformation from './PersonalInformation';
import styles from './Sidebar.module.scss';
import Avatar from '../Avatar';
import Divider from '../Divider';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import avatar from '../../assets/avatar.jpg';

function Sidebar() {
    const darkMode = useSelector((state) => state.darkMode.darkMode);

    return (
        <div className={styles.container}>
            <div className={styles.themeSwitcher}>
                <Avatar name="Van Loc Doan" url={avatar} />
                <ThemeSwitcher />
            </div>
            <Divider />
            <div className={styles.contactInfoContainer}>
                <PersonalInformation
                    name={'Van Loc Doan'}
                    age={'1666-12-11'}
                    address={{
                        street: '123 Street',
                        zip: '231 11',
                        city: 'City',
                    }}
                />
            </div>
            <Divider />
            <div className={styles.linksContainer}>
                <Link
                    className={classnames(styles.button, {
                        [styles.dark]: darkMode,
                    })}
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className={classnames(styles.button, {
                        [styles.dark]: darkMode,
                    })}
                    to="/projects"
                >
                    Projects
                </Link>
                <Link
                    className={classnames(styles.button, {
                        [styles.dark]: darkMode,
                    })}
                    to="/contact"
                >
                    Contact
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
