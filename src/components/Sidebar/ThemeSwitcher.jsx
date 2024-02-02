import React, { useState } from 'react';
import styles from './ThemeSwitcher.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../slices/darkModeSlice';

function ThemeSwitcher() {
    const [isChecked, setIsChecked] = useState(false);
    const darkMode = useSelector((state) => state.darkMode.darkMode);
    const dispatch = useDispatch();

    const handleToggle = () => {
        setIsChecked(!isChecked);
        dispatch(toggle());
    };

    return (
        <>
            <label className={styles.switch}>
                <input type="checkbox" checked={isChecked} onChange={handleToggle} />
                <span className={styles.slider}></span>
            </label>
        </>
    );
}

export default ThemeSwitcher;
