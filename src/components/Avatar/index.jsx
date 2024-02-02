import React from 'react';
import styles from './Avatar.module.scss';
import { User } from 'lucide-react';
import { avatarify } from './utils';
import classnames from 'classnames';
import { useSelector } from 'react-redux';

function Avatar({ name, url }) {
    const darkMode = useSelector((state) => state.darkMode.darkMode);
    return (
        <div
            className={classnames(styles.avatar, {
                [styles.dark]: darkMode,
            })}
            style={{
                backgroundImage: url ? `url(${url})` : '',
                backgroundSize: 'cover',
            }}
        >
            {name && !url && avatarify(name)}
            {!name && !url && <User />}
        </div>
    );
}

export default Avatar;
