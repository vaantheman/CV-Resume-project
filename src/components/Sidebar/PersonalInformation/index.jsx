import React from 'react';
// import Avatar from '../../Avatar'
import styles from './PersonalInformation.module.scss';

function PersonalInformation({ name, age, address }) {
    return (
        <div className={styles.container}>
            {/* <Avatar name={name} /> */}
            <div className={styles.info}>
                <span className={styles.name}>{name}</span>
                <span>{age}</span>
                <span>{address.street}</span>
                <span>{address.zip}</span>
                <span>{address.city}</span>
            </div>
        </div>
    );
}

export default PersonalInformation;
